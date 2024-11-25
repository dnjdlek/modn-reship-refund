import initAxios from './defaultClient';

const nameSpace = '/v1/home';

export const HomeGetSlider = async args => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/slider', {});
};

export const HomeGetBest = async args => {
  const axios = initAxios();

  return await axios.get(nameSpace + '/best', {
    params: {
      category_ID: args.category_ID,
      posts_per_page: args.posts_per_page,
      paged: args.paged,
    },
  });
};

export const HomeGetBlog = async args => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/blog', {});
};

export const HomeGetCate = async args => {
  const axios = initAxios();

  return await axios.get(nameSpace + '/products/cate', {
    params: {
      category_ID: args.category_ID,
      posts_per_page: args.posts_per_page,
      paged: args.paged,
    },
  });
};

export const HomeGetReview = async args => {
  const axios = initAxios();

  return await axios.get(nameSpace + '/review', {});
};
