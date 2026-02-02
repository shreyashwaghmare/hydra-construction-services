export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete construction solutions for Pune homes
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Bungalow Construction */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto">
              🏠
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Bungalow Construction</h3>
            <ul className="space-y-3 text-gray-600 mb-8">
              <li>• 3BHK/4BHK complete builds</li>
              <li>• Foundation to finishout</li>
              <li>• MH/2026/001 licensed</li>
              <li>• Starting ₹75 Lac</li>
            </ul>
            <a href="https://wa.me/919697985597?text=Bungalow%20quote" 
               className="w-full z-20 relative bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-xl font-bold text-center block shadow-xl hover:shadow-2xl border-2 border-blue-400 mt-4 flex items-center justify-center gap-2 transition-all duration-300">
              Get Quote →
            </a>
          </div>

          {/* Kitchen Remodeling */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-visible">
            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto">
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
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-visible">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto">
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
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-visible">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto">
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
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-visible">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto">
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
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-visible">
            <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto">
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
        {/* NEW: Trust Signals */}
        <div className="mt-24 text-center">
          <h2 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-12">
            Why Pune Trusts Us
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center space-y-3 p-6">
              <div className="w-20 h-20 bg-green-100 rounded-3xl flex items-center justify-center text-3xl shadow-lg">📋</div>
              <h3 className="text-xl font-bold text-gray-900">MH/2026/001</h3>
              <p className="text-sm text-gray-500">Licensed Builder</p>
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
        <div className="mt-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 rounded-3xl">
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
        <div className="mt-24 text-center bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-20 rounded-3xl shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-2xl">
            Ready For Your Dream Home?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Free site visits • MH/2026/001 licensed • 10-year warranty • Pune's most trusted builders
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
