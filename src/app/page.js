'use client';
import Image from "next/image"
import { useEffect, useState ,useRef} from "react";
import { motion,AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const slides = [
    {
      image: "/images/hero-bungalow.webp",
      title: "Pune's Construction & Interior Design Experts",
      subtitle: "Modular Kitchens • Wardrobes • Bathroom Design • Smart Lighting • Turnkey Interiors",
    },
    {
      image: "/images/service-interior.jpg",
      title: "Luxury Interiors Crafted for Modern Living",
      subtitle: "Premium Materials • Smart Storage • Vastu Friendly Layouts",
    },
    {
      image: "/images/terrace-gazebo.jpg",
      title: "End‑to‑End Renovation Without Stress",
      subtitle: "Fixed Timelines • Transparent Pricing • On‑Site Supervision",
    },
  ];

  const services = [
  {
    icon: "🏠",
    title: "Bungalow Construction",
    description: "3BHK / 4BHK turnkey construction from foundation to finish.",
    price: "Starting ₹75 Lac",
    link: "/services/bungalow-construction"
  },
  {
    icon: "🍳",
    title: "Kitchen Remodeling",
    description: "L-shape, Island & Modular kitchens built for durability.",
    price: "₹3 – 8 Lac",
    link: "/services/kitchen-remodeling"
  },
  {
    icon: "🛁",
    title: "Bathroom Design",
    description: "Modern wet rooms & luxury modular solutions.",
    price: "₹2.5 – 6 Lac",
    link: "/services/bathroom-design"
  },
  {
    icon: "🛋️",
    title: "Full Interior",
    description: "Furniture, false ceiling, painting & lighting.",
    price: "₹800 / sqft",
    link: "/services/full-interior"
  },
  {
    icon: "🔧",
    title: "Building AMC",
    description: "Annual maintenance & structural repair contracts.",
    price: "₹25k / year",
    link: "/services/buildings-amc"
  },
  {
    icon: "💧",
    title: "Waterproofing",
    description: "Terrace, bathrooms & foundation leak protection.",
    price: "₹45 / sqft",
    link: "/services/waterproofing"
  }
]

  const recentProjects = [
    {
      title: 'Baner 4BHK Bungalow',
      desc: 'Modular Kitchen, Walk-in Wardrobes & Smart Lighting',
      date: 'Delivered Dec 2025',
      src: '/images/duplex-wakad.webp',
      alt: 'Baner 4BHK Bungalow Modular Kitchen'
    },
    {
      title: 'Island Kitchen Renovation',
      desc: 'Modern Island Kitchen with Smart Storage',
      date: 'Delivered Nov 2025',
      src: '/images/island-kitchen.webp',
      alt: 'Island Kitchen Renovation – Wakad'
    },
    {
      title: 'Luxury Living Room Interior',
      desc: 'Designer Sofa, TV Unit & Ambient Lighting',
      date: 'Delivered Oct 2025',
      src: '/images/service-interior.jpg',
      alt: 'Luxury Living Room Interior – Pune'
    }
  ];
  /* ─── PRELOAD NEXT IMAGE ──────────────────────── */
  useEffect(() => {
    const next = (index + 1) % slides.length;
    const img = new window.Image();
    img.src = slides[next].image;
  }, [index]);

  /* Timer driving both slide + ken burns */
  useEffect(() => {
    const duration = 6000;
    const step = 50;
    let elapsed = 0;


    intervalRef.current && clearInterval(intervalRef.current);


    intervalRef.current = setInterval(() => {
      elapsed += step;
      setProgress(Math.min(elapsed / duration, 1));


      if (elapsed >= duration) {
        setIndex((i) => (i + 1) % slides.length);
        elapsed = 0;
        setProgress(0);
      }
    }, step);


    return () => clearInterval(intervalRef.current);
  }, [index]);

  return (
    <>
<section className="relative w-full min-h-screen overflow-hidden bg-black">
  <AnimatePresence initial={false} mode="wait">
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
      className="absolute inset-0"
    >
      <Image
        src={slides[index].image}
        alt="Hydra Corporation Construction and Interior Projects"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        
      />
    </motion.div>
  </AnimatePresence>

  {/* Top Story Progress Bar */}
  <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 w-[280px]">
    {slides.map((_, i) => (
      <div key={i} className="flex-1 h-[3px] bg-white/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600"
          animate={{
            width:
              i < index
                ? "100%"
                : i === index
                ? `${progress * 100}%`
                : "0%",
          }}
          transition={{ ease: "linear" }}
        />
      </div>
    ))}
  </div>

  <div className="relative z-10 container mx-auto px-6 flex flex-col justify-center items-center text-center min-h-screen pt-28 pb-16">

    {/* Badge */}
    <div className="mb-6 inline-flex items-center gap-3 bg-black-90 backdrop-blur-md px-6 py-2 rounded-full border border-gray/20">
      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
      <span className="text-sm text-white tracking-wide">
        Pune’s Transparent Construction & Interior Design Partner
      </span>
    </div>

    {/* Main Title */}
    <motion.h1
      key={"title" + index}
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight max-w-4xl mb-6"
    >
      {slides[index].title}
    </motion.h1>

    {/* Subtitle */}
    <motion.h2
      key={"sub" + index}
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="text-lg md:text-xl lg:text-2xl text-yellow-400 max-w-3xl mx-auto mb-6 font-medium"
    >
      {slides[index].subtitle}
    </motion.h2>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="text-base md:text-lg text-white-900 max-w-2xl mx-auto mb-10 leading-relaxed"
    >
      Transparent BOQs. Fixed timelines. On-site supervision.
      From modular interiors to full bungalow construction — 
      we build with clarity, quality, and commitment.
    </motion.p>

    {/* CTA Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 w-full sm:w-auto">
      <a
        href="/portfolio"
        className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
      >
        View Our Projects
      </a>
      <a
        href="/contact"
        className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition"
      >
        Get Free Estimate
      </a>
    </div>

    {/* Trust Strip */}
    <div className="flex flex-wrap justify-center gap-6 p-4 text-white text-sm md:text-base mb-10">
      <span>✔ Transparent Pricing</span>
      <span>✔ Quality Materials</span>
      <span>✔ Dedicated Site Engineer</span>
      <span>✔ Timeline Commitment</span>
    </div>

    {/* WhatsApp CTA */}
    <a
      href="https://wa.me/919697985597"
      className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-gray-900 px-10 py-4 rounded-2xl font-bold text-lg md:text-xl shadow-2xl hover:scale-105 transition-transform"
    >
      📱 Get Free Consultation on WhatsApp
    </a>

    {/* Manual Dots */}
    <div className="flex gap-3 mt-10">
      {slides.map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          className={`h-2 rounded-full transition-all ${
            i === index ? "w-8 bg-yellow-400" : "w-3 bg-white/40"
          }`}
        />
      ))}
    </div>

  </div>
</section>


      {/* 1. PROFESSIONAL 6-SERVICES GRID */}
      <section className="pt-28 pb-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-20"
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
        From Strong Foundations to Stunning Interiors
      </h2>
      <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
        End-to-end construction and interior solutions under one roof.
      </p>
    </motion.div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {services.map((service, i) => (
        <motion.div
  key={i}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, delay: i * 0.1 }}
>
  <Link
    href={service.link}
    className="group relative block bg-white rounded-3xl shadow-lg 
    hover:shadow-2xl border border-neutral-200 
    p-8 md:p-10 transition-all duration-500 
    active:scale-[0.98]"
  >

    {/* Subtle Hover Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-amber-100/30 opacity-0 group-hover:opacity-100 rounded-3xl transition duration-500" />

    <div className="relative z-10">

      {/* Icon */}
      <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-amber-200 transition duration-500">
        {service.icon}
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3 group-hover:text-amber-500 transition">
        {service.title}
      </h3>

      {/* Price */}
      <div className="text-lg font-semibold text-blue-900 mb-3">
        {service.price}
      </div>

      {/* Description */}
      <p className="text-gray-800 text-sm md:text-base leading-relaxed">
        {service.description}
      </p>

      {/* CTA */}
      <div className="
        mt-5 font-semibold text-amber-500
        md:opacity-0 md:translate-y-4
        md:group-hover:opacity-100
        md:group-hover:translate-y-0
        transition-all duration-500
      ">
        Explore Service →
      </div>

    </div>
  </Link>
</motion.div>
      ))}

    </div>
  </div>
</section>



      {/* 2. RECENT PROJECTS */}
      <section className="pt-10 pb-22 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 text-center  mb-4 font-['Oswald',sans-serif]">
            Recent Interior & Renovation Projects in Pune
          </h2>
          <p className="text-lg md:text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto font-['Montserrat',sans-serif]">
            Showcasing our work from modular kitchens to complete 4BHK home transformations – transparency, quality, and style in every project.
          </p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                {/* Image */}
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={400}
                  height={300}
                  className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 rounded-3xl">
                  <h3 className="text-white text-2xl font-black font-['Oswald',sans-serif] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm mb-1 font-['Montserrat',sans-serif]">
                    {project.desc}
                  </p>
                  <span className="text-yellow-400 font-bold text-xs uppercase font-['Montserrat',sans-serif]">
                    {project.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-24 bg-gradient-to-b from-gray-900 via-gray-900 to-black text-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          {/* Animated background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent),radial-gradient(circle_at_80%_80%,rgba(120,119,198,0.2),transparent)] pointer-events-none"></div>

          <div className="relative z-10 text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-yellow-400/10 border-2 border-yellow-400/30 px-6 py-3 rounded-full mb-8">
              <span className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></span>
              <span className="text-yellow-400 font-bold text-lg tracking-wide">Verified Professionals • Transparent Pricing • End‑to‑End Execution</span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 bg-clip-text text-transparent mb-8 leading-tight">
              Why Pune's Smart Homeowners<br />Choose <span className="text-white drop-shadow-2xl">Hydra Corporation</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              15+ Years • 50+ Projects • Kharadi, Koregaon Park & Ahilyanagar
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* License Card */}
            <div className="group relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-yellow-400/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-yellow-400 rounded-3xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">📋</div>
                <h3 className="text-3xl font-black text-yellow-400 mb-4 text-center">Construction & Interiors</h3>
                <p className="text-gray-300 text-lg text-center">End-to-End Execution</p>
              </div>
            </div>

            {/* Experience Card */}
            <div className="group relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-emerald-400/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400/20 to-teal-500/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt delay-200"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-emerald-400 rounded-3xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">🔧</div>
                <h3 className="text-3xl font-black text-emerald-400 mb-4 text-center">15+</h3>
                <p className="text-gray-300 text-lg text-center">Years Pune Experience</p>
              </div>
            </div>

            {/* Projects Card */}
            <div className="group relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-indigo-500/20 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt delay-400"></div>
              <div className="relative">
                <div className="w-20 h-20 bg-blue-400 rounded-3xl flex items-center justify-center text-2xl font-bold mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">🏠</div>
                <h3 className="text-3xl font-black text-blue-400 mb-4 text-center">50+</h3>
                <p className="text-gray-300 text-lg text-center">Projects Delivered</p>
              </div>
            </div>
          </div>

          {/* Trust Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 backdrop-blur-xl p-10 rounded-3xl border border-yellow-400/20 hover:shadow-2xl transition-all duration-300">
              <h4 className="text-2xl font-black text-yellow-400 mb-6 flex items-center gap-3">
                <span className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></span>
                Kothrud, Baner, Koregaon Park
              </h4>
              <ul className="space-y-3 text-lg text-gray-200">
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-emerald-400 rounded-full"></span>50+ Pune projects delivered</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-emerald-400 rounded-full"></span>2 year structural warranty</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-emerald-400 rounded-full"></span>WhatsApp weekly updates</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-xl p-10 rounded-3xl border border-emerald-400/20 hover:shadow-2xl transition-all duration-300">
              <h4 className="text-2xl font-black text-emerald-400 mb-6 flex items-center gap-3">
                <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></span>
                100% Client Satisfaction
              </h4>
              <ul className="space-y-3 text-lg text-gray-200">
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-yellow-400 rounded-full"></span>Transparent pricing</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-yellow-400 rounded-full"></span>Client-First Approach</li>
                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-yellow-400 rounded-full"></span>Zero Hidden Charges</li>
              </ul>
            </div>
          </div>

          {/* Mega CTA */}
          {/* Mobile-First Mega CTA */}
          <div className="text-center">
            <div className="max-w-md mx-auto mb-8">
              {/* Primary WhatsApp - Always prominent */}
              <a href="https://wa.me/919697985597?text=Hi%20Hydra%2C%20ready%20to%20start%20my%20project"
                className="w-full block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-6 rounded-2xl font-black text-xl shadow-2xl hover:shadow-3xl hover:-translate-y-2 transform transition-all duration-300 mb-4 flex items-center justify-center gap-3">
                <span className="text-2xl">📱</span>
                Start Project Today
              </a>

              {/* Secondary - Smaller on mobile */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/contact"
                  className="flex-1 bg-white/20 backdrop-blur-xl border-2 border-white/50 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 text-center">
                  Free Quote →
                </a>
                <a href="tel:+919697985597"
                  className="flex-1 bg-emerald-500/90 text-white px-6 py-4 rounded-xl font-bold text-lg hover:bg-emerald-600 transition-all duration-300 text-center flex items-center justify-center gap-2">
                  <span>📞</span> Call Now
                </a>
              </div>
            </div>
            <p className="text-gray-400 text-lg">Trusted by Pune homeowners since 2010</p>
          </div>

        </div>
      </section>


      {/* 4. CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-blue-900 to-gray-900 text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Ready For Your Dream Home?</h2>
          <p className="text-xl mb-8 opacity-90">Free site visit + detailed quote in 24 hours</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/919697985597" className="bg-yellow-400 text-gray-900 px-12 py-6 rounded-full font-bold text-xl hover:bg-yellow-500">
              WhatsApp Quote
            </a>
            <a href="/portfolio" className="border-2 border-white text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white hover:text-gray-900">
              See Portfolio
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
