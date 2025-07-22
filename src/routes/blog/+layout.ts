import { postService } from '$lib/services';

export const load = async () => {
	const posts = await postService.getAllPosts();
	return { posts };
};

export const prerender = true;
