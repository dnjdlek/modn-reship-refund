import axios from 'axios';
import { useEffect } from 'react';

const initAxios = () => {
  // axios.defaults.withCredentials = true;
  if (typeof localStorage !== 'undefined') {
    if (localStorage) {
      const localToken = localStorage.getItem('user_token');

      if (localToken) {
        axios.defaults.headers.common = {
          Authorization: `Bearer ${localToken}`,
        };
      }
    }
  }

  const baseURL = (() => {
    // return process.env.NEXT_PUBLIC_API_URI + 'https://wp.modnmedi.com//wp-json';
    return 'https://modnmedi.net/wp-json';
    // return process.env.NEXT_PUBLIC_API_URI + '/wp-json';
  })();

  const defaultClient = axios.create({
    baseURL,
    // headers: {
    //   'Access-Control-Allow-Origin': '*', // Replace with the allowed origin or set it to '*'
    // },
    // withCredentials: true,
  });

  return defaultClient;
};

export default initAxios;
