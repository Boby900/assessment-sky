import Link from "next/link"
import { Button } from "../ui/button"
import Image from "next/image"
import Main from "./main"
export default function Navbar(){
    return(
        <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-white">
            <Image src="/moon.png" height={30} width={40} alt="logo" />
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
<div>
  <Main />
</div>
        </div>
      </nav>

    )
}