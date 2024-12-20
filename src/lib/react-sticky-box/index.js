// src/index.tsx
import { useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime.js";
var getScrollParent = (node) => {
  let parent = node;
  while (parent = parent.parentElement) {
    const overflowYVal = getComputedStyle(parent, null).getPropertyValue("overflow-y");
    if (parent === document.body)
      return window;
    if (overflowYVal === "auto" || overflowYVal === "scroll" || overflowYVal === "overlay") {
      return parent;
    }
  }
  return window;
};
var isOffsetElement = (el) => el.firstChild ? el.firstChild.offsetParent === el : true;
var offsetTill = (node, target) => {
  let current = node;
  let offset = 0;
  if (!isOffsetElement(target)) {
    offset += node.offsetTop - target.offsetTop;
    target = node.offsetParent;
    offset += -node.offsetTop;
  }
  do {
    offset += current.offsetTop;
    current = current.offsetParent;
  } while (current && current !== target);
  return offset;
};
var getParentNode = (node) => {
  let currentParent = node.parentElement;
  while (currentParent) {
    const style = getComputedStyle(currentParent, null);
    if (style.getPropertyValue("display") !== "contents")
      break;
    currentParent = currentParent.parentElement;
  }
  return currentParent || window;
};
var stickyProp = null;
if (typeof CSS !== "undefined" && CSS.supports) {
  if (CSS.supports("position", "sticky"))
    stickyProp = "sticky";
  else if (CSS.supports("position", "-webkit-sticky"))
    stickyProp = "-webkit-sticky";
}
var passiveArg = false;
try {
  const opts = Object.defineProperty({}, "passive", {
    // eslint-disable-next-line getter-return
    get() {
      passiveArg = { passive: true };
    }
  });
  const emptyHandler = () => {
  };
  window.addEventListener("testPassive", emptyHandler, opts);
  window.removeEventListener("testPassive", emptyHandler, opts);
} catch (e) {
}
var getDimensions = (opts) => {
  const { el, onChange, unsubs, measure } = opts;
  if (el === window) {
    const getRect = () => ({ top: 0, left: 0, height: window.innerHeight, width: window.innerWidth });
    const mResult = measure(getRect());
    const handler = () => {
      Object.assign(mResult, measure(getRect()));
      onChange();
    };
    window.addEventListener("resize", handler, passiveArg);
    unsubs.push(() => window.removeEventListener("resize", handler));
    return mResult;
  } else {
    const mResult = measure(el.getBoundingClientRect());
    const handler = () => {
      Object.assign(mResult, measure(el.getBoundingClientRect()));
      onChange();
    };
    const ro = new ResizeObserver(handler);
    ro.observe(el);
    unsubs.push(() => ro.disconnect());
    return mResult;
  }
};
var getVerticalPadding = (node) => {
  const computedParentStyle = getComputedStyle(node, null);
  const parentPaddingTop = parseInt(computedParentStyle.getPropertyValue("padding-top"), 10);
  const parentPaddingBottom = parseInt(computedParentStyle.getPropertyValue("padding-bottom"), 10);
  return { top: parentPaddingTop, bottom: parentPaddingBottom };
};
var setup = (node, unsubs, opts) => {
  const { bottom, offsetBottom, offsetTop } = opts;
  const scrollPane = getScrollParent(node);
  let isScheduled = false;
  const scheduleOnLayout = () => {
    if (!isScheduled) {
      requestAnimationFrame(() => {
        const nextMode = onLayout();
        if (nextMode !== mode) {
          changeMode(nextMode);
        } else if (nextMode === 1 /* stickyBottom */ && !bottom) {
          const { height: viewPortHeight } = scrollPaneDims;
          const { height: nodeHeight } = nodeDims;
          node.style.top = `${viewPortHeight - nodeHeight - offsetBottom}px`;
        } else if (nextMode === 2 /* relative */) {
          const { height: viewPortHeight, offsetTop: scrollPaneOffset } = scrollPaneDims;
          const { height: parentHeight, naturalTop } = parentDims;
          const { height: nodeHeight } = nodeDims;
          const relativeOffset2 = Math.max(
            0,
            scrollPaneOffset + latestScrollY + viewPortHeight - (naturalTop + nodeHeight + offsetBottom)
          );
          if (bottom) {
            const nextBottom = Math.max(0, parentHeight - nodeHeight - relativeOffset2);
            node.style.bottom = `${nextBottom}px`;
          } else {
            node.style.top = `${relativeOffset2}px`;
          }
        }
        isScheduled = false;
      });
    }
    isScheduled = true;
  };
  let latestScrollY = scrollPane === window ? window.scrollY : scrollPane.scrollTop;
  const isBoxTooLow = (scrollY) => {
    const { offsetTop: scrollPaneOffset, height: viewPortHeight } = scrollPaneDims;
    const { naturalTop } = parentDims;
    const { height: nodeHeight } = nodeDims;
    if (scrollY + scrollPaneOffset + viewPortHeight >= naturalTop + nodeHeight + relativeOffset + offsetBottom) {
      return true;
    }
    return false;
  };
  const onLayout = () => {
    const { height: viewPortHeight } = scrollPaneDims;
    const { height: nodeHeight } = nodeDims;
    if (nodeHeight + offsetTop + offsetBottom <= viewPortHeight) {
      return 3 /* small */;
    } else {
      if (isBoxTooLow(latestScrollY)) {
        return 1 /* stickyBottom */;
      } else {
        return 2 /* relative */;
      }
    }
  };
  const scrollPaneIsOffsetEl = scrollPane !== window && isOffsetElement(scrollPane);
  const scrollPaneDims = getDimensions({
    el: scrollPane,
    onChange: scheduleOnLayout,
    unsubs,
    measure: ({ height, top }) => ({
      height,
      offsetTop: scrollPaneIsOffsetEl ? top : 0
    })
  });
  const parentNode = getParentNode(node);
  const parentPaddings = parentNode === window ? { top: 0, bottom: 0 } : getVerticalPadding(parentNode);
  const parentDims = getDimensions({
    el: parentNode,
    onChange: scheduleOnLayout,
    unsubs,
    measure: ({ height }) => ({
      height: height - parentPaddings.top - parentPaddings.bottom,
      naturalTop: parentNode === window ? 0 : offsetTill(parentNode, scrollPane) + parentPaddings.top + scrollPaneDims.offsetTop
    })
  });
  const nodeDims = getDimensions({
    el: node,
    onChange: scheduleOnLayout,
    unsubs,
    measure: ({ height }) => ({ height })
  });
  let relativeOffset = 0;
  let mode = onLayout();
  const changeMode = (newMode) => {
    const prevMode = mode;
    mode = newMode;
    if (prevMode === 2 /* relative */)
      relativeOffset = -1;
    if (newMode === 3 /* small */) {
      node.style.position = stickyProp;
      if (bottom) {
        node.style.bottom = `${offsetBottom}px`;
      } else {
        node.style.top = `${offsetTop}px`;
      }
      return;
    }
    const { height: viewPortHeight, offsetTop: scrollPaneOffset } = scrollPaneDims;
    const { height: parentHeight, naturalTop } = parentDims;
    const { height: nodeHeight } = nodeDims;
    if (newMode === 2 /* relative */) {
      node.style.position = "relative";
      relativeOffset = prevMode === 0 /* stickyTop */ ? Math.max(0, scrollPaneOffset + latestScrollY - naturalTop + offsetTop) : Math.max(
        0,
        scrollPaneOffset + latestScrollY + viewPortHeight - (naturalTop + nodeHeight + offsetBottom)
      );
      if (bottom) {
        const nextBottom = Math.max(0, parentHeight - nodeHeight - relativeOffset);
        node.style.bottom = `${nextBottom}px`;
      } else {
        node.style.top = `${relativeOffset}px`;
      }
    } else {
      node.style.position = stickyProp;
      if (newMode === 1 /* stickyBottom */) {
        if (bottom) {
          node.style.bottom = `${offsetBottom}px`;
        } else {
          node.style.top = `${viewPortHeight - nodeHeight - offsetBottom}px`;
        }
      } else {
        if (bottom) {
          node.style.bottom = `${viewPortHeight - nodeHeight - offsetBottom}px`;
        } else {
          node.style.top = `${offsetTop}px`;
        }
      }
    }
  };
  changeMode(mode);
  const onScroll = (scrollY) => {
    if (scrollY === latestScrollY)
      return;
    const scrollDelta = scrollY - latestScrollY;
    latestScrollY = scrollY;
    if (mode === 3 /* small */)
      return;
    const { offsetTop: scrollPaneOffset, height: viewPortHeight } = scrollPaneDims;
    const { naturalTop, height: parentHeight } = parentDims;
    const { height: nodeHeight } = nodeDims;
    if (scrollDelta > 0) {
      if (mode === 0 /* stickyTop */) {
        if (scrollY + scrollPaneOffset + offsetTop > naturalTop) {
          const topOffset = Math.max(0, scrollPaneOffset + latestScrollY - naturalTop + offsetTop);
          if (scrollY + scrollPaneOffset + viewPortHeight <= naturalTop + nodeHeight + topOffset + offsetBottom) {
            changeMode(2 /* relative */);
          } else {
            changeMode(1 /* stickyBottom */);
          }
        }
      } else if (mode === 2 /* relative */) {
        if (isBoxTooLow(scrollY))
          changeMode(1 /* stickyBottom */);
      }
    } else {
      if (mode === 1 /* stickyBottom */) {
        if (scrollPaneOffset + scrollY + viewPortHeight < naturalTop + parentHeight + offsetBottom) {
          const bottomOffset = Math.max(
            0,
            scrollPaneOffset + latestScrollY + viewPortHeight - (naturalTop + nodeHeight + offsetBottom)
          );
          if (scrollPaneOffset + scrollY + offsetTop >= naturalTop + bottomOffset) {
            changeMode(2 /* relative */);
          } else {
            changeMode(0 /* stickyTop */);
          }
        }
      } else if (mode === 2 /* relative */) {
        if (scrollPaneOffset + scrollY + offsetTop < naturalTop + relativeOffset) {
          changeMode(0 /* stickyTop */);
        }
      }
    }
  };
  const handleScroll = scrollPane === window ? () => onScroll(window.scrollY) : () => onScroll(scrollPane.scrollTop);
  scrollPane.addEventListener("scroll", handleScroll, passiveArg);
  scrollPane.addEventListener("mousewheel", handleScroll, passiveArg);
  unsubs.push(
    () => scrollPane.removeEventListener("scroll", handleScroll),
    () => scrollPane.removeEventListener("mousewheel", handleScroll)
  );
};
var useStickyBox = ({
  offsetTop = 0,
  offsetBottom = 0,
  bottom = false
} = {}) => {
  const [node, setNode] = useState(null);
  useEffect(() => {
    if (!node || !stickyProp)
      return;
    const unsubs = [];
    setup(node, unsubs, { offsetBottom, offsetTop, bottom });
    return () => {
      unsubs.forEach((fn) => fn());
    };
  }, [node, offsetBottom, offsetTop, bottom]);
  return setNode;
};
var StickyBox = (props) => {
  const { offsetTop, offsetBottom, bottom, children, className, style } = props;
  const ref = useStickyBox({ offsetTop, offsetBottom, bottom });
  return /* @__PURE__ */ jsx("div", { className, style, ref, children });
};
var src_default = StickyBox;
export {
  src_default as default,
  useStickyBox
};
