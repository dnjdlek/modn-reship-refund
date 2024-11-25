import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Link from 'next/link';
import { MainContainerWrapper, Wrapper } from './styled';

const MainContainer = (props) => {
  return (
    <Wrapper>
      <Header />
      <MainContainerWrapper>{props.children}</MainContainerWrapper>
    </Wrapper>
  );
};

export default MainContainer;
