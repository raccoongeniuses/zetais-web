"use client";

import React from "react";
import {
  Settings,
  CheckCircle,
  ArrowRight,
  Puzzle,
  Zap,
  Globe,
  Database,
  Shield,
  BarChart3,
  Users,
  Clock,
  Smartphone,
  Mail,
  CreditCard,
  MessageSquare,
  Server,
  Layers,
  Wrench,
  Target,
} from "lucide-react";

const IntegrationsPage = () => {
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 to-purple-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-indigo-100 text-indigo-700 text-sm px-4 py-2 rounded-full mb-6">
                <Settings className="w-4 h-4 mr-2" />
                Third Party Integrations
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Third Party
                <br />
                <span className="text-indigo-600">Product Integrations</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We have various 3rd parties products that will help assist your
                business. From marketing automation to analytics tools, we
                integrate with the best solutions to enhance your digital
                presence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-indigo-600 text-white px-6 py-3 rounded font-medium hover:bg-indigo-700 transition-colors inline-flex items-center justify-center space-x-2">
                  <span>Explore Integrations</span>
                  <ArrowRight size={16} />
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded font-medium hover:bg-gray-50 transition-colors">
                  Request Integration
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                    <div className="text-2xl font-bold text-indigo-600 mb-1">
                      100+
                    </div>
                    <div className="text-sm text-gray-600">Integrations</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      24/7
                    </div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      API
                    </div>
                    <div className="text-sm text-gray-600">First</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4 border border-orange-100">
                    <div className="text-2xl font-bold text-orange-600 mb-1">
                      Custom
                    </div>
                    <div className="text-sm text-gray-600">Solutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integration Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with the tools and services that power your business
              success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Analytics & Reporting
              </h3>
              <p className="text-gray-600 mb-4">
                Track performance and gain insights with powerful analytics
                tools and reporting platforms.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Google Analytics</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Mixpanel</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Tableau</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Power BI</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Mail size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Marketing Automation
              </h3>
              <p className="text-gray-600 mb-4">
                Automate your marketing campaigns and nurture leads with
                industry-leading marketing platforms.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>HubSpot</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Mailchimp</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Pardot</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>ActiveCampaign</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                CRM & Sales
              </h3>
              <p className="text-gray-600 mb-4">
                Manage customer relationships and streamline sales processes
                with powerful CRM solutions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Salesforce</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Pipedrive</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Zoho CRM</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Monday.com</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <CreditCard size={24} className="text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Payment & Finance
              </h3>
              <p className="text-gray-600 mb-4">
                Integrate with payment processors and financial tools for
                seamless transaction management.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Stripe</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>PayPal</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>QuickBooks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Xero</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Communication
              </h3>
              <p className="text-gray-600 mb-4">
                Enhance customer communication with messaging platforms and
                collaboration tools.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Slack</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>WhatsApp Business</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Intercom</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Zendesk</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Server size={24} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Cloud & Infrastructure
              </h3>
              <p className="text-gray-600 mb-4">
                Leverage cloud platforms and infrastructure services for
                scalable and reliable operations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>AWS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Google Cloud</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>Azure</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle size={14} className="text-green-600" />
                  <span>DigitalOcean</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the most requested integrations that help businesses
              streamline their operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Google Analytics
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Track website performance and user behavior with detailed
                analytics.
              </p>
              <div className="text-xs text-gray-500">Most Popular</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                HubSpot
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                All-in-one marketing, sales, and service platform integration.
              </p>
              <div className="text-xs text-gray-500">Marketing</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Salesforce
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Customer relationship management and sales automation.
              </p>
              <div className="text-xs text-gray-500">CRM</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard size={24} className="text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Stripe
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Online payment processing and subscription management.
              </p>
              <div className="text-xs text-gray-500">Payments</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Slack
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Team communication and collaboration platform.
              </p>
              <div className="text-xs text-gray-500">Communication</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server size={24} className="text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AWS</h3>
              <p className="text-gray-600 text-sm mb-4">
                Cloud computing services and infrastructure.
              </p>
              <div className="text-xs text-gray-500">Cloud</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone size={24} className="text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                WhatsApp Business
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Business messaging and customer communication.
              </p>
              <div className="text-xs text-gray-500">Messaging</div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database size={24} className="text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                QuickBooks
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Accounting and financial management software.
              </p>
              <div className="text-xs text-gray-500">Finance</div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Integration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures smooth integration with minimal
              disruption to your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                1. Assessment
              </h3>
              <p className="text-gray-600 text-sm">
                We analyze your current systems and identify the best
                integration approach.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                2. Planning
              </h3>
              <p className="text-gray-600 text-sm">
                Detailed integration roadmap with timelines and resource
                requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench size={24} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                3. Implementation
              </h3>
              <p className="text-gray-600 text-sm">
                Expert developers implement the integration with thorough
                testing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={24} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                4. Support
              </h3>
              <p className="text-gray-600 text-sm">
                Ongoing monitoring, maintenance, and support for optimal
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Integration */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Need a Custom Integration?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Don't see the integration you need? Our team can build custom
                integrations for any third-party service or API. We specialize
                in creating seamless connections between your existing systems
                and new tools.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-gray-700">Custom API Development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-gray-700">Data Synchronization</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-gray-700">Workflow Automation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-green-600" />
                  <span className="text-gray-700">
                    Legacy System Integration
                  </span>
                </li>
              </ul>
              <button className="bg-indigo-600 text-white px-6 py-3 rounded font-medium hover:bg-indigo-700 transition-colors">
                Request Custom Integration
              </button>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Integration Benefits
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Zap size={20} className="text-blue-600" />
                  <span className="text-gray-700">Increased Efficiency</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 size={20} className="text-green-600" />
                  <span className="text-gray-700">Better Data Insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users size={20} className="text-purple-600" />
                  <span className="text-gray-700">Improved Collaboration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={20} className="text-orange-600" />
                  <span className="text-gray-700">Time Savings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield size={20} className="text-indigo-600" />
                  <span className="text-gray-700">Enhanced Security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe size={20} className="text-teal-600" />
                  <span className="text-gray-700">Scalable Solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Integrate?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Connect your business tools and streamline your operations with our
            integration services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors">
              Browse Integrations
            </button>
            <button className="border border-white text-white px-8 py-3 rounded font-medium hover:bg-white hover:text-indigo-600 transition-colors">
              Contact Integration Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntegrationsPage;
