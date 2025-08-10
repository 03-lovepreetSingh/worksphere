"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { OnboardingLayout } from "./onboarding-layout"
import { Upload } from "lucide-react"
import { useRouter } from "next/navigation"

export function ProfileImageStep() {
  const router = useRouter()
  const [profileImage, setProfileImage] = useState<string | null>(null)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [showVerification, setShowVerification] = useState(false)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setProfileImage("My Profile.jpg")
    }
  }

  const handlePhoneSubmit = () => {
    if (phoneNumber) {
      setShowVerification(true)
    }
  }

  return (
    <OnboardingLayout step="4/5" title="Add profile Image and verify your number">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">ADD PROFILE PHOTO</label>
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:border-gray-300 transition-colors">
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="profile-upload" />
            <label htmlFor="profile-upload" className="cursor-pointer">
              <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
              <span className="text-gray-600">
                {profileImage ? profileImage : "Click here to upload Profile image"}
              </span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">OPTIONAL</label>
          <div className="relative">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">+01</div>
            <Input
              type="tel"
              placeholder="Enter Your Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="pl-12"
            />
          </div>
        </div>

        {showVerification && (
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Enter Verification code</label>
            <div className="flex gap-4">
              <Button variant="outline" size="lg" className="flex-1 bg-transparent">
                Verify Code
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Didn't Recieved? <button className="text-green-500 hover:text-green-600">Resend Code</button>
            </p>
          </div>
        )}

        <div className="flex gap-4 pt-8">
          <Button
            variant="outline"
            size="lg"
            className="flex-1 bg-transparent"
            onClick={() => router.push("/onboarding/address")}
          >
            Back
          </Button>
          <Button
            size="lg"
            className="flex-1 bg-black text-white"
            onClick={showVerification ? () => router.push("/onboarding/resume") : handlePhoneSubmit}
          >
            {showVerification ? "Next" : "Next"}
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  )
}
