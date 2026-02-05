'use client'
export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/50">
            {/* HERO STORY START */}
            <section className="relative pt-22 pb-10 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-200/30 via-transparent to-transparent" />
                <div className="relative max-w-6xl mx-auto px-6">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-3xl shadow-2xl backdrop-blur-sm border border-white/20 mb-12 max-w-max mx-auto animate-float">
                        <div className="w-4 h-4 bg-white/20 rounded-full animate-ping"></div>
                        <span className="text-xl font-black tracking-wider">Pune’s Trusted Construction & Interior Design Firm • Since 2010</span>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h1 className="text-3xl sm:text-4xl lg:text-7xl font-black bg-gradient-to-r from-gray-900 via-blue-900 to-emerald-900 bg-clip-text text-transparent leading-snug  px-1">
                                FROM SMALL
                                <br />
                                <span className="text-4xl sm:text-5xl lg:text-7xl bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">RENOVATIONS</span>
                                <br />
                                TO LUXURY BUNGALOWS
                            </h1>
                            <div className="text-xl text-gray-700 leading-relaxed space-y-6">
                                <p>
                                    <span className="text-3xl">👷‍♂️ 2010–Humble Beginnings in Kothrud:</span> Started with small renovation and bathroom repair projects, learning what Pune homeowners truly need — quality within budget.
                                </p>
                                <p>
                                    <span className="text-3xl">🏠 2015–Growing into Bungalows:</span> Completed our first Baner bungalow project, expanding into full construction and interior design services.
                                </p>
                                <p>
                                    <span className="text-3xl">🏗️ Trusted Across Pune:</span> 50+ residential projects, expert civil engineering partners, turnkey construction & interiors — with direct founder involvement on every site.
                                </p>
                            </div>
                        </div>
                        <div className="relative group">
                            {/* Remove the gradient overlay OR make it lighter */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-700/10 to-blue-900/10 rounded-4xl backdrop-blur-xl pointer-events-none"></div>

                            {/* FIXED: Remove -z-10 + brightness */}
                            <img
                                src="/images/terrace-gazebo.jpg"
                                alt="Hydra Construction Project"
                                className="w-full h-96 lg:h-[500px] object-cover rounded-4xl shadow-2xl group-hover:scale-105 transition-all duration-700 brightness-90"
                            />
                        </div>

                    </div>
                </div>
            </section>

            {/* TIMELINE JOURNEY */}
            <section className="py-32 bg-white/50 backdrop-blur-sm">
                <div className="max-w-5xl mx-auto px-6">
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full shadow-lg"></div>

                        <div className="space-y-24">
                            {/* 2010 START */}
                            <div className="relative flex items-center justify-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-3xl flex flex-col items-center justify-center shadow-2xl border-4 border-white font-black text-2xl absolute left-1/2 transform -translate-x-1/2 -translate-y-12 z-10 animate-bounce-slow">
                                    2010
                                </div>
                                <div className="bg-white/70 backdrop-blur-sm p-12 rounded-4xl shadow-2xl w-full max-w-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 mx-auto relative z-20">
                                    <h3 className="text-4xl font-black text-gray-900 mb-6 text-center">🛠️ ONE MAN ARMY</h3>
                                    <p className="text-xl text-gray-700 leading-relaxed text-center">
                                        Started with ₹10k jobs. Kothrud bathrooms. No office, no team. Just promises I kept.
                                    </p>
                                </div>
                            </div>

                            {/* 2020 GROWTH */}
                            <div className="relative flex items-center justify-center">
                                <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-600 text-white rounded-3xl flex flex-col items-center justify-center shadow-2xl border-4 border-white font-black text-2xl absolute left-1/2 transform -translate-x-1/2 translate-y-12 z-10 animate-bounce-slow delay-1000">
                                    2020
                                </div>
                                <div className="bg-white/70 backdrop-blur-sm p-12 rounded-4xl shadow-2xl w-full max-w-2xl border border-gray-200 hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 mx-auto relative z-20">
                                    <h3 className="text-4xl font-black text-emerald-900 mb-6 text-center">🏠 FIRST BUNGALOW</h3>
                                    <p className="text-xl text-gray-700 leading-relaxed text-center">
                                        Baner 3BHK. Client gifted whiskey. Still have the bottle. That's when I knew.
                                    </p>
                                </div>
                            </div>

                            {/* 2026 NOW */}
                            <div className="relative flex items-center justify-center pb-24">
                                <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 text-gray-900 rounded-3xl flex flex-col items-center justify-center shadow-2xl border-4 border-white font-black text-2xl absolute left-1/2 transform -translate-x-1/2 -translate-y-12 z-10 animate-pulse">
                                    2026
                                </div>
                                <div className="bg-gradient-to-r from-yellow-50 to-orange-50/70 backdrop-blur-sm p-12 rounded-4xl shadow-2xl w-full max-w-2xl border border-yellow-200 hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 mx-auto relative z-20">
                                    <h3 className="text-4xl font-black bg-gradient-to-r from-gray-900 to-orange-900 bg-clip-text text-transparent mb-6 text-center">🏗️ Trusted Across Pune</h3>
                                    <p className="text-xl text-gray-800 leading-relaxed text-center">
                                        50+ Pune homes. Koregaon Park, Viman Nagar, Hinjewadi, Baner. Still reply to WhatsApp myself.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST PROOF */}
            <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-900/90 via-black/80 to-black">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.15),transparent)]" />
                <div className="relative max-w-4xl mx-auto px-6 text-white text-center">
                    <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-xl px-10 py-6 rounded-4xl border border-white/20 mb-12 shadow-2xl">
                        <div className="w-5 h-5 bg-emerald-400 rounded-full animate-ping"></div>
                        <span className="text-2xl font-black tracking-wide">PUNE'S MOST TRUSTED BUILDER</span>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        <div className="group p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-yellow-400/50 transition-all">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">🏠</div>
                            <div className="text-4xl font-black text-yellow-400 mb-2">50+</div>
                            <div className="text-lg opacity-90">Pune Projects</div>
                        </div>
                        <div className="group p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-emerald-400/50 transition-all">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">⭐</div>
                            <div className="text-4xl font-black text-emerald-400 mb-2">4.9★</div>
                            <div className="text-lg opacity-90">Client Rating</div>
                        </div>
                        <div className="group p-8 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 hover:border-orange-400/50 transition-all">
                            <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">⏰</div>
                            <div className="text-4xl font-black text-orange-400 mb-2">100%</div>
                            <div className="text-lg opacity-90">On-Time Delivery</div>
                        </div>
                    </div>

                    {/* FINAL CTA */}
                    <div className="text-4xl lg:text-5xl font-black mb-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
                        Founder-Driven Since 2010 – <br></br>Quality Homes, Transparent Costs
                    </div>
                    <a href="https://wa.me/919697985597?text=Hi%20Hydra%2C%20loved%20your%20story!%20Free%20site%20visit%3F"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-12 py-6 rounded-4xl font-black text-2xl shadow-3xl hover:shadow-4xl hover:scale-105 transition-all duration-500 border-4 border-white/20 backdrop-blur-sm">
                        <span>📱</span> START YOUR STORY TODAY
                    </a>
                </div>
            </section>
        </div>
    )
}
