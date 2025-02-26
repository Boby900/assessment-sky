import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-white">
              <Image src="/icons8-coc-coc-48.png" height={30} width={40} alt="logo" />
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative group">
                <button className="text-gray-300 hover:text-white px-3 py-2">Compute</button>
              </div>
              <div className="relative group">
                <button className="text-gray-300 hover:text-white px-3 py-2">AI Application</button>
              </div>
              <div className="relative group">
                <button className="text-gray-300 hover:text-white px-3 py-2">Support</button>
              </div>
              <div className="relative group">
                <button className="text-gray-300 hover:text-white px-3 py-2">Partner</button>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="link" className="text-gray-300 hover:text-white">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Sign up</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

