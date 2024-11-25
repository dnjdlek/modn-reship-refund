import initAxios from './defaultClient';

const nameSpace = '/v1/auth';

export const isLogined = async () => {
  const axios = initAxios();
  return await axios.post('/jwt-auth/v1/token/validate');
};

export const SignIn = async args => {
  const axios = initAxios();
  return await axios.post(nameSpace + '/', {
    user_login: args.user_login,
    user_pw: args.user_pw,
  });
};
export const SignOut = async args => {
  const axios = initAxios();
  return await axios.post(nameSpace + '/logout', {});
};
export const DeleteUser = async args => {
  const axios = initAxios();
  return await axios.delete(nameSpace + '/', {
    params: { password: args.password },
  });
};

export const SignUp = async args => {
  const axios = initAxios();
  return await axios.post(nameSpace + '/register', {
    user_login: args.user_login,
    user_name: args.user_name,
    user_phone: args.user_phone,
    user_pw: args.user_pw,
    user_email: args.user_email,
    referer_code: args.referer_code,
  });
};

export const RePassord = async args => {
  const axios = initAxios();
  return await axios.post(nameSpace + '/forgot', {
    user_email: args.user_email,
  });
};
