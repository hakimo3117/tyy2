import { apiRequest } from "./queryClient";
import { BlogPost } from "@shared/schema";

export async function getBlogPosts(): Promise<BlogPost[]> {
  const response = await apiRequest("GET", "/api/blog-posts");
  return response.json();
}

export async function getBlogPost(id: number): Promise<BlogPost> {
  const response = await apiRequest("GET", `/api/blog-posts/${id}`);
  return response.json();
}
