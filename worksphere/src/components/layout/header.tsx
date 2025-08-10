import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">W</span>
          </div>
          <span className="font-semibold text-lg">WorkSphere</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Services
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Find Work
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Resources
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/auth/login" className="text-gray-600 hover:text-gray-900">
            Login
          </Link>
          <Button asChild className="bg-black text-white hover:bg-gray-800">
            <Link href="/auth/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
