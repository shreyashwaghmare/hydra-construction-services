'use client'

export default function WhatsAppButton() {
  return (
    <>
      {/* Tooltip */}
      <div className="fixed bottom-24 right-6 md:bottom-28 md:right-8 z-50 group">
        <div className="opacity-0 group-hover:opacity-100 bg-gray-900 text-white text-xs px-3 py-1 rounded-full shadow-lg whitespace-nowrap transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          Get Free Quote
        </div>
      </div>
      
      {/* Enhanced WhatsApp Button */}
      <a
        href="https://wa.me/919697985597?text=Hi%20Hydra%20Construction!%0AI'm%20interested%20in%20home%20renovation%20services.%20Can%20we%20discuss%20my%20project?"
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl md:text-3xl z-50 animate-pulse hover:animate-none hover:scale-110 transition-all duration-300 hover:shadow-green-500/50 border-4 border-white/20 hover:border-green-400/50"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>
    </>
  )
}
