"use client";

import React from "react";
import Link from "next/link";
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
    <div className="min-h-screen bg-[var(--color-primary-bg)] text-[var(--color-text-secondary)]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-sm bg-[var(--color-nav-bg)] border-b border-[var(--color-border-primary)] z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[var(--color-green-primary)] rounded flex items-center justify-center">
                <span className="text-[var(--color-text-primary)] text-sm font-bold">
                  Z
                </span>
              </div>
              <span className="text-[var(--color-text-primary)] text-lg font-medium">
                Zeta Solutions
              </span>
            </div>
            <Link
              href="/"
              className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] font-medium transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-[var(--color-overlay-green)] text-[var(--color-green-secondary)] text-sm px-4 py-2 rounded-full mb-6">
                <Settings className="w-4 h-4 mr-2" />
                Third Party Integrations
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6 leading-tight">
                Third Party
                <br />
                <span className="text-[var(--color-green-secondary)]">
                  Product Integrations
                </span>
              </h1>

              <p className="text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                We have various 3rd parties products that will help assist your
                business. From marketing automation to analytics tools, we
                integrate with the best solutions to enhance your digital
                presence.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[var(--color-green-primary)] text-[var(--color-text-primary)] px-6 py-3 rounded font-medium hover:bg-[var(--color-green-hover)] transition-colors inline-flex items-center justify-center space-x-2">
                  <span className="text-[var(--color-text-tertiary)]">
                    Explore Integrations
                  </span>
                  <ArrowRight size={16} />
                </button>
                <button className="border border-[var(--color-border-primary)] text-[var(--color-text-tertiary)] px-6 py-3 rounded font-medium hover:bg-[var(--color-border-primary)] transition-colors">
                  Request Integration
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[var(--color-border-primary)] rounded-2xl p-8 border border-[var(--color-border-primary)]">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[var(--color-overlay-green)] rounded-lg p-4 border border-[var(--color-border-accent)]">
                    <div className="text-2xl font-bold text-[var(--color-green-secondary)] mb-1">
                      100+
                    </div>
                    <div className="text-sm text-[var(--color-text-quaternary)]">
                      Integrations
                    </div>
                  </div>
                  <div className="bg-[var(--color-overlay-green)] rounded-lg p-4 border border-[var(--color-border-accent)]">
                    <div className="text-2xl font-bold text-[var(--color-green-secondary)] mb-1">
                      24/7
                    </div>
                    <div className="text-sm text-[var(--color-text-quaternary)]">
                      Support
                    </div>
                  </div>
                  <div className="bg-[var(--color-overlay-green)] rounded-lg p-4 border border-[var(--color-border-accent)]">
                    <div className="text-2xl font-bold text-[var(--color-green-secondary)] mb-1">
                      API
                    </div>
                    <div className="text-sm text-[var(--color-text-quaternary)]">
                      First
                    </div>
                  </div>
                  <div className="bg-[var(--color-overlay-green)] rounded-lg p-4 border border-[var(--color-border-accent)]">
                    <div className="text-2xl font-bold text-[var(--color-green-secondary)] mb-1">
                      Custom
                    </div>
                    <div className="text-sm text-[var(--color-text-quaternary)]">
                      Solutions
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Integration Categories
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Connect with the tools and services that power your business
              success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-6 hover:bg-[var(--color-border-primary)]/50 transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                Analytics & Reporting
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Track performance and gain insights with powerful analytics
                tools and reporting platforms.
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Google Analytics
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Mixpanel
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Tableau
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Power BI
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-6 hover:bg-[var(--color-border-primary)]/50 transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Mail size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                Marketing Automation
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Automate your marketing campaigns and nurture leads with
                industry-leading marketing platforms.
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    HubSpot
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Mailchimp
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Pardot
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    ActiveCampaign
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-6 hover:bg-[var(--color-border-primary)]/50 transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                CRM & Sales
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Manage customer relationships and streamline sales processes
                with powerful CRM solutions.
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Salesforce
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Pipedrive
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Zoho CRM
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Monday.com
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-6 hover:bg-[var(--color-border-primary)]/50 transition-all">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <CreditCard size={24} className="text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                Payment & Finance
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Integrate with payment processors and financial tools for
                seamless transaction management.
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Stripe
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    PayPal
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    QuickBooks
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Xero
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-6 hover:bg-[var(--color-border-primary)]/50 transition-all">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                Communication
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Enhance customer communication with messaging platforms and
                collaboration tools.
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Slack
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    WhatsApp Business
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Intercom
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Zendesk
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-6 hover:bg-[var(--color-border-primary)]/50 transition-all">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Server size={24} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                Cloud & Infrastructure
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Leverage cloud platforms and infrastructure services for
                scalable and reliable operations.
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">AWS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Google Cloud
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Azure
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    DigitalOcean
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Integrations */}
      <section className="py-20 bg-[var(--color-border-primary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Popular Integrations
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Discover the most requested integrations that help businesses
              streamline their operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[var(--color-primary-bg)] rounded-lg border border-[var(--color-border-primary)] p-6 text-center hover:bg-[var(--color-border-primary)] transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                Google Analytics
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                Track website performance and user behavior with detailed
                analytics.
              </p>
              <div className="text-xs text-[var(--color-text-quaternary)]">
                Most Popular
              </div>
            </div>

            <div className="bg-[var(--color-primary-bg)] rounded-lg border border-[var(--color-border-primary)] p-6 text-center hover:bg-[var(--color-border-primary)] transition-all">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={24} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                HubSpot
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                All-in-one marketing, sales, and service platform integration.
              </p>
              <div className="text-xs text-[var(--color-text-quaternary)]">
                Marketing
              </div>
            </div>

            <div className="bg-[var(--color-primary-bg)] rounded-lg border border-[var(--color-border-primary)] p-6 text-center hover:bg-[var(--color-border-primary)] transition-all">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={24} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                Salesforce
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                Customer relationship management and sales automation.
              </p>
              <div className="text-xs text-[var(--color-text-quaternary)]">
                CRM
              </div>
            </div>

            <div className="bg-[var(--color-primary-bg)] rounded-lg border border-[var(--color-border-primary)] p-6 text-center hover:bg-[var(--color-border-primary)] transition-all">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard size={24} className="text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                Stripe
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                Online payment processing and subscription management.
              </p>
              <div className="text-xs text-[var(--color-text-quaternary)]">
                Payments
              </div>
            </div>

            <div className="bg-[var(--color-primary-bg)] rounded-lg border border-[var(--color-border-primary)] p-6 text-center hover:bg-[var(--color-border-primary)] transition-all">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                Slack
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                Team communication and collaboration platform.
              </p>
              <div className="text-xs text-[var(--color-text-quaternary)]">
                Communication
              </div>
            </div>

            <div className="bg-[var(--color-primary-bg)] rounded-lg border border-[var(--color-border-primary)] p-6 text-center hover:bg-[var(--color-border-primary)] transition-all">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server size={24} className="text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                AWS
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                Cloud computing services and infrastructure.
              </p>
              <div className="text-xs text-[var(--color-text-quaternary)]">
                Cloud
              </div>
            </div>

            <div className="bg-[var(--color-primary-bg)] rounded-lg border border-[var(--color-border-primary)] p-6 text-center hover:bg-[var(--color-border-primary)] transition-all">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone size={24} className="text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                WhatsApp Business
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                Business messaging and customer communication.
              </p>
              <div className="text-xs text-[var(--color-text-quaternary)]">
                Messaging
              </div>
            </div>

            <div className="bg-[var(--color-primary-bg)] rounded-lg border border-[var(--color-border-primary)] p-6 text-center hover:bg-[var(--color-border-primary)] transition-all">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database size={24} className="text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                QuickBooks
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm mb-4">
                Accounting and financial management software.
              </p>
              <div className="text-xs text-[var(--color-text-quaternary)]">
                Finance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Integration Process
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Our streamlined process ensures smooth integration with minimal
              disruption to your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                1. Assessment
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm">
                We analyze your current systems and identify the best
                integration approach.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers size={24} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                2. Planning
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm">
                Detailed integration roadmap with timelines and resource
                requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench size={24} className="text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                3. Implementation
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm">
                Expert developers implement the integration with thorough
                testing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield size={24} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                4. Support
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm">
                Ongoing monitoring, maintenance, and support for optimal
                performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Integration */}
      <section className="py-20 bg-[var(--color-border-primary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6">
                Need a Custom Integration?
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] mb-6">
                Don&apos;t see the integration you need? Our team can build
                custom integrations for any third-party service or API. We
                specialize in creating seamless connections between your
                existing systems and new tools.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle
                    size={20}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    Custom API Development
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle
                    size={20}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    Data Synchronization
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle
                    size={20}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    Workflow Automation
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle
                    size={20}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    Legacy System Integration
                  </span>
                </li>
              </ul>
              <button className="bg-[var(--color-green-primary)] text-[var(--color-text-primary)] px-6 py-3 rounded font-medium hover:bg-[var(--color-green-hover)] transition-colors">
                Request Custom Integration
              </button>
            </div>

            <div className="bg-[var(--color-primary-bg)] rounded-lg border border-[var(--color-border-primary)] p-8">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-6">
                Integration Benefits
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Zap size={20} className="text-[var(--color-blue-primary)]" />
                  <span className="text-[var(--color-text-secondary)]">
                    Increased Efficiency
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3
                    size={20}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    Better Data Insights
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users
                    size={20}
                    className="text-[var(--color-gradient-start-purple)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    Improved Collaboration
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock
                    size={20}
                    className="text-[var(--color-gradient-end-teal)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    Time Savings
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield
                    size={20}
                    className="text-[var(--color-blue-secondary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    Enhanced Security
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe
                    size={20}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    Scalable Solutions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-green-primary)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6">
            Ready to Integrate?
          </h2>
          <p className="text-xl text-[var(--color-text-accent)] mb-8">
            Connect your business tools and streamline your operations with our
            integration services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[var(--color-text-primary)] text-[var(--color-green-primary)] px-8 py-3 rounded font-medium hover:bg-[var(--color-text-secondary)] transition-colors">
              Browse Integrations
            </button>
            <button className="border border-[var(--color-text-primary)] text-[var(--color-text-primary)] px-8 py-3 rounded font-medium hover:bg-[var(--color-text-primary)] hover:text-[var(--color-green-primary)] transition-colors">
              Contact Integration Team
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-primary-bg)] border-t border-[var(--color-border-primary)] mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-xl font-bold text-[var(--color-text-primary)]">
                Zeta Solutions
              </p>
              <p className="text-[var(--color-text-quaternary)]">
                © 2024 Zeta Solutions. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-[var(--color-text-quaternary)] hover:text-[var(--color-text-primary)]"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[var(--color-text-quaternary)] hover:text-[var(--color-text-primary)]"
              >
                Terms of Service
              </a>
              <a
                href="/contact"
                className="text-[var(--color-text-quaternary)] hover:text-[var(--color-text-primary)]"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IntegrationsPage;
