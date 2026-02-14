// app/services/[service-slug]/page.js
'use client';
import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimateCounter";
import { motion } from "framer-motion"
import { useState } from "react";

const projects = [
    {
        title: "Luxury Home Interior Design – Pune",
        desc: "Complete turnkey interior project including custom bedroom wardrobes, modular kitchen, false ceiling with ambient lighting, designer living room finishes, and premium bathroom upgrades.",
        location: "Pune",
        area: "1,850 sq.ft Residence",
        image: "/images/PCMC-false-ceiling.jpeg"
    },
    {
        title: "Premium Apartment Interiors – Ahilyanagar",
        desc: "Modern interior design featuring space-optimized Living room, elegant TV unit design, modular storage solutions, spa-style bathroom renovation, and high-quality flooring & lighting execution.",
        location: "Ahilyanagar",
        area: "1,400 sq.ft Apartment",
        image: "/images/service-interior.jpg"
    },
    {
        title: "Luxury Bedroom & Interior Upgrade – Wagholi",
        desc: "Integrated home transformation with bedroom redesign, balcony seating layout, custom wardrobes, false ceiling work, and a beautifully designed terrace gazebo with outdoor lighting.",
        location: "Wagholi",
        area: "2,100 sq.ft Home",
        image: "/images/bedroom-design.png"
    }
];


const features = [
    {
        title: "Space Planning & 3D Interior Design",
        desc: "Detailed 2D layouts and realistic 3D interior visualization to optimize bedrooms, living rooms, kitchens, bathrooms, balconies, and terrace spaces for maximum functionality and flow."
    },
    {
        title: "Custom Furniture & Modular Storage",
        desc: "Bespoke wardrobes, TV units, modular kitchens, study tables, work-from-home setups, shoe racks, and smart storage solutions designed for space efficiency and modern living."
    },
    {
        title: "Luxury Bedroom & Living Room Interiors",
        desc: "Premium bedroom designs with custom headboards, sliding wardrobes, and ambient lighting, along with elegant living room interiors featuring designer sofas, accent chairs, and décor finishes."
    },
    {
        title: "False Ceiling & Lighting Design",
        desc: "Modern gypsum and POP false ceiling work with LED strip lighting, cove lighting, chandeliers, pendant lights, and layered lighting concepts for a premium interior ambiance."
    },
    {
        title: "Dining & Lounge Furniture Solutions",
        desc: "Custom dining tables, ergonomic chairs, luxury sofa sets, center tables, and lounge furniture crafted for comfort, durability, and refined aesthetics."
    },
    {
        title: "Balcony & Terrace Makeovers",
        desc: "Designer balcony seating layouts, wooden decking, artificial grass, railing upgrades, terrace gazebo installations, and outdoor lighting for stylish outdoor living spaces."
    },
    {
        title: "Garden & Landscape Enhancements",
        desc: "Home garden design, vertical gardens, pathway lighting, decorative planters, and landscape elements that elevate your outdoor environment."
    },
    {
        title: "Premium Painting & Wall Finishes",
        desc: "High-quality interior painting, texture walls, wallpaper installation, decorative panels, and modern wall cladding for a refined and long-lasting finish."
    },
    {
        title: "Turnkey Interior Execution",
        desc: "Complete end-to-end interior design and execution — from civil modifications and electrical work to furniture installation and final styling — delivered with transparent pricing and timely completion."
    }
];


const process = [
    {
        step: "Consultation",
        desc: "Understanding your space, lifestyle needs, budget, and design preferences."
    },
    {
        step: "Space Planning",
        desc: "Detailed layout planning with 2D drawings and optimized furniture positioning."
    },
    {
        step: "3D Design & Material Selection",
        desc: "Photorealistic 3D interior views, finish selection, lighting planning, and final design approvals."
    },
    {
        step: "Execution & Installation",
        desc: "Furniture manufacturing, false ceiling work, electrical execution, painting, and site installation."
    },
    {
        step: "Final Styling & Handover",
        desc: "Quality inspection, detailing, finishing touches, and seamless project handover."
    }
];


const questions = [
    {
        q: "What is the cost of interior design in Pune?",
        a: "Interior design costs in Pune depend on project size, material selection, furniture customization, false ceiling work, lighting design, and finishing quality. On average, turnkey home interiors start from ₹1,500 – ₹2,500 per sq.ft depending on specifications and level of customization."
    },
    {
        q: "Do you provide complete turnkey interior solutions?",
        a: "Yes. We offer end-to-end interior design and execution including space planning, 3D visualization, civil modifications, electrical work, false ceiling, furniture manufacturing, painting, lighting, and final installation."
    },
    {
        q: "Do you design custom furniture and modular storage?",
        a: "Absolutely. We design and manufacture custom wardrobes, TV units, modular kitchens, study tables, work-from-home setups, dining tables, sofa units, and smart storage solutions tailored to your space."
    },
    {
        q: "Do you handle false ceiling and lighting design?",
        a: "Yes. We provide modern gypsum and POP false ceiling work along with layered lighting solutions including LED strips, chandeliers, pendant lights, cove lighting, and ambient interior lighting concepts."
    },
    {
        q: "Can you redesign balconies and terrace spaces?",
        a: "Yes. We create stylish balcony makeovers, terrace seating layouts, wooden decking, artificial grass installations, terrace gazebos, and outdoor lighting to enhance your outdoor living experience."
    },
    {
        q: "Do you provide luxury bedroom and living room interiors?",
        a: "Yes. We design premium bedrooms with custom headboards and wardrobes, and elegant living rooms with designer sofas, accent chairs, TV units, décor panels, and refined finishes."
    },
    {
        q: "Do you offer garden and landscape design services?",
        a: "Yes. We design home gardens, vertical gardens, decorative pathways, planter layouts, and landscape lighting to elevate your outdoor environment."
    },
    {
        q: "How long does a full home interior project take?",
        a: "A complete home interior project typically takes 6–12 weeks depending on size, scope of customization, and material selection."
    },
    {
        q: "Do you offer transparent pricing and timelines?",
        a: "Yes. We provide detailed cost breakdowns, milestone-based payment structures, and professional project management to ensure clarity, transparency, and on-time delivery."
    },
    {
        q: "How can I get started with my interior project?",
        a: "Simply contact our team for a consultation. We will assess your space, understand your lifestyle requirements, provide a design proposal with 3D concepts, and guide you through a seamless turnkey execution process."
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
                                <span className="text-sm font-medium">Trusted Interior Design Experts</span>
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
                                Interior Design Services
                            </span>{" "}
                            in Pune & Ahilyanagar
                        </h1>

                        {/* Description */}
                        <p className="text-base sm:text-lg text-white/90">
                            Hydra delivers luxury turnkey interior and outdoor living solutions in Pune and
                            Ahilyanagar — from bespoke bedroom and living room interiors to spa-style bathrooms,
                            designer balconies, terrace gazebos, and curated garden spaces.
                            Every project is engineered with precision, premium materials, and
                            refined detailing to ensure timeless elegance and lasting performance.
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
            <p className="hidden">
                Interior designer in Pune, turnkey interior solutions in Ahilyanagar,
                luxury bedroom design, modular furniture, false ceiling work, balcony makeover,
                terrace gazebo design, garden landscape design, and complete home renovation services.
            </p>


            {/* ================= WHAT WE OFFER ================= */}
            <section className="py-28 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-6xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-20">

                        {/* LEFT SIDE */}
                        <div className="sticky top-32 h-fit max-w-lg">

                            <div className="w-16 h-[3px] bg-amber-400 mb-6"></div>

                            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-blue-900">
                                What We Deliver <br />
                                <span className="text-blue-700">Complete Interior & Outdoor Living Solutions</span>
                            </h2>

                            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                                Intelligent space planning. Clear cost transparency. Precision-crafted execution.
                                Whether it’s custom bedroom wardrobes, luxury living areas, spa-inspired bathrooms,
                                or beautifully designed balconies and terrace gazebos, every space is created for
                                long-term performance, refined aesthetics, and everyday comfort.
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
                            Complete home interior design projects across Pune & Ahilyanagar — featuring luxury bedrooms,
                            modular furniture, false ceilings, balcony makeovers, terrace gazebos,
                            and premium finishes.
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

            <div className="grid grid-cols-3 gap-6 text-center text-xl py-12 text-gray-800">
                <div>✔ In-House Execution Team</div>
                <div>✔ Transparent BOQ Pricing</div>
                <div>✔ On-Time Project Delivery</div>
            </div>

            {/* ================= FINAL CTA ================= */}
            <div className="h-px bg-blue-800/40"></div>
            <section className="py-28 bg-blue-900 text-white text-center">
                <div className="max-w-3xl mx-auto px-6 space-y-8">

                    <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        Looking for a Trusted Interior Designer in Pune?
                        Let’s Design Your Dream Home.
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
