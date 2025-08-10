"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  LayoutGrid,
  Search,
  Users,
  MessageSquare,
  CreditCard,
  Settings,
  Bell,
  ChevronDown,
  User,
  Menu,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const menuItems = [
    { icon: LayoutGrid, label: "Workspace", href: "/dashboard", active: pathname === "/dashboard" },
    { icon: Search, label: "Find Jobs", href: "/dashboard/jobs", active: pathname === "/dashboard/jobs" },
    { icon: Users, label: "Explore Talent", href: "/dashboard/talent", active: pathname === "/dashboard/talent" },
    { icon: MessageSquare, label: "Messages", href: "/dashboard/messages", active: pathname === "/dashboard/messages" },
  ]

  const otherItems = [
    {
      icon: CreditCard,
      label: "Payment & Projects",
      href: "/dashboard/payments",
      active: pathname === "/dashboard/payments",
    },
    {
      icon: Settings,
      label: "Account Setting",
      href: "/dashboard/settings",
      active: pathname === "/dashboard/settings",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Logo */}
        <div className="p-4 lg:p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="font-semibold text-lg">WorkSphere</span>
            </Link>
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(false)}>
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-500 mb-3">Main Menu</h3>
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-gradient-to-r from-green-100 via-blue-100 via-purple-100 to-pink-100 text-gray-900"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-3">Other</h3>
            <nav className="space-y-1">
              {otherItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    item.active
                      ? "bg-gradient-to-r from-green-100 via-blue-100 via-purple-100 to-pink-100 text-gray-900"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(true)}>
                <Menu className="w-5 h-5" />
              </Button>
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">Dashboard</h1>
            </div>

            <div className="flex items-center space-x-2 lg:space-x-4">
              {/* Notifications */}
              <div className="relative">
                <Bell className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  1
                </span>
              </div>

              {/* Client Toggle - Hidden on mobile */}
              <div className="hidden sm:flex items-center space-x-2">
                <User className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                <span className="text-sm text-gray-600">Client</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>

              {/* User Menu */}
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 lg:w-8 lg:h-8 bg-gray-200 rounded-full"></div>
                <span className="hidden sm:block text-sm text-gray-600">John Doe</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>

              <Button variant="ghost" size="sm" className="text-gray-500 hidden sm:block">
                Exit
              </Button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
