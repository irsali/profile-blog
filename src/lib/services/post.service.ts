import type { MarkdownModule, PostMetaWithUrl } from '$lib/types';

class PostService {

  readonly blogUrlPrefix = '/blog/';

  getAllPosts(): Promise<PostMetaWithUrl[]> {
    const modules = import.meta.glob<MarkdownModule>(
      '../../posts/blog/*.md',
      { eager: true }
    );
    const posts: PostMetaWithUrl[] = Object.entries(modules).map(([path, mod]) => {
      const slug = path.split('/').pop()?.replace(/\.md$/, '');
      const meta = mod.metadata ?? {};
      return {
        url: `${this.blogUrlPrefix}${slug}`,
        ...meta
      } as PostMetaWithUrl;
    });
    posts.sort((a, b) => (a.date < b.date ? 1 : -1));
    return Promise.resolve(posts);
  }

  async getAllCategoryPosts(category: string): Promise<PostMetaWithUrl[]> {
    const posts = await this.getAllPosts();
    return posts.filter(x => x.categories?.includes(category));
  }

  async getAllTagPosts(tag: string): Promise<PostMetaWithUrl[]> {
    const posts = await this.getAllPosts();
    return posts.filter(x => x.tags?.includes(tag));
  }

  async getAllTags(): Promise<string[]> {
    const modules = import.meta.glob<MarkdownModule>(
      '../../posts/blog/*.md',
      { eager: true }
    );
    const set = new Set<string>();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    Object.entries(modules).forEach(([path, mod]) => {
      mod.metadata?.tags.forEach(tag => {
        set.add(tag);
      })
    });

    return Array.from(set);
  }

}

export const postService = new PostService();