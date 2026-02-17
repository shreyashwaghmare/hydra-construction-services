export default function Footer() {
  return (
    <footer className="bg-[#0F2A44] text-white border-t border-white/10">
  <div className="max-w-7xl mx-auto px-6 py-20">

    {/* Logo + Tagline */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
        HYDRA CORPORATION
      </h2>

      <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
        15+ Years Building Dream Homes Across Pune & Ahilyanagar
      </p>

      <div className="mt-6 inline-flex items-center gap-2 
        px-6 py-2 rounded-full 
        bg-amber-500/10 border border-amber-400/30 
        text-amber-400 text-sm font-semibold">
        ● Quality Construction • Thoughtful Interiors • Transparent Pricing
      </div>
    </div>

    {/* Contact Grid */}
    <div className="grid md:grid-cols-3 gap-12 mb-16 text-center md:text-left">

      {/* Location */}
      <div>
        <div className="w-14 h-14 bg-amber-500/10 
          border border-amber-400/30
          rounded-2xl flex items-center justify-center text-xl mb-4 mx-auto md:mx-0">
          🏠
        </div>
        <h4 className="text-xl font-bold mb-3">Pune Locations</h4>
        <p className="text-white/70">
          Baner • Koregaon Park • Viman Nagar
        </p>
      </div>

      {/* Phone */}
      <div>
        <div className="w-14 h-14 bg-amber-500/10 
          border border-amber-400/30
          rounded-2xl flex items-center justify-center text-xl mb-4 mx-auto md:mx-0">
          📱
        </div>
        <h4 className="text-xl font-bold mb-3">24/7 Contact</h4>
        <a 
          href="tel:+919697985597"
          className="text-white/70 hover:text-amber-400 transition-colors"
        >
          +91 969798 5597
        </a>
      </div>

      {/* Experience */}
      <div>
        <div className="w-14 h-14 bg-amber-500/10 
          border border-amber-400/30
          rounded-2xl flex items-center justify-center text-xl mb-4 mx-auto md:mx-0">
          📋
        </div>
        <h4 className="text-xl font-bold mb-3">Established Since 2010</h4>
        <p className="text-white/70">
          Expert Engineering Team & Transparent Execution
        </p>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="pt-10 border-t border-white/10 
      flex flex-col md:flex-row justify-between items-center gap-6">

      {/* CTA Buttons */}
      {/* CTA + Social */}
<div className="flex flex-wrap justify-center md:justify-start gap-4 items-center">

  {/* WhatsApp */}
  <a 
    href="https://wa.me/919697985597?text=Hi%20Hydra%2C%20need%20quote"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-amber-500 text-black font-semibold rounded-xl 
      hover:bg-amber-600 transition-all duration-300"
  >
    WhatsApp Quote
  </a>

  {/* Free Visit */}
  <a 
    href="/contact"
    className="px-6 py-3 border border-white/20 rounded-xl 
      hover:bg-white hover:text-[#0F2A44] transition-all duration-300"
  >
    Free Site Visit
  </a>

  {/* Instagram */}
  <a
    href="https://instagram.com/hydra_corporation_"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 flex items-center justify-center 
      rounded-xl border border-white/20 
      hover:border-amber-400 hover:text-amber-400
      transition-all duration-300"
  >
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M7.75 2C4.68 2 2 4.68 2 7.75v8.5C2 19.32 4.68 22 7.75 22h8.5C19.32 22 22 19.32 22 16.25v-8.5C22 4.68 19.32 2 16.25 2h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.75-.88a1.13 1.13 0 110 2.26 1.13 1.13 0 010-2.26z" />
  </svg>
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/profile.php?id=61556643912686"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 flex items-center justify-center 
      rounded-xl border border-white/20 
      hover:border-amber-400 hover:text-amber-400
      transition-all duration-300"
  >
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M22 12a10 10 0 10-11.5 9.87v-6.98H8.1V12h2.4V9.8c0-2.37 1.42-3.68 3.6-3.68 1.04 0 2.12.19 2.12.19v2.33h-1.2c-1.18 0-1.55.73-1.55 1.48V12h2.64l-.42 2.89h-2.22v6.98A10 10 0 0022 12z"/>
  </svg>
  </a>

</div>

      {/* Legal */}
      <div className="text-center md:text-right text-sm text-white/60 space-y-2">
        <div className="flex justify-center md:justify-end gap-6">
          <a href="#" className="hover:text-amber-400 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-amber-400 transition-colors">
            Terms of Service
          </a>
        </div>

        <p>
          © 2026 Hydra Corporation. All rights reserved.
        </p>
      </div>

    </div>

  </div>
</footer>
 )
}
