export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Geotechnical Investigations in Nepal",
    excerpt: "A comprehensive guide to soil testing, foundation analysis, and why geotechnical investigations are critical for construction projects in Nepal's diverse terrain.",
    category: "Technical Guide",
    author: "SA Team",
    date: "Dec 8, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    featured: true,
    content: "Geotechnical investigations form the backbone of any construction project..."
  },
  {
    id: 2,
    title: "Why NDT is Crucial for Building Safety",
    excerpt: "Learn how Non-Destructive Testing methods help assess structural integrity without causing damage to existing structures.",
    category: "Industry Insights",
    author: "SA Team",
    date: "Dec 5, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "Complete Guide to Concrete Testing Standards",
    excerpt: "Everything you need to know about concrete quality testing, from compression tests to durability assessments.",
    category: "Technical Guide",
    author: "SA Team",
    date: "Dec 1, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Foundation Testing: When and Why It's Necessary",
    excerpt: "Discover the importance of pile load testing and how it ensures the safety and longevity of your construction projects.",
    category: "Case Study",
    author: "SA Team",
    date: "Nov 28, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    featured: false,
  },
];

export const categories = [
  "All Posts",
  "Technical Guides",
  "Industry Insights",
  "Case Studies",
  "Testing Standards",
];
