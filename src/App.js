import React from 'react';
// IE11의 경우
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom';
import Loading from './components/Loading';
import AuthContainer from './components/AuthContainer';
import ScrollToTop from './components/ScrollTop/ScrollToTop';
import Home from './views/Home';
import Login from './views/Auth/Login';
import Register from './views/Auth/Register';
import Register_id from './views/Auth/Register/compontents/register_id';
import Register_infor from './views/Auth/Register/compontents/register_infor';
import Register_pw from './views/Auth/Register/compontents/register_pw';
import Register_code from './views/Auth/Register/compontents/register_code';

import ForggotPw from './views/Auth/ForggotPw';
import Best from './views/Best/';
import Event from './views/Event';
import EventSingle from './views/Event/Single/';
import Review from './views/Review';
import ReviewSingle from './views/Review/Single';
import Story from './views/Story';
import StorySingle from './views/Story';
import Service from './views/Service/index';
import OneInquiry from './views/Service/OneInquiry';
import Products from './views/Products';
import ProductSingle from './views/Products/Single';
import Search from './views/Search';
import Mypage from './views/Mypage';
import Recommend from './views/Mypage/Recommend';
import Account from './views/Mypage/Account';
import Inquire from './views/Mypage/Inquire';
import OrderList from './views/Mypage/OrderList';
// import OrderSingle from './views/Mypage/OrderList/Single';
import OrderView from './views/Order/OrderView';
import OrderDelivery from './views/Mypage/OrderList/Delivery';
import Point from './views/Mypage/Point';
import Withdraw from './views/Mypage/Withdraw';
import Order from './views/Order/';
import Basket from './views/Order/Basket';
import Page from './views/Page';
// import Guide from './views/Page/Guide';
// import Privacy from './views/Page/Privacy';
// import Terms from './views/Page/Terms';
// import TS from './views/Page/TS';
import PointShop from './views/PointShop';
import PointShopSingle from './views/PointShop/Sinlge';
import Chatbot from './views/Chatbot';

import Parking from './views/Parking';

import License from './views/License';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrderLookup from './views/Mypage/OrderList/Lookup';

function App() {
  const isLoading = useSelector((state) => state.global.loading);
  const isChatbot = useSelector((state) => state.global.chatbot_popup);
  const isLogined = useSelector((state) => state.me.user_data);

  // return (<Parking/>);
  return (
    <>
      <Helmet>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <title>
          모든메디 | 핀페시아 카마그라 타다라필 시알리스 실데나필 직구 구매대행
          전문몰
        </title>
        <link
          rel="shortcut icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="16x16"
        />
        <meta
          name="naver-site-verification"
          content="4b0ed706a01fec19d87bbad060f201b02b1d827e"
        />
        {/* <meta
          name="naver-site-verification"
          content="100c6fab6e82b506f2797fb4cd6b6b81ab424eb6"
        /> */}
      </Helmet>
      <ScrollToTop />
      {/* 토스트 얼럿 */}
      <ToastContainer />
      <Switch>
        <Route exact={true} path="/" component={Home} />

        {/* 로그인관련 */}
        <Route exact={true} path="/login" component={Login} />
        <Route
          exact={true}
          path="/register/:register_ID"
          component={Register}
        />

        <Route exact={true} path="/find-pw" component={ForggotPw} />

        {/* 베스트 */}
        <Route exact={true} path="/shop" component={Best} />
        <Route exact={true} path="/shop/:category_ID" component={Best} />

        {/* 이벤트 */}
        <Route exact={true} path="/event" component={Event} />
        <Route exact={true} path="/event/:event_ID" component={EventSingle} />

        {/* 이용후기 */}
        <Route exact={true} path="/review" component={Review} />
        <Route
          exact={true}
          path="/review/:review_ID"
          component={ReviewSingle}
        />

        {/* 건강정보 */}
        {/* <Route exact={true} path="/story" component={Story} />
        <Route exact={true} path="/story/:story_ID" component={StorySingle} /> */}

        {/* 고객센터 */}
        <Route exact={true} path="/service/faq" component={Service} />
        <Route exact={true} path="/service/notice" component={Service} />
        <Route
          exact={true}
          path="/service/notice/:notice_ID"
          component={Service}
        />
        <Route exact={true} path="/service/OneOn" component={Service} />

        {/* 1대1 문의 */}
        <Route exact={true} path="/oneinquiry" component={OneInquiry} />

        {/* 제품 */}
        <Route
          exact={true}
          path="/products/:category_ID"
          component={Products}
        />
        <Route
          exact={true}
          path="/product/:product_ID"
          component={ProductSingle}
        />

        {/* 검색결과페이지 */}
        <Route exact={true} path="/search/:keyword" component={Search} />

        {/* 페이지 */}
        <Route exact={true} path="/page/:page_ID" component={Page} />

        {/* 포인트상점 */}
        <Route exact={true} path="/pointshop" component={PointShop} />
        <Route
          exact={true}
          path="/pointshop/:pointshop_ID"
          component={PointShopSingle}
        />

        {/* 라이센스 */}
        <Route exact={true} path="/license" component={License} />

        {/* <AuthContainer> */}
        {/* 마이페이지 로직 */}
        <Route exact={true} path="/mypage" component={Mypage} />
        <Route exact={true} path="/mypage/account" component={Account} />
        <Route exact={true} path="/mypage/inquire" component={Inquire} />
        <Route exact={true} path="/mypage/orderlist" component={OrderList} />
        <Route
          exact={true}
          path="/mypage/recommendperson"
          component={Recommend}
        />
        <Route
          exact={true}
          path="/mypage/orderlist/:order_ID"
          component={OrderLookup}
        />

        {/* <Route exact={true} path="/mypage/order/:order_ID" component={OrderSingle} /> <- 마이페이지와 다른 오더 싱글 오더 뷰 싱글로 변경  */}
        {/* <Route exact={true} path="/mypage/order/:order_ID/delivery" component={OrderDelivery} /> <- 사용 안함 */}
        <Route exact={true} path="/mypage/point" component={Point} />
        <Route exact={true} path="/mypage/withdraw" component={Withdraw} />

        {/* 주문쪽 로직 */}
        <Route exact={true} path="/basket" component={Basket} />
        <Route exact={true} path="/order" component={Order} />
        <Route
          exact={true}
          path="/order/view/:order_ID"
          component={OrderView}
        />
        {/* </AuthContainer> */}
        {/* 마이페이지 */}
        {/* 장바구니 아직안됨 */}
        {/* 1대1문의 페이지 아직 안됨 */}
      </Switch>
      {isLoading ? <Loading /> : ''}
      {/* {isLogined ? <Chatbot show={isChatbot} /> : ''} */}
    </>
  );
}

export default App;
