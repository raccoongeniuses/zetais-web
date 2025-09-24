"use client";

import React from "react";
import {
  CreditCard,
  CheckCircle,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  Globe,
  Shield,
  Zap,
  Smartphone,
  Clock,
  BarChart3,
  Users,
  DollarSign,
  Lock,
  Smartphone as Mobile,
  Wifi,
  Activity,
} from "lucide-react";

const PaymentsPage = () => {
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-purple-100 text-purple-700 text-sm px-4 py-2 rounded-full mb-6">
                <CreditCard className="w-4 h-4 mr-2" />
                Integrated Payment Solutions
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Complete Payment
                <br />
                <span className="text-purple-600">Ecosystem</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                <strong>Move In:</strong> We process all your clients payments
                in an instant with only a few steps
                <br />
                <br />
                <strong>Move Out:</strong> We help to settle all your invoices
                and payable to any form of channel or wallet required
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-purple-600 text-white px-6 py-3 rounded font-medium hover:bg-purple-700 transition-colors inline-flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight size={16} />
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded font-medium hover:bg-gray-50 transition-colors">
                  View Documentation
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      99.9%
                    </div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      &lt;3s
                    </div>
                    <div className="text-sm text-gray-600">Processing</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      200+
                    </div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                    <div className="text-2xl font-bold text-orange-600 mb-1">
                      50+
                    </div>
                    <div className="text-sm text-gray-600">Currencies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Flow Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Payment Flow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From receiving payments to settling invoices, we handle the entire
              payment lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Move In - Payment Processing */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <ArrowDown size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Move In
                  </h3>
                  <p className="text-gray-600">Payment Processing</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                We process all your clients payments in an instant with only a
                few steps
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <CreditCard size={16} className="text-green-600" />
                  </div>
                  <span className="text-gray-700">
                    Multiple payment methods
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Zap size={16} className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Instant processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Shield size={16} className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Secure transactions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Globe size={16} className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Global reach</span>
                </div>
              </div>
            </div>

            {/* Move Out - Invoice Settlement */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <ArrowUp size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Move Out
                  </h3>
                  <p className="text-gray-600">Invoice Settlement</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                We help to settle all your invoices and payable to any form of
                channel or wallet required
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <DollarSign size={16} className="text-blue-600" />
                  </div>
                  <span className="text-gray-700">Automated settlements</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Mobile size={16} className="text-blue-600" />
                  </div>
                  <span className="text-gray-700">Digital wallets</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <BarChart3 size={16} className="text-blue-600" />
                  </div>
                  <span className="text-gray-700">Real-time reporting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Clock size={16} className="text-blue-600" />
                  </div>
                  <span className="text-gray-700">Scheduled payments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Payment Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive payment solutions designed for modern businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <CreditCard size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Multiple Payment Methods
              </h3>
              <p className="text-gray-600 mb-4">
                Accept payments via credit cards, debit cards, bank transfers,
                digital wallets, and more.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Credit/Debit Cards</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Bank Transfers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Digital Wallets</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Instant Processing
              </h3>
              <p className="text-gray-600 mb-4">
                Lightning-fast payment processing with real-time confirmation
                and immediate fund availability.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Real-time Processing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Instant Confirmation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Immediate Settlement</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Enterprise Security
              </h3>
              <p className="text-gray-600 mb-4">
                Bank-level security with PCI DSS compliance, encryption, and
                fraud detection systems.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>PCI DSS Compliant</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>End-to-End Encryption</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Fraud Detection</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Globe size={24} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Global Reach
              </h3>
              <p className="text-gray-600 mb-4">
                Accept payments from customers worldwide with support for
                multiple currencies and local payment methods.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>50+ Currencies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>200+ Countries</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Local Payment Methods</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Advanced Analytics
              </h3>
              <p className="text-gray-600 mb-4">
                Comprehensive reporting and analytics to help you understand
                your payment patterns and optimize revenue.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Real-time Reports</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Transaction Analytics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Revenue Insights</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Activity size={24} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                API Integration
              </h3>
              <p className="text-gray-600 mb-4">
                Easy integration with your existing systems through our
                comprehensive API and developer tools.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>RESTful API</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>SDKs & Libraries</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Webhook Support</span>
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
              Enterprise-grade payment infrastructure with industry-leading
              performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Performance Metrics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Processing Speed</span>
                  <span className="font-medium text-gray-900">
                    &lt; 3 seconds
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-gray-600">Success Rate</span>
                  <span className="font-medium text-green-600">99.9%</span>
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
                  <span className="text-gray-600">Transaction Volume</span>
                  <span className="font-medium text-gray-900">Unlimited</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Security & Compliance
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Lock size={20} className="text-blue-600" />
                  <span className="text-gray-700">
                    PCI DSS Level 1 Compliant
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield size={20} className="text-green-600" />
                  <span className="text-gray-700">256-bit SSL Encryption</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Activity size={20} className="text-purple-600" />
                  <span className="text-gray-700">
                    Real-time Fraud Detection
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wifi size={20} className="text-orange-600" />
                  <span className="text-gray-700">
                    Secure Network Protocols
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 size={20} className="text-indigo-600" />
                  <span className="text-gray-700">Audit Trail & Logging</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users size={20} className="text-teal-600" />
                  <span className="text-gray-700">
                    Multi-factor Authentication
                  </span>
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
              Payment Processing Plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. Choose the plan that fits
              your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Starter
              </h3>
              <div className="text-3xl font-bold text-gray-900 mb-6">
                2.9%<span className="text-lg text-gray-600"> + $0.30</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Up to $10K/month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Basic Payment Methods</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Standard Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Basic Reporting</span>
                </li>
              </ul>
              <button className="w-full bg-gray-100 text-gray-700 py-3 rounded font-medium hover:bg-gray-200 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-purple-50 rounded-lg border border-purple-200 p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Business
              </h3>
              <div className="text-3xl font-bold text-gray-900 mb-6">
                2.5%<span className="text-lg text-gray-600"> + $0.30</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Up to $100K/month</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">All Payment Methods</span>
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
                  <span className="text-gray-600">Fraud Protection</span>
                </li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded font-medium hover:bg-purple-700 transition-colors">
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
                  <span className="text-gray-600">Unlimited Volume</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Custom Integrations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">Dedicated Support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={16} className="text-green-600" />
                  <span className="text-gray-600">White-label Solutions</span>
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
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Accept Payments?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of businesses that trust Zeta Solutions for their
            payment processing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
              Start Processing Payments
            </button>
            <button className="border border-white text-white px-8 py-3 rounded font-medium hover:bg-white hover:text-purple-600 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentsPage;
