"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"

import { ThemeSwitcher } from "@/components/app/theme-switcher"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed left-0 top-0 z-20 mx-auto flex h-[70px] w-full items-center border-b-4 border-border bg-secondary-background px-5">
      <div className="mx-auto flex w-[1300px] text-foreground max-w-full items-center justify-between">
        <div className="flex items-center xl:gap-10 gap-10">
          <Link
            className="size-8 rounded-base flex items-center justify-center overflow-hidden"
            href={"/"}
            onClick={closeMenu}
          >
            <Image
              src="/logo.png"
              alt="BlueBuild Digital"
              width={28}
              height={28}
              priority
            />
          </Link>

          <div className="items-center text-base font-base xl:gap-10 lg:flex gap-10 hidden">
            <Link href="#why-choose-us">Why Choose Us</Link>
            <Link href="#about-us">About Us</Link>
            <Link href="#global-coverage">Global Coverage</Link>
            <Link href="#testimonials">Testimonials</Link>
            <Link href="/careers">Careers</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center justify-end gap-4">
            <ThemeSwitcher />
            
            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-base border-2 border-border bg-background shadow-shadow hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none transition-all"
            >
              {isMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[70px] left-0 w-full bg-secondary-background border-b-4 border-border shadow-shadow">
          <div className="flex flex-col px-5 py-4 space-y-4">
            <Link 
              href="#why-choose-us" 
              className="text-base font-base py-2 hover:text-main transition-colors"
              onClick={closeMenu}
            >
              Why Choose Us
            </Link>
            <Link 
              href="#about-us" 
              className="text-base font-base py-2 hover:text-main transition-colors"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link 
              href="#global-coverage" 
              className="text-base font-base py-2 hover:text-main transition-colors"
              onClick={closeMenu}
            >
              Global Coverage
            </Link>
            <Link 
              href="#testimonials" 
              className="text-base font-base py-2 hover:text-main transition-colors"
              onClick={closeMenu}
            >
              Testimonials
            </Link>
            <Link 
              href="/careers" 
              className="text-base font-base py-2 hover:text-main transition-colors"
              onClick={closeMenu}
            >
              Careers
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
