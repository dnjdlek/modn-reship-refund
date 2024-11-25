import styled from 'styled-components';

export const PopupWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 999990;

  ${(props) => {
    if (props.show) {
      return `
                display: block;
            `;
    } else {
      return `
                display: none;
            `;
    }
  }}
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) =>
    props.bgColor ? props.bgColor : `rgba(0, 0, 0, 0.4)`};
  z-index: 50;
  position: absolute;
  top: 0;
  left: 0;
  ${(props) => {
    if (props.show) {
      return `
                display: block;
            `;
    } else {
      return `
                display: none;
            `;
    }
  }}
`;

export const PopupInner = styled.div`
  max-width: 1024px;
  width: ${(props) => (props.width ? props.width : `100%`)};
  height: ${(props) => (props.height ? props.height : `636px`)};
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : ``)};
  position: relative;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  /* background: #f5f6f8; */
  background: ${(props) => (props.background ? props.background : `#f5f6f8`)};
  overflow-y: auto;
  border-radius: 10px;
  ::-webkit-scrollbar {
    display: none;
  }

  ${(props) =>
    props.full
      ? `
        max-width: 100vw;
        width: 100vw;
        height: 100%;
        border-radius: 30px;
    `
      : ``}
  ${(props) =>
    props.middle
      ? `
        position: absolute;
        bottom: -245px;
        right: -35px;
        top: initial;
        left: initial;
        max-width: 360px;
        width: 360px;
        height: 590px;
        border-radius: 30px;
    `
      : ``}
    ${(props) =>
    props.small
      ? `
        position: absolute;
        top: initial;
        left: initial;
        bottom: 50px;
        right: 126px;
        max-width: 360px;
        width: 100%;
        // height: auto;
        border-radius: 30px;
       
        transform: none;
    `
      : ``}
    @media ${(props) => props.theme.mobile} {
    width: calc(100% - 40px);
    height: calc(100% - 100px);
    max-height: ${(props) => (props.mMaxHeight ? props.mMaxHeight : ``)};

    ${(props) =>
      props.isChatbot
        ? `
			border-radius: 20px 20px 0px 0px !important;
		  `
        : ``}
    ${(props) =>
      props.full
        ? `
            max-width: 100vw;
            width: 100vw;
            height: 100%;
            border-radius: 0;
        `
        : ``}
    ${(props) =>
      props.middle
        ? `
            position: absolute;
            bottom: 0;
            top: initial;
            left: 50%;
            // max-width: 360px;
            width: calc(100%);
            max-height: 590px;
            // max-width: 100%;
            height: calc(100vh - 100px);
            border-radius: 10px;
            transform: translateX(-50%) translateY(0%);
        `
        : ``}
        ${(props) =>
      props.small
        ? `
            position: relative;
            top: 50%;
            height: 430px;
            right: 0;
            bottom: 0;
            margin: 0 auto;
            transform: translateY(-50%);
        `
        : ``}
  }
  @media (max-width: 330px) {
    height: calc(100% - 40px);
  }
`;

export const PopupClose = styled.div`
  position: relative;
  z-index: 100;
  cursor: pointer;
  .icon-close {
    position: absolute;
    top: 30px;
    right: 30px;
    color: #111;
  }
  ${(props) =>
    props.middle
      ? `
        .icon-close{
            position: absolute;
            top: 30px;
            right: 30px;
        }
    `
      : ``}
  @media ${(props) => props.theme.mobile} {
    .icon-close {
      top: 30px;
      right: 30px;
    }
    ${(props) =>
      props.small
        ? `
        .icon-close{
            display: block;
            position: absolute;
            top: 30px;
            right: 30px;
            svg{
                width: 14px;
                height: 14px;
            }
        }
    `
        : ``}
  }
`;
