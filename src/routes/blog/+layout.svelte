<div class="blog-list-layout">
	<header class="blog-header">
		<div class="blog-header__left">
			<a href="/">Irshad Ali</a>
		</div>
		<nav class="blog-header__right">
			<a href="/">Home</a>
			<a href="/blog">Blog</a>
		</nav>
	</header>

	<slot />
</div>

<style>
	.blog-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.2rem 0 2rem 0;
		border-bottom: 1px solid #eee;
		margin-bottom: 2rem;
	}
	.blog-header__left {
		font-weight: bold;
		font-size: 1.4rem;
		letter-spacing: 0.02em;
	}
	.blog-header__right a {
		margin-left: 1.5rem;
		text-decoration: none;
		color: var(--header-link);
		font-size: 1rem;
		transition: color 0.2s;
	}
	.blog-header__right a:hover {
		color: var(--primary-link);
	}
</style>
