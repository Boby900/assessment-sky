"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Brain, Cloud, Database, MessageSquare } from "lucide-react"

const solutions = ["AI Powered Solutions", "Scalable Cloud", "Power Cloud", "Kubernetes", "Load Balancer"]

const features = [
  {
    icon: Brain,
    title: "Smart Task Automation",
    description: "Effortlessly handles repetitive tasks, boosting efficiency and saving valuable time.",
    isNew: true,
  },
  {
    icon: Cloud,
    title: "Custom Adaptability",
    description: "Easily integrates with your workflow, adapting to your unique business needs.",
    isNew: false,
  },
  {
    icon: Database,
    title: "Data-Driven Insights",
    description: "Delivers real-time analytics and recommendations to enhance decision-making.",
    isNew: false,
  },
  {
    icon: MessageSquare,
    title: "Conversational Interaction",
    description: "Communicate naturally with AI using voice or text for seamless task execution.",
    isNew: true,
  },
]

export default function Section2() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-20 bg-[#020817]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech-Powered Solutions Features for Ultimate Efficiency
          </h2>
          <p className="text-gray-400">
            Maximize your business with scalable, secure, and high-performance cloud solutions.
          </p>
        </div>

        {/* Solution Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {solutions.map((solution, index) => (
            <button
              key={solution}
              onClick={() => setActiveTab(index)}
              className={cn(
                "px-6 py-2 rounded-full text-sm transition-colors",
                activeTab === index
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-gray-300",
              )}
            >
              {solution}
            </button>
          ))}
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature) => (
            <div key={feature.title} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-600/10 rounded-lg">
                  <feature.icon className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    {feature.isNew && <Badge className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/20">New</Badge>}
                  </div>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AI Solutions Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-[url('https://images.pexels.com/photos/2531709/pexels-photo-2531709.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-right-bottom border border-gray-800">
          <div className="relative z-10 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              AI Solutions for
              <br />
              Next-Level <br />
              Growth
            </h3>
          </div>

          {/* Decorative Elements */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 transform">
              <Cloud className="w-24 h-24 text-blue-500/10" />
            </div>
            <div className="absolute left-1/4 top-1/2 -translate-y-1/2 transform">
              <div className="w-24 h-24 border-2 border-blue-500/10 rounded-xl transform rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

