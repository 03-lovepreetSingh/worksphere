import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Users, Zap, CheckCircle, MessageSquare, Award, Globe } from "lucide-react"
import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/home/hero-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />

      {/* Platform Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6" />
            <span className="font-medium">Upwork</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6" />
            <span className="font-medium">Fiverr</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6" />
            <span className="font-medium">Chronicle</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6" />
            <span className="font-medium">Catalog</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6" />
            <span className="font-medium">Quickstart</span>
          </div>
        </div>
      </section>

      {/* Expert Solutions Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/placeholder.svg?height=500&width=400"
              alt="Mobile app interface"
              width={400}
              height={500}
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Expert Solutions, a Click Away</h2>
            <p className="text-lg text-gray-600 mb-8">
              Access a global network of verified professionals ready to tackle your projects. Our decentralized
              platform ensures fair pricing, transparent reviews, and secure payments through blockchain technology.
            </p>
            <Button className="bg-black text-white hover:bg-gray-800">Explore Experts</Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The WorkSphere Process. Simplified for Success
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined workflow ensures every project runs smoothly from start to finish
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <MessageSquare className="w-8 h-8" />,
                title: "Post Your Project",
                description: "Describe your needs and set your budget",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Get Proposals",
                description: "Receive bids from qualified freelancers",
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Choose & Work",
                description: "Select the best fit and start collaborating",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Pay Securely",
                description: "Release payment when satisfied with results",
              },
            ].map((step, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Our Freelancers Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "Web Development",
            "Mobile Apps",
            "UI/UX Design",
            "Digital Marketing",
            "Content Writing",
            "Data Science",
            "Blockchain Development",
            "Video Editing",
          ].map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <Image
                  src={`/placeholder.svg?height=200&width=300&query=${service} service illustration`}
                  alt={service}
                  width={300}
                  height={200}
                  className="rounded-lg mb-4 w-full object-cover"
                />
                <h3 className="font-semibold text-lg mb-2">{service}</h3>
                <p className="text-gray-600 text-sm">Starting from $25</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Take the Next Step with WorkSphere</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers through our decentralized work platform.
          </p>
          <Button size="lg" asChild className="bg-white text-black hover:bg-gray-100">
            <Link href="/auth/signup">Get Started Today</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
                <span className="font-semibold text-lg">WorkSphere</span>
              </div>
              <p className="text-gray-400">The future of decentralized work is here.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Find Work
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Post Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WorkSphere. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
