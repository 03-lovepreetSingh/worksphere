"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { ProfileSidebar } from "./profile-sidebar"
import { CheckCircle, Plus, X, Sparkles, Menu } from "lucide-react"

type TabType = "about" | "social" | "education" | "work-experience" | "others"

export function ProfileCompletion() {
  const [activeTab, setActiveTab] = useState<TabType>("about")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [jobRole, setJobRole] = useState("UI UX Designer")
  const [jobDescription, setJobDescription] = useState(
    "This is crispus explains my self as a consectetur adipiscing elit. Suspendisse eu pellentesque turpis. Vivamus a aliquam sapien, id euismod eros. Ut eget faucibus.",
  )
  const [tools, setTools] = useState(["FIGMA", "ADOBE XD"])
  const [newTool, setNewTool] = useState("")

  const tabs = [
    { id: "about", label: "About", icon: "👤" },
    { id: "social", label: "Social", icon: "🔗" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "work-experience", label: "Work Experience", icon: "💼" },
    { id: "others", label: "Others", icon: "📋" },
  ]

  const addTool = () => {
    if (newTool.trim() && !tools.includes(newTool.trim())) {
      setTools([...tools, newTool.trim()])
      setNewTool("")
    }
  }

  const removeTool = (toolToRemove: string) => {
    setTools(tools.filter((tool) => tool !== toolToRemove))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="font-semibold text-lg">WorkSphere</span>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu className="w-5 h-5" />
            </Button>
            <Button variant="ghost" className="text-gray-500">
              Exit
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 lg:py-8">
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4 lg:gap-8 max-w-7xl mx-auto">
          {/* Mobile Sidebar Toggle */}
          <div className={`lg:hidden ${sidebarOpen ? "block" : "hidden"} mb-4`}>
            <ProfileSidebar />
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <ProfileSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-4 lg:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 lg:mb-8">
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-0">Complete Your Profile</h1>
              <div className="text-sm text-gray-500">
                Overview Details: <span className="font-medium">1/3 Done</span>
              </div>
            </div>

            {/* Tabs - Scrollable on mobile */}
            <div className="flex space-x-4 lg:space-x-8 mb-6 lg:mb-8 border-b border-gray-200 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`pb-4 px-1 text-sm font-medium transition-colors relative whitespace-nowrap ${
                    activeTab === tab.id
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="space-y-4 lg:space-y-6">
              {activeTab === "about" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">ENTER YOUR JOB ROLE</label>
                    <div className="relative">
                      <Input value={jobRole} onChange={(e) => setJobRole(e.target.value)} className="pr-16" />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center text-green-500">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        <span className="text-xs">Saved</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <label className="block text-sm font-medium text-gray-500 mb-2 sm:mb-0">
                        ENTER YOUR JOB DESCRIPTION
                      </label>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-500 hover:text-blue-600 self-start sm:self-auto"
                      >
                        <Sparkles className="w-4 h-4 mr-1" />
                        ASK AI
                      </Button>
                    </div>
                    <Textarea
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                      className="min-h-[100px] lg:min-h-[120px]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">ADD TOOLS</label>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {tools.map((tool, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                          >
                            {tool}
                            <button onClick={() => removeTool(tool)} className="ml-2 text-blue-500 hover:text-blue-700">
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <Input
                          value={newTool}
                          onChange={(e) => setNewTool(e.target.value)}
                          placeholder="Add a tool"
                          className="flex-1"
                          onKeyPress={(e) => e.key === "Enter" && addTool()}
                        />
                        <Button onClick={addTool} size="sm" className="w-full sm:w-auto">
                          Add
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 lg:pt-6">
                    <Button size="lg" className="bg-black text-white w-full sm:w-auto">
                      Continue
                    </Button>
                  </div>
                </>
              )}

              {activeTab === "social" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-500 mb-2">ADD PORTFOLIO WEBSITE</label>
                    <Input placeholder="Add your profile Link Here" />
                  </div>

                  <div>
                    <Button variant="ghost" className="text-gray-600 mb-4">
                      <Plus className="w-4 h-4 mr-2" />
                      ADD MORE LINKS
                    </Button>
                    <div className="flex space-x-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm font-bold">in</span>
                      </div>
                      <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">📷</span>
                      </div>
                      <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                        <span className="text-white text-sm">𝕏</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 lg:pt-6">
                    <Button size="lg" className="bg-black text-white w-full sm:w-auto">
                      Next
                    </Button>
                  </div>
                </>
              )}

              {activeTab === "education" && (
                <>
                  <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">
                    Education Requirements
                  </h2>

                  <div className="bg-gray-50 rounded-lg p-4 mb-4 lg:mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-200 rounded-full flex-shrink-0"></div>
                      <div className="min-w-0">
                        <h3 className="font-medium text-gray-900 text-sm lg:text-base">Delhi University</h3>
                        <p className="text-sm text-green-500">BA Hons Design</p>
                        <p className="text-sm text-gray-500">June 2022 - July 2023</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-2">SCHOOL*</label>
                      <div className="relative">
                        <Input value="Delhi University" className="pr-16" />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center text-green-500">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          <span className="text-xs">Saved</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-2">DEGREE</label>
                      <Select placeholder="Select Degree">
                        <option value="ba">BA Hons Design</option>
                        <option value="bsc">BSc Computer Science</option>
                        <option value="btech">BTech</option>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-2">STARTING YEAR</label>
                        <Select placeholder="Select Year">
                          <option value="2020">2020</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-2">ENDING YEAR</label>
                        <Select placeholder="Select Year">
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Button variant="ghost" className="text-blue-600">
                    <Plus className="w-4 h-4 mr-2" />
                    ADD MORE EDUCATION
                  </Button>

                  <div className="pt-4 lg:pt-6">
                    <Button size="lg" className="bg-black text-white w-full sm:w-auto">
                      Next
                    </Button>
                  </div>
                </>
              )}

              {activeTab === "work-experience" && (
                <>
                  <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">
                    Work Experience Requirements
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-2">ADD YOUR PREVIOUS COMPANY</label>
                      <Input placeholder="Enter The Name" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-2">SELECT YOUR ROLE</label>
                      <Select placeholder="Select Degree">
                        <option value="frontend">Frontend Developer</option>
                        <option value="backend">Backend Developer</option>
                        <option value="fullstack">Full Stack Developer</option>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-2">STARTING YEAR</label>
                        <Select placeholder="Select the date">
                          <option value="2020">2020</option>
                          <option value="2021">2021</option>
                          <option value="2022">2022</option>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-500 mb-2">ENDING YEAR</label>
                        <Select placeholder="Select the date">
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="present">Present</option>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-2">
                        ABOUT DESCRIPTION (OPTIONAL)
                      </label>
                      <Textarea placeholder="Add Your Description" className="min-h-[100px] lg:min-h-[120px]" />
                      <div className="text-right text-sm text-gray-400 mt-1">102/240</div>
                    </div>
                  </div>

                  <div className="pt-4 lg:pt-6">
                    <Button size="lg" className="bg-black text-white w-full sm:w-auto">
                      Next
                    </Button>
                  </div>
                </>
              )}

              {activeTab === "others" && (
                <>
                  <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Other Requirements</h2>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="font-medium text-gray-900">Hindi</h3>
                        <p className="text-sm text-green-500">Native or Bilingual</p>
                      </div>
                    </div>

                    <Button variant="ghost" className="text-blue-600">
                      <Plus className="w-4 h-4 mr-2" />
                      ADD MORE LANGUAGE
                    </Button>
                  </div>

                  <div className="pt-4 lg:pt-6">
                    <Button size="lg" className="bg-black text-white w-full sm:w-auto">
                      Next
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
