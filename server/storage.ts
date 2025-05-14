import { users, type User, type InsertUser, type BlogPost, type Faq } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getAllBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  getAllFaqs(): Promise<Faq[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private blogPosts: Map<number, BlogPost>;
  private faqs: Map<number, Faq>;
  currentUserId: number;
  currentBlogPostId: number;
  currentFaqId: number;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.faqs = new Map();
    this.currentUserId = 1;
    this.currentBlogPostId = 1;
    this.currentFaqId = 1;

    // Initialize with sample blog posts
    this.initializeBlogPosts();
    this.initializeFaqs();
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }

  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getAllFaqs(): Promise<Faq[]> {
    return Array.from(this.faqs.values()).sort((a, b) => a.order - b.order);
  }

  private initializeBlogPosts() {
    const samplePosts: Omit<BlogPost, 'id'>[] = [
      {
        title: "GTA 6 Map Leaks Reveal Multiple Cities",
        excerpt: "New leaks suggest GTA 6 will feature multiple cities connected by vast landscapes and highways, creating the largest map in the series' history.",
        content: "New leaks suggest GTA 6 will feature multiple cities connected by vast landscapes and highways, creating the largest map in the series' history. Sources close to development indicate the game world will span an entire fictional state, with diverse environments ranging from dense urban areas to rural countryside and beachfront properties. Players will reportedly be able to travel between these regions seamlessly without loading screens, representing a major technical advancement for the series.",
        imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
        category: "NEWS",
        publishedAt: new Date("2023-04-15")
      },
      {
        title: "Top 10 New Features Coming to GTA 6",
        excerpt: "From dynamic weather systems to enhanced NPC interactions, here are the most exciting features coming to Grand Theft Auto 6.",
        content: "From dynamic weather systems to enhanced NPC interactions, here are the most exciting features coming to Grand Theft Auto 6. The game will introduce a revolutionary AI system that makes NPCs feel more alive than ever, with complex daily routines and realistic reactions to player actions. Other notable features include a completely revamped wanted system, expanded vehicle customization options, and multiple playable protagonists with unique abilities and storylines. The physics engine has also been completely rebuilt, promising more realistic destruction and environmental interactions.",
        imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
        category: "GUIDE",
        publishedAt: new Date("2023-04-03")
      },
      {
        title: "GTA 6 Online Mode Details Leaked",
        excerpt: "Rockstar Games is rumored to be developing an expansive online mode for GTA 6 with cross-platform support and persistent world elements.",
        content: "Rockstar Games is rumored to be developing an expansive online mode for GTA 6 with cross-platform support and persistent world elements. According to industry insiders, the new online experience will feature player-owned businesses that operate even when offline, territory control mechanics, and a dynamic economy influenced by player actions. The game will also introduce seasonal content updates tied to in-game events and holidays, creating a constantly evolving virtual world. Cross-play functionality is expected to unite players across all platforms, significantly expanding the online community.",
        imageUrl: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
        category: "NEWS",
        publishedAt: new Date("2023-03-20")
      }
    ];

    samplePosts.forEach(post => {
      const id = this.currentBlogPostId++;
      this.blogPosts.set(id, { ...post, id });
    });
  }

  private initializeFaqs() {
    const sampleFaqs: Omit<Faq, 'id'>[] = [
      {
        question: "When will GTA 6 be officially released?",
        answer: "Rockstar Games has not announced an official release date for GTA 6. The game is currently in development, and our downloads provide early access to experience the gameplay before the official launch.",
        order: 1
      },
      {
        question: "Is the mobile version the same as the PC version?",
        answer: "The mobile version has been optimized for touch controls and smaller screens, but features the same core gameplay and story elements. However, some visual effects and details have been adjusted to ensure smooth performance on mobile devices.",
        order: 2
      },
      {
        question: "Are there in-app purchases in GTA 6?",
        answer: "The game includes optional in-app purchases for cosmetic items and additional content. All core gameplay features are available without requiring additional purchases.",
        order: 3
      },
      {
        question: "Will my progress sync between PC and mobile?",
        answer: "Yes, GTA 6 features cross-platform progression. Simply sign in with your account on any device to continue your game where you left off.",
        order: 4
      },
      {
        question: "What languages are supported in GTA 6?",
        answer: "GTA 6 supports multiple languages including English, Spanish, French, German, Italian, Portuguese, Japanese, Chinese, and Russian with full voice acting and subtitles.",
        order: 5
      }
    ];

    sampleFaqs.forEach(faq => {
      const id = this.currentFaqId++;
      this.faqs.set(id, { ...faq, id });
    });
  }
}

export const storage = new MemStorage();
