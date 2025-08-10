"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { OnboardingLayout } from "./onboarding-layout"
import { X } from "lucide-react"
import { useRouter } from "next/navigation"

export function SkillsStep() {
  const router = useRouter()
  const [skills, setSkills] = useState(["UI UX DESIGN", "UI UX DESIGN", "UI UX DESIGN"])
  const [newSkill, setNewSkill] = useState("")

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill("")
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addSkill()
    }
  }

  return (
    <OnboardingLayout step="2/5" title="What are your skills?">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">SKILLS</label>
          <div className="border border-gray-200 rounded-lg p-4 min-h-[120px]">
            <div className="flex flex-wrap gap-2 mb-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {skill}
                  <button onClick={() => removeSkill(skill)} className="ml-2 text-gray-500 hover:text-gray-700">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              ))}
            </div>
            <Input
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a skill and press Enter"
              className="border-0 shadow-none p-0 focus-visible:ring-0"
            />
          </div>
        </div>

        <div className="flex gap-4 pt-8">
          <Button
            variant="outline"
            size="lg"
            className="flex-1 bg-transparent"
            onClick={() => router.push("/onboarding/profile-setup")}
          >
            Back
          </Button>
          <Button size="lg" className="flex-1 bg-black text-white" onClick={() => router.push("/onboarding/address")}>
            Next
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  )
}
