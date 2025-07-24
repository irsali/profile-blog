<script lang="ts">
  export let categories: string[] = [];
  export let tags: string[] = [];
</script>

<div class="flex flex-col items-end space-y-2">
  {#if categories.length}
    <div class="flex flex-wrap gap-2">
      <span class="font-semibold text-gray-700">Categories:</span>
      {#each categories as cat}
        <a href={`/blog/category/${encodeURIComponent(cat)}`} class="px-2 py-1 bg-gray-100 rounded text-sm text-gray-600 hover:bg-gray-200 transition-colors">{cat}</a>
      {/each}
    </div>
  {/if}
  {#if tags.length}
    <div class="flex flex-wrap gap-2">
      <span class="font-semibold text-gray-700">Tags:</span>
      {#each tags as tag}
        <a href={`/blog/tag/${encodeURIComponent(tag)}`} class="px-2 py-1 bg-blue-100 rounded text-sm text-blue-600 hover:bg-blue-200 transition-colors">#{tag}</a>
      {/each}
    </div>
  {/if}
</div>
