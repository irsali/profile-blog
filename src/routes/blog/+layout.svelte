<script lang="ts">
	import Fuse from 'fuse.js';
	import { onMount } from 'svelte';
	import { X, Search } from 'lucide-svelte';
	export let data;
	let searchQuery = '';
	let showSearch = false;
	let results: any[] = [];
	let fuse: Fuse<any>;

	onMount(() => {
		if (data?.posts) {
			fuse = new Fuse(data.posts, {
				keys: ['title', 'description', 'tags', 'categories'],
				threshold: 0.3
			});
		}
		// Keyboard shortcut Ctrl+K to open search
		const handler = (e: KeyboardEvent) => {
			if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
				e.preventDefault();
				openSearch();
			}
		};
		window.addEventListener('keydown', handler);
		return () => window.removeEventListener('keydown', handler);
	});

	function handleSearchInput(e: Event) {
		searchQuery = (e.target as HTMLInputElement).value;
		if (searchQuery.length > 0 && fuse) {
			results = fuse.search(searchQuery).map((r) => r.item);
		} else {
			results = [];
		}
	}

	function openSearch() {
		showSearch = true;
		setTimeout(() => {
			const input = document.getElementById('blog-search-input');
			if (input) input.focus();
		}, 0);
	}
	function closeSearch() {
		showSearch = false;
		searchQuery = '';
		results = [];
	}
</script>

<svelte:head>
	<title>Blogs | Irshad Ali</title>
</svelte:head>

<div class="blog-list-layout px-4 md:px-8 lg:px-16">
	<header
		class="bg-opacity-80 sticky top-0 z-40 flex items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-bg)] py-5 text-[var(--color-text)] backdrop-blur-sm"
	>
		<div class="flex text-xl font-bold tracking-wide">
			<a href="/">Irshad Ali</a>
		</div>
		<nav class="flex items-center justify-end space-x-6 px-2 md:px-4 lg:px-8">
			<button
				class="search-btn flex items-center gap-2 rounded px-3 py-1 text-[var(--color-text)] transition-colors hover:bg-[var(--color-muted)] hover:text-[var(--color-primary)]"
				on:click={openSearch}
				title="Search blogs"
				aria-label="Open search modal"
			>
				<Search class="h-6 w-6" />
				<span class="ml-1 text-base font-medium">Ctrl K</span>
			</button>
			<a href="/blog" class="text-base text-[var(--color-text)] hover:text-[var(--color-primary)]"
				>Blog</a
			>
		</nav>
	</header>

	{#if showSearch}
		<div
			class="fixed top-0 left-0 z-[var(--z-index-modal,1000)] flex h-screen w-screen items-start justify-center px-2 md:px-8"
			style="background: var(--color-modal-overlay); backdrop-filter: blur(8px);"
		>
			<div
				class="animate-fadeInModal shadow-3xl relative mt-[5vh] max-h-[70vh] w-full overflow-y-auto border border-[var(--color-modal-border)] bg-[var(--color-modal-bg)] p-6 sm:w-[500px] md:w-[700px] md:p-8 lg:w-[900px] xl:w-[900px]"
				style="box-shadow: 0 8px 32px var(--color-modal-shadow,rgba(0,0,0,0.10));"
			>
				<button
					class="absolute top-4 right-4 cursor-pointer border-none bg-none text-xl text-[var(--color-modal-close)] hover:text-[var(--color-primary)] focus:outline-none"
					on:click={closeSearch}
					aria-label="Close search modal"
				>
					<X class="h-6 w-6" />
				</button>
				<h2
					class="mb-4 flex items-center gap-2 text-xl font-semibold text-[var(--color-modal-title)]"
				>
					<Search class="h-5 w-5 text-[var(--color-primary)]" />
					<span>Search Blog</span>
				</h2>
				<input
					id="blog-search-input"
					class="mb-5 w-full rounded-xl border border-[var(--color-modal-input-border)] bg-[var(--color-modal-input-bg)] px-5 py-3 text-lg text-[var(--color-modal-input-text)] shadow-sm focus:border-[var(--color-primary)] focus:outline-none"
					type="text"
					placeholder="Type to search..."
					bind:value={searchQuery}
					on:input={handleSearchInput}
					autocomplete="off"
				/>
				{#if results.length > 0}
					<ul class="m-0 list-none divide-y divide-[var(--color-modal-divider)] p-0">
						{#each results as post}
							<li
								class="flex flex-col rounded-md p-3 transition-colors hover:bg-[var(--color-modal-hover)]"
							>
								<a
									href={post.url}
									class="text-lg font-medium text-[var(--color-primary)]"
									on:click={closeSearch}
									>{post.title}
									<small class="mt-1 block text-[var(--color-modal-date)]">{post.date}</small>
								</a>
							</li>
						{/each}
					</ul>
				{:else if searchQuery.length > 0}
					<p class="text-[var(--color-modal-date)] italic">No results found.</p>
				{/if}
			</div>
		</div>
	{/if}
</div>

<div class="mb-4">
	<slot />
</div>

<!-- Tailwind animation for modal and custom scrollbar for modal -->
<style>
	@keyframes fadeInModal {
		from {
			opacity: 0;
			transform: translateY(-20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.animate-fadeInModal {
		animation: fadeInModal 0.25s;
	}
	/* Custom scrollbar for modal */
	.animate-fadeInModal::-webkit-scrollbar {
		width: 10px;
		background: var(--color-overlay, #f3f4f6);
	}
	.animate-fadeInModal::-webkit-scrollbar-thumb {
		background: #cbd5e1;
		border-radius: 6px;
	}
	.animate-fadeInModal::-webkit-scrollbar-thumb:hover {
		background: #94a3b8;
	}
	/* For Firefox */
	.animate-fadeInModal {
		scrollbar-width: thin;
		scrollbar-color: #cbd5e1 var(--color-overlay, #f3f4f6);
	}
</style>
