"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import TopHeader from "./topheader"
import data from "@/data/data.json"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logo = data.header[0].logo || '/default-image-path.svg';

  return (
    <header className="w-full">
      {/* Top Header */}
      <TopHeader />

      {/* Main Header */}
      <div className="py-4 shadow-sm px-15">
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative h-[60px] w-[151px]">
            <Image src={logo} alt="Enywork Logo" width={151} height={60} priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-5">
            <Link href="/" className="text-secondary border-b border-primary px-1 py-1.5">
              ACCUEIL
            </Link>
            <span className="text-dark-secondary h-3 w-px">|</span>
            <Link href="/a-propos" className="text-secondary hover:text-primary transition-colors">
              A PROPOS
            </Link>
            <span className="text-dark-secondary h-3 w-px">|</span>
            <Link href="/realisations" className="text-secondary hover:text-primary transition-colors">
              RÉALISATIONS
            </Link>
            <span className="text-dark-secondary h-3 w-px">|</span>
            <Link href="/services" className="text-secondary hover:text-primary transition-colors">
              SERVICES
            </Link>
            <span className="text-dark-secondary h-3 w-px">|</span>
            <Link href="/equipe" className="text-secondary hover:text-primary transition-colors">
              ÉQUIPE
            </Link>
            <span className="text-dark-secondary h-3 w-px">|</span>
            <Link href="/blogs" className="text-secondary hover:text-primary transition-colors">
              BLOGS
            </Link>
          </nav>

          {/* Contact Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:flex btn-primary">
              <span>CONTACT</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md py-4">
          <div className="container-custom flex flex-col gap-4">
            <Link href="/" className="text-secondary hover:text-primary transition-colors py-2 border-b">
              ACCUEIL
            </Link>
            <Link href="/a-propos" className="text-secondary hover:text-primary transition-colors py-2 border-b">
              A PROPOS
            </Link>
            <Link href="/realisations" className="text-secondary hover:text-primary transition-colors py-2 border-b">
              RÉALISATIONS
            </Link>
            <Link href="/services" className="text-secondary hover:text-primary transition-colors py-2 border-b">
              SERVICES
            </Link>
            <Link href="/equipe" className="text-secondary hover:text-primary transition-colors py-2 border-b">
              ÉQUIPE
            </Link>
            <Link href="/blogs" className="text-secondary hover:text-primary transition-colors py-2 border-b">
              BLOGS
            </Link>
            <Link href="/contact" className="btn-primary self-start">
              <span>CONTACT</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

