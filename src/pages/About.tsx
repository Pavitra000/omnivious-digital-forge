
import Navigation from '@/components/Navigation';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We exist to democratize AI and make cutting-edge technology accessible to businesses of all sizes.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay ahead of the curve, constantly exploring new technologies and methodologies to deliver superior results.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Every solution is tailored to your unique needs, ensuring maximum impact and return on investment.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in code quality, project delivery, and customer satisfaction.'
    }
  ];

  const team = [
    {
      name: 'Alex Rodriguez',
      role: 'CEO & AI Strategist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300',
      bio: 'Former Google AI researcher with 10+ years in machine learning and business transformation.'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO & Lead Developer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b0a2b41b?w=300',
      bio: 'Full-stack architect specializing in scalable AI systems and cloud infrastructure.'
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Automation',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300',
      bio: 'Process optimization expert with a track record of reducing operational costs by 60%+ across industries.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Omnivious
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're a team of AI experts, developers, and business strategists dedicated to transforming 
            how companies operate through intelligent automation and custom technology solutions.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Founded in 2020, Omnivious emerged from a simple observation: most businesses were 
                struggling to harness the power of AI and automation, not because the technology 
                wasn't available, but because it wasn't accessible or tailored to their specific needs.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Our founders, coming from backgrounds at Google, Tesla, and successful startups, 
                recognized that the gap between cutting-edge AI research and practical business 
                applications was preventing companies from realizing their full potential.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Today, we've helped over 200 businesses across 15 industries transform their 
                operations, increase revenue, and reduce costs through personalized AI solutions.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600"
                alt="Team collaboration"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Our Values
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core principles guide everything we do and every solution we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-lg mr-4">
                    <value.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{value.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experienced professionals passionate about making AI accessible and impactful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-300 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with AI-powered solutions.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
