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
import Navbar from "@/components/layout/navbar";
import Main from "@/components/layout/main";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020817] overflow-x-hidden">
      <div className="order-2">
        <Navbar />
      </div>
      <div className="order-1">
        <Main />
      </div>
      {/* Hero Section */}
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
            <div className="w-32 h-32 bg-blue-900/20 rounded-full flex items-center justify-center">
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

      {/* Background Effect - Fixed positioning and full coverage */}
      <div className="fixed inset-0 w-screen h-screen -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900" />
      </div>
    </div>
  );
}

function IconCircle({ Icon }: { Icon: LucideIcon }) {
  return (
    <div className="w-[10%] aspect-square min-w-[40px] bg-blue-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50 hover:shadow-blue-500/75 transition-shadow duration-300">
      <Icon className="w-1/2 h-1/2 text-white" />
    </div>
  );
}
