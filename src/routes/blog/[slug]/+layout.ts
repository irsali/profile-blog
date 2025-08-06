import type { PostMeta, SlugPostDto } from '$lib/types';
import type { SvelteComponent } from 'svelte';
import { getReadingTime } from '$lib/utils/reading-time';

// Eagerly import all markdown files in the parent blog directory
const modules = import.meta.glob('../../../posts/blog/*.md', { eager: true });

export const load = async ({ params }) => {
    const slug = params.slug;
    let content: typeof SvelteComponent | null = null;
    let metadata: PostMeta | undefined = undefined;

    if (slug) {
        const match = Object.entries(modules).find(([path]) => path.endsWith(`/${slug}.md`));
        if (match) {
            const mod = match[1] as { default, metadata };
            content = mod.default;
            metadata = mod.metadata ?? mod;
            
            // Calculate reading time if we have the raw markdown content
            if (metadata && !metadata.readingTime) {
                try {
                    // Try to get the raw markdown content for word counting
                    const rawContent = await import(`../../../posts/blog/${slug}.md?raw`);
                    if (rawContent.default) {
                        metadata.readingTime = getReadingTime(rawContent.default);
                    }
                } catch (error) {
                    // If we can't get raw content, use a fallback calculation
                    console.warn('Could not calculate reading time for', slug);
                }
            }
        }
    }

    return {
        slug,
        post: {
            content,
            metadata
        }
    } as SlugPostDto;
};

export const prerender = true;
