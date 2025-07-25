<script>
	export let data;
	$: title = data?.post?.metadata?.title ?? '';
	$: description = data?.post?.metadata?.description ?? '';
</script>

<svelte:head>
	<title>{title ? `${title} | Blog` : 'Blog'}</title>
	{#if description}
		<meta name="description" content={description} />
	{/if}
</svelte:head>

<div
	class="blog-layout mx-auto max-w-3xl bg-[var(--color-bg,#fff)] px-4 py-8 text-[var(--color-text,#222)]"
>
	<header class="mb-8">
		<h1 class="mb-2 text-3xl font-bold text-[var(--color-primary,#19c7a6)]">{title}</h1>
		<!-- {#if description}
			<p class="mb-4 text-lg text-[var(--color-modal-date,#6b7280)]">{description}</p>
		{/if} -->
	</header>
	<main class="min-h-[60vh]">
		<slot />
	</main>
	<footer class="mt-12 text-center text-sm text-[var(--color-muted,#aaa)]"></footer>
</div>

<style>
	.blog-layout {
		box-sizing: border-box;
		border-radius: var(--radius-md, 8px);
		font-family: var(--font-family, system-ui, sans-serif);
		background: var(--color-bg, #fff);
		color: var(--color-text, #222);
	}
</style>
