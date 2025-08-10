"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AuthLayout } from "@/components/layout/auth-layout"
import { useRouter } from "next/navigation"

export function UserTypeSelection() {
  const [selectedType, setSelectedType] = useState<"client" | "freelancer" | null>(null)
  const router = useRouter()

  return (
    <AuthLayout showClientLink={false}>
      <div className="text-center space-y-8">
        <div className="absolute top-4 right-4">
          <Button variant="ghost" className="text-gray-500">
            Exit
          </Button>
        </div>

        <h1 className="text-3xl font-bold text-gray-900">Join as a Client or Freelancer?</h1>

        <div className="grid md:grid-cols-2 gap-6">
          <Card
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedType === "client" ? "ring-2 ring-orange-500" : ""
            }`}
            onClick={() => setSelectedType("client")}
          >
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Client</h2>
              <p className="text-gray-600">I am a Client, want to hire someone.</p>
            </CardContent>
          </Card>

          <Card
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedType === "freelancer" ? "ring-2 ring-orange-500" : ""
            }`}
            onClick={() => setSelectedType("freelancer")}
          >
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Freelancer</h2>
              <p className="text-gray-600">I am a Freelancer, looking for some gigs and work.</p>
            </CardContent>
          </Card>
        </div>

        <Button
          size="lg"
          className="w-full max-w-sm bg-black text-white hover:bg-gray-800"
          disabled={!selectedType}
          onClick={() => {
            if (selectedType === "freelancer") {
              router.push("/onboarding/skills")
            } else {
              router.push("/auth/signup")
            }
          }}
        >
          Apply As {selectedType === "freelancer" ? "Freelancer" : "Client"}
        </Button>

        <p className="text-gray-600">
          Already Have an Account?{" "}
          <Button variant="link" className="text-green-500 p-0">
            Login
          </Button>
        </p>
      </div>
    </AuthLayout>
  )
}
