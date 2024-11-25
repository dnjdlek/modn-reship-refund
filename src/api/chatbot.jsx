import initAxios from './defaultClient';

const nameSpace = '/v1/chatbot';

// 액션 전송
export const ChatbotAction = async args => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/', {
    params: {
      action: args.action_ID,
      props: args.props,
    },
  });
};

export const ChatbotPost = async args => {
  return await axios.post(nameSpace + '/qna', {
    question_title: args.question_title,
    question_comment: args.question_comment,
    user_email: args.user_email,
    user_phone: args.user_phone,
  });
};

// 등업신청
export const ChatbotRoleup = async args => {
  const axios = initAxios();
  return await axios.post(nameSpace + '/roleup', {
    content: args.content,
    buy_product: args.buy_product,
  });
};
