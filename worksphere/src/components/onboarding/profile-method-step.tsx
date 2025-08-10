"use client"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Edit, Info } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function ProfileMethodStep() {
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
              <h1 className="text-4xl font-bold text-gray-900 mb-4">How Would You Like to Tell About Yourself?</h1>
              <p className="text-lg text-gray-600">
                Unlock the full potential of your freelance career with WorkSphere. Begin a rewarding journey where your
                skills are valued and your professional growth is inevitable. Start now and pave the path to your
                success.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <FileText className="w-6 h-6 text-gray-400 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-500 text-sm mb-1">IMPORT FROM YOUR RESUME</h3>
                      <p className="text-gray-600 underline">Click here to upload Your Resume</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => router.push("/onboarding/complete")}
              >
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <Edit className="w-6 h-6 text-blue-500 mr-3" />
                    <div>
                      <h3 className="font-medium text-gray-500 text-sm mb-1">FILL OUT MANUALLY</h3>
                      <p className="text-blue-500 flex items-center">
                        Click here
                        <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                        </svg>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Side - Pro Tip */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <Info className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">PRO TIP:</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Unlock the full potential of your freelance career with WorkSphere. Begin a rewarding journey where your
              skills are valued and your professional growth is inevitable. Start now and pave the path to your success.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
