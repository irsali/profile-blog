<script lang="ts">
import Fuse from 'fuse.js';
import { onMount } from 'svelte';

export let data;
let searchQuery = '';
let showSearch = false;
let results: any[] = [];
let fuse: Fuse<any>;

onMount(() => {
	if (data?.posts) {
		fuse = new Fuse(data.posts, {
			keys: ['title', 'description', 'tags', 'categories'],
			threshold: 0.3,
		});
	}
});

function handleSearchInput(e: Event) {
	searchQuery = (e.target as HTMLInputElement).value;
	if (searchQuery.length > 0 && fuse) {
		results = fuse.search(searchQuery).map(r => r.item);
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
	<header class="flex items-center justify-between py-5 border-b border-gray-200 mb-8">
		<div class="flex flex-1 font-bold text-xl tracking-wide">
			<a href="/">Irshad Ali</a>
		</div>
		<div class="flex flex-1 justify-end items-center">
			<button class="search-btn text-2xl mx-0" on:click={openSearch} title="Search blogs">
				🔍
			</button>
		</div>
		<nav class="flex items-center justify-end flex-1 space-x-6">
			<a href="/" class="text-gray-800 hover:text-blue-600 text-base">Home</a>
			<a href="/blog" class="text-gray-800 hover:text-blue-600 text-base">Blog</a>
			<a href="/about" class="text-gray-800 hover:text-blue-600 text-base">About</a>
		</nav>
	</header>

	{#if showSearch}
		<div class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 z-50 flex items-start justify-center">
			<div class="bg-white p-8 rounded-2xl min-w-[340px] max-w-[500px] max-h-[70vh] mt-[5vh] shadow-2xl relative overflow-y-auto animate-fadeInModal">
				<input
					id="blog-search-input"
					class="w-full px-5 py-3 text-lg border border-gray-300 rounded-lg mb-5 shadow-sm focus:outline-none focus:border-blue-500"
					type="text"
					placeholder="Search blog posts..."
					bind:value={searchQuery}
					on:input={handleSearchInput}
				/>
				<button class="absolute top-4 right-4 bg-none border-none text-xl cursor-pointer text-gray-400 hover:text-blue-600" on:click={closeSearch}>✖</button>
				{#if results.length > 0}
					<ul class="list-none p-0 m-0">
						{#each results as post}
							<li class="mb-3">
								<a href={post.url} class="text-blue-600 font-medium hover:underline" on:click={closeSearch}>{post.title}</a>
								<small class="block text-gray-500">{post.date}</small>
							</li>
						{/each}
					</ul>
				{:else if searchQuery.length > 0}
					<p class="text-gray-400 italic">No results found.</p>
				{/if}
			</div>
		</div>
	{/if}

	<slot />

	<!-- Tailwind animation for modal -->
	<style>
		@keyframes fadeInModal {
			from { opacity: 0; transform: translateY(-20px); }
			to { opacity: 1; transform: translateY(0); }
		}
		.animate-fadeInModal {
			animation: fadeInModal 0.25s;
		}
	</style>
</div>
