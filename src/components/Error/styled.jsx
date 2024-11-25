import styled from 'styled-components';
// import {Link} from 'react-router-dom';
import Link from 'next/link';

export const Wrapper = styled.div`
  position: relative;
  min-height: calc(100vh - 500px);
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    text-align: center;
    position: relative;
    padding-bottom: 20px;

    img {
      width: 116px;
      height: auto;
      margin-bottom: 30px;
    }

    h1 {
      color: #000;
      text-align: center;
      font-family: Noto Sans KR;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 140%; /* 25.2px */
      letter-spacing: -0.36px;
      margin-bottom: 10px;
    }
    p {
      color: #000;
      text-align: center;
      font-family: Noto Sans KR;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 150%; /* 18px */
      letter-spacing: -0.24px;
      opacity: 0.6;
      margin-bottom: 32px;
    }
    a {
      cursor: pointer;
      color: #7c5aff;
      font-family: Noto Sans KR;
      font-size: 12px;
      font-style: normal;
      font-weight: 500;
      line-height: 160%; /* 19.2px */
      letter-spacing: -0.24px;
      display: block;
      transition: all 0.3s;
      border-radius: 120px;
      border: 1px solid #7c5aff;
      background: #fff;
      padding: 8px 0 10px 0;
      max-width: 150px;
      margin: 0 auto;
      &:hover {
        opacity: 0.6;
      }
    }
  }
  .icon-error {
    text-align: center;
    margin-top: 60px;
  }
  @media ${(props) => props.theme.mobile} {
    .content {
      img {
      }

      h1 {
      }
      p {
      }
      a {
      }
    }
  }
`;
