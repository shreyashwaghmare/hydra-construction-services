'use client'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation' // Add this import
import Image from 'next/image'
import Link from "next/link";
const navLinks = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'Bungalow Construction', href: '/services/bungalow-construction' },
      { name: 'Kitchen Remodeling', href: '/services/kitchen-remodeling' },
      { name: 'Bathroom Design', href: '/services/bathroom-design' },
      { name: 'Full Interior Solutions', href: '/services/full-interior' },
      { name: 'Building AMC', href: '/services/buildings-amc' },
      { name: 'Waterproofing', href: '/services/waterproofing' },
    ],
  },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky z-50 transition-all duration-300 
      ${scrolled ? 'top-2 mx-4 rounded-2xl' : 'top-0'}
      bg-[#071521]/95 backdrop-blur-xl border border-white/10 shadow-2xl`}
    >
      <div className="max-w-7xl mx-auto px-5">
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-[60px]' : 'h-[72px]'}`}>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/hydra-logo-horizontal-no-bg.png"
              alt="Hydra Corporation"
              width={200}
              height={60}
              className="w-[100px] !h-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">

            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
              >
                <Link
                  href={link.href}
                  className={`relative px-2 py-2 font-semibold transition-all duration-300
                  ${
                    pathname === link.href
                      ? 'text-yellow-400'
                      : 'text-white/80 hover:text-yellow-400'
                  }`}
                >
                  {link.name}

                  {/* Animated underline */}
                  {pathname === link.href && (
                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-yellow-400 rounded-full" />
                  )}
                </Link>

                {/* Dropdown */}
                {link.dropdown && dropdownOpen && (
                  <div className="absolute top-full left-0 mt-4 w-64 bg-[#0A1F33]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl py-3">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-6 py-3 text-white/80 hover:text-yellow-400 hover:bg-white/5 transition-all"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* CTA */}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-yellow-500/40 hover:scale-105 transition-all duration-300"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl bg-white/10 border border-white/20 text-white text-2xl transition-all"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
    
      {mobileOpen && (
        <div className="md:hidden bg-[#0A1F33]/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 space-y-4">

          {navLinks.map((link) => (
            <div key={link.name}>

              {/* If link has dropdown */}
              {link.dropdown ? (
                <>
                  <button
                    onClick={() =>
                      setMobileDropdownOpen(
                        mobileDropdownOpen === link.name ? null : link.name
                      )
                    }
                    className="w-full flex justify-between items-center py-3 font-semibold text-white/80 hover:text-yellow-400 transition-all"
                  >
                    {link.name}
                    <span className="text-lg">
                      {mobileDropdownOpen === link.name ? '−' : '+'}
                    </span>
                  </button>

                  {/* Dropdown Items */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${mobileDropdownOpen === link.name
                        ? 'max-h-96 opacity-100'
                        : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="ml-4 mt-2 space-y-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => {
                            setMobileOpen(false)
                            setMobileDropdownOpen(null)
                          }}
                          className="block text-sm text-white/70 hover:text-yellow-400 transition-all"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 font-semibold text-white/80 hover:text-yellow-400 transition-all"
                >
                  {link.name}
                </Link>
              )}

            </div>
          ))}

    <Link
      href="/contact"
      onClick={() => setMobileOpen(false)}
      className="block w-full text-center mt-4 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
    >
      Free Quote
    </Link>
  </div>
)}
    </nav>
  )
}
