
import Navigation from '@/components/Navigation';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  // Empty state for now - ready for future content
  const comingSoonPosts = [
    {
      title: 'The Future of AI in Business Automation',
      excerpt: 'Exploring how artificial intelligence will reshape business operations in the next decade.',
      category: 'AI Trends',
      readTime: '5 min read',
      publishDate: 'Coming Soon'
    },
    {
      title: 'ROI Calculator: Measuring AI Implementation Success',
      excerpt: 'A comprehensive guide to calculating and tracking return on investment for AI projects.',
      category: 'Business Strategy',
      readTime: '8 min read',
      publishDate: 'Coming Soon'
    },
    {
      title: 'Case Study: How We Increased E-commerce Revenue by 340%',
      excerpt: 'Deep dive into our AI-powered recommendation engine implementation.',
      category: 'Case Studies',
      readTime: '12 min read',
      publishDate: 'Coming Soon'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Insights & Updates
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay informed about the latest trends in AI, automation, and business transformation. 
            Our expert insights and case studies coming soon.
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8">
              <Calendar className="text-purple-400 mr-2" size={20} />
              <span className="text-purple-300 font-semibold">Blog Coming Soon</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">What to Expect</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're preparing valuable content including industry insights, detailed case studies, 
              and practical guides for AI implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {comingSoonPosts.map((post, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm">{post.publishDate}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="mr-1" size={14} />
                    {post.readTime}
                  </div>
                  
                  <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors opacity-50 cursor-not-allowed">
                    Read More
                    <ArrowRight className="ml-1" size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Upcoming Topics</h2>
            <p className="text-xl text-gray-300">
              Here's what we'll be covering in our upcoming articles.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'AI Strategy',
              'Automation',
              'Case Studies',
              'ROI Analysis',
              'Industry Trends',
              'Tech Reviews',
              'Best Practices',
              'Implementation'
            ].map((topic, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <span className="text-gray-300 font-medium">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
