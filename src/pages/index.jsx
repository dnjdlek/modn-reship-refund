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
      </Head>
      {/* <Header noBold={true} border={true} /> */}
      {/* <Home ssrData={{ homeBanners, best }} /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Index;
