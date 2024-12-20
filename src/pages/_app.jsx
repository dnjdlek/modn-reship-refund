import React, { useEffect } from 'react';
import '../Reset.css';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../components/theme';
import Wrapper from '../store';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './perfect-scrollbar.css';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'swiper/css';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import Alert from '../components/Alert';
import { RecoilRoot } from 'recoil';
import { SetLoading } from '../store/global';

const AppWrap = styled.div`
  .Toastify__toast-container {
    z-index: 999999 !important;
  }
`;

const App = ({ Component, pageProps }) => {
  const isLoading = useSelector((state) => state.global.loading);
  const isLogined = useSelector((state) => state.me.user_data);
  const router = useRouter();
  const Dispatch = useDispatch();

  useEffect(() => {
    const start = () => {
      // NProgress.start();
      Dispatch(SetLoading(true));
    };
    const end = () => {
      // NProgress.done();
      Dispatch(SetLoading(false));
    };

    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return (
    <RecoilRoot>
      <AppWrap>
        <Head>
          <title>
            모든메디 - 핀페시아 직구, 아보다트, 카마그라, 제니칼, 타다라필 등
            해외 구매대행 직구사이트
          </title>
          <link
            rel="shortcut icon"
            href="/favicon.ico"
            type="image/x-icon"
            sizes="16x16"
          />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />

          <meta
            property="title"
            content="모든메디 - 핀페시아 직구, 아보다트, 카마그라, 제니칼, 타다라필 등 해외 구매대행 직구사이트"
          />
          <meta
            property="description"
            content="모든메디는 핀페시아, 카마그라, 아보다트, 제니칼, 타다라필, 비달리스타, 다폭세틴, 시알리스 등 직구 구매대행 사이트이며, 최저가 구매대행 서비스로 100% 정품을 신속하게 배송합니다."
          />
          <meta
            property="keyword"
            content="모든메디, MODNMEDI, modnmedi, 핀페시아, 카마그라, 실데나필, 타다라필, 핀페시아 직구, 카마그라 직구, 슈퍼카마그라, 슈퍼카마그라 직구, 실데나필 직구, 실데나필 구매, 타다라필 직구, 타다라필 구매, 이버멕틴, 시알리스, 시알리스 직구, 시알리스 구매, 제니칼 직구, 이소티논 직구, 이소티논 구매, 로아큐탄 직구"
          />
          <link rel="canonical" href="https://modnmedi.com/" />
          <meta
            property="og:site_name"
            content="모든메디 - 핀페시아 직구, 아보다트, 카마그라, 제니칼, 타다라필 등 해외 구매대행 직구사이트"
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content="모든메디 - 핀페시아 직구, 아보다트, 카마그라, 제니칼, 타다라필 등 해외 구매대행 직구사이트"
          />
          <meta
            property="og:description"
            content="모든메디는 핀페시아, 카마그라, 아보다트, 제니칼, 타다라필, 비달리스타, 다폭세틴, 시알리스 등 직구 구매대행 사이트이며, 최저가 구매대행 서비스로 100% 정품을 신속하게 배송합니다."
          />
          <meta property="og:url" content="https://modnmedi.com/" />
          <meta
            property="og:image"
            content="https://wp.modnmedi.com//wp-content/uploads/2020/11/모든메디-로고-1200x630-1.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://wp.modnmedi.com//wp-content/uploads/2020/11/모든메디-로고-1200x630-1.png"
          />
        </Head>
        <ToastContainer />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />

          {isLoading ? <Loading /> : ''}
          <Alert />
        </ThemeProvider>
      </AppWrap>
    </RecoilRoot>
  );
};

export default Wrapper.withRedux(App);
// export default App;
