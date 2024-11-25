import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { isLogined } from '../../api/auth';

const AuthContainer = (props) => {
  const router = useRouter();
  const [tmp, set_tmp] = useState(0);

  useEffect(() => {
    if (!tmp) {
      if (localStorage.getItem('user_token')) {
        isLogined()
          .then((response) => {
            if (response.data.data.status != 200) {
              // toast.error('로그인 정보가 만료되었습니다.');
              localStorage.removeItem('user_token');
              window.location.href('/login');
            }
          })
          .catch((error) => {
            console.log(error);
            localStorage.removeItem('user_token');
          });
      } else {
        // toast.error('로그인이 필요합니다.');
        router.replace('/login');
      }
    }
    set_tmp(1);
  }, [router]);

  return <>{tmp ? props.children : <></>}</>;
};

export default AuthContainer;
