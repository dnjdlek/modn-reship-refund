import React, { useState } from 'react';
import { Wrapper } from './styled';
import MainContainer from '../../components/MainContainer';
import { useSelector } from 'react-redux';

const RefundTransfer = () => {
  return (
    <MainContainer>
      <Wrapper>
        <p className="badge">환불 신청 완료</p>
        <h2>
          계좌 환불 신청이
          <br />
          완료되었습니다.
        </h2>
        <div className="img">
          <img src="/images/CK_td02940000815.png" />
        </div>
        <div className="memo">
          <span>신청일 기준 3영업일 이내에 환불 진행됩니다.</span>
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

export default RefundTransfer;
