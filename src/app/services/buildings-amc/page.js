// app/services/[service-slug]/page.js
'use client';
import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimateCounter";
import { motion } from "framer-motion";
import { useState } from "react";
const projects = [
    {
        title: "Residential Building AMC – Baner",
        desc: "Comprehensive annual maintenance covering plumbing, electrical systems, waterproofing checks, and common area upkeep.",
        location: "Baner",
        area: "45 Flats",
        image: "/images/building-repairs.jpg"
    },
    {
        title: "Commercial Building AMC – Kalyani Nagar",
        desc: "Routine inspections, lift coordination, electrical panels maintenance, fire safety checks, and preventive servicing.",
        location: "Kalyani Nagar",
        area: "18,000 sq.ft",
        image: "/images/service-bungalow.jpg"
    },
    {
        title: "Society Maintenance Contract – Wakad",
        desc: "End-to-end society AMC including terrace waterproofing audits, plumbing shaft inspections, and structural health checks.",
        location: "Wakad",
        area: "72 Units",
        image: "/images/AMCrepairs.jpg"
    }
]

const features = [
    {
        title: "Preventive Maintenance Planning",
        desc: "Scheduled inspections • Electrical load checks • Plumbing audits • Waterproofing assessments • Structural crack monitoring"
    },
    {
        title: "Electrical & Panel Maintenance",
        desc: "MCB & panel inspection • Wiring checks • Load balancing • Generator coordination • Common area lighting upkeep"
    },
    {
        title: "Plumbing & Drainage Maintenance",
        desc: "Leak detection • Shaft inspections • Motor & pump servicing • Overhead tank cleaning coordination"
    },
    {
        title: "Terrace & Waterproofing Audits",
        desc: "Leakage identification • Waterproof coating inspection • Drain slope correction • Preventive sealing"
    },
    {
        title: "Civil Repairs & Minor Renovations",
        desc: "Plaster repair • Crack filling • Tile replacement • Common area refurbishment"
    },
    {
        title: "Emergency Breakdown Support",
        desc: "On-call response for electrical faults • Plumbing breakdowns • Water leakage issues • Structural safety concerns"
    }
]

const process = [
    { 
        step: "Site Assessment", 
        desc: "Detailed building inspection and system evaluation before contract finalization." 
    },
    { 
        step: "AMC Planning", 
        desc: "Customized annual maintenance schedule based on building type and usage." 
    },
    { 
        step: "Quarterly Inspections", 
        desc: "Routine preventive checks for electrical, plumbing, waterproofing, and civil elements." 
    },
    { 
        step: "Repair & Maintenance Execution", 
        desc: "Timely rectification of identified issues with documented reporting." 
    },
    { 
        step: "Annual Performance Review", 
        desc: "Comprehensive building condition report and future maintenance planning." 
    }
]


const questions = [
    {
        q: "What is included in a Building AMC?",
        a: "Our AMC covers preventive inspections, electrical and plumbing maintenance, waterproofing audits, minor civil repairs, and emergency breakdown support."
    },
    {
        q: "Do you provide AMC for residential societies?",
        a: "Yes, we offer tailored annual maintenance contracts for residential buildings, housing societies, and commercial properties."
    },
    {
        q: "How often are inspections conducted?",
        a: "We conduct quarterly preventive inspections, with additional visits as per contract terms."
    },
    {
        q: "Is emergency support included?",
        a: "Yes, emergency breakdown support for electrical and plumbing issues is included in AMC plans."
    }
]


export default function ServicePage() {
    const [active, setActive] = useState(null)

    return (
        <div className="w-full">

            {/* ================= HERO SECTION ================= */}
            <section className="relative min-h-[80vh] bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center overflow-hidden">

                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 py-10 sm:py-20 text-white">

                    <div className="w-full max-w-3xl mx-auto space-y-6 sm:space-y-8 bg-white/5 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl  border border-white/10 shadow-xl">
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
                                <span className="text-sm font-medium">Trusted Building Maintenance Experts</span>
                            </div>

                        </div>

                        {/* Stats Section */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">

                            <div className="flex-1 bg-white/10 backdrop-blur px-6 py-4 rounded-2xl border border-white/20 text-center">
                                <div className="text-3xl font-bold text-amber-400">
                                    <AnimatedCounter target={5} suffix="+" />
                                </div>
                                <p className="text-sm text-white/80">Years Experience</p>
                            </div>

                            <div className="flex-1 bg-white/10 backdrop-blur px-6 py-4 rounded-2xl border border-white/20 text-center">
                                <div className="text-3xl font-bold text-amber-400">
                                    <AnimatedCounter target={20} suffix="+" />
                                </div>
                                <p className="text-sm text-white/80">Projects Completed</p>
                            </div>

                        </div>

                        {/* Heading */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                            Professional{" "}
                            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
                                Building AMC Services
                            </span>{" "}
                            in Pune & Ahilyanagar
                        </h1>
                        <p>We provide structured Annual Maintenance Contracts (AMC) for residential and commercial buildings — ensuring long-term safety, performance, and cost-efficient upkeep.</p>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-white/90">
                            Hydra delivers comprehensive Building AMC services in Pune and Ahilyanagar — covering preventive inspections, electrical and plumbing maintenance, waterproofing audits, civil repairs, and emergency breakdown support. Our structured maintenance model helps extend building life, prevent costly failures, and maintain property value year-round.
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
                                <span className="text-blue-700">In Every AMC Contract</span>
                            </h2>

                            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                                Structured execution. Transparent costing. Engineered durability.
                                Every element is planned with long-term performance in mind.
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
                            Residential and commercial buildings under our structured annual maintenance contracts — built with
                            precision, ventilation planning, and durable finishes.
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
                        Looking for a Reliable Building AMC in Pune?
                    </h2>

                    <p className="text-white/80 text-lg leading-relaxed">
                        Schedule a professional building assessment with Hydra.
                        Get a customized AMC proposal, preventive maintenance plan, and transparent annual costing.
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
