import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Wrapper } from './styled';

const Error = ({ statusCode }) => {
  const router = useRouter();

  return (
    <>
      <Wrapper>
        <div className="content">
          <img src="/images/404.png" />
          <h1>페이지를 찾을 수 없습니다.</h1>
          <p>
            이용에 불편을 드려 죄송합니다.
            <br />
            올바른 URL을 입력하였는지 확인하세요.
          </p>
          <a onClick={() => router.push('/')}>메인으로 돌아가기</a>
        </div>
      </Wrapper>
    </>
  );
};
export default Error;
