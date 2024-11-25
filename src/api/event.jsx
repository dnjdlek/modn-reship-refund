import initAxios from './defaultClient';

const nameSpace = '/v1/event';

export const EventGetPosts = async args => {
  // 이벤트 리스트
  const axios = initAxios();
  return await axios.get(nameSpace + '/', {
    params: {
      paged: args.paged,
      posts_per_page: args.posts_per_page,
      category_ID: args.category_ID,
    },
  });
};

export const EventGetPost = async args => {
  // 이벤트 싱글
  const axios = initAxios();
  return await axios.get(nameSpace + '/' + args.event_ID, {});
};

export const EventGetRelated = async args => {
  // 관련 이벤트
  const axios = initAxios();
  return await axios.get(nameSpace + '/' + args.event_ID + '/related', {});
};
