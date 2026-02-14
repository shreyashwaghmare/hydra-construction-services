// app/services/[service-slug]/page.js
'use client';
import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimateCounter";
import { motion } from "framer-motion"
import { useState } from "react";

const projects = [
    {
        title: "Luxury Bathroom Renovation – Pune",
        desc: "Complete bathroom remodeling featuring a freestanding bathtub, glass shower partition, smart rain shower system, concealed cistern toilet, and premium anti-skid tiles.",
        location: "Pune",
        area: "120 sq.ft",
        image: "/images/luxury-showers.webp"
    },
    {
        title: "Spa-Style Bathroom with Jacuzzi – Ahilyanagar",
        desc: "Premium bathroom design with in-built jacuzzi, steam bath cabin, wall-mounted western toilet, designer vanity unit, and advanced waterproofing system.",
        location: "Ahilyanagar",
        area: "140 sq.ft",
        image: "/images/elegant-bathroom.webp"
    },
    {
        title: "Modern Bathroom Upgrade – Wagholi",
        desc: "Space-optimized bathroom renovation with smart shower system, counter basin vanity, concealed plumbing lines, LED mirror, and high-quality wall & floor tiling.",
        location: "Wagholi",
        area: "95 sq.ft",
        image: "/images/bathroom-basin.webp"
    }
];

const features = [
    {
        title: "Smart Space Planning & 3D Design",
        desc: "Optimized bathroom layouts with detailed 2D planning and 3D visualization to maximize space, ventilation, and functional flow."
    },
    {
        title: "Waterproofing & Plumbing Systems",
        desc: "Advanced waterproofing treatment, pressure-tested plumbing lines, and engineered drainage systems for completely leak-proof performance."
    },
    {
        title: "Luxury Bathtubs & Jacuzzi Installation",
        desc: "Freestanding bathtubs, in-built jacuzzis, and spa-style relaxation systems designed for premium comfort and modern aesthetics."
    },
    {
        title: "Steam Bath & Wellness Solutions",
        desc: "Luxury steam bath cabins and wellness features that transform your bathroom into a private spa experience."
    },
    {
        title: "Smart Shower Systems & Premium Fittings",
        desc: "Modern rain showers, thermostatic mixers, concealed diverters, and smart shower systems with temperature control and precision flow."
    },
    {
        title: "Modern Western Toilets & Concealed Cisterns",
        desc: "Wall-mounted western toilets, dual-flush concealed cistern systems, sensor-based flushing options, and soft-close technology."
    },
    {
        title: "Vanity Units & Storage Solutions",
        desc: "Custom vanity units, LED mirrors, counter basins, and intelligent storage planning for clutter-free elegance."
    },
    {
        title: "Premium Tiles & Finishing",
        desc: "Anti-skid flooring, designer wall tiles, glass partitions, and high-end finishes for durability and refined aesthetics."
    },
    {
        title: "Transparent Budgeting & Timely Execution",
        desc: "Clear cost breakdowns, milestone-based payments, and professional project management ensuring smooth and on-time delivery."
    }
];

const process = [
    { step: "Consultation", desc: "Understanding your requirements, budget, and vision." },
    { step: "Planning", desc: "Site analysis, layout planning, and approvals." },
    { step: "Design", desc: "Architectural drawings and 3D elevation finalization." },
    { step: "Execution", desc: "Structural construction with strict quality control." },
    { step: "Handover", desc: "Final finishing, inspection, and key handover." }
]

const questions = [
    {
        q: "What is the cost of bathroom renovation in Pune?",
        a: "Bathroom renovation costs in Pune depend on size, material selection, fittings, and luxury additions like bathtubs or jacuzzi systems. On average, projects start from ₹1.5 lakh and can go higher based on customization and premium finishes."
    },
    {
        q: "How long does a bathroom remodeling project take?",
        a: "A standard bathroom renovation typically takes 10–21 days depending on design complexity, plumbing changes, waterproofing work, and installation of premium fixtures."
    },
    {
        q: "Do you provide complete turnkey bathroom design services?",
        a: "Yes. We handle everything from space planning and 3D design to waterproofing, plumbing, tiling, fixture installation, and final handover for a hassle-free experience."
    },
    {
        q: "Can you install bathtubs, jacuzzis, or steam baths?",
        a: "Absolutely. We design and install freestanding bathtubs, in-built jacuzzis, steam bath cabins, and other luxury wellness features tailored to your space and budget."
    },
    {
        q: "Do you install smart shower systems and modern toilets?",
        a: "Yes. We install rain showers, thermostatic mixers, smart shower systems, wall-mounted western toilets, concealed cisterns, and sensor-based fittings."
    },
    {
        q: "Do you provide waterproofing and plumbing upgrades?",
        a: "Yes. We use advanced waterproofing systems and pressure-tested plumbing lines to ensure long-term leak-proof performance and durability."
    }
];


export default function ServicePage() {
    const [active, setActive] = useState(null)
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
                        <div className="flex items-center justify-between">

                            <Link
                                href="/services"
                                className="inline-flex items-center gap-2 
    text-white/60 hover:text-white 
    text-sm font-medium transition"
                            >
                                ← All Services
                            </Link>

                            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20">
                                <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium">Trusted Construction Experts</span>
                            </div>

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
                                    <AnimatedCounter target={200} suffix="+" />
                                </div>
                                <p className="text-sm text-white/80">Projects Completed</p>
                            </div>

                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                            Premium{" "}
                            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                                Bathroom Design
                            </span>{" "}
                            in Pune & Ahilyanagar
                        </h1>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-white/90">
                            Hydra specializes in luxury bathroom design and remodeling in Pune and Ahilyanagar,
                             offering turnkey solutions from waterproofing and plumbing to premium sanitaryware 
                             installation and modern wet-area finishes. We design durable, leak-proof, and
                             thoughtfully planned bathrooms that combine functionality, elegance, and long-term reliability.
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
            <section className="py-28 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-20">

                        {/* LEFT SIDE */}
                        <div className="sticky top-32 h-fit max-w-lg">

                            <div className="w-16 h-[3px] bg-amber-400 mb-6"></div>

                            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-blue-900">
                                What We Deliver <br />
                                <span className="text-blue-700">From Foundation to Finish</span>
                            </h2>

                            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                                Smart space planning. Transparent pricing. Engineered waterproofing and drainage systems.
                                We install modern bathtubs, jacuzzi systems, shower partitions, and premium sanitaryware with
                                leak-proof precision and long-term structural safety in mind.
                            </p>

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="relative space-y-16 pl-10">

                            <div className="absolute left-2 top-0 w-[2px] h-full bg-blue-100"></div>

                            {features.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    className="relative group bg-white p-10 rounded-3xl shadow-lg 
            transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                >

                                    <div className="absolute -left-[26px] top-10 w-5 h-5 bg-amber-400 rounded-full border-4 border-white"></div>

                                    <h3 className="text-2xl font-bold text-blue-900 mb-4">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed">
                                        {item.desc}
                                    </p>

                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>



            {/* ================= PROCESS SECTION ================= */}
            <section className="py-14 bg-white">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-blue-900">
                            Our Process
                        </h2>
                        <p className="text-gray-600 mt-4">
                            A structured renovation workflow ensuring clarity at every stage.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute top-8 left-0 w-full h-[2px] bg-blue-100 rounded-full"></div>
                        {/* Horizontal line */}
                        <div className="hidden md:block absolute top-8 left-0 w-full h-[2px] bg-blue-100"></div>

                        <div className="grid md:grid-cols-5 gap-10 relative">
                            {process.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center relative"
                                >

                                    <div className="w-16 h-16 mx-auto flex items-center justify-center 
            rounded-full bg-amber-400 text-white font-bold text-xl shadow-lg relative z-10">
                                        {index + 1}
                                    </div>

                                    <h3 className="font-semibold text-blue-900 text-lg mt-6">
                                        {item.step}
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                                        {item.desc}
                                    </p>

                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* ================= PROJECT SHOWCASE ================= */}
            <section className="py-20 bg-gradient-to-b from-white to-blue-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-blue-900">
                            Related Projects
                        </h2>
                        <p className="text-gray-600 mt-4 leading-relaxed">
                            Bathroom design and renovation projects across Pune — featuring bathtubs,
                             jacuzzis, smart showers, and premium finishes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group overflow-hidden rounded-3xl transition-all duration-700 ease-out hover:-translate-y-1">
                                {/* IMAGE */}
                                <div className="relative h-72 md:h-80 overflow-hidden">

                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover group-hover:scale-110 transition duration-700"
                                    />
                                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 ease-out">

                                        <div className="absolute bottom-6 left-6 text-white">
                                            <p className="text-sm font-medium tracking-wide">
                                                {project.location}
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div className="p-8">

                                    <h3 className="text-xl font-semibold tracking-tight text-blue-900">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                                        {project.desc}
                                    </p>

                                    <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">

                                        <span className="text-xs uppercase tracking-wider text-gray-800">
                                            {project.area}
                                        </span>
                                        <Link
                                            href="/portfolio"
                                            className="text-sm font-semibold text-blue-800 hover:text-amber-500 transition-colors duration-300"
                                        >
                                            View Project →
                                        </Link>

                                    </div>

                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= FAQ SECTION ================= */}
            <section className="py-24 bg-white aria-expanded">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold  text-blue-900 text-center mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-2">
                        {questions.map((faq, index) => (
                            <div key={index} className="border-b border-gray-200">

                                <button
                                    onClick={() => setActive(active === index ? null : index)}
                                    className="w-full flex justify-between items-center py-6 text-left"
                                >
                                    <h3 className="text-lg font-semibold text-blue-900">
                                        {faq.q}
                                    </h3>

                                    <span className={`text-amber-500 text-xl transition-transform duration-300 ${active === index ? "rotate-45" : ""
                                        }`}>
                                        +
                                    </span>
                                </button>

                                <div className={`overflow-hidden transition-all duration-500 ease-out ${active === index ? "max-h-96 pb-6" : "max-h-0"
                                    }`}>
                                    <p className="text-gray-600 leading-relaxed">
                                        {faq.a}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* ================= FINAL CTA ================= */}
            <div className="h-px bg-blue-800/40"></div>
            <section className="py-28 bg-blue-900 text-white text-center">
                <div className="max-w-3xl mx-auto px-6 space-y-8">

                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Planning a Bungalow Construction in Pune?
                    </h2>

                    <p className="text-white/80 text-lg leading-relaxed">
                        Schedule a structured site assessment with Hydra.
                        Get transparent costing, execution timelines, and expert guidance
                        before you commit.
                    </p>
                    <p className="text-sm text-white/60 tracking-wide">
                        Detailed BOQ • Clear Timelines • Quality-Checked Execution
                    </p>
                    <a
                        href="tel:+919697985597"
                        className="inline-block bg-white text-blue-900 px-10 py-4 rounded-2xl 
      font-semibold transition-all duration-500 
      hover:-translate-y-1 hover:shadow-2xl"
                    >
                        Schedule Free Site Visit
                    </a>

                </div>
            </section>

        </div>
    );
}
