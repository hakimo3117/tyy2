import { useQuery } from "@tanstack/react-query";
import { BlogPost } from "@shared/schema";
import { getBlogPosts } from "@/lib/blog";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogSection() {
  const { data: blogPosts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts'],
  });

  return (
    <section id="blog" className="py-16 bg-dark-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">Latest GTA 6 News</h2>
          <p className="text-gray-400">Stay updated with the latest news and updates</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading state
            Array(3).fill(0).map((_, i) => (
              <article key={`skeleton-${i}`} className="bg-dark rounded-xl overflow-hidden shadow-lg">
                <Skeleton className="w-full h-48" />
                <div className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-1/4 mb-3" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-2/3 mb-4" />
                  <Skeleton className="h-4 w-1/4" />
                </div>
              </article>
            ))
          ) : error ? (
            <div className="col-span-3 text-center text-red-500">
              <p>Error loading blog posts. Please try again later.</p>
            </div>
          ) : (
            blogPosts?.map((post) => (
              <article key={post.id} className="bg-dark rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                <div className="relative">
                  <img 
                    src={post.imageUrl || "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80"} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-secondary text-white text-xs font-bold px-2 py-1 m-2 rounded">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-2 hover:text-primary transition">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <a href="#" className="text-primary hover:text-blue-400 font-medium transition flex items-center text-sm">
                    Read More <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </article>
            ))
          )}
        </div>
        
        <div className="text-center mt-10">
          <a href="#" className="inline-block shine-effect btn bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-accent font-semibold transition">
            View All Articles <i className="fas fa-chevron-right ml-2"></i>
          </a>
        </div>
        
        {/* Ad placement */}
        <div className="mt-12">
          <div className="ad-container rounded-lg min-h-[90px] bg-dark-secondary bg-opacity-50 border border-dashed border-gray-700 flex items-center justify-center" data-ad-slot="blog-banner">
            <p className="text-gray-400 text-sm">Advertisement Space (Adstera)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
