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
              <div
                className="inline-flex items-center text-sm px-4 py-2 rounded-full mb-6"
                style={{
                  backgroundColor: "var(--color-overlay-green)",
                  color: "var(--color-green-secondary)",
                }}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                SMS Services
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Reliable SMS
                <br />
                <span style={{ color: "var(--color-green-secondary)" }}>
                  Communication
                </span>
              </h1>

              <p
                className="text-xl mb-8 leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Engage clients with reliable messages. Everything you need to
                accelerate your go-to-market strategy—while ensuring exceptional
                message deliverability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="text-white px-6 py-3 rounded font-medium transition-colors inline-flex items-center justify-center space-x-2"
                  style={{ backgroundColor: "var(--color-green-primary)" }}
                  onMouseEnter={(e) =>
                    (e.target.style.backgroundColor =
                      "var(--color-green-hover)")
                  }
                  onMouseLeave={(e) =>
                    (e.target.style.backgroundColor =
                      "var(--color-green-primary)")
                  }
                >
                  <span>Get Started</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  className="border border-white/20 px-6 py-3 rounded font-medium hover:bg-white/5 transition-colors"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  View Pricing
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div
                    className="rounded-lg p-4 border"
                    style={{
                      backgroundColor: "var(--color-overlay-green)",
                      borderColor: "var(--color-border-accent)",
                    }}
                  >
                    <div
                      className="text-2xl font-bold mb-1"
                      style={{ color: "var(--color-green-secondary)" }}
                    >
                      99.9%
                    </div>
                    <div className="text-sm text-gray-400">Deliverability</div>
                  </div>
                  <div
                    className="rounded-lg p-4 border"
                    style={{
                      backgroundColor: "var(--color-overlay-green)",
                      borderColor: "var(--color-border-accent)",
                    }}
                  >
                    <div
                      className="text-2xl font-bold mb-1"
                      style={{ color: "var(--color-green-secondary)" }}
                    >
                      &lt;1s
                    </div>
                    <div className="text-sm text-gray-400">Delivery Time</div>
                  </div>
                  <div
                    className="rounded-lg p-4 border"
                    style={{
                      backgroundColor: "var(--color-overlay-green)",
                      borderColor: "var(--color-border-accent)",
                    }}
                  >
                    <div
                      className="text-2xl font-bold mb-1"
                      style={{ color: "var(--color-green-secondary)" }}
                    >
                      200+
                    </div>
                    <div className="text-sm text-gray-400">Countries</div>
                  </div>
                  <div
                    className="rounded-lg p-4 border"
                    style={{
                      backgroundColor: "var(--color-overlay-green)",
                      borderColor: "var(--color-border-accent)",
                    }}
                  >
                    <div
                      className="text-2xl font-bold mb-1"
                      style={{ color: "var(--color-green-secondary)" }}
                    >
                      24/7
                    </div>
                    <div className="text-sm text-gray-400">Support</div>
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
              SMS Communication Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful SMS tools designed to help you reach your customers
              effectively and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Send size={24} className="text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Bulk Messaging
              </h3>
              <p className="text-gray-300 mb-4">
                Send messages to thousands of recipients simultaneously with our
                high-volume SMS platform.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Mass SMS Campaigns</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Contact List Management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Message Templates</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Zap size={24} className="text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Automated Workflows
              </h3>
              <p className="text-gray-300 mb-4">
                Set up automated SMS sequences for customer onboarding,
                reminders, and follow-ups.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Trigger-based Messages</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Drip Campaigns</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Event-driven SMS</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Shield size={24} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                High Deliverability
              </h3>
              <p className="text-gray-300 mb-4">
                Industry-leading deliverability rates with advanced routing and
                quality monitoring.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>99.9% Delivery Rate</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Quality Monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Carrier Relationships</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Globe size={24} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Global Reach
              </h3>
              <p className="text-gray-300 mb-4">
                Send SMS messages to customers worldwide with support for
                international numbers and local carriers.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>200+ Countries</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>International Numbers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Local Carrier Support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 size={24} className="text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Analytics & Reporting
              </h3>
              <p className="text-gray-300 mb-4">
                Track message performance with detailed analytics, delivery
                reports, and engagement metrics.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Delivery Reports</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Engagement Metrics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Performance Analytics</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Smartphone size={24} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Two-Way Messaging
              </h3>
              <p className="text-gray-300 mb-4">
                Enable two-way conversations with your customers through SMS for
                support and engagement.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Inbound SMS Handling</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Auto-responses</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Customer Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              SMS Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how businesses use SMS to improve customer engagement and
              drive results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Bell size={24} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Notifications & Alerts
              </h3>
              <p className="text-gray-300 mb-4">
                Send important notifications, alerts, and updates to keep
                customers informed in real-time.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Order Confirmations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Appointment Reminders</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Security Alerts</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Target size={24} className="text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Marketing Campaigns
              </h3>
              <p className="text-gray-300 mb-4">
                Launch targeted SMS marketing campaigns to promote products,
                services, and special offers.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Promotional Messages</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Event Invitations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Flash Sales</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Customer Support
              </h3>
              <p className="text-gray-300 mb-4">
                Provide instant customer support through SMS for quick issue
                resolution and better service.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Help Desk Integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>FAQ Responses</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Status Updates</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Phone size={24} className="text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Authentication
              </h3>
              <p className="text-gray-300 mb-4">
                Secure two-factor authentication and verification codes for
                enhanced account security.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>2FA Codes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Login Verification</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Password Reset</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp size={24} className="text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Lead Nurturing
              </h3>
              <p className="text-gray-300 mb-4">
                Nurture leads through automated SMS sequences to convert
                prospects into customers.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Follow-up Sequences</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Lead Scoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Conversion Tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <Mail size={24} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Transactional SMS
              </h3>
              <p className="text-gray-300 mb-4">
                Send transactional messages for payments, bookings, and other
                business-critical communications.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Payment Confirmations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Booking Confirmations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-400" />
                  <span>Delivery Updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enterprise-grade SMS infrastructure with industry-leading
              performance and reliability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 rounded-lg border border-white/10 p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Performance Metrics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-300">Delivery Rate</span>
                  <span className="font-medium text-green-400">99.9%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-300">Delivery Speed</span>
                  <span className="font-medium text-white">&lt; 1 second</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-300">Uptime SLA</span>
                  <span className="font-medium text-blue-400">99.99%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span className="text-gray-300">API Response Time</span>
                  <span className="font-medium text-white">&lt; 200ms</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300">Message Volume</span>
                  <span className="font-medium text-white">Unlimited</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Features & Capabilities
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Globe size={20} className="text-blue-400" />
                  <span className="text-gray-300">
                    Global Coverage (200+ Countries)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield size={20} className="text-green-400" />
                  <span className="text-gray-300">Dedicated Short Codes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap size={20} className="text-blue-400" />
                  <span className="text-gray-300">
                    Real-time Delivery Reports
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 size={20} className="text-green-400" />
                  <span className="text-gray-300">Advanced Analytics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={20} className="text-blue-400" />
                  <span className="text-gray-300">Scheduled Messaging</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users size={20} className="text-green-400" />
                  <span className="text-gray-300">Contact Management</span>
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
              SMS Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparent pricing with volume discounts. Pay only for what you
              use.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 rounded-lg border border-white/10 p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Starter</h3>
              <div className="text-3xl font-bold text-white mb-6">
                $0.05<span className="text-lg text-gray-300">/SMS</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">Up to 1,000 SMS/month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">Basic Templates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">Standard Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">Basic Analytics</span>
                </li>
              </ul>
              <button className="w-full bg-white/10 text-white py-3 rounded font-medium hover:bg-white/20 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-green-500/10 rounded-lg border border-green-500/30 p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Business
              </h3>
              <div className="text-3xl font-bold text-white mb-6">
                $0.03<span className="text-lg text-gray-300">/SMS</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">Up to 10,000 SMS/month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">Custom Templates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">Priority Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">Advanced Analytics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">API Access</span>
                </li>
              </ul>
              <button className="w-full bg-green-600 text-white py-3 rounded font-medium hover:bg-green-700 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Enterprise
              </h3>
              <div className="text-3xl font-bold text-white mb-6">
                Custom<span className="text-lg text-gray-300"> pricing</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">Unlimited SMS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">Dedicated Short Code</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">Dedicated Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">Custom Integrations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-gray-300">SLA Guarantees</span>
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
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start SMS Marketing?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of businesses that trust Zeta Solutions for their SMS
            communication needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
              Start Sending SMS
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

export default SMSPage;
