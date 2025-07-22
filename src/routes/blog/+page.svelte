<script lang="ts">
	import type { PostMetaWithUrl } from '$lib/types';

	export let data: { posts: PostMetaWithUrl[] };
	const posts = data.posts;

</script>

<h1>Blogs</h1>
<ul>
	{#each posts as post}
		<li>
			<a href={post.url}>{post.title}</a>
			<small>{post.date}</small>
		</li>
	{/each}
</ul>

