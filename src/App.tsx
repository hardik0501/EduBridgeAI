import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import StudentDashboard from './pages/StudentDashboard';
import AlumniDashboard from './pages/AlumniDashboard';
import MentorshipMatching from './pages/MentorshipMatching';
import AIAssistant from './pages/AIAssistant';
import ResumeAnalyzer from './pages/ResumeAnalyzer';
import CareerPredictor from './pages/CareerPredictor';
import Forum from './pages/Forum';
import Contact from './pages/Contact';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-slate-950 text-white">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/student-dashboard" element={<StudentDashboard />} />
              <Route path="/alumni-dashboard" element={<AlumniDashboard />} />
              <Route path="/mentorship" element={<MentorshipMatching />} />
              <Route path="/ai-assistant" element={<AIAssistant />} />
              <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
              <Route path="/career-predictor" element={<CareerPredictor />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
          <Toaster 
            position="top-right"
            toastOptions={{
              style: {
                background: '#1e293b',
                color: '#fff',
                border: '1px solid #38bdf8'
              }
            }}
          />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;