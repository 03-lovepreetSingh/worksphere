"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { OnboardingLayout } from "./onboarding-layout"
import { FileText } from "lucide-react"
import { useRouter } from "next/navigation"

export function ResumeStep() {
  const router = useRouter()
  const [resume, setResume] = useState<string | null>(null)
  const [linkedinProfile, setLinkedinProfile] = useState("")

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setResume("Myresume.pdf")
    }
  }

  return (
    <OnboardingLayout step="5/5" title="Almost Done! Add your Resume">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">ADD YOUR RESUME</label>
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:border-gray-300 transition-colors">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeUpload}
              className="hidden"
              id="resume-upload"
            />
            <label htmlFor="resume-upload" className="cursor-pointer flex items-center justify-center">
              <FileText className="w-6 h-6 text-gray-400 mr-2" />
              <span className="text-gray-600">{resume ? resume : "Click here to upload Your Resume"}</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">ADD LINKEDIN PROFILE</label>
          <Input
            placeholder="Add your profile Link Here"
            value={linkedinProfile}
            onChange={(e) => setLinkedinProfile(e.target.value)}
          />
        </div>

        <div className="flex gap-4 pt-8">
          <Button
            variant="outline"
            size="lg"
            className="flex-1 bg-transparent"
            onClick={() => router.push("/onboarding/profile-image")}
          >
            Back
          </Button>
          <Button
            size="lg"
            className="flex-1 bg-black text-white"
            onClick={() => router.push("/onboarding/profile-method")}
          >
            Yay! Let's Go To Workspace
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  )
}
