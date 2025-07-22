<header class="profile-header">
	<div class="profile-header__left">
		<a href="/">Irshad Ali</a>
	</div>
	<nav class="profile-header__right">
		<a href="/blog">Blog</a>
	</nav>
</header>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<style>
	
	.profile-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.2rem 0 2rem 0;
		border-bottom: 1px solid #eee;
		margin-bottom: 2rem;
	}
	.profile-header__left {
		font-weight: bold;
		font-size: 1.4rem;
		letter-spacing: 0.02em;
	}
	.profile-header__right a {
		margin-left: 1.5rem;
		text-decoration: none;
		color: var(--header-link);
		font-size: 1rem;
		transition: color 0.2s;
	}
	.profile-header__right a:hover {
		color: var(--primary-link);
	}
</style>
