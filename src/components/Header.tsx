import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Brain, Menu, X, LogOut, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getDashboardLink = () => {
    return user?.role === 'student' ? '/student-dashboard' : '/alumni-dashboard';
  };

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Brain className="h-8 w-8 text-sky-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-sky-400 to-amber-400 bg-clip-text text-transparent">
                EduBridgeAI
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-sky-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-sky-400 transition-colors">
              About
            </Link>
            <Link to="/mentorship" className="text-gray-300 hover:text-sky-400 transition-colors">
              Find Mentors
            </Link>
            <Link to="/forum" className="text-gray-300 hover:text-sky-400 transition-colors">
              Forum
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-sky-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to={getDashboardLink()}
                  className="flex items-center space-x-2 text-gray-300 hover:text-sky-400 transition-colors"
                >
                  <User className="h-4 w-4" />
                  <span>{user?.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-300 hover:text-red-400 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 border-t border-slate-700"
          >
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-sky-400 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-sky-400 transition-colors">
                About
              </Link>
              <Link to="/mentorship" className="text-gray-300 hover:text-sky-400 transition-colors">
                Find Mentors
              </Link>
              <Link to="/forum" className="text-gray-300 hover:text-sky-400 transition-colors">
                Forum
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-sky-400 transition-colors">
                Contact
              </Link>
              {isAuthenticated ? (
                <>
                  <Link to={getDashboardLink()} className="text-gray-300 hover:text-sky-400 transition-colors">
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-left text-gray-300 hover:text-red-400 transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-2 rounded-lg text-center"
                >
                  Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;