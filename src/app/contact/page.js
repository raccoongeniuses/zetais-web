"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader2,
  Send,
  Clock,
  Users,
  Shield,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",

    // Contact Preferences
    preferredContact: "email",
    bestTimeToCall: "",

    // Service Interest
    services: [],

    // Project Details
    projectType: "",
    timeline: "",
    budget: "",
    description: "",

    // Additional Information
    currentChallenges: "",
    goals: "",
    additionalInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const serviceOptions = [
    {
      id: "hosting",
      label: "Server & Webhosting",
      description: "Domain and data hosting services",
    },
    {
      id: "turnkey",
      label: "Turnkey Solutions",
      description: "Complete business setup and management",
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

  const projectTypes = [
    "New Business Setup",
    "Existing Business Enhancement",
    "Technical Migration",
    "Consultation",
    "Support & Maintenance",
    "Other",
  ];

  const timelines = [
    "ASAP",
    "Within 1 month",
    "1-3 months",
    "3-6 months",
    "6+ months",
    "Just exploring options",
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000+",
    "Prefer not to say",
  ];

  const contactMethods = [
    { value: "email", label: "Email" },
    { value: "phone", label: "Phone Call" },
    { value: "both", label: "Either Email or Phone" },
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

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Project description is required";
    }

    if (formData.services.length === 0) {
      newErrors.services = "Please select at least one service of interest";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitStatus("success");
      console.log("Contact form submitted:", formData);
    } catch (error) {
      setSubmitStatus("error");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderSuccessMessage = () => (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle className="w-8 h-8 text-green-400" />
      </div>
      <h2 className="text-3xl font-bold text-white mb-4">Message Sent!</h2>
      <p className="text-gray-400 mb-6 max-w-md mx-auto">
        Thank you for reaching out! We&apos;ve received your message and will
        get back to you within 24 hours.
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
        We encountered an error while sending your message. Please try again or
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
              <Image
                src="/assets/zeta-logo.jpg"
                alt="Zeta Solutions"
                width={32}
                height={32}
                className="w-8 h-8 rounded object-cover"
              />
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
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Ready to transform your business? Let&apos;s discuss how Zeta
                Solutions can help you succeed in the digital world.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Get in Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <p className="text-white">support@zetais.com</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Phone</p>
                        <p className="text-white">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Office</p>
                        <p className="text-white">Global Remote Team</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Why Choose Us?
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-white font-medium">
                          24/7 Support
                        </p>
                        <p className="text-xs text-gray-400">
                          Always available when you need us
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Users className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-white font-medium">
                          Expert Team
                        </p>
                        <p className="text-xs text-gray-400">
                          9+ years of experience since 2015
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-green-400 mt-0.5" />
                      <div>
                        <p className="text-sm text-white font-medium">
                          Secure & Reliable
                        </p>
                        <p className="text-xs text-gray-400">
                          Enterprise-grade security
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Personal Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400 ${
                              errors.firstName
                                ? "border-red-500"
                                : "border-white/10"
                            }`}
                            placeholder="Enter your first name"
                          />
                          {errors.firstName && (
                            <p className="mt-1 text-sm text-red-400">
                              {errors.firstName}
                            </p>
                          )}
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
                            className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400 ${
                              errors.lastName
                                ? "border-red-500"
                                : "border-white/10"
                            }`}
                            placeholder="Enter your last name"
                          />
                          {errors.lastName && (
                            <p className="mt-1 text-sm text-red-400">
                              {errors.lastName}
                            </p>
                          )}
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
                            className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400 ${
                              errors.email
                                ? "border-red-500"
                                : "border-white/10"
                            }`}
                            placeholder="your@email.com"
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-400">
                              {errors.email}
                            </p>
                          )}
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
                            className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400 ${
                              errors.company
                                ? "border-red-500"
                                : "border-white/10"
                            }`}
                            placeholder="Your company name"
                          />
                          {errors.company && (
                            <p className="mt-1 text-sm text-red-400">
                              {errors.company}
                            </p>
                          )}
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

                    {/* Service Interest */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Service Interest *
                      </h3>
                      <div className="space-y-3">
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
                              <div className="font-medium text-white">
                                {service.label}
                              </div>
                              <div className="text-sm text-gray-400">
                                {service.description}
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.services && (
                        <p className="mt-2 text-sm text-red-400">
                          {errors.services}
                        </p>
                      )}
                    </div>

                    {/* Project Details */}
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Project Details
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Project Type
                          </label>
                          <select
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white"
                          >
                            <option value="">Select project type</option>
                            {projectTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Timeline
                          </label>
                          <select
                            name="timeline"
                            value={formData.timeline}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white"
                          >
                            <option value="">Select timeline</option>
                            {timelines.map((timeline) => (
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

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Preferred Contact Method
                          </label>
                          <select
                            name="preferredContact"
                            value={formData.preferredContact}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white"
                          >
                            {contactMethods.map((method) => (
                              <option key={method.value} value={method.value}>
                                {method.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Project Description */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Project Description *
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={4}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400 ${
                          errors.description
                            ? "border-red-500"
                            : "border-white/10"
                        }`}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                      />
                      {errors.description && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.description}
                        </p>
                      )}
                    </div>

                    {/* Additional Information */}
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

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default ContactPage;
