import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { HeaderWrapper, MainHeader } from './styled';

const Header = (props) => {
  return (
    <HeaderWrapper>
      <MainHeader>
        <Link href="/">
          <img
            onClick={() => (window.location.hreef = 'https://modnmedi.net/')}
            src={'/images/main-logo.png'}
            alt="모든메디"
            className="logo"
          />
        </Link>
      </MainHeader>
    </HeaderWrapper>
  );
};

export default Header;
