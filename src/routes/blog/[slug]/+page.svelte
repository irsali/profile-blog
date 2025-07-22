<script lang="ts">
	import type { SlugPostDto } from "$lib/types";

	export let data: SlugPostDto;
	const { content, metadata } = data.post;
</script>

{#if content}
	<svelte:component this={content} />
	{#if metadata?.date}
		<hr />
		<small>Posted on {metadata.date}</small>
	{/if}
{:else}
	<h1>Not found</h1>
{/if}
