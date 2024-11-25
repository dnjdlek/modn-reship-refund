import initAxios from './defaultClient';

const nameSpace = '/v1/story';

export const StoryGetPosts = async args => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/', {
    params: {
      paged: args.paged,
      posts_per_page: args.posts_per_page,
      category_slug: args.category_slug,
    },
  });
};

export const StoryGetPost = async args => {
  const axios = initAxios();
  return await axios.get(nameSpace + '/' + args.story_ID, {});
};
