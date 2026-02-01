export default function Home() {
  return (
    <>
      {/* Safe spacer div - invisible */}

      <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/50 to-black relative overflow-hidden pb-24">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />

        <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col justify-center text-white text-center min-h-[70vh]">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 drop-shadow-2xl leading-tight">
            FROM ORDINARY HOMES
          </h1>

          <div className="text-5xl md:text-7xl lg:text-8xl font-black text-yellow-400 drop-shadow-2xl mb-8 tracking-widest">
            TO
          </div>

          <div className="text-4xl md:text-6xl lg:text-7xl font-black mb-12 drop-shadow-2xl leading-tight text-yellow-400">
            DREAM BUNGALOWS
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 opacity-90 max-w-4xl mx-auto">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="font-bold text-xl">🏠</span>
              </div>
              <span className="text-lg md:text-xl font-bold">50+ Pune Projects</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                <span className="font-bold text-xl">⏱️</span>
              </div>
              <span className="text-lg md:text-xl font-bold">15+ Years</span>
            </div>
          </div>

          <a
            href="https://wa.me/919697985597"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-gray-900 px-10 py-5 md:px-16 md:py-6 rounded-full font-black text-lg md:text-xl shadow-2xl hover:shadow-yellow-500/50 transform hover:scale-105 transition-all duration-300 inline-block border-4 border-white/20 mx-auto"
          >
            GET FREE QUOTE NOW
          </a>
        </div>

        <img
          src="/images/hero-bungalow.jpg"
          alt="Hydra Construction"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
      </section>

      {/* 1. SERVICES GRID */}
      {/* 1. PROFESSIONAL 6-SERVICES GRID */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">Complete Building Solutions</h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            One contractor for all your Pune property needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* 1. Bungalow Construction */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl">
                🏠
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bungalow Construction</h3>
              <p className="text-gray-600 mb-4">3BHK/4BHK from foundation to finishout</p>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">Starting ₹75 Lac</span>
            </div>

            {/* 2. Bathroom Design */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-indigo-100 rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl">
                🛁
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bathroom Design</h3>
              <p className="text-gray-600 mb-4">Modular + luxury wet room solutions</p>
              <span className="inline-block bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full font-medium">₹2.5-6 Lac</span>
            </div>

            {/* 3. Kitchen Remodeling */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-yellow-100 rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl">
                🍳
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Kitchen Remodeling</h3>
              <p className="text-gray-600 mb-4">L-Shape, Island, Modular Pune kitchens</p>
              <span className="inline-block bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full font-medium">₹3-8 Lac</span>
            </div>

            {/* 4. Interior Design */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl">
                🛋️
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Full Interior</h3>
              <p className="text-gray-600 mb-4">Furniture + false ceiling + painting</p>
              <span className="inline-block bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full font-medium">₹800/sqft</span>
            </div>

            {/* 5. Building AMC */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-green-100 rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl">
                🔧
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Building AMC</h3>
              <p className="text-gray-600 mb-4">Annual maintenance + repairs contract</p>
              <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full font-medium">₹25k/year</span>
            </div>

            {/* 6. Waterproofing */}
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="w-20 h-20 bg-teal-100 rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl">
                💧
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Waterproofing</h3>
              <p className="text-gray-600 mb-4">Terrace, bathroom, sinking foundation</p>
              <span className="inline-block bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full font-medium">₹45/sqft</span>
            </div>
          </div>
        </div>
      </section>


      {/* 2. RECENT PROJECTS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Recent Work</h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Baner 4BHK Bungalow - Delivered Dec 2025
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-100 h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              {/* Add your phone photos */}
              <img
                src="/images/duplex-wakad.webp"
                alt="Hydra Construction" />
            </div>
            <div className="bg-gray-100 h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
              <img
                src="/images/island-kitchen.webp"
                alt="Hydra Construction" />
            </div>
            <div className="bg-gray-100 h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
            <img
                src="/images/service-interior.jpg"
                alt="Hydra Construction" />
            </div>
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
        <span className="text-yellow-400 font-bold text-lg tracking-wide">MH/2026/001 LICENSED</span>
      </div>
      <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 bg-clip-text text-transparent mb-8 leading-tight">
        Why Pune's Smart Homeowners<br/>Choose <span className="text-white drop-shadow-2xl">Hydra</span>
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
          <h3 className="text-3xl font-black text-yellow-400 mb-4 text-center">MH/2026/001</h3>
          <p className="text-gray-300 text-lg text-center">Government Licensed</p>
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
          Wakad, Baner, Koregaon Park
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
          <li className="flex items-center gap-3"><span className="w-2 h-2 bg-yellow-400 rounded-full"></span>Family-owned since 2010</li>
          <li className="flex items-center gap-3"><span className="w-2 h-2 bg-yellow-400 rounded-full"></span>No surprise costs</li>
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
