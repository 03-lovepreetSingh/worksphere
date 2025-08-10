"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AuthLayout } from "@/components/layout/auth-layout"
import { Mail, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

interface PasswordRequirement {
  text: string
  met: boolean
}

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [password, setPassword] = useState("")
  const [showPasswordTooltip, setShowPasswordTooltip] = useState(false)
  const [email, setEmail] = useState("")

  const passwordRequirements: PasswordRequirement[] = [
    { text: "Have minimum 8 characters", met: password.length >= 8 },
    { text: "Have minimum 1 uppercase letter", met: /[A-Z]/.test(password) },
    { text: "Have minimum 1 lowercase letter", met: /[a-z]/.test(password) },
    { text: "Have minimum 1 special character", met: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
    { text: "Have minimum 1 digit", met: /\d/.test(password) },
  ]

  return (
    <AuthLayout>
      <div className="text-center space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Login Here</h1>
          <h2 className="text-3xl font-bold text-gray-900">Fill the details</h2>
        </div>

        <form className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setShowPasswordTooltip(true)}
              onBlur={() => setShowPasswordTooltip(false)}
              className={`pr-10 ${password && passwordRequirements.some((req) => !req.met) ? "border-red-300" : ""}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>

            {showPasswordTooltip && password && (
              <div className="absolute top-full right-0 mt-2 p-4 bg-white border border-gray-200 rounded-lg shadow-lg z-10 w-80">
                <div className="text-sm">
                  <p className="font-medium mb-2 text-orange-600">Please Enter correct Password</p>
                  <p className="font-medium mb-2">Password must:</p>
                  <ul className="space-y-1">
                    {passwordRequirements.map((req, index) => (
                      <li key={index} className={`flex items-center ${req.met ? "text-green-600" : "text-gray-600"}`}>
                        <span className="mr-2">{req.met ? "✓" : "•"}</span>
                        {req.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          <div className="text-left">
            <Link href="/auth/forgot-password" className="text-red-500 text-sm hover:text-red-600">
              Forgot Password?
            </Link>
          </div>

          <Button size="lg" className="w-full bg-black text-white hover:bg-gray-800">
            Create Account
          </Button>
        </form>

        <p className="text-gray-600">
          Don't Have an Account?{" "}
          <Link href="/auth/signup" className="text-green-500 hover:text-green-600">
            SignUp
          </Link>
        </p>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-50 text-gray-500">or</span>
          </div>
        </div>

        <Button variant="outline" size="lg" className="w-full bg-transparent">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Or Sign Up with Google
        </Button>

        <p className="text-sm text-gray-500">
          by Logging In, i agree with WorkSphere{" "}
          <Link href="#" className="text-blue-500 underline">
            privacy policy
          </Link>
          <br />
          and{" "}
          <Link href="#" className="text-blue-500 underline">
            terms and conditions
          </Link>
        </p>
      </div>
    </AuthLayout>
  )
}
