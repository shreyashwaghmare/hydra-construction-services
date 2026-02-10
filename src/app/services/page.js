export const metadata = {
  title: "Construction Services in Pune – Bungalows & Interiors",
  description:
    "Bungalow construction, turnkey interiors, renovation, waterproofing & land development services in Pune – Baner, Wakad, Hinjewadi.",
}

export default function Services() {
  return (
    <div className="min-h-screen bg-gra-50">
      <div className="max-w-7xl mx-auto">
        <div className="relative min-h-[80vh] bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto h-full flex items-center px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 mt-8 lg:mt-12 rounded-2xl border border-white/30">
                  <div className="w-3 h-3 bg-green-400  rounded-full animate-pulse"></div>
                  <span className="text-white font-bold text-lg">Trusted Since 2010 • 50+ Projects</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
                  Pune's <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">Construction & Interior Design</span>
                  <br /> Experts
                </h1>
                <div className="grid md:grid-cols-3 gap-6 max-w-2xl bg-white/10 backdrop-blur-sm p-6 rounded-3xl">
                  <div className="text-center">
                    <div className="text-3xl font-black text-yellow-400">4.9★</div>
                    <div className="text-white/90 text-sm">Google Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-white">15+</div>
                    <div className="text-white/90 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-emerald-400">100%</div>
                    <div className="text-white/90 text-sm">On Budget</div>
                  </div>
                </div>
                <div className="pb-12 lg:pb-20">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://wa.me/919697985597?text=Free%20site%20visit" className="bg-white text-gray-900 py-4 px-8 rounded-2xl font-black text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 flex-1 text-center">
                      📍 Free Site Visit
                    </a>
                    <a href="/portfolio" className="border-2 border-white text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                      View Portfolio
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative w-full block">
                <div className="w-full h-96 rounded-3xl shadow-2xl overflow-hidden group hover:scale-105 transition-all duration-700 animate-float">
                  <img
                    src="/images/PCMC-false-ceiling.jpeg"
                    alt="Hydra Construction Project"
                    className="w-full h-full lg:h-[500px] object-cover group-hover:brightness-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="h-24 lg:h-32 bg-gradient-to-b from-gray-900 to-gray-50"></div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 -mt-12 lg:-mt-20">
          {/* Bungalow Construction */}
          <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl 
hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-white transition-all 
duration-700 hover:-translate-y-6 hover:rotate-1 cursor-grab active:cursor-grabbing">
            <div className="w-16 h-16 group-hover:scale-125 group-hover:rotate-12 
  bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto 
  transition-all duration-500 group-hover:shadow-2xl">
              🏠
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Bungalow Construction</h3>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>• 3BHK/4BHK complete builds</li>
              <li>• Foundation to finishout</li>
              <li>• Design for Every Budget</li>
              <li>• Starting ₹75 Lac</li>
            </ul>
            <a href="https://wa.me/919697985597?text=Bungalow%20quote"
              className="w-full z-20 relative bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-xl font-bold text-center block shadow-xl hover:shadow-2xl border-2 border-blue-400 mt-4 flex items-center justify-center gap-2 transition-all duration-300">
              Get Quote →
            </a>
          </div>

          {/* Kitchen Remodeling */}
          <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl 
hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-white transition-all 
duration-700 hover:-translate-y-6 hover:rotate-1 cursor-grab active:cursor-grabbing">
            <div className="w-16 h-16 group-hover:scale-125 group-hover:rotate-12 
  bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto 
  transition-all duration-500 group-hover:shadow-2xl">
              🍳
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Kitchen Remodeling</h3>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>• L-Shape & Island designs</li>
              <li>• Modular cabinets</li>
              <li>• Pune granite specialist</li>
              <li>• ₹3-8 Lac range</li>
            </ul>
            <a href="https://wa.me/919697985597?text=Kitchen%20quote"
              className="w-full z-20 relative bg-yellow-500 hover:bg-yellow-600 text-gray-900 py-4 px-6 rounded-xl font-bold text-center block shadow-xl hover:shadow-2xl border-2 border-yellow-400 mt-4 flex items-center justify-center gap-2 transition-all duration-300">
              Get Quote →
            </a>
          </div>

          {/* Bathroom Design */}
          <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl 
hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-white transition-all 
duration-700 hover:-translate-y-6 hover:rotate-1 cursor-grab active:cursor-grabbing">
            <div className="w-16 h-16 group-hover:scale-125 group-hover:rotate-12 
  bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto 
  transition-all duration-500 group-hover:shadow-2xl">
              🛁
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Bathroom Design</h3>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>• Wet room solutions</li>
              <li>• Waterproofing included</li>
              <li>• Premium fittings</li>
              <li>• ₹2.5-6 Lac range</li>
            </ul>
            <a href="https://wa.me/919697985597?text=Bathroom%20quote"
              className="w-full z-20 relative bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl font-bold text-center block shadow-xl hover:shadow-2xl border-2 border-green-400 mt-4 flex items-center justify-center gap-2 transition-all duration-300">
              Get Quote →
            </a>
          </div>

          {/* Full Interior */}
          <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl 
hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-white transition-all 
duration-700 hover:-translate-y-6 hover:rotate-1 cursor-grab active:cursor-grabbing">
            <div className="w-16 h-16 group-hover:scale-125 group-hover:rotate-12 
  bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto 
  transition-all duration-500 group-hover:shadow-2xl">
              🛋️
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Full Interior</h3>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>• False ceiling + painting</li>
              <li>• Custom furniture</li>
              <li>• Wardrobes + TV units</li>
              <li>• ₹800/sqft</li>
            </ul>
            <a href="https://wa.me/919697985597?text=Interior%20quote"
              className="w-full z-20 relative bg-purple-500 hover:bg-purple-600 text-white py-4 px-6 rounded-xl font-bold text-center block shadow-xl hover:shadow-2xl border-2 border-purple-400 mt-4 flex items-center justify-center gap-2 transition-all duration-300">
              Get Quote →
            </a>
          </div>

          {/* Building AMC */}
          <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl 
hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-white transition-all 
duration-700 hover:-translate-y-6 hover:rotate-1 cursor-grab active:cursor-grabbing">
            <div className="w-16 h-16 group-hover:scale-125 group-hover:rotate-12 
  bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto 
  transition-all duration-500 group-hover:shadow-2xl">
              🔧
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Building AMC</h3>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>• Annual maintenance</li>
              <li>• 24/7 emergency support</li>
              <li>• Society contracts</li>
              <li>• ₹25k/year</li>
            </ul>
            <a href="https://wa.me/919697985597?text=AMC%20quote"
              className="w-full z-20 relative bg-indigo-500 hover:bg-indigo-600 text-white py-4 px-6 rounded-xl font-bold text-center block shadow-xl hover:shadow-2xl border-2 border-indigo-400 mt-4 flex items-center justify-center gap-2 transition-all duration-300">
              Get Quote →
            </a>
          </div>

          {/* Waterproofing */}
          <div className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl 
hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-white transition-all 
duration-700 hover:-translate-y-6 hover:rotate-1 cursor-grab active:cursor-grabbing">
            <div className="w-16 h-16 group-hover:scale-125 group-hover:rotate-12 
  bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto 
  transition-all duration-500 group-hover:shadow-2xl">
              💧
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Waterproofing</h3>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>• Terrace + sinking slabs</li>
              <li>• Bathroom leaks</li>
              <li>• 10-year warranty</li>
              <li>• ₹45/sqft</li>
            </ul>
            <a href="https://wa.me/919697985597?text=Waterproofing%20quote"
              className="w-full z-20 relative bg-teal-500 hover:bg-teal-600 text-white py-4 px-6 rounded-xl font-bold text-center block shadow-xl hover:shadow-2xl border-2 border-teal-400 mt-4 flex items-center justify-center gap-2 transition-all duration-300">
              Get Quote →
            </a>
          </div>
        </div>
        {/*Best Interior designer in Pune */}
        
<div className="relative -mt-20 lg:-mt-32 pt-40 pb-20 lg:pt-52 overflow-hidden">
  {/* Multi-layer gradient that starts TRANSPARENT from white services above */}
  <div className="absolute inset-0 bg-gradient-to-b from-gray-50/0 via-blue-900 to-indigo-600" />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900 to-blue-900" />
  
  <div className="max-w-6xl mx-auto px-4 lg:px-6 relative z-10">
    {/* Header with drop shadow for readability */}
            <div className="text-center mb-20">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-center mx-auto max-w-full px-6 sm:px-8 leading-none tracking-tight [-webkit-line-clamp:1]">
                <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent drop-shadow-xl block w-full hyphens-auto">
                  Pune Homeowners’ Trusted Choice for Construction & Interiors
                </span>
              </h1>
      <div className="inline-block bg-gradient-to-r from-white via-white/90 to-white/70 backdrop-blur-sm px-8 py-4 rounded-3xl border border-white/50 shadow-2xl">
        <p className="text-lg md:text-xl font-semibold text-gray-900 tracking-wide">
          Expert Team Support • Free Site Visits • 15+ Years Pune Experience
        </p>
      </div>
    </div>
    
    {/* Cards - Enhanced glassmorphism */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* Card 1 - Interior Designer */}
      <a href="/services/best-interior-designer-pune" className="group block p-10 lg:p-12 bg-white/5 backdrop-blur-3xl border border-white/20 hover:border-yellow-400/70 rounded-3xl hover:shadow-2xl hover:bg-white/15 transition-all duration-700 hover:-translate-y-3">
        <div className="w-24 h-24 lg:w-28 lg:h-28 mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 rounded-3xl bg-gradient-to-br from-purple-400/90 to-pink-400/90 flex items-center justify-center text-4xl shadow-2xl border-4 border-white/40 group-hover:border-white/70">
          🏆
        </div>
        <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 text-center group-hover:text-yellow-300 transition-all duration-300 drop-shadow-2xl">
          Best Interior Designer in Pune
        </h2>
        <p className="text-white/85 text-lg lg:text-xl leading-relaxed mb-8 text-center drop-shadow-lg">
          Luxury kitchens, bathrooms, false ceilings. 50+ projects completed in Kothrud, Baner, Koregaon Park.
        </p>
        <div className="pt-6 border-t-2 border-white/20 text-center">
          <span className="text-yellow-300 font-black text-xl group-hover:text-yellow-200 transition-all duration-300 inline-flex items-center gap-2 hover:gap-4">
            Start Your Project → 
          </span>
        </div>
      </a>
      
      {/* Card 2 - Ahilyanagar */}
      <a href="/services/ahilyanagar-land-developer" className="group block p-10 lg:p-12 bg-white/5 backdrop-blur-3xl border border-white/20 hover:border-yellow-400/70 rounded-3xl hover:shadow-2xl hover:bg-white/15 transition-all duration-700 hover:-translate-y-3">
        <div className="w-24 h-24 lg:w-28 lg:h-28 mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 rounded-3xl bg-gradient-to-br from-teal-400/90 to-emerald-500/90 flex items-center justify-center text-4xl shadow-2xl border-4 border-white/40 group-hover:border-white/70">
          🏠
        </div>
        <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 text-center group-hover:text-yellow-300 transition-all duration-300 drop-shadow-2xl">
          Ahilyanagar's Premium Land Developer
        </h2>
        <p className="text-white/85 text-lg lg:text-xl leading-relaxed mb-8 text-center drop-shadow-lg">
          Premium bungalows & complete interiors. Design & Execution experts quality guaranteed.
        </p>
        <div className="pt-6 border-t-2 border-white/20 text-center">
          <span className="text-yellow-300 font-black text-xl group-hover:text-yellow-200 transition-all duration-300 inline-flex items-center gap-2 hover:gap-4">
            View Portfolio → 
          </span>
        </div>
      </a>
    </div>
  </div>
</div>

        {/* NEW: Trust Signals */}
        <div className="mt-24 text-center px-4">
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-12">
            Why Pune Trusts Us
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3 p-6">
              <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center text-3xl shadow-lg">📋</div>
              <h3 className="text-xl font-bold text-gray-900">Since 2010</h3>
              <p className="text-sm text-gray-500">Trusted Building Partner</p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6">
              <div className="w-20 h-20 bg-yellow-100 rounded-3xl flex items-center justify-center text-3xl shadow-lg">⭐</div>
              <h3 className="text-xl font-bold text-gray-900">4.9★</h3>
              <p className="text-sm text-gray-500">Google Rating</p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center text-3xl shadow-lg">🏆</div>
              <h3 className="text-xl font-bold text-gray-900">2024 Award</h3>
              <p className="text-sm text-gray-500">Pune Builder</p>
            </div>
            <div className="flex flex-col items-center space-y-3 p-6">
              <div className="w-20 h-20 bg-purple-100 rounded-3xl flex items-center justify-center text-3xl shadow-lg">🔧</div>
              <h3 className="text-xl font-bold text-gray-900">15+</h3>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>
          </div>
        </div>
        {/* NEW: Testimonials */}
        <div className="mt-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 rounded-3xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-2 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
            Pune Homeowners Love Us
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                "Kitchen transformation exceeded all expectations. On time, on budget!"
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4">RS</div>
                <div>
                  <p className="font-bold text-xl text-gray-900">Rajesh Sharma</p>
                  <p className="text-gray-500">Koregaon Park</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                "Waterproofing saved our bungalow. 10-year warranty gives total peace of mind."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-blue-400 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4">AP</div>
                <div>
                  <p className="font-bold text-xl text-gray-900">Anita Patil</p>
                  <p className="text-gray-500">Viman Nagar</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                "Complete 4BHK build was flawless. Highly recommend for Pune!"
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center text-white font-bold text-xl mr-4">VK</div>
                <div>
                  <p className="font-bold text-xl text-gray-900">Vikram K.</p>
                  <p className="text-gray-500">Baner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* NEW: Hero CTA */}
        <div className=" text-center bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-20 px-4 rounded-1xl shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-2xl">
            Ready For Your Dream Home?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Free site visits • Expert Engineering Team • 10-years warranty • Smart Designs • On-Time Delivery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <a href="https://wa.me/919697985597?text=Free%20site%20visit%20please"
              className="bg-white text-gray-900 py-5 px-10 rounded-2xl font-black text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 flex items-center justify-center">
              📍 Free Site Visit
            </a>
            <a href="services"
              className="border-3 border-white text-white py-5 px-10 rounded-2xl font-black text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
              View All Services
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
