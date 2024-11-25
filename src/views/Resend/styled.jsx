import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 40px;
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

  h2 {
    color: #000;
    font-family: 'Noto Sans KR';
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    margin-bottom: 26px;
    p {
      color: rgba(0, 0, 0, 0.4);
    }
  }
  .img {
    text-align: center;
    margin-bottom: 34px;
    img {
      width: 277px;
      height: auto;
    }
  }

  .memo {
    max-width: 500px;
    border-radius: 10px;
    margin: 0 auto 10px auto;
    padding: 14px 18px 16px 18px;
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

  .info {
    margin: 40px 0 0 0;
    padding: 30px 0 0 0;
    border-top: 1px solid #eee;
    strong {
      display: block;
      color: #000;
      font-family: 'Noto Sans KR';
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 140%; /* 25.2px */
      margin-bottom: 12px;
    }
  }
  .noti {
    color: #444;
    font-family: 'Noto Sans KR';
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%; /* 20.8px */
    margin-bottom: 40px;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
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
  }
`;
