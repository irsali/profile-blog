<script>
	export let data;
	console.log('post layout data: ', data);
	$: title = data?.post?.metadata?.title ?? '';
	$: description = data?.post?.metadata?.description ?? '';
</script>

<svelte:head>
	<title>{title ? `${title} | Blog` : 'Blog'}</title>
	{#if description}
		<meta name="description" content={description} />
	{/if}
</svelte:head>

<div class="blog-layout">
	<header>
		<h1>{title}</h1>
		{#if description}
			<p class="blog-description">{description}</p>
		{/if}
		<slot name="header" />
	</header>
	<main>
		<slot />
	</main>
	<footer>
		<slot name="footer" />
	</footer>
</div>

<style>
	.blog-layout {
		max-width: 700px;
		margin: 0 auto;
		padding: 2rem 1rem;
		font-family: system-ui, sans-serif;
	}
	header h1 {
		margin-bottom: 0.25em;
		font-size: 2.2rem;
	}
	.blog-description {
		color: #666;
		margin-bottom: 1.5em;
	}
	main {
		min-height: 60vh;
	}
	footer {
		margin-top: 2em;
		color: #aaa;
		font-size: 0.9em;
		text-align: center;
	}
</style>
