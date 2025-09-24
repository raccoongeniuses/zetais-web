"use client";

import React from "react";
import {
  MessageSquare,
  CheckCircle,
  ArrowRight,
  Send,
  Users,
  BarChart3,
  Clock,
  Globe,
  Smartphone,
  Zap,
  Shield,
  Target,
  TrendingUp,
  Bell,
  Mail,
  Phone,
} from "lucide-react";

const SMSPage = () => {
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-red-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-orange-100 text-orange-700 text-sm px-4 py-2 rounded-full mb-6">
                <MessageSquare className="w-4 h-4 mr-2" />
                SMS Services
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Reliable SMS
                <br />
                <span className="text-orange-600">Communication</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Engage clients with reliable messages. Everything you need to
                accelerate your go-to-market strategy—while ensuring exceptional
                message deliverability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-600 text-white px-6 py-3 rounded font-medium hover:bg-orange-700 transition-colors inline-flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight size={16} />
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded font-medium hover:bg-gray-50 transition-colors">
                  View Pricing
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                    <div className="text-2xl font-bold text-orange-600 mb-1">
                      99.9%
                    </div>
                    <div className="text-sm text-gray-600">Deliverability</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      &lt;1s
                    </div>
                    <div className="text-sm text-gray-600">Delivery Time</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      200+
                    </div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SMS Communication Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful SMS tools designed to help you reach your customers
              effectively and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Send size={24} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Bulk Messaging
              </h3>
              <p className="text-gray-600 mb-4">
                Send messages to thousands of recipients simultaneously with our
                high-volume SMS platform.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Mass SMS Campaigns</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Contact List Management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Message Templates</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Automated Workflows
              </h3>
              <p className="text-gray-600 mb-4">
                Set up automated SMS sequences for customer onboarding,
                reminders, and follow-ups.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Trigger-based Messages</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Drip Campaigns</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Event-driven SMS</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                High Deliverability
              </h3>
              <p className="text-gray-600 mb-4">
                Industry-leading deliverability rates with advanced routing and
                quality monitoring.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>99.9% Delivery Rate</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Quality Monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Carrier Relationships</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Globe size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Global Reach
              </h3>
              <p className="text-gray-600 mb-4">
                Send SMS messages to customers worldwide with support for
                international numbers and local carriers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>200+ Countries</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>International Numbers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Local Carrier Support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Analytics & Reporting
              </h3>
              <p className="text-gray-600 mb-4">
                Track message performance with detailed analytics, delivery
                reports, and engagement metrics.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Delivery Reports</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Engagement Metrics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Performance Analytics</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Smartphone size={24} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Two-Way Messaging
              </h3>
              <p className="text-gray-600 mb-4">
                Enable two-way conversations with your customers through SMS for
                support and engagement.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Inbound SMS Handling</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Auto-responses</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Customer Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SMS Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how businesses use SMS to improve customer engagement and
              drive results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Bell size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Notifications & Alerts
              </h3>
              <p className="text-gray-600 mb-4">
                Send important notifications, alerts, and updates to keep
                customers informed in real-time.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Order Confirmations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Appointment Reminders</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Security Alerts</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Target size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Marketing Campaigns
              </h3>
              <p className="text-gray-600 mb-4">
                Launch targeted SMS marketing campaigns to promote products,
                services, and special offers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Promotional Messages</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Event Invitations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Flash Sales</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Customer Support
              </h3>
              <p className="text-gray-600 mb-4">
                Provide instant customer support through SMS for quick issue
                resolution and better service.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Help Desk Integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>FAQ Responses</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Status Updates</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Phone size={24} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Authentication
              </h3>
              <p className="text-gray-600 mb-4">
                Secure two-factor authentication and verification codes for
                enhanced account security.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>2FA Codes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Login Verification</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Password Reset</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Lead Nurturing
              </h3>
              <p className="text-gray-600 mb-4">
                Nurture leads through automated SMS sequences to convert
                prospects into customers.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Follow-up Sequences</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Lead Scoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Conversion Tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Mail size={24} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Transactional SMS
              </h3>
              <p className="text-gray-600 mb-4">
                Send transactional messages for payments, bookings, and other
                business-critical communications.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Payment Confirmations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Booking Confirmations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Delivery Updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade SMS infrastructure with industry-leading
              performance and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Performance Metrics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Delivery Rate</span>
                  <span className="font-medium text-green-600">99.9%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Delivery Speed</span>
                  <span className="font-medium text-gray-900">
                    &lt; 1 second
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Uptime SLA</span>
                  <span className="font-medium text-blue-600">99.99%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">API Response Time</span>
                  <span className="font-medium text-gray-900">&lt; 200ms</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-600">Message Volume</span>
                  <span className="font-medium text-gray-900">Unlimited</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Features & Capabilities
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Globe size={20} className="text-blue-600" />
                  <span className="text-gray-700">
                    Global Coverage (200+ Countries)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield size={20} className="text-green-600" />
                  <span className="text-gray-700">Dedicated Short Codes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap size={20} className="text-purple-600" />
                  <span className="text-gray-700">
                    Real-time Delivery Reports
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 size={20} className="text-orange-600" />
                  <span className="text-gray-700">Advanced Analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={20} className="text-indigo-600" />
                  <span className="text-gray-700">Scheduled Messaging</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users size={20} className="text-teal-600" />
                  <span className="text-gray-700">Contact Management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SMS Pricing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with volume discounts. Pay only for what you
              use.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Starter
              </h3>
              <div className="text-3xl font-bold text-gray-900 mb-6">
                $0.05<span className="text-lg text-gray-600">/SMS</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Up to 1,000 SMS/month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Basic Templates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Standard Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Basic Analytics</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded font-medium hover:bg-gray-200 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-orange-50 rounded-lg border border-orange-200 p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Business
              </h3>
              <div className="text-3xl font-bold text-gray-900 mb-6">
                $0.03<span className="text-lg text-gray-600">/SMS</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Up to 10,000 SMS/month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Custom Templates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Priority Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Advanced Analytics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">API Access</span>
                </li>
              </ul>
              <button className="w-full bg-orange-600 text-white py-3 rounded font-medium hover:bg-orange-700 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Enterprise
              </h3>
              <div className="text-3xl font-bold text-gray-900 mb-6">
                Custom<span className="text-lg text-gray-600"> pricing</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Unlimited SMS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Dedicated Short Code</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Dedicated Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Custom Integrations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">SLA Guarantees</span>
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
      <section className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start SMS Marketing?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of businesses that trust Zeta Solutions for their SMS
            communication needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
              Start Sending SMS
            </button>
            <button className="border border-white text-white px-8 py-3 rounded font-medium hover:bg-white hover:text-orange-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SMSPage;
