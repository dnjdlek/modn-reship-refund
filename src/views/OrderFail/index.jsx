import React, { useEffect, useState } from 'react';
import { Wrapper } from './styled';
import MainContainer from '../../components/MainContainer';
import { OrderFailResend, OrderFailRefund } from '../../api/order';
import { useRouter } from 'next/router';

const OrderFail = ({ item }) => {
  const router = useRouter();
  const [tmpMethod, setTmpMethod] = useState('');
  const [method, setMethod] = useState('');
  const [refundMethod, setRefundMethod] = useState('');

  const [rotate, setRotate] = useState(false);

  const [bank, setBank] = useState('기업은행');
  const [depositor, setDepositor] = useState('');
  const [account, setAccount] = useState('');

  const DoSubmit = () => {
    if (tmpMethod == 'resend') {
      OrderFailResend({
        order_ID: item?.order_ID,
        order_item_id: item?.order_item_id,
      })
        .then((res) => {
          if (res.data.code == 200) {
            window.location.href = '/resend';
          } else {
            alert('관리자에게 문의바랍니다.');
          }
          console.log(res);
        })
        .catch((err) => {
          alert('관리자에게 문의바랍니다.');
          console.log(err);
        });
    }
    if (tmpMethod == 'refund') {
      setMethod(tmpMethod);
    }
  };

  const DoRefund = () => {
    OrderFailRefund({
      order_ID: item?.order_ID,
      order_item_id: item?.order_item_id,
      method: method,
      bank: bank,
      depositor: depositor,
      account: account,
    })
      .then((res) => {
        if (res.data.code == 200) {
          window.location.href = '/refund';
        } else {
          alert('관리자에게 문의바랍니다.');
        }
        console.log(res);
      })
      .catch((err) => {
        alert('관리자에게 문의바랍니다.');
        console.log(err);
      });
  };

  useEffect(() => {
    if (item?.message) {
      alert(item.message);
    }
  }, []);

  const [hide, setHide] = useState(false);

  const handleScroll = () => {
    const { pageYOffset } = window;
    const hide = pageYOffset > 188;
    setHide(hide);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const DownScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  if (item?.message) {
    return <></>;
  }

  return (
    <MainContainer>
      {!method ? (
        <Wrapper>
          <p className="badge">통관 실패 안내</p>
          <h2>
            <p>주문하신 상품이 </p> <p>의약품 관련 통관 문제로 </p>배송이
            멈춰있습니다.
          </h2>
          <div className="product">
            <div
              className="thumbnail"
              style={{ backgroundImage: `url(${item?.thumbnail})` }}
            />
            <span className="date">{item?.date} 주문</span>
            <strong className="title">
              {item?.product_name} / {item?.option_name}
            </strong>
            <p>#{item?.order_ID}</p>
          </div>
          <div className="memo">
            통관 문제가 발생한 경우, 처방전을 제출하더라도 통관이 불가능할
            가능성이 높아 저희 모든메디에서는{' '}
            <span>
              고객님의 선택에 따라 재발송 혹은 환불처리를 해드리고 있습니다.
            </span>
          </div>
          <div className="hr" />
          <div className="form">
            <strong>
              통관 실패 상품을
              <br />
              다시 받으시겠어요?
            </strong>
            <div
              onClick={() => setTmpMethod('resend')}
              className={tmpMethod == 'resend' ? 'active item' : 'item'}
            >
              <div className="circle" />
              <p>네, 재발송해주세요.</p>
            </div>
            <div
              onClick={() => setTmpMethod('refund')}
              className={tmpMethod == 'refund' ? 'active item' : 'item'}
            >
              <div className="circle" />
              <p>그냥 환불해주세요.</p>
            </div>
            {item?.cause && tmpMethod == 'refund' ? (
              <div className="noti disable">
                {item?.cause == 'point'
                  ? '포인트 할인 금액이 환불 총액을 넘어 환불이 불가합니다. 관리자에게 문의해주시기 바랍니다.'
                  : '쿠폰 할인 금액이 환불 총액을 넘어 환불이 불가합니다. 관리자에게 문의해주시기 바랍니다.'}
              </div>
            ) : (
              <div className="noti">
                통관실패 후 15일 이내 미선택시 재발송 처리되오며, 발송 이후엔
                환불이 어렵습니다.
              </div>
            )}
            {item?.cause ? (
              <div className="btn disable">선택 불가능</div>
            ) : (
              <div onClick={DoSubmit} className="btn static">
                선택 완료
              </div>
            )}
          </div>
          {hide ? null : (
            <div onClick={DownScroll} className="fixed">
              상품 재발송 / 환불 선택하기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="7"
                viewBox="0 0 12 7"
                fill="none"
              >
                <path d="M11 1L6 6L1 1" stroke="white" />
              </svg>
            </div>
          )}
        </Wrapper>
      ) : null}

      {/*  */}
      {method == 'refund' ? (
        <Wrapper>
          <p className="badge">환불 방법 선택</p>
          <h2>
            환불 받으실 방법을
            <br />
            선택해 주세요
          </h2>
          <div className={refundMethod ? 'refund-form n' : 'refund-form'}>
            <div
              onClick={() => setRefundMethod('point')}
              className={refundMethod == 'point' ? 'active item' : 'item'}
            >
              <div className="circle" />
              <p>전액 포인트 환불</p>
              <span>즉시 환불</span>
            </div>
            <div
              onClick={() => setRefundMethod('transfer')}
              className={
                refundMethod == 'transfer' ? 'active item transfer' : 'item'
              }
            >
              {refundMethod == 'transfer' ? (
                <>
                  <div className="f">
                    <div className="circle" />
                    <p>계좌 환불</p>
                    <span>2~3영업일 소요</span>
                  </div>
                  <div className="account">
                    <p>환불 계좌 입력</p>
                    <select onChange={(e) => setBank(e.target.value)}>
                      <option value={'기업은행'}>기업은행</option>
                      <option value={'국민은행'}>국민은행</option>
                      <option value={'농협중앙회'}>농협중앙회</option>
                      <option value={'단위농협'}>단위농협</option>
                      <option value={'우리은행'}>우리은행</option>
                      <option value={'대구은행'}>대구은행</option>
                      <option value={'외환은행'}>외환은행</option>
                      <option value={'SC제일은행'}>SC제일은행</option>
                      <option value={'부산은행'}>부산은행</option>
                      <option value={'새마을금고'}>새마을금고</option>
                      <option value={'한국씨티은행'}>한국씨티은행</option>
                      <option value={'광주은행'}>광주은행</option>
                      <option value={'경남은행'}>경남은행</option>
                      <option value={'수협'}>수협</option>
                      <option value={'신협'}>신협</option>
                      <option value={'전북은행'}>전북은행</option>
                      <option value={'제주은행'}>제주은행</option>
                      <option value={'산림조합'}>산림조합</option>
                      <option value={'우체국'}>우체국</option>
                      <option value={'하나은행'}>하나은행</option>
                      <option value={'신한은행'}>신한은행</option>
                      <option value={'동양종금증권'}>동양종금증권</option>
                      <option value={'한국투자증권'}>한국투자증권</option>
                      <option value={'삼성증권'}>삼성증권</option>
                      <option value={'미래에셋'}>미래에셋</option>
                      <option value={'우리투자증권'}>우리투자증권</option>
                      <option value={'현대증권'}>현대증권</option>
                      <option value={'SK증권'}>SK증권</option>
                      <option value={'신한금융투자'}>신한금융투자</option>
                      <option value={'하이증권'}>하이증권</option>
                      <option value={'HMC증권'}>HMC증권</option>
                      <option value={'대신증권'}>대신증권</option>
                      <option value={'하나대투증권'}>하나대투증권</option>
                      <option value={'동부증권'}>동부증권</option>
                      <option value={'유진증권'}>유진증권</option>
                      <option value={'메리츠증권'}>메리츠증권</option>
                      <option value={'신영증권'}>신영증권</option>
                      <option value={'대우증권'}>대우증권</option>
                    </select>
                    <input
                      type="text"
                      placeholder="예금주 입력"
                      onChange={(e) => setDepositor(e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="계좌 번호 입력"
                      onChange={(e) => setAccount(e.target.value)}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="circle" />
                  <p>계좌 환불</p>
                  <span>2~3영업일 소요</span>
                </>
              )}
            </div>
          </div>
          <div className="border" />
          <div className="total">
            <div className="flex" onClick={() => setRotate((p) => !p)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                className={rotate ? 'rotate' : ''}
              >
                <path
                  d="M13 1L7 7L1 0.999999"
                  stroke="black"
                  stroke-opacity="0.4"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>환불 예정 금액</p>
              <span>{item?.totalRefundAmount?.toLocaleString('en')}원</span>
            </div>
            {!rotate ? (
              <div className="box">
                <div className="i-1">
                  <span>상품금액</span>
                  <p>
                    총 {(item?.product_price * item?.qty)?.toLocaleString('en')}
                    원{' '}
                  </p>
                </div>
                <div className="i-2">
                  <div>
                    <span>배송비</span>
                    <span>무료배송 </span>
                  </div>
                  <div>
                    <span>포인트 사용</span>
                    <span>
                      - {item?.point ? item?.point?.toLocaleString('en') : '0'}{' '}
                      원
                    </span>
                  </div>
                  {item?.coupon_code ? (
                    <div>
                      <span>
                        할인코드 적용 <span>[{item?.coupon_code}]</span>
                      </span>
                      <span>- {item?.coupon} 원 </span>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}
          </div>
          {refundMethod ? (
            refundMethod == 'transfer' ? (
              bank && depositor && account ? (
                <div onClick={DoRefund} className={'absolute btn'}>
                  선택 완료
                </div>
              ) : (
                <div className={'absolute btn disable'}>선택 완료</div>
              )
            ) : (
              <div onClick={DoRefund} className={'absolute btn'}>
                선택 완료
              </div>
            )
          ) : (
            <div className={'absolute btn disable'}>선택 완료</div>
          )}
        </Wrapper>
      ) : null}
    </MainContainer>
  );
};

export default OrderFail;
