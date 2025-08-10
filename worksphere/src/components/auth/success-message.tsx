"use client"

import { useEffect } from "react"
import { CheckCircle } from "lucide-react"

interface SuccessMessageProps {
  title: string
  message: string
  redirectText: string
  onRedirect?: () => void
}

export function SuccessMessage({ title, message, redirectText, onRedirect }: SuccessMessageProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRedirect?.()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onRedirect])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl p-8 text-center shadow-lg border-4 border-transparent bg-gradient-to-r from-green-400 via-blue-500 via-purple-500 via-pink-500 to-yellow-500 bg-clip-border">
          <div className="bg-white rounded-xl p-8 -m-1">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-4">{title}</h1>

            <p className="text-gray-600 mb-8 leading-relaxed">
              <span className="font-semibold">Congratulations!</span> {message}
            </p>

            <p className="text-green-500 font-medium">{redirectText}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
