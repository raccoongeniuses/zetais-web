"use client";

import React from "react";
import {
  Zap,
  CheckCircle,
  ArrowRight,
  Code,
  Palette,
  Database,
  Smartphone,
  Globe,
  Settings,
  Users,
  BarChart3,
  Headphones,
  Clock,
  Shield,
  Layers,
  Wrench,
} from "lucide-react";

const TurnkeyPage = () => {
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
            <a
              href="/"
              className="text-sm text-gray-300 hover:text-white font-medium transition-colors"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-green-500/20 text-green-400 text-sm px-4 py-2 rounded-full mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Turnkey Solutions
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Complete Digital
                <br />
                <span className="text-green-400">Business Setup</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Start doing business right away, we help you to set up and
                manage your online requirements, you just need to focus on your
                operations. From concept to launch, we handle everything.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-6 py-3 rounded font-medium hover:bg-green-700 transition-colors inline-flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight size={16} />
                </button>
                <button className="border border-white/20 text-gray-300 px-6 py-3 rounded font-medium hover:bg-white/5 transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-500/20 rounded-lg p-4 border border-green-500/30">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      30
                    </div>
                    <div className="text-sm text-gray-400">Days Setup</div>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-500/30">
                    <div className="text-2xl font-bold text-blue-400 mb-1">
                      100%
                    </div>
                    <div className="text-sm text-gray-400">Managed</div>
                  </div>
                  <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-500/30">
                    <div className="text-2xl font-bold text-purple-400 mb-1">
                      24/7
                    </div>
                    <div className="text-sm text-gray-400">Support</div>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-4 border border-green-500/30">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      500+
                    </div>
                    <div className="text-sm text-gray-400">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Business Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We handle every aspect of your digital presence so you can focus
              on what matters most - your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Code size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Custom Development
              </h3>
              <p className="text-gray-300 mb-4">
                Tailored web applications and systems built specifically for
                your business needs and requirements.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Custom Web Apps</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>API Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Database Design</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Palette size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Design & Branding
              </h3>
              <p className="text-gray-300 mb-4">
                Professional design services including logo creation, brand
                identity, and user experience design.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Logo & Branding</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>UI/UX Design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Responsive Design</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Database size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                System Integration
              </h3>
              <p className="text-gray-300 mb-4">
                Seamless integration of all your business systems and
                third-party services for optimal workflow.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Payment Gateways</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>CRM Integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>API Connections</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Smartphone size={24} className="text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Mobile Solutions
              </h3>
              <p className="text-gray-300 mb-4">
                Mobile-first applications and responsive designs that work
                perfectly across all devices.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Mobile Apps</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Progressive Web Apps</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Cross-Platform</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Globe size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                E-commerce Setup
              </h3>
              <p className="text-gray-300 mb-4">
                Complete online store setup with payment processing, inventory
                management, and order fulfillment.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Online Store</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Payment Processing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Inventory Management</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Settings size={24} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Ongoing Management
              </h3>
              <p className="text-gray-300 mb-4">
                Continuous maintenance, updates, and optimization to keep your
                systems running smoothly.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Regular Updates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Performance Monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Security Patches</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Turnkey Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures your project is delivered on
              time and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                1. Discovery
              </h3>
              <p className="text-gray-300 text-sm">
                We understand your business goals, target audience, and specific
                requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                2. Planning
              </h3>
              <p className="text-gray-300 text-sm">
                Detailed project roadmap, timeline, and resource allocation for
                optimal results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench size={24} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                3. Development
              </h3>
              <p className="text-gray-300 text-sm">
                Agile development process with regular updates and quality
                assurance testing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 size={24} className="text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                4. Launch
              </h3>
              <p className="text-gray-300 text-sm">
                Smooth deployment with training, documentation, and ongoing
                support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how we've helped businesses transform their digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                E-commerce Platform
              </h3>
              <p className="text-gray-300 mb-4">
                Complete online store setup for a retail business, including
                payment integration, inventory management, and customer portal.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Timeline:</span>
                  <span className="font-medium">4 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Result:</span>
                  <span className="font-medium text-green-600">
                    300% increase in sales
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Database size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Business Management System
              </h3>
              <p className="text-gray-600 mb-6">
                Custom CRM and project management system for a consulting firm,
                streamlining operations and improving client relationships.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Timeline:</span>
                  <span className="font-medium">6 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Result:</span>
                  <span className="font-medium text-green-600">
                    50% efficiency gain
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Mobile Application
              </h3>
              <p className="text-gray-600 mb-6">
                Cross-platform mobile app for a service business, enabling
                customers to book appointments and make payments on the go.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Timeline:</span>
                  <span className="font-medium">8 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Result:</span>
                  <span className="font-medium text-green-600">
                    200% more bookings
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Turnkey Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the package that best fits your business needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 rounded-lg border border-white/10 p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Starter</h3>
              <div className="text-3xl font-bold text-white mb-6">
                $2,999<span className="text-lg text-gray-600">/project</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">Basic Website (5 pages)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">Responsive Design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">Contact Form</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">Basic SEO</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">3 months support</span>
                </li>
              </ul>
              <button className="w-full bg-white/10 text-white py-3 rounded font-medium hover:bg-white/20 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-green-500/20 rounded-lg border border-green-500/30 p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Business
              </h3>
              <div className="text-3xl font-bold text-white mb-6">
                $7,999<span className="text-lg text-gray-600">/project</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">
                    Custom Website (15 pages)
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">E-commerce Integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">Payment Processing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">Advanced SEO</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">6 months support</span>
                </li>
              </ul>
              <button className="w-full bg-green-500 text-white py-3 rounded font-medium hover:bg-green-600 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Enterprise
              </h3>
              <div className="text-3xl font-bold text-white mb-6">
                Custom<span className="text-lg text-gray-600"> pricing</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">Unlimited Pages</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">Custom Applications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">API Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">Mobile App</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">12 months support</span>
                </li>
              </ul>
              <button className="w-full bg-white/10 text-white py-3 rounded font-medium hover:bg-white/20 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Let us handle the technical complexity while you focus on growing
            your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-500 px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
            <button className="border border-white text-white px-8 py-3 rounded font-medium hover:bg-white hover:text-green-500 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A2E2A] border-t border-white/10 mt-auto">
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
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TurnkeyPage;
