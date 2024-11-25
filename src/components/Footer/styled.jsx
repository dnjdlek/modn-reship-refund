import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  height: auto;
  max-width: 1680px;
  width: 100%;
  margin: 0 auto;
  padding: 62px 20px 78px 20px;

  .flex {
    display: flex;
    .left {
      padding-right: 94px;
    }
    .right {
      width: 60%;

      ul {
        display: flex;
        li {
          width: 33.3%;
          text-align: center;
          border-left: 1px solid #eee;
          padding: 28px 0;
          span {
            color: #7c5aff;
            text-align: center;
            font-size: 17px;
            font-weight: 700;
            line-height: 140%;
            display: flex;
            justify-content: center;
            margin-bottom: 16px;
          }
          a {
            display: block;
            font-size: 14px;
            font-weight: 400;
            line-height: 140%;
            margin-top: 14px;
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
              opacity: 0.8;
            }
          }
        }
      }
    }
  }
  ${(props) =>
    props.border
      ? ``
      : `
        border-top: 1px solid #eee;
    `}

  @media screen and (max-width: 1400px) {
    .flex {
      display: flex;
      .left {
        padding-right: 30px;
      }
      .right {
        width: 70%;

        ul {
          display: flex;
          li {
            width: 33.3%;
            text-align: center;
            border-left: 1px solid #eee;
            span {
              font-size: 14px;
              margin-bottom: 16px;
            }
            a {
              display: block;
              font-size: 12px;
              font-weight: 400;
              line-height: 140%;
              margin-top: 14px;
              cursor: pointer;
              transition: all 0.3s;
              &:hover {
                opacity: 0.8;
              }
            }
          }
        }
      }
    }
  }
  @media ${(props) => props.theme.mobile} {
    padding: 52px 20px 40px 20px;
    .flex {
      flex-wrap: wrap;
      justify-content: center;
      .left {
        padding-right: 0;
      }
      .right {
        width: 100%;
        ul {
          display: flex;
          justify-content: space-between;
          margin-top: 40px;
          border-top: 1px solid #eee;
          padding-top: 50px;
          li {
            border-left: none;
            width: unset;
            span {
              font-size: 13px;
              margin-bottom: 12px;
            }
            a {
              display: block;
              font-size: 12px;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
`;

export const FooterContainer = styled.div`
  max-width: 1322px;
  margin: 0 auto;
  padding: 51px 20px;
  position: relative;

  @media ${(props) => props.theme.tablet} {
  }
`;

export const FooterContent = styled.div`
  max-width: 1680px;
  width: 100%;
  margin: 0 auto;
  padding: 87px 20px 79px 20px;
  .footer-left {
    display: flex;
    align-items: baseline;
  }
  @media ${(props) => props.theme.mobile} {
    background: #f6f7f8;
    padding: 50px 20px;
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  width: 156px;
  margin-right: 100px;
  cursor: pointer;
  @media ${(props) => props.theme.laptop} {
    display: block;
    margin-right: 50px;
    margin-bottom: 30px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 117px;
    height: 24px;
    margin: 0 auto;
  }
`;

export const FooterMenu = styled.div`
  /* margin: 0 165px 0 0; */

  .corp {
    margin-top: 24px;
  }

  @media ${(props) => props.theme.laptop} {
    margin: 0 0;
    display: inline-block;
  }
  @media ${(props) => props.theme.tablet} {
    display: block;
  }
  @media ${(props) => props.theme.mobile} {
    display: block;
    margin: 0 0;
    padding: 0;
  }
`;

export const BotMenu = styled.div`
  border-top: 1px solid #eee;
  padding: 30px 20px;

  ${(props) =>
    props.border
      ? ``
      : `
            background-color: #fafafa;
        `}
`;

export const TopMenu = styled.div`
  li {
    display: inline-block;
    margin: 0 40px 0 0;
  }
  a {
    position: relative;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    cursor: pointer;
    transition: 0.4s;

    :hover {
      opacity: 0.6;
    }
  }
  @media ${(props) => props.theme.mobile} {
    li {
      margin: 0 16px 0 0;
    }
    a {
      font-size: 14px;
    }
  }
`;

export const LogoWrapper = styled.div`
  margin-top: 60px;
  ul {
    display: flex;
    justify-content: center;
    padding: 60px 0;
    li {
      width: 266px;
      img {
        width: 100%;
      }
    }
  }
  @media ${(props) => props.theme.mobile} {
    margin-top: 0;
    border-top: 8px solid rgba(224, 224, 224, 0.16);
    ul {
      flex-wrap: wrap;
      justify-content: center;
      padding: 50px 20px;
      li {
        width: calc(100% / 3);
      }
    }
  }
`;

export const UnderWrapper = styled.div`
  border-top: 1px solid #e6e8ec;
  border-bottom: 1px solid #e6e8ec;
  padding: 21px 0;
  .inner {
    max-width: 1680px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    padding: 0 20px;
    gap: 0;
    .list {
      display: flex;
      gap: 20px;
      align-items: center;
      width: calc(100% / 5);
      .imgbox {
        filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.08));
      }
      .thumbnail {
        width: 58px;
        height: 58px;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      }
      .text-box {
        h3 {
          font-size: 17px;
          font-weight: 500;
          line-height: 140%;
        }
        p {
          color: #999;
          margin-top: 3px;
          font-size: 15px;
          font-weight: 500;
          line-height: 140%;
        }
      }
    }
  }

  @media screen and (max-width: 1400px) {
    .inner {
      flex-wrap: wrap;
      justify-content: center;
      gap: 36px 0;
      .list {
        flex-direction: column;
        justify-content: center;
        gap: 0;
        align-items: center;
        width: calc(100% / 3);
        &:nth-child(4) {
          margin-right: 40px;
        }
        .text-box {
          text-align: center;
          h3 {
            font-size: 13px;
          }
          p {
            margin-top: 4px;
            font-size: 12px;
            white-space: nowrap;
          }
        }
      }
    }
  }
  @media ${(props) => props.theme.mobile} {
    padding: 50px 0;
    .inner {
      flex-wrap: wrap;
      justify-content: center;
      gap: 36px 0;
      .list {
        flex-direction: column;
        justify-content: center;
        gap: 0;
        align-items: center;
        width: calc(100% / 3);
        &:nth-child(4) {
          margin-right: 40px;
        }
        .text-box {
          text-align: center;
          h3 {
            font-size: 13px;
          }
          p {
            margin-top: 4px;
            font-size: 12px;
            white-space: nowrap;
          }
        }
      }
    }
  }
`;

export const Center = styled.div`
  margin-top: 24px;
  p {
    font-weight: 400;
    font-size: 15px;
    line-height: 170%;
    opacity: 0.8;
  }
  .corp {
    margin-top: 12px;
  }
  @media screen and (max-width: 1400px) {
    p {
      font-size: 12px;
    }
  }
  @media ${(props) => props.theme.mobile} {
    p {
      font-size: 12px;
      text-align: center;
      letter-spacing: -0.48px;
    }
  }
`;

export const BottomMenu = styled.div`
  li {
    display: inline-block;
    margin: 0 15px 7px 0;
  }
  a {
    position: relative;
    font-size: 13px;
    font-weight: normal;
    line-height: 19px;
    color: #666;
    transition: 0.4s;
    :hover {
      opacity: 0.6;
    }
    :before {
      position: absolute;
      content: '';
      top: 50%;
      right: -8px;
      transform: translateY(-50%);
      height: 11px;
      border-right: 1px solid #eee;
    }
  }
  .law {
    a:before {
      border: none;
    }
  }
  span {
    font-size: 14px;
    font-weight: normal;
    line-height: 20px;
    color: #aaa;
  }
  @media ${(props) => props.theme.mobile} {
    span {
      font-size: 12px;
      font-weight: normal;
      line-height: 2;
      color: #444444;
    }
    li {
      margin: 20px 13px 5px 0;
    }
    a {
      font-size: 12px;
      :before {
        top: 58%;
        right: -7px;
        height: 10px;
      }
    }
    .copy {
      font-size: 13px;
      font-weight: normal;
      line-height: normal;
      color: #aaaaaa;
    }
  }
`;

export const FooterInfor = styled.div`
  position: relative;
  border-left: 1px solid #e0e0e0;
  width: 100%;
  flex: 0 1 351px;
  .dnjdlek {
    max-width: 230px;
    width: 100%;
    margin-left: auto;
    padding-left: 30px;
    box-sizing: content-box;
  }

  p {
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
  }
  span {
    display: block;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    margin-top: 10px;
    opacity: 0.4;
  }
  button {
    display: inline-block;
    min-width: 230px;
    width: 100%;
    height: 56px;
    line-height: 44px;
    border: none;
    transition: 0.4s;
    margin-top: 14px;
    background: #7c5aff;
    border-radius: 10px;
    :hover {
      opacity: 0.6;
    }
    img {
      margin-right: 8px;
    }
  }
  a {
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
  }
  @media ${(props) => props.theme.laptop} {
    display: inline-block;
    vertical-align: top;
    float: right;
  }
  @media ${(props) => props.theme.tablet} {
    display: block;
    float: inherit;
    margin-top: 30px;
  }
  @media ${(props) => props.theme.mobile} {
    display: block;
    float: inherit;
    max-width: inherit;
    margin-top: 0;
    padding-left: 0;
    border-left: none;
    span {
      margin: 0 0;
      font-size: 12px;
      line-height: normal;
      color: #666;
    }
    button {
      width: 100%;
      margin: 12px 0 0 0;
      font-weight: 700;
      font-size: 12px;
      line-height: 140%;
    }
    p {
      opacity: 0.4;
      margin-top: 17px;
      color: #000;
      font-size: 12px;
      font-weight: 400;
      line-height: 160%;
      letter-spacing: -0.48px;
      word-break: keep-all;
    }
    .corp {
      font-weight: 500;
      margin-top: 14px;
    }
    .footer-line {
      border-top: 1px solid #e0e0e0;
      margin-top: 30px;
    }
    .center-title {
      font-weight: 700;
      font-size: 14px;
      line-height: 140%;
      margin-top: 30px;
      opacity: 1;
    }
    .footer-time {
      font-weight: 500;
      font-size: 13px;
      line-height: 160%;
      margin-top: 10px;
    }
  }
`;

export const ChatbotIcon = styled.a`
  display: block;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 99999;
  .icon {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 12px 28px rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 56px;
    height: 56px;
    background-color: #7c5aff;
    border-radius: 50%;
    text-align: center;
    position: relative;
    transition: 0.4s;
    display: none;
    :hover {
      opacity: 0.6;
    }
    > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 48px;
      height: 48px;
      background-image: url(/images/chatbot-icon.svg);
      background-size: 48px;
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
      > i {
        display: inline-block;
        position: relative;
        top: 9px;
        vertical-align: top;
        line-height: 24px;
        width: 2px;
        height: 2px;
        margin: 0px 1px;
        background: #fff;
        border-radius: 50%;
        animation: circlelight 1.5s infinite 0s alternate;
        :nth-child(2) {
          animation: circlelight 1.5s infinite 0.5s alternate;
        }
        :nth-child(3) {
          animation: circlelight 1.5s infinite 1.5s alternate;
        }
      }
    }
    :hover {
      opacity: 0.8;
    }
  }
  span {
    display: block;
    color: #ff5c75;
    font-weight: bold;
    width: 100%;
    margin-top: 3px;
    font-size: 12px;
    text-align: center;
  }
  @keyframes circlelight {
    from {
      opacity: 1;
    }
    to {
      opacity: 0.2;
    }
  }
  @media ${(props) => props.theme.mobile} {
    right: 20px;
    bottom: 20px;
    /* .icon {
      width: 46px;
      height: 46px;

      > div {
        width: 20px;
        height: 20px;
        background-size: 20px 20px;
      }
    }
    span {
      display: none;
    } */
  }
`;

export const Lately = styled.div`
  display: block;
  position: fixed;
  bottom: 50px;
  right: 50px;
  z-index: 99999;
  .icon {
    transition: 0.3s;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    text-align: center;
    position: rela, tive;
    background-color: #7c5aff;
    > div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 48px;
      height: 48px;
      background-image: url(/images/lately.svg);
      background-size: 48px 48px;
      background-repeat: no-repeat;
      background-position: center;
      cursor: pointer;
      transition: 0.4s;
      :hover {
        opacity: 0.6;
      }
    }
    /* > div:last-child {
      position: absolute;
      top: 85px;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 22px;
      height: 22px;
      background-image: url(/images/top_arrow.png);
      background-size: 22px 22px;
      background-repeat: no-repeat;
      cursor: pointer;
      transition: 0.4s;
      :hover {
        opacity: 0.6;
      }
    } */
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
    /* bottom: 20px;
    right: 20px;
    z-index: 99999;
    ${(props) =>
      props.up
        ? `
            bottom: 90px;
        `
        : ``}
    .icon {
      width: 46px;
      height: 88px;
      > div {
        top: 20px;
        width: 18px;
        height: 18px;
        background-size: 18px 18px;
      }
      > div:last-child {
        top: 63px;
        width: 16px;
        height: 16px;
        background-size: 16px 16px;
      }
    } */
  }
`;
