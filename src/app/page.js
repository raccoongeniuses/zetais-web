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
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">Z</span>
              </div>
              <span className="text-gray-900 text-lg font-medium">
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
                  className="text-sm text-gray-600 hover:text-blue-600 font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100 bg-white">
              {[
                { id: "home", label: "Home" },
                { id: "solutions", label: "Solutions" },
                { id: "about", label: "About" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-gray-600 hover:text-blue-600"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - InPay Style */}
      <section id="home" className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Trust Badge */}
              <div className="inline-flex items-center bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-full mb-8 border border-blue-100">
                <Shield className="w-4 h-4 mr-2" />
                Regulated & Secure since 2015
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Digital Solutions
                <br />
                <span className="text-blue-600">for Modern Business</span>
              </h1>

              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Founded in 2015, Zeta Solutions was born out of a simple
                realization: setting up and running an online business is not
                easy. From building a website to managing payments, marketing,
                and customer engagement—many business owners face overwhelming
                challenges when trying to bring their products and services
                online.
              </p>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                That's where we come in. At Zeta, we enable businesses to start
                & thrive in the digital world. Whether you need a turnkey
                website, secure payment integration, SMS communication tools, or
                strategic advertising services, we're here to simplify the
                process and help you succeed.
              </p>

              {/* Key Features */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle size={14} className="text-green-600" />
                  </div>
                  <span className="text-gray-700">
                    99.9% uptime guarantee with 24/7 monitoring
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle size={14} className="text-green-600" />
                  </div>
                  <span className="text-gray-700">
                    Single API integration for all services
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle size={14} className="text-green-600" />
                  </div>
                  <span className="text-gray-700">
                    Real-time transaction processing & reporting
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-blue-600 text-white px-6 py-3 rounded font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  onClick={() => scrollToSection("solutions")}
                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded font-medium hover:bg-gray-50 transition-colors"
                >
                  View Solutions
                </button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-100">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      99.9%
                    </div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      500+
                    </div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-gray-100">
                    <div className="text-2xl font-bold text-orange-600 mb-1">
                      200+
                    </div>
                    <div className="text-sm text-gray-600">Clients</div>
                  </div>
                </div>

                {/* Feature List */}
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Our Platform Provides:
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Eye size={14} className="text-blue-600" />
                      <span>Real-time, 24/7, 365 transaction tracking</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp size={14} className="text-green-600" />
                      <span>Customizable & downloadable reports</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Layers size={14} className="text-purple-600" />
                      <span>Rich data analysis</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Settings size={14} className="text-orange-600" />
                      <span>Multiple integration methods</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section - Clean InPay Style */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Digital Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From infrastructure to integration, we provide end-to-end
              solutions that scale with your business.
            </p>
          </div>

          {/* Solutions Grid - InPay Style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Server & Hosting */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Server size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Server & Webhosting Services
              </h3>
              <p className="text-gray-600 mb-6">
                We house and secure all your online domain and its data with it.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>99.9% uptime guarantee</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>Enterprise security protocols</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>24/7 monitoring & support</span>
                </li>
              </ul>
            </div>

            {/* Turnkey Solutions */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Zap size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Turnkey Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                Start doing business right away, we help you to set up and
                manage your online requirements, you just need to focus on your
                operations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <span>Full website development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <span>System integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                  <span>Ongoing maintenance</span>
                </li>
              </ul>
            </div>

            {/* Payment Solutions */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <CreditCard size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Integrated Payment Solutions
              </h3>
              <p className="text-gray-600 mb-6">
                <strong>Move In:</strong> We process all your clients payments
                in an instant with only a few steps
                <br />
                <strong>Move Out:</strong> We help to settle all your invoices
                and payable to any form of channel or wallet required
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                  <span>Multiple payment gateways</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                  <span>Real-time processing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                  <span>Multi-currency support</span>
                </li>
              </ul>
            </div>

            {/* SMS Services */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare size={24} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                SMS Services
              </h3>
              <p className="text-gray-600 mb-6">
                Engage clients with reliable messages. Everything you need to
                accelerate your go-to-market strategy—while ensuring exceptional
                message deliverability.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                  <span>Bulk messaging campaigns</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                  <span>Automated workflows</span>
                </li>
              </ul>
            </div>

            {/* Third Party Integrations */}
            <div className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <Settings size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Misc 3rd Party Products
              </h3>
              <p className="text-gray-600 mb-6">
                We have various 3rd parties products that will help assist
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                  <span>Marketing automation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                  <span>Analytics & reporting</span>
                </li>
              </ul>
            </div>

            {/* Customer Portal */}
            <div className="bg-blue-50 rounded-lg border border-blue-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Building2 size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Customer Portal
              </h3>
              <p className="text-gray-600 mb-6">
                Intuitive interface to access all services via single login with
                comprehensive management tools.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>Real-time tracking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                  <span>Custom reports</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - InPay Style */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Trusted Partner Since 2015
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2015, Zeta Solutions was born out of a simple
                realization: setting up and running an online business is not
                easy. From building a website to managing payments, marketing,
                and customer engagement—many business owners face overwhelming
                challenges when trying to bring their products and services
                online.
              </p>
              <p className="text-gray-600 mb-8">
                Our mission is to make digital transformation accessible,
                efficient, and impactful for every business—no matter the size
                or industry.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Regulated & Secure
                    </div>
                    <div className="text-sm text-gray-600">
                      Enterprise compliance
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Award size={20} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">9+ Years</div>
                    <div className="text-sm text-gray-600">Since 2015</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Globe size={20} className="text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      200+ Clients
                    </div>
                    <div className="text-sm text-gray-600">
                      Worldwide coverage
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock size={20} className="text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      24/7 Support
                    </div>
                    <div className="text-sm text-gray-600">
                      Always available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Simple visual */}
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle size={16} className="text-green-600" />
                      </div>
                      <span className="font-medium text-gray-900">
                        Server Status
                      </span>
                    </div>
                    <span className="text-green-600 text-sm font-medium">
                      99.9% Uptime
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <TrendingUp size={16} className="text-blue-600" />
                      </div>
                      <span className="font-medium text-gray-900">
                        Transactions
                      </span>
                    </div>
                    <span className="text-blue-600 text-sm font-medium">
                      Real-time
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Shield size={16} className="text-purple-600" />
                      </div>
                      <span className="font-medium text-gray-900">
                        Security
                      </span>
                    </div>
                    <span className="text-purple-600 text-sm font-medium">
                      Enterprise
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - InPay Style */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get Started Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your business digitally? Contact us for a
              consultation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Send us a message
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded font-medium hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Mail size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-gray-600">
                        hello@zetasolutions.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone size={20} className="text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Phone</div>
                      <div className="text-gray-600">+62 xxx-xxxx-xxxx</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Clock size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Support</div>
                      <div className="text-gray-600">24/7 Available</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Access */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Existing Clients
                </h4>
                <p className="text-gray-600 text-sm mb-4">
                  Access your customer portal for real-time tracking, reports,
                  and account management.
                </p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700 transition-colors">
                  Client Portal Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-sm font-bold">Z</span>
                </div>
                <span className="text-gray-900 text-lg font-medium">
                  Zeta Solutions
                </span>
              </div>
              <p className="text-gray-600 mb-4">
                Empowering businesses with comprehensive digital solutions since
                2015. Your trusted partner for digital transformation.
              </p>
              <div className="text-sm text-gray-500">
                © 2024 Zeta Solutions. All rights reserved. Founded in 2015.
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-4">Solutions</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Web Hosting</div>
                <div>Turnkey Solutions</div>
                <div>Payment Processing</div>
                <div>SMS Services</div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-4">Support</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>24/7 Technical Support</div>
                <div>Documentation</div>
                <div>Client Portal</div>
                <div>Contact Us</div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>About Us</div>
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div>Careers</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZetaSolutionsLanding;
