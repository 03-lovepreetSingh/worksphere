"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function CompleteStep() {
  const router = useRouter()

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

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Left Side */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Embark on Your Freelancing Journey in Just 3 Simple Steps
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Unlock the full potential of your freelance career with WorkSphere. Begin a rewarding journey where your
                skills are valued and your professional growth is inevitable. Start now and pave the path to your
                success.
              </p>
              <Button size="lg" className="bg-black text-white" onClick={() => router.push("/dashboard")}>
                Get Started
              </Button>
            </div>
          </div>

          {/* Right Side - Steps */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. Set Up Your Professional Profile</h3>
                <p className="text-gray-600">
                  Create your identity on WorkSphere by setting up a detailed profile. Highlight your expertise, define
                  your niche, and let your experience speak for itself. A strong profile is the first step to standing
                  out in a competitive marketplace.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  2. Enhance Your Portfolio & Expand Your Skillset
                </h3>
                <p className="text-gray-600">
                  Showcase your best work and keep learning. Update your portfolio with your latest projects and
                  achievements. With WorkSphere, you also gain access to exclusive resources for skill enhancement to
                  stay ahead of the curve.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3. Connect with Clients & Start Earning</h3>
                <p className="text-gray-600">
                  Dive into a world of opportunities. Browse projects that match your skillset, connect with premier
                  clients, and start earning. With WorkSphere, every project is a new horizon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
