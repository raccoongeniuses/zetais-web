"use client";

import React from "react";
import Link from "next/link";
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
                <Server className="w-4 h-4 mr-2" />
                Server & Webhosting Services
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-6 leading-tight">
                Secure, Reliable
                <br />
                <span className="text-[var(--color-green-secondary)]">
                  Web Hosting
                </span>
              </h1>

              <p className="text-xl text-[var(--color-text-secondary)] mb-8 leading-relaxed">
                We house and secure all your online domain and its data with it.
                Our enterprise-grade hosting infrastructure ensures your
                business stays online with 99.9% uptime guarantee and 24/7
                monitoring.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[var(--color-green-primary)] text-[var(--color-text-primary)] px-6 py-3 rounded font-medium hover:bg-[var(--color-green-hover)] transition-colors inline-flex items-center justify-center space-x-2">
                  <span className="text-[var(--color-text-tertiary)]">
                    Get Started
                  </span>
                  <ArrowRight size={16} />
                </button>
                <button className="border border-[var(--color-border-primary)] text-[var(--color-text-tertiary)] px-6 py-3 rounded font-medium hover:bg-[var(--color-border-primary)] transition-colors">
                  View Pricing
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[var(--color-border-primary)] rounded-2xl p-8 border border-[var(--color-border-primary)]">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-[var(--color-overlay-green)] rounded-lg p-4 border border-[var(--color-border-accent)]">
                    <div className="text-2xl font-bold text-[var(--color-green-secondary)] mb-1">
                      99.9%
                    </div>
                    <div className="text-sm text-[var(--color-text-quaternary)]">
                      Uptime SLA
                    </div>
                  </div>
                  <div className="bg-[var(--color-overlay-green)] rounded-lg p-4 border border-[var(--color-border-accent)]">
                    <div className="text-2xl font-bold text-[var(--color-green-secondary)] mb-1">
                      24/7
                    </div>
                    <div className="text-sm text-[var(--color-text-quaternary)]">
                      Monitoring
                    </div>
                  </div>
                  <div className="bg-[var(--color-overlay-green)] rounded-lg p-4 border border-[var(--color-border-accent)]">
                    <div className="text-2xl font-bold text-[var(--color-green-secondary)] mb-1">
                      SSL
                    </div>
                    <div className="text-sm text-[var(--color-text-quaternary)]">
                      Included
                    </div>
                  </div>
                  <div className="bg-[var(--color-overlay-green)] rounded-lg p-4 border border-[var(--color-border-accent)]">
                    <div className="text-2xl font-bold text-[var(--color-green-secondary)] mb-1">
                      CDN
                    </div>
                    <div className="text-sm text-[var(--color-text-quaternary)]">
                      Global
                    </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Enterprise-Grade Hosting Features
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Everything you need to keep your website fast, secure, and always
              available.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-6 hover:bg-[var(--color-border-primary)]/50 transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                Enterprise Security
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Advanced security protocols including DDoS protection, SSL
                certificates, and regular security updates.
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    DDoS Protection
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    SSL Certificates
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Firewall Protection
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-6 hover:bg-[var(--color-border-primary)]/50 transition-all">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap size={24} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                High Performance
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Lightning-fast loading times with SSD storage, CDN integration,
                and optimized server configurations.
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    SSD Storage
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    CDN Integration
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Optimized Servers
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-6 hover:bg-[var(--color-border-primary)]/50 transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Activity size={24} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                24/7 Monitoring
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Round-the-clock monitoring with instant alerts and proactive
                issue resolution.
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Real-time Monitoring
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Instant Alerts
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Proactive Support
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-6 hover:bg-[var(--color-border-primary)]/50 transition-all">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                <Database size={24} className="text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                Data Management
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Comprehensive data protection with automated backups, version
                control, and disaster recovery.
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Automated Backups
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Version Control
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Disaster Recovery
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-6 hover:bg-[var(--color-border-primary)]/50 transition-all">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <Globe size={24} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                Global Reach
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Worldwide content delivery with multiple data centers and edge
                locations for optimal performance.
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Multiple Data Centers
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Edge Locations
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Global CDN
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-[var(--color-border-primary)] rounded-lg border border-[var(--color-border-primary)] p-6 hover:bg-[var(--color-border-primary)]/50 transition-all">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <Headphones size={24} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                Expert Support
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-4">
                Dedicated support team with deep hosting expertise and quick
                response times.
              </p>
              <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    24/7 Support
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Expert Team
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={14}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-tertiary)]">
                    Quick Response
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-[var(--color-border-primary)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Detailed technical information about our hosting infrastructure
              and capabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[var(--color-primary-bg)] rounded-lg border border-[var(--color-border-primary)] p-8">
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
                Infrastructure Details
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-[var(--color-border-primary)]">
                  <span className="text-[var(--color-text-secondary)]">
                    Server Type
                  </span>
                  <span className="font-medium text-[var(--color-text-primary)]">
                    Enterprise SSD
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[var(--color-border-primary)]">
                  <span className="text-[var(--color-text-secondary)]">
                    CPU
                  </span>
                  <span className="font-medium text-[var(--color-text-primary)]">
                    Intel Xeon Processors
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[var(--color-border-primary)]">
                  <span className="text-[var(--color-text-secondary)]">
                    RAM
                  </span>
                  <span className="font-medium text-[var(--color-text-primary)]">
                    Up to 64GB
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[var(--color-border-primary)]">
                  <span className="text-[var(--color-text-secondary)]">
                    Storage
                  </span>
                  <span className="font-medium text-[var(--color-text-primary)]">
                    NVMe SSD
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[var(--color-border-primary)]">
                  <span className="text-[var(--color-text-secondary)]">
                    Bandwidth
                  </span>
                  <span className="font-medium text-[var(--color-text-primary)]">
                    Unlimited
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-[var(--color-text-secondary)]">
                    Uptime SLA
                  </span>
                  <span className="font-medium text-[var(--color-green-primary)]">
                    99.9%
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-primary-bg)] rounded-lg border border-[var(--color-border-primary)] p-8">
              <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
                Security Features
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Lock
                    size={20}
                    className="text-[var(--color-blue-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    SSL/TLS Encryption
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield
                    size={20}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    DDoS Protection
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Database
                    size={20}
                    className="text-[var(--color-gradient-start-purple)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    Automated Backups
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Activity
                    size={20}
                    className="text-[var(--color-gradient-end-teal)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    Intrusion Detection
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <HardDrive
                    size={20}
                    className="text-[var(--color-blue-secondary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    Data Encryption at Rest
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wifi
                    size={20}
                    className="text-[var(--color-green-secondary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-4">
              Hosting Plans
            </h2>
            <p className="text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
              Choose the perfect hosting plan for your business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-[var(--color-primary-bg)] rounded-lg border border-[var(--color-border-primary)] p-8">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                Starter
              </h3>
              <div className="text-3xl font-bold text-[var(--color-text-primary)] mb-6">
                $29
                <span className="text-lg text-[var(--color-text-secondary)]">
                  /month
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    1 Website
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    10GB SSD Storage
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    Unlimited Bandwidth
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    SSL Certificate
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    24/7 Support
                  </span>
                </li>
              </ul>
              <button className="w-full bg-[var(--color-border-primary)] text-[var(--color-text-primary)] py-3 rounded font-medium hover:bg-[var(--color-border-primary)]/50 transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-[var(--color-overlay-blue)] rounded-lg border border-[var(--color-blue-primary)] p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[var(--color-blue-primary)] text-[var(--color-text-primary)] px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                Business
              </h3>
              <div className="text-3xl font-bold text-[var(--color-text-primary)] mb-6">
                $79
                <span className="text-lg text-[var(--color-text-secondary)]">
                  /month
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    5 Websites
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    50GB SSD Storage
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    Unlimited Bandwidth
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    SSL Certificate
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    CDN Included
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    Priority Support
                  </span>
                </li>
              </ul>
              <button className="w-full bg-[var(--color-blue-primary)] text-[var(--color-text-primary)] py-3 rounded font-medium hover:bg-[var(--color-blue-hover)] transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-[var(--color-primary-bg)] rounded-lg border border-[var(--color-border-primary)] p-8">
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-4">
                Enterprise
              </h3>
              <div className="text-3xl font-bold text-[var(--color-text-primary)] mb-6">
                $199
                <span className="text-lg text-[var(--color-text-secondary)]">
                  /month
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    Unlimited Websites
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    200GB SSD Storage
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    Unlimited Bandwidth
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    Advanced SSL
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    Dedicated IP
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle
                    size={16}
                    className="text-[var(--color-green-primary)]"
                  />
                  <span className="text-[var(--color-text-secondary)]">
                    Dedicated Support
                  </span>
                </li>
              </ul>
              <button className="w-full bg-[var(--color-border-primary)] text-[var(--color-text-primary)] py-3 rounded font-medium hover:bg-[var(--color-border-primary)]/50 transition-colors">
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
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[var(--color-text-accent)] mb-8">
            Join hundreds of businesses that trust Zeta Solutions for their
            hosting needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[var(--color-text-primary)] text-[var(--color-green-primary)] px-8 py-3 rounded font-medium hover:bg-[var(--color-text-secondary)] transition-colors">
              Start Your Free Trial
            </button>
            <button className="border border-[var(--color-text-primary)] text-[var(--color-text-primary)] px-8 py-3 rounded font-medium hover:bg-[var(--color-text-primary)] hover:text-[var(--color-green-primary)] transition-colors">
              Contact Sales
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

export default HostingPage;
