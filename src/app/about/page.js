'use client'
import Image from "next/image"
export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-100">
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
            {/* ================= ABOUT – PREMIUM REDESIGN ================= */}

            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6 ">

                    <span className="inline-block mb-4 px-4 py-1.5 text-sm bg-blue-50 shadow rounded-full text-slate-700">
                        Since 2010 • Pune Construction & Interiors
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-emerald-900 bg-clip-text text-transparent text-center mb-6 leading-tight">
                        Construction Company in Pune
                        Built on Trust & Engineering
                    </h2>

                    <p className="text-xl mx-auto text-slate-700 mb-6 max-w-4xl leading-relaxed">
                        Hydra Corporation is a Pune-based construction & interior design firm specializing in
                        bungalow construction, turnkey interiors, home renovation, and land development.
                        We serve Baner, Wakad, Hinjewadi, Kothrud, Viman Nagar, Koregaon Park and across PCMC & PMC areas.
                    </p>

                    <p className="text-xl mx-auto text-slate-700 max-w-4xl leading-relaxed">
                        Unlike typical contractors, we work with <span className="font-semibold text-[#0F2A44]">
                            clear BOQ, stage-wise payments, branded materials, licensed engineers</span> and weekly site updates
                        so families can build their homes without stress.
                    </p>

                </div>
            </section>
            {/* ============ FOUNDER & TEAM CREDIBILITY ============ */}

<section className="py-12 bg-gradient-to-b from-white to-blue-50/40">
  <div className="max-w-6xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* LEFT – PHOTO */}
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-emerald-500/10 rounded-3xl blur-xl"></div>

        <Image
  src="/images/Founder-image.png"
  alt="Shreyash Waghmare – Founder Hydra Corporation Pune"
  width={800}
  height={1000}
  className="relative rounded-3xl shadow-2xl w-full h-[520px] object-cover 
  group-hover:scale-[1.02] transition-all duration-700"
/>


        <div className="absolute -bottom-6 left-6 bg-white shadow-xl px-6 py-4 rounded-2xl">
          <div className="font-bold text-[#0F2A44]">Shreyash Waghmare</div>
          <div className="text-sm text-slate-600">Founder – Hydra Corporation</div>
        </div>
      </div>


      {/* RIGHT – STORY */}
      <div>

        <span className="inline-block mb-4 px-4 py-2 bg-blue-100 text-blue-900 rounded-xl text-sm font-semibold">
          Tech-Driven Construction Approach
        </span>

        <h2 className="text-4xl font-black text-[#0F2A44] mb-6">
          Built on Civil Roots.<br />
          Managed with Engineering Process.
        </h2>

        <p className="text-lg text-slate-700 leading-relaxed mb-6">
          I come from a computer engineering background, but construction has always been in my ecosystem —  
          my father is a civil engineer from Vikhe Patil, my brother is a civil diploma holder, and my closest 
          circle includes structural and site engineers across Pune.
        </p>

        <p className="text-lg text-slate-700 leading-relaxed mb-8">
          Hydra was built to bring <strong>IT-style transparency</strong> into construction:  
          clear BOQs, planned timelines, documented quality checks and honest communication —  
          something I felt Pune homeowners truly deserved.
        </p>


        {/* HIGHLIGHTS */}
        <div className="grid sm:grid-cols-2 gap-4">

          <div className="p-4 bg-white rounded-2xl shadow hover:-translate-y-1 transition-all">
            <div className="font-bold text-[#0F2A44]">Process First</div>
            <div className="text-sm text-slate-600">BOQ → Schedule → Stage Billing</div>
          </div>

          <div className="p-4 bg-white rounded-2xl shadow hover:-translate-y-1 transition-all">
            <div className="font-bold text-[#0F2A44]">Civil Backed Team</div>
            <div className="text-sm text-slate-600">Licensed engineers on every site</div>
          </div>

          <div className="p-4 bg-white rounded-2xl shadow hover:-translate-y-1 transition-all">
            <div className="font-bold text-[#0F2A44]">Founder Involved</div>
            <div className="text-sm text-slate-600">Direct WhatsApp updates</div>
          </div>

          <div className="p-4 bg-white rounded-2xl shadow hover:-translate-y-1 transition-all">
            <div className="font-bold text-[#0F2A44]">Quality Network</div>
            <div className="text-sm text-slate-600">Trusted vendors & contractors</div>
          </div>

        </div>

      </div>

    </div>
  </div>
</section>


            {/* ===== WHY CHOOSE US ===== */}

            <section className="py-24 bg-gradient-to-b from-blue-200 via-white to-blue-900">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-indigo-900 bg-clip-text text-transparent mb-4">
                        Why Pune Families Trust Hydra Corporation
                    </h2>

                    <div className="w-24 h-1 bg-[#C9A227] mx-auto mb-12"></div>

                    <div className="grid md:grid-cols-3 gap-8">

                        {/* CARD */}
                        {[
                            {
                                title: "Transparent BOQ",
                                desc: "No verbal rates. Detailed material + labor breakup before first rupee."
                            },
                            {
                                title: "Stage Payments",
                                desc: "Pay only as work progresses. No 100% advance culture."
                            },
                            {
                                title: "Licensed Experts",
                                desc: "Structural engineer + certified contractors on every site."
                            },
                            {
                                title: "Brand Materials",
                                desc: "Ultratech, Ambuja, Finolex, Havells, Asian Paints, Kajaria."
                            },
                            {
                                title: "Weekly Updates",
                                desc: "Photos, progress and expense tracking on WhatsApp."
                            },
                            {
                                title: "5 Year Support",
                                desc: "Waterproofing & workmanship warranty."
                            }
                        ].map((i, k) => (

                            <div key={k}
                                className="group p-7 rounded-2xl border border-slate-100 hover:border-[#C9A227]/40
bg-white hover:shadow-2xl transition-all duration-300">

                                <h3 className="text-2xl font-semibold text-[#0F2A44] mb-2">
                                    {i.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed">
                                    {i.desc}
                                </p>

                                <div className="h-1 w-0 group-hover:w-16 bg-[#C9A227] transition-all duration-300 mt-4"></div>

                            </div>

                        ))}

                    </div>
                </div>
            </section>

            {/* ===== OUR PROCESS ===== */}

            <section className="py-24 bg-slate-200">
                <div className="max-w-5xl mx-auto px-6">

                    <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-500 to-indigo-900 bg-clip-text text-transparent mb-4">
                        Our Construction Process
                    </h2>

                    <div className="w-24 h-1  mx-auto mb-12"></div>

                    <ol className="space-y-6 text-lg">

                        {[
                            "Free site visit & requirement mapping",
                            "Budget planning & concept design",
                            "Detailed BOQ + timeline",
                            "Agreement & stage schedule",
                            "Execution with quality checks",
                            "Handover + post support"
                        ].map((i, k) => (

                            <li key={k}
                                className="p-5 text-white bg-slate-50 rounded-xl border border-slate-100
hover:shadow-lg transition flex gap-4 items-center">

                                <span className="w-8 h-8 flex items-center justify-center 
bg-[#0F2A44] text-white rounded-full text-sm">
                                    {k + 1}
                                </span>

                                <span className="text-slate-700">{i}</span>

                            </li>

                        ))}

                    </ol>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}

            <section className="py-24 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-center  mb-4">
                        Real Stories from Pune Homes
                    </h2>

                    <div className="w-24 h-1 bg-[#C9A227] mx-auto mb-12"></div>

                    <div className="grid md:grid-cols-2 gap-8">

                        {[
                            {
                                txt: "Budget was exactly as promised. Hydra handled construction & interiors end-to-end for our Baner bungalow.",
                                name: "Joshi Family, Baner"
                            },
                            {
                                txt: "Finally a contractor who answers calls and sends updates without asking.",
                                name: "Kulkarni, Wakad"
                            }
                        ].map((t, k) => (

                            <div key={k}
                                className="p-7 bg-slate-50 rounded-2xl border border-slate-100
hover:border-[#C9A227]/40 transition">

                                <p className="text-slate-700 leading-relaxed italic">
                                    “{t.txt}”
                                </p>

                                <div className="mt-4 font-semibold text-[#0F2A44]">
                                    — {t.name}
                                </div>

                            </div>

                        ))}

                    </div>
                </div>
            </section>

            {/* ===== SERVICES & AREAS ===== */}

            <section className="py-24 bg-[#F1EDE4]/30">
                <div className="max-w-6xl mx-auto px-6">

                    {/* HEADER */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A44] mb-4">
                            Our Services
                        </h2>
                        <div className="w-24 h-1 bg-[#C9A227] mx-auto"></div>
                    </div>

                    {/* SERVICES GRID */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* 1 */}
                        <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#C9A227]/40 hover:shadow-xl transition-all duration-300">
                            <div className="text-3xl mb-3">🏠</div>
                            <h3 className="text-xl font-semibold text-[#0F2A44] mb-2">
                                Bungalow Construction
                            </h3>
                            <p className="text-slate-600">
                                End-to-end residential construction with BOQ, structural safety and on-time delivery.
                            </p>
                        </div>

                        {/* 2 */}
                        <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#C9A227]/40 hover:shadow-xl transition-all duration-300">
                            <div className="text-3xl mb-3">✨</div>
                            <h3 className="text-xl font-semibold text-[#0F2A44] mb-2">
                                Turnkey Interiors
                            </h3>
                            <p className="text-slate-600">
                                Design to execution — modular kitchens, wardrobes, living & false ceiling.
                            </p>
                        </div>

                        {/* 3 */}
                        <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#C9A227]/40 hover:shadow-xl transition-all duration-300">
                            <div className="text-3xl mb-3">🔧</div>
                            <h3 className="text-xl font-semibold text-[#0F2A44] mb-2">
                                Home Renovation
                            </h3>
                            <p className="text-slate-600">
                                Structural repairs, layout changes, plumbing & electrical upgrades.
                            </p>
                        </div>

                        {/* 4 */}
                        <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#C9A227]/40 hover:shadow-xl transition-all duration-300">
                            <div className="text-3xl mb-3">💧</div>
                            <h3 className="text-xl font-semibold text-[#0F2A44] mb-2">
                                Waterproofing
                            </h3>
                            <p className="text-slate-600">
                                Terrace, bathroom, basement leakage solutions with warranty.
                            </p>
                        </div>

                        {/* 5 */}
                        <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#C9A227]/40 hover:shadow-xl transition-all duration-300">
                            <div className="text-3xl mb-3">🌱</div>
                            <h3 className="text-xl font-semibold text-[#0F2A44] mb-2">
                                Land Development
                            </h3>
                            <p className="text-slate-600">
                                Plot planning, compound, grading, RCC & infrastructure support.
                            </p>
                        </div>

                        {/* 6 */}
                        <div className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-[#C9A227]/40 hover:shadow-xl transition-all duration-300">
                            <div className="text-3xl mb-3">📐</div>
                            <h3 className="text-xl font-semibold text-[#0F2A44] mb-2">
                                PMC & Consulting
                            </h3>
                            <p className="text-slate-600">
                                BOQ verification, vendor management & quality supervision.
                            </p>
                        </div>

                    </div>

                    {/* AREAS TAGS */}
                    <div className="mt-14 text-center">
                        <h4 className="text-lg font-semibold text-[#0F2A44] mb-4">
                            Service Areas in Pune
                        </h4>

                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                "Baner", "Wakad", "Hinjewadi", "Kothrud",
                                "Bavdhan", "Viman Nagar", "Koregaon Park", "PCMC", "Ahilyanagar"
                            ].map(a => (
                                <span key={a}
                                    className="px-4 py-1.5 bg-white hover:shadow-xl rounded-full border border-slate-200 text-slate-700 text-sm">
                                    {a}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </section>


            {/* ===== FAQ – SEO BOOST ===== */}

            <section className="py-24 bg-blue-500/10">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-4xl font-bold text-[#0F2A44] mb-10">
                        FAQs – Construction in Pune
                    </h2>

                    <div className="space-y-6">

                        <div className="p-6 border border-slate-100 bg-white rounded-xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4">
                            <h3 className="font-semibold text-[#0F2A44]">
                                What is bungalow construction cost in Pune?
                            </h3>
                            <p className="text-slate-600 mt-2">
                                Cost depends on specification; typically ranges based on material, design and finishing.
                            </p>
                        </div>

                        <div className="p-6 border border-slate-100 bg-white  rounded-xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4">
                            <h3 className="font-semibold text-[#0F2A44]">
                                Do you provide BOQ?
                            </h3>
                            <p className="text-slate-600 mt-2">
                                Yes, every project gets detailed BOQ before start.
                            </p>
                        </div>

                        <div className="p-6 border border-slate-100 bg-white rounded-xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4">
                            <h3 className="font-semibold text-[#0F2A44]">
                                Do you handle PMC approval?
                            </h3>
                            <p className="text-slate-600 mt-2">
                                We guide through drawings, structural design and approvals.
                            </p>
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
