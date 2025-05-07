import { getAllBlogPosts } from "../../../lib/firebase/blog/blog";
import { BlogPost } from "../../../types/blog";

// Helper function to get blog post by slug
export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  if (!slug) return null;

  try {
    const posts = await getAllBlogPosts();

    // First, try to find by slug
    const postBySlug = posts.find(
      (post) => post.published && post.slug === slug
    );
    if (postBySlug) return postBySlug;

    // If not found, try to find by ID (fallback)
    const postById = posts.find((post) => post.published && post.id === slug);
    return postById || null;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    throw error; // Propagate the error
  }
}
