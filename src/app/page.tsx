'use client'

import { useEffect, useState } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import PortfolioGallery from '@/components/PortfolioGallery'
import Services from '@/components/Services'
// import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #050A30 0%, #101D6B 100%)',
        }}
      >
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <main className="relative">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Portfolio Gallery */}
      <PortfolioGallery />

      {/* Services */}
      <Services />

      {/* About - Disabled for now */}
      {/* <About /> */}

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="bg-[#050A30] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo/pkp.svg"
                  alt="Pyaar Ke Patr"
                  className="h-12 w-12 object-contain"
                />
                <span
                  className="text-white font-bold text-xl"
                  style={{ fontFamily: 'Garamond, serif' }}
                >
                  Pyaar Ke Patr
                </span>
              </div>
              <p className="text-white/60 text-sm">
                Crafting moments into memories through bespoke card and invitation designs.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Home', 'Portfolio', 'Services', 'Contact'].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="mailto:contact@pyaarkepatr.com"
                  className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Email"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/mail.svg" alt="Email" className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com/pyaarkepatr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/instagram.svg" alt="Instagram" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Pyaar Ke Patr. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}