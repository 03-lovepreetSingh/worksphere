"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import {
  Sparkles,
  HelpCircle,
  CheckCircle,
  Edit,
  ImageIcon,
  Plus,
  Clock,
  MessageCircle,
  CheckSquare,
  List,
  File,
  X,
} from "lucide-react"

type ServiceTab = "overview" | "projects" | "pricing" | "portfolio" | "others"
type QuestionType = "answer-type" | "multiple-choice" | "checkbox" | "dropdown" | "file"

interface Question {
  id: string
  type: QuestionType
  questionText: string
  options?: string[] // For multiple-choice, checkbox, dropdown
  value?: string // For answer-type, file path for file type
  isSaved: boolean
}

interface AIPopupProps {
  isOpen: boolean
  onClose: () => void
  onGenerate: (description: string, keywords: string) => void
}

function AIPopup({ isOpen, onClose, onGenerate }: AIPopupProps) {
  const [description, setDescription] = useState("")
  const [keywords, setKeywords] = useState("")

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h3 className="text-lg font-semibold mb-4">AI Assistant</h3>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">DESCRIPTION</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter your description here"
              className="min-h-[80px]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">KEYWORDS</label>
            <Input value={keywords} onChange={(e) => setKeywords(e.target.value)} placeholder="Enter your keyword" />
          </div>

          <div className="text-sm text-gray-500">
            <p className="font-medium mb-1">SUGGESTION...</p>
            <p>
              Describe the service you're offering in a concise. This is crispus explains my self as a consectetur
              adipiscing elit. Suspendisse eu pellentesque turpis.
            </p>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <Button variant="outline" onClick={onClose} className="flex-1 bg-transparent">
            Keep
          </Button>
          <Button onClick={() => onGenerate(description, keywords)} className="flex-1 bg-black text-white">
            Generate
          </Button>
        </div>
      </div>
    </div>
  )
}

function QuestionTypeMenu({ onSelect, onClose }: { onSelect: (type: QuestionType) => void; onClose: () => void }) {
  return (
    <div className="absolute left-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
      <ul className="py-2">
        <li
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
          onClick={() => {
            onSelect("answer-type")
            onClose()
          }}
        >
          <MessageCircle className="w-4 h-4 text-gray-500" /> Answer Type
        </li>
        <li
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
          onClick={() => {
            onSelect("multiple-choice")
            onClose()
          }}
        >
          <CheckSquare className="w-4 h-4 text-gray-500" /> Multiple Choice
        </li>
        <li
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
          onClick={() => {
            onSelect("checkbox")
            onClose()
          }}
        >
          <CheckSquare className="w-4 h-4 text-gray-500" /> Check Box
        </li>
        <li
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
          onClick={() => {
            onSelect("dropdown")
            onClose()
          }}
        >
          <List className="w-4 h-4 text-gray-500" /> Drop Down
        </li>
        <li
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
          onClick={() => {
            onSelect("file")
            onClose()
          }}
        >
          <File className="w-4 h-4 text-gray-500" /> File
        </li>
      </ul>
    </div>
  )
}

interface PortfolioImage {
  src: string
  isCover?: boolean
  file?: File // Store the actual file object if needed for upload
}

export function ServiceCreationWorkflow() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("overview")
  const [tierMode, setTierMode] = useState(true) // true = 3 Tiers, false = 1 Tier
  const [showAIPopup, setShowAIPopup] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  // Form state - Overview
  const [serviceTitle, setServiceTitle] = useState("UI UX Designer")
  const [mainCategory, setMainCategory] = useState("Web Designer")
  const [subCategory, setSubCategory] = useState("")
  const [serviceDescription, setServiceDescription] = useState(
    "This is crispus explains my self as a consectetur adipiscing elit. Suspendisse eu pellentesque turpis. Vivamus a aliquam sapien, id euismod eros. Ut eget faucibus.",
  )

  // Form state - Portfolio
  const [portfolioImages, setPortfolioImages] = useState<PortfolioImage[]>([
    { src: "/images/freelancer-dashboard-add-services-portfolio-filled-grid.png", isCover: false },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Freelancer%20Dashbioard%20-%20Add%20Your%20Services-5-EQkq8w8w8KKmNNHXYfMBUch0DXFp48.png",
      isCover: false,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Freelancer%20Dashbioard%20-%20Add%20Your%20Services-5-EQkq8w8w8KKmNNHXYfMBUch0DXFp48.png",
      isCover: false,
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Freelancer%20Dashbioard%20-%20Add%20Your%20Services-5-EQkq8w8w8KKmNNHXYfMBUch0DXFp48.png",
      isCover: false,
    },
  ])
  const coverImageInputRef = useRef<HTMLInputElement>(null)
  const portfolioImageInputRef = useRef<HTMLInputElement>(null)

  // Form state - Others (Client Requirements)
  const [questions, setQuestions] = useState<Question[]>([])
  const [showAddQuestionTypeMenu, setShowAddQuestionTypeMenu] = useState(false)
  const [newQuestionText, setNewQuestionText] = useState("") // For new question input
  const [currentQuestionEditIndex, setCurrentQuestionEditIndex] = useState<number | null>(null) // For editing question text
  const [mcqOptions, setMcqOptions] = useState<string[]>([""]) // For MCQ/Checkbox/Dropdown options

  const tabs = [
    { id: "overview", label: "Overview", icon: "👁️" },
    { id: "projects", label: "Projects", icon: "📁" },
    { id: "pricing", label: "Pricing", icon: "💰" },
    { id: "portfolio", label: "Portfolio", icon: "📂" },
    { id: "others", label: "Others", icon: "📋" },
  ]

  const tiers = [
    { name: "Basic", color: "bg-yellow-200", textColor: "text-yellow-800" },
    { name: "Advanced", color: "bg-green-200", textColor: "text-green-800" },
    { name: "Premium", color: "bg-purple-200", textColor: "text-purple-800" },
  ]

  const getProgressText = () => {
    switch (activeTab) {
      case "overview":
        return `${currentStep}/3 Done` // Adjusted for 3 steps
      case "projects":
        return "1/5 Done"
      case "pricing":
        return "1/5 Done"
      case "portfolio":
        const uploadedImagesCount = portfolioImages.filter((img) => img.src !== "").length
        return `${uploadedImagesCount}/5 Done` // Example, assuming 5 is target
      case "others":
        const savedQuestionsCount = questions.filter((q) => q.isSaved).length
        return `${savedQuestionsCount}/3 Done` // Example, assuming 3 saved questions for progress
      default:
        return "0/0 Done"
    }
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, isCover = false) => {
    const files = e.target.files
    if (files && files.length > 0) {
      if (isCover) {
        setPortfolioImages((prev) => {
          const newImages = prev.filter((img) => !img.isCover)
          return [{ src: URL.createObjectURL(files[0]), isCover: true, file: files[0] }, ...newImages]
        })
      } else {
        const newImages = Array.from(files).map((file) => ({
          src: URL.createObjectURL(file),
          file: file,
          isCover: false,
        }))
        setPortfolioImages((prev) => {
          const currentNonCoverImages = prev.filter((img) => !img.isCover)
          return [...prev.filter((img) => img.isCover), ...currentNonCoverImages, ...newImages]
        })
      }
    }
  }

  const removePortfolioImage = (index: number) => {
    setPortfolioImages((prev) => prev.filter((_, i) => i !== index))
  }

  const addQuestion = (type: QuestionType) => {
    const newId = `q-${Date.now()}`
    const newQuestion: Question = {
      id: newId,
      type,
      questionText: "",
      isSaved: false,
    }
    if (type === "multiple-choice" || type === "checkbox" || type === "dropdown") {
      newQuestion.options = [""]
    }
    setQuestions((prev) => [...prev, newQuestion])
    setShowAddQuestionTypeMenu(false)
    setCurrentQuestionEditIndex(questions.length) // Automatically focus on the new question
  }

  const updateQuestionText = (index: number, text: string) => {
    setQuestions((prev) => {
      const updated = [...prev]
      updated[index] = { ...updated[index], questionText: text, isSaved: false } // Mark as unsaved on edit
      return updated
    })
  }

  const saveQuestion = (index: number) => {
    setQuestions((prev) => {
      const updated = [...prev]
      updated[index] = { ...updated[index], isSaved: true }
      return updated
    })
  }

  const removeQuestion = (id: string) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id))
  }

  const handleOptionChange = (qIndex: number, optIndex: number, value: string) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions]
      const updatedOptions = [...(updatedQuestions[qIndex].options || [])]
      updatedOptions[optIndex] = value
      updatedQuestions[qIndex].options = updatedOptions
      updatedQuestions[qIndex].isSaved = false
      return updatedQuestions
    })
  }

  const addOption = (qIndex: number) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions]
      updatedQuestions[qIndex].options = [...(updatedQuestions[qIndex].options || []), ""]
      updatedQuestions[qIndex].isSaved = false
      return updatedQuestions
    })
  }

  const removeOption = (qIndex: number, optIndex: number) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions]
      const updatedOptions = (updatedQuestions[qIndex].options || []).filter((_, i) => i !== optIndex)
      updatedQuestions[qIndex].options = updatedOptions
      updatedQuestions[qIndex].isSaved = false
      return updatedQuestions
    })
  }

  const handleFileQuestionUpload = (qIndex: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setQuestions((prevQuestions) => {
        const updated = [...prevQuestions]
        updated[qIndex].value = file.name
        updated[qIndex].isSaved = false
        return updated
      })
    }
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
          <Button variant="ghost" className="text-gray-500">
            Exit
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4 lg:py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 lg:mb-8">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-0">Add Your Services</h1>
            <div className="text-sm text-gray-500">
              {activeTab === "overview" && "Overview Details:"}
              {activeTab === "portfolio" && "Portfolio Details:"}
              {activeTab === "projects" && "Projects Details:"}
              {activeTab === "pricing" && "Pricing Details:"}
              {activeTab === "others" && "Others Details:"}
              <span className="font-medium ml-1">{getProgressText()}</span>
            </div>
          </div>

          {/* Tabs - Scrollable on mobile */}
          <div className="flex space-x-4 lg:space-x-8 mb-6 lg:mb-8 border-b border-gray-200 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as ServiceTab)}
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

          {/* Progress Bar */}
          <div className="w-full h-2 bg-gradient-to-r from-green-400 via-blue-500 via-purple-500 via-pink-500 to-yellow-500 rounded-full mb-6 lg:mb-8"></div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl p-4 lg:p-8 shadow-sm">
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                {currentStep === 1 && (
                  <div className="max-w-2xl mx-auto">
                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-500 mb-2">SERVICE TITLE</label>
                      <div className="relative">
                        <Input
                          value={serviceTitle}
                          onChange={(e) => setServiceTitle(e.target.value)}
                          placeholder="Describe the service you're offering in a concise, clear title."
                          className="pr-20"
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowAIPopup(true)}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-600"
                        >
                          <Sparkles className="w-4 h-4 mr-1" />
                          ASK AI
                        </Button>
                      </div>
                    </div>

                    <div className="text-center mt-8">
                      <Button size="lg" className="bg-black text-white px-12" onClick={() => setCurrentStep(2)}>
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="max-w-2xl mx-auto space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-2">SERVICE TITLE</label>
                      <div className="relative">
                        <Input value={serviceTitle} readOnly className="pr-16" />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center text-green-500">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          <span className="text-xs">Saved</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-2">MAIN CATEGORY</label>
                      <div className="relative">
                        <Input value={mainCategory} readOnly className="pr-16" />
                        <Button
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                        >
                          <Edit className="w-4 h-4" />
                          Edit
                        </Button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-2">SUB-CATEGORY</label>
                      <Select value={subCategory} onValueChange={setSubCategory}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Sub-Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ui-design">UI Design</SelectItem>
                          <SelectItem value="ux-design">UX Design</SelectItem>
                          <SelectItem value="web-design">Web Design</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="text-center mt-8">
                      <Button size="lg" className="bg-black text-white px-12" onClick={() => setCurrentStep(3)}>
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="max-w-2xl mx-auto space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-2">SUB-CATEGORY</label>
                      <Select value={subCategory} onValueChange={setSubCategory}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Sub-Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ui-design">UI Design</SelectItem>
                          <SelectItem value="ux-design">UX Design</SelectItem>
                          <SelectItem value="web-design">Web Design</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-2">WHAT'S INCLUDED</label>
                      <Input placeholder="Describe the service you're offering in a concise, clear title." />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-500 mb-2">DESCRIPTION</label>
                      <div className="relative">
                        <Textarea
                          value={serviceDescription}
                          onChange={(e) => setServiceDescription(e.target.value)}
                          className="min-h-[120px] pr-16"
                        />
                        <div className="absolute bottom-3 right-3 text-sm text-gray-400">102/240</div>
                      </div>
                    </div>

                    <div className="text-center mt-8">
                      <Button size="lg" className="bg-black text-white px-12" onClick={() => setActiveTab("projects")}>
                        Next
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Projects Tab */}
            {activeTab === "projects" && (
              <>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h2 className="text-lg lg:text-xl font-semibold text-gray-900">Client Requirements</h2>
                    <p className="text-gray-600 text-sm lg:text-base">Add your questions and requirements here.</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">1 Tier</span>
                    <Switch checked={tierMode} onChange={(e) => setTierMode(e.target.checked)} />
                    <span className="text-sm text-gray-600">3 Tiers</span>
                  </div>
                </div>

                {tierMode ? (
                  /* 3 Tiers Layout */
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                    {tiers.map((tier, index) => (
                      <div key={tier.name} className="space-y-4">
                        <div className={`${tier.color} ${tier.textColor} text-center py-3 rounded-lg font-medium`}>
                          {tier.name}
                        </div>

                        <div className="space-y-4">
                          <div className="relative">
                            <Textarea
                              placeholder="Get UI UX Design in Webpage in just one week"
                              className="min-h-[80px] pr-16"
                              defaultValue={index === 1 ? "Get UI UX Design in Webpage in just one week" : ""}
                            />
                            {index === 1 && (
                              <div className="absolute top-3 right-3 flex items-center text-green-500">
                                <CheckCircle className="w-4 h-4 mr-1" />
                                <span className="text-xs">Saved</span>
                              </div>
                            )}
                            {index === 1 && (
                              <Button variant="ghost" size="sm" className="absolute bottom-3 right-3 text-gray-500">
                                <Edit className="w-4 h-4" />
                                Edit
                              </Button>
                            )}
                          </div>

                          <div className="relative">
                            <Textarea placeholder="Write Description Here" className="min-h-[80px] pr-12" />
                            <HelpCircle className="absolute top-3 right-3 w-4 h-4 text-blue-500" />
                            <div className="absolute bottom-3 right-3 text-sm text-gray-400">102/240</div>
                          </div>

                          <div className="relative">
                            <Input placeholder="Enter Number of Revisions" className="pr-12" />
                            <HelpCircle className="absolute top-1/2 right-3 transform -translate-y-1/2 w-4 h-4 text-blue-500" />
                          </div>

                          <div className="relative">
                            <Input placeholder="Enter Your Amount" className="pl-8" />
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                          </div>

                          <div className="flex items-center space-x-2">
                            <input type="checkbox" className="rounded" />
                            <span className="text-sm text-gray-600">Source File</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  /* 1 Tier Layout */
                  <div className="max-w-md mx-auto lg:mx-0 space-y-4">
                    <Input placeholder="Write custom title here" />
                    <Input placeholder="Write custom title here" />
                    <div className="relative">
                      <Input placeholder="Enter Your Amount" className="pl-8" />
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-gray-600">Source File</span>
                    </div>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <Button size="lg" className="bg-black text-white px-12" onClick={() => setActiveTab("pricing")}>
                    Continue
                  </Button>
                </div>
              </>
            )}

            {/* Pricing Tab */}
            {activeTab === "pricing" && (
              <div className="max-w-2xl mx-auto space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Additional Charges</h2>
                  <p className="text-gray-600">Add your questions and requirements here.</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">FAST DELIVERY</h3>
                      <div className="relative mt-2">
                        <Input placeholder="23/Hr" className="pl-8" />
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 cursor-pointer">
                    <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center">
                      <Plus className="w-4 h-4 text-gray-400" />
                    </div>
                    <span className="font-medium text-gray-700">ADDITIONAL REVISION</span>
                  </div>

                  <div className="flex items-center space-x-4 cursor-pointer">
                    <div className="w-8 h-8 border-2 border-gray-300 rounded-full flex items-center justify-center">
                      <Plus className="w-4 h-4 text-gray-400" />
                    </div>
                    <span className="font-medium text-gray-700">EXTRA CHANGES</span>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <Button size="lg" className="bg-black text-white px-12" onClick={() => setActiveTab("portfolio")}>
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {/* Portfolio Tab */}
            {activeTab === "portfolio" && (
              <div className="max-w-2xl mx-auto space-y-8">
                <div className="text-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Add Images For Your Portfolio</h2>
                  <p className="text-gray-600">Drag to change cover image or upload from Gallery</p>
                </div>

                {/* Cover Image Section */}
                <div
                  className="relative aspect-video rounded-lg overflow-hidden border-2 border-dashed border-gray-300 hover:border-blue-400 cursor-pointer flex items-center justify-center"
                  onClick={() => coverImageInputRef.current?.click()}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e, true)}
                    className="hidden"
                    id="cover-upload"
                    ref={coverImageInputRef}
                  />
                  {portfolioImages.find((img) => img.isCover)?.src ? (
                    <>
                      <img
                        src={portfolioImages.find((img) => img.isCover)?.src || "/placeholder.svg"}
                        alt="Cover Image"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-lg font-medium">
                        Drag to change cover image
                      </div>
                    </>
                  ) : (
                    <div className="text-center p-6">
                      <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Click to upload Cover Image</p>
                    </div>
                  )}
                </div>

                {/* Other Portfolio Images Grid */}
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">ADD MORE IMAGES</label>
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                    {Array.from({ length: 4 }).map((_, index) => {
                      const image = portfolioImages.filter((img) => !img.isCover)[index]
                      return (
                        <div
                          key={index}
                          className="relative aspect-square rounded-lg overflow-hidden border border-gray-200 flex items-center justify-center group"
                        >
                          {image ? (
                            <>
                              <img
                                src={image.src || "/placeholder.svg"}
                                alt={`Portfolio ${index + 1}`}
                                className="w-full h-full object-cover"
                              />
                              <Button
                                variant="destructive"
                                size="icon"
                                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => removePortfolioImage(index)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </>
                          ) : (
                            <label
                              htmlFor="portfolio-image-upload"
                              className="cursor-pointer p-4 text-center w-full h-full flex flex-col items-center justify-center"
                            >
                              <ImageIcon className="w-10 h-10 text-gray-400" />
                              <span className="text-sm text-gray-500 mt-2">Upload Image</span>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e)}
                                className="hidden"
                                id="portfolio-image-upload"
                                ref={portfolioImageInputRef}
                              />
                            </label>
                          )}
                        </div>
                      )
                    })}
                  </div>
                  <p className="text-sm text-gray-400 mt-4 text-center">Choose At Least 3 Images</p>
                  <div className="text-center mt-4">
                    <Button
                      variant="outline"
                      className="text-blue-500 border-blue-500 hover:bg-blue-50 bg-transparent"
                      onClick={() => portfolioImageInputRef.current?.click()}
                    >
                      Browse Gallery
                    </Button>
                  </div>
                </div>

                <div className="text-center mt-8">
                  <Button size="lg" className="bg-black text-white px-12" onClick={() => setActiveTab("others")}>
                    Continue
                  </Button>
                </div>
              </div>
            )}

            {/* Others Tab */}
            {activeTab === "others" && (
              <div className="max-w-2xl mx-auto space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">Client Requirements</h2>
                  <p className="text-gray-600">Add your questions and requirements here.</p>
                </div>

                {questions.map((q, index) => (
                  <div key={q.id} className="relative border border-gray-200 rounded-lg p-4 space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="block text-sm font-medium text-gray-500">QUESTION {index + 1}</label>
                      <div className="flex items-center gap-2">
                        {q.isSaved && (
                          <div className="flex items-center text-green-500">
                            <CheckCircle className="w-4 h-4 mr-1" />
                            <span className="text-xs">Saved</span>
                          </div>
                        )}
                        <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600">
                          <Sparkles className="w-4 h-4 mr-1" />
                          Need Help?
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-500 hover:text-red-600"
                          onClick={() => removeQuestion(q.id)}
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {q.type === "answer-type" && (
                      <Textarea
                        placeholder="Ask your first question?"
                        value={q.questionText}
                        onChange={(e) => updateQuestionText(index, e.target.value)}
                        onBlur={() => saveQuestion(index)}
                        className="min-h-[80px]"
                      />
                    )}

                    {q.type === "multiple-choice" && (
                      <div>
                        <Input
                          placeholder="Ask your first question?"
                          value={q.questionText}
                          onChange={(e) => updateQuestionText(index, e.target.value)}
                          onBlur={() => saveQuestion(index)}
                          className="mb-2"
                        />
                        {q.options?.map((option, optIndex) => (
                          <div key={optIndex} className="flex items-center gap-2 mb-2">
                            <span className="font-medium text-gray-700">{String.fromCharCode(65 + optIndex)}.</span>
                            <Input
                              placeholder={`Enter Your Option ${String.fromCharCode(65 + optIndex)}`}
                              value={option}
                              onChange={(e) => handleOptionChange(index, optIndex, e.target.value)}
                              onBlur={() => saveQuestion(index)}
                            />
                            {q.options && q.options.length > 1 && (
                              <Button variant="ghost" size="sm" onClick={() => removeOption(index, optIndex)}>
                                <X className="w-4 h-4 text-red-500" />
                              </Button>
                            )}
                          </div>
                        ))}
                        <Button variant="link" size="sm" className="p-0 h-auto" onClick={() => addOption(index)}>
                          Add More Options
                        </Button>
                      </div>
                    )}

                    {q.type === "checkbox" && (
                      <div>
                        <Input
                          placeholder="Ask your question (checkboxes)"
                          value={q.questionText}
                          onChange={(e) => updateQuestionText(index, e.target.value)}
                          onBlur={() => saveQuestion(index)}
                          className="mb-2"
                        />
                        {q.options?.map((option, optIndex) => (
                          <div key={optIndex} className="flex items-center gap-2 mb-2">
                            <input type="checkbox" className="rounded" />
                            <Input
                              placeholder={`Option ${optIndex + 1}`}
                              value={option}
                              onChange={(e) => handleOptionChange(index, optIndex, e.target.value)}
                              onBlur={() => saveQuestion(index)}
                            />
                            {q.options && q.options.length > 1 && (
                              <Button variant="ghost" size="sm" onClick={() => removeOption(index, optIndex)}>
                                <X className="w-4 h-4 text-red-500" />
                              </Button>
                            )}
                          </div>
                        ))}
                        <Button variant="link" size="sm" className="p-0 h-auto" onClick={() => addOption(index)}>
                          Add More Options
                        </Button>
                      </div>
                    )}

                    {q.type === "dropdown" && (
                      <div>
                        <Input
                          placeholder="Ask your question (dropdown)"
                          value={q.questionText}
                          onChange={(e) => updateQuestionText(index, e.target.value)}
                          onBlur={() => saveQuestion(index)}
                          className="mb-2"
                        />
                        <Select
                          onValueChange={(value) => {
                            /* handle selection */
                          }}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            {q.options?.map((option, optIndex) => (
                              <SelectItem key={optIndex} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                            <Button
                              variant="link"
                              size="sm"
                              className="p-2 h-auto w-full text-left"
                              onClick={() => addOption(index)}
                            >
                              <Plus className="w-3 h-3 mr-1" /> Add Option
                            </Button>
                          </SelectContent>
                        </Select>
                        {q.options?.map((option, optIndex) => (
                          <div key={optIndex} className="flex items-center gap-2 mt-2">
                            <Input
                              placeholder={`Option ${optIndex + 1}`}
                              value={option}
                              onChange={(e) => handleOptionChange(index, optIndex, e.target.value)}
                              onBlur={() => saveQuestion(index)}
                            />
                            {q.options && q.options.length > 1 && (
                              <Button variant="ghost" size="sm" onClick={() => removeOption(index, optIndex)}>
                                <X className="w-4 h-4 text-red-500" />
                              </Button>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {q.type === "file" && (
                      <div>
                        <Input
                          placeholder="Ask to upload a file"
                          value={q.questionText}
                          onChange={(e) => updateQuestionText(index, e.target.value)}
                          onBlur={() => saveQuestion(index)}
                          className="mb-2"
                        />
                        <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center hover:border-gray-300 transition-colors">
                          <input
                            type="file"
                            onChange={(e) => handleFileQuestionUpload(index, e)}
                            className="hidden"
                            id={`file-upload-${q.id}`}
                          />
                          <label
                            htmlFor={`file-upload-${q.id}`}
                            className="cursor-pointer flex items-center justify-center"
                          >
                            <File className="w-6 h-6 text-gray-400 mr-2" />
                            <span className="text-gray-600">{q.value || "Click here to upload Your Document"}</span>
                          </label>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                <div className="relative">
                  <Button
                    variant="ghost"
                    className="text-blue-600"
                    onClick={() => setShowAddQuestionTypeMenu(!showAddQuestionTypeMenu)}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    {questions.length === 0 ? "ADD YOUR QUESTIONS" : "ADD NEXT QUESTION"}
                  </Button>
                  {showAddQuestionTypeMenu && (
                    <QuestionTypeMenu onSelect={addQuestion} onClose={() => setShowAddQuestionTypeMenu(false)} />
                  )}
                </div>

                <div className="text-center mt-8">
                  <Button size="lg" className="bg-black text-white px-12">
                    Complete & Preview
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* AI Popup */}
      <AIPopup
        isOpen={showAIPopup}
        onClose={() => setShowAIPopup(false)}
        onGenerate={(description, keywords) => {
          setServiceDescription(description)
          setShowAIPopup(false)
        }}
      />
    </div>
  )
}
