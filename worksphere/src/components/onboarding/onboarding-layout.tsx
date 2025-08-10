import type React from "react"
import Link from "next/link"

interface OnboardingLayoutProps {
  children: React.ReactNode
  step?: string
  title?: string
}

export function OnboardingLayout({ children, step, title }: OnboardingLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="font-semibold text-lg">WorkSphere</span>
          </Link>

          <div className="text-gray-600">
            Want to Hire?{" "}
            <Link href="/auth/client" className="text-green-500 hover:text-green-600">
              Join As Client
            </Link>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gradient-to-r from-green-400 via-blue-500 via-purple-500 via-pink-500 to-yellow-500"></div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Side - Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            {step && (
              <div className="flex items-center mb-6">
                <span className="text-gray-500 mr-4">Step</span>
                <div className="relative w-16 h-16">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="3"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#000"
                      strokeWidth="3"
                      strokeDasharray="80, 100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-semibold">{step}</span>
                  </div>
                </div>
              </div>
            )}

            {title && <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>}

            {children}
          </div>

          {/* Right Side - Profile Preview */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <ProfilePreview />
          </div>
        </div>
      </div>
    </div>
  )
}

function ProfilePreview() {
  return (
    <div className="space-y-6">
      {/* Profile Image */}
      <div className="text-center">
        <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
          <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Cyrus Roshan</h2>
        <div className="flex items-center justify-center mt-2">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-sm text-gray-600">Available for work</span>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-3">SKILLS</h3>
        <div className="flex flex-wrap gap-2">
          {["Prototyping", "Development", "Prototyping", "Wireframing", "Prototyping"].map((skill, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm border">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Location */}
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-3">LOCATION</h3>
        <div className="flex items-center text-gray-700">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          California, CA, USA
        </div>
      </div>

      {/* Resume */}
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-3">RESUME</h3>
        <div className="flex items-center text-gray-700">
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
          </svg>
          resume.pdf
        </div>
      </div>
    </div>
  )
}
