"use client";

import React from "react";
import {
  Server,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Globe,
  Database,
  Zap,
  Users,
  BarChart3,
  Headphones,
  Lock,
  HardDrive,
  Wifi,
  Activity,
} from "lucide-react";

const HostingPage = () => {
  return (
    <div className="min-h-screen bg-[#1A2E2A] text-gray-200">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-transparent backdrop-blur-sm bg-[#1A2E2A]/80 border-b border-white/10 z-50">
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
                <Server className="w-4 h-4 mr-2" />
                Server & Webhosting Services
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Secure, Reliable
                <br />
                <span className="text-green-400">Web Hosting</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We house and secure all your online domain and its data with it.
                Our enterprise-grade hosting infrastructure ensures your
                business stays online with 99.9% uptime guarantee and 24/7
                monitoring.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-500 text-white px-6 py-3 rounded font-medium hover:bg-green-600 transition-colors inline-flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight size={16} />
                </button>
                <button className="border border-white/20 text-gray-300 px-6 py-3 rounded font-medium hover:bg-white/5 transition-colors">
                  View Pricing
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-500/20 rounded-lg p-4 border border-green-500/30">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      99.9%
                    </div>
                    <div className="text-sm text-gray-400">Uptime SLA</div>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-4 border border-green-500/30">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      24/7
                    </div>
                    <div className="text-sm text-gray-400">Monitoring</div>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-4 border border-green-500/30">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      SSL
                    </div>
                    <div className="text-sm text-gray-400">Included</div>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-4 border border-green-500/30">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      CDN
                    </div>
                    <div className="text-sm text-gray-400">Global</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise-Grade Hosting Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to keep your website fast, secure, and always
              available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Enterprise Security
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced security protocols including DDoS protection, SSL
                certificates, and regular security updates.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>DDoS Protection</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>SSL Certificates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Firewall Protection</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                High Performance
              </h3>
              <p className="text-gray-600 mb-4">
                Lightning-fast loading times with SSD storage, CDN integration,
                and optimized server configurations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>SSD Storage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>CDN Integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Optimized Servers</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Activity size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                24/7 Monitoring
              </h3>
              <p className="text-gray-600 mb-4">
                Round-the-clock monitoring with instant alerts and proactive
                issue resolution.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Real-time Monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Instant Alerts</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Proactive Support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Database size={24} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Data Management
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive data protection with automated backups, version
                control, and disaster recovery.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Automated Backups</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Version Control</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Disaster Recovery</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Globe size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Global Reach
              </h3>
              <p className="text-gray-600 mb-4">
                Worldwide content delivery with multiple data centers and edge
                locations for optimal performance.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Multiple Data Centers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Edge Locations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Global CDN</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Headphones size={24} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Expert Support
              </h3>
              <p className="text-gray-600 mb-4">
                Dedicated support team with deep hosting expertise and quick
                response times.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>24/7 Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Expert Team</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Quick Response</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed technical information about our hosting infrastructure
              and capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Infrastructure Details
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Server Type</span>
                  <span className="font-medium text-gray-900">
                    Enterprise SSD
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">CPU</span>
                  <span className="font-medium text-gray-900">
                    Intel Xeon Processors
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">RAM</span>
                  <span className="font-medium text-gray-900">Up to 64GB</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Storage</span>
                  <span className="font-medium text-gray-900">NVMe SSD</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Bandwidth</span>
                  <span className="font-medium text-gray-900">Unlimited</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Uptime SLA</span>
                  <span className="font-medium text-green-600">99.9%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Security Features
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Lock size={20} className="text-blue-600" />
                  <span className="text-gray-700">SSL/TLS Encryption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield size={20} className="text-green-600" />
                  <span className="text-gray-700">DDoS Protection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Database size={20} className="text-purple-600" />
                  <span className="text-gray-700">Automated Backups</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Activity size={20} className="text-orange-600" />
                  <span className="text-gray-700">Intrusion Detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <HardDrive size={20} className="text-indigo-600" />
                  <span className="text-gray-700">Data Encryption at Rest</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wifi size={20} className="text-teal-600" />
                  <span className="text-gray-700">
                    Secure Network Protocols
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hosting Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect hosting plan for your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Starter
              </h3>
              <div className="text-3xl font-bold text-gray-900 mb-6">
                $29<span className="text-lg text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">1 Website</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">10GB SSD Storage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Unlimited Bandwidth</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">SSL Certificate</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">24/7 Support</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded font-medium hover:bg-gray-200 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-blue-50 rounded-lg border border-blue-200 p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Business
              </h3>
              <div className="text-3xl font-bold text-gray-900 mb-6">
                $79<span className="text-lg text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">5 Websites</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">50GB SSD Storage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Unlimited Bandwidth</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">SSL Certificate</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">CDN Included</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Priority Support</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-3 rounded font-medium hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Enterprise
              </h3>
              <div className="text-3xl font-bold text-gray-900 mb-6">
                $199<span className="text-lg text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Unlimited Websites</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">200GB SSD Storage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Unlimited Bandwidth</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Advanced SSL</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Dedicated IP</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Dedicated Support</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded font-medium hover:bg-gray-200 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join hundreds of businesses that trust Zeta Solutions for their
            hosting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
              Start Your Free Trial
            </button>
            <button className="border border-white text-white px-8 py-3 rounded font-medium hover:bg-white hover:text-green-600 transition-colors">
              Contact Sales
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

export default HostingPage;
