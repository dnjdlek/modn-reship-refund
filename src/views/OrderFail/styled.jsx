import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 98px);
  padding-bottom: 40px;

  &.refund {
    padding-bottom: 140px;
  }

  .badge {
    display: inline-block;
    padding: 0 12px;
    height: 28px;
    border-radius: 100px;
    background: #7c5aff;
    color: #fff;
    font-family: 'Noto Sans KR';
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 27px;
    letter-spacing: -1px;
    text-transform: capitalize;
    margin-bottom: 16px;
  }

  .fixed {
    position: fixed;
    gap: 0 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 3px;
    width: 226px;
    height: 48px;
    left: 50%;
    bottom: 60px;
    transform: translateX(-50%);
    border-radius: 24px;
    background: linear-gradient(90deg, #7c5aff 0%, #a45aff 100%);
    color: #fff;
    font-family: 'Noto Sans KR';
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  h2 {
    color: #000;
    font-family: 'Noto Sans KR';
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    margin-bottom: 40px;
    p {
      color: rgba(0, 0, 0, 0.4);
    }
  }

  .product {
    text-align: center;
    margin-bottom: 26px;
    .thumbnail {
      width: 158px;
      height: 158px;
      border: 1px solid #eee;
      border-radius: 50%;
      margin: 0 auto 16px auto;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 85%;
    }
    .date {
      display: block;
      color: #999;
      font-family: 'Noto Sans KR';
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;
      margin-bottom: 4px;
    }
    .title {
      display: block;
      color: #000;
      text-align: center;
      font-family: 'Noto Sans KR';
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 8px;
    }
    p {
      color: #000;
      font-family: 'Noto Sans KR';
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 19.6px */
    }
  }

  .memo {
    max-width: 500px;
    border-radius: 10px;
    margin: 0 auto 50px auto;
    padding: 14px 18px 15px 18px;
    background: #fafafa;
    color: #444;
    font-family: 'Noto Sans KR';
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 160%; /* 20.8px */
    span {
      color: #ff8929;
    }
  }

  .hr {
    width: 100vw;
    height: 10px;
    background: #f5f5f5;
    margin-left: calc(50% - 50vw);
  }

  .form {
    padding: 50px 0 0 0;
    strong {
      display: block;
      color: #000;
      font-family: 'Noto Sans KR';
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%; /* 30.8px */
      margin-bottom: 20px;
    }
  }

  .item {
    display: flex;
    height: 56px;
    align-items: center;
    gap: 10px;
    padding: 0 20px;
    border-radius: 10px;
    border: 1px solid #eee;
    background: #fff;
    margin-bottom: 10px;
    cursor: pointer;

    .circle {
      position: relative;
      display: inline-block;
      width: 18px;
      height: 18px;
      border: 1px solid #dbdbdb;
      border-radius: 50%;
    }
    p {
      color: #000;
      font-family: 'Noto Sans KR';
      font-size: 15px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    &.active {
      border: 1px solid #7c5aff;
      p {
        color: #7c5aff;
      }
      .circle {
        border: 1px solid #7c5aff;
      }
      .circle:after {
        display: block;
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 12px;
        height: 12px;
        background-color: #7c5aff;
        border-radius: 50%;
      }
    }
  }
  .noti {
    color: #000;
    font-family: 'Noto Sans KR';
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 19.5px */
    text-transform: capitalize;
    margin-top: 14px;
    margin-bottom: 40px;
  }

  .noti.disable {
    color: #ff1414;
    font-family: 'Noto Sans KR';
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 19.5px */
    text-transform: capitalize;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 500px;
    width: 100%;
    height: 56px;
    border-radius: 10px;
    background: #7c5aff;
    color: #fff;
    font-family: 'Noto Sans KR';
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    cursor: pointer;
    margin-top: 40px;
  }

  .static {
    margin-bottom: 40px;
  }

  .btn.disable {
    background: #eee;
  }

  .absolute.btn {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
  }

  .refund-form {
    padding: 4px 0 0 0;

    .item {
      span {
        color: #ff8929;
        font-family: 'Noto Sans KR';
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        margin-left: auto;
      }
      &.active {
        span {
          color: #7c5aff;
        }
      }
    }
    &.n {
      .item {
        span {
          color: #000;
        }
        &.active {
          span {
            color: #7c5aff;
          }
        }
      }
    }
  }

  .item.transfer.active {
    display: block;
    height: auto;
    padding: 16px 20px 20px 20px;

    .f {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .account {
      padding: 0 0 0 28px;
      margin-top: 18px;
      p {
        color: #000;
        font-family: 'Noto Sans KR';
        font-size: 13px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        letter-spacing: -0.26px;
        margin-bottom: 11px;
      }
      select {
        width: 100%;
        height: 48px;
        border-radius: 6px;
        border: 1px solid #e9e9e9;
        background: #fff;
        padding: 0 14px;
        margin-bottom: 10px;
        box-sizing: border-box;
        cursor: pointer;
      }
      input {
        width: 100%;
        height: 48px;
        border-radius: 6px;
        border: 1px solid #e9e9e9;
        background: #fff;
        margin-bottom: 10px;
        padding: 0 14px;
        box-sizing: border-box;
      }
    }
  }

  .border {
    background-color: #eee;
    width: 100%;
    height: 1px;
    margin: 20px 0;
  }

  .total {
    border-radius: 6px;
    border: 1px solid #e9e9e9;
    background: #fff;
    padding: 16px 20px 22px 22px;

    .rotate {
      transform: rotate(180deg);
    }

    .flex {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;

      p {
        color: #000;
        font-family: 'Noto Sans KR';
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%; /* 25.6px */
        letter-spacing: -0.32px;
      }
      span {
        color: #7c5aff;
        font-family: 'Noto Sans KR';
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%; /* 28.8px */
        letter-spacing: -0.36px;
        margin-left: auto;
      }
    }
    .box {
      .i-1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 18px 0 14px 0;

        span {
          color: #000;
          font-family: 'Noto Sans KR';
          font-size: 13px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
          letter-spacing: -0.26px;
        }
        p {
          color: #000;
          font-family: 'Noto Sans KR';
          font-size: 13px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          letter-spacing: -0.26px;
        }
      }
      .i-2 {
        border-left: 3px solid #f7f7f7;
        padding-left: 10px;
        div {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;

          span {
            color: rgba(0, 0, 0, 0.4);
            font-family: 'Noto Sans KR';
            font-size: 12px;
            font-style: normal;
            font-weight: 500;
            line-height: 1;
            letter-spacing: -0.24px;
            span {
              color: #323232;
            }
          }
        }
      }
    }
  }
`;
