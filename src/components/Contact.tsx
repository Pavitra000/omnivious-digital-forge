
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'omnivious2025@gmail.com',
      href: 'mailto:omnivious2025@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '8287171799',
      href: 'tel:8287171799'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New Delhi, India',
      href: '#'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Let's Transform Your Business
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to unlock your business potential with AI? Get in touch for a free consultation 
            and personalized automation audit.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Get in Touch</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="group flex flex-col items-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-lg mb-4">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div className="text-center">
                    <p className="text-gray-400 text-sm mb-2">{info.label}</p>
                    <p className="text-white font-semibold group-hover:text-blue-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-xl p-6 text-center">
              <h4 className="text-xl font-bold text-white mb-3">Free AI Audit</h4>
              <p className="text-gray-300 mb-4">
                Get a personalized analysis of your business processes and discover 
                opportunities for AI-powered optimization.
              </p>
              <ul className="space-y-2 text-gray-400 max-w-md mx-auto">
                <li className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Process automation opportunities
                </li>
                <li className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Cost reduction potential
                </li>
                <li className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Revenue optimization strategies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
