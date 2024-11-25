import React, { useState } from 'react';
import { Wrapper } from './styled';
import MainContainer from '../../components/MainContainer';
import { useSelector } from 'react-redux';

const Resend = () => {
  const [method, setMethod] = useState('');

  return (
    <MainContainer>
      <Wrapper>
        <p className="badge">재발송 신청 완료</p>
        <h2>
          상품의 재발송 신청이
          <br />
          완료되었습니다.
        </h2>
        <div className="img">
          <img src="/images/CK_td02940000815.png" />
        </div>
        <div className="memo">
          새로 발송된 제품의 <span>운송장 번호는 기존 주문번호에 등록</span>될
          예정입니다.
        </div>
        <div className="memo">
          <span>발송 후 2~3주 내에 제품을 받아보실 수 있습니다.</span>
        </div>
        <div className="info">
          <strong>
            통관되지 못한 상품은 <br />
            어떻게 되나요?
          </strong>
          <div className="noti">
            현재 통관되지 못한 제품의 경우, 카카오톡 또는 우편을 통해 통관
            절차에 대한 안내를 받으실 수 있습니다. 하지만 별도의 조치를 취하지
            않으셔도 제품은 자동으로 반송 처리되며, 통관 불가로 인한 추가적인
            피해는 발생하지 않습니다.
          </div>
          <div className="btn">모든메디 홈페이지로</div>
        </div>
      </Wrapper>
    </MainContainer>
  );
};

export default Resend;
