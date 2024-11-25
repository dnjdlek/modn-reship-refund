import initAxios from './defaultClient';

const nameSpace = '/v1/global';

export const Global = async args => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/', {});
};

export const GlobalPopup = async args => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/popup', {});
};
