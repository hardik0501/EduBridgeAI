import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, Star, MapPin, Send, BookOpen, Brain, FileText, HelpCircle, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const StudentDashboard: React.FC = () => {
  const { user } = useAuth();

  const mentors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      company: "Google",
      role: "Senior ML Engineer",
      rating: 4.9,
      expertise: ["Machine Learning", "Python", "TensorFlow"],
      location: "Mountain View, CA",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
      matchPercentage: 95
    },
    {
      id: 2,
      name: "Alex Chen",
      company: "Microsoft",
      role: "Full Stack Developer",
      rating: 4.8,
      expertise: ["React", "Node.js", "Azure"],
      location: "Seattle, WA",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
      matchPercentage: 88
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      company: "Tesla",
      role: "Data Scientist",
      rating: 4.9,
      expertise: ["Data Science", "Python", "Analytics"],
      location: "Austin, TX",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
      matchPercentage: 92
    }
  ];

  const sidebarItems = [
    { icon: User, label: 'Dashboard', path: '/student-dashboard', active: true },
    { icon: Brain, label: 'Career Predictor', path: '/career-predictor' },
    { icon: FileText, label: 'Resume Analyzer', path: '/resume-analyzer' },
    { icon: HelpCircle, label: 'Ask a Doubt', path: '/forum' },
    { icon: LogOut, label: 'Logout', path: '/logout' }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="flex">
        {/* Sidebar */}
        <motion.div
          initial={{ x: -300 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-64 bg-slate-800/50 backdrop-blur-sm border-r border-slate-700 min-h-screen p-6"
        >
          <div className="space-y-4">
            {sidebarItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                  item.active
                    ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-500 rounded-full flex items-center justify-center">
                  <User className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">Welcome back, {user?.name}!</h1>
                  <p className="text-gray-300">Ready to accelerate your career journey?</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-700/50 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-sky-400 mb-2">5</div>
                  <div className="text-gray-300">Mentor Matches</div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-amber-400 mb-2">3</div>
                  <div className="text-gray-300">Active Connections</div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">12</div>
                  <div className="text-gray-300">Skills Improved</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Find Mentors Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Top Mentor Matches</h2>
              <Link
                to="/mentorship"
                className="text-sky-400 hover:text-sky-300 transition-colors flex items-center space-x-1"
              >
                <span>View All</span>
                <BookOpen className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {mentors.map((mentor, index) => (
                <motion.div
                  key={mentor.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-sky-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-400/10 hover:scale-105">
                    {/* Match Percentage Badge */}
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                        {mentor.matchPercentage}% Match
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-amber-400 fill-current" />
                        <span className="text-gray-300 text-sm">{mentor.rating}</span>
                      </div>
                    </div>

                    {/* Mentor Info */}
                    <div className="flex items-center space-x-4 mb-4">
                      <img
                        src={mentor.avatar}
                        alt={mentor.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-white font-semibold">{mentor.name}</h3>
                        <p className="text-sky-400 text-sm">{mentor.role}</p>
                        <p className="text-gray-400 text-sm">{mentor.company}</p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>{mentor.location}</span>
                    </div>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {mentor.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded-md text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Connect Button */}
                    <button className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
                      <Send className="h-4 w-4" />
                      <span>Send Connect Request</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Brain, title: 'Career Predictor', description: 'Discover your ideal career path', link: '/career-predictor', color: 'from-purple-500 to-pink-500' },
                { icon: FileText, title: 'Resume Analysis', description: 'Get AI-powered feedback', link: '/resume-analyzer', color: 'from-amber-500 to-orange-500' },
                { icon: HelpCircle, title: 'Ask Community', description: 'Get help from peers', link: '/forum', color: 'from-green-500 to-teal-500' },
                { icon: BookOpen, title: 'Learning Resources', description: 'Curated course recommendations', link: '/mentorship', color: 'from-sky-500 to-blue-500' }
              ].map((action, index) => (
                <Link
                  key={index}
                  to={action.link}
                  className="group"
                >
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-sky-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-400/10 hover:scale-105">
                    <div className={`w-12 h-12 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <action.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{action.title}</h3>
                    <p className="text-gray-300 text-sm">{action.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;