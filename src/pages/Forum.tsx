import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, MessageSquare, ArrowUp, ArrowDown, Clock, User, Tag } from 'lucide-react';

interface ForumPost {
  id: number;
  title: string;
  content: string;
  author: string;
  authorType: 'student' | 'alumni';
  timestamp: string;
  upvotes: number;
  replies: number;
  tags: string[];
  isUpvoted: boolean;
}

const Forum: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const [showNewPost, setShowNewPost] = useState(false);
  const [posts, setPosts] = useState<ForumPost[]>([
    {
      id: 1,
      title: "How to transition from frontend to full-stack development?",
      content: "I've been working as a frontend developer for 2 years using React. I want to become a full-stack developer. What backend technologies should I learn first?",
      author: "Sarah Chen",
      authorType: "student",
      timestamp: "2 hours ago",
      upvotes: 15,
      replies: 8,
      tags: ["Web Dev", "Career"],
      isUpvoted: false
    },
    {
      id: 2,
      title: "Best practices for technical interviews at FAANG companies",
      content: "I have interviews coming up at Google and Meta. What are the most important algorithms and data structures to focus on? Any insider tips?",
      author: "Michael Rodriguez",
      authorType: "student",
      timestamp: "4 hours ago",
      upvotes: 23,
      replies: 12,
      tags: ["Interviews", "Career"],
      isUpvoted: true
    },
    {
      id: 3,
      title: "Machine Learning project ideas for portfolio",
      content: "I'm looking for intermediate-level ML project ideas that would impress potential employers. I have experience with Python, TensorFlow, and basic ML algorithms.",
      author: "Emma Thompson",
      authorType: "student",
      timestamp: "6 hours ago",
      upvotes: 19,
      replies: 15,
      tags: ["AI", "Projects"],
      isUpvoted: false
    },
    {
      id: 4,
      title: "Remote work vs office culture - what to consider as a new grad?",
      content: "I have offers from both remote-first and office-based companies. What are the pros and cons for career growth as someone just starting out?",
      author: "Alex Kim",
      authorType: "student",
      timestamp: "8 hours ago",
      upvotes: 31,
      replies: 20,
      tags: ["Career", "Remote Work"],
      isUpvoted: false
    },
    {
      id: 5,
      title: "Cybersecurity bootcamp vs traditional CS degree",
      content: "I'm 25 and considering a career change to cybersecurity. Would a 6-month bootcamp be sufficient, or should I pursue a full CS degree?",
      author: "David Park",
      authorType: "student",
      timestamp: "12 hours ago",
      upvotes: 12,
      replies: 9,
      tags: ["Cybersecurity", "Education"],
      isUpvoted: false
    }
  ]);

  const tags = ['All', 'AI', 'Web Dev', 'Cybersecurity', 'Projects', 'Internships', 'Resume', 'Career', 'Interviews'];

  const filteredPosts = selectedTag === 'All' 
    ? posts 
    : posts.filter(post => post.tags.includes(selectedTag));

  const handleUpvote = (postId: number) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            upvotes: post.isUpvoted ? post.upvotes - 1 : post.upvotes + 1,
            isUpvoted: !post.isUpvoted 
          }
        : post
    ));
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              Community <span className="text-sky-400">Forum</span>
            </h1>
            <p className="text-xl text-gray-300">
              Ask questions, share knowledge, and connect with peers
            </p>
          </div>
          <button
            onClick={() => setShowNewPost(true)}
            className="mt-4 sm:mt-0 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>New Post</span>
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-white mb-4">Filter by Tags</h3>
              <div className="space-y-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                      selectedTag === tag
                        ? 'bg-sky-500 text-white'
                        : 'text-gray-300 hover:bg-slate-700/50 hover:text-white'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Forum Stats</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Total Posts</span>
                    <span className="text-sky-400 font-semibold">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Active Users</span>
                    <span className="text-green-400 font-semibold">892</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">This Week</span>
                    <span className="text-amber-400 font-semibold">156</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Posts */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-sky-400/50 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    {/* Voting */}
                    <div className="flex flex-col items-center space-y-1 mr-4">
                      <button
                        onClick={() => handleUpvote(post.id)}
                        className={`p-1 rounded transition-colors ${
                          post.isUpvoted 
                            ? 'text-sky-400 hover:text-sky-300' 
                            : 'text-gray-400 hover:text-sky-400'
                        }`}
                      >
                        <ArrowUp className="h-5 w-5" />
                      </button>
                      <span className={`font-semibold ${post.isUpvoted ? 'text-sky-400' : 'text-white'}`}>
                        {post.upvotes}
                      </span>
                      <button className="p-1 rounded text-gray-400 hover:text-red-400 transition-colors">
                        <ArrowDown className="h-5 w-5" />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-semibold text-white hover:text-sky-400 cursor-pointer transition-colors">
                          {post.title}
                        </h3>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {post.content}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-slate-700/50 text-gray-300 px-2 py-1 rounded-md text-xs border border-slate-600"
                          >
                            <Tag className="h-3 w-3 inline mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              post.authorType === 'student' 
                                ? 'bg-blue-500/20 text-blue-400' 
                                : 'bg-amber-500/20 text-amber-400'
                            }`}>
                              {post.authorType}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.timestamp}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-1 hover:text-sky-400 transition-colors">
                            <MessageSquare className="h-4 w-4" />
                            <span>{post.replies} replies</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* No Results */}
            {filteredPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-12"
              >
                <div className="text-gray-400 text-lg">
                  No posts found for the selected tag. Try a different filter.
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* New Post Modal */}
        {showNewPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowNewPost(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Create New Post</h2>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    placeholder="What's your question or topic?"
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Content
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Provide details about your question or share your knowledge..."
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Tags
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {tags.slice(1).map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        className="p-2 text-sm rounded-lg border bg-slate-700/50 border-slate-600 text-gray-300 hover:border-sky-400 transition-all"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-300"
                  >
                    Post Question
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowNewPost(false)}
                    className="px-6 py-3 border border-slate-600 text-gray-300 rounded-lg hover:border-sky-400 hover:text-white transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Forum;