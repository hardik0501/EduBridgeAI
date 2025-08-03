import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Users, Target, CheckCircle, Quote } from 'lucide-react';

const About: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const timelineItems = [
    {
      year: "The Problem",
      title: "Skill-Industry Gap",
      description: "Students struggle to connect theoretical knowledge with real-world applications, leading to unemployment and underemployment.",
      icon: Target
    },
    {
      year: "Our Solution", 
      title: "AI-Powered Mentorship",
      description: "We bridge this gap by connecting students with industry professionals through intelligent matching and personalized guidance.",
      icon: Brain
    },
    {
      year: "Our Vision",
      title: "Future-Ready Workforce",
      description: "Creating a world where every student has access to quality mentorship and career guidance powered by artificial intelligence.",
      icon: Users
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      type: "Alumni",
      content: "EduBridgeAI helped me give back to the community while developing my mentoring skills. The platform makes it easy to connect with motivated students.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    {
      name: "Alex Rodriguez",
      role: "Computer Science Student",
      type: "Student",
      content: "Thanks to my mentor on EduBridgeAI, I landed my dream internship at Microsoft. The personalized guidance was exactly what I needed.",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    },
    {
      name: "Dr. Maya Patel",
      role: "Data Scientist at Tesla",
      type: "Alumni",
      content: "The AI matching system is incredibly accurate. I'm connected with students who share my passion for sustainable technology and data science.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
            className="text-center space-y-8"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl sm:text-6xl font-bold text-white"
            >
              About <span className="bg-gradient-to-r from-sky-400 to-amber-400 bg-clip-text text-transparent">EduBridgeAI</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            >
              We're revolutionizing education by creating meaningful connections between students and industry professionals through the power of artificial intelligence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Why <span className="text-sky-400">EduBridgeAI</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our journey from identifying the problem to creating the solution that transforms careers.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-sky-400 to-amber-400 h-full hidden lg:block"></div>

            <div className="space-y-12">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:space-x-8`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left mb-8 lg:mb-0`}>
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-sky-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-400/10">
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sky-400 font-semibold mb-4">{item.year}</p>
                      <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center border-4 border-slate-900 shadow-xl">
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 lg:block hidden"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real stories from students and alumni who have transformed their careers through EduBridgeAI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-sky-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-400/10 hover:scale-105">
                  <Quote className="h-8 w-8 text-sky-400 mb-6" />
                  <p className="text-gray-300 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-sky-400 text-sm">{testimonial.role}</p>
                      <span className="inline-block bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full text-xs mt-1">
                        {testimonial.type}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Students Connected" },
              { number: "2,500+", label: "Alumni Mentors" },
              { number: "95%", label: "Success Rate" },
              { number: "500+", label: "Companies Reached" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-sky-400/50 transition-all duration-300">
                  <div className="text-4xl font-bold text-sky-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;