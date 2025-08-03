import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your AI career assistant. I can help you with career guidance, skill development, industry insights, and more. What would you like to know?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isApiReady, setIsApiReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Gemini API Key
  const API_KEY = "AIzaSyBV_XaUDEc1PZKnYok9pjZsyUtb3A_votU";

  const predefinedQuestions = [
    "How to get started in Data Science?",
    "What are the top certifications for Cloud Engineers?",
    "Which are the best programming languages to learn in 2025?",
    "How to prepare for technical interviews?",
    "Which skills are in demand for AI/ML roles?",
    "How to transition from academics to the industry?"
  ];

  // Check if Gemini API is available
  useEffect(() => {
    const checkApiAvailability = async () => {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
        if (response.ok) {
          setIsApiReady(true);
        } else {
          const errorData = await response.json();
          setError(`API Error: ${errorData.error?.message || 'Unknown error'}`); 
        }
      } catch (err) {
        setError(`Network Error: ${err instanceof Error ? err.message : 'Unknown error'}`);
      }
    };
    
    checkApiAvailability();
  }, []);

  // Generate response using Gemini API
  const generateGeminiResponse = async (userMessage: string): Promise<string> => {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-1.5:generateContent?key=${API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `You are a helpful AI career assistant. The user is asking: ${userMessage}\n\nPlease provide a helpful, informative, and friendly response in English. Focus on career guidance, skill development, and industry insights.`,
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.7,
              topK: 40,
              topP: 0.95,
              maxOutputTokens: 1024,
            },
          }),
        }
      );

      const data = await response.json();
      
      if (data.error) {
        console.error('Gemini API Error:', data.error);
        return `API Error: ${data.error.message || 'Unknown error'}. Please try again later.`;
      }
      
      return data.candidates[0].content.parts[0].text || 'Sorry, I could not generate a response.';
    } catch (err) {
      console.error('Error calling Gemini API:', err);
      return `Network Error: ${err instanceof Error ? err.message : 'Unknown error'}. Please check your connection and try again.`;
    }
  };
  
  // Fallback response generator when API is not available
  const generateFallbackResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('data science')) {
      return "To get started in Data Science, I recommend: 1) Learn the basics of Python and SQL, 2) Master statistics and mathematics, 3) Practice with real datasets on Kaggle, 4) Build projects showing end-to-end ML pipelines, 5) Consider certifications from Google, AWS, or Microsoft. Would you like specific course recommendations?";
    }
    
    if (lowerMessage.includes('cloud') || lowerMessage.includes('aws') || lowerMessage.includes('azure')) {
      return "For a Cloud Engineering career, focus on: 1) AWS Solutions Architect or Azure Fundamentals certifications, 2) Learn Infrastructure as Code (Terraform, CloudFormation), 3) Master containerization (Docker, Kubernetes), 4) Understand CI/CD pipelines, 5) Practice with real cloud projects. Market demand for cloud engineers is very high!";
    }
    
    if (lowerMessage.includes('programming') || lowerMessage.includes('language')) {
      return "Top programming languages for 2025: 1) Python (AI/ML, web dev, automation), 2) JavaScript/TypeScript (web development), 3) Go (cloud/backend systems), 4) Rust (system programming), 5) Java (enterprise applications). Choose based on your career goals - Python is excellent for beginners and has the most opportunities.";
    }
    
    if (lowerMessage.includes('interview')) {
      return "Tips for preparing for technical interviews: 1) Practice coding problems daily on LeetCode/HackerRank, 2) Study system design patterns, 3) Review computer science fundamentals, 4) Prepare behavioral stories using the STAR method, 5) Do mock interviews with peers or platforms like Pramp. Remember: communication is as important as coding skills!";
    }
    
    if (lowerMessage.includes('ai') || lowerMessage.includes('ml') || lowerMessage.includes('machine learning')) {
      return "In-demand skills for AI/ML: 1) Python programming with pandas, numpy, scikit-learn, 2) Deep learning frameworks (TensorFlow, PyTorch), 3) MLOps and model deployment, 4) Vector databases and LLMs, 5) Statistics and experimental design. Start with fundamentals and build practical projects!";
    }
    
    if (lowerMessage.includes('transition') || lowerMessage.includes('academia')) {
      return "Transition from academia to industry: 1) Translate research experience into business impact, 2) Build a portfolio of practical projects, 3) Network with industry professionals, 4) Consider internships or part-time roles, 5) Highlight transferable skills like problem-solving and analytical thinking. Your research background is valuable!";
    }
    
    return "That's a great question! Based on current industry trends, I recommend focusing on practical skills and building a strong portfolio. Consider connecting with mentors in your area of interest through our platform. They can provide personalized guidance based on their real-world experience. What specific area would you like to explore further?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);
    
    try {
      // Use Gemini API if available, otherwise use fallback
      const responseText = isApiReady 
        ? await generateGeminiResponse(inputMessage)
        : generateFallbackResponse(inputMessage);
        
      const aiResponse: Message = {
        id: messages.length + 2,
        text: responseText,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (err) {
      const errorMessage: Message = {
        id: messages.length + 2,
        text: `Sorry, there was an error processing your request: ${err instanceof Error ? err.message : 'Unknown error'}`,
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuestionClick = (question: string) => {
    setInputMessage(question);
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-purple-500 rounded-xl flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white">
              Gemini <span className="text-sky-400">AI Assistant</span>
            </h1>
          </div>
          <p className="text-xl text-gray-300">
            Get instant answers to your questions with Gemini AI
          </p>
          {!isApiReady && !error && (
            <div className="flex items-center justify-center mt-4 text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-lg p-2">
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              <span>Connecting to Gemini API...</span>
            </div>
          )}
          {error && (
            <div className="mt-4 text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg p-2">
              {error}
            </div>
          )}
        </motion.div>

        {/* Chat Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden"
        >
          {/* Messages */}
          <div className="h-96 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-3 max-w-3xl ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user' 
                      ? 'bg-sky-500' 
                      : 'bg-gradient-to-br from-purple-500 to-pink-500'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-5 w-5 text-white" />
                    ) : (
                      <Bot className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <div className={`rounded-2xl p-4 ${
                    message.sender === 'user'
                      ? 'bg-sky-500 text-white'
                      : 'bg-slate-700/50 text-gray-200'
                  }`}>
                    <p className="leading-relaxed">{message.text}</p>
                    <p className="text-xs opacity-70 mt-2">
                      {message.timestamp.toLocaleTimeString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3 max-w-3xl">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-purple-500 to-pink-500">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div className="bg-slate-700/50 rounded-2xl p-4">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-slate-700 p-6">
            <div className="flex space-x-4">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your question here..."
                className="flex-1 bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Predefined Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <h3 className="text-xl font-semibold text-white mb-4">Popular Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {predefinedQuestions.map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(question)}
                className="text-left bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:border-sky-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/10"
              >
                <p className="text-gray-300 hover:text-white transition-colors">
                  {question}
                </p>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AIAssistant;