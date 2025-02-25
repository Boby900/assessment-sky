import { Button } from "@/components/ui/button";
import {
  Cloud,
  Code,
  Cpu,
  Database,
  Globe,
  Server,
  Shield,
  LucideIcon,
} from "lucide-react";
export default function Main() {
    return (
      <section className="relative bg-[#020817] py-24 overflow-hidden mt-20">
        <div className="container mx-auto px-4">
        <main className="container mx-auto px-4 py-20 text-center relative">
        <p className="text-lg text-gray-300 mb-4">
          Secure. Scalable. Always Reliable
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-white text-transparent bg-clip-text">
          Empower your growth with lightning-fast, secure,
          <br />
          and customization cloud technology
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Take control of your cloud. Deploy fast, scale instantly, and pay as
          you go.
          <br />
          Enjoy top performance, strong security, and 24/7 reliability
        </p>

        {/* Cloud Services Diagram - Now using relative units */}
        <div
          className="relative w-full max-w-[90vw] aspect-square mx-auto mb-12"
          style={{ maxWidth: "600px" }}
        >
          {/* Center Icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32  rounded-full flex items-center justify-center">
              <Cloud className="w-16 h-16 text-blue-500" />
            </div>
          </div>

          {/* Orbital Icons - Using percentage-based positioning */}
          <div className="absolute inset-0">
            {/* Top */}
            <div className="absolute top-[5%] left-1/2 transform -translate-x-1/2">
              <IconCircle Icon={Shield} />
            </div>
            {/* Top Right */}
            <div className="absolute top-[25%] right-[5%]">
              <IconCircle Icon={Server} />
            </div>
            {/* Bottom Right */}
            <div className="absolute bottom-[25%] right-[5%]">
              <IconCircle Icon={Database} />
            </div>
            {/* Bottom */}
            <div className="absolute bottom-[5%] left-1/2 transform -translate-x-1/2">
              <IconCircle Icon={Code} />
            </div>
            {/* Bottom Left */}
            <div className="absolute bottom-[25%] left-[5%]">
              <IconCircle Icon={Globe} />
            </div>
            {/* Top Left */}
            <div className="absolute top-[25%] left-[5%]">
              <IconCircle Icon={Cpu} />
            </div>
          </div>

          {/* Decorative Circles - Using percentage-based sizing */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 w-[80%] h-[80%] transform -translate-x-1/2 -translate-y-1/2 border border-blue-500/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 w-[60%] h-[60%] transform -translate-x-1/2 -translate-y-1/2 border border-blue-500/30 rounded-full" />
          </div>
        </div>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full">
          Explore All Solution →
        </Button>
      </main>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 text-transparent bg-clip-text">
                From Start to Scale,
                <br />
                Cloud Solutions for
                <br />
                Every Stage of Your Journey
              </h2>
              <p className="text-gray-400 text-lg">
                Save time and cut costs with high-quality cloud services. Enjoy seamless scaling, strong security, and
                easy deployment to keep your business growing.
              </p>
            </div>
  
            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-6 relative">
              {/* Server Stack Illustration in Center */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-32 h-48">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-full h-10 bg-blue-600/20 border border-blue-500/30 transform rotate-12 skew-x-12"
                      style={{
                        top: `${i * 20}%`,
                        filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))",
                      }}
                    />
                  ))}
                </div>
              </div>
  
              {/* Metrics */}
              <MetricCard value="99.9%" label="Up-Time Guarantee" color="text-yellow-500" />
              <MetricCard value="100%" label="High-Level Security" color="text-blue-500" />
              <MetricCard value="24/7" label="Expert Support" color="text-blue-500" />
              <MetricCard value="100%" label="Customization" color="text-yellow-500" />
            </div>
          </div>
        </div>
  
        {/* Background Glow Effect */}
        
      </section>
    
    )
  }
  
  function MetricCard({ value, label, color }: { value: string; label: string; color: string }) {
    return (
      <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6 shadow-xl hover:shadow-blue-500/10 transition-shadow duration-300">
        <div className={`text-3xl font-bold mb-2 ${color}`}>{value}</div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    )
  }
  
  function IconCircle({ Icon }: { Icon: LucideIcon }) {
    return (
      <div className="w-[10%] aspect-square min-w-[40px] bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50 hover:shadow-blue-500/75 transition-shadow duration-300">
        <Icon className="w-1/2 h-1/2 text-white" />
      </div>
    );
  }