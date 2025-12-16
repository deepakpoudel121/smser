import { useParams, Link, Navigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/sections/Footer";
import { getBlogPostBySlug, getRelatedPosts } from "@/data/blogData";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Tag, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.id, 3);

  // Convert markdown-like content to HTML
  const renderContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold mt-10 mb-4 text-foreground">{line.replace('## ', '')}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold mt-8 mb-3 text-foreground">{line.replace('### ', '')}</h3>;
        }
        
        // Blockquote
        if (line.startsWith('> ')) {
          return (
            <blockquote key={index} className="border-l-4 border-sa-gold pl-6 py-2 my-6 italic text-muted-foreground bg-muted/30 rounded-r-lg">
              {line.replace('> ', '').replace(/"/g, '')}
            </blockquote>
          );
        }
        
        // List items
        if (line.startsWith('- **')) {
          const match = line.match(/- \*\*(.+?)\*\*: (.+)/);
          if (match) {
            return (
              <li key={index} className="mb-3 list-disc ml-6 text-muted-foreground">
                <strong className="text-foreground">{match[1]}</strong>: {match[2]}
              </li>
            );
          }
        }
        if (line.startsWith('- ')) {
          return <li key={index} className="mb-2 list-disc ml-6 text-muted-foreground">{line.replace('- ', '')}</li>;
        }
        
        // Numbered list
        if (/^\d+\. /.test(line)) {
          const match = line.match(/^\d+\. \*\*(.+?)\*\*(.*)/) || line.match(/^\d+\. (.+)/);
          if (match) {
            if (match[2] !== undefined) {
              return (
                <li key={index} className="mb-2 list-decimal ml-6 text-muted-foreground">
                  <strong className="text-foreground">{match[1]}</strong>{match[2]}
                </li>
              );
            }
            return <li key={index} className="mb-2 list-decimal ml-6 text-muted-foreground">{match[1]}</li>;
          }
        }
        
        // Bold text in paragraphs
        if (line.includes('**')) {
          const parts = line.split(/\*\*(.+?)\*\*/g);
          return (
            <p key={index} className="mb-6 text-muted-foreground leading-relaxed">
              {parts.map((part, i) => 
                i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
              )}
            </p>
          );
        }
        
        // Regular paragraph
        if (line.trim() && !line.startsWith('#')) {
          return <p key={index} className="mb-6 text-muted-foreground leading-relaxed">{line}</p>;
        }
        
        return null;
      })
      .filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Article Header */}
        <header className="relative py-16 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 grid-lines opacity-10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-sa-gold/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-foreground">{post.category}</span>
            </nav>

            <div className="max-w-4xl">
              {/* Category & Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-sa-gold/10 text-sa-gold text-sm font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sa-gold to-sa-gold-dark flex items-center justify-center">
                  <User className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.authorRole}</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <section className="pb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden border border-border/50">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[21/9] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="pb-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="prose-article">
                {renderContent(post.content)}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border/50">
                <div className="flex flex-wrap items-center gap-3">
                  <Tag className="w-4 h-4 text-muted-foreground" />
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

              {/* Share */}
              <div className="mt-8 flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Share this article:</span>
                <Button variant="outline" size="sm" className="gap-2">
                  <Share2 className="w-4 h-4" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-muted/30 border-t border-border/50">
            <div className="container mx-auto px-6">
              <h2 className="text-2xl font-bold text-foreground mb-8">Related Articles</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group rounded-xl border border-border/50 overflow-hidden bg-card/50 hover:border-primary/30 hover:shadow-lg transition-all duration-500"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img 
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-xs text-sa-gold font-medium">{relatedPost.category}</span>
                      <h3 className="font-semibold text-foreground mt-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h3>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground mt-3">
                        <Clock className="w-3 h-3" />
                        {relatedPost.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="py-12 border-t border-border/50">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              <Button variant="outline" asChild>
                <Link to="/blog" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>
              </Button>
              <Button variant="hero" asChild>
                <Link to="/" className="gap-2">
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogArticle;
