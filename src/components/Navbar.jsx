'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-black/90 backdrop-blur-2xl shadow-2xl sticky top-0 z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          {/* 🔥 MY LOGO SIZE - Prominent + Compact */}
          <div className="flex shrink-0">
            <a href="/" className="block">
              <Image
                src="/images/hydra-logo-no-bg.webp"
                alt="Hydra Construction Logo"
                width={200}
                height={60}
                className="w-36 h-11 sm:w-44 sm:h-14 md:w-48 md:h-16 lg:w-52 lg:h-18 object-contain"
                style={{ width: 'auto', height: 'auto' }}
                priority
              />
            </a>
          </div>

          {/* 🔥 MY TIGHT DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            <a href="/" className="px-3 py-2 text-sm lg:text-base font-semibold text-white/90 hover:text-yellow-400 rounded-lg transition-all whitespace-nowrap">Home</a>
            <a href="/services" className="px-3 py-2 text-sm lg:text-base font-semibold text-white/90 hover:text-yellow-400 rounded-lg transition-all whitespace-nowrap">Services</a>
            <a href="/portfolio" className="px-3 py-2 text-sm lg:text-base font-semibold text-white/90 hover:text-yellow-400 rounded-lg transition-all whitespace-nowrap">Portfolio</a>
            <a href="/about" className="px-3 py-2 text-sm lg:text-base font-semibold text-white/90 hover:text-yellow-400 rounded-lg transition-all whitespace-nowrap">About</a>
            <a href="/contact" className="px-3 py-2 text-sm lg:text-base font-semibold text-white/90 hover:text-yellow-400 rounded-lg transition-all whitespace-nowrap">Contact Us</a>
          </div>

          {/* 🔥 MY COMPACT CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <a href="https://wa.me/919697985597" className="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-sm rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all whitespace-nowrap">
              📱 WhatsApp
            </a>
            <a href="/contact" className="px-5 py-2.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-sm rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all whitespace-nowrap">
              Free Quote
            </a>
          </div>

          {/* Mobile Hamburger - YOUR STYLE */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-2xl font-bold transition-all duration-200 hover:scale-110 active:scale-95"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* YOUR Mobile Menu - UNCHANGED */}
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
