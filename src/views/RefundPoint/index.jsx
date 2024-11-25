import React, { useState } from 'react';
import { Wrapper } from './styled';
import MainContainer from '../../components/MainContainer';
import { useSelector } from 'react-redux';

const RefundPoint = () => {
  const [method, setMethod] = useState('');

  return (
    <MainContainer>
      <Wrapper>
        <p className="badge">환불 완료</p>
        <h2>
          전액 포인트 환불이 <br />
          완료되었습니다.
        </h2>
        <div className="img">
          <img src="/images/CK_td02940000815.png" />
        </div>
        <div className="memo">
          <span>고객님의 계정으로 환불금 포인트 지급이 완료되었습니다.</span>
        </div>
        <div
          onClick={() => (window.location.href = 'https://modnmedi.net')}
          className="btn absolute"
        >
          모든메디 홈페이지로
        </div>
      </Wrapper>
    </MainContainer>
  );
};

export default RefundPoint;
