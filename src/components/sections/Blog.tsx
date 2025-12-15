import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";
import { blogPosts, categories } from "@/data/blogData";

export const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <section id="blog" className="relative py-24 bg-gradient-to-b from-background to-muted/30">
      {/* Background */}
      <div className="absolute inset-0 grid-lines opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sa-purple/30 bg-sa-purple/10 mb-4">
              <span className="text-xs font-semibold text-sa-purple uppercase tracking-wider">Knowledge Hub</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Latest{" "}
              <span className="text-gradient-purple">Insights</span>
            </h2>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.slice(0, 4).map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0 
                    ? "bg-sa-gold text-primary-foreground" 
                    : "border border-border hover:border-sa-gold/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Post */}
          {featuredPost && (
            <article className="group relative rounded-2xl border border-border/50 overflow-hidden bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500 lg:row-span-2">
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <img 
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Featured badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-sa-gold/90 text-primary-foreground text-xs font-semibold">
                  Featured
                </div>
              </div>

              <div className="p-6 lg:p-8">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="px-2 py-1 rounded bg-sa-gold/10 text-sa-gold font-medium">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {featuredPost.readTime}
                  </span>
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-4 h-4" />
                    {featuredPost.author}
                  </div>
                  <Button variant="link" className="text-primary p-0 h-auto">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </article>
          )}

          {/* Regular Posts */}
          <div className="space-y-6">
            {regularPosts.map((post) => (
              <article 
                key={post.id}
                className="group flex gap-4 p-4 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden shrink-0">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span className="px-2 py-0.5 rounded bg-sa-gold/10 text-sa-gold font-medium">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 hidden sm:block">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="hero-outline" size="lg">
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
