import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Users, Target, ArrowRight, Sparkles, BookOpen, FileText, MessageSquare } from 'lucide-react';

const Home: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: Users,
      title: "AI-Powered Mentorship",
      description: "Connect with industry professionals who match your skills, interests, and career goals.",
      link: "/mentorship"
    },
    {
      icon: Brain,
      title: "Career Prediction",
      description: "Get personalized career path recommendations based on your skills and interests.",
      link: "/career-predictor"
    },
    {
      icon: FileText,
      title: "Resume Analysis",
      description: "Get your resume analyzed by AI and receive personalized improvement suggestions.",
      link: "/resume-analyzer"
    },
    {
      icon: MessageSquare,
      title: "Community Forum",
      description: "Join discussions, ask questions, and share knowledge with peers and mentors.",
      link: "/forum"
    }
  ];

  const stats = [
    { value: "5,000+", label: "Students" },
    { value: "1,200+", label: "Alumni Mentors" },
    { value: "95%", label: "Satisfaction Rate" },
    { value: "80%", label: "Placement Rate" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: { transition: { staggerChildren: 0.1 } }
            }}
            className="flex flex-col lg:flex-row items-center justify-between gap-12"
          >
            {/* Hero Text */}
            <div className="lg:w-1/2 space-y-8">
              <motion.h1
                variants={fadeInUp}
                className="text-5xl sm:text-6xl font-bold text-white leading-tight"
              >
                Bridge Learning with <span className="bg-gradient-to-r from-sky-400 to-amber-400 bg-clip-text text-transparent">Real-World Experience</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-gray-300 leading-relaxed"
              >
                Connect with industry professionals, get personalized career guidance, and accelerate your journey from classroom to career.
              </motion.p>
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/mentorship"
                  className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  Find a Mentor <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/about"
                  className="bg-slate-800 text-white border border-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-all duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>

            {/* Hero Image */}
            <motion.div
              variants={fadeInUp}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-blue-500 rounded-2xl blur opacity-30"></div>
                <div className="relative bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-xl">
                  <div className="aspect-video rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center">
                    <Brain className="h-24 w-24 text-sky-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              How <span className="text-sky-400">EduBridgeAI</span> Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform bridges the gap between academic learning and industry requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={feature.link} className="block h-full">
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 h-full hover:border-sky-400 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/10">
                    <div className="bg-gradient-to-br from-sky-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto"
          >
            <Sparkles className="h-12 w-12 text-sky-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to accelerate your career journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of students and alumni on EduBridgeAI today.
            </p>
            <Link
              to="/login"
              className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;