import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Brain className="h-8 w-8 text-sky-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-sky-400 to-amber-400 bg-clip-text text-transparent">
                EduBridgeAI
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              Bridging the gap between learning and real-world experience through AI-powered mentorship connections.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="/contact" className="text-gray-400 hover:text-sky-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-sky-400 transition-colors">
                About Us
              </Link>
              <Link to="/mentorship" className="block text-gray-400 hover:text-sky-400 transition-colors">
                Find Mentors
              </Link>
              <Link to="/forum" className="block text-gray-400 hover:text-sky-400 transition-colors">
                Community
              </Link>
              <Link to="/ai-assistant" className="block text-gray-400 hover:text-sky-400 transition-colors">
                AI Assistant
              </Link>
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-white font-semibold mb-4">Tools</h3>
            <div className="space-y-2">
              <Link to="/resume-analyzer" className="block text-gray-400 hover:text-sky-400 transition-colors">
                Resume Analyzer
              </Link>
              <Link to="/career-predictor" className="block text-gray-400 hover:text-sky-400 transition-colors">
                Career Predictor
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-sky-400 transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 EduBridgeAI | Bridging Students & Mentors with AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;