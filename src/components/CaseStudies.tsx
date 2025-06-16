
import { ExternalLink, TrendingUp, Users, Zap } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Legal Documentation Automated',
      client: 'MLA Legal Firm',
      description: 'Implemented AI-powered recommendation engine and automated legal documentation.',
      results: [
        { label: 'Revenue Increase', value: '40%', icon: TrendingUp },
        { label: 'Processing Speed', value: '6x', icon: Zap }
      ],
      image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500',
      tags: ['AI', 'Legal', 'Automation']
    },
    {
      title: 'Automated Workflow for Overall Data',
      client: 'Enterprise Client',
      description: 'Automated data entry from complex data and customer support systems.',
      results: [
        { label: 'Revenue Increase', value: '20%', icon: TrendingUp },
        { label: 'Processing Speed', value: '3x', icon: Zap }
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500',
      tags: ['Data Automation', 'Workflow', 'Support']
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how we've transformed businesses across industries with our AI-powered solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{study.client}</p>
                <p className="text-gray-300 mb-6">{study.description}</p>
                
                <div className="space-y-3">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <result.icon className="text-purple-400 mr-2" size={16} />
                        <span className="text-gray-300 text-sm">{result.label}</span>
                      </div>
                      <span className="text-purple-400 font-bold">{result.value}</span>
                    </div>
                  ))}
                </div>
                
                <button className="mt-6 flex items-center text-purple-400 hover:text-purple-300 transition-colors group">
                  View Case Study
                  <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
