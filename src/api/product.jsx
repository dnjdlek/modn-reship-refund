import initAxios from './defaultClient';

const nameSpace = '/v1/product';

export const ProductGetPosts = async (args) => {
  const axios = initAxios();
  return await axios.get('/v1/products/', {
    params: {
      orderby: args?.orderby,
      category_ID: args?.category_ID,
      keyword: args?.keyword,
      posts_per_page: args?.posts_per_page,
      paged: args?.paged,
    },
  });
};
export const ProductGetBests = async (args) => {
  const axios = initAxios();
  return await axios.get('/v1/products/best/', {
    params: {
      posts_per_page: args.posts_per_page,
    },
  });
};
export const ProductAllIDs = async (args) => {
  const axios = initAxios();
  return await axios.get('/v1/products/all_IDs', {});
};

export const ProductGetPost = async (args) => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/' + encodeURI(args.product_ID), {});
};

export const ProductGetRelated = async (args) => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/' + args.product_ID + '/related', {});
};

export const ProductGetPoint = async (args) => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/point', {
    params: {
      orderby: args.orderby,
      category_ID: args.category_ID,
      paged: args.paged,
      posts_per_page: args.posts_per_page,
    },
  });
};

export const ProductGetReview = async (args) => {
  const axios = initAxios();
  return await axios.get('/v1/review/product/' + encodeURI(args.product_ID), {
    params: {
      posts_per_page: args.posts_per_page,
      paged: args.paged,
    },
  });
};

export const ProductGetReviewAll = async (args) => {
  const axios = initAxios();
  return await axios.get('/v1/review/product/', {
    params: {
      posts_per_page: args.posts_per_page,
      paged: args.paged,
    },
  });
};

export const GlobalCategory = async (args) => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/category', {
    params: {
      category_ID: args.category_ID,
    },
  });
};
export const getCategory = async (args) => {
  const axios = initAxios();
  return await axios.get('/v1/category', {
    params: {
      category_ID: args.category_ID,
    },
  });
};
