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

// Reusable Components
const StatCard = ({ value, label, bgColor, borderColor, textColor }) => (
  <div className={`${bgColor} rounded-lg p-4 border ${borderColor}`}>
    <div className={`text-2xl font-bold ${textColor} mb-1`}>{value}</div>
    <div className="text-sm text-gray-400">{label}</div>
  </div>
);

const FeatureCard = ({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  description,
  features,
}) => (
  <div className="bg-white/5 rounded-lg border border-white/10 p-6 hover:bg-white/10 transition-all">
    <div
      className={`w-12 h-12 ${iconBg} rounded-lg flex items-center justify-center mb-4`}
    >
      <Icon size={24} className={iconColor} />
    </div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <ul className="space-y-2 text-sm text-gray-300">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-2">
          <CheckCircle size={14} className="text-green-400" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const PricingCard = ({
  title,
  price,
  features,
  buttonText,
  buttonStyle,
  isPopular = false,
}) => (
  <div
    className={`${
      isPopular
        ? "bg-white/10 border-green-400/30"
        : "bg-white/5 border-white/10"
    } rounded-lg border p-8 relative`}
  >
    {isPopular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </span>
      </div>
    )}
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <div className="text-3xl font-bold text-white mb-6">{price}</div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center space-x-2">
          <CheckCircle size={16} className="text-green-400" />
          <span className="text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>
    <button
      className={`w-full ${buttonStyle} py-3 rounded font-medium transition-colors`}
    >
      {buttonText}
    </button>
  </div>
);

const FlowCard = ({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  subtitle,
  description,
  features,
}) => (
  <div className={`${iconBg} rounded-2xl p-8 border ${iconColor}`}>
    <div className="flex items-center mb-6">
      <div
        className={`w-12 h-12 ${iconBg
          .replace("from-", "bg-")
          .replace(
            "to-",
            ""
          )} rounded-lg flex items-center justify-center mr-4`}
      >
        <Icon size={24} className={iconColor.replace("border-", "text-")} />
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-white">{title}</h3>
        <p className="text-gray-300">{subtitle}</p>
      </div>
    </div>
    <p className="text-lg text-gray-200 mb-6">{description}</p>
    <div className="space-y-4">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
            <feature.icon
              size={16}
              className={iconColor.replace("border-", "text-")}
            />
          </div>
          <span className="text-gray-200">{feature.text}</span>
        </div>
      ))}
    </div>
  </div>
);

const SpecItem = ({ icon: Icon, iconColor, text }) => (
  <div className="flex items-center space-x-3">
    <Icon size={20} className={iconColor} />
    <span className="text-gray-200">{text}</span>
  </div>
);

const PaymentsPage = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "var(--color-primary-bg)",
        color: "var(--color-text-primary)",
      }}
    >
      {/* Navigation */}
      <nav
        className="fixed top-0 w-full backdrop-blur-sm border-b border-white/10 z-50"
        style={{ backgroundColor: "var(--color-nav-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div
                className="w-8 h-8 rounded flex items-center justify-center"
                style={{ backgroundColor: "var(--color-green-primary)" }}
              >
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
                <CreditCard className="w-4 h-4 mr-2" />
                Integrated Payment Solutions
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Complete Payment
                <br />
                <span style={{ color: "var(--color-green-secondary)" }}>
                  Ecosystem
                </span>
              </h1>

              <p
                className="text-xl mb-8 leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <strong>Move In:</strong> We process all your clients payments
                in an instant with only a few steps
                <br />
                <br />
                <strong>Move Out:</strong> We help to settle all your invoices
                and payable to any form of channel or wallet required
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
                  View Documentation
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <StatCard
                    value="99.9%"
                    label="Success Rate"
                    bgColor="bg-white/5"
                    borderColor="border-white/10"
                    textColor="text-green-400"
                  />
                  <StatCard
                    value="&lt;3s"
                    label="Processing"
                    bgColor="bg-white/5"
                    borderColor="border-white/10"
                    textColor="text-green-400"
                  />
                  <StatCard
                    value="200+"
                    label="Countries"
                    bgColor="bg-white/5"
                    borderColor="border-white/10"
                    textColor="text-green-400"
                  />
                  <StatCard
                    value="50+"
                    label="Currencies"
                    bgColor="bg-white/5"
                    borderColor="border-white/10"
                    textColor="text-green-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Flow Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Payment Flow
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              From receiving payments to settling invoices, we handle the entire
              payment lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FlowCard
              icon={ArrowDown}
              iconBg="bg-white/5"
              iconColor="border-green-400/30"
              title="Move In"
              subtitle="Payment Processing"
              description="We process all your clients payments in an instant with only a few steps"
              features={[
                { icon: CreditCard, text: "Multiple payment methods" },
                { icon: Zap, text: "Instant processing" },
                { icon: Shield, text: "Secure transactions" },
                { icon: Globe, text: "Global reach" },
              ]}
            />
            <FlowCard
              icon={ArrowUp}
              iconBg="bg-white/5"
              iconColor="border-green-400/30"
              title="Move Out"
              subtitle="Invoice Settlement"
              description="We help to settle all your invoices and payable to any form of channel or wallet required"
              features={[
                { icon: DollarSign, text: "Automated settlements" },
                { icon: Mobile, text: "Digital wallets" },
                { icon: BarChart3, text: "Real-time reporting" },
                { icon: Clock, text: "Scheduled payments" },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Payment Features
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Comprehensive payment solutions designed for modern businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={CreditCard}
              iconBg="bg-white/10"
              iconColor="text-green-400"
              title="Multiple Payment Methods"
              description="Accept payments via credit cards, debit cards, bank transfers, digital wallets, and more."
              features={[
                "Credit/Debit Cards",
                "Bank Transfers",
                "Digital Wallets",
              ]}
            />
            <FeatureCard
              icon={Zap}
              iconBg="bg-white/10"
              iconColor="text-green-400"
              title="Instant Processing"
              description="Lightning-fast payment processing with real-time confirmation and immediate fund availability."
              features={[
                "Real-time Processing",
                "Instant Confirmation",
                "Immediate Settlement",
              ]}
            />
            <FeatureCard
              icon={Shield}
              iconBg="bg-white/10"
              iconColor="text-green-400"
              title="Enterprise Security"
              description="Bank-level security with PCI DSS compliance, encryption, and fraud detection systems."
              features={[
                "PCI DSS Compliant",
                "End-to-End Encryption",
                "Fraud Detection",
              ]}
            />
            <FeatureCard
              icon={Globe}
              iconBg="bg-white/10"
              iconColor="text-green-400"
              title="Global Reach"
              description="Accept payments from customers worldwide with support for multiple currencies and local payment methods."
              features={[
                "50+ Currencies",
                "200+ Countries",
                "Local Payment Methods",
              ]}
            />
            <FeatureCard
              icon={BarChart3}
              iconBg="bg-white/10"
              iconColor="text-green-400"
              title="Advanced Analytics"
              description="Comprehensive reporting and analytics to help you understand your payment patterns and optimize revenue."
              features={[
                "Real-time Reports",
                "Transaction Analytics",
                "Revenue Insights",
              ]}
            />
            <FeatureCard
              icon={Activity}
              iconBg="bg-white/10"
              iconColor="text-green-400"
              title="API Integration"
              description="Easy integration with your existing systems through our comprehensive API and developer tools."
              features={["RESTful API", "SDKs & Libraries", "Webhook Support"]}
            />
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
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Enterprise-grade payment infrastructure with industry-leading
              performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 rounded-lg border border-white/10 p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Performance Metrics
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span style={{ color: "var(--color-text-secondary)" }}>
                    Processing Speed
                  </span>
                  <span className="font-medium text-white">&lt; 3 seconds</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span style={{ color: "var(--color-text-secondary)" }}>
                    Success Rate
                  </span>
                  <span className="font-medium text-green-400">99.9%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span style={{ color: "var(--color-text-secondary)" }}>
                    Uptime SLA
                  </span>
                  <span className="font-medium text-green-400">99.99%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <span style={{ color: "var(--color-text-secondary)" }}>
                    API Response Time
                  </span>
                  <span className="font-medium text-white">&lt; 200ms</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span style={{ color: "var(--color-text-secondary)" }}>
                    Transaction Volume
                  </span>
                  <span className="font-medium text-white">Unlimited</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg border border-white/10 p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Security & Compliance
              </h3>
              <div className="space-y-4">
                <SpecItem
                  icon={Lock}
                  iconColor="text-green-400"
                  text="PCI DSS Level 1 Compliant"
                />
                <SpecItem
                  icon={Shield}
                  iconColor="text-green-400"
                  text="256-bit SSL Encryption"
                />
                <SpecItem
                  icon={Activity}
                  iconColor="text-green-400"
                  text="Real-time Fraud Detection"
                />
                <SpecItem
                  icon={Wifi}
                  iconColor="text-green-400"
                  text="Secure Network Protocols"
                />
                <SpecItem
                  icon={BarChart3}
                  iconColor="text-green-400"
                  text="Audit Trail & Logging"
                />
                <SpecItem
                  icon={Users}
                  iconColor="text-green-400"
                  text="Multi-factor Authentication"
                />
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
              Payment Processing Plans
            </h2>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Transparent pricing with no hidden fees. Choose the plan that fits
              your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Starter"
              price={
                <>
                  2.9%
                  <span
                    className="text-lg"
                    style={{ color: "var(--color-text-tertiary)" }}
                  >
                    {" "}
                    + $0.30
                  </span>
                </>
              }
              features={[
                "Up to $10K/month",
                "Basic Payment Methods",
                "Standard Support",
                "Basic Reporting",
              ]}
              buttonText="Get Started"
              buttonStyle="bg-white/10 text-white hover:bg-white/20"
            />
            <PricingCard
              title="Business"
              price={
                <>
                  2.5%
                  <span
                    className="text-lg"
                    style={{ color: "var(--color-text-tertiary)" }}
                  >
                    {" "}
                    + $0.30
                  </span>
                </>
              }
              features={[
                "Up to $100K/month",
                "All Payment Methods",
                "Priority Support",
                "Advanced Analytics",
                "Fraud Protection",
              ]}
              buttonText="Get Started"
              buttonStyle="bg-green-600 text-white hover:bg-green-700"
              isPopular={true}
            />
            <PricingCard
              title="Enterprise"
              price={
                <>
                  Custom
                  <span
                    className="text-lg"
                    style={{ color: "var(--color-text-tertiary)" }}
                  >
                    {" "}
                    pricing
                  </span>
                </>
              }
              features={[
                "Unlimited Volume",
                "Custom Integrations",
                "Dedicated Support",
                "White-label Solutions",
                "SLA Guarantees",
              ]}
              buttonText="Contact Sales"
              buttonStyle="bg-white/10 text-white hover:bg-white/20"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "var(--color-green-primary)" }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Accept Payments?
          </h2>
          <p
            className="text-xl mb-8"
            style={{ color: "var(--color-text-accent)" }}
          >
            Join thousands of businesses that trust Zeta Solutions for their
            payment processing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="bg-white px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors"
              style={{ color: "var(--color-green-primary)" }}
            >
              Start Processing Payments
            </button>
            <button
              className="border border-white text-white px-8 py-3 rounded font-medium hover:bg-white transition-colors"
              onMouseEnter={(e) =>
                (e.target.style.color = "var(--color-green-primary)")
              }
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-transparent border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-xl font-bold text-white">Zeta Solutions</p>
              <p style={{ color: "var(--color-text-quaternary)" }}>
                © 2024 Zeta Solutions. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                style={{ color: "var(--color-text-quaternary)" }}
                className="hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                style={{ color: "var(--color-text-quaternary)" }}
                className="hover:text-white"
              >
                Terms of Service
              </a>
              <a
                href="/contact"
                style={{ color: "var(--color-text-quaternary)" }}
                className="hover:text-white"
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

export default PaymentsPage;
