import React from 'react';
import { PopupWrapper, Overlay, PopupInner, PopupClose } from './styled';

const closeIcon = (
  <svg xmlns="close.svg" width="21" height="21" viewBox="0 0 18 18">
    <path
      d="M13 5c.364 0 .659.295.659.659l-.001 7.682h7.683c.364 0 .659.295.659.659 0 .364-.295.659-.659.659l-7.683-.001v7.683c0 .364-.294.659-.658.659-.364 0-.659-.295-.659-.659v-7.683H4.659C4.295 14.659 4 14.365 4 14c0-.364.295-.659.659-.659h7.682V5.659c0-.364.295-.659.659-.659z"
      transform="translate(-29 -18) translate(23 11) rotate(45 13 14)"
    />
  </svg>
);

const Popup = ({
  show,
  onClose,
  full,
  middle,
  small,
  width,
  height,
  maxHeight,
  bgColor,
  children,
  isChatbot,
  mMaxHeight,
  background
}) => {
  return (
    <PopupWrapper show={show}>
      <Overlay show={show} onClick={onClose} bgColor={bgColor} />
      <PopupInner
        show={show}
        full={full}
        middle={middle}
        small={small}
        width={width}
        height={height}
        maxHeight={maxHeight}
        isChatbot={isChatbot}
        mMaxHeight={mMaxHeight}
        background={background}
      >
        <PopupClose full={full} middle={middle} small={small}>
          <div onClick={onClose} className="icon-close">
            {closeIcon}
          </div>
        </PopupClose>
        {children}
      </PopupInner>
    </PopupWrapper>
  );
};

export default Popup;
