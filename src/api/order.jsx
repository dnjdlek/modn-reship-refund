import initAxios from './defaultClient';

const nameSpace = '/v1/order';

export const FailOrderGetPost = async (args) => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/fail', {
    params: args,
  });
};

export const OrderFailResend = async (args) => {
  const axios = initAxios();
  return await axios.post(nameSpace + '/fail/resend', args);
};

export const OrderFailRefund = async (args) => {
  const axios = initAxios();
  return await axios.post(nameSpace + '/fail/refund', args);
};

export const OrderGetPosts = async (args) => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/', {
    params: {
      paged: args.paged,
      posts_per_page: args.posts_per_page,
      status: args.status,
    },
  });
};

export const OrderGetStatus = async (args) => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/status/', {});
};

export const OrderGetProducts = async (args) => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/products/', {
    params: {
      paged: args.paged,
      posts_per_page: args.posts_per_page,
      is_status_complete: args.is_status_complete,
      is_do_review: args.is_do_review,
    },
  });
};

export const OrderPost = async (args) => {
  const axios = initAxios();
  return await axios.post(nameSpace + '/', {
    order_items: args.order_items,
    point: args.point,
    coupon_code: args.coupon_code,
    billing_name: args.billing_name,
    billing_name_eng: args.billing_name_eng,
    billing_email: args.billing_email,
    billing_phone: args.billing_phone,
    address_KEY: args.address_KEY,
    new_address: args.new_address,
    payment_method: args.payment_method,
  });
};

export const OrderGetPost = async (args) => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/fail/test22', {
    params: args,
  });
};
export const OrderCancel = async (args) => {
  const axios = initAxios();
  return await axios.post(nameSpace + '/' + args.order_ID + '/cancel/', {});
};

export const OrderGetCoupon = async (args) => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/coupon/' + args.coupon_code, {
    params: {
      subtotal: args.subtotal,
      cart_items: args.cart_items,
    },
  });
};
export const OrderUploadCert = async (args) => {
  const axios = initAxios();
  return await axios.post(nameSpace + '/upload/cert', args, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};
