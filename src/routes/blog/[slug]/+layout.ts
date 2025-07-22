import type { PostMeta, SlugPostDto } from '$lib/types';
import type { SvelteComponent } from 'svelte';

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
