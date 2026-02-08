'use client'
import { useState } from "react"

export const metadata = {
  title: "Complete Work Gallery – Hydra Corporation Pune",
  description:
    "Full gallery of construction and interior projects by Hydra Corporation Pune – site progress, finished homes, renovation transformations.",
alternates: {
    canonical: "/portfolio",
  }
}

export default function FullPortfolio() {
    const [activeFilter, setActiveFilter] = useState('All')

    const allProjects = [
        // Bungalows (30+)
        { id: 1, category: 'Bungalow', title: 'Baner 4BHK Complete', img: '/images/service-interior.jpg' },
        { id: 2, category: 'Bungalow', title: 'Hinjewadi 3BHK', img: '/images/3BHK-hinjewadi.jpg' },
        { id: 3, category: 'Bungalow', title: 'Wakad Duplex', img: '/images/duplex-wakad.webp' },

        // Kitchens (10+)
        { id: 4, category: 'Kitchen', title: 'Wakad L-Shape Modular', img: '/images/kitchen-L-Wakad.jpg' },
        { id: 5, category: 'Kitchen', title: 'Baner Island Kitchen', img: '/images/island-kitchen.webp' },

        // Bathrooms (10+)
        { id: 6, category: 'Bathroom', title: 'Koregaon Wet Room', img: '/images/Koregaon-Park-wet-Room.jpg' },
        { id: 7, category: 'Bathroom', title: 'Luxury Master Bath', img: '/images/luxury-showers.jpg' },

        // Interiors
        { id: 8, category: 'Interior', title: 'PCMC False Ceiling', img: '/images/PCMC-false-ceiling.jpeg' },

        // Waterproofing & AMC
        { id: 9, category: 'Waterproofing', title: 'Terrace Complete', img: '/images/terrace-gazebo.jpg' },
        { id: 10, category: 'AMC', title: 'Society Repairs', img: '/images/building-repairs.jpg' },
    ]

    // FIXED: Use filteredProjects in grid
    const filteredProjects = activeFilter === 'All'
        ? allProjects
        : allProjects.filter(project => project.category === activeFilter)

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero */}
            <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-24 text-center">
                <div className="max-w-5xl mx-auto px-4">
                    <h1 className="text-5xl md:text-6xl font-black mb-6 antialiased">Our Signature Bungalows & Home Interiors in Pune</h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto text-white-700 antialiased mb-4">
                        50+ Pune bungalow projects • Before & After • Real photos • Modular kitchens, wardrobes, bathrooms, and complete interiors
                    </p>
                    <div className="my-6 flex justify-center">
                        <span className="w-24 h-1 bg-yellow-400 rounded-full"></span>
                    </div>
                    <p className="text-2xl md:text-2xl max-w-4xl mx-auto text-white-900  antialiased mb-12 leading-relaxed">
                        Hydra Interiors & Construction showcases our most luxurious and thoughtfully designed homes across Pune.
                        From <span className="font-semibold text-yellow-500">modular kitchens</span> to <span className="font-semibold text-emerald-500">complete bungalow interiors</span>, explore 50+ projects that blend <span className="italic">style, functionality, and modern living</span>.
                    </p>
                    <a href="https://wa.me/919697985597?text=Hi!%20Need%20full%20portfolio%20PDF"
                        className="mt-8 inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300">
                        📱 Get PDF Portfolio
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* WORKING Filters */}
                <div className="flex flex-wrap gap-3 justify-center mb-16">
                    {['All', 'Bungalow', 'Kitchen', 'Bathroom', 'Interior', 'Waterproofing', 'AMC'].map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-6 py-3 font-bold rounded-xl shadow-md transition-all duration-300 text-sm antialiased ${activeFilter === category
                                ? 'bg-blue-600 text-white shadow-blue-400 border-2 border-blue-500'
                                : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-blue-400 hover:bg-blue-50 hover:shadow-lg'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* FIXED Grid - Uses filteredProjects */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map(project => (  // ← FIXED: filteredProjects
                        <div key={project.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="h-64 bg-gray-100 overflow-hidden rounded-t-2xl">
                                <img
                                    src={project.img}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-bold uppercase tracking-wide antialiased">
                                    {project.category}
                                </span>
                                <h3 className="text-xl font-bold text-gray-900 mt-3 mb-4 leading-tight antialiased">
                                    {project.title}
                                </h3>
                                <div className="flex gap-3">
                                    <a href="https://wa.me/919697985597"
                                        className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-xl font-bold text-center transition-colors duration-300 antialiased">
                                        Get Quote
                                    </a>
                                    <a
                                        href={`/contact`}
                                        className="px-6 py-3 bg-white text-gray-900 border-2 border-gray-200 hover:border-gray-400 hover:bg-gray-50 hover:shadow-lg rounded-xl font-bold text-lg transition-all duration-300 antialiased hover:-translate-y-0.5 hover:scale-[1.02]"
                                    >
                                        Details
                                    </a>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Project count */}
                <div className="text-center mt-12">
                    <p className="text-lg text-gray-600 font-semibold antialiased">
                        Showing <span className="font-bold text-gray-900">{filteredProjects.length}</span> of <span className="font-bold text-gray-900">{allProjects.length}</span> projects
                    </p>
                </div>
            </div>
            <section className="py-16 bg-gray-50">
  <div className="max-w-4xl mx-auto text-center px-6">
    
    <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6">
      Want a dream interior for your Pune home?
    </h2>
    
    <p className="text-xl md:text-2xl text-gray-700 mb-8">
      📱 Get a free quote or site visit today!
    </p>

    <a
      href="https://wa.me/919697985597"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-gray-900 font-bold text-xl rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transform transition-all duration-300"
    >
      💬 Contact Us Now
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </a>

  </div>
</section>


            <style jsx>{`
        * { 
          -webkit-font-smoothing: antialiased; 
          -moz-osx-font-smoothing: grayscale; 
        }
      `}</style>
        </div>
    )
}
