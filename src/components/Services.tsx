
import { Brain, Code, Cog, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Custom AI implementations that automate processes, enhance decision-making, and unlock new revenue streams.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Full-stack web and mobile applications built with modern technologies and optimized for performance.',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'Cloud Solutions']
    },
    {
      icon: Cog,
      title: 'Workflow Automation',
      description: 'Streamline operations with intelligent automation that reduces costs and eliminates repetitive tasks.',
      features: ['Process Automation', 'Integration Solutions', 'Data Pipeline', 'Business Intelligence']
    },
    {
      icon: TrendingUp,
      title: 'Personalized Business Audit',
      description: 'Our signature service: comprehensive analysis of your business with AI-powered recommendations.',
      features: ['Profit Optimization', 'Process Analysis', 'Tech Stack Review', 'Growth Strategy']
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From AI implementation to custom development, we provide end-to-end solutions 
            that transform how your business operates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg mr-4">
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-400">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
