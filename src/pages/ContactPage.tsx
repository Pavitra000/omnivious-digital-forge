
import Navigation from '@/components/Navigation';
import Contact from '@/components/Contact';
import { Clock, CheckCircle, Users, Zap } from 'lucide-react';

const ContactPage = () => {
  const process = [
    {
      icon: Users,
      title: 'Initial Consultation',
      description: 'We discuss your business goals, challenges, and current processes in a free 30-minute call.',
      duration: '30 min'
    },
    {
      icon: Zap,
      title: 'Custom Proposal',
      description: 'Receive a detailed proposal with timeline, scope, and pricing within 48 hours.',
      duration: '48 hours'
    },
    {
      icon: CheckCircle,
      title: 'Project Kickoff',
      description: 'Once approved, we begin development with regular updates and milestone reviews.',
      duration: '1-2 weeks'
    },
    {
      icon: Clock,
      title: 'Delivery & Support',
      description: 'Complete delivery with testing, training, and ongoing support for seamless integration.',
      duration: 'Ongoing'
    }
  ];

  const faqs = [
    {
      question: 'How long does a typical AI implementation take?',
      answer: 'Project timelines vary based on complexity, but most implementations take 4-12 weeks from start to finish.'
    },
    {
      question: 'Do you provide ongoing support after delivery?',
      answer: 'Yes, we offer comprehensive support packages including maintenance, updates, and optimization services.'
    },
    {
      question: 'Can you work with our existing systems?',
      answer: 'Absolutely. We specialize in integrating AI solutions with existing infrastructure and software systems.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We work across all industries including healthcare, finance, manufacturing, retail, and technology sectors.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Start with a free consultation and discover 
            the possibilities that await.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Our Process
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From initial consultation to delivery, here's how we work with you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="absolute -top-3 -left-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
                  {index + 1}
                </div>
                
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-lg mb-4 w-fit">
                  <step.icon className="text-white" size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{step.description}</p>
                <span className="text-purple-400 font-semibold text-sm">{step.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-green-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Common questions about our services and process.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
