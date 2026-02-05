export default function InteriorExterior() {
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
                                    <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                                    <span className="text-white font-bold text-lg">Viman Nagar • Baner • Kothrud</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight">
                                    Pune's <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">Top Interior</span>
                                    <br className="hidden lg:block" />
                                    <span className="block lg:inline"> & Exterior Designers</span>
                                </h1>
                                <div className="grid md:grid-cols-3 gap-6 max-w-2xl bg-white/10 backdrop-blur-sm p-6 rounded-3xl">
                                    <div className="text-center">
                                        <div className="text-3xl font-black text-yellow-400">4.9★</div>
                                        <div className="text-white/90 text-sm">Google Rating</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-black text-white">50+</div>
                                        <div className="text-white/90 text-sm">Pune Projects</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-3xl font-black text-emerald-400">₹800/sqft</div>
                                        <div className="text-white/90 text-sm">Starting Price</div>
                                    </div>
                                </div>
                                <div className="pb-12 lg:pb-20">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a href="/contact"
                                            className="bg-white text-gray-900 py-4 px-8 rounded-2xl font-black text-lg shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 flex-1 text-center">
                                            🎨 Free Consultation
                                        </a>
                                        <a href="/portfolio" className="border-2 border-white text-white py-4 px-8 rounded-2xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300">
                                            View Portfolio
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="relative hidden lg:block">
                                <div className="w-full h-96 rounded-3xl shadow-2xl overflow-hidden group hover:scale-105 transition-all duration-700">
                                    <img
                                        src="/images/duplex-wakad.webp"
                                        alt="Luxury Interior Exterior Design Baner Pune"
                                        className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
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

                    {/* Interior Design */}
                    <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-4 cursor-pointer">
                        <div className="w-20 h-20 group-hover:scale-110 bg-gradient-to-br from-emerald-400 to-teal-500 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto shadow-xl transition-all duration-500">
                            🏠
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Luxury Interiors</h3>
                        <ul className="space-y-3 text-gray-600 mb-8">
                            <li>• Modular kitchens</li>
                            <li>• False ceilings</li>
                            <li>• Premium wardrobes</li>
                            <li>• Starting ₹800/sqft</li>
                        </ul>
                        <a href="https://wa.me/919697985597?text=Interior%20quote" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 px-6 rounded-xl font-bold text-center block shadow-xl hover:shadow-2xl transition-all duration-300">
                            Get Interior Quote →
                        </a>
                    </div>

                    {/* Exterior Design */}
                    <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-4 cursor-pointer">
                        <div className="w-20 h-20 group-hover:scale-110 bg-gradient-to-br from-blue-400 to-indigo-500 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto shadow-xl transition-all duration-500">
                            🏛️
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Premium Exteriors</h3>
                        <ul className="space-y-3 text-gray-600 mb-8">
                            <li>• Modern facades</li>
                            <li>• Textured painting</li>
                            <li>• Elevation design</li>
                            <li>• Starting ₹150/sqft</li>
                        </ul>
                        <a href="https://wa.me/919697985597?text=Exterior%20quote" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-xl font-bold text-center block shadow-xl hover:shadow-2xl transition-all duration-300">
                            Get Exterior Quote →
                        </a>
                    </div>

                    {/* Kitchen Design */}
                    <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-4 cursor-pointer">
                        <div className="w-20 h-20 group-hover:scale-110 bg-gradient-to-br from-amber-400 to-orange-500 text-gray-900 rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto shadow-xl transition-all duration-500">
                            🍳
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Modular Kitchens</h3>
                        <ul className="space-y-3 text-gray-600 mb-8">
                            <li>• L-Shape & Island</li>
                            <li>• Pune granite tops</li>
                            <li>• Soft close cabinets</li>
                            <li>• ₹3-8 Lac range</li>
                        </ul>
                        <a href="https://wa.me/919697985597?text=Kitchen%20quote" className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 py-4 px-6 rounded-xl font-bold text-center block shadow-xl hover:shadow-2xl transition-all duration-300">
                            Get Kitchen Quote →
                        </a>
                    </div>

                    {/* False Ceiling */}
                    <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-4 cursor-pointer">
                        <div className="w-20 h-20 group-hover:scale-110 bg-gradient-to-br from-purple-400 to-pink-500 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto shadow-xl transition-all duration-500">
                            💡
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">False Ceilings</h3>
                        <ul className="space-y-3 text-gray-600 mb-8">
                            <li>• POP & Gypsum</li>
                            <li>• Cove lighting</li>
                            <li>• Hidden AC design</li>
                            <li>• ₹250/sqft</li>
                        </ul>
                        <a href="https://wa.me/919697985597?text=False%20ceiling%20quote" className="w-full bg-purple-500 hover:bg-purple-600 text-white py-4 px-6 rounded-xl font-bold text-center block shadow-xl hover:shadow-2xl transition-all duration-300">
                            Get Quote →
                        </a>
                    </div>

                    {/* Wardrobes */}
                    <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-4 cursor-pointer">
                        <div className="w-20 h-20 group-hover:scale-110 bg-gradient-to-br from-rose-400 to-red-500 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto shadow-xl transition-all duration-500">
                            👗
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Premium Wardrobes</h3>
                        <ul className="space-y-3 text-gray-600 mb-8">
                            <li>• Walk-in closets</li>
                            <li>• Slide & hinged</li>
                            <li>• Veneer finish</li>
                            <li>• Starting ₹450/sqft</li>
                        </ul>
                        <a href="https://wa.me/919697985597?text=Wardrobe%20quote" className="w-full bg-rose-500 hover:bg-rose-600 text-white py-4 px-6 rounded-xl font-bold text-center block shadow-xl hover:shadow-2xl transition-all duration-300">
                            Get Quote →
                        </a>
                    </div>

                    {/* Painting */}
                    <div className="group bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-4 cursor-pointer">
                        <div className="w-20 h-20 group-hover:scale-110 bg-gradient-to-br from-indigo-400 to-purple-500 text-white rounded-2xl flex items-center justify-center text-3xl mb-6 mx-auto shadow-xl transition-all duration-500">
                            🎨
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Texture Painting</h3>
                        <ul className="space-y-3 text-gray-600 mb-8">
                            <li>• Exterior textures</li>
                            <li>• Asian Paints</li>
                            <li>• 5-year warranty</li>
                            <li>• ₹25/sqft</li>
                        </ul>
                        <a href="https://wa.me/919697985597?text=Painting%20quote" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-4 px-6 rounded-xl font-bold text-center block shadow-xl hover:shadow-2xl transition-all duration-300">
                            Get Quote →
                        </a>
                    </div>
                </div>
            </div>

            {/* Dark Section - Same Style */}
            <div className="relative -mt-20 lg:-mt-32 pt-40 lg:pt-52 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-gray-50/0 via-blue-900 to-indigo-600" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900 to-blue-900" />

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-24 pt-8">
                        <div className="mb-16">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mx-auto max-w-full px-6 leading-[0.9] tracking-tight">
                                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl block w-full">
                                    Pune's #1 Interior & Exterior Designers
                                </span>
                            </h1>
                        </div>
                        <div className="inline-block bg-white/95 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/60 shadow-xl mx-6 translate-y-4">
                            <p className="text-lg md:text-xl font-semibold text-gray-900 tracking-wide">
                                Expert Team Support • Free Site Visits • 50+ Pune Projects Complete
                            </p>
                        </div>
                    </div>

                    {/* Featured Areas */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto pb-16">
                        <a href="/portfolio" className="group block p-10 lg:p-12 bg-white/5 backdrop-blur-3xl border border-white/20 hover:border-emerald-400/70 rounded-3xl hover:shadow-2xl hover:bg-white/15 transition-all duration-700 hover:-translate-y-3">
                            <div className="w-24 h-24 lg:w-28 lg:h-28 mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 rounded-3xl bg-gradient-to-br from-emerald-400/90 to-teal-500/90 flex items-center justify-center text-4xl shadow-2xl border-4 border-white/40 group-hover:border-white/70">
                                🏙️
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 text-center group-hover:text-emerald-300 transition-all duration-300 drop-shadow-2xl">
                                Baner Luxury Homes
                            </h2>
                            <p className="text-white/85 text-lg lg:text-xl leading-relaxed mb-8 text-center drop-shadow-lg">
                                30+ premium interiors completed in Pune's hottest real estate hub
                            </p>
                            <div className="pt-6 border-t-2 border-white/20 text-center">
                                <span className="text-emerald-300 font-black text-xl group-hover:text-emerald-200 transition-all duration-300 inline-flex items-center gap-2 hover:gap-4">
                                    View Baner Projects →
                                </span>
                            </div>
                        </a>

                        <a href="/portfolio" className="group block p-10 lg:p-12 bg-white/5 backdrop-blur-3xl border border-white/20 hover:border-emerald-400/70 rounded-3xl hover:shadow-2xl hover:bg-white/15 transition-all duration-700 hover:-translate-y-3">
                            <div className="w-24 h-24 lg:w-28 lg:h-28 mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 rounded-3xl bg-gradient-to-br from-amber-400/90 to-orange-500/90 flex items-center justify-center text-4xl shadow-2xl border-4 border-white/40 group-hover:border-white/70">
                                🌳
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 text-center group-hover:text-emerald-300 transition-all duration-300 drop-shadow-2xl">
                                Koregaon Park Villas
                            </h2>
                            <p className="text-white/85 text-lg lg:text-xl leading-relaxed mb-8 text-center drop-shadow-lg">
                                Elegant exteriors & sophisticated interiors for Pune's elite neighborhood
                            </p>
                            <div className="pt-6 border-t-2 border-white/20 text-center">
                                <span className="text-emerald-300 font-black text-xl group-hover:text-emerald-200 transition-all duration-300 inline-flex items-center gap-2 hover:gap-4">
                                    See Portfolio →
                                </span>
                            </div>
                        </a>

                        <a href="/contact" className="group block p-10 lg:p-12 bg-white/5 backdrop-blur-3xl border border-white/20 hover:border-emerald-400/70 rounded-3xl hover:shadow-2xl hover:bg-white/15 transition-all duration-700 hover:-translate-y-3">
                            <div className="w-24 h-24 lg:w-28 lg:h-28 mx-auto mb-8 group-hover:scale-110 transition-transform duration-500 rounded-3xl bg-gradient-to-br from-blue-400/90 to-indigo-500/90 flex items-center justify-center text-4xl shadow-2xl border-4 border-white/40 group-hover:border-white/70">
                                🎨
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 text-center group-hover:text-emerald-300 transition-all duration-300 drop-shadow-2xl">
                                Free Design Consultation
                            </h2>
                            <p className="text-white/85 text-lg lg:text-xl leading-relaxed mb-8 text-center drop-shadow-lg">
                                MH/2026/001 licensed experts ready for your dream home transformation
                            </p>
                            <div className="pt-6 border-t-2 border-white/20 text-center">
                                <span className="text-emerald-300 font-black text-xl group-hover:text-emerald-200 transition-all duration-300 inline-flex items-center gap-2 hover:gap-4">
                                    Book Now →
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Trust Signals + CTA - Keep your existing sections */}

        </div>
    )
}
