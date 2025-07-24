<script lang="ts">
  export let categories: string[] = [];
  export let tags: string[] = [];
</script>

<div class="sidebar flex flex-col items-end space-y-4">
  {#if categories.length}
    <div class="flex flex-col items-start gap-2 w-full">
      <span class="font-semibold text-gray-700 mb-1">Categories</span>
      <div class="flex flex-wrap gap-2">
        {#each categories as cat}
          <a href={`/blog/category/${encodeURIComponent(cat)}`} class="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600 hover:bg-gray-200 transition-colors shadow-sm">{cat}</a>
        {/each}
      </div>
    </div>
  {/if}
  {#if tags.length}
    <div class="flex flex-col items-start gap-2 w-full">
      <span class="font-semibold text-gray-700 mb-1">Tags</span>
      <div class="flex flex-wrap gap-2">
        {#each tags as tag}
          <a href={`/blog/tag/${encodeURIComponent(tag)}`} class="px-3 py-1 bg-blue-100 rounded-full text-sm text-blue-600 hover:bg-blue-200 transition-colors shadow-sm">#{tag}</a>
        {/each}
      </div>
    </div>
  {/if}
</div>
