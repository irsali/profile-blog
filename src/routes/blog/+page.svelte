<script lang="ts">
	import type { PostMetaWithUrl } from '$lib/types';

	export let data: { posts: PostMetaWithUrl[] };
	const posts = data.posts;

	const pageSize = 10;
	let currentPage = 1;
	const totalPages = Math.ceil(posts.length / pageSize);

	$: paginatedPosts = posts.slice((currentPage - 1) * pageSize, currentPage * pageSize);

	function goToPage(page: number) {
		if (page >= 1 && page <= totalPages) {
			currentPage = page;
		}
	}
</script>

<header>
	<h1>Blogs</h1>
</header>

<ul>
	{#each paginatedPosts as post}
		<li>
			<a href={post.url}>{post.title}</a>
			<small>{post.date}</small>
		</li>
	{/each}
</ul>

{#if totalPages > 1}
	<nav class="pagination">
		<button on:click={() => goToPage(currentPage - 1)} disabled={currentPage === 1}
			>&laquo; Prev</button
		>
		{#each Array(totalPages) as _, i}
			<button on:click={() => goToPage(i + 1)} class:active={currentPage === i + 1}>{i + 1}</button>
		{/each}
		<button on:click={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}
			>Next &raquo;</button
		>
	</nav>
{/if}

<style>
	.pagination {
		display: flex;
		gap: 0.5rem;
		margin-top: 2rem;
	}
	.pagination button {
		background: none;
		border: 1px solid #ccc;
		padding: 0.4em 0.8em;
		border-radius: 4px;
		cursor: pointer;
		font-size: 1rem;
		transition:
			background 0.2s,
			color 0.2s;
	}
	.pagination button.active {
		background: var(--primary-link);
		color: #fff;
		border-color: var(--primary-link);
	}
	.pagination button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
