import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const solutions = [
  {
    title: "Scalable Cloud Server",
    description: "Customize your cloud with CPU, RAM, storage, and more to match your system requirements.",
    image: "/pexels-bohed-117729.jpg",
    badges: ["Scalability", "Optimization"],
  },
  {
    title: "Power Cloud",
    description:
      "Elevate your business with blazing fast, scalable, and secure cloud infrastructure designed for growth.",
    image: "/pexels-brett-sayles-4657267.jpg",
    badges: ["Up-gradable", "Scalable", "Instant Deployment"],
  },
  {
    title: "Bare Metal",
    description: "Enjoy full control and maximum performance with dedicated servers built for your business.",
    image: "/pexels-cookiecutter-17489151.jpg",
    badges: ["Full Control", "Dedicated Resources"],
  },
  {
    title: "S3 Object Storage",
    description: "Store and manage vast amounts of data with ease, availability, and top-tier security.",
    image: "/pexels-cookiecutter-17489155.jpg",
    badges: ["Durability", "Cost-effective", "Easy Access"],
  },
  {
    title: "Load Balancer",
    description: "Distribute traffic efficiently for better speed and reliability.",
    image: "/pexels-cookiecutter-19166565.jpg",
    badges: ["Auto-scaling", "High Availability"],
  },
  {
    title: "Managed Server",
    description: "Leave the management to us and enjoy high-performance servers, fully optimized and supported.",
    image: "/pexels-sejio402-6429123.jpg",
    badges: ["Fully Managed", "24/7 Support"],
  },
]

export default function Section3() {
  return (
    <section className="py-20 bg-[#020817]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-300">
            Cloud Solutions Perfectly Aligned
            <br />
            with Your Needs
          </h2>
          <p className="text-gray-400">
            Maximize your business potential with our powerful cloud offerings. Scalable, secure, and performance-driven
            solutions designed to adapt and grow with your needs.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <Card key={solution.title} className="bg-gray-900/50 border-gray-800">
              <CardHeader className="p-0">
                <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                  <Image
                    height={200}
                    width={200}
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.title}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                <CardDescription className="text-gray-400 mb-4">{solution.description}</CardDescription>
                <div className="flex flex-wrap gap-2 mb-4">
                  {solution.badges.map((badge) => (
                    <Badge
                      key={badge}
                      variant="secondary"
                      className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Discover more</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

