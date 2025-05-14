import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all blog posts
  app.get("/api/blog-posts", async (req, res) => {
    const blogPosts = await storage.getAllBlogPosts();
    res.json(blogPosts);
  });

  // Get a single blog post by ID
  app.get("/api/blog-posts/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    
    const post = await storage.getBlogPost(id);
    if (!post) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    
    res.json(post);
  });

  // Get all FAQs
  app.get("/api/faqs", async (req, res) => {
    const faqs = await storage.getAllFaqs();
    res.json(faqs);
  });

  const httpServer = createServer(app);

  return httpServer;
}
