import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import { category } from '../../theme';
import LoadingRound from '../../components/LoadingRound';
import { GlobalCategory } from '../../api/product';
import { Media, MediaContextProvider } from '../../components/common/media';
import {
  SideMenuWrapper,
  Overlay,
  SideMenuInner,
  CloseButton,
  Title,
  Category,
  SubCategory,
  LoginInfor,
  IsLogin,
  MobileSideScroll,
  MobileSearchbarSection,
  OtherMenu,
  ToggleSearchbar,
  ToggleSearchbarSection,
  SearchbarSection,
  SearchbarWrapper,
  Searchbar,
} from './styled';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useRecoilState } from 'recoil';
import { searchAtom } from '../../recoil/global';

const MobileSideMenu = ({
  show,
  onClose,
  open,
  s,
  setS,
  sidee,
  taxonomy,
  searchObj,
  keyword,
  SearchModal,
  toggleSearch,
  search,
  increaseNum,
}) => {
  const router = useRouter();
  const me = useSelector((state) => state.me.user_data);
  const [cate_ID, set_cate_ID] = useState(null);
  const [childTax, setChildTax] = useState([]);
  const [childTaxLoading, setChildTaxLoading] = useState(false);
  const [child, setChild] = useState();
  const [isSearch, setIsSearch] = useRecoilState(searchAtom);

  const [cate, setCate] = useState({});

  const hoverCategory = (id) => {
    // if (id == cate_ID) {
    //   set_cate_ID(null);
    // } else {
    //   set_cate_ID(id);
    // }
  };

  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(me);
  }, [me]);

  const [lately, set_lately] = useState();

  useEffect(() => {
    set_lately(JSON.parse(localStorage.getItem('lately')));
  }, []);

  // useEffect(() => {
  //   set_cate_ID(taxonomy[0] ? taxonomy[0].ID : null);
  // }, [taxonomy]);

  const [side, set_side] = useState(0);

  // useEffect(() => {
  //   setChildTax([]);
  //   setChildTaxLoading(true);
  //   if (cate_ID) {
  //     GlobalCategory({
  //       category_ID: cate_ID,
  //     })
  //       .then((response) => {
  //         if (response.data.code == 200) {
  //           setChildTax(response.data.body.categories);
  //           setChild(response.data.body);
  //         }
  //         setChildTaxLoading(false);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //         setChildTaxLoading(false);
  //       });
  //   }
  // }, [cate_ID]);

  useEffect(() => {
    if (cate_ID) {
      const filter = taxonomy.filter((item) => item.ID == cate_ID)?.[0];
      const children = filter ? filter?.children : null;

      setCate(filter);
      // setChildTax(children);
    }
  }, [cate_ID]);

  useEffect(() => {
    if (s) {
      ref?.current?.focus();
    }
  }, [sidee]);

  const ref = useRef();

  useEffect(() => {
    if (show) {
      document.getElementsByTagName('body')[0].classList.add('hidden');
    } else {
      document.getElementsByTagName('body')[0].classList.remove('hidden');
    }
  }, [show]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  const [cate_name, setCateName] = useState('');

  useEffect(() => {
    // if (!show) {
    //   set_cate_ID(taxonomy[0] ? taxonomy[0].ID : null);
    //   setCateName('');
    // }
    if (router?.pathname == '/products/[category_ID]') {
      setCateName(router.query.category_ID);
    } else {
      set_cate_ID(taxonomy[0] ? taxonomy[0].ID : null);
    }
  }, [taxonomy, router]);

  console.log('taxonomy', taxonomy);
  console.log('childTax', childTax);

  useEffect(() => {
    if (cate_name && router.query.category_ID) {
      GlobalCategory({
        category_ID: encodeURI(router.query.category_ID),
      })
        .then((response) => {
          if (response.data.code == 200) {
            set_cate_ID(response.data.body.category_ID);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [cate_name, show]);

  return (
    <SideMenuWrapper show={show}>
      <Overlay show={show} onClick={onClose} />
      <SideMenuInner show={show}>
        {user ? (
          <LoginInfor>
            <IsLogin>
              <div className="top-menu">
                <SearchbarSection>
                  <SearchbarWrapper length={search?.length} isLogin={user?.ID}>
                    <div
                      className="search-box"
                      onClick={() => setIsSearch(true)}
                    >
                      <div className="box">
                        <Searchbar
                          type="text"
                          spellcheck="false"
                          // onKeyPress={PressSearch}
                          // onClick={toggleSearch}
                        />
                        <div className="swiper">
                          {search?.length
                            ? search.map((item, key) => (
                                <p
                                  className={
                                    'p' +
                                    ((-increaseNum +
                                      (search?.length == key + 1
                                        ? search?.length - 1
                                        : search?.length - 2 - key)) %
                                      search?.length)
                                  }
                                  style={{
                                    transform:
                                      'translateY(calc(30px *' +
                                      ((increaseNum -
                                        (search?.length == key + 1
                                          ? search?.length - 1
                                          : search?.length - 2 - key)) %
                                        search?.length) +
                                      '))',
                                  }}
                                >
                                  {key + 1}. {item}
                                </p>
                              ))
                            : null}
                        </div>

                        {keyword ? (
                          <Link href={keyword ? '/search/' + keyword : ''}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                            >
                              <path
                                d="M25.8398 25.832L31.6732 31.6654M8.33984 18.332C8.33984 19.6453 8.5985 20.9456 9.10105 22.1589C9.6036 23.3721 10.3402 24.4745 11.2688 25.4031C12.1974 26.3317 13.2998 27.0683 14.513 27.5708C15.7263 28.0734 17.0266 28.332 18.3398 28.332C19.6531 28.332 20.9534 28.0734 22.1667 27.5708C23.3799 27.0683 24.4823 26.3317 25.4109 25.4031C26.3395 24.4745 27.0761 23.3721 27.5786 22.1589C28.0812 20.9456 28.3398 19.6453 28.3398 18.332C28.3398 15.6799 27.2863 13.1363 25.4109 11.261C23.5356 9.3856 20.992 8.33203 18.3398 8.33203C15.6877 8.33203 13.1441 9.3856 11.2688 11.261C9.39341 13.1363 8.33984 15.6799 8.33984 18.332V18.332Z"
                                stroke="white"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </Link>
                        ) : (
                          <a className="a">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="40"
                              height="40"
                              viewBox="0 0 40 40"
                              fill="none"
                            >
                              <path
                                d="M25.8398 25.832L31.6732 31.6654M8.33984 18.332C8.33984 19.6453 8.5985 20.9456 9.10105 22.1589C9.6036 23.3721 10.3402 24.4745 11.2688 25.4031C12.1974 26.3317 13.2998 27.0683 14.513 27.5708C15.7263 28.0734 17.0266 28.332 18.3398 28.332C19.6531 28.332 20.9534 28.0734 22.1667 27.5708C23.3799 27.0683 24.4823 26.3317 25.4109 25.4031C26.3395 24.4745 27.0761 23.3721 27.5786 22.1589C28.0812 20.9456 28.3398 19.6453 28.3398 18.332C28.3398 15.6799 27.2863 13.1363 25.4109 11.261C23.5356 9.3856 20.992 8.33203 18.3398 8.33203C15.6877 8.33203 13.1441 9.3856 11.2688 11.261C9.39341 13.1363 8.33984 15.6799 8.33984 18.332V18.332Z"
                                stroke="white"
                                stroke-width="2.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              />
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </SearchbarWrapper>
                </SearchbarSection>
                <div
                  className="close"
                  onClick={() => {
                    onClose();
                    set_side(0);
                    setS(false);
                  }}
                >
                  <img src="/images/icon-close02.svg" alt="" />
                </div>
              </div>

              <div className="user-box">
                <div className="user">
                  <img src="/images/mdi_user.svg" alt="" />
                </div>
                <div className="name-arrow-box">
                  <div className="name-arrow">
                    <h2
                      onClick={() => {
                        router.push('/mypage/');
                        onClose();
                      }}
                      className="login"
                    >
                      {user.user_name}님 환영합니다.
                    </h2>
                    <a href="/mypage">
                      <span>마이페이지</span>
                      <img src="/images/menu-arrow02.svg" alt="" />
                    </a>
                  </div>
                  {/* <p className="user-id">{user.user_email}</p> */}
                </div>
              </div>
            </IsLogin>
          </LoginInfor>
        ) : (
          <LoginInfor>
            <div className="top-menu">
              <SearchbarSection>
                <SearchbarWrapper length={search?.length} isLogin={user?.ID}>
                  <div className="search-box" onClick={() => setIsSearch(true)}>
                    <div className="box">
                      <Searchbar
                        type="text"
                        spellcheck="false"
                        // onKeyPress={PressSearch}
                        // onClick={toggleSearch}
                      />
                      <div className="swiper">
                        {search?.length
                          ? search.map((item, key) => (
                              <p
                                className={
                                  'p' +
                                  ((-increaseNum +
                                    (search?.length == key + 1
                                      ? search?.length - 1
                                      : search?.length - 2 - key)) %
                                    search?.length)
                                }
                                style={{
                                  transform:
                                    'translateY(calc(30px *' +
                                    ((increaseNum -
                                      (search?.length == key + 1
                                        ? search?.length - 1
                                        : search?.length - 2 - key)) %
                                      search?.length) +
                                    '))',
                                }}
                              >
                                {key + 1}. {item}
                              </p>
                            ))
                          : null}
                      </div>

                      {keyword ? (
                        <Link href={keyword ? '/search/' + keyword : ''}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                          >
                            <path
                              d="M25.8398 25.832L31.6732 31.6654M8.33984 18.332C8.33984 19.6453 8.5985 20.9456 9.10105 22.1589C9.6036 23.3721 10.3402 24.4745 11.2688 25.4031C12.1974 26.3317 13.2998 27.0683 14.513 27.5708C15.7263 28.0734 17.0266 28.332 18.3398 28.332C19.6531 28.332 20.9534 28.0734 22.1667 27.5708C23.3799 27.0683 24.4823 26.3317 25.4109 25.4031C26.3395 24.4745 27.0761 23.3721 27.5786 22.1589C28.0812 20.9456 28.3398 19.6453 28.3398 18.332C28.3398 15.6799 27.2863 13.1363 25.4109 11.261C23.5356 9.3856 20.992 8.33203 18.3398 8.33203C15.6877 8.33203 13.1441 9.3856 11.2688 11.261C9.39341 13.1363 8.33984 15.6799 8.33984 18.332V18.332Z"
                              stroke="white"
                              stroke-width="2.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </Link>
                      ) : (
                        <a className="a">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                          >
                            <path
                              d="M25.8398 25.832L31.6732 31.6654M8.33984 18.332C8.33984 19.6453 8.5985 20.9456 9.10105 22.1589C9.6036 23.3721 10.3402 24.4745 11.2688 25.4031C12.1974 26.3317 13.2998 27.0683 14.513 27.5708C15.7263 28.0734 17.0266 28.332 18.3398 28.332C19.6531 28.332 20.9534 28.0734 22.1667 27.5708C23.3799 27.0683 24.4823 26.3317 25.4109 25.4031C26.3395 24.4745 27.0761 23.3721 27.5786 22.1589C28.0812 20.9456 28.3398 19.6453 28.3398 18.332C28.3398 15.6799 27.2863 13.1363 25.4109 11.261C23.5356 9.3856 20.992 8.33203 18.3398 8.33203C15.6877 8.33203 13.1441 9.3856 11.2688 11.261C9.39341 13.1363 8.33984 15.6799 8.33984 18.332V18.332Z"
                              stroke="white"
                              stroke-width="2.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </SearchbarWrapper>
              </SearchbarSection>
              <div
                className="close"
                onClick={() => {
                  onClose();
                  set_side(0);
                  setS(false);
                }}
              >
                <img src="/images/icon-close02.svg" alt="" />
              </div>
            </div>
            <Link href="/login">
              <IsLogin>
                <div className="non-member-flex">
                  <div className="non-member">
                    <img src="/images/icon-non-member.svg" alt="" />
                  </div>
                  <div>
                    <div className="name-arrow">
                      <h2
                        onClick={() => {
                          router.push('/login/');
                          onClose();
                        }}
                        className="login"
                      >
                        모든메디 로그인 또는 가입하기
                      </h2>
                    </div>
                  </div>
                </div>
              </IsLogin>
            </Link>
          </LoginInfor>
        )}
        {isSearch && SearchModal}
        <MobileSideScroll show={show} cate_ID={cate_ID}>
          <div className="toggle-menu">
            <ul className="toggle-list">
              <div className="container">
                <ul className="sub-ul">
                  {taxonomy?.length
                    ? taxonomy.map((item, key) => (
                        <li
                          className={
                            cate_ID == item.ID ? 'sub-li tax on' : 'sub-li tax'
                          }
                        >
                          <span
                            className="parent"
                            onClick={() => set_cate_ID(item?.ID)}
                          >
                            {item.name}
                            {/* <img src="/images/mo-arrow-menu.svg" alt="" /> */}
                          </span>
                        </li>
                      ))
                    : null}

                  <li
                    onClick={() => (window.location.href = '/about')}
                    className="sub-li tax line"
                  >
                    <span className="pro-tit">모든메디란?</span>
                  </li>
                  <li
                    onClick={() => (window.location.href = '/service/faq')}
                    className="sub-li tax"
                  >
                    <span className="pro-tit">고객센터</span>
                  </li>
                  <li
                    onClick={() => (window.location.href = '/service/notice')}
                    className="sub-li tax"
                  >
                    <span className="pro-tit">공지사항</span>
                  </li>
                  <li
                    onClick={() => (window.location.href = '/review')}
                    className="sub-li tax"
                  >
                    <span className="pro-tit">이용후기</span>
                  </li>

                  <li
                    onClick={() => (window.location.href = '/story')}
                    className="sub-li tax"
                  >
                    <span className="pro-tit">스토리</span>
                  </li>
                  <li
                    onClick={() => (window.location.href = '/mypage/recommend')}
                    className="sub-li tax"
                  >
                    <span className="pro-tit">리워드</span>
                  </li>
                </ul>
                <ul className={'subul'}>
                  {cate?.children?.length || taxonomy?.length ? (
                    <Link href={`/products/${encodeURIComponent(cate?.name)}`}>
                      <li className={'child'}>
                        <a onClick={onClose}>
                          <a className="s-sub">
                            전체보기
                            <img src="/images/menu-li-arrow.svg" alt="" />
                          </a>
                        </a>
                      </li>
                    </Link>
                  ) : null}
                  {cate?.children?.length
                    ? cate?.children?.map((i, key) => (
                        // <li className={isActive ? 'active' : ''}>
                        <li
                          className={i.ID == cate_ID ? 'active child' : 'child'}
                        >
                          <Link
                            href={`/products/${encodeURIComponent(i.name)}`}
                          >
                            <a onClick={onClose}>
                              <a className="s-sub">
                                {i.name}
                                <img src="/images/menu-li-arrow.svg" alt="" />
                              </a>
                            </a>
                          </Link>
                        </li>
                      ))
                    : null}
                </ul>
              </div>
            </ul>
          </div>
          <div className="mo-list">
            <a href="/about">
              <span className="pro-tit">모든메디란?</span>
            </a>
            <a href="/service/faq">
              <span className="pro-tit">고객센터</span>
            </a>
            <a href="/service/notice">
              <span className="pro-tit">공지사항</span>
            </a>
            <a href="/review">
              <span className="pro-tit">이용후기</span>
            </a>
            <a href="/story">
              <span className="pro-tit">스토리</span>
            </a>
            <a href="/mypage/recommend">
              <span className="pro-tit">리워드</span>
            </a>
            {/* <ul>
              {lately?.length > 0 ? (
                <li className="box">
                  <div>
                    <p>최근 본 상품</p>
                  </div>
                  <div className="lately">
                    <Slider {...settings}>
                      {lately?.length > 0
                        ? lately.slice(0, 6).map((item, key) => (
                            <div className="product-m">
                              <div
                                onClick={() => {
                                  router.push(`/product/${item.ID}`);
                                  onClose();
                                }}
                                style={{
                                  backgroundImage: `url(${item.thumbnail})`,
                                }}
                                className="pro-item"
                              ></div>
                              <p>에프페시아(시플라제약회사)</p>
                            </div>
                          ))
                        : null}
                    </Slider>
                  </div>
                </li>
              ) : null}
            </ul> */}
            {/* <div className="list-gradient"></div> */}
          </div>
          {/* <Category show={show}></Category> */}
          {/* <OtherMenu></OtherMenu> */}
        </MobileSideScroll>
      </SideMenuInner>
    </SideMenuWrapper>
  );
};

export default MobileSideMenu;
