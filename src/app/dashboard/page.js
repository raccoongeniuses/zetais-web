"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  User,
  Building2,
  CreditCard,
  MessageSquare,
  Server,
  Settings,
  Bell,
  LogOut,
  TrendingUp,
  DollarSign,
  Users,
  Globe,
  Activity,
  Calendar,
  FileText,
  Download,
  Eye,
  Plus,
  Search,
  Filter,
} from "lucide-react";
import Link from "next/link";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data
  const userData = {
    name: "John Smith",
    email: "john.smith@company.com",
    company: "Tech Solutions Inc.",
    plan: "Enterprise",
    joinDate: "March 2023",
  };

  const stats = [
    {
      label: "Total Revenue",
      value: "$45,230",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-400",
    },
    {
      label: "Active Services",
      value: "8",
      change: "+2",
      icon: Server,
      color: "text-blue-400",
    },
    {
      label: "Transactions",
      value: "1,234",
      change: "+8.2%",
      icon: CreditCard,
      color: "text-purple-400",
    },
    {
      label: "SMS Sent",
      value: "12,456",
      change: "+15.3%",
      icon: MessageSquare,
      color: "text-orange-400",
    },
  ];

  const recentTransactions = [
    {
      id: 1,
      type: "Payment",
      amount: "$1,250.00",
      status: "Completed",
      date: "2025-01-15",
      description: "Monthly subscription payment",
    },
    {
      id: 2,
      type: "SMS",
      amount: "$45.20",
      status: "Completed",
      date: "2025-01-14",
      description: "Bulk SMS campaign",
    },
    {
      id: 3,
      type: "Hosting",
      amount: "$89.99",
      status: "Pending",
      date: "2025-01-13",
      description: "Server upgrade",
    },
    {
      id: 4,
      type: "Payment",
      amount: "$2,100.00",
      status: "Completed",
      date: "2025-01-12",
      description: "Client payment processing",
    },
  ];

  const services = [
    {
      name: "Payment Processing",
      status: "Active",
      usage: "85%",
      plan: "Enterprise",
    },
    {
      name: "SMS Services",
      status: "Active",
      usage: "60%",
      plan: "Professional",
    },
    { name: "Web Hosting", status: "Active", usage: "45%", plan: "Business" },
    {
      name: "Turnkey Solutions",
      status: "Active",
      usage: "30%",
      plan: "Enterprise",
    },
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">{stat.label}</p>
                <p className="text-2xl font-bold text-white mt-1">
                  {stat.value}
                </p>
                <p className={`text-sm mt-1 ${stat.color}`}>{stat.change}</p>
              </div>
              <div
                className={`w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center`}
              >
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">
              Recent Transactions
            </h3>
            <button className="text-green-400 hover:text-green-300 text-sm">
              View All
            </button>
          </div>
          <div className="space-y-3">
            {recentTransactions.slice(0, 4).map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between py-2"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white">
                      {transaction.description}
                    </p>
                    <p className="text-xs text-gray-400">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white">{transaction.amount}</p>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      transaction.status === "Completed"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">
              Active Services
            </h3>
            <button className="text-green-400 hover:text-green-300 text-sm">
              Manage
            </button>
          </div>
          <div className="space-y-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2"
              >
                <div>
                  <p className="text-sm text-white">{service.name}</p>
                  <p className="text-xs text-gray-400">{service.plan}</p>
                </div>
                <div className="text-right">
                  <div className="w-20 bg-white/10 rounded-full h-2 mb-1">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: service.usage }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-400">{service.usage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderTransactions = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Transaction History</h2>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search transactions..."
              className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-white transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Transaction
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-white/5">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm text-white">
                        {transaction.description}
                      </div>
                      <div className="text-sm text-gray-400">
                        ID: #{transaction.id}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400">
                      {transaction.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        transaction.status === "Completed"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                    {transaction.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-green-400 hover:text-green-300">
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const renderServices = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">My Services</h2>
        <button className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Add Service</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-lg p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">
                {service.name}
              </h3>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  service.status === "Active"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-gray-500/20 text-gray-400"
                }`}
              >
                {service.status}
              </span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Usage</span>
                  <span className="text-white">{service.usage}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: service.usage }}
                  ></div>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Plan</span>
                <span className="text-white">{service.plan}</span>
              </div>
            </div>
            <div className="mt-4 flex space-x-2">
              <button className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded text-sm text-gray-300 hover:text-white transition-colors">
                Manage
              </button>
              <button className="flex-1 px-3 py-2 bg-green-500 text-white rounded text-sm hover:bg-green-600 transition-colors">
                Upgrade
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSettings = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Account Settings</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">
            Profile Information
          </h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={userData.name}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                value={userData.email}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Company
              </label>
              <input
                type="text"
                value={userData.company}
                className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
              Update Profile
            </button>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Security</h3>
          <div className="space-y-4">
            <button className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-white transition-colors text-left">
              Change Password
            </button>
            <button className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-white transition-colors text-left">
              Two-Factor Authentication
            </button>
            <button className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:text-white transition-colors text-left">
              API Keys
            </button>
            <button className="w-full px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 hover:text-red-300 transition-colors text-left">
              Delete Account
            </button>
          </div>
        </div>
      </div>
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

            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-green-400" />
                </div>
                <div className="hidden md:block">
                  <p className="text-sm text-white">{userData.name}</p>
                  <p className="text-xs text-gray-400">{userData.company}</p>
                </div>
              </div>
              <Link
                href="/"
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <LogOut className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="space-y-2">
              {[
                { id: "overview", label: "Overview", icon: Activity },
                { id: "transactions", label: "Transactions", icon: CreditCard },
                { id: "services", label: "Services", icon: Server },
                { id: "settings", label: "Settings", icon: Settings },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            {activeTab === "overview" && renderOverview()}
            {activeTab === "transactions" && renderTransactions()}
            {activeTab === "services" && renderServices()}
            {activeTab === "settings" && renderSettings()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
