<script lang="ts">
	import type { SlugPostDto } from '$lib/types';

	export let data: SlugPostDto;
	const { content, metadata } = data.post;
</script>

<div class="bg-[var(--color-bg,#fff)] text-[var(--color-text,#222)]">
	{#if content}
		<svelte:component this={content} />
		{#if metadata?.date}
			<hr class="border-[var(--color-border,#e5e7eb)]" />
			<small class="text-[var(--color-modal-date,#6b7280)]">Posted on {metadata.date}</small>
		{/if}
	{:else}
		<h1 class="text-[var(--color-primary,#19c7a6)]">Not found</h1>
	{/if}
</div>
