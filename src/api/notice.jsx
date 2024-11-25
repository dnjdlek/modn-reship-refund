import initAxios from './defaultClient';

const nameSpace = '/v1/notice';

export const NoticeGetPosts = async args => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/', {
    params: {
      paged: args.paged,
      posts_per_page: args.posts_per_page,
    },
  });
};

export const NoticeGetPost = async args => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/' + args.notice_ID, {});
};
