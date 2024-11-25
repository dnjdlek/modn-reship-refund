import initAxios from './defaultClient';

const nameSpace = '/v1/review';

export const ReviewGetPosts = async (args) => {
	const axios = initAxios();
	return await axios.get(nameSpace + '/', {
		params: {
			paged: args.paged,
			posts_per_page: args.posts_per_page,
			category_ID: args.category_ID,
		},
	});
};

export const ReviewGetBest = async (args) => {
	const axios = initAxios();
	return await axios.get(nameSpace + '/best', {});
};

export const ReviewGetPost = async (args) => {
	const axios = initAxios();
	return await axios.get(nameSpace + '/' + args.review_ID, {});
};
export const ReviewDeletePost = async (args) => {
	const axios = initAxios();
	return await axios.delete(nameSpace + '/' + args.review_ID, {});
};

export const ReviewInit = async (args) => {
	const axios = initAxios();
	return await axios.post(nameSpace + '/tmp', {
		product_ID: args.product_ID,
		order_ID: args.order_ID,
	});
};

export const ReviewInsertPost = async (args) => {
	const axios = initAxios();
	return await axios.post(nameSpace + '/' + args.tmp_review_ID, args);
};

export const ReviewGetGallery = async (args) => {
	const axios = initAxios();
	return await axios.get(nameSpace + '/gallery', {
		params: {
			review_ID: args.review_ID,
		},
	});
};

export const ReviewInsertImage = async (args, tmp_review_ID) => {
	const axios = initAxios();
	return await axios.post(nameSpace + '/upload/' + tmp_review_ID, args, {
		headers: { 'Content-Type': 'multipart/form-data' },
	});
};

export const ReviewDeleteImage = async (args) => {
	const axios = initAxios();
	return await axios.delete(nameSpace + '/gallery', {
		params: {
			attachment_ID: args.attachment_ID,
		},
	});
};
