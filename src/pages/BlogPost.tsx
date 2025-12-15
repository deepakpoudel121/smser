import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Clock, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { getBlogPostBySlug, getRelatedPosts } from "@/data/blogData";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  const relatedPosts = post ? getRelatedPosts(post.id, 3) : [];

  if (!post) {
    return (
      <ThemeProvider defaultTheme="light" storageKey="sa-ui-theme">
        <div className="min-h-screen bg-background">
          <Navbar />
          <main className="pt-32 pb-20">
            <div className="container mx-auto px-6 text-center">
              <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
              <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
              <Link to="/#blog">
                <Button variant="hero">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Button>
              </Link>
            </div>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider defaultTheme="light" storageKey="sa-ui-theme">
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          {/* Hero Section */}
          <section className="relative pt-32 pb-16 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 grid-lines opacity-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sa-gold/5 to-transparent" />
            
            <div className="container mx-auto px-6 relative z-10">
              {/* Breadcrumb */}
              <Link 
                to="/#blog" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-sa-gold transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Link>

              <div className="max-w-4xl">
                {/* Category & Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-6 animate-fade-in">
                  <span className="px-3 py-1 rounded-full bg-sa-gold/10 text-sa-gold text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                  {post.title}
                </h1>

                {/* Author & Share */}
                <div className="flex flex-wrap items-center justify-between gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sa-gold to-sa-purple flex items-center justify-center">
                      <User className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{post.author}</p>
                      <p className="text-sm text-muted-foreground">South Asia Materials Testing</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground mr-2">Share:</span>
                    {[Facebook, Twitter, Linkedin].map((Icon, index) => (
                      <button
                        key={index}
                        className="w-9 h-9 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-sa-gold/10 hover:text-sa-gold transition-all hover:scale-110"
                      >
                        <Icon className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Image */}
          <section className="container mx-auto px-6 mb-12">
            <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-border/50 shadow-2xl animate-scale-in">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 sm:h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
          </section>

          {/* Content */}
          <section className="container mx-auto px-6 pb-20">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <article className="lg:col-span-3 prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-sa-gold hover:prose-a:text-sa-gold-light prose-li:text-muted-foreground prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div 
                  dangerouslySetInnerHTML={{ 
                    __html: post.content
                      .replace(/## /g, '<h2>')
                      .replace(/### /g, '<h3>')
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\n\n/g, '</p><p>')
                      .replace(/\n- /g, '</p><ul><li>')
                      .replace(/\n(\d+)\. /g, '</p><ol><li>')
                      .split('\n').join('<br/>')
                  }}
                />
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-1 space-y-8">
                {/* Tags */}
                <div className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Tag className="w-4 h-4 text-sa-gold" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground hover:bg-sa-gold/10 hover:text-sa-gold transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Related Posts */}
                <div className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in" style={{ animationDelay: '0.5s' }}>
                  <h3 className="font-semibold text-foreground mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.slug}`}
                        className="group block"
                      >
                        <div className="flex gap-3">
                          <img 
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-16 h-16 rounded-lg object-cover shrink-0"
                          />
                          <div>
                            <h4 className="text-sm font-medium text-foreground group-hover:text-sa-gold transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-xs text-muted-foreground mt-1">{relatedPost.readTime}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="p-6 rounded-xl border border-sa-gold/30 bg-gradient-to-br from-sa-gold/10 to-sa-purple/10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <h3 className="font-semibold text-foreground mb-2">Need Testing Services?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get expert consultation and competitive quotes for your project.
                  </p>
                  <Link to="/#contact">
                    <Button variant="hero" size="sm" className="w-full">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </aside>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default BlogPost;
