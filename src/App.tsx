import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EnterprisePage from './pages/EnterprisePage';
import InstallationPage from './pages/InstallationPage';
import PricingPage from './pages/PricingPage';
import FeaturesPage from './pages/FeaturesPage';
import FAQPage from './pages/FAQPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import ForgotPasswordForm from './components/auth/ForgotPasswordForm';
import Dashboard from './components/dashboard/Dashboard';
import AccountSettings from './components/dashboard/AccountSettings';
import PlanManagement from './components/dashboard/PlanManagement';
import DownloadPage from './components/dashboard/DownloadPage';
import NotificationsPage from './components/dashboard/NotificationsPage';
import ContactForm from './components/contact/ContactForm';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/enterprise" element={<EnterprisePage />} />
              <Route path="/installation" element={<InstallationPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/contact" element={<ContactForm />} />
              
              {/* Auth Routes */}
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/forgot-password" element={<ForgotPasswordForm />} />
              
              {/* Dashboard Routes */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/account-settings" element={<AccountSettings />} />
              <Route path="/plan-management" element={<PlanManagement />} />
              <Route path="/download" element={<DownloadPage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;