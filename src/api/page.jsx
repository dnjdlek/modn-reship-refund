import initAxios from './defaultClient';

const nameSpace = '/v1/page';

export const PageGetPost = async args => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/' + args.page_ID, {});
};
