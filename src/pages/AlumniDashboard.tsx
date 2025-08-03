import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { User, CheckCircle, X, Calendar, MessageSquare, Settings, LogOut, Briefcase } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const AlumniDashboard: React.FC = () => {
  const { user } = useAuth();

  const mentorshipRequests = [
    {
      id: 1,
      studentName: "Emma Thompson",
      college: "Stanford University",
      interests: ["Machine Learning", "Data Science"],
      message: "Hi! I'm really interested in transitioning to ML engineering. Would love to learn from your experience at Google.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      studentName: "Michael Chen",
      college: "MIT",
      interests: ["React", "Full Stack Development"],
      message: "I'm working on a startup idea and would appreciate guidance on tech stack decisions and scalability.",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
      timestamp: "5 hours ago"
    },
    {
      id: 3,
      studentName: "Priya Sharma",
      college: "Carnegie Mellon",
      interests: ["Cybersecurity", "Network Security"],
      message: "I'm preparing for cybersecurity roles and would love to understand industry expectations better.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
      timestamp: "1 day ago"
    }
  ];

  const sidebarItems = [
    { icon: User, label: 'Dashboard', path: '/alumni-dashboard', active: true },
    { icon: MessageSquare, label: 'Q&A Forum', path: '/forum' },
    { icon: Settings, label: 'Mentorship Settings', path: '/mentorship' },
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
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white">Welcome back, {user?.name}!</h1>
                  <p className="text-gray-300">Ready to mentor the next generation?</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-sm">
                      {user?.company || 'Tech Professional'}
                    </span>
                    <span className="text-gray-400 text-sm">• 4.9⭐ Rating</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-slate-700/50 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-sky-400 mb-2">23</div>
                  <div className="text-gray-300">Students Mentored</div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-amber-400 mb-2">8</div>
                  <div className="text-gray-300">Active Mentorships</div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">45</div>
                  <div className="text-gray-300">Q&A Answered</div>
                </div>
                <div className="bg-slate-700/50 rounded-xl p-6 text-center">
                  <div className="text-2xl font-bold text-purple-400 mb-2">12</div>
                  <div className="text-gray-300">Hours This Month</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mentorship Requests */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Mentorship Requests</h2>
              <span className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-sm">
                {mentorshipRequests.length} Pending
              </span>
            </div>

            <div className="space-y-4">
              {mentorshipRequests.map((request, index) => (
                <motion.div
                  key={request.id}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-sky-400/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <img
                        src={request.avatar}
                        alt={request.studentName}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-white font-semibold">{request.studentName}</h3>
                          <span className="text-gray-400 text-sm">• {request.college}</span>
                          <span className="text-gray-500 text-sm">{request.timestamp}</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {request.interests.map((interest, idx) => (
                            <span
                              key={idx}
                              className="bg-sky-500/20 text-sky-400 px-2 py-1 rounded-md text-xs"
                            >
                              {interest}
                            </span>
                          ))}
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed">
                          {request.message}
                        </p>
                      </div>
                    </div>

                    <div className="flex space-x-2 ml-4">
                      <button className="bg-green-500/20 text-green-400 p-2 rounded-lg hover:bg-green-500/30 transition-colors">
                        <CheckCircle className="h-5 w-5" />
                      </button>
                      <button className="bg-red-500/20 text-red-400 p-2 rounded-lg hover:bg-red-500/30 transition-colors">
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Availability & Settings */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Mentorship Settings</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Availability */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="h-5 w-5 text-sky-400" />
                  <h3 className="text-xl font-semibold text-white">Availability Slots</h3>
                </div>
                
                <div className="space-y-3">
                  {[
                    'Monday: 6:00 PM - 8:00 PM',
                    'Wednesday: 7:00 PM - 9:00 PM',
                    'Saturday: 10:00 AM - 12:00 PM'
                  ].map((slot, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                      <span className="text-gray-300">{slot}</span>
                      <button className="text-red-400 hover:text-red-300">
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 bg-sky-500/20 text-sky-400 py-2 rounded-lg hover:bg-sky-500/30 transition-colors">
                  Add New Slot
                </button>
              </div>

              {/* Domain Expertise */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Settings className="h-5 w-5 text-sky-400" />
                  <h3 className="text-xl font-semibold text-white">Domain Expertise</h3>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {['AI/ML', 'Web Development', 'Mobile Development', 'Cybersecurity', 'Cloud Computing', 'Data Science'].map((domain, index) => (
                    <button
                      key={index}
                      className={`p-2 text-sm rounded-lg border transition-all ${
                        ['AI/ML', 'Web Development'].includes(domain)
                          ? 'bg-sky-500 border-sky-500 text-white'
                          : 'bg-slate-700/50 border-slate-600 text-gray-300 hover:border-sky-400'
                      }`}
                    >
                      {domain}
                    </button>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                  <p className="text-amber-400 text-sm">
                    💡 Update your expertise to get matched with relevant students
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AlumniDashboard;