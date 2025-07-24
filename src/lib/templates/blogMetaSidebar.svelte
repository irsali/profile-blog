<script lang="ts">
  export let categories: string[] = [];
  export let tags: string[] = [];
</script>

<div class="flex flex-col items-end space-y-2">
  {#if categories.length}
    <div class="flex flex-wrap gap-2">
      <span class="font-semibold text-gray-700">Categories:</span>
      {#each categories as cat}
        <span class="px-2 py-1 bg-gray-100 rounded text-sm text-gray-600">{cat}</span>
      {/each}
    </div>
  {/if}
  {#if tags.length}
    <div class="flex flex-wrap gap-2">
      <span class="font-semibold text-gray-700">Tags:</span>
      {#each tags as tag}
        <span class="px-2 py-1 bg-blue-100 rounded text-sm text-blue-600">#{tag}</span>
      {/each}
    </div>
  {/if}
</div>
