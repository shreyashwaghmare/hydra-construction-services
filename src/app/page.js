'use client';
import Image from "next/image"
import { motion } from "framer-motion";

export default function Home() {
  const recentProjects = [
  {
    title: 'Baner 4BHK Bungalow',
    desc: 'Modular Kitchen, Walk-in Wardrobes & Smart Lighting',
    date: 'Delivered Dec 2025',
    src: '/images/duplex-wakad.webp',
    alt: 'Baner 4BHK Bungalow Modular Kitchen'
  },
  {
    title: 'Island Kitchen Renovation',
    desc: 'Modern Island Kitchen with Smart Storage',
    date: 'Delivered Nov 2025',
    src: '/images/island-kitchen.webp',
    alt: 'Island Kitchen Renovation – Wakad'
  },
  {
    title: 'Luxury Living Room Interior',
    desc: 'Designer Sofa, TV Unit & Ambient Lighting',
    date: 'Delivered Oct 2025',
    src: '/images/service-interior.jpg',
    alt: 'Luxury Living Room Interior – Pune'
  }
];
  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden">

        {/* Background Image + Overlay */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero-bungalow.webp"
            alt="Pune Dream Bungalow Construction"
            fill
            className="object-cover"
            style={{ filter: 'brightness(0.45)' }}
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 py-6 flex flex-col justify-center items-center text-center min-h-screen">

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-snug tracking-wide max-w-4xl mb-5">
            Interior Design & Renovation Experts in Pune & Ahilyanagar
          </h1>

          <h2 className="text-lg md:text-xl lg:text-2xl text-yellow-300 max-w-3xl mx-auto mb-6 font-medium tracking-wide">
            Modular Kitchens • Wardrobes • Bathroom Design • Smart Lighting • Turnkey Interiors
          </h2>

          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Thoughtfully designed homes with transparent pricing, on-site supervision and fixed timelines — from single rooms to complete 4BHK transformations.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <a href="/portfolio" className="bg-yellow-400 text-black px-8 py-3 rounded font-semibold hover:bg-yellow-300 transition">
              View Projects
            </a>
            <a href="/contact" className="border border-white text-white px-8 py-3 rounded hover:bg-white/10 transition">
              Get Free Estimate
            </a>
          </div>

          {/* Stats Cards */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-4xl mx-auto px-4 py-6">
            {/* 50+ Projects */}
            <div className="flex items-center space-x-4 p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 min-w-[200px]">
              <div className="w-16 h-16 bg-yellow-400/90 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
                <span className="font-bold text-2xl drop-shadow-md">🏠</span>
              </div>
              <div>
                <span className="text-sm font-medium text-yellow-300 tracking-wide block">Projects Delivered</span>
                <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight">
                  50+
                </div>
                <span className="text-yellow-400 text-xs font-bold tracking-wider uppercase">PUNE</span>
              </div>
            </div>

            {/* 15+ Years */}
            <div className="flex items-center space-x-4 p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 min-w-[200px]">
              <div className="w-16 h-16 bg-green-400/90 rounded-2xl flex items-center justify-center shadow-xl flex-shrink-0">
                <span className="font-bold text-2xl drop-shadow-md">⏱️</span>
              </div>
              <div>
                <span className="text-sm font-medium text-green-300 tracking-wide block">Proven Expertise</span>
                <div className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight">
                  15+
                </div>
                <span className="text-green-400 text-xs font-bold tracking-wider uppercase">YEARS</span>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-12">
            <a
              href="https://wa.me/919697985597"
              className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-gray-900 px-12 py-6 md:px-20 md:py-7 rounded-2xl font-black text-xl md:text-2xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
            >
              📱 GET FREE QUOTE NOW
            </a>
          </div>

        </div>

      </section>


      {/* 1. PROFESSIONAL 6-SERVICES GRID */}
      <section className="pt-24 pb-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4 font-['Oswald',sans-serif] leading-tight">From strong foundations to stunning interiors</h2>
            <p className="text-xl py-4 md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We don’t just build spaces — we craft experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* 1. Bungalow Construction */}
              <motion.div
                className="group/card relative overflow-hidden bg-white rounded-3xl shadow-xl border border-white/30 p-4 transition-all duration-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.15,ease: "easeOut" }}
                whileTap={{ scale: 0.97 }} // optional tap effect for mobile
              >
                <div className="group/card relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-700 border border-white/50 hover:border-blue-200/50 animate-slide-up"
                  style={{ animationDelay: '0.4s' }} tabIndex={0}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-blue-50/10 to-blue-100/10
 scale-0 group-hover/card:scale-100 transition-transform duration-700 origin-center" />
                  <div className="relative z-10 text-center p-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-100 via-blue-200 to-blue-300 rounded-3xl mx-auto mb-8 flex items-center justify-center text-3xl group-hover/card:scale-110 group-hover/card:shadow-blue-500/25 active:scale-105 transition-all duration-500 shadow-2xl border-4 border-blue-200/50 group-hover/card:border-blue-400/75">
                      🏠
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 font-['Oswald',sans-serif] leading-tight group-hover/card:text-blue-600 transition-all duration-500">
                      Bungalow Construction
                    </h3>
                    <p className="text-gray-600 mb-8 text-lg font-['Montserrat',sans-serif] font-normal leading-relaxed max-w-sm mx-auto group-hover/card:text-gray-700 transition-colors duration-300">
                      3BHK/4BHK from foundation to finishout
                    </p>
                    <span className="inline-block bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 text-blue-800 text-base px-6 py-3 rounded-2xl font-bold font-['Montserrat',sans-serif] tracking-wide shadow-lg group-hover/card:scale-110 group-hover/card:shadow-blue-500/50 group-hover/card:bg-blue-200/80 border-2 border-blue-200/50 transition-all duration-400">
                      Starting ₹75 Lac
                    </span>
                  </div>
                </div>
              </motion.div>
              {/* 2. Bathroom Design */}
              <motion.div
                className="group/card relative overflow-hidden bg-white rounded-3xl shadow-xl border border-white/30 p-4 transition-all duration-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7,delay: 0.30, ease: "easeOut" }}
                whileTap={{ scale: 0.97 }} // optional tap effect for mobile
              >
                <div className="group/card relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-700 border border-white/50 hover:border-indigo-200/50 animate-slide-up"
                  style={{ animationDelay: '0.5s' }} tabIndex={0}>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 via-indigo-50/10 to-indigo-100/10 scale-0 group-hover/card:scale-100 transition-transform duration-700 origin-center" />
                  <div className="relative z-10 text-center p-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-indigo-100 via-indigo-200 to-indigo-300 rounded-3xl mx-auto mb-8 flex items-center justify-center text-3xl group-hover/card:scale-110 group-hover/card:shadow-indigo-500/25 active:scale-105 transition-all duration-500 shadow-2xl border-4 border-indigo-200/50 group-hover/card:border-indigo-400/75">
                      🛁
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 font-['Oswald',sans-serif] leading-tight group-hover/card:text-indigo-600 transition-all duration-500">
                      Bathroom Design
                    </h3>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-sm mx-auto group-hover/card:text-gray-700 transition-colors duration-300">
                      Modular + luxury wet room solutions
                    </p>
                    <span className="inline-block bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-300 text-indigo-800 text-base px-6 py-3 rounded-2xl font-bold font-['Montserrat',sans-serif] tracking-wide shadow-lg group-hover/card:scale-110 group-hover/card:shadow-indigo-500/50 group-hover/card:bg-indigo-200/80 border-2 border-indigo-200/50 transition-all duration-400">
                      ₹2.5-6 Lac
                    </span>
                  </div>
                </div>
              </motion.div>
              {/* 3. Kitchen Remodeling */}
              <motion.div
                className="group/card relative overflow-hidden bg-white rounded-3xl shadow-xl border border-white/30 p-4 transition-all duration-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7,delay: 0.45, ease: "easeOut" }}
                whileTap={{ scale: 0.97 }} // optional tap effect for mobile
              >
                <div className="group/card relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-700 border border-white/50 hover:border-yellow-200/50 animate-slide-up"
                  style={{ animationDelay: '0.6s' }} tabIndex={0}>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/20 via-yellow-50/10 to-yellow-100/10 scale-0 group-hover/card:scale-100 transition-transform duration-700 origin-center" />
                  <div className="relative z-10 text-center p-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-yellow-100 via-yellow-200 to-yellow-300 rounded-3xl mx-auto mb-8 flex items-center justify-center text-3xl group-hover/card:scale-110 group-hover/card:shadow-yellow-500/25 active:scale-105 transition-all duration-500 shadow-2xl border-4 border-yellow-200/50 group-hover/card:border-yellow-400/75">
                      🍳
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 font-['Oswald',sans-serif] leading-tight group-hover/card:text-yellow-600 transition-all duration-500">
                      Kitchen Remodeling
                    </h3>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-sm mx-auto group-hover/card:text-gray-700 transition-colors duration-300">
                      L-Shape, Island, Modular Pune kitchens
                    </p>
                    <span className="inline-block bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300 text-yellow-800 text-base px-6 py-3 rounded-2xl font-bold font-['Montserrat',sans-serif] tracking-wide shadow-lg group-hover/card:scale-110 group-hover/card:shadow-yellow-500/50 group-hover/card:bg-yellow-200/80 border-2 border-yellow-200/50 transition-all duration-400">
                      ₹3-8 Lac
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* 4. Interior Design */}
              <motion.div
                className="group/card relative overflow-hidden bg-white rounded-3xl shadow-xl border border-white/30 p-4 transition-all duration-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7,delay: 0.60, ease: "easeOut" }}
                whileTap={{ scale: 0.97 }} // optional tap effect for mobile
              >
                <div className="group/card relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-700 border border-white/50 hover:border-purple-200/50 animate-slide-up"
                  style={{ animationDelay: '0.7s' }} tabIndex={0}>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 via-purple-50/10 to-purple-100/10 scale-0 group-hover/card:scale-100 transition-transform duration-700 origin-center" />
                  <div className="relative z-10 text-center p-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300 rounded-3xl mx-auto mb-8 flex items-center justify-center text-3xl group-hover/card:scale-110 group-hover/card:shadow-purple-500/25 active:scale-105 transition-all duration-500 shadow-2xl border-4 border-purple-200/50 group-hover/card:border-purple-400/75">
                      🛋️
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 font-['Oswald',sans-serif] leading-tight group-hover/card:text-purple-600 transition-all duration-500">
                      Full Interior
                    </h3>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-sm mx-auto group-hover/card:text-gray-700 transition-colors duration-300">
                      Furniture + false ceiling + painting
                    </p>
                    <span className="inline-block bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300 text-purple-800 text-base px-6 py-3 rounded-2xl font-bold font-['Montserrat',sans-serif] tracking-wide shadow-lg group-hover/card:scale-110 group-hover/card:shadow-purple-500/50 group-hover/card:bg-purple-200/80 border-2 border-purple-200/50 transition-all duration-400">
                      ₹800/sqft
                    </span>
                  </div>
                </div>
              </motion.div>
              {/* 5. Building AMC */}
              <motion.div
                className="group/card relative overflow-hidden bg-white rounded-3xl shadow-xl border border-white/30 p-4 transition-all duration-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7,delay: 0.75, ease: "easeOut" }}
                whileTap={{ scale: 0.97 }} // optional tap effect for mobile
              >
                <div className="group/card relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-700 border border-white/50 hover:border-green-200/50 animate-slide-up"
                  style={{ animationDelay: '0.8s' }} tabIndex={0}>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50/20 via-green-50/10 to-green-100/10 scale-0 group-hover/card:scale-100 transition-transform duration-700 origin-center" />
                  <div className="relative z-10 text-center p-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-100 via-green-200 to-green-300 rounded-3xl mx-auto mb-8 flex items-center justify-center text-3xl group-hover/card:scale-110 group-hover/card:shadow-green-500/25 active:scale-105 transition-all duration-500 shadow-2xl border-4 border-green-200/50 group-hover/card:border-green-400/75">
                      🔧
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 font-['Oswald',sans-serif] leading-tight group-hover/card:text-green-600 transition-all duration-500">
                      Building AMC
                    </h3>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-sm mx-auto group-hover/card:text-gray-700 transition-colors duration-300">
                      Annual maintenance + repairs contract
                    </p>
                    <span className="inline-block bg-gradient-to-r from-green-100 via-green-200 to-green-300 text-green-800 text-base px-6 py-3 rounded-2xl font-bold font-['Montserrat',sans-serif] tracking-wide shadow-lg group-hover/card:scale-110 group-hover/card:shadow-green-500/50 group-hover/card:bg-green-200/80 border-2 border-green-200/50 transition-all duration-400">
                      ₹25k/year
                    </span>
                  </div>
                </div>
              </motion.div>
              {/* 6. Waterproofing */}
              <motion.div
                className="group/card relative overflow-hidden bg-white rounded-3xl shadow-xl border border-white/30 p-4 transition-all duration-700"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7,delay: 0.90, ease: "easeOut" }}
                whileTap={{ scale: 0.97 }} // optional tap effect for mobile
              >
                <div className="group/card relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-3xl transition-all duration-700 border border-white/50 hover:border-teal-200/50 animate-slide-up"
                  style={{ animationDelay: '0.9s' }} tabIndex={0}>
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-50/20 via-teal-50/10 to-teal-100/10 scale-0 group-hover/card:scale-100 transition-transform duration-700 origin-center" />
                  <div className="relative z-10 text-center p-10">
                    <div className="w-24 h-24 bg-gradient-to-br from-teal-100 via-teal-200 to-teal-300 rounded-3xl mx-auto mb-8 flex items-center justify-center text-3xl group-hover/card:scale-110 group-hover/card:shadow-teal-500/25  active:scale-105 transition-all duration-500 shadow-2xl border-4 border-teal-200/50 group-hover/card:border-teal-400/75">
                      💧
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 font-['Oswald',sans-serif] leading-tight group-hover/card:text-teal-600 transition-all duration-500">
                      Waterproofing
                    </h3>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-sm mx-auto group-hover/card:text-gray-700 transition-colors duration-300">
                      Terrace, bathroom, sinking foundation
                    </p>
                    <span className="inline-block bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300 text-teal-800 text-base px-6 py-3 rounded-2xl font-bold font-['Montserrat',sans-serif] tracking-wide shadow-lg group-hover/card:scale-110 group-hover/card:shadow-teal-500/50 group-hover/card:bg-teal-200/80 border-2 border-teal-200/50 transition-all duration-400">
                      ₹45/sqft
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* 2. RECENT PROJECTS */}
      <section className="pt-10 pb-22 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Headline */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4 font-['Oswald',sans-serif]">
          Recent Interior & Renovation Projects in Pune
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto font-['Montserrat',sans-serif]">
          Showcasing our work from modular kitchens to complete 4BHK home transformations – transparency, quality, and style in every project.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {recentProjects.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Image */}
              <Image
                src={project.src}
                alt={project.alt}
                width={400}
                height={300}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 rounded-3xl">
                <h3 className="text-white text-2xl font-black font-['Oswald',sans-serif] mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-200 text-sm mb-1 font-['Montserrat',sans-serif]">
                  {project.desc}
                </p>
                <span className="text-yellow-400 font-bold text-xs uppercase font-['Montserrat',sans-serif]">
                  {project.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          {/* Animated background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent),radial-gradient(circle_at_80%_80%,rgba(120,119,198,0.2),transparent)] pointer-events-none"></div>

          <div className="relative z-10 text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-yellow-400/10 border-2 border-yellow-400/30 px-6 py-3 rounded-full mb-8">
              <span className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></span>
              <span className="text-yellow-400 font-bold text-lg tracking-wide">Verified Professionals • Transparent Pricing • End‑to‑End Execution</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 bg-clip-text text-transparent mb-8 leading-tight">
              Why Pune's Smart Homeowners<br />Choose <span className="text-white drop-shadow-2xl">Hydra Corporation</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              15+ Years • 50+ Projects • Kharadi, Koregaon Park & Ahilyanagar
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* License Card */}
            <div className="group relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-yellow-400 rounded-3xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">📋</div>
                <h3 className="text-3xl font-black text-yellow-400 mb-4 text-center">Construction & Interiors</h3>
                <p className="text-gray-300 text-lg text-center">End-to-End Execution</p>
              </div>
            </div>

            {/* Experience Card */}
            <div className="group relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-emerald-400/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt delay-200"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-emerald-400 rounded-3xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">🔧</div>
                <h3 className="text-3xl font-black text-emerald-400 mb-4 text-center">15+</h3>
                <p className="text-gray-300 text-lg text-center">Years Pune Experience</p>
              </div>
            </div>

            {/* Projects Card */}
            <div className="group relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt delay-400"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-blue-400 rounded-3xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">🏠</div>
                <h3 className="text-3xl font-black text-blue-400 mb-4 text-center">50+</h3>
                <p className="text-gray-300 text-lg text-center">Projects Delivered</p>
              </div>
            </div>
          </div>

          {/* Trust Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl p-10 rounded-3xl border border-yellow-400/20 hover:shadow-2xl transition-all duration-300">
              <h4 className="text-2xl font-black text-yellow-400 mb-6 flex items-center gap-3">
                <span className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></span>
                Kothrud, Baner, Koregaon Park
              </h4>
              <ul className="space-y-3 text-lg text-gray-200">
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-emerald-400 rounded-full"></span>50+ Pune projects delivered</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-emerald-400 rounded-full"></span>2 year structural warranty</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-emerald-400 rounded-full"></span>WhatsApp weekly updates</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-xl p-10 rounded-3xl border border-emerald-400/20 hover:shadow-2xl transition-all duration-300">
              <h4 className="text-2xl font-black text-emerald-400 mb-6 flex items-center gap-3">
                <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></span>
                100% Client Satisfaction
              </h4>
              <ul className="space-y-3 text-lg text-gray-200">
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-yellow-400 rounded-full"></span>Transparent pricing</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-yellow-400 rounded-full"></span>Client-First Approach</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-yellow-400 rounded-full"></span>Zero Hidden Charges</li>
              </ul>
            </div>
          </div>

          {/* Mega CTA */}
          {/* Mobile-First Mega CTA */}
          <div className="text-center">
            <div className="max-w-md mx-auto mb-8">
              {/* Primary WhatsApp - Always prominent */}
              <a href="https://wa.me/919697985597?text=Hi%20Hydra%2C%20ready%20to%20start%20my%20project"
                className="w-full block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-6 rounded-2xl font-black text-xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transform transition-all duration-300 mb-4 flex items-center justify-center gap-3">
                <span className="text-2xl">📱</span>
                Start Project Today
              </a>

              {/* Secondary - Smaller on mobile */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/contact"
                  className="flex-1 bg-white/20 backdrop-blur-xl border-2 border-white/50 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 text-center">
                  Free Quote →
                </a>
                <a href="tel:+919697985597"
                  className="flex-1 bg-emerald-500/90 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-emerald-600 transition-all duration-300 text-center flex items-center justify-center gap-2">
                  <span>📞</span> Call Now
                </a>
              </div>
            </div>
            <p className="text-gray-400 text-lg">Trusted by Pune homeowners since 2010</p>
          </div>

        </div>
      </section>


      {/* 4. CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready For Your Dream Home?</h2>
          <p className="text-xl mb-8 opacity-90">Free site visit + detailed quote in 24 hours</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/919697985597" className="bg-yellow-400 text-gray-900 px-12 py-6 rounded-full font-bold text-xl hover:bg-yellow-500">
              WhatsApp Quote
            </a>
            <a href="/portfolio" className="border-2 border-white text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white hover:text-gray-900">
              See Portfolio
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
