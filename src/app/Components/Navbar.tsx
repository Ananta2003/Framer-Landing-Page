"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Left - Logo */}
        <Link href="/" className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 140 140">
            <path
              d="M 44.65 33.992 L 95.35 33.992 L 95.35 59.341 L 70 59.341 Z M 44.65 59.341 L 70 59.341 L 95.35 84.691 L 44.65 84.691 Z M 44.65 84.691 L 70 84.691 L 70 110.041 Z"
              fill="rgb(255, 255, 255)"
            ></path>
          </svg>
        </Link>

        {/* Center - Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="#product" className="text-base text-white/70 transition-colors hover:text-white">
            Product
          </Link>
          <Link href="#team" className="text-base text-white/70 transition-colors hover:text-white">
            Team
          </Link>
          <Link href="#resource" className="text-base text-white/70 transition-colors hover:text-white">
            Resource
          </Link>
          <Link href="#community" className="text-base text-white/70 transition-colors hover:text-white">
            Community
          </Link>
          <Link href="#support" className="text-base text-white/70 transition-colors hover:text-white">
            Support
          </Link>
          <Link href="#enterprise" className="text-base text-white/70 transition-colors hover:text-white">
            Enterprise
          </Link>
          <Link href="#pricing" className="text-base text-white/70 transition-colors hover:text-white">
            Pricing
          </Link>
        </div>

        {/* Right - Auth Buttons & Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="hidden text-sm text-white hover:bg-white/10 hover:text-white md:inline-flex"
          >
            Login
          </Button>
          <Button className="hidden bg-white text-sm text-black hover:bg-white/90 md:inline-flex">Sign Up</Button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center p-2 md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`absolute left-0 right-0 top-16 overflow-hidden border-b border-white/10 bg-black/95 backdrop-blur-md transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="flex flex-col p-6">
          <Link
            href="#product"
            className="border-b border-white/10 py-3 text-sm text-white/70 transition-colors hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Product
          </Link>
          <Link
            href="#team"
            className="border-b border-white/10 py-3 text-sm text-white/70 transition-colors hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Team
          </Link>
          <Link
            href="#resource"
            className="border-b border-white/10 py-3 text-sm text-white/70 transition-colors hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Resource
          </Link>
          <Link
            href="#community"
            className="border-b border-white/10 py-3 text-sm text-white/70 transition-colors hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Community
          </Link>
          <Link
            href="#support"
            className="border-b border-white/10 py-3 text-sm text-white/70 transition-colors hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Support
          </Link>
          <Link
            href="#enterprise"
            className="border-b border-white/10 py-3 text-sm text-white/70 transition-colors hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Enterprise
          </Link>
          <Link
            href="#pricing"
            className="border-b border-white/10 py-3 text-sm text-white/70 transition-colors hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>

          <div className="mt-4 flex flex-col gap-3">
            <Button variant="ghost" className="w-full text-sm text-white hover:bg-white/10 hover:text-white">
              Login
            </Button>
            <Button className="w-full bg-white text-sm text-black hover:bg-white/90">Sign Up</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
