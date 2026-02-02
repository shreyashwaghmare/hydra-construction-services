'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-black/90 backdrop-blur-2xl shadow-2xl sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Bold gradient */}
          <div className="flex flex-col items-center gap-1 sm:gap-2 lg:gap-3 shrink-0 group">
            {/* Logo Image */}
            <div className="w-40 h-16 sm:w-52 sm:h-20 lg:w-64 lg:h-24 xl:w-72 xl:h-28 flex shrink-0">
              <a href="/" className="block w-full h-full">
                <Image
                  src="/images/hydra-logo-no-bg.webp"
                  alt='hydra-logo'
                  width={200}    // Logo width in px
                  height={60}    // Logo height in px  
                  className="w-full h-full object-contain scale-150 origin-center"  // 50% BIGGER!
                  style={{ transform: 'scale(1.5)', transformOrigin: 'center' }}
                  priority
                />
              </a>
            </div>


          </div>


          {/* Desktop Menu - High contrast */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4"> {/* Tighter gap */}
            <a href="/" className="px-2 py-2 text-sm lg:text-base font-semibold text-white/90 hover:text-yellow-400 rounded-lg transition-all">Home</a>
            <a href="/services" className="px-2 py-2 text-sm lg:text-base font-semibold text-white/90 hover:text-yellow-400 rounded-lg transition-all">Services</a>
            <a href="/portfolio" className="px-2 py-2 text-sm lg:text-base font-semibold text-white/90 hover:text-yellow-400 rounded-lg transition-all">Portfolio</a>
            <a href="/about" className="px-2 py-2 text-sm lg:text-base font-semibold text-white/90 hover:text-yellow-400 rounded-lg transition-all">About</a>
            <a href="/contact" className="px-2 py-2 text-sm lg:text-base font-semibold text-white/90 hover:text-yellow-400 rounded-lg transition-all">Contact Us</a>
          </div>
          {/* Desktop CTA - Prominent */}
          <div className="hidden md:flex items-center gap-3">
            <a href="https://wa.me/919697985597" className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 border border-emerald-400/50">
              📱 WhatsApp
            </a>
            <a href="/contact" className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-black text-lg rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
              Free Quote
            </a>
          </div>

          {/* Mobile Hamburger - Bold */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-2xl font-bold transition-all duration-200 hover:scale-110 active:scale-95"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu - Fullscreen overlay */}
        {mobileOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-gray-900 to-black/90 backdrop-blur-2xl border-t border-white/10 shadow-2xl py-6 px-4 animate-in slide-in-from-top-4 duration-300">
            <div className="space-y-3">
              <a href="/" className="block py-4 px-6 text-xl font-bold text-white hover:text-yellow-400 hover:bg-white/10 rounded-2xl transition-all duration-200" onClick={() => setMobileOpen(false)}>
                Home
              </a>
              <a href="/portfolio" className="block py-4 px-6 text-xl font-bold text-white hover:text-yellow-400 hover:bg-white/10 rounded-2xl transition-all duration-200" onClick={() => setMobileOpen(false)}>
                Portfolio
              </a>
              <a href="/services" className="block py-4 px-6 text-xl font-bold text-white hover:text-yellow-400 hover:bg-white/10 rounded-2xl transition-all duration-200" onClick={() => setMobileOpen(false)}>
                Services
              </a>
              <a href="/about" className="block py-4 px-6 text-xl font-bold text-white hover:text-yellow-400 hover:bg-white/10 rounded-2xl transition-all duration-200" onClick={() => setMobileOpen(false)}>
                About
              </a>
              <a href="/contact" className="block py-4 px-6 text-xl font-bold text-white hover:text-yellow-400 hover:bg-white/10 rounded-2xl transition-all duration-200" onClick={() => setMobileOpen(false)}>
                Contact
              </a>

              {/* Mobile CTAs - Stacked */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a href="/contact" className="block w-full py-4 px-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-black text-xl text-center rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
                  Free Quote
                </a>
                <a href="https://wa.me/919697985597" className="block w-full py-4 px-6 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-xl text-center rounded-2xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
                  📱 WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
