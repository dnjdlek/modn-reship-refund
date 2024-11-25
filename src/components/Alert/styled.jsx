import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  z-index: 9999;
  transition: 0.2s;
  .overlay {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    z-index: -1;
    transition: 0.2s;
  }
  .container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: ${(props) => (props.width ? props.width : `298px`)};
    width: 100%;
    height: ${(props) => (props.height ? props.height : `auto`)};
    z-index: 99999;
    border-radius: 6px;
    background: #fff;
    transition: 0.2s;
    padding: 26px 15px 15px 15px;
    p {
      font-size: 18px;
      text-align: center;
      font-weight: bold;
      margin-bottom: 14px;
      display: block;
    }
    span {
      font-size: 14px;
      color: #666;
      text-align: center;
      display: block;
      line-height: 120%;
      margin-bottom: 21px;
    }
  }
  .close-btn {
    position: absolute;
    top: -14px;
    right: 14px;
    transform: translateY(-100%);
    cursor: pointer;
    padding: 6px;
  }
  .flex {
    display: flex;
    justify-content: space-between;
    gap: 8px;
    .btn {
      width: 100%;
      background: #7c5aff;
      border-radius: 6px;
      height: 46px;
      line-height: 46px;
      font-size: 14px;
      color: #fff;
      cursor: pointer;
      transition: 0.2s;
      :hover {
        opacity: 0.8;
      }
      &:last-child {
        background: #7c5aff;
        color: #fff;
      }
    }
  }
  ${(props) =>
    props.active
      ? `
      opacity: 1;
      visibility: visible;
      z-index: 999999;
      .overlay {
        opacity: 1;
        visibility: visible;
        z-index: 50;
      }
    `
      : `transition: 0s;`}
`;
