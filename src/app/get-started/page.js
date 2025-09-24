"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  User,
  Building2,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader2,
  ArrowRight,
  Shield,
  Clock,
  Users,
  Target,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

const GetStartedPage = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",

    // Business Information
    businessType: "",
    companySize: "",
    industry: "",
    website: "",

    // Service Interest
    services: [],

    // Project Details
    projectTimeline: "",
    budget: "",
    description: "",

    // Additional Information
    currentChallenges: "",
    goals: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);

  const serviceOptions = [
    {
      id: "hosting",
      label: "Server & Webhosting",
      description: "Domain and data hosting",
    },
    {
      id: "turnkey",
      label: "Turnkey Solutions",
      description: "Complete business setup",
    },
    {
      id: "payments",
      label: "Payment Solutions",
      description: "Payment processing and settlement",
    },
    {
      id: "sms",
      label: "SMS Services",
      description: "Bulk messaging and automation",
    },
    {
      id: "integrations",
      label: "3rd Party Integrations",
      description: "Third-party product integrations",
    },
  ];

  const businessTypes = [
    "E-commerce",
    "SaaS",
    "Marketplace",
    "Service Provider",
    "Non-profit",
    "Other",
  ];

  const companySizes = [
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-1000 employees",
    "1000+ employees",
  ];

  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Retail",
    "Education",
    "Manufacturing",
    "Real Estate",
    "Other",
  ];

  const projectTimelines = [
    "ASAP",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "Prefer not to say",
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        services: checked
          ? [...prev.services, value]
          : prev.services.filter((service) => service !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitStatus("success");
      console.log("Form submitted:", formData);
    } catch (error) {
      setSubmitStatus("error");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          Personal Information
        </h2>
        <p className="text-gray-400">Tell us about yourself and your company</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400"
            placeholder="Enter your first name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400"
            placeholder="Enter your last name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400"
            placeholder="Your company name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400"
            placeholder="Your role at the company"
          />
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          Business Information
        </h2>
        <p className="text-gray-400">Help us understand your business better</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Business Type *
          </label>
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white"
          >
            <option value="">Select business type</option>
            {businessTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Company Size *
          </label>
          <select
            name="companySize"
            value={formData.companySize}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white"
          >
            <option value="">Select company size</option>
            {companySizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Industry *
          </label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white"
          >
            <option value="">Select industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Website URL
          </label>
          <input
            type="url"
            name="website"
            value={formData.website}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400"
            placeholder="https://yourwebsite.com"
          />
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Service Interest</h2>
        <p className="text-gray-400">Which services are you interested in?</p>
      </div>

      <div className="space-y-4">
        {serviceOptions.map((service) => (
          <label
            key={service.id}
            className="flex items-start space-x-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <input
              type="checkbox"
              value={service.id}
              checked={formData.services.includes(service.id)}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 text-green-500 bg-white/5 border-white/20 rounded focus:ring-green-500 focus:ring-2"
            />
            <div className="flex-1">
              <div className="font-medium text-white">{service.label}</div>
              <div className="text-sm text-gray-400">{service.description}</div>
            </div>
          </label>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Project Timeline *
          </label>
          <select
            name="projectTimeline"
            value={formData.projectTimeline}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white"
          >
            <option value="">Select timeline</option>
            {projectTimelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Budget Range
          </label>
          <select
            name="budget"
            value={formData.budget}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white"
          >
            <option value="">Select budget range</option>
            {budgetRanges.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Project Details</h2>
        <p className="text-gray-400">
          Tell us more about your project and goals
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Project Description *
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
          rows={4}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400"
          placeholder="Describe your project, what you're trying to achieve, and any specific requirements..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Current Challenges
        </label>
        <textarea
          name="currentChallenges"
          value={formData.currentChallenges}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400"
          placeholder="What challenges are you currently facing that we can help solve?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Goals & Objectives
        </label>
        <textarea
          name="goals"
          value={formData.goals}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400"
          placeholder="What are your main goals and what success looks like for you?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Additional Information
        </label>
        <textarea
          name="additionalInfo"
          value={formData.additionalInfo}
          onChange={handleInputChange}
          rows={3}
          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400"
          placeholder="Any other information you'd like to share with us?"
        />
      </div>
    </div>
  );

  const renderSuccessMessage = () => (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-8 h-8 text-green-400" />
      </div>
      <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
      <p className="text-gray-400 mb-6 max-w-md mx-auto">
        We&apos;ve received your information and will get back to you within 24
        hours to discuss your project.
      </p>
      <div className="space-y-4">
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
        >
          Return to Home
        </Link>
        <div className="text-sm text-gray-400">
          Need immediate assistance? Call us at +1 (555) 123-4567
        </div>
      </div>
    </div>
  );

  const renderErrorMessage = () => (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <AlertCircle className="w-8 h-8 text-red-400" />
      </div>
      <h2 className="text-3xl font-bold text-white mb-4">
        Something went wrong
      </h2>
      <p className="text-gray-400 mb-6 max-w-md mx-auto">
        We encountered an error while submitting your form. Please try again or
        contact us directly.
      </p>
      <button
        onClick={() => setSubmitStatus(null)}
        className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
      >
        Try Again
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#1A2E2A] text-gray-200">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                <span className="text-white text-sm font-bold">Z</span>
              </div>
              <span className="text-white text-lg font-medium">
                Zeta Solutions
              </span>
            </Link>

            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {submitStatus === "success" ? (
          renderSuccessMessage()
        ) : submitStatus === "error" ? (
          renderErrorMessage()
        ) : (
          <>
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400">
                  Step {currentStep} of 4
                </span>
                <span className="text-sm text-gray-400">
                  {Math.round((currentStep / 4) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div
                  className="bg-green-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <form onSubmit={handleSubmit}>
                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}
                {currentStep === 4 && renderStep4()}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                  <button
                    type="button"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center space-x-2 px-6 py-3 text-gray-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center space-x-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center space-x-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Application</span>
                          <CheckCircle className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Benefits Section */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white/5 border border-white/10 rounded-lg">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">
                  Quick Response
                </h3>
                <p className="text-sm text-gray-400">
                  We&apos;ll get back to you within 24 hours
                </p>
              </div>

              <div className="text-center p-6 bg-white/5 border border-white/10 rounded-lg">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-sm text-gray-400">
                  9+ years of experience since 2015
                </p>
              </div>

              <div className="text-center p-6 bg-white/5 border border-white/10 rounded-lg">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-semibold text-white mb-2">
                  Secure & Reliable
                </h3>
                <p className="text-sm text-gray-400">
                  Enterprise-grade security and compliance
                </p>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default GetStartedPage;
