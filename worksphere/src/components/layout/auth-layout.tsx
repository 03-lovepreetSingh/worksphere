import type React from "react"
import Link from "next/link"

interface AuthLayoutProps {
  children: React.ReactNode
  showClientLink?: boolean
}

export function AuthLayout({ children, showClientLink = true }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {showClientLink && (
        <div className="w-full p-4 flex justify-end">
          <div className="text-gray-600">
            Want to Hire?{" "}
            <Link href="/auth/client" className="text-green-500 hover:text-green-600">
              Join As Client
            </Link>
          </div>
        </div>
      )}

      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  )
}
