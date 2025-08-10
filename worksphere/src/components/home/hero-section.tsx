import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          The Future of Work
          <br />
          <span className="text-gray-700">is Decentralized.</span>
          <br />
          Welcome to WorkSphere.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Connect with top freelancers and businesses in a decentralized ecosystem. Experience the future of work with
          blockchain-powered transparency and security.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild className="bg-black text-white hover:bg-gray-800">
            <Link href="/auth/signup">Start Working</Link>
          </Button>
          <Button size="lg" variant="outline" className="flex items-center gap-2 bg-transparent">
            <Play className="w-4 h-4" />
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
