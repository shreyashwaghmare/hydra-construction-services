'use client'
import { useState, useEffect } from 'react'

export default function Portfolio() {
  const projects = [
    { id: 1, category: 'Bungalow', title: 'Baner 4BHK Complete', img: '/images/service-interior.jpg' },
    { id: 2, category: 'Kitchen', title: 'Wakad Modular L-Shape', img: '/images/kitchen-L-Wakad.jpg' },
    { id: 3, category: 'Bathroom', title: 'Koregaon Wet Room', img: '/images/Koregaon-Park-wet-Room.jpg' },
    { id: 4, category: 'Interior', title: 'PCMC False Ceiling', img: '/images/PCMC-false-ceiling.jpeg' },
    { id: 5, category: 'Bungalow', title: 'Hinjewadi Foundation', img: '/images/hinjewadi-Foundation.jpg' },
    { id: 6, category: 'Waterproofing', title: 'Terrace Complete', img: '/images/terrace-gazebo.jpg' },
    { id: 7, category: 'Kitchen', title: 'Baner Island Kitchen', img: '/images/island-kitchen.webp' },
    { id: 8, category: 'AMC', title: 'Society Repairs', img: '/images/building-repairs.jpg' },
    { id: 9, category: 'Bathroom', title: 'Luxury Shower', img: '/images/luxury-showers.webp' },
    { id: 10, category: 'Interior', title: 'Painting Complete', img: '/images/fresh-painted-house.jpg' },
    { id: 11, category: 'Bungalow', title: 'Roof Casting', img: '/images/rcc-roof- casting.jpg' },
    { id: 12, category: 'Waterproofing', title: 'Basement Fix', img: '/images/basement-work.jpg' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100
 py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-blue-900 mb-4">
  Interior Design & Renovation <span className="text-emerald-500">Portfolio</span> – Pune Projects
</h1>
<p className="text-xl text-emerald-900 mb-16 max-w-2xl mx-auto">
  Showcasing 50+ completed projects across Baner, Koregaon Park, Kothrud, Wakad, and more — from modular kitchens to luxury interiors.
</p>

        </div>
        {/* SIMPLE 2-COLUMN GRID - 100% WORKING */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-gray-200">

              {/* Image */}
              <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-2xl overflow-hidden ">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&fit=crop'}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-bold">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mt-3 mb-4">{project.title}</h3>

                {/* Buttons - ALWAYS VISIBLE */}
                <div className="relative group mt-4 flex flex-col sm:flex-row gap-4 p-2 rounded-3xl bg-white/10 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500">

                  {/* Get Quote Button */}
                  <a
                    href={`https://wa.me/919697985597?text=Hi%20Hydra%2C%20LOVED%20your%20${project.title}%20${project.category}%20project%20%F0%9F%98%98%0AWant%20similar%20in%20Pune%0ABudget%3A%20Rs%5B%5D`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 via-green-500 to-green-600 text-white font-bold text-lg shadow-md hover:shadow-2xl hover:-translate-y-1 transform transition-all duration-300"
                  >
                    💬 Get Quote
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  {/* View Details Button */}
                  <a
                    href="https://wa.me/919697985597"
                    className="flex-1 flex items-center justify-center px-6 py-3 rounded-2xl bg-gray-900 text-white font-bold text-lg shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300"
                  >
                    🔍 View Details
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20 py-12">
          <h3 className="text-5xl font-bold text-gray-900 mb-6">Ready to see more?</h3>
          <p className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">At Hydra Interiors & Construction, we deliver premium interiors across Pune — from Baner, Koregaon Park, Kothrud, Wakad, and more. Our portfolio showcases 50+ bungalow projects with modular kitchens, walk-in wardrobes, smart lighting, and turnkey interiors designed for modern lifestyles.</p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <a
              href="https://wa.me/919697985597?text=Hi!%20Send%20me%20your%20portfolio"
              className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              📱 Get WhatsApp Quote
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <a
              href="/portfolio-full"
              className="group bg-white hover:bg-gray-50 border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              👁️ View All Projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
