export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black/90 backdrop-blur-2xl shadow-2xl border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section - Logo + Tagline */}
        <div className="text-center mb-16">
          <div className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent drop-shadow-2xl mb-6">
            HYDRA CORPORATION
          </div>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            15+ Years Building Dream Homes Across Pune
          </p>
          
          {/* License Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border-2 border-yellow-400/30 px-8 py-4 rounded-2xl mb-12">
            <span className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></span>
            <span className="text-yellow-400 font-black text-xl tracking-wide">MH/2026/001 LICENSED</span>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          {/* Location */}
          <div className="group hover:translate-y-[-2px] transition-transform duration-300">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto md:mx-0 shadow-xl">
              🏠
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Pune Locations</h4>
            <p className="text-gray-300 text-lg leading-relaxed">Baner • Koregaon Park & Ahilyanagar</p>
          </div>

          {/* Phone */}
          <div className="group hover:translate-y-[-2px] transition-transform duration-300">
            <a href="https://wa.me/919697985597" className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto md:mx-0 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300">
              📱
            </a>
            <h4 className="text-2xl font-bold text-white mb-4">24/7 Contact</h4>
            <p className="text-gray-300 text-lg leading-relaxed hover:text-emerald-400 transition-colors">
              +91 969798 5597
            </p>
          </div>

          {/* License */}
          <div>
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto md:mx-0 shadow-xl">
              📋
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Licensed Contractor</h4>
            <p className="text-yellow-400 text-xl font-semibold tracking-wide bg-yellow-400/10 px-4 py-2 rounded-xl inline-block">
              MH/2026/001
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <a href="https://wa.me/919697985597?text=Hi%20Hydra%2C%20need%20quote" 
               className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 whitespace-nowrap">
              WhatsApp Quote
            </a>
            <a href="/contact" 
               className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-black rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 whitespace-nowrap">
              Free Site Visit
            </a>
          </div>

          {/* Legal + Copyright */}
          <div className="text-center md:text-right text-sm space-y-2 opacity-80">
            <div className="flex justify-center md:justify-end gap-6 text-gray-400 hover:text-white transition-colors">
              <a href="#" className="hover:text-blue-400">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400">Terms of Service</a>
            </div>
            <p>© 2026 Hydra Corporation. All rights reserved. Pune's trusted builders.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
