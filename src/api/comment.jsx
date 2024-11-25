import initAxios from './defaultClient';

const nameSpace = '/v1/comment';

export const CommentGetPosts = async args => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/', {
    params: {
      post_ID: args.post_ID,
      posts_per_page: args.posts_per_page,
      paged: args.paged,
    },
  });
};

export const CommentInsert = async args => {
  const axios = initAxios();
  return await axios.post(nameSpace + '/', {
    post_ID: args.post_ID,
    comment_content: args.comment_content,
  });
};

export const CommentUpdate = async args => {
  const axios = initAxios();
  return await axios.patch(nameSpace + '/' + args.comment_ID, {
    comment_content: args.comment_content,
  });
};

export const CommentDelete = async args => {
  const axios = initAxios();
  return await axios.delete(nameSpace + '/' + args.comment_ID, {});
};
