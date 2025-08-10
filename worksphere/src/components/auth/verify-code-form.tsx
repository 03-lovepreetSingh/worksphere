"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { AuthLayout } from "@/components/layout/auth-layout"

export function VerifyCodeForm() {
  const [code, setCode] = useState(["", "", "", "", "", ""])
  const [timer, setTimer] = useState(105) // 1:45 in seconds
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleInputChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code]
      newCode[index] = value
      setCode(newCode)

      // Move to next input if value is entered
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus()
      }
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  return (
    <AuthLayout>
      <div className="text-center space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Verify Code</h1>
          <p className="text-gray-600">A 6- digit OTP sent to organansie@mail.com</p>
        </div>

        <div className="flex justify-center space-x-3">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              maxLength={1}
            />
          ))}
        </div>

        <Button size="lg" className="w-full bg-black text-white hover:bg-gray-800">
          Verify Code
        </Button>

        <div className="space-y-2">
          <p className="text-red-500 font-mono text-lg">{formatTime(timer)}</p>
          <p className="text-gray-600">
            Didn't Recieved?{" "}
            <Button variant="link" className="text-green-500 p-0 h-auto">
              Resend Code
            </Button>
          </p>
        </div>
      </div>
    </AuthLayout>
  )
}
