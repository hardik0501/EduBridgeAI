import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, FileText, CheckCircle, AlertTriangle, Download, Star, TrendingUp } from 'lucide-react';

const ResumeAnalyzer: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile && uploadedFile.type === 'application/pdf') {
      setFile(uploadedFile);
    }
  };

  const handleAnalyze = () => {
    if (!file) return;
    
    setIsAnalyzing(true);
    // Simulate analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 3000);
  };

  const mockAnalysis = {
    overallScore: 78,
    strengths: [
      "Strong technical skills section with relevant technologies",
      "Clear work experience with quantified achievements",
      "Good formatting and professional layout",
      "Relevant project descriptions with impact metrics",
      "Proper use of action verbs and industry keywords"
    ],
    weakPoints: [
      "Missing specific certifications for target role",
      "Could include more soft skills examples",
      "Education section could be more detailed",
      "No volunteer or extracurricular activities mentioned"
    ],
    suggestions: [
      "Add AWS or cloud certifications to strengthen technical profile",
      "Include a brief professional summary at the top",
      "Quantify more achievements with specific numbers and percentages",
      "Consider adding relevant coursework or academic projects",
      "Include links to GitHub, LinkedIn, or portfolio website",
      "Tailor keywords to match specific job descriptions"
    ]
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">
              Resume <span className="text-amber-400">Analyzer</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get AI-powered feedback on your resume to maximize your chances of landing your dream job
          </p>
        </motion.div>

        {!analysisComplete ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Upload Your Resume</h2>
                
                <div className="border-2 border-dashed border-slate-600 rounded-xl p-8 text-center hover:border-sky-400 transition-colors">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="resume-upload"
                  />
                  <label htmlFor="resume-upload" className="cursor-pointer">
                    <Upload className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-white text-lg font-semibold mb-2">
                      Choose PDF file or drag and drop
                    </p>
                    <p className="text-gray-400">
                      Maximum file size: 5MB
                    </p>
                  </label>
                </div>

                {file && (
                  <div className="mt-6 p-4 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="h-8 w-8 text-sky-400" />
                      <div>
                        <p className="text-white font-semibold">{file.name}</p>
                        <p className="text-gray-400 text-sm">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleAnalyze}
                  disabled={!file || isAnalyzing}
                  className="w-full mt-6 bg-gradient-to-r from-amber-500 to-orange-600 text-white py-4 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <TrendingUp className="h-5 w-5" />
                      <span>Analyze Resume</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-6">What You'll Get</h2>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: Star,
                      title: "Overall Score",
                      description: "Get a comprehensive score based on industry standards and ATS compatibility"
                    },
                    {
                      icon: CheckCircle,
                      title: "Strengths Analysis",
                      description: "Discover what's working well in your resume and builds on those strengths"
                    },
                    {
                      icon: AlertTriangle,
                      title: "Improvement Areas",
                      description: "Identify specific areas that need attention to boost your success rate"
                    },
                    {
                      icon: TrendingUp,
                      title: "Actionable Suggestions",
                      description: "Receive detailed recommendations to optimize your resume for your target role"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                        <p className="text-gray-300 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                  <p className="text-amber-400 text-sm">
                    💡 <strong>Pro Tip:</strong> Make sure your resume is in PDF format for the most accurate analysis
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          /* Analysis Results */
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Overall Score */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Resume Analysis Complete</h2>
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="10"
                      fill="transparent"
                      className="text-slate-700"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="10"
                      fill="transparent"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - mockAnalysis.overallScore / 100)}`}
                      className="text-sky-400"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">{mockAnalysis.overallScore}</span>
                  </div>
                </div>
                <p className="text-xl text-gray-300">
                  Your resume scores <span className="text-sky-400 font-bold">{mockAnalysis.overallScore}/100</span>
                </p>
              </div>
            </div>

            {/* Analysis Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Strengths */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                  <h3 className="text-xl font-bold text-white">Strengths</h3>
                </div>
                <ul className="space-y-3">
                  {mockAnalysis.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm">{strength}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weak Points */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <AlertTriangle className="h-6 w-6 text-amber-400" />
                  <h3 className="text-xl font-bold text-white">Areas to Improve</h3>
                </div>
                <ul className="space-y-3">
                  {mockAnalysis.weakPoints.map((weakness, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm">{weakness}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Suggestions */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <TrendingUp className="h-6 w-6 text-sky-400" />
                  <h3 className="text-xl font-bold text-white">Suggestions</h3>
                </div>
                <ul className="space-y-3">
                  {mockAnalysis.suggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-sky-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm">{suggestion}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-sky-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2">
                <Download className="h-5 w-5" />
                <span>Download Improved Resume</span>
              </button>
              <button
                onClick={() => {
                  setFile(null);
                  setAnalysisComplete(false);
                }}
                className="border border-slate-600 text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-sky-400 hover:text-white transition-all duration-300"
              >
                Analyze Another Resume
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ResumeAnalyzer;