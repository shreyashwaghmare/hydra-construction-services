// app/services/[service-slug]/page.js
import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimateCounter";

const projects = [
    {
        title: "Luxury Bungalow – Pune",
        desc: "4BHK premium bungalow with modern elevation, double-height living room, and landscaped exterior.",
        location: "Pune",
        area: "3,200 sq.ft",
        image: "/images/duplex-wakad.webp"
    },
    {
        title: "Contemporary Villa – Ahilyanagar",
        desc: "Minimalist architectural design with spacious interiors and premium finishing materials.",
        location: "Ahilyanagar",
        area: "2,800 sq.ft",
        image: "/images/villa-Ahilyanagar.jpg"
    },
    {
        title: "Modern Family Bungalow – Wagholi",
        desc: "Vastu-compliant layout with elegant façade and high-end interior detailing.",
        location: "Wagholi",
        area: "3,500 sq.ft",
        image: "/images/wagholi-house.jpg"
    }
]

const features = [
    {
        title: "Architectural Planning & 3D Design",
        desc: "Detailed floor planning, elevation design, and 3D visualization to help you clearly see your future bungalow before construction begins."
    },
    {
        title: "Strong RCC Structure",
        desc: "High-quality cement, steel, and structural engineering ensuring long-lasting strength, safety, and durability."
    },
    {
        title: "Vastu-Compliant Layouts",
        desc: "Scientifically planned vastu-friendly layouts (if required) to enhance positive energy and practical living."
    },
    {
        title: "Premium Materials",
        desc: "Top-grade materials for flooring, plumbing, electrical, and finishing work to ensure superior quality."
    },
    {
        title: "Transparent Budgeting",
        desc: "Clear cost estimation with no hidden charges and milestone-based payment structure."
    },
    {
        title: "On-Time Project Delivery",
        desc: "Professional project management ensuring smooth workflow and timely completion of your dream home."
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
        q: "What is the cost of bungalow construction in Pune?",
        a: "The cost depends on plot size, design complexity, materials, and finishing quality. On average, bungalow construction in Pune starts from ₹1,800 – ₹2,500 per sq. ft depending on specifications."
    },
    {
        q: "How long does it take to build a bungalow?",
        a: "A standard bungalow project typically takes 8–14 months depending on size, approvals, and customization requirements."
    },
    {
        q: "Do you provide complete turnkey construction?",
        a: "Yes. We handle everything from planning and approvals to construction and final handover, ensuring a hassle-free experience."
    },
    {
        q: "Do you help with architectural design and approvals?",
        a: "Yes, our team assists with architectural planning, structural design, and required municipal approvals."
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
                                Bungalow Construction
                            </span>{" "}
                            in Pune & Ahilyanagar
                        </h1>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-white/90">
                            Hydra delivers premium bungalow construction in Pune and Ahilyanagar
                            with complete turnkey execution. From structural RCC work to luxury
                            finishing, we build durable, vastu-compliant, and thoughtfully designed
                            homes tailored to your lifestyle and long-term comfort.
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
                            We don’t just construct houses — we build homes designed to stand strong for generations
                        </h2>
                        <p className="text-gray-800 mt-4">
                            Our bungalow construction services cover complete turnkey solutions — including planning, 3D design visualization, structural engineering, material selection, project management, and high-quality finishing. Every project is executed with strict quality control, transparent timelines, and attention to detail.
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
                        Build Your Dream Bungalow with Hydra Construction
                    </h2>
                    <p className="text-white/90">
                        Schedule a free consultation and site visit in Pune or Ahilyanagar today.
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
