import initAxios from './defaultClient';
import axios from 'axios';

const nameSpace = '/v1/me';

export const Getme = async (args) => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/', {});
};

export const getMeLogin = async (args) => {
  if (args.userToken) {
    axios.defaults.headers.common = {
      Authorization: `Bearer ${args.userToken}`,
    };
  }
  return await axios.get('https://wp.modnmedi.com/wp-json' + nameSpace, {});
};

export const Postme = async (args) => {
  const axios = initAxios();
  return await axios.post(nameSpace + '/', args);
};

export const GetPoint = async (args) => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/point', {
    params: {
      paged: args.paged,
      posts_per_page: args.posts_per_page,
    },
  });
};

export const GetRecommender = async (args) => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/recommend', {
    params: {
      paged: args.paged,
      posts_per_page: args.posts_per_page,
    },
  });
};

export const GetRecommendRank = async (args) => {
  const axios = initAxios();
  return await axios.get('/v1/recommend/rank', {
    params: {
      paged: args.paged,
      posts_per_page: args.posts_per_page,
    },
  });
};

export const GetQna = async (args) => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/qna', {
    params: args,
  });
};

export const GetNotifications = async (args) => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/notifications', {});
};
// export const EventGetPosts = async (args) => {
//     return await axios.get( nameSpace + '/notification',{

//     })
// }

export const GetAddress = async (args) => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/address', {});
};
