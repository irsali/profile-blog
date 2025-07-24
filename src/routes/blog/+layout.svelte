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

<div class="blog-list-layout border-b border-gray-200 px-4 md:px-8 lg:px-16">
	<header class="flex items-center justify-between px-2 py-5 md:px-6 lg:px-8">
		<div class="flex flex-1 text-xl font-bold tracking-wide">
			<a href="/">Irshad Ali</a>
		</div>
		<div class="flex flex-1 items-center justify-end"></div>
		<nav class="flex flex-1 items-center justify-end space-x-6 px-2 md:px-4 lg:px-8">
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
			class="fixed left-0 top-0 z-[var(--z-index-modal,1000)] flex h-screen w-screen items-start justify-center px-2 md:px-8"
			style="background: var(--color-overlay,rgba(0,0,0,0.6)); backdrop-filter: blur(8px);"
		>
			<div
				class="animate-fadeInModal shadow-3xl relative mt-[5vh] max-h-[70vh] w-full overflow-y-auto border border-gray-200 bg-white p-6 sm:w-[500px] md:w-[700px] md:p-8 lg:w-[900px] xl:w-[900px] dark:border-neutral-800 dark:bg-neutral-900"
				style="box-shadow: 0 8px 32px rgba(0,0,0,0.18);"
			>
				<button
					class="absolute right-4 top-4 cursor-pointer border-none bg-none text-xl text-gray-400 hover:text-blue-600 focus:outline-none"
					on:click={closeSearch}
					aria-label="Close search modal"
				>
					<X class="h-6 w-6" />
				</button>
				<h2
					class="mb-4 flex items-center gap-2 text-xl font-semibold text-gray-900 dark:text-gray-100"
				>
					<Search class="h-5 w-5 text-blue-600" />
					<span>Search Blog</span>
				</h2>
				<input
					id="blog-search-input"
					class="mb-5 w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-3 text-lg text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-100"
					type="text"
					placeholder="Type to search..."
					bind:value={searchQuery}
					on:input={handleSearchInput}
					autocomplete="off"
				/>
			   {#if results.length > 0}
				   <ul class="m-0 list-none divide-y divide-gray-100 p-0 dark:divide-neutral-800">
					   {#each results as post}
						   <li class="flex flex-col p-3 rounded-md transition-colors hover:bg-blue-50 dark:hover:bg-blue-900">
							   <a
								   href={post.url}
								   class="text-lg font-medium text-blue-600"
								   on:click={closeSearch}
								   >{post.title}
								   <small class="mt-1 block text-gray-500 dark:text-gray-400">{post.date}</small>
							   </a>
						   </li>
					   {/each}
				   </ul>
				{:else if searchQuery.length > 0}
					<p class="italic text-gray-400 dark:text-gray-500">No results found.</p>
				{/if}
			</div>
		</div>
	{/if}
</div>

<slot />

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
