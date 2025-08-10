"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AuthLayout } from "@/components/layout/auth-layout"
import { Mail } from "lucide-react"
import Link from "next/link"

export function ForgotPasswordForm() {
  return (
    <AuthLayout>
      <div className="text-center space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Forgot Password</h1>

        <form className="space-y-6">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input type="email" placeholder="Xyz@Mail.Com" className="pl-10" />
          </div>

          <Button size="lg" className="w-full bg-black text-white hover:bg-gray-800">
            Send Code
          </Button>
        </form>

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
