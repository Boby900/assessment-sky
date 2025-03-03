"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Loader2, Youtube } from "lucide-react";
import { Twitter } from "lucide-react";
import { useState } from "react";

const footerLinks = {
  home: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/" },
    { name: "Blog", href: "/" },
    { name: "Career", href: "/" },
    { name: "Social", href: "/" },
  ],
  company: [
    { name: "About Us", href: "/" },
    { name: "Our values", href: "/" },
    { name: "Our Affiliates", href: "/" },
    { name: "Contact Us", href: "/" },
  ],
  resources: [
    { name: "Terms of Service", href: "/" },
    { name: "Privacy Policy", href: "/" },
    { name: "FAQs", href: "/" },
    { name: "Cookie Policy", href: "/" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    setIsLoading(true); // Set loading to true

    // Send the email to your API route
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccessMessage("Subscribed successfully!");
        setEmail(""); // Reset the email input
      } else {
        setSuccessMessage("Subscription failed.");
      }
    } catch (error) {
      setSuccessMessage("An error occurred.");
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false); // Set loading to false
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    }
  };
  return (
    <footer className="bg-[#020817] border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center">
                <span className="text-white font-semibold">o</span>
              </div>
              <span className="text-white font-semibold">One Cloud</span>
            </Link>
          </div>

          {/* Links Sections */}
          <div className="space-y-4">
            <h3 className="text-gray-400 uppercase text-sm font-semibold">
              Home
            </h3>
            <ul className="space-y-2">
              {footerLinks.home.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-gray-400 uppercase text-sm font-semibold">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-gray-400 uppercase text-sm font-semibold">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-semibold">Join our newsletter</h3>
            <p className="text-sm text-gray-400">
              Keep up to date with everything Reflect
            </p>
            <form className="flex gap-2" onSubmit={handleSubmit}>
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-900 text-white border-gray-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Subscribe"
                )}{" "}
              </Button>
            </form>
            {successMessage && (
              <p className="text-green-500">{successMessage}</p>
            )}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">Built with 💖 by Boby Tiwari</p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <social.icon className="w-5 h-5" />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
