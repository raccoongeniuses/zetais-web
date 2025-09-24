"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Server,
  Zap,
  CreditCard,
  MessageSquare,
  Settings,
  Phone,
  Mail,
  Users,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  Shield,
  Award,
  Globe,
  Clock,
  Building2,
  TrendingUp,
  Layers,
  Eye,
} from "lucide-react";

const ZetaSolutionsLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "solutions", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#1A2E2A] text-gray-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-sm bg-[#1A2E2A]/80 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">Z</span>
              </div>
              <span className="text-white text-lg font-medium">
                Zeta Solutions
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "solutions", label: "Solutions" },
                { id: "about", label: "About" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors py-2 ${
                    activeSection === item.id
                      ? "text-green-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-green-500 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-600 transition-colors shadow-md"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-300 focus:outline-none"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10 bg-[#1A2E2A]">
              {[
                { id: "home", label: "Home" },
                { id: "solutions", label: "Solutions" },
                { id: "about", label: "About" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 px-6 text-gray-300 hover:bg-white/5"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Dark Theme */}
      <section id="home" className="relative overflow-hidden py-24 md:py-40">
        {/* Gradient Blobs */}
        <div className="gradient-blob top-[-20%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-green-500 to-blue-600"></div>
        <div className="gradient-blob bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-purple-600 to-teal-500"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            We are the payments people.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Zeta's cross-border payments solutions connect organisations and
            communities globally to the network they need to thrive. Together,
            we make money move.
          </p>
          <button
            onClick={() => scrollToSection("solutions")}
            className="text-green-400 font-semibold group transition-transform transform"
          >
            Discover more{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              &rarr;
            </span>
          </button>
        </div>
      </section>

      {/* Solutions Section - Dark Theme */}
      <section id="solutions" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Financial Services
            </h2>
            <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
              For truly global banking. Everything you need to build, manage,
              and grow your online presence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Server & Hosting */}
            <a
              href="/services/hosting"
              className="solution-card p-8 rounded-2xl block"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                Server & Webhosting
              </h3>
              <p className="text-gray-400">
                We house and secure your online domain and all its data,
                providing a reliable and safe foundation for your website.
              </p>
            </a>

            {/* Turnkey Solutions */}
            <a
              href="/services/turnkey"
              className="solution-card p-8 rounded-2xl block"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                Turnkey Solutions
              </h3>
              <p className="text-gray-400">
                Start doing business right away. We set up and manage your
                online requirements so you can focus on your operations.
              </p>
            </a>

            {/* Payment Solutions */}
            <a
              href="/services/payments"
              className="solution-card p-8 rounded-2xl block"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                Integrate Payment Solutions
              </h3>
              <p className="text-gray-400">
                Process client payments instantly with a few simple steps (Move
                In) and settle all your payables to any channel or wallet (Move
                Out).
              </p>
            </a>

            {/* SMS Services */}
            <a
              href="/services/sms"
              className="solution-card p-8 rounded-2xl block"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                SMS Services
              </h3>
              <p className="text-gray-400">
                Engage clients with reliable messaging. Everything you need for
                your go-to-market strategy with exceptional deliverability.
              </p>
            </a>

            {/* Third Party Integrations */}
            <a
              href="/services/integrations"
              className="solution-card p-8 rounded-2xl block"
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                Misc 3rd Party Products
              </h3>
              <p className="text-gray-400">
                We offer a variety of third-party products and integrations to
                further assist and enhance your business capabilities.
              </p>
            </a>

            {/* Ready to Start Card */}
            <div className="bg-green-500/20 border border-green-500/30 text-white p-8 rounded-2xl flex flex-col justify-center items-center text-center">
              <h3 className="text-2xl font-bold mb-3">Ready to Start?</h3>
              <p className="mb-4 text-green-200">
                Let us handle the technical details so you can focus on growth.
              </p>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-green-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Dark Theme */}
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Trusted Partner Since 2015
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Founded in 2015, Zeta Solutions was born out of a simple
              realization: setting up and running an online business is not
              easy. Our mission is to make digital transformation accessible,
              efficient, and impactful for every business—no matter the size or
              industry.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="solution-card p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield size={24} className="text-green-400" />
              </div>
              <div className="font-semibold text-white mb-1">
                Regulated & Secure
              </div>
              <div className="text-sm text-gray-400">Enterprise compliance</div>
            </div>
            <div className="solution-card p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award size={24} className="text-green-400" />
              </div>
              <div className="font-semibold text-white mb-1">9+ Years</div>
              <div className="text-sm text-gray-400">Since 2015</div>
            </div>
            <div className="solution-card p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe size={24} className="text-green-400" />
              </div>
              <div className="font-semibold text-white mb-1">200+ Clients</div>
              <div className="text-sm text-gray-400">Worldwide coverage</div>
            </div>
            <div className="solution-card p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-green-400" />
              </div>
              <div className="font-semibold text-white mb-1">24/7 Support</div>
              <div className="text-sm text-gray-400">Always available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section - Dark Theme */}
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              Get Started with Zeta
            </h2>
            <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
              Choose the option that best fits your needs.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* New Merchants */}
            <div className="solution-card rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                New Merchants
              </h3>
              <p className="text-gray-400 mb-6">
                Ready to bring your business online? Let's talk about how we can
                help you succeed.
              </p>
              <form className="text-left">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-white"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-white"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white font-semibold py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Contact Sales
                </button>
              </form>
            </div>
            {/* Existing Merchants */}
            <div className="solution-card rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Existing Merchants
              </h3>
              <p className="text-gray-400 mb-6">
                Welcome back! Log in to your account to manage your services.
              </p>
              <form className="text-left">
                <div className="mb-4">
                  <label
                    htmlFor="login-email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="login-email"
                    className="mt-1 block w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-white"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="mt-1 block w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-700 text-white font-semibold py-3 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-transparent border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-xl font-bold text-white">Zeta Solutions</p>
              <p className="text-gray-400">
                © 2024 Zeta Solutions. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-400 hover:text-white"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZetaSolutionsLanding;
