import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, MapPin, Filter, Search, Send, Users, Clock, Award } from 'lucide-react';

const MentorshipMatching: React.FC = () => {
  const [selectedDomain, setSelectedDomain] = useState('All');
  const [sortBy, setSortBy] = useState('rating');
  const [searchTerm, setSearchTerm] = useState('');

  const domains = ['All', 'AI/ML', 'Web Development', 'Cybersecurity', 'Cloud Computing', 'Data Science', 'Mobile Development'];

  const mentors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      company: "Google",
      role: "Senior ML Engineer",
      rating: 4.9,
      reviews: 127,
      expertise: ["Machine Learning", "Python", "TensorFlow", "Deep Learning"],
      location: "Mountain View, CA",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      matchPercentage: 95,
      domain: "AI/ML",
      experience: "8+ years",
      mentored: 45,
      responseTime: "2 hours"
    },
    {
      id: 2,
      name: "Alex Chen",
      company: "Microsoft",
      role: "Full Stack Developer",
      rating: 4.8,
      reviews: 89,
      expertise: ["React", "Node.js", "Azure", "TypeScript"],
      location: "Seattle, WA",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      matchPercentage: 88,
      domain: "Web Development",
      experience: "6+ years",
      mentored: 32,
      responseTime: "4 hours"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      company: "Tesla",
      role: "Data Scientist",
      rating: 4.9,
      reviews: 156,
      expertise: ["Data Science", "Python", "Analytics", "Machine Learning"],
      location: "Austin, TX",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      matchPercentage: 92,
      domain: "Data Science",
      experience: "7+ years",
      mentored: 67,
      responseTime: "1 hour"
    },
    {
      id: 4,
      name: "David Kim",
      company: "CyberArk",
      role: "Security Engineer",
      rating: 4.7,
      reviews: 73,
      expertise: ["Cybersecurity", "Penetration Testing", "CISSP", "Ethical Hacking"],
      location: "Boston, MA",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      matchPercentage: 85,
      domain: "Cybersecurity",
      experience: "9+ years",
      mentored: 28,
      responseTime: "3 hours"
    },
    {
      id: 5,
      name: "Jennifer Wu",
      company: "AWS",
      role: "Cloud Solutions Architect",
      rating: 4.8,
      reviews: 112,
      expertise: ["AWS", "Docker", "Kubernetes", "DevOps"],
      location: "San Francisco, CA",
      avatar: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      matchPercentage: 90,
      domain: "Cloud Computing",
      experience: "5+ years",
      mentored: 39,
      responseTime: "2 hours"
    },
    {
      id: 6,
      name: "Roberto Silva",
      company: "Spotify",
      role: "Mobile Developer",
      rating: 4.9,
      reviews: 94,
      expertise: ["React Native", "iOS", "Android", "Flutter"],
      location: "Stockholm, Sweden",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      matchPercentage: 87,
      domain: "Mobile Development",
      experience: "6+ years",
      mentored: 41,
      responseTime: "5 hours"
    }
  ];

  const filteredMentors = mentors
    .filter(mentor => 
      (selectedDomain === 'All' || mentor.domain === selectedDomain) &&
      (mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       mentor.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
       mentor.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase())))
    )
    .sort((a, b) => {
      switch(sortBy) {
        case 'rating': return b.rating - a.rating;
        case 'match': return b.matchPercentage - a.matchPercentage;
        case 'experience': return parseInt(b.experience) - parseInt(a.experience);
        default: return 0;
      }
    });

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Find Your <span className="bg-gradient-to-r from-sky-400 to-amber-400 bg-clip-text text-transparent">Perfect Mentor</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with industry experts who will guide you towards your career goals with personalized mentorship.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search mentors, companies, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
              />
            </div>

            {/* Domain Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                className="bg-slate-700/50 border border-slate-600 rounded-lg text-white px-4 py-3 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
              >
                {domains.map(domain => (
                  <option key={domain} value={domain}>{domain}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-700/50 border border-slate-600 rounded-lg text-white px-4 py-3 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
              >
                <option value="rating">Rating</option>
                <option value="match">Match %</option>
                <option value="experience">Experience</option>
              </select>
            </div>
          </div>

          {/* Domain Pills */}
          <div className="flex flex-wrap gap-2 mt-4">
            {domains.map(domain => (
              <button
                key={domain}
                onClick={() => setSelectedDomain(domain)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedDomain === domain
                    ? 'bg-sky-500 text-white'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
                }`}
              >
                {domain}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-6"
        >
          <p className="text-gray-300">
            Showing {filteredMentors.length} mentor{filteredMentors.length !== 1 ? 's' : ''} 
            {selectedDomain !== 'All' && ` in ${selectedDomain}`}
          </p>
        </motion.div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredMentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-sky-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-400/10 hover:scale-[1.02]">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={mentor.avatar}
                        alt={mentor.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-slate-800 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{mentor.name}</h3>
                      <p className="text-sky-400 font-semibold">{mentor.role}</p>
                      <p className="text-gray-400">{mentor.company}</p>
                    </div>
                  </div>

                  {/* Match Percentage */}
                  <div className="text-right">
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold mb-2">
                      {mentor.matchPercentage}% Match
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-amber-400 fill-current" />
                      <span className="text-white font-semibold">{mentor.rating}</span>
                      <span className="text-gray-400 text-sm">({mentor.reviews})</span>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-4 w-4 text-sky-400 mr-1" />
                      <span className="text-sky-400 font-bold">{mentor.mentored}</span>
                    </div>
                    <p className="text-gray-400 text-xs">Mentored</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Award className="h-4 w-4 text-amber-400 mr-1" />
                      <span className="text-amber-400 font-bold">{mentor.experience}</span>
                    </div>
                    <p className="text-gray-400 text-xs">Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Clock className="h-4 w-4 text-green-400 mr-1" />
                      <span className="text-green-400 font-bold">{mentor.responseTime}</span>
                    </div>
                    <p className="text-gray-400 text-xs">Response</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-2 text-gray-400 text-sm mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>{mentor.location}</span>
                </div>

                {/* Expertise */}
                <div className="mb-6">
                  <p className="text-gray-300 text-sm mb-2">Expertise:</p>
                  <div className="flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-xs border border-slate-600"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 group-hover:scale-105">
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </button>
                  <button className="bg-slate-700/50 text-gray-300 px-4 py-3 rounded-lg hover:bg-slate-600/50 transition-colors">
                    View Profile
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredMentors.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 text-lg">
              No mentors found matching your criteria. Try adjusting your filters.
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default MentorshipMatching;