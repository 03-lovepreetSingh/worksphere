"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { OnboardingLayout } from "./onboarding-layout"
import { useRouter } from "next/navigation"

export function AddressStep() {
  const router = useRouter()
  const [isPublic, setIsPublic] = useState(true)

  return (
    <OnboardingLayout step="3/5" title="Your Address Details">
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-6">
          <span className="text-gray-600">Private</span>
          <Switch checked={isPublic} onChange={(e) => setIsPublic(e.target.checked)} />
          <span className="text-gray-600">Public</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">SELECT COUNTRY</label>
            <Select defaultValue="USA">
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">STATE</label>
            <Select defaultValue="USA">
              <option value="USA">USA</option>
              <option value="California">California</option>
              <option value="Texas">Texas</option>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">CITY</label>
            <Select defaultValue="USA">
              <option value="USA">USA</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="San Francisco">San Francisco</option>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">ZIP POSTAL CODE</label>
            <Input placeholder="121341" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500 mb-2">STREET ADDRESS</label>
          <Input placeholder="Enter Address Line 1" />
        </div>

        <div className="flex gap-4 pt-8">
          <Button
            variant="outline"
            size="lg"
            className="flex-1 bg-transparent"
            onClick={() => router.push("/onboarding/skills")}
          >
            Back
          </Button>
          <Button
            size="lg"
            className="flex-1 bg-black text-white"
            onClick={() => router.push("/onboarding/profile-image")}
          >
            Next
          </Button>
        </div>
      </div>
    </OnboardingLayout>
  )
}
