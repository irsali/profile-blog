import { postService } from '$lib/services';

export const load = async () => {
	const posts = await postService.getAllPosts();
	const categories = await postService.getAllCategories();
	const tags = await postService.getAllTags();
	return { posts, categories, tags };
};

export const prerender = true;
