"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--color-primary-bg)",
        color: "var(--color-text-secondary)",
      }}
    >
      {/* Navigation */}
      <nav
        className="fixed top-0 w-full backdrop-blur-sm border-b z-50"
        style={{
          backgroundColor: "var(--color-nav-bg)",
          borderColor: "var(--color-border-primary)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div
                className="w-8 h-8 rounded flex items-center justify-center"
                style={{ backgroundColor: "var(--color-green-primary)" }}
              >
                <span
                  className="text-sm font-bold"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Z
                </span>
              </div>
              <span
                className="text-lg font-medium"
                style={{ color: "var(--color-text-primary)" }}
              >
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
                  className="text-sm font-medium transition-colors py-2"
                  style={{
                    color:
                      activeSection === item.id
                        ? "var(--color-green-secondary)"
                        : "var(--color-text-tertiary)",
                  }}
                  onMouseEnter={(e) => {
                    if (activeSection !== item.id) {
                      e.target.style.color = "var(--color-text-primary)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeSection !== item.id) {
                      e.target.style.color = "var(--color-text-tertiary)";
                    }
                  }}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-3">
                <Link
                  href="/get-started"
                  className="px-4 py-2 rounded text-sm font-medium transition-colors shadow-md"
                  style={{
                    backgroundColor: "var(--color-green-primary)",
                    color: "var(--color-text-primary)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "var(--color-green-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor =
                      "var(--color-green-primary)";
                  }}
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden focus:outline-none"
              style={{ color: "var(--color-text-tertiary)" }}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div
              className="md:hidden py-4 border-t"
              style={{
                borderColor: "var(--color-border-primary)",
                backgroundColor: "var(--color-primary-bg)",
              }}
            >
              {[
                { id: "home", label: "Home" },
                { id: "solutions", label: "Solutions" },
                { id: "about", label: "About" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 px-6"
                  style={{ color: "var(--color-text-tertiary)" }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor =
                      "rgba(255, 255, 255, 0.05)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - Dark Theme */}
      <section id="home" className="relative overflow-hidden py-24 md:py-40">
        {/* Gradient Blobs */}
        <div
          className="gradient-blob top-[-20%] left-[-10%] w-[500px] h-[500px]"
          style={{
            background:
              "linear-gradient(to bottom right, var(--color-gradient-start-green), var(--color-gradient-end-blue))",
          }}
        ></div>
        <div
          className="gradient-blob bottom-[-20%] right-[-10%] w-[600px] h-[600px]"
          style={{
            background:
              "linear-gradient(to bottom right, var(--color-gradient-start-purple), var(--color-gradient-end-teal))",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
            style={{ color: "var(--color-text-primary)" }}
          >
            We are the payments people.
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
            style={{ color: "var(--color-text-tertiary)" }}
          >
            Zeta&apos;s cross-border payments solutions connect organisations
            and communities globally to the network they need to thrive.
            Together, we make money move.
          </p>
          <button
            onClick={() => scrollToSection("solutions")}
            className="font-semibold group transition-transform transform"
            style={{ color: "var(--color-green-secondary)" }}
          >
            Discover more{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              &rarr;
            </span>
          </button>
        </div>
      </section>

      {/* Solutions Section - Dark Theme */}
      <section id="solutions" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-extrabold"
              style={{ color: "var(--color-text-primary)" }}
            >
              Financial Services
            </h2>
            <p
              className="text-lg mt-4 max-w-2xl mx-auto"
              style={{ color: "var(--color-text-quaternary)" }}
            >
              For truly global banking. Everything you need to build, manage,
              and grow your online presence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Server & Hosting */}
            <a
              href="/services/hosting"
              className="solution-card p-8 rounded-2xl block"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "var(--color-overlay-green)" }}
              >
                <Server
                  size={24}
                  style={{ color: "var(--color-green-secondary)" }}
                />
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--color-text-primary)" }}
              >
                Server & Webhosting
              </h3>
              <p style={{ color: "var(--color-text-quaternary)" }}>
                We house and secure your online domain and all its data,
                providing a reliable and safe foundation for your website.
              </p>
            </a>

            {/* Turnkey Solutions */}
            <a
              href="/services/turnkey"
              className="solution-card p-8 rounded-2xl block"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "var(--color-overlay-green)" }}
              >
                <Settings
                  size={24}
                  style={{ color: "var(--color-green-secondary)" }}
                />
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--color-text-primary)" }}
              >
                Turnkey Solutions
              </h3>
              <p style={{ color: "var(--color-text-quaternary)" }}>
                Start doing business right away. We set up and manage your
                online requirements so you can focus on your operations.
              </p>
            </a>

            {/* Payment Solutions */}
            <a
              href="/services/payments"
              className="solution-card p-8 rounded-2xl block"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "var(--color-overlay-green)" }}
              >
                <CreditCard
                  size={24}
                  style={{ color: "var(--color-green-secondary)" }}
                />
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--color-text-primary)" }}
              >
                Integrate Payment Solutions
              </h3>
              <p style={{ color: "var(--color-text-quaternary)" }}>
                Process client payments instantly with a few simple steps (Move
                In) and settle all your payables to any channel or wallet (Move
                Out).
              </p>
            </a>

            {/* SMS Services */}
            <a
              href="/services/sms"
              className="solution-card p-8 rounded-2xl block"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "var(--color-overlay-green)" }}
              >
                <MessageSquare
                  size={24}
                  style={{ color: "var(--color-green-secondary)" }}
                />
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--color-text-primary)" }}
              >
                SMS Services
              </h3>
              <p style={{ color: "var(--color-text-quaternary)" }}>
                Engage clients with reliable messaging. Everything you need for
                your go-to-market strategy with exceptional deliverability.
              </p>
            </a>

            {/* Third Party Integrations */}
            <a
              href="/services/integrations"
              className="solution-card p-8 rounded-2xl block"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "var(--color-overlay-green)" }}
              >
                <Layers
                  size={24}
                  style={{ color: "var(--color-green-secondary)" }}
                />
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "var(--color-text-primary)" }}
              >
                Misc 3rd Party Products
              </h3>
              <p style={{ color: "var(--color-text-quaternary)" }}>
                We offer a variety of third-party products and integrations to
                further assist and enhance your business capabilities.
              </p>
            </a>

            {/* Ready to Start Card */}
            <div
              className="p-8 rounded-2xl flex flex-col justify-center items-center text-center"
              style={{
                backgroundColor: "var(--color-overlay-green)",
                border: "1px solid var(--color-border-accent)",
                color: "var(--color-text-primary)",
              }}
            >
              <h3 className="text-2xl font-bold mb-3">Ready to Start?</h3>
              <p className="mb-4" style={{ color: "var(--color-text-accent)" }}>
                Let us handle the technical details so you can focus on growth.
              </p>
              <Link
                href="/contact"
                className="font-semibold px-6 py-2 rounded-lg transition-colors"
                style={{
                  backgroundColor: "var(--color-green-primary)",
                  color: "var(--color-text-primary)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "var(--color-green-hover)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "var(--color-green-primary)";
                }}
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Dark Theme */}
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-6"
              style={{ color: "var(--color-text-primary)" }}
            >
              Trusted Partner Since 2015
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto"
              style={{ color: "var(--color-text-quaternary)" }}
            >
              Founded in 2015, Zeta Solutions was born out of a simple
              realization: setting up and running an online business is not
              easy. Our mission is to make digital transformation accessible,
              efficient, and impactful for every business—no matter the size or
              industry.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="solution-card p-6 rounded-2xl text-center">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "var(--color-overlay-green)" }}
              >
                <Shield
                  size={24}
                  style={{ color: "var(--color-green-secondary)" }}
                />
              </div>
              <div
                className="font-semibold mb-1"
                style={{ color: "var(--color-text-primary)" }}
              >
                Regulated & Secure
              </div>
              <div
                className="text-sm"
                style={{ color: "var(--color-text-quaternary)" }}
              >
                Enterprise compliance
              </div>
            </div>
            <div className="solution-card p-6 rounded-2xl text-center">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "var(--color-overlay-green)" }}
              >
                <Award
                  size={24}
                  style={{ color: "var(--color-green-secondary)" }}
                />
              </div>
              <div
                className="font-semibold mb-1"
                style={{ color: "var(--color-text-primary)" }}
              >
                9+ Years
              </div>
              <div
                className="text-sm"
                style={{ color: "var(--color-text-quaternary)" }}
              >
                Since 2015
              </div>
            </div>
            <div className="solution-card p-6 rounded-2xl text-center">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "var(--color-overlay-green)" }}
              >
                <Globe
                  size={24}
                  style={{ color: "var(--color-green-secondary)" }}
                />
              </div>
              <div
                className="font-semibold mb-1"
                style={{ color: "var(--color-text-primary)" }}
              >
                200+ Clients
              </div>
              <div
                className="text-sm"
                style={{ color: "var(--color-text-quaternary)" }}
              >
                Worldwide coverage
              </div>
            </div>
            <div className="solution-card p-6 rounded-2xl text-center">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "var(--color-overlay-green)" }}
              >
                <Clock
                  size={24}
                  style={{ color: "var(--color-green-secondary)" }}
                />
              </div>
              <div
                className="font-semibold mb-1"
                style={{ color: "var(--color-text-primary)" }}
              >
                24/7 Support
              </div>
              <div
                className="text-sm"
                style={{ color: "var(--color-text-quaternary)" }}
              >
                Always available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section - Dark Theme */}
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl font-extrabold"
              style={{ color: "var(--color-text-primary)" }}
            >
              Get Started with Zeta
            </h2>
            <p
              className="text-lg mt-4 max-w-2xl mx-auto"
              style={{ color: "var(--color-text-quaternary)" }}
            >
              Choose the option that best fits your needs.
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* New Merchants */}
            <div className="solution-card rounded-2xl p-8 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "var(--color-overlay-green)" }}
              >
                <Users
                  className="w-8 h-8"
                  style={{ color: "var(--color-green-secondary)" }}
                />
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                New Merchants
              </h3>
              <p
                className="mb-6"
                style={{ color: "var(--color-text-quaternary)" }}
              >
                Ready to bring your business online? Let&apos;s talk about how
                we can help you succeed with our comprehensive onboarding
                process.
              </p>
              <div className="space-y-4">
                <Link
                  href="/get-started"
                  className="block w-full font-semibold py-3 rounded-lg transition-colors"
                  style={{
                    backgroundColor: "var(--color-green-primary)",
                    color: "var(--color-text-primary)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "var(--color-green-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor =
                      "var(--color-green-primary)";
                  }}
                >
                  Start Your Journey
                </Link>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-text-quaternary)" }}
                >
                  Complete our detailed form to get personalized recommendations
                </p>
              </div>
            </div>

            {/* Contact Sales */}
            <div className="solution-card rounded-2xl p-8 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "var(--color-overlay-blue)" }}
              >
                <Shield
                  className="w-8 h-8"
                  style={{ color: "var(--color-blue-secondary)" }}
                />
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "var(--color-text-primary)" }}
              >
                Need Support?
              </h3>
              <p
                className="mb-6"
                style={{ color: "var(--color-text-quaternary)" }}
              >
                Already working with us? Get in touch with our support team for
                assistance with your existing services.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="block w-full font-semibold py-3 rounded-lg transition-colors"
                  style={{
                    backgroundColor: "var(--color-blue-primary)",
                    color: "var(--color-text-primary)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "var(--color-blue-hover)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor =
                      "var(--color-blue-primary)";
                  }}
                >
                  Contact Support
                </Link>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-text-quaternary)" }}
                >
                  Get help with your Zeta Solutions services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-transparent border-t mt-auto"
        style={{ borderColor: "var(--color-border-primary)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p
                className="text-xl font-bold"
                style={{ color: "var(--color-text-primary)" }}
              >
                Zeta Solutions
              </p>
              <p style={{ color: "var(--color-text-quaternary)" }}>
                © 2024 Zeta Solutions. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                style={{ color: "var(--color-text-quaternary)" }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "var(--color-text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "var(--color-text-quaternary)")
                }
              >
                Privacy Policy
              </a>
              <a
                href="#"
                style={{ color: "var(--color-text-quaternary)" }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "var(--color-text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "var(--color-text-quaternary)")
                }
              >
                Terms of Service
              </a>
              <Link
                href="/contact"
                style={{ color: "var(--color-text-quaternary)" }}
                onMouseEnter={(e) =>
                  (e.target.style.color = "var(--color-text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.color = "var(--color-text-quaternary)")
                }
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ZetaSolutionsLanding;
