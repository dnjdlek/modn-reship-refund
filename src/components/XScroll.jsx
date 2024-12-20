import { useRef, useEffect } from "react";

export function useXScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", onWheel, false);
      return () => el.removeEventListener("wheel", onWheel, false);
    }
  }, []);
  return elRef;
}