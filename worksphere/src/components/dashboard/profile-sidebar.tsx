import Image from "next/image"

export function ProfileSidebar() {
  return (
    <div className="w-full lg:w-80 bg-white rounded-2xl p-4 lg:p-6 shadow-sm">
      {/* Profile Header */}
      <div className="text-center mb-4 lg:mb-6">
        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-200 rounded-full mx-auto mb-3 lg:mb-4 overflow-hidden">
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="Profile"
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-lg lg:text-xl font-bold text-gray-900">Cyrus Roshan</h2>
        <div className="flex items-center justify-center mt-2">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-sm text-gray-600">Available for work</span>
        </div>
      </div>

      {/* Work Experience */}
      <div className="mb-4 lg:mb-6">
        <h3 className="text-xs lg:text-sm font-medium text-gray-500 mb-2 lg:mb-3">WORK EXPERIENCE</h3>
        <div>
          <h4 className="font-medium text-gray-900 text-sm lg:text-base">Frontend Web Developer</h4>
          <p className="text-xs lg:text-sm text-green-500">Levitating Elephant Technologies Pvt Ltd</p>
          <p className="text-xs lg:text-sm text-gray-500">June 2022 - July 2023</p>
        </div>
      </div>

      {/* Education */}
      <div className="mb-4 lg:mb-6">
        <h3 className="text-xs lg:text-sm font-medium text-gray-500 mb-2 lg:mb-3">EDUCATION</h3>
        <div>
          <h4 className="font-medium text-gray-900 text-sm lg:text-base">Delhi University</h4>
          <p className="text-xs lg:text-sm text-green-500">BA Hons Design</p>
          <p className="text-xs lg:text-sm text-gray-500">June 2022 - July 2023</p>
        </div>
      </div>

      {/* Skills */}
      <div className="mb-4 lg:mb-6">
        <h3 className="text-xs lg:text-sm font-medium text-gray-500 mb-2 lg:mb-3">SKILLS</h3>
        <div className="flex flex-wrap gap-1 lg:gap-2">
          {["Prototyping", "Development", "Wireframing", "Prototyping"].map((skill, index) => (
            <span
              key={index}
              className="px-2 lg:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs lg:text-sm border"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Location */}
      <div className="mb-4 lg:mb-6">
        <h3 className="text-xs lg:text-sm font-medium text-gray-500 mb-2 lg:mb-3">LOCATION</h3>
        <p className="text-gray-700 text-sm lg:text-base">California, CA, USA</p>
      </div>

      {/* Portfolio Website */}
      <div className="mb-4 lg:mb-6">
        <h3 className="text-xs lg:text-sm font-medium text-gray-500 mb-2 lg:mb-3">PORTFOLIO WEBSITE</h3>
        <p className="text-gray-700 text-sm lg:text-base break-all">www.vivekmehta.design</p>
      </div>

      {/* Instagram */}
      <div className="mb-4 lg:mb-6">
        <h3 className="text-xs lg:text-sm font-medium text-gray-500 mb-2 lg:mb-3">INSTAGRAM</h3>
        <p className="text-gray-700 text-sm lg:text-base">@designerhub</p>
      </div>

      {/* Resume */}
      <div>
        <h3 className="text-xs lg:text-sm font-medium text-gray-500 mb-2 lg:mb-3">RESUME</h3>
        <div className="flex items-center text-gray-700">
          <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
          </svg>
          <span className="text-sm lg:text-base">resume.pdf</span>
        </div>
      </div>
    </div>
  )
}
