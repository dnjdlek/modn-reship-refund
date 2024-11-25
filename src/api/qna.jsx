import initAxios from './defaultClient';

const nameSpace = '/v1/qna';

export const QnaInit = async (args) => {
  const axios = initAxios();
  return await axios.post(nameSpace + '/tmp', {});
};

export const QnaGetGallery = async (args) => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/gallery', {
    params: {
      qna_ID: args.qna_ID,
    },
  });
};

export const QnaInsertImage = async (args, tmp_qna_ID) => {
  const axios = initAxios();
  return await axios.post(nameSpace + '/upload/' + tmp_qna_ID, args, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const QnaDeleteImage = async (args) => {
  const axios = initAxios();
  return await axios.delete(nameSpace + '/gallery', {
    params: {
      attachment_ID: args.attachment_ID,
    },
  });
};

export const QnaUpdatePost = async (args) => {
  const axios = initAxios();
  return await axios.post(nameSpace, {
    tmp_qna_ID: args.tmp_qna_ID,
    product_array: args.product_array,
    category: args.category,
    question_comment: args.question_comment,
  });
};

export const QnaDeletePost = async (args) => {
  const axios = initAxios();
  return await axios.delete(nameSpace, {
    params: args,
  });
};

// 미사용 21.08.01
export const QnaInsertPost = async (args) => {
  const axios = initAxios();
  return await axios.post(nameSpace, {
    product_ID: args.product_ID,
    order_ID: args.order_ID,
    category: args.category,
    question_comment: args.question_comment,
  });
};
