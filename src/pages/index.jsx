import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
// import Home from '../views/Home';
// import HomeSlider from '../views/Home/Slider/HomeSlider';
import Footer from '../components/Footer';
// import { HomeGetSlider } from '../api/home';
import { ProductGetPosts } from '../api/product';

const Index = ({ homeBanners, best }) => {
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="naver-site-verification"
          content="01694ecfcf5d32baabb12a3ad4b66328c8a2a7d4"
        />
      </Head>
      main
      {/* <Header noBold={true} border={true} /> */}
      {/* <Home ssrData={{ homeBanners, best }} /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Index;
