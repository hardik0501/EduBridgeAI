import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Briefcase, Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';

const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState<'student' | 'alumni'>('student');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    college: '',
    skills: [] as string[],
    domain: [] as string[]
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const skillOptions = ['JavaScript', 'Python', 'React', 'Node.js', 'Java', 'Machine Learning', 'Data Science', 'Cybersecurity'];
  const domainOptions = ['AI/ML', 'Web Development', 'Mobile Development', 'Cybersecurity', 'Cloud Computing', 'Data Science'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLogin && (!formData.name || !formData.college)) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Mock authentication
    const userData = {
      id: '1',
      name: formData.name || 'John Doe',
      email: formData.email,
      role: userType,
      skills: userType === 'student' ? formData.skills : undefined,
      domain: userType === 'alumni' ? formData.domain : undefined,
      company: userType === 'alumni' ? 'Tech Corp' : undefined
    };

    login(userData);
    toast.success(`Welcome ${userData.name}!`);
    
    // Redirect based on user type
    if (userType === 'student') {
      navigate('/student-dashboard');
    } else {
      navigate('/alumni-dashboard');
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleSkillOrDomain = (item: string, type: 'skills' | 'domain') => {
    const currentArray = formData[type];
    const updatedArray = currentArray.includes(item)
      ? currentArray.filter(i => i !== item)
      : [...currentArray, item];
    
    handleInputChange(type, updatedArray);
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="max-w-md w-full mx-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">
              {isLogin ? 'Welcome Back' : 'Join EduBridgeAI'}
            </h2>
            <p className="text-gray-300">
              {isLogin ? 'Sign in to your account' : 'Create your account to get started'}
            </p>
          </div>

          {/* User Type Toggle */}
          <div className="flex mb-6 bg-slate-700/50 rounded-lg p-1">
            <button
              type="button"
              onClick={() => setUserType('student')}
              className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-all ${
                userType === 'student'
                  ? 'bg-sky-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <GraduationCap className="h-4 w-4" />
              <span>Student</span>
            </button>
            <button
              type="button"
              onClick={() => setUserType('alumni')}
              className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-all ${
                userType === 'alumni'
                  ? 'bg-sky-500 text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Briefcase className="h-4 w-4" />
              <span>Alumni</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field (Signup only) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                    placeholder="Enter your full name"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleInputChange('password', e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {/* College Field (Signup only) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  College/University
                </label>
                <input
                  type="text"
                  value={formData.college}
                  onChange={(e) => handleInputChange('college', e.target.value)}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                  placeholder="Enter your college name"
                  required={!isLogin}
                />
              </div>
            )}

            {/* Skills/Domain Selection (Signup only) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {userType === 'student' ? 'Skills & Interests' : 'Domain Expertise'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(userType === 'student' ? skillOptions : domainOptions).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleSkillOrDomain(item, userType === 'student' ? 'skills' : 'domain')}
                      className={`p-2 text-sm rounded-lg border transition-all ${
                        (userType === 'student' ? formData.skills : formData.domain).includes(item)
                          ? 'bg-sky-500 border-sky-500 text-white'
                          : 'bg-slate-700/50 border-slate-600 text-gray-300 hover:border-sky-400'
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Toggle Login/Signup */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sky-400 hover:text-sky-300 transition-colors"
            >
              {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;