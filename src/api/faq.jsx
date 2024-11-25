import initAxios from './defaultClient';

const nameSpace = '/v1/faq';

export const FaqGetPosts = async (args) => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/', {
    params: {
      posts_per_page: args.posts_per_page,
      paged: args.paged,
      category_ID: args.category_ID,
    },
  });
};

export const FaqGetCategory = async (args) => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/category', {
    params: args,
  });
};
