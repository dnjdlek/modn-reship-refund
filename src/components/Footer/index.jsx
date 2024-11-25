import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
  FooterWrapper,
  Center,
  Logo,
  UnderWrapper,
  LogoWrapper,
} from './styled';

const Footer = (props) => {
  const arrow_icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
    >
      <path
        fill="#000"
        fill-rule="evenodd"
        d="M11 20.625c-.182 0-.357-.072-.486-.201-.13-.13-.202-.304-.202-.486V3.721L5.987 8.05c-.13.13-.305.202-.487.202-.183 0-.358-.073-.487-.202s-.201-.304-.201-.486c0-.183.072-.358.201-.487l5.5-5.5c.064-.064.14-.115.223-.15.084-.034.173-.052.264-.052.09 0 .18.018.263.052.084.035.16.086.224.15l5.5 5.5c.129.129.201.304.201.487 0 .182-.072.357-.201.486-.13.13-.304.202-.487.202s-.358-.073-.487-.202l-4.326-4.327v16.215c0 .183-.072.358-.201.487s-.304.201-.486.201z"
        clip-rule="evenodd"
      />
    </svg>
  );

  const Dispatch = useDispatch();
  const me = useSelector((state) => state.me.user_data);
  const router = useRouter();
  const [lately_exist, set_lately_exist] = useState();

  // const [arrow, set_arrow] = useState();

  const top_arrow = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [InquirePopup_isshow, show_InquirePopup] = useState(0);
  const showInquirePopup = (e) => {
    if (InquirePopup_isshow) {
      show_InquirePopup(0);
    } else {
      show_InquirePopup(1);
    }
  };

  const [LatelyPopup_isshow, show_LatelyPopup] = useState(0);
  const showLatelyPopup = (e) => {
    if (LatelyPopup_isshow) {
      show_LatelyPopup(0);
    } else {
      show_LatelyPopup(1);
    }
  };

  const dummy = [
    {
      thumbnail: '/images/icon1.png',
      title: '검증된 제품',
      desc: '인증받은 의약품',
    },
    {
      thumbnail: '/images/icon02.png',
      title: '안심 배송',
      desc: '빠르고 안전한 배송',
    },
    {
      thumbnail: '/images/icon03.png',
      title: '책임 배송',
      desc: '통관 문제 시 재발송',
    },
    {
      thumbnail: '/images/icon04.png',
      title: '서비스 센터',
      desc: '친절한 고객 상담 서비스',
    },
    {
      thumbnail: '/images/icon05.png',
      title: '1:1 문의',
      desc: '고객 맞춤 서비스',
    },
  ];

  return (
    <>
      <LogoWrapper>
        <ul>
          <li>
            <img src="/images/logo01.png" alt="" />
          </li>
          <li>
            <img src="/images/logo02.png" alt="" />
          </li>
          <li>
            <img src="/images/logo03.png" alt="" />
          </li>
          <li>
            <img src="/images/logo04.png" alt="" />
          </li>
          <li>
            <img src="/images/logo05.png" alt="" />
          </li>
          <li>
            <img src="/images/logo06.png" alt="" />
          </li>
        </ul>
      </LogoWrapper>
      <UnderWrapper>
        <div className="inner">
          {dummy.map((item, key) => (
            <div className="list" key={key}>
              <div className="imgbox">
                <div
                  style={{ backgroundImage: `url(${item.thumbnail})` }}
                  className="thumbnail"
                ></div>
              </div>
              <div className="text-box">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </UnderWrapper>
      <FooterWrapper border={props.border}>
        <div className="flex">
          <div className="left">
            <Logo src={'/images/main-logo.png'} alt="" />
            <Center>
              <p>
                모든 제품은 반드시 의사의 처방에 근거해 구입하실 것을
                권장합니다.
                <br />
                모든메디는 수입신고 및 통관에 대한 업무를 대행하지 않습니다.
                <br /> 모든 제품에 대한 통관 절차는 해당 국가의 법률에 따라
                이루어지며, 모든 제품은 자가사용을 전제로 합니다.
                <br /> 모든메디는 제품 구행대행 서비스를 제공하고 있습니다.
                수입이나 판매는 진행하지 않고 있습니다.
              </p>
              <p className="corp">© modnmedi Corp.</p>
            </Center>
          </div>
          <div className="right">
            <ul>
              <li>
                <span>INFORMATION</span>
                <a href="/about">회사 소개</a>
                <a href="/service/notice">공지사항</a>
                <a href="/page/5319">이용약관</a>
                <a href="/mypage/inquire">Contact Us</a>
              </li>
              <li>
                <span>SHOP & SERVICE</span>
                <a href="/service/faq">핀페시아 직구 최저가</a>
                <a href="/service/faq">배송, 반품</a>
                <a href="/service/faq">자주하는 질문</a>
                <a href="/service/faq">고객센터</a>
              </li>
              <li>
                <span>MY ACCOUNT</span>
                <a href="/mypage">주문, 배송 조회</a>
                <a href="/mypage/inquire">1:1 문의</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <MediaContextProvider>
        <Media at="xs">
          <FooterContent>
            <Logo src={'/images/mo-main-logo.png'} alt="" />
            <FooterMenu>
              <TopMenu>
                <ul>
                  <li>
                    <Link href="/about">회사소개</Link>
                  </li>
                  <li>
                    <Link href="/page/5319">이용약관</Link>
                  </li>
                  <li>
                    <Link href="/page/3">개인정보처리방침</Link>
                  </li>
                </ul>
              </TopMenu>
              <FooterInfor>
                <p>
                  모든 제품은 반드시 의사의 처방에 근거해 구입하실 것을
                  권장합니다.
                  <br />
                  모든메디는 수입신고 및 통관에 대한 업무를 대행하지 않습니다.
                  <br /> 모든 제품에 대한 통관 절차는 해당 국가의 법률에 따라
                  이루어지며, 모든 제품은 자가사용을 전제로 합니다.
                  <br /> 모든메디는 제품 구행대행 서비스를 제공하고 있습니다.
                  수입이나 판매는 진행하지 않고 있습니다.
                </p>
                <p className="corp">© modnmedi Corp.</p>
                <div className="footer-line"></div>
                <p className="center-title">고객센터</p>
                <Link href="/mypage/inquire">
                  <button>
                    <img src="/images/icon-chatting.svg" alt="" />
                    <a>문의하기</a>
                  </button>
                </Link>
                <span className="footer-time">
                  평일 AM 10:00 ~ PM 17:00(점심시간 12:00~14:00)
                </span>
              </FooterInfor>
            </FooterMenu>
          </FooterContent>
        </Media>
        <Media greaterThan="xs">
          <FooterContainer>
            <FooterContent>
              <Logo src={'/images/main-logo.png'} alt="" />
              <FooterMenu>
                <TopMenu>
                  <ul>
                    <li>
                      <Link href="/about">회사소개</Link>
                    </li>
                    <li>
                      <Link href="/page/5319">이용약관</Link>
                    </li>
                    <li>
                      <Link href="/page/3">개인정보취급방침</Link>
                    </li>
                  </ul>
                </TopMenu>
                <Center>
                  <p>
                    모든 제품은 반드시 의사의 처방에 근거해 구입하실 것을
                    권장합니다.
                    <br />
                    모든메디는 수입신고 및 통관에 대한 업무를 대행하지 않습니다.
                    <br /> 모든 제품에 대한 통관 절차는 해당 국가의 법률에 따라
                    이루어지며, 모든 제품은 자가사용을 전제로 합니다.
                    <br /> 모든메디는 제품 구행대행 서비스를 제공하고 있습니다.
                    수입이나 판매는 진행하지 않고 있습니다.
                  </p>
                  <p className="corp">© modnmedi Corp.</p>
                </Center>
              </FooterMenu>

              <FooterInfor>
                <div className="dnjdlek">
                  <p>고객센터</p>
                  <Link href="/mypage/inquire">
                    <button>
                      <img src="/images/icon-chatting.svg" alt="" />
                      <a>문의하기</a>
                    </button>
                  </Link>

                  <span>
                    평일 오전 10시 ~ 오후 7시 <br />
                    (점심 시간 : 오후 12시 ~ 오후 2시 )
                  </span>
                </div>
              </FooterInfor>
            </FooterContent>
          </FooterContainer>
        </Media>
      </MediaContextProvider>
      {me ? (
        <ChatbotIcon
          href="#"
          onClick={(e) => {
            e.preventDefault();
            Dispatch(ToggleChatbot(1));
          }}
        >
          <div className="icon">
            <div>
              <i />
              <i />
              <i />
            </div>
          </div>
        </ChatbotIcon>
      ) : (
        ''
      )}

      <InquirePopup
        show={InquirePopup_isshow}
        onClose={showInquirePopup}
        submit_success={show_InquirePopup}
      />
      <LatelyPopup
        show={LatelyPopup_isshow}
        onClose={showLatelyPopup}
        exist={set_lately_exist}
      /> */}
      </FooterWrapper>
    </>
  );
};

export default Footer;
