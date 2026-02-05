export default function AhilyanagarLandDev() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto">
        <div className="relative min-h-[80vh] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto h-full flex items-center px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 mt-8 lg:mt-12 rounded-2xl border border-white/30">
                  <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-bold text-lg">NA Plots • Farm Plots • Layouts</span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
                  Ahilyanagar's <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">Top Land</span>
                  <br className="hidden lg:block" />
                  <span className="block lg:inline">Developers</span>
                </h1>
                <div className="grid md:grid-cols-3 gap-6 max-w-2xl bg-white/10 backdrop-blur-sm p-6 rounded-3xl">
                  <div className="text-center">
                    <div className="text-3xl font-black text-amber-400">100+</div>
                    <div className="text-white/90 text-sm">Acres Developed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-white">50+</div>
                    <div className="text-white/90 text-sm">Layout Sanctions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-orange-400">24 Months</div>
                    <div className="text-white/90 text-sm">Avg Project Time</div>
                  </div>
                </div>
                <div className="pb-12 lg:pb-20">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="/contact" 
                       className="bg-white text-gray-900 py-4 px-8 rounded-2xl font-black text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 flex-1 text-center">
                      🗺️ Free Land Consultation
                    </a>
                    <a href="/about" className="border-2 border-white text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                      Our Projects
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="w-full h-96 rounded-3xl shadow-2xl overflow-hidden group hover:scale-105 transition-all duration-700">
                  <img
                    src="/images/hero-bungalow.webp"
                    alt="Ahilyanagar Land Development"
                    className="w-full h-full object-cover group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-24 lg:h-32 bg-gradient-to-b from-blue-900 to-gray-50"></div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 lg:-mt-20 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Plotting Layout */}
          <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-4 cursor-pointer">
            <div className="w-20 h-20 group-hover:scale-110 bg-gradient-to-br from-amber-400 to-yellow-500 text-gray-900 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto shadow-xl transition-all duration-500">
              🗺️
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Plotting Layout</h3>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>• NA & Non-NA plots</li>
              <li>• Boundary demarcation</li>
              <li>• Plot numbering</li>
              <li>• Starting 1 acre</li>
            </ul>
            <a href="https://wa.me/919697985597?text=Plotting%20quote" className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 py-4 px-6 rounded-xl font-bold text-center block shadow-xl hover:shadow-2xl transition-all duration-300">
              Get Quote →
            </a>
          </div>

          {/* Layout Sanction */}
          <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-4 cursor-pointer">
            <div className="w-20 h-20 group-hover:scale-110 bg-gradient-to-br from-emerald-400 to-teal-500 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto shadow-xl transition-all duration-500">
              📋
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Layout Sanction</h3>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>• PMRDA approvals</li>
              <li>• Collector NA order</li>
              <li>• 45-day clearance</li>
              <li>• 100% success rate</li>
            </ul>
            <a href="https://wa.me/919697985597?text=Sanction%20quote" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 px-6 rounded-xl font-bold text-center block shadow-xl hover:shadow-2xl transition-all duration-300">
              Get Quote →
            </a>
          </div>

          {/* Land Development */}
          <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-4 cursor-pointer">
            <div className="w-20 h-20 group-hover:scale-110 bg-gradient-to-br from-blue-400 to-indigo-500 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto shadow-xl transition-all duration-500">
              🚜
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Land Development</h3>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>• Leveling & clearing</li>
              <li>• Road construction</li>
              <li>• Compound wall</li>
              <li>• ₹2-5 Lac/acre</li>
            </ul>
            <a href="https://wa.me/919697985597?text=Development%20quote" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-xl font-bold text-center block shadow-xl hover:shadow-2xl transition-all duration-300">
              Get Quote →
            </a>
          </div>

          {/* Land Planning */}
          <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-4 cursor-pointer">
            <div className="w-20 h-20 group-hover:scale-110 bg-gradient-to-br from-purple-400 to-pink-500 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto shadow-xl transition-all duration-500">
              📐
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Master Planning</h3>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>• Zoning layouts</li>
              <li>• FSI optimization</li>
              <li>• Infrastructure plan</li>
              <li>• 7-day delivery</li>
            </ul>
            <a href="https://wa.me/919697985597?text=Planning%20quote" className="w-full bg-purple-500 hover:bg-purple-600 text-white py-4 px-6 rounded-xl font-bold text-center block shadow-xl hover:shadow-2xl transition-all duration-300">
              Get Quote →
            </a>
          </div>

          {/* NA Conversion */}
          <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-4 cursor-pointer">
            <div className="w-20 h-20 group-hover:scale-110 bg-gradient-to-br from-green-400 to-emerald-500 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto shadow-xl transition-all duration-500">
              ✅
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">NA Conversion</h3>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>• Agri → NA order</li>
              <li>• Collector clearance</li>
              <li>• 60-day process</li>
              <li>• Legal support</li>
            </ul>
            <a href="https://wa.me/919697985597?text=NA%20quote" className="w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl font-bold text-center block shadow-xl hover:shadow-2xl transition-all duration-300">
              Get Quote →
            </a>
          </div>

          {/* Survey & Documentation */}
          <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-4 cursor-pointer">
            <div className="w-20 h-20 group-hover:scale-110 bg-gradient-to-br from-indigo-400 to-purple-500 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto shadow-xl transition-all duration-500">
              📏
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Land Survey</h3>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>• Total station survey</li>
              <li>• 7/12 extraction</li>
              <li>• CTS conversion</li>
              <li>• Drone mapping</li>
            </ul>
            <a href="https://wa.me/919697985597?text=Survey%20quote" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-4 px-6 rounded-xl font-bold text-center block shadow-xl hover:shadow-2xl transition-all duration-300">
              Get Quote →
            </a>
          </div>
        </div>
      </div>

      {/* Dark Authority Section */}
      <div className="relative -mt-20 lg:-mt-32 pt-40 lg:pt-52 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/0 via-blue-900 to-indigo-600" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900 to-blue-900" />
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24 pt-8">
            <div className="mb-16">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mx-auto max-w-full px-6 leading-[0.9] tracking-tight">
                <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl block w-full">
                  Ahilyanagar's #1 Land Developers
                </span>
              </h1>
            </div>
            <div className="inline-block bg-white/95 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/60 shadow-xl mx-6 translate-y-4">
              <p className="text-lg md:text-xl font-semibold text-gray-900 tracking-wide">
                Planned Developments • 100+ Acres Developed • PMRDA Approved Projects
              </p>
            </div>
          </div>
          
          {/* Key Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto pb-16">
            <a href="/services" className="group block p-10 lg:p-12 bg-white/5 backdrop-blur-3xl border border-white/20 hover:border-amber-400/70 rounded-3xl hover:shadow-2xl hover:bg-white/15 transition-all duration-700 hover:-translate-y-3">
              <div className="w-24 h-24 lg:w-28 lg:h-28 mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 rounded-3xl bg-gradient-to-br from-amber-400/90 to-yellow-500/90 flex items-center justify-center text-4xl shadow-2xl border-4 border-white/40 group-hover:border-white/70">
                🍎
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 text-center group-hover:text-amber-300 transition-all duration-300 drop-shadow-2xl">
                Ahilya Orchards
              </h2>
              <p className="text-white/85 text-lg lg:text-xl leading-relaxed mb-8 text-center drop-shadow-lg">
                25-acre premium plotting with orchard theme. PMRDA sanctioned.
              </p>
              <div className="pt-6 border-t-2 border-white/20 text-center">
                <span className="text-amber-300 font-black text-xl group-hover:text-amber-200 transition-all duration-300 inline-flex items-center gap-2 hover:gap-4">
                  View Project →
                </span>
              </div>
            </a>

            <a href="/services" className="group block p-10 lg:p-12 bg-white/5 backdrop-blur-3xl border border-white/20 hover:border-amber-400/70 rounded-3xl hover:shadow-2xl hover:bg-white/15 transition-all duration-700 hover:-translate-y-3">
              <div className="w-24 h-24 lg:w-28 lg:h-28 mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 rounded-3xl bg-gradient-to-br from-emerald-400/90 to-teal-500/90 flex items-center justify-center text-4xl shadow-2xl border-4 border-white/40 group-hover:border-white/70">
                🏘️
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 text-center group-hover:text-amber-300 transition-all duration-300 drop-shadow-2xl">
                Golden Gates Layout
              </h2>
              <p className="text-white/85 text-lg lg:text-xl leading-relaxed mb-8 text-center drop-shadow-lg">
                40-acre gated community. Internal roads, electric, water ready.
              </p>
              <div className="pt-6 border-t-2 border-white/20 text-center">
                <span className="text-amber-300 font-black text-xl group-hover:text-amber-200 transition-all duration-300 inline-flex items-center gap-2 hover:gap-4">
                  See Layout →
                </span>
              </div>
            </a>

            <a href="https://wa.me/919697985597?text=Land%20development%20quote%20Ahilyanagar" className="group block p-10 lg:p-12 bg-white/5 backdrop-blur-3xl border border-white/20 hover:border-amber-400/70 rounded-3xl hover:shadow-2xl hover:bg-white/15 transition-all duration-700 hover:-translate-y-3">
              <div className="w-24 h-24 lg:w-28 lg:h-28 mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 rounded-3xl bg-gradient-to-br from-blue-400/90 to-indigo-500/90 flex items-center justify-center text-4xl shadow-2xl border-4 border-white/40 group-hover:border-white/70">
                📞
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 text-center group-hover:text-amber-300 transition-all duration-300 drop-shadow-2xl">
                Free Land Consultation
              </h2>
              <p className="text-white/85 text-lg lg:text-xl leading-relaxed mb-8 text-center drop-shadow-lg">
                Survey, NA, sanctioning, development - complete land solution
              </p>
              <div className="pt-6 border-t-2 border-white/20 text-center">
                <span className="text-amber-300 font-black text-xl group-hover:text-amber-200 transition-all duration-300 inline-flex items-center gap-2 hover:gap-4">
                  Book Now →
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
