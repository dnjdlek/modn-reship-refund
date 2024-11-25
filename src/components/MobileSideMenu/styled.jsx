import styled from 'styled-components';
// import {Link} from 'react-router-dom';
import Link from 'next/link';

export const SideMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1;
  transition: 0.3s;
  z-index: 999;
  /* padding-bottom: 320px; */

  .child.active .s-sub {
    color: #7c5aff !important;
  }

  .line {
    border-top: 1px solid #c2c2c2;
  }

  .box {
    margin: 28px 0 0 0;
    padding-top: 28px;
    border-top: 1px solid #eee;
    p {
      font-size: 13px;
      font-weight: 500;
      margin-bottom: 12px;
    }
  }
  .lately {
    max-width: 220px;
    margin-top: 20px;
    padding-right: 0;
    padding-left: 10px;
    position: relative;
    z-index: -9;
    .product-m {
      width: 87px !important;
      height: 87px;
      border-radius: 10px;
      background: #f6f7f8;
      .pro-item {
        width: 100%;
        height: 100%;
        background-size: 75%;
        background-repeat: no-repeat;
        background-position: center;
      }
      p {
        font-size: 13px;
        font-weight: 500;
        line-height: 140%;
        letter-spacing: -0.26px;
        margin-top: 7px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
    }
  }
  .slick-slide {
    padding: 0 6px;
    /* width: 97px !important; */
  }
  .slick-prev {
    background-image: url(/images/lately-arrow.svg);
    background-repeat: no-repeat;
    transform: rotate(180deg);
    left: -30px;
    top: 25%;
    &::before {
      display: none;
    }
  }
  .slick-next {
    background-image: url(/images/lately-arrow.svg);
    background-repeat: no-repeat;
    right: -30px;
    top: 35%;
    &::before {
      display: none;
    }
  }
  /* .lately {
    display: flex;
    flex-wrap: wrap;
    padding-right: 24px;
    max-width: 380px;
    .product-m {
      flex: 0 1 30%;
      padding: 0;
      transform: translateX(-16px);
      > div {
        padding-bottom: 100%;
        background-size: 90%;
        background-repeat: no-repeat;
        background-position: center;
        cursor: pointer;
        :hover {
          opacity: 0.7;
        }
      }
    }
  } */

  ${(props) => {
    if (props.show) {
      return `
                left: 0px;
                
            `;
    } else {
      return `
                left: -100vw;
            `;
    }
  }}
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 990;
  position: fixed;
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

export const SideMenuInner = styled.div`
  position: relative;
  width: 360px;
  height: auto;
  background-color: #fff;
  z-index: 1000;
  /* padding-bottom: 200px; */
  border-right: 1px solid #ebebeb;
  @media ${(props) => props.theme.mobile} {
    width: 100vw;
    height: 100%;
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 28px;
  right: 28px;
  width: 16px;
  height: 16px;
  cursor: pointer;
  div {
    position: absolute;
    top: 50%;
    right: -4px;
    width: 22px;
    height: 2px;
    background: #111;
    transform: rotate(45deg);
  }
  div:last-child {
    transform: rotate(-45deg);
  }
  @media ${(props) => props.theme.mobile} {
    top: 20px;
    /* right: 20px; */
    width: 20px;
    height: 20px;
    div {
      width: 22px;
    }
  }
`;

export const Title = styled.div`
  padding: 80px 0px 30px 30px;
  &.main {
    padding: 80px 0px 30px 50px;
  }
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
  color: #111111;
  @media ${(props) => props.theme.mobile} {
    padding: 33px 0 12px 65px;
    font-size: 16px;
    font-weight: bold;
    line-height: 23px;

    &.main {
      padding: 0px 20px;
    }
  }
`;

export const Category = styled.ul`
  height: auto;
  overflow-y: auto;
  z-index: 999999999;
  li {
    height: 56px;
    font-size: 14px;
    font-weight: 500;
    line-height: 56px;
  }
  /* li:hover {
        background-color: #7c5aff;
        div {
            display: block;
            right: -401px;
        }
        .arrow{
            display: block;
            position: absolute;
            top: 0;
            right: 30px;
            pointer-events: none;
        }
        a{
            color: #fff;
        }
        .sub_ul{
            li:hover{
                background-color: #fafafa;
            }
            li{
                a{
                    color: #000;
                }
            }
        }
    }
    li {
        div:hover {
            display: block;
            right: -401px;
        }
    } */
  svg {
    transform: translateY(25%);
    /* margin-right: 20px; */
    pointer-events: none;
  }
  > li > a {
    padding-left: 30px;
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  > li a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  .arrow {
    display: none;
  }
  .sub_ul {
    li {
      height: 54px;
      line-height: 54px;
      padding-left: 30px;
    }
  }
  ${(props) => {
    if (props.show) {
      return `
                right: 0;
            `;
    } else {
      return `
                right: -100vw;
     
            `;
    }
  }}/* @media ${(props) => props.theme.mobile}{
        overflow-y: visible;
        display: block;
        height: auto;
        li {
            height: 65px;
            line-height: 65px;
            box-sizing: initial;
            border-bottom: 1px solid #ebebeb;
        }
        svg {
            margin-right: 15px;
        }
        li > a {
            padding-left: 30px;
            font-size:14px;
        }
        .arrow {
            display: none;
        }
    } */
`;

export const SubCategory = styled.div`
  position: absolute;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  padding-bottom: 200px;
  z-index: 100;
  right: -100vw;
  ul {
    height: 100%;
    overflow-y: scroll;
  }
  img {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 30px;
    left: 25px;
  }
  ${(props) =>
    props.isopen
      ? `
        visibility:visivle;
    `
      : `
        visibility:hidden;
        transition: 0.6s;
    `};
`;

export const LoginInfor = styled.div`
  padding: 50px 0 30px 30px;
  /* border-bottom: 1px solid #eee; */
  @media ${(props) => props.theme.mobile} {
    padding: 11px 20px 20px 20px;
    .top-menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .mo-input {
      border: none;
      border-radius: 30px;
      display: flex;
      justify-content: space-between;
      padding-right: 20px;
      margin-right: 20px;
      width: 100%;
      background-color: #f7f7f7;
      input {
        width: 100%;
        padding: 11px 20px;
        border: none;
        border-radius: 30px;
        font-weight: 400;
        font-size: 13px;
        line-height: 19px;
        background-color: #f7f7f7;
        &::placeholder {
          font-size: 13px;
          color: #a9a9a9;
        }
      }
    }
  }
`;

export const IsLogin = styled.div`
  .user-box {
    display: flex;
    gap: 8px;
    margin-top: 21px;
  }
  .non-member-flex {
    display: flex;
    gap: 8px;
    margin-top: 21px;
  }
  .mologin-box {
    display: flex;
    gap: 20px;
    align-items: center;
  }
  .user-id {
    color: #000;
    margin-top: 4px;
    font-size: 14px;
    font-weight: 400;
    line-height: 160%;
    letter-spacing: -0.28px;
    opacity: 0.4;
  }
  .name-arrow-box {
    width: 100%;

    .name-arrow {
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: space-between;
      h2 {
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        width: 71%;
      }
      a {
        display: flex;
        gap: 6px;

        span {
          text-decoration: none;
          font-size: 12px;
          font-weight: 500;
          line-height: 160%;
          opacity: 0.6;
        }
        img {
          position: relative;
          top: 1px;
        }
      }
    }
  }

  h2 {
    font-weight: 500;
    font-size: 14px;
    line-height: 160%;
    letter-spacing: -0.02em;
  }
  span {
    text-decoration: underline;
    cursor: pointer;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: right;
    letter-spacing: -0.02em;
    color: #7c5aff;
    display: flex;
    gap: 8px;
    align-items: center;
    margin-top: 4px;
  }
  @media ${(props) => props.theme.mobile} {
    span {
    }
  }
`;

export const MobileSideScroll = styled.div`
  overflow: auto;

  .subul {
    width: 100%;
    /* padding: 0 20px; */
    height: calc(100vh - 132px);
    -ms-overflow-style: none;
    overflow: auto;
  }
  .cate-flex {
    display: flex;
    gap: 8px;
    margin-bottom: 32px;
    margin-top: 18px;
    p {
      font-size: 20px;
      font-weight: 700;
      line-height: 160%;
      letter-spacing: -0.4px;
    }
  }
  .all {
    color: #000 !important;
    margin-bottom: 20px;
    font-size: 14px !important;
    font-weight: 700 !important;
    line-height: 160%;
    letter-spacing: -0.28px;
  }
  .toggle-menu {
    border-top: 1px solid #eee;
    .toggle-list {
      padding: 0px 0px;
      li {
        /* margin-top: 30px; */
        font-weight: 500;
        font-size: 18px;
        line-height: 160%;
        letter-spacing: -0.03em;
        color: #898989;

        a {
          font-weight: 500;
          font-size: 18px;
          line-height: 160%;
          letter-spacing: -0.03em;
          color: #898989;
        }
        .coin {
          margin: 0;
          margin-right: 8px;
          width: 16px;
        }
        &:first-child {
          margin-top: 0;
          color: #000;
        }
        &.active {
          color: #000;
          img {
            transform: rotate(180deg);
          }
        }
      }
      .container {
        display: flex;
      }
      .sub-ul {
        flex: 0 0 114px;
        max-width: 114px;
        margin-top: 22px;
        height: calc(100vh - 132px);
        overflow: auto;
        .all {
          margin-top: 38px;
          font-size: 20px !important;
          font-weight: 700;
          line-height: 160%;
          letter-spacing: -0.4px;
          padding-bottom: 14px;
          a {
            color: #000;
          }
        }

        .tax.on {
          background-color: #fff;
          font-weight: 700;

          .parent {
            /* text-decoration: underline; */
            /* text-underline-offset: 2px; */
            img {
              transform: rotate(180deg);
            }
          }
        }
        .child a {
          display: inline-block;
        }
        .sub-li {
          max-width: 114px;
          width: 100%;
          font-weight: 400;
          font-size: 13px;
          line-height: 160%;
          letter-spacing: -0.02em;
          color: #000;
          background-color: #f7f7f7;
          & > span {
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
          .subul {
            display: none;
          }
          .subul.active {
            display: flex;
            /* padding-top: 20px; */
          }
          /* .subul.active li:nth-of-type(1) {
            margin-top: 10px;
          }
          .subul.active li:nth-of-type(2) {
            margin-top: 10px;
          } */
          ul {
            border-top: 1px solid #e9e9e9;
            margin-top: 10px;
            display: flex;
            flex-wrap: wrap;
            li {
              width: 50%;
              margin: 0;
              font-weight: 500;
              font-size: 13px;
              line-height: 160%;
              letter-spacing: -0.02em;
              margin-top: 20px;

              img {
                width: 4px;
                margin-left: 6px;
              }
              &.active {
                a {
                  color: #7c5aff;
                }
                img {
                  transform: rotate(0deg);
                }
              }
            }
          }
        }
      }
      .subul {
      }
      .child {
        /* margin-top: 12px; */
      }
    }
  }
  ::-webkit-scrollbar {
    display: none;
  }
  .mo-list {
    padding: 0 20px;
    margin-top: 30px;
    .line {
      border-top: 1px solid #eee;
      margin-bottom: 30px;
    }
    span {
      font-size: 14px;
      margin-top: 12px;
      font-weight: 500;
      line-height: 160%;
      letter-spacing: -0.28px;
      display: block;
    }
  }
  @media ${(props) => props.theme.mobile} {
    padding-bottom: 60px;

    .toggle-menu {
      margin: 0;
    }

    .toggle-list {
      padding: 30px 20px;

      li {
        /* margin-top: 30px; */
        font-weight: 500;
        font-size: 18px;
        line-height: 160%;
        letter-spacing: -0.03em;
        color: #898989;

        a {
          font-weight: 500;
          font-size: 18px;
          line-height: 160%;
          letter-spacing: -0.03em;
          color: #898989;
          display: flex;
          justify-content: space-between;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
      .s-sub {
        color: #000 !important;
        font-size: 13px !important;
        font-weight: 500;
        line-height: 160%;
        letter-spacing: -0.26px;
        display: flex;
        padding: 16px 20px;
      }
      /* img {
        margin-left: 10px;
        margin-top: -2px;
        transition: all 0.3s;
      } */
      .coin {
        margin: 0;
        margin-right: 8px;
        width: 16px;
      }
      &:first-child {
        margin-top: 0;
        color: #000;
      }
      &.active {
        color: #000;
        img {
          transform: rotate(180deg);
        }
      }
    }
    .sub-ul {
      margin-top: 0px !important;
      /* height: 100vh; */
      height: 100%;
      /* background-color: #fff; */

      .tax.on {
        .parent {
          img {
            transform: rotate(180deg);
          }
        }
      }
      .child a {
        display: inline-block;
      }
      .sub-li {
        font-size: 14px !important;
        line-height: 160%;
        letter-spacing: -0.28px;
        padding: 16px 10px 16px 20px;

        & > span {
          display: block !important;
          /* display: flex;
          justify-content: space-between;
          align-items: center; */
          width: 100%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          /* padding: 17px 20px; */
          /* margin-top: 12px; */
        }
        .subul {
          display: none;
        }
        .subul.active {
          display: flex;
          padding-top: 20px;
        }
        .subul.active li:nth-of-type(1) {
          margin-top: 10px;
        }
        .subul.active li:nth-of-type(2) {
          margin-top: 10px;
        }
        ul {
          border-top: 1px solid #e9e9e9;
          margin-top: 10px;
          display: flex;
          flex-wrap: wrap;
          li {
            width: 50%;
            margin: 0;
            font-weight: 500;
            font-size: 13px;
            line-height: 160%;
            letter-spacing: -0.02em;
            margin-top: 20px;

            img {
              width: 4px;
              margin-left: 6px;
            }
            &.active {
              a {
                color: #7c5aff;
              }
              img {
                transform: rotate(0deg);
              }
            }
          }
        }
      }
    }
  }
`;

export const ToggleSearchbarSection = styled.div`
  .toggle {
    position: absolute;
    height: 86px;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    border-bottom: 1px solid #e9e9e9;
    background: #fff;
    box-shadow: 0px 3px 12px 0px rgba(0, 0, 0, 0.03);
    .overlay {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.35);
      position: absolute;
      top: 0;
      left: 0;
      transition: 0.2s;
      z-index: 999;
    }
    .inner {
      max-width: 500px;
      width: 100%;
      margin: 0 auto;
      padding: 0 20px;
      .active-search {
        padding-top: 22px;
        position: relative;
        img {
          position: absolute;
          top: 50%;
          right: 12px;
        }
        .active-search-box {
          input {
            width: 100%;
            box-sizing: border-box;
            border: 1px solid #e0e0e0;
            border-radius: 30px;
            padding: 11px 4px 12px 20px;
            font-weight: 400;
            font-size: 13px;
            line-height: normal;
            letter-spacing: -0.02em;
            transition: all 0.8s;
            &::placeholder {
              font-size: 13px;
            }
          }
        }
      }
      .toggle-menu {
        margin-top: 8px;
        border-radius: 10px;
        border: 1px solid #e0e0e0;
        background: #fff;
        padding: 24px 30px 30px 30px;
        .flex {
          display: flex;
          gap: 40px;
          justify-content: space-between;
          h3 {
            color: #000;
            font-size: 14px;
            font-weight: 700;
            line-height: 160%;
            padding-bottom: 10px;
          }
          .line {
            border-top: 1px solid #e0e0e0;
            padding-bottom: 6px;
          }
          .recently {
            width: 50%;
            .recently-pro {
              display: flex;
              justify-content: space-between;
              margin-top: 12px;
              p {
                font-size: 14px;
                font-weight: 400;
                line-height: 160%;
                cursor: pointer;
              }
              .close {
                cursor: pointer;
              }
            }
          }
          .popularity {
            width: 50%;
            .popularity-pro {
              display: flex;
              gap: 10px;
              margin-top: 12px;
              .number {
                font-size: 14px;
                font-weight: 500;
                line-height: 160%;
              }
              .special {
                color: #7c5aff;
              }
              span {
                font-size: 14px;
                font-weight: 400;
                line-height: 160%;
                cursor: pointer;
              }
            }
          }
        }
      }
      .toggle-close {
        width: 36px;
        height: 36px;
        background-color: #fff;
        border-radius: 50%;
        margin: 20px auto 0 auto;
        position: relative;
        cursor: pointer;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
  @media ${(props) => props.theme.mobile} {
    .toggle {
      .inner {
        max-width: 100%;
        padding: 0;
        .active-search {
          padding: 20px 20px 0 20px;
          img {
            position: absolute;
            top: 38px;
            transform: translateY(-50%);
            right: 34px;
          }
        }
        .toggle-menu {
          margin: 0px;
          border: none;
          padding: 20px 20px 30px 20px;
          .flex {
            gap: 24px;
            h3 {
              font-size: 13px;
            }
            .recently {
              .recently-pro {
                margin-top: 10px;
                p {
                  font-size: 13px;
                }
              }
            }
            .popularity {
              .popularity-pro {
                gap: 8px;
                margin-top: 10px;
                .number {
                  font-size: 13px;
                }
                span {
                  font-size: 13px;
                }
              }
            }
          }
        }
      }
    }
  }
`;
export const ToggleSearchbar = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  padding: 11px 13px 11px 22px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  transition: all 0.8s;
  @media ${(props) => props.theme.mobile} {
    font-size: 13px;
    line-height: normal;
    padding: 11px 4px 12px 20px;
    &::placeholder {
      font-size: 13px;
    }
  }
`;
export const OtherMenu = styled.ul`
  display: block;
  height: 270px;
  /* border-top: 10px solid #f8f8f8;
  border-bottom: 1px solid #ebebeb; */
  li {
    font-size: 14px;
    line-height: 56px;
    font-weight: 500;
    color: #000;
    a {
      display: inline-block;
      padding-left: 30px;
      width: 100%;
      height: 100%;
    }
  }
  li:hover {
    background-color: #7c5aff;
    a {
      color: #fff;
    }
  }
  @media ${(props) => props.theme.mobile} {
    height: auto;
    border-bottom: 0px;
    padding-bottom: 27px;
  }
`;

export const LoadingRoundStyle = styled.div`
  padding-left: 30px;
  margin-top: 10px;
`;

export const MyBoardList = styled.div`
  padding: 25px 0 25px 0;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  border-bottom: 10px solid #f8f8f8;
  p {
    margin: 12px 0 4px 0;
    font-size: 12px;
    font-weight: 500;
    color: #000;
  }
`;

export const Mypage = styled.div`
  cursor: pointer;
  img {
    width: 26px;
    height: 25px;
  }
`;

export const OrderList = styled.div`
  cursor: pointer;
  img {
    width: 24px;
    height: 23px;
  }
`;

export const Basket = styled.div`
  cursor: pointer;
  img {
    width: 24px;
    height: 23px;
  }
`;

export const SearchbarSection = styled.div`
  /* padding-left: 20px; */
  /* max-width: 420px; */
  width: 100%;
  /* padding-left: 120px; */
  max-width: 282px;

  .box {
    max-width: 282px;
    margin: 0 0 0 0;
    border: none;
    padding: 0;
  }
  .a {
    top: 0;
    transform: initial;
  }
  @media ${(props) => props.theme.mobile} {
  }
`;

export const SearchbarWrapper = styled.div`
  position: relative;
  margin-top: 0;
  /* width: calc(100% - 110px); */
  .swiper {
    position: absolute;
    top: 2.5px;
    left: 20px;
    width: 80%;
    height: 40px;
    overflow: hidden;
    cursor: text;
    p {
      transition: 1s;
      opacity: 0;
      position: absolute;
      color: #555;
      font-family: 'Noto Sans KR';
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.28px;

      ${(props) =>
        props.length
          ? `
          top: calc( 30px * ${props.length} - 52px  );
          &.p${props.length} {
            opacity: 1;
          }
      `
          : ``}
    }
    ${(props) =>
      props.length
        ? `
          .p${props.length - 2} {
            opacity: 1;
          }

      `
        : ``}
  }

  a {
    position: absolute;
    display: block;
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    border-radius: 0px 6px 6px 0px;
    background: #7c5aff;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 2;
    transition: 0.4s;

    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    :hover {
      opacity: 0.9;
    }
  }

  color: ${(props) => props.isLoign};

  @media ${(props) => props.theme.mobile} {
    a {
      width: 42px;
      height: 42px;
      border-radius: 0px 6px 6px 0px;
      svg {
        width: 24px;
        height: 24px;
      }
    }

    ${(props) =>
      props.isLogin
        ? `
        .swiper {
          top: -2px;
        }
      `
        : `
        .swiper {
          top: 2px;
        }
      `}

    .swiper {
      /* top: 2px; */
      height: 30px;

      p {
        color: #555;
        font-family: 'Noto Sans KR';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.28px;
      }
    }
  }
`;

export const Searchbar = styled.input`
  border-radius: 10px;
  border: 1px solid #eee;
  background: #fff;
  padding: 10px 24px 12px 14px;
  max-width: 282px;
  width: 100%;
  height: 42px;
  box-sizing: border-box;
  /* width: calc(100% - 180px); */
  cursor: pointer;
  ::placeholder {
    color: #555;
  }

  @media ${(props) => props.theme.mobile} {
    max-width: 100%;
    height: 42px;
    padding: 10px 24px 12px 14px;
  }
`;
