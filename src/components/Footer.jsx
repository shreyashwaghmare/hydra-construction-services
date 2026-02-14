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
            15+ Years Building Dream Homes Across Pune & Ahilyanagar
          </p>
          
          {/* License Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border-2 border-yellow-400/30 px-8 py-4 rounded-2xl mb-12">
            <span className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></span>
            <span className="text-yellow-400 font-black text-xl tracking-wide">Quality Construction • Thoughtful Interiors • Transparent Pricing</span>
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
            <p className="text-gray-300 text-lg leading-relaxed">Baner • Koregaon Park • Viman Nagar </p>
          </div>

          {/* Phone */}
          <div className="group hover:translate-y-[-2px] transition-transform duration-300">
            <a href="https://wa.me/919697985597" className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto md:mx-0 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300">
              📱
            </a>
            <h4 className="text-2xl font-bold text-white mb-4">24/7 Contact</h4>
            <p className="text-gray-300 text-lg leading-relaxed hover:text-emerald-400 transition-colors">
              <a href="tel:+919697985597">+91 969798 5597</a>
            </p>
          </div>

          {/* License */}
          <div>
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto md:mx-0 shadow-xl">
              📋
            </div>
            <h4 className="text-2xl font-bold text-white mb-4">Expert Engineering Team</h4>
            <p className="text-yellow-400 text-xl font-semibold tracking-wide bg-yellow-400/10 px-4 py-2 rounded-xl inline-block">
              Serving Pune Since 2010
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Social CTAs */}
          {/* Social CTAs */}
<div className="flex flex-col sm:flex-row gap-4 items-center">

  <a 
    href="https://wa.me/919697985597?text=Hi%20Hydra%2C%20need%20quote"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
  >
    WhatsApp Quote
  </a>

  <a 
    href="/contact"
    className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-black rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
  >
    Free Site Visit
  </a>

  {/* Instagram */}
  <a
  href="https://instagram.com/hydra_corporation_"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative inline-flex items-center gap-3 px-6 py-3
  bg-white/5 backdrop-blur-xl border border-white/10
  text-white font-semibold rounded-xl
  shadow-lg hover:shadow-pink-500/20
  hover:border-pink-500/40
  hover:-translate-y-1
  transition-all duration-300"
>
  {/* Soft glow on hover */}
  <span className="absolute inset-0 rounded-xl bg-gradient-to-r 
  from-pink-500/0 via-pink-500/10 to-yellow-500/0 
  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

  {/* Instagram SVG */}
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-5 h-5 text-pink-400 group-hover:text-pink-300 transition-colors duration-300"
  >
    <path d="M7.75 2C4.678 2 2 4.678 2 7.75v8.5C2 19.322 4.678 22 7.75 22h8.5C19.322 22 22 19.322 22 16.25v-8.5C22 4.678 19.322 2 16.25 2h-8.5zm0 2h8.5C18.216 4 20 5.784 20 7.75v8.5C20 18.216 18.216 20 16.25 20h-8.5C5.784 20 4 18.216 4 16.25v-8.5C4 5.784 5.784 4 7.75 4zm8.75 2.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z"/>
  </svg>
</a>


  {/* Facebook */}
  <a
  href="https://www.facebook.com/profile.php?id=61556643912686"
  target="_blank"
  rel="noopener noreferrer"
  className="group relative inline-flex items-center gap-3 px-6 py-3
  bg-white/5 backdrop-blur-xl border border-white/10
  text-white font-semibold rounded-xl
  shadow-lg hover:shadow-blue-500/20
  hover:border-blue-500/40
  hover:-translate-y-1
  transition-all duration-300"
>
  {/* Soft glow on hover */}
  <span className="absolute inset-0 rounded-xl bg-gradient-to-r 
  from-blue-500/0 via-blue-500/10 to-blue-500/0 
  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

  {/* Facebook SVG */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
  >
    <path d="M22 12a10 10 0 10-11.563 9.875v-6.987H7.898V12h2.539V9.797c0-2.506 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.463h-1.261c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.888h-2.33v6.987A10 10 0 0022 12z" />
  </svg>
</a>


</div>


          {/* Legal + Copyright */}
          <div className="text-center md:text-right text-sm space-y-2 opacity-80">
            <div className="flex justify-center md:justify-end gap-6 text-gray-400 hover:text-white transition-colors">
              <a href="#" className="hover:text-blue-400">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400">Terms of Service</a>
            </div>
            <p className="text-gray-400">© 2026 Hydra Corporation. All rights reserved. Pune's trusted builders.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
