"use client";

import React from "react";
import Link from "next/link";
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
    <div className="min-h-screen bg-[var(--color-primary-bg)] text-[var(--color-text-secondary)]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-sm bg-[var(--color-primary-bg)]/80 border-b border-[var(--color-border-primary)] z-50">
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
              <div
                className="inline-flex items-center text-sm px-4 py-2 rounded-full mb-6"
                style={{
                  backgroundColor: "var(--color-overlay-green)",
                  color: "var(--color-green-secondary)",
                }}
              >
                <Zap className="w-4 h-4 mr-2" />
                Turnkey Solutions
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Complete Digital
                <br />
                <span style={{ color: "var(--color-green-secondary)" }}>
                  Business Setup
                </span>
              </h1>

              <p
                className="text-xl mb-8 leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Start doing business right away, we help you to set up and
                manage your online requirements, you just need to focus on your
                operations. From concept to launch, we handle everything.
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
                  View Portfolio
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-2xl font-bold text-[var(--color-green-secondary)] mb-1">
                      30
                    </div>
                    <div className="text-sm text-gray-400">Days Setup</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-2xl font-bold text-[var(--color-green-secondary)] mb-1">
                      100%
                    </div>
                    <div className="text-sm text-gray-400">Managed</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-2xl font-bold text-[var(--color-green-secondary)] mb-1">
                      24/7
                    </div>
                    <div className="text-sm text-gray-400">Support</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-2xl font-bold text-[var(--color-green-secondary)] mb-1">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Complete Business Solutions
            </h2>
            <p className="text-xl text-[var(--color-text-tertiary)] max-w-3xl mx-auto">
              We handle every aspect of your digital presence so you can focus
              on what matters most - your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-6 hover:bg-[var(--color-border-primary)] transition-all">
              <div className="w-12 h-12 bg-[var(--color-overlay-blue)] rounded-lg flex items-center justify-center mb-4">
                <Code size={24} className="text-[var(--color-blue-primary)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                Custom Development
              </h3>
              <p className="text-[var(--color-text-tertiary)] mb-4">
                Tailored web applications and systems built specifically for
                your business needs and requirements.
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span>Custom Web Apps</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span>API Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span>Database Design</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-6 hover:bg-[var(--color-border-primary)] transition-all">
              <div className="w-12 h-12 bg-[var(--color-overlay-green)] rounded-lg flex items-center justify-center mb-4">
                <Palette
                  size={24}
                  className="text-[var(--color-green-primary)]"
                />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                Design & Branding
              </h3>
              <p className="text-[var(--color-text-tertiary)] mb-4">
                Professional design services including logo creation, brand
                identity, and user experience design.
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span>Logo & Branding</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span>UI/UX Design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span>Responsive Design</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-6 hover:bg-[var(--color-border-primary)] transition-all">
              <div className="w-12 h-12 bg-[var(--color-overlay-blue)] rounded-lg flex items-center justify-center mb-4">
                <Database
                  size={24}
                  className="text-[var(--color-blue-primary)]"
                />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                System Integration
              </h3>
              <p className="text-[var(--color-text-tertiary)] mb-4">
                Seamless integration of all your business systems and
                third-party services for optimal workflow.
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span>Payment Gateways</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span>CRM Integration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span>API Connections</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-6 hover:bg-[var(--color-border-primary)] transition-all">
              <div className="w-12 h-12 bg-[var(--color-overlay-green)] rounded-lg flex items-center justify-center mb-4">
                <Smartphone
                  size={24}
                  className="text-[var(--color-green-secondary)]"
                />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                Mobile Solutions
              </h3>
              <p className="text-[var(--color-text-tertiary)] mb-4">
                Mobile-first applications and responsive designs that work
                perfectly across all devices.
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span>Mobile Apps</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span>Progressive Web Apps</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span>Cross-Platform</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-6 hover:bg-[var(--color-border-primary)] transition-all">
              <div className="w-12 h-12 bg-[var(--color-overlay-blue)] rounded-lg flex items-center justify-center mb-4">
                <Globe size={24} className="text-[var(--color-blue-primary)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                E-commerce Setup
              </h3>
              <p className="text-[var(--color-text-tertiary)] mb-4">
                Complete online store setup with payment processing, inventory
                management, and order fulfillment.
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span>Online Store</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span>Payment Processing</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span>Inventory Management</span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-6 hover:bg-[var(--color-border-primary)] transition-all">
              <div className="w-12 h-12 bg-[var(--color-overlay-green)] rounded-lg flex items-center justify-center mb-4">
                <Settings
                  size={24}
                  className="text-[var(--color-green-primary)]"
                />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                Ongoing Management
              </h3>
              <p className="text-[var(--color-text-tertiary)] mb-4">
                Continuous maintenance, updates, and optimization to keep your
                systems running smoothly.
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span>Regular Updates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span>Performance Monitoring</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span>Security Patches</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[var(--color-border-primary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Our Turnkey Process
            </h2>
            <p className="text-xl text-[var(--color-text-tertiary)] max-w-3xl mx-auto">
              A proven methodology that ensures your project is delivered on
              time and exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-overlay-green)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users
                  size={24}
                  className="text-[var(--color-green-primary)]"
                />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                1. Discovery
              </h3>
              <p className="text-[var(--color-text-tertiary)] text-sm">
                We understand your business goals, target audience, and specific
                requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-overlay-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers
                  size={24}
                  className="text-[var(--color-blue-primary)]"
                />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                2. Planning
              </h3>
              <p className="text-[var(--color-text-tertiary)] text-sm">
                Detailed project roadmap, timeline, and resource allocation for
                optimal results.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-overlay-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench
                  size={24}
                  className="text-[var(--color-blue-primary)]"
                />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                3. Development
              </h3>
              <p className="text-[var(--color-text-tertiary)] text-sm">
                Agile development process with regular updates and quality
                assurance testing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--color-overlay-green)] rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3
                  size={24}
                  className="text-[var(--color-green-secondary)]"
                />
              </div>
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                4. Launch
              </h3>
              <p className="text-[var(--color-text-tertiary)] text-sm">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-[var(--color-text-tertiary)] max-w-3xl mx-auto">
              See how we&apos;ve helped businesses transform their digital
              presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-6 hover:bg-[var(--color-border-primary)] transition-all">
              <div className="w-12 h-12 bg-[var(--color-overlay-blue)] rounded-lg flex items-center justify-center mb-4">
                <Globe size={24} className="text-[var(--color-blue-primary)]" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                E-commerce Platform
              </h3>
              <p className="text-[var(--color-text-tertiary)] mb-4">
                Complete online store setup for a retail business, including
                payment integration, inventory management, and customer portal.
              </p>
              <div className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
                <div className="flex justify-between">
                  <span>Timeline:</span>
                  <span className="font-medium">4 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Result:</span>
                  <span className="font-medium text-[var(--color-green-primary)]">
                    300% increase in sales
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-6 hover:bg-[var(--color-border-primary)] transition-all">
              <div className="w-12 h-12 bg-[var(--color-overlay-green)] rounded-lg flex items-center justify-center mb-4">
                <Database
                  size={24}
                  className="text-[var(--color-green-primary)]"
                />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                Business Management System
              </h3>
              <p className="text-[var(--color-text-tertiary)] mb-6">
                Custom CRM and project management system for a consulting firm,
                streamlining operations and improving client relationships.
              </p>
              <div className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
                <div className="flex justify-between">
                  <span>Timeline:</span>
                  <span className="font-medium">6 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Result:</span>
                  <span className="font-medium text-[var(--color-green-primary)]">
                    50% efficiency gain
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-6 hover:bg-[var(--color-border-primary)] transition-all">
              <div className="w-12 h-12 bg-[var(--color-overlay-blue)] rounded-lg flex items-center justify-center mb-4">
                <Smartphone
                  size={24}
                  className="text-[var(--color-blue-primary)]"
                />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                Mobile Application
              </h3>
              <p className="text-[var(--color-text-tertiary)] mb-6">
                Cross-platform mobile app for a service business, enabling
                customers to book appointments and make payments on the go.
              </p>
              <div className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
                <div className="flex justify-between">
                  <span>Timeline:</span>
                  <span className="font-medium">8 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span>Result:</span>
                  <span className="font-medium text-[var(--color-green-primary)]">
                    200% more bookings
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-[var(--color-border-primary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Turnkey Packages
            </h2>
            <p className="text-xl text-[var(--color-text-tertiary)] max-w-3xl mx-auto">
              Choose the package that best fits your business needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-8">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                Starter
              </h3>
              <div className="text-3xl font-bold text-[var(--color-text-primary)] mb-6">
                $2,999
                <span className="text-lg text-[var(--color-text-quaternary)]">
                  /project
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Basic Website (5 pages)
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Responsive Design
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Contact Form
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Basic SEO
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    3 months support
                  </span>
                </li>
              </ul>
              <button className="w-full bg-[var(--color-border-primary)] text-[var(--color-text-primary)] py-3 rounded font-medium hover:bg-[var(--color-border-primary)] transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-[var(--color-overlay-green)] rounded-lg border border-[var(--color-border-accent)] p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[var(--color-green-primary)] text-[var(--color-text-primary)] px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                Business
              </h3>
              <div className="text-3xl font-bold text-[var(--color-text-primary)] mb-6">
                $7,999
                <span className="text-lg text-[var(--color-text-quaternary)]">
                  /project
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Custom Website (15 pages)
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    E-commerce Integration
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Payment Processing
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Advanced SEO
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    6 months support
                  </span>
                </li>
              </ul>
              <button className="w-full bg-[var(--color-green-primary)] text-[var(--color-text-primary)] py-3 rounded font-medium hover:bg-[var(--color-green-hover)] transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-8">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                Enterprise
              </h3>
              <div className="text-3xl font-bold text-[var(--color-text-primary)] mb-6">
                Custom
                <span className="text-lg text-[var(--color-text-quaternary)]">
                  {" "}
                  pricing
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Unlimited Pages
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Custom Applications
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    API Development
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Mobile App
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    12 months support
                  </span>
                </li>
              </ul>
              <button className="w-full bg-[var(--color-border-primary)] text-[var(--color-text-primary)] py-3 rounded font-medium hover:bg-[var(--color-border-primary)] transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--color-green-primary)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-[var(--color-text-accent)] mb-8">
            Let us handle the technical complexity while you focus on growing
            your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[var(--color-text-primary)] text-[var(--color-green-primary)] px-8 py-3 rounded font-medium hover:bg-[var(--color-text-secondary)] transition-colors">
              Start Your Project
            </button>
            <button className="border border-[var(--color-text-primary)] text-[var(--color-text-primary)] px-8 py-3 rounded font-medium hover:bg-[var(--color-text-primary)] hover:text-[var(--color-green-primary)] transition-colors">
              Schedule Consultation
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
                © 2025 Zeta Solutions. All rights reserved.
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

export default TurnkeyPage;
