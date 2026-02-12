'use client'
import { useState, useEffect } from 'react'

export default function Portfolio() {
  const projects = [

    {
      id: 1,
      category: "Bungalow",
      title: "Baner 4BHK Complete",
      img: "/images/service-interior.jpg",

      challenge:
        "Client wanted luxury look within tight 32L budget and limited plot width.",

      solution:
        "Used column-free design, cost-efficient materials, and modular interiors to maximize space and aesthetics.",

      outcome:
        "Completed in 7 months, 12% under estimated cost with zero rework.",

      keywords:
        "bungalow construction baner, 4bhk bungalow pune, budget bungalow contractor pune",
    },


    {
      id: 2,
      category: "Kitchen",
      title: "Wakad Modular L-Shape",
      img: "/images/kitchen-L-Wakad.jpg",

      challenge:
        "Small kitchen space with multiple utility requirements and poor ventilation.",

      solution:
        "Designed L-shape modular layout with chimney optimization and moisture-resistant plywood.",

      outcome:
        "30% more storage achieved and improved workflow for daily cooking.",

      keywords:
        "modular kitchen wakad, L shape kitchen pune, kitchen renovation contractor",
    },


    {
      id: 3,
      category: "Bathroom",
      title: "Koregaon Wet Room",
      img: "/images/Koregaon-Park-wet-Room.jpg",

      challenge:
        "Old bathroom with leakage, poor slope and outdated plumbing.",

      solution:
        "Complete re-tiling with epoxy waterproofing, concealed plumbing and modern fixtures.",

      outcome:
        "Zero leakage system with hotel-style wet room finish.",

      keywords:
        "bathroom renovation koregaon park, wet room design pune, waterproof bathroom",
    },


    {
      id: 4,
      category: "Interior",
      title: "PCMC False Ceiling",
      img: "/images/PCMC-false-ceiling.jpeg",

      challenge:
        "Client needed premium lighting without reducing room height.",

      solution:
        "Gypsum slim ceiling with indirect LED profiles and AC duct planning.",

      outcome:
        "Luxury ambience with only 3-inch height reduction.",

      keywords:
        "false ceiling pcmc, gypsum ceiling pune, led ceiling contractor",
    },


    {
      id: 5,
      category: "Bungalow",
      title: "Hinjewadi Foundation",
      img: "/images/hinjewadi-Foundation.jpg",

      challenge:
        "Black soil plot requiring strong structural foundation.",

      solution:
        "Soil testing followed by raft foundation and anti-termite treatment.",

      outcome:
        "Earthquake-resistant base ready for G+2 construction.",

      keywords:
        "foundation contractor hinjewadi, raft foundation pune, bungalow civil work",
    },


    {
      id: 6,
      category: "Waterproofing",
      title: "Terrace Complete",
      img: "/images/terrace-gazebo.jpg",

      challenge:
        "Repeated ceiling dampness due to old terrace waterproofing failure.",

      solution:
        "PU coating + china mosaic with proper slope correction.",

      outcome:
        "100% leakage stop with 10-year performance life.",

      keywords:
        "terrace waterproofing pune, roof leakage repair, waterproofing contractor",
    },


    {
      id: 7,
      category: "Kitchen",
      title: "Baner Island Kitchen",
      img: "/images/island-kitchen.webp",

      challenge:
        "Open kitchen required modern island within structural limitations.",

      solution:
        "Custom island with quartz top, electrical routing and soft close hardware.",

      outcome:
        "International style kitchen delivered in 18 days.",

      keywords:
        "island kitchen baner, luxury kitchen pune, modular kitchen contractor",
    },


    {
      id: 8,
      category: "AMC",
      title: "Society Repairs",
      img: "/images/building-repairs.jpg",

      challenge:
        "Old society with plaster falling, plumbing failures and cracks.",

      solution:
        "Structural audit, polymer plaster, plumbing replacement and painting.",

      outcome:
        "40% reduction in maintenance complaints.",

      keywords:
        "society repair pune, building maintenance amc, civil repair contractor",
    },


    {
      id: 9,
      category: "Bathroom",
      title: "Luxury Shower",
      img: "/images/luxury-showers.webp",

      challenge:
        "Client wanted spa-like shower in compact bathroom.",

      solution:
        "Rain shower system, niche storage and anti-skid flooring.",

      outcome:
        "Premium experience within mid-range budget.",

      keywords:
        "luxury bathroom pune, shower renovation, bathroom contractor",
    },


    {
      id: 10,
      category: "Interior",
      title: "Painting Complete",
      img: "/images/fresh-painted-house.jpg",

      challenge:
        "Old home with damp patches and uneven surfaces.",

      solution:
        "Putty leveling, primer sealing and Asian Paints finish.",

      outcome:
        "Brand new look with 5-year durability.",

      keywords:
        "home painting pune, interior painting contractor, repainting service",
    },


    {
      id: 11,
      category: "Bungalow",
      title: "Roof Casting",
      img: "/images/rcc-roof- casting.jpg",

      challenge:
        "Monsoon timeline and need for crack-free RCC slab.",

      solution:
        "M20 concrete with vibrator compaction and curing plan.",

      outcome:
        "Leak-proof roof ready for next floor.",

      keywords:
        "rcc roof pune, slab casting contractor, civil construction",
    },


    {
      id: 12,
      category: "Waterproofing",
      title: "Basement Fix",
      img: "/images/basement-work.jpg",

      challenge:
        "Basement seepage causing fungus and odor issues.",

      solution:
        "Negative side waterproofing with injection grouting.",

      outcome:
        "Dry basement usable for storage and parking.",

      keywords:
        "basement waterproofing pune, seepage repair, injection grouting",
    }

  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100
 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-blue-900 mb-4">
            Interior Design & Renovation <span className="text-emerald-500">Portfolio</span> – Pune Projects
          </h1>
          <p className="text-xl text-emerald-900 mb-16 max-w-2xl mx-auto">
            Showcasing 50+ completed projects across Baner, Koregaon Park, Kothrud, Wakad, and more — from modular kitchens to luxury interiors.
          </p>

        </div>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": projects.map((p, i) => ({
              "@type": "Article",
              "position": i + 1,
              "name": p.title,
              "description": `${p.challenge} ${p.solution} ${p.outcome}`,
              "image": p.img,
            }))
          })}
        </script>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div key={project.id}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 border border-blue-200
  hover:border-blue-400 bg-gradient-to-b from-white to-blue-50/30">

              {/* IMAGE */}
              <div className="h-64 relative rounded-t-2xl overflow-hidden">

                <img
                  src={project.img}
                  alt={`${project.title} – ${project.category}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* OVERLAY */}
                <div
                  onClick={() =>
                    window.open(
                      `https://wa.me/919697985597?text=Interested in your ${project.title} project. Please share details.`,
                      "_blank"
                    )
                  }
                  className="
    absolute inset-0 bg-black/70
    opacity-0 group-hover:opacity-100
    transition flex items-center justify-center
    pointer-events-none group-hover:pointer-events-auto
  "  >
                  <span className="text-white font-semibold">
                    Read Case Study →
                  </span>
                </div>

              </div>


              {/* CONTENT */}
              <div className="p-6">

                <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-bold">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold mt-3 text-gray-900">
                  {project.title}
                </h3>


                {/* 🔥 CASE STUDY PREVIEW */}
                <div className="mt-4 space-y-2 text-sm text-gray-800">

                  <p>
                    <strong>Challenge:</strong> {project.challenge}
                  </p>

                  <p>
                    <strong>Solution:</strong> {project.solution}
                  </p>

                  <p className="font-semibold text-green-700">
                    Outcome: {project.outcome}
                  </p>

                </div>


                {/* ACTIONS */}
                <div className="mt-5 flex flex-col gap-3">

                  <a
                    href={`https://wa.me/919697985597?text=Saw case study of ${project.title}. Want similar solution.`}
                    className="bg-emerald-600 text-white text-center py-3 rounded-xl font-bold hover:scale-[1.02] transition"
                  >
                    💬 Get Similar Solution
                  </a>

                  <a
                    href={`https://wa.me/919697985597?text=Need cost for project like ${project.title}`}
                    className="bg-gray-900 text-white text-center py-3 rounded-xl font-bold"
                  >
                    Ask Cost & Timeline
                  </a>

                </div>

              </div>
            </div>

          ))}

        </div>


        {/* CTA */}
        <div className="text-center mt-20 py-12">
          <h3 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Ready to see more?</h3>
          <p className="text-l text-gray-600 mb-8 max-w-4xl mx-auto">At Hydra Interiors & Construction, we deliver premium interiors across Pune — from Baner, Koregaon Park, Kothrud, Wakad, and more. Our portfolio showcases 50+ bungalow projects with modular kitchens, walk-in wardrobes, smart lighting, and turnkey interiors designed for modern lifestyles.</p>

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
