<script lang="ts">
	import type { SlugPostDto } from '$lib/types';
	import { onMount } from 'svelte';

	export let data: SlugPostDto;
	const { content, metadata } = data.post;

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://giscus.app/client.js';
		script.setAttribute('data-repo', 'irsali/profile-blog');
		script.setAttribute('data-repo-id', 'R_kgDOPSSJrg');
		script.setAttribute('data-category', 'General');
		script.setAttribute('data-category-id', 'DIC_kwDOPSSJrs4CtYa4');
		script.setAttribute('data-mapping', 'title');
		script.setAttribute('data-strict', '0');
		script.setAttribute('data-reactions-enabled', '1');
		script.setAttribute('data-emit-metadata', '0');
		script.setAttribute('data-input-position', 'bottom');
		script.setAttribute('data-theme', 'noborder_light');
		script.setAttribute('data-lang', 'en');
		script.setAttribute('data-loading', 'lazy');
		script.crossOrigin = 'anonymous';
		script.async = true;
		document.querySelector('.giscus')?.appendChild(script);
	});
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

<div class="giscus"></div>
