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

<div class="blog-list-layout">
	<header class="flex items-center justify-between border-b border-gray-200 py-5">
		<div class="flex flex-1 text-xl font-bold tracking-wide">
			<a href="/">Irshad Ali</a>
		</div>
		<div class="flex flex-1 items-center justify-end"></div>
		<nav class="flex flex-1 items-center justify-end space-x-6">
			<button
				class="search-btn flex items-center gap-2 rounded px-3 py-1 text-gray-700 transition-colors hover:bg-gray-100 hover:text-blue-600"
				on:click={openSearch}
				title="Search blogs"
				aria-label="Open search modal"
			>
				<Search class="h-6 w-6" />
				<span class="ml-1 text-base font-medium">Ctrl K</span>
			</button>
			<a href="/" class="text-base text-gray-800 hover:text-blue-600">Home</a>
			<a href="/blog" class="text-base text-gray-800 hover:text-blue-600">Blog</a>
			<a href="/about" class="text-base text-gray-800 hover:text-blue-600">About</a>
		</nav>
	</header>

	{#if showSearch}
		<div
			class="fixed left-0 top-0 z-50 flex h-screen w-screen items-start justify-center bg-black bg-opacity-70"
		>
			<div
				class="animate-fadeInModal relative mt-[5vh] max-h-[70vh] min-w-[340px] max-w-[500px] overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl"
			>
				<input
					id="blog-search-input"
					class="mb-5 w-full rounded-lg border border-gray-300 px-5 py-3 text-lg shadow-sm focus:border-blue-500 focus:outline-none"
					type="text"
					placeholder="Search blog posts..."
					bind:value={searchQuery}
					on:input={handleSearchInput}
				/>
				<button
					class="absolute right-4 top-4 cursor-pointer border-none bg-none text-xl text-gray-400 hover:text-blue-600"
					on:click={closeSearch}
					aria-label="Close search modal"
				>
					<X class="h-6 w-6" />
				</button>
				{#if results.length > 0}
					<ul class="m-0 list-none p-0">
						{#each results as post}
							<li class="mb-3">
								<a
									href={post.url}
									class="font-medium text-blue-600 hover:underline"
									on:click={closeSearch}>{post.title}</a
								>
								<small class="block text-gray-500">{post.date}</small>
							</li>
						{/each}
					</ul>
				{:else if searchQuery.length > 0}
					<p class="italic text-gray-400">No results found.</p>
				{/if}
			</div>
		</div>
	{/if}

	<slot />

	<!-- Tailwind animation for modal -->
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
	</style>
</div>
