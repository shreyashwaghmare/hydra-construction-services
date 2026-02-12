// app/services/[service-slug]/page.js
import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimateCounter";

const projects = [
    {
        title: "L-Shaped Kitchen - Pune",
        desc: "Ideal for small to medium homes. Allows space for dining or island. Perfect for larger kitchens",
        location: "Pune",
        area: "320 sq.ft",
        image: "/images/kitchen-L-Wakad.jpg"
    },
    {
        title: "Island Kitchen – Kalyani Nagar",
        desc: "Central island unit. Modern & luxury look. Extra prep space + seating. Works best in spacious homes",
        location: "Kalyani Nagar",
        area: "280 sq.ft",
        image: "/images/Island-kitchen-pune.webp"
    },
    {
        title: "Parallel / Galley Kitchen – Kothrud",
        desc: "Two parallel counters. Highly efficient for compact spaces. Common in apartments. Ideal for small flats or studio homes",
        location: "Kothrud",
        area: "150 sq.ft",
        image: "/images/parallel-kitchen.jpg"
    }
]

const features = [
    {
        title: "Complete Kitchen Renovation",
        desc: "Civil modifications • Layout redesign • Wall and floor tile replacement • Plumbing and electrical rework"
    },
    {
        title: "Modular Kitchen Installation",
        desc: "Custom cabinets (plywood/BWP) • Soft-close hardware • Quartz/Granite countertops • Built-in appliances"
    },
    {
        title: "Structural & Layout Changes",
        desc: "Wall removal (if feasible) • Open kitchen conversion • Kitchen + dining integration • Storage optimization"
    },
    {
        title: "Premium Finishing & Detailing",
        desc: "Designer backsplashes • Cove lighting • False ceiling & cove lighting • High-end laminates/ acrylic / PU & finishes"
    },
    {
        title: "Pantry Design & Storage Solutions",
        desc: "Custom pantry cabinets • Pull-out basket systems • Corner carousel units • Hidden storage integration"
    },
    {
        title: "Basin Remodeling & Sink Upgrades",
        desc: "Stainless steel / quartz sink installation • Double bowl & farmhouse sink options • Drainage & plumbing correction • Premium faucet installation"
    }
]

const process = [
    { step: "Consultation", desc: "Understanding your requirements, budget, and vision." },
    { step: "Planning", desc: "Site analysis, layout planning, and approvals." },
    { step: "Design", desc: "Architectural drawings and 3D elevation finalization." },
    { step: "Execution", desc: "Structural construction with strict quality control." },
    { step: "Handover", desc: "Final finishing, inspection, and key handover." }
]

const questions = [
    {
        q: "How long does kitchen remodeling take?",
        a: "Typically 3–6 weeks depending on structural changes and customization."
    },
    {
        q: "Do you provide modular kitchen design?",
        a: "Yes, we offer fully customized modular kitchen solutions tailored to your space and budget."
    },
    {
        q: "Can you convert a closed kitchen into an open kitchen?",
        a: "Yes, subject to structural feasibility and safety assessment."
    },
    {
        q: "Do you handle plumbing and electrical changes?",
        a: "Yes, we provide complete end-to-end execution including plumbing and electrical rework."
    }
]

export default function ServicePage() {
    return (
        <div className="w-full">

            {/* ================= HERO SECTION ================= */}
            <section className="relative min-h-[80vh] bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center overflow-hidden">
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 py-10 sm:py-20 text-white">

                    <div className="w-full max-w-3xl mx-auto  
    space-y-6 sm:space-y-8 
    bg-white/5 backdrop-blur-md 
    p-6 sm:p-8 md:p-10 
    rounded-2xl sm:rounded-3xl 
    border border-white/10 shadow-xl">

                        {/* Experience Badge */}
                        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 w-fit">
                            <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium">Trusted Construction Experts</span>
                        </div>

                        {/* Stats Section */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">

                            <div className="flex-1 bg-white/10 backdrop-blur px-6 py-4 rounded-2xl border border-white/20 text-center">
                                <div className="text-3xl font-bold text-amber-400">
                                    <AnimatedCounter target={15} suffix="+" />
                                </div>
                                <p className="text-sm text-white/80">Years Experience</p>
                            </div>

                            <div className="flex-1 bg-white/10 backdrop-blur px-6 py-4 rounded-2xl border border-white/20 text-center">
                                <div className="text-3xl font-bold text-amber-400">
                                    <AnimatedCounter target={50} suffix="+" />
                                </div>
                                <p className="text-sm text-white/80">Projects Completed</p>
                            </div>

                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                            Premium{" "}
                            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                                Kitchen Remodeling
                            </span>{" "}
                            in Pune & Ahilyanagar
                        </h1>
                        <p>We transform outdated kitchens into modern, functional, and elegant cooking spaces designed for comfort, efficiency, and long-term durability.</p>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-white/90">
                            HYDRA delivers complete kitchen remodeling solutions in Pune and Ahilyanagar — from structural modifications and civil changes to modular installations and luxury finishes. Whether you want a contemporary open kitchen, a space-optimized layout, or a premium designer upgrade, we handle everything from demolition to final detailing.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <a
                                href="/contact"
                                className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold shadow-xl transition hover:-translate-y-1"
                            >
                                📍 Book Free Site Visit
                            </a>

                            <Link
                                href="/portfolio"
                                className="border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition hover:bg-white hover:text-gray-900"
                            >
                                View Portfolio
                            </Link>
                        </div>

                    </div>
                </div>
            </section>


            {/* ================= WHAT WE OFFER ================= */}
            <section className="py-20 bg-blue-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                            Complete Kitchen Renovation: Open-Concept Layouts, Custom Tiling & Plumbing Upgrades
                        </h2>
                        <p className="text-gray-800 mt-4">
                            Every kitchen we remodel is designed to balance functionality, ventilation, storage efficiency, and long-term durability — ensuring your space is not just beautiful, but intelligently built.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {features.map((item, index) => (
                            <div key={index} className="group text-blue-900 bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-transparent hover:border-amber-200">
                                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-gray-800">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ================= PROCESS SECTION ================= */}
            <section className="py-20 bg-gradient-to-b from-white to-white-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                            Our Process
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-5 gap-6">
                        {process.map((item, index) => (
                            <div key={index} className="text-center p-6 bg-blue-50 rounded-2xl shadow">
                                <div className="text-3xl font-black text-amber-500 mb-3">
                                    {index + 1}
                                </div>
                                <h3 className="font-semibold text-blue-900 text-lg">{item.step}</h3>
                                <p className="text-gray-800 text-sm mt-2">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ================= PROJECT SHOWCASE ================= */}
            <section className="py-20 bg-blue-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
                            Related Projects
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* IMAGE */}
                                <div className="relative h-60 overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-110 transition duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur">
                                        {project.area}
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div className="p-6 space-y-3">
                                    <h3 className="font-semibold text-lg text-blue-900">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-800 text-sm">
                                        {project.desc}
                                    </p>

                                    <div className="flex items-center justify-between pt-3">
                                        <span className="text-sm text-amber-600 font-medium">
                                            📍 {project.location}
                                        </span>

                                        <Link
                                            href="/portfolio"
                                            className="text-sm font-semibold text-blue-700 hover:text-amber-600 transition"
                                        >
                                            View Details →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ================= FAQ SECTION ================= */}
            <section className="py-10 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold  text-blue-900 text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-6">

                        {questions.map((faq, index) => (
                            <div key={index} className="group bg-white p-6 sm:p-8 rounded-3xl 
shadow-md hover:shadow-2xl 
border border-gray-100 
hover:border-amber-200 
transition-all duration-500">
                                <h3 className="font-semibold text-lg text-blue-900 flex items-start justify-between">{faq.q}
                                    <span className="text-amber-500 text-xl transition group-hover:rotate-45">
                                        +
                                    </span>
                                </h3>
                                <p className="text-gray-700 mt-4 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ================= FINAL CTA ================= */}
            <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white text-center">
                <div className="max-w-3xl mx-auto px-6 space-y-6">
                    <h2 className="text-3xl md:text-5xl font-black">
                        Upgrade Your Kitchen with Premium Remodeling Solutions
                    </h2>
                    <p className="text-white/90">
                        Book a free site inspection today and get expert consultation from HYDRA in Pune & Ahilyanagar.
                    </p>
                    <a
                        href="tel:+919697985597"
                        className="inline-block bg-white text-gray-900 px-10 py-4 rounded-2xl font-bold shadow-xl hover:-translate-y-1 transition"
                    >
                        📞 Get Free Quote
                    </a>
                </div>
            </section>

        </div>
    );
}
