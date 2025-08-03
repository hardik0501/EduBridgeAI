import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Star, Award, DollarSign, MapPin } from 'lucide-react';

interface FormData {
  skills: string[];
  interests: string[];
  experience: string;
  education: string;
  location: string;
}

interface CareerPrediction {
  role: string;
  match: number;
  salary: string;
  growth: string;
  description: string;
  requiredSkills: string[];
  companies: string[];
}

const CareerPredictor: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    skills: [],
    interests: [],
    experience: '',
    education: '',
    location: ''
  });
  const [showResults, setShowResults] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const skillOptions = [
    'JavaScript', 'Python', 'React', 'Node.js', 'Java', 'C++', 'SQL',
    'Machine Learning', 'Data Analysis', 'Cloud Computing', 'DevOps',
    'Cybersecurity', 'Mobile Development', 'UI/UX Design', 'Project Management'
  ];

  const interestOptions = [
    'Artificial Intelligence', 'Web Development', 'Mobile Apps', 'Data Science',
    'Cybersecurity', 'Cloud Computing', 'Game Development', 'Blockchain',
    'IoT', 'AR/VR', 'Robotics', 'Fintech', 'Healthcare Tech', 'E-commerce'
  ];

  const experienceOptions = [
    'No Experience',
    '0-1 years',
    '1-3 years',
    '3-5 years',
    '5+ years'
  ];

  const educationOptions = [
    'High School',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'PhD',
    'Bootcamp',
    'Self-taught'
  ];

  const toggleSelection = (item: string, field: 'skills' | 'interests') => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(item)
        ? prev[field].filter(i => i !== item)
        : [...prev[field], item]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 3000);
  };

  const mockPredictions: CareerPrediction[] = [
    {
      role: "Full Stack Developer",
      match: 92,
      salary: "$75,000 - $120,000",
      growth: "+22%",
      description: "Design and develop complete web applications using modern frameworks and technologies.",
      requiredSkills: ["JavaScript", "React", "Node.js", "SQL", "Git"],
      companies: ["Google", "Meta", "Netflix", "Airbnb"]
    },
    {
      role: "Data Scientist",
      match: 87,
      salary: "$85,000 - $150,000",
      growth: "+35%",
      description: "Analyze complex datasets to derive insights and build predictive models for business decisions.",
      requiredSkills: ["Python", "Machine Learning", "SQL", "Statistics", "TensorFlow"],
      companies: ["Netflix", "Uber", "Spotify", "Amazon"]
    },
    {
      role: "Cloud Solutions Architect",
      match: 84,
      salary: "$95,000 - $180,000",
      growth: "+28%",
      description: "Design and implement scalable cloud infrastructure solutions for enterprise applications.",
      requiredSkills: ["AWS", "Docker", "Kubernetes", "DevOps", "Python"],
      companies: ["AWS", "Microsoft", "Google Cloud", "IBM"]
    },
    {
      role: "Frontend Developer",
      match: 81,
      salary: "$65,000 - $110,000",
      growth: "+18%",
      description: "Create engaging user interfaces and experiences using modern frontend technologies.",
      requiredSkills: ["React", "JavaScript", "CSS", "HTML", "TypeScript"],
      companies: ["Figma", "Shopify", "Stripe", "Discord"]
    }
  ];

  if (showResults) {
    return (
      <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-white mb-4">
              Your Career <span className="text-sky-400">Predictions</span>
            </h1>
            <p className="text-xl text-gray-300">
              Based on your skills and interests, here are your top career matches
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mockPredictions.map((prediction, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-sky-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-400/10"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{prediction.role}</h3>
                    <p className="text-gray-300">{prediction.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-bold mb-2">
                      {prediction.match}% Match
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <DollarSign className="h-4 w-4 text-green-400 mr-1" />
                      <span className="text-green-400 font-bold text-sm">{prediction.salary}</span>
                    </div>
                    <p className="text-gray-400 text-xs">Salary Range</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="h-4 w-4 text-sky-400 mr-1" />
                      <span className="text-sky-400 font-bold">{prediction.growth}</span>
                    </div>
                    <p className="text-gray-400 text-xs">Job Growth</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Star className="h-4 w-4 text-amber-400 mr-1" />
                      <span className="text-amber-400 font-bold">High</span>
                    </div>
                    <p className="text-gray-400 text-xs">Demand</p>
                  </div>
                </div>

                {/* Required Skills */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Required Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {prediction.requiredSkills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-xs ${
                          formData.skills.includes(skill)
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-slate-700/50 text-gray-300 border border-slate-600'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Top Companies */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Top Hiring Companies</h4>
                  <div className="flex flex-wrap gap-2">
                    {prediction.companies.map((company, companyIndex) => (
                      <span
                        key={companyIndex}
                        className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-xs border border-sky-500/30"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Career Growth Chart */}
                <div className="bg-slate-700/30 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-3">5-Year Career Growth</h4>
                  <div className="relative h-20">
                    <svg className="w-full h-full" viewBox="0 0 300 80">
                      <path
                        d="M 10 70 Q 75 50 150 40 T 290 20"
                        stroke="#38bdf8"
                        strokeWidth="3"
                        fill="none"
                        className="drop-shadow-lg"
                      />
                      <circle cx="10" cy="70" r="4" fill="#38bdf8" />
                      <circle cx="150" cy="40" r="4" fill="#38bdf8" />
                      <circle cx="290" cy="20" r="4" fill="#38bdf8" />
                    </svg>
                    <div className="absolute bottom-0 left-0 text-xs text-gray-400">Junior</div>
                    <div className="absolute bottom-0 right-0 text-xs text-gray-400">Senior</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12 space-y-4"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-300">
                Find Mentors for These Roles
              </button>
              <button
                onClick={() => setShowResults(false)}
                className="border border-slate-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-sky-400 hover:text-white transition-all duration-300"
              >
                Try Different Inputs
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">
              Career <span className="text-purple-400">Predictor</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover your ideal career path based on your skills, interests, and experience
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Skills */}
            <div>
              <label className="block text-xl font-semibold text-white mb-4">
                What are your technical skills?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skillOptions.map((skill) => (
                  <button
                    key={skill}
                    type="button"
                    onClick={() => toggleSelection(skill, 'skills')}
                    className={`p-3 text-sm rounded-lg border transition-all ${
                      formData.skills.includes(skill)
                        ? 'bg-sky-500 border-sky-500 text-white'
                        : 'bg-slate-700/50 border-slate-600 text-gray-300 hover:border-sky-400'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <label className="block text-xl font-semibold text-white mb-4">
                What areas interest you most?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {interestOptions.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleSelection(interest, 'interests')}
                    className={`p-3 text-sm rounded-lg border transition-all ${
                      formData.interests.includes(interest)
                        ? 'bg-purple-500 border-purple-500 text-white'
                        : 'bg-slate-700/50 border-slate-600 text-gray-300 hover:border-purple-400'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-xl font-semibold text-white mb-4">
                What's your experience level?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {experienceOptions.map((exp) => (
                  <button
                    key={exp}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, experience: exp }))}
                    className={`p-3 text-sm rounded-lg border transition-all ${
                      formData.experience === exp
                        ? 'bg-amber-500 border-amber-500 text-white'
                        : 'bg-slate-700/50 border-slate-600 text-gray-300 hover:border-amber-400'
                    }`}
                  >
                    {exp}
                  </button>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <label className="block text-xl font-semibold text-white mb-4">
                What's your educational background?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {educationOptions.map((edu) => (
                  <button
                    key={edu}
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, education: edu }))}
                    className={`p-3 text-sm rounded-lg border transition-all ${
                      formData.education === edu
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'bg-slate-700/50 border-slate-600 text-gray-300 hover:border-green-400'
                    }`}
                  >
                    {edu}
                  </button>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className="block text-xl font-semibold text-white mb-4">
                Preferred work location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                placeholder="e.g., San Francisco, Remote, New York"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={formData.skills.length === 0 || formData.interests.length === 0 || !formData.experience || isAnalyzing}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isAnalyzing ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Analyzing your profile...</span>
                </>
              ) : (
                <>
                  <Brain className="h-5 w-5" />
                  <span>Predict My Career Path</span>
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default CareerPredictor;