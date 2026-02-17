'use client';
import Image from "next/image"
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

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
      price: "₹2,600 – ₹5,500+ per sq. ft.",
      link: "/services/bungalow-construction"
    },
    {
      icon: "🍳",
      title: "Kitchen Remodeling",
      description: "L-shape, Island & Modular kitchens built for durability.",
      price: "₹3 – ₹12 Lac",
      link: "/services/kitchen-remodeling"
    },
    {
      icon: "🛁",
      title: "Bathroom Design",
      description: "Modern wet rooms & luxury modular solutions.",
      price: "₹1.8 – ₹7.5 Lac",
      link: "/services/bathroom-design"
    },
    {
      icon: "🛋️",
      title: "Full Interior",
      description: "Furniture, false ceiling, painting & lighting.",
      price: "₹800 - ₹3,600 per sq.ft.",
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
      price: "₹45 per sq.ft.",
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
  const testimonials = [
    {
      id: 1,
      text: "Kitchen transformation exceeded all expectations. On time, on budget!",
      name: "Rajesh Sharma",
      location: "Koregaon Park",
      initials: "RS",
      bgGradient: "from-purple-400 to-pink-400"
    },
    {
      id: 2,
      text: "Waterproofing saved our bungalow. 10-year warranty gives total peace of mind.",
      name: "Anita Patil",
      location: "Viman Nagar",
      initials: "AP",
      bgGradient: "from-green-400 to-blue-400"
    },
    {
      id: 3,
      text: "Complete 4BHK build was flawless. Highly recommend for Pune!",
      name: "Vikram K.",
      location: "Baner",
      initials: "VK",
      bgGradient: "from-orange-400 to-red-400"
    },
    {
      id: 4,
      text: "Professional and timely work. Our home is now exactly how we imagined!",
      name: "Sneha Deshmukh",
      location: "Kothrud",
      initials: "SD",
      bgGradient: "from-indigo-400 to-purple-500"
    },

    // 🔥 Added More Below

    {
      id: 5,
      text: "Hydra handled our society’s Building AMC professionally. Preventive maintenance really reduced unexpected expenses.",
      name: "Prashant Kulkarni",
      location: "Wakad",
      initials: "PK",
      bgGradient: "from-blue-400 to-cyan-400"
    },
    {
      id: 6,
      text: "Bathroom waterproofing was done neatly without unnecessary demolition. No more seepage issues!",
      name: "Megha Joshi",
      location: "Aundh",
      initials: "MJ",
      bgGradient: "from-teal-400 to-green-500"
    },
    {
      id: 7,
      text: "Our full interior project was delivered exactly as promised. Transparent costing and clear timelines.",
      name: "Saurabh Mehta",
      location: "Kalyani Nagar",
      initials: "SM",
      bgGradient: "from-pink-400 to-rose-500"
    },
    {
      id: 8,
      text: "Terrace waterproofing stopped recurring leaks completely. Highly structured execution.",
      name: "Neha Raut",
      location: "Hinjewadi",
      initials: "NR",
      bgGradient: "from-yellow-400 to-orange-500"
    },
    {
      id: 9,
      text: "From planning to execution, bungalow construction was smooth and stress-free.",
      name: "Rohit Patwardhan",
      location: "Pashan",
      initials: "RP",
      bgGradient: "from-violet-400 to-indigo-500"
    },
    {
      id: 10,
      text: "Electrical and plumbing maintenance under AMC has been consistent and reliable.",
      name: "Manoj T.",
      location: "Magarpatta",
      initials: "MT",
      bgGradient: "from-sky-400 to-blue-600"
    },
    {
      id: 11,
      text: "Their team identified hidden wall dampness that others missed. Proper diagnosis and permanent fix.",
      name: "Priya Gokhale",
      location: "Karve Nagar",
      initials: "PG",
      bgGradient: "from-emerald-400 to-teal-500"
    },
    {
      id: 12,
      text: "Clear BOQ, proper documentation, and quality checks at every stage. Very professional approach.",
      name: "Amit Bansal",
      location: "Balewadi",
      initials: "AB",
      bgGradient: "from-rose-400 to-pink-500"
    }
  ];
  //testimonials slides
  const [current, setCurrent] = useState(0)
  const total = testimonials.length

  const next = () => setCurrent((current + 1) % total)
  const prev = () => setCurrent((current - 1 + total) % total)
  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 3000) // 5000ms = 5 seconds

    // Cleanup interval on unmount
    return () => clearInterval(interval)
  }, [current])
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

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeUpp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

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
            {/* Background Image */}
            <Image
              src={slides[index].image}
              alt="Hydra Corporation Construction and Interior Projects"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />

            {/* Strong Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
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
            className="text-3xl md:text-5xl lg:text-7xl font-black text-white leading-tight max-w-4xl mb-4"
          >
            {slides[index].title}
          </motion.h1>

          {/* Subtitle - Increased contrast with amber/yellow */}
          <motion.h2
            key={"sub" + index}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl md:text-2xl text-yellow-500 max-w-3xl mx-auto mb-6 font-bold tracking-wide uppercase"
          >
            {slides[index].subtitle}
          </motion.h2>

          {/* Description - Fixed class and color for readability */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Transparent BOQs. Fixed timelines. On-site supervision. <br className="hidden md:block" />
            From <span className="text-white font-medium">modular interiors</span> to <span className="text-white font-medium">full bungalow construction</span>.
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/portfolio"
              className="bg-yellow-500 text-black px-10 py-4 rounded-xl font-bold hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all"
            >
              View Our Projects
            </a>
            <a
              href="/contact"
              className="backdrop-blur-sm border-2 border-white/30 text-white px-10 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition-all"
            >
              Get Free Estimate
            </a>
          </div>

          {/* Trust Strip - Added background for section separation */}
          <div className="flex flex-wrap justify-center gap-6 p-6 bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 text-white/90 text-sm md:text-base mb-12">
            <span className="flex items-center gap-2 font-medium"><span className="text-yellow-500">✔</span> Transparent Pricing</span>
            <span className="flex items-center gap-2 font-medium"><span className="text-yellow-500">✔</span> Quality Materials</span>
            <span className="flex items-center gap-2 font-medium"><span className="text-yellow-500">✔</span> Dedicated Site Engineer</span>
            <span className="flex items-center gap-2 font-medium"><span className="text-yellow-500">✔</span> Timeline Commitment</span>
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
                className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-yellow-400" : "w-3 bg-white/40"
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


        </div>
      </section>
      {/*Process of supervision*/}
      <section className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <span className="inline-block mb-4 px-4 py-2 text-sm font-semibold tracking-wide 
        text-amber-600 bg-amber-100 rounded-full">
              PROJECT CONTROL & TRANSPARENCY
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F2A44] leading-tight">
              Dedicated Site Supervision & Professional Reporting
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Every project is managed with structured supervision, transparent communication,
              and disciplined execution.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

            {/* Left Features */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {[
                "Assigned Site Engineer",
                "WhatsApp Weekly Reports",
                "Photo Progress Updates",
                "Material Tracking System",
                "Stage-Wise Payment Structure"
              ].map((title, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="flex items-start gap-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0F2A44] text-white 
              flex items-center justify-center font-bold text-lg shrink-0">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0F2A44]">
                      {title}
                    </h3>
                    <p className="mt-2 text-slate-600 leading-relaxed">
                      Structured supervision and milestone-based reporting
                      ensure clarity and accountability.
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Card */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-3xl p-10 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-[#0F2A44] mb-6">
                Why This Matters
              </h3>

              <p className="text-slate-600 leading-relaxed mb-6">
                Professional reporting reduces delays, eliminates confusion,
                and ensures your home is built exactly as planned.
              </p>

              <ul className="space-y-3 text-slate-700">
                <li>✔ Transparent execution</li>
                <li>✔ Controlled budget flow</li>
                <li>✔ Clear documentation</li>
                <li>✔ On-time progress tracking</li>
              </ul>
            </motion.div>

          </div>

        </div>
      </section>
      <section className="py-14 bg-slate-50 ">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2A44]">
              We Work With Trusted Industry Brands
            </h2>
            <p className="mt-4 text-slate-600 text-lg">
              Quality construction begins with quality materials.
            </p>
          </motion.div>

          {/* Brand Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center text-center">

            {[
              { src: "/images/AsianPaints.svg", animation: fadeLeft },
              { src: "/images/kajaria.jpeg", animation: fadeLeft },
              { src: "/images/jaquar.svg", animation: fadeUpp },
              { src: "/images/astral-pipes.webp", animation: fadeUpp },
              { src: "/images/centuryply.png", animation: fadeRight },
              { src: "/images/Tata.png", animation: fadeRight }
            ].map((brand, index) => (
              <motion.div
                key={index}
                variants={brand.animation}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="py-6 px-4 border border-slate-200 rounded-2xl 
          hover:shadow-lg hover:border-amber-400 transition-all duration-300"
              >
                <div className="flex items-center justify-center h-16">
                  <Image
                    src={brand.src}
                    alt="Brand Logo"
                    width={150}
                    height={60}
                    className="object-contain max-h-14 w-auto transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>
      {/* RESIDENTIAL CONSTRUCTION PACKAGES */}
      <section className="py-28 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F2A44]">
              Residential Construction Packages
            </h2>
            <p className="mt-6 text-lg text-slate-600">
              Transparent pricing with clearly defined specifications.
              Choose a package that aligns with your vision and budget.
            </p>
          </div>

          {/* Table */}
          <div className="w-full overflow-x-auto">

            <table className="min-w-[800px] w-full border border-slate-200 rounded-2xl overflow-hidden text-left">

              <thead className="bg-slate-100">
                <tr>
                  <th className="p-4 md:p-6 text-[#0F2A44] font-semibold text-lg">
                    Specifications
                  </th>
                  <th className="p-4 md:p-6 text-center text-[#0F2A44] font-semibold text-lg">
                    Standard
                    <div className="text-base font-normal text-gray-600 mt-1">
                      Starting ₹1600 / sq ft
                    </div>
                  </th>
                  <th className="p-4 md:p-6 text-center text-[#0F2A44] font-semibold text-lg">
                    Premium
                    <div className="text-base font-normal text-gray-600 mt-1">
                      Starting ₹1900 / sq ft
                    </div>
                  </th>
                  <th className="p-4 md:p-6 text-center text-[#0F2A44] font-semibold text-lg">
                    Luxury
                    <div className="text-base font-normal text-gray-600 mt-1">
                      Custom Pricing
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200 text-gray-700">

                <tr>
                  <td className="p-4 md:p-6 font-medium">Structure</td>
                  <td className="p-4 md:p-6 text-center">RCC Frame Structure</td>
                  <td className="p-4 md:p-6 text-center">Enhanced RCC + Premium Finish</td>
                  <td className="p-4 md:p-6 text-center">Architectural Custom Design</td>
                </tr>

                <tr>
                  <td className="p-4 md:p-6 font-medium">Flooring</td>
                  <td className="p-4 md:p-6 text-center">Standard Vitrified Tiles</td>
                  <td className="p-4 md:p-6 text-center">Large Format / Premium Tiles</td>
                  <td className="p-4 md:p-6 text-center">Imported / Natural Stone</td>
                </tr>

                <tr>
                  <td className="p-4 md:p-6 font-medium">Bathroom Fittings</td>
                  <td className="p-4 md:p-6 text-center">Jaquar / Equivalent</td>
                  <td className="p-4 md:p-6 text-center">Premium Jaquar Series</td>
                  <td className="p-4 md:p-6 text-center">Designer / Luxury Range</td>
                </tr>

                <tr>
                  <td className="p-4 md:p-6 font-medium">Electrical</td>
                  <td className="p-4 md:p-6 text-center">Standard Modular Switches</td>
                  <td className="p-4 md:p-6 text-center">Premium Modular Range</td>
                  <td className="p-4 md:p-6 text-center">Smart Home Integration</td>
                </tr>

                <tr>
                  <td className="p-4 md:p-6 font-medium">Project Supervision</td>
                  <td className="p-4 md:p-6 text-center">Site Supervisor</td>
                  <td className="p-4 md:p-6 text-center">Dedicated Site Engineer</td>
                  <td className="p-4 md:p-6 text-center">Engineer + Architect Oversight</td>
                </tr>

                <tr>
                  <td className="p-4 md:p-6 font-medium">Customization</td>
                  <td className="p-4 md:p-6 text-center">Limited</td>
                  <td className="p-4 md:p-6 text-center">Moderate</td>
                  <td className="p-4 md:p-6 text-center">Fully Custom</td>
                </tr>

              </tbody>
            </table>
          </div>

          {/* Bottom Note */}
          <div className="mt-10 text-center text-sm text-slate-500">
            Final pricing depends on plot size, soil condition, elevation design,
            and material selection.
          </div>

        </div>
      </section>

      {/* Testimonials*/}
      <div className=" bg-blue-50 px-4 pt-20 rounded-3xl relative">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-2 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
          Pune Homeowners Love Us
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Don't just take our word for it
        </p>
        <div className="max-w-3xl mx-auto relative px-4">
  <AnimatePresence initial={false} mode="wait">
    <motion.div
      key={testimonials[current].id}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4 }}
      className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-xl text-center
      bg-gradient-to-br from-[#0F2A44] to-gray-900 text-white"
    >
      <div className="text-3xl sm:text-4xl mb-3 opacity-30">“</div>

      <p className="text-base sm:text-lg mb-5 leading-relaxed font-medium">
        "{testimonials[current].text}"
      </p>

      <div className="flex items-center justify-center mt-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center text-white font-bold text-lg sm:text-xl mr-3">
          {testimonials[current].initials}
        </div>
        <div className="text-left">
          <p className="font-bold text-lg sm:text-xl">
            {testimonials[current].name}
          </p>
          <p className="text-sm text-white/70">
            {testimonials[current].location}
          </p>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>

  {/* Desktop Arrows */}
  <button
    onClick={prev}
    className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 rounded-full shadow p-2 hover:bg-white transition"
  >
    <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
  </button>

  <button
    onClick={next}
    className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 rounded-full shadow p-2 hover:bg-white transition"
  >
    <ChevronRightIcon className="w-5 h-5 text-gray-700" />
  </button>

  {/* Mobile Arrows (Below Card) */}
  <div className="flex justify-center gap-6 mt-6 sm:hidden">
    <button
      onClick={prev}
      className="bg-white/90 rounded-full shadow p-2"
    >
      <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
    </button>

    <button
      onClick={next}
      className="bg-white/90 rounded-full shadow p-2"
    >
      <ChevronRightIcon className="w-5 h-5 text-gray-700" />
    </button>
  </div>
</div>
        {/* AREAS TAGS */}
        <div className="mt-20 text-center">
          <p className="text-sm md:text-base text-gray-800">
            ✔ Engineer-Led Execution &nbsp;•&nbsp;
            ✔ Transparent Pricing &nbsp;•&nbsp;
            ✔ On-Time Delivery Commitment
          </p>
        </div>
        {/* SERVICE AREAS */}
        <section className="mt-20 py-16 bg-blue-50 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6 text-center">

            <h3 className="text-2xl md:text-4xl font-bold text-[#0F2A44]">
              Areas We Serve in Pune
            </h3>

            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Delivering premium construction and interior solutions across Pune’s prime locations.
            </p>

            <div className="mt-10 grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-4">
              {[
                "Baner",
                "Wakad",
                "Hinjewadi",
                "Kothrud",
                "Bavdhan",
                "Viman Nagar",
                "Koregaon Park",
                "PCMC",
                "Kharadi",
                "Ahilyanagar"
              ].map((area) => (
                <span
                  key={area}
                  className="
            px-5 py-3 
            bg-white 
            rounded-xl
            border border-slate-200 
            text-slate-700 
            text-sm font-semibold
            shadow-sm
            text-center
            transition-all duration-200
            hover:bg-[#0F2A44] hover:text-white
            active:scale-95
            active:bg-[#0F2A44] active:text-white
            cursor-pointer
          "
                >
                  {area}
                </span>
              ))}
            </div>

          </div>
        </section>

      </div>

      {/* . RECENT PROJECTS */}
      <section className="pt-24 bg-gradient-to-b from-blue-50 via-blue-50/40 to-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F2A44] text-center mb-4 tracking-tight">
            Recent Interior & Renovation Projects in Pune
          </h2>

          <p className="text-lg md:text-xl text-center text-slate-700 mb-16 max-w-3xl mx-auto leading-relaxed">
            From modular kitchens to complete 4BHK home transformations —
            delivering transparency, precision, and premium finishes in every project.
          </p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-10">
            {recentProjects.map((project, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer group bg-white"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                whileHover={{ y: -10 }}
              >

                {/* Image */}
                <div className="relative h-72 w-full overflow-hidden">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t 
                            from-black/85 via-black/60 to-transparent
                            opacity-100 md:opacity-0 
                            md:group-hover:opacity-100 
                            transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-7">

                  <h3 className="text-white text-2xl font-black mb-1 drop-shadow-lg">
                    {project.title}
                  </h3>

                  <p className="text-gray-200 text-sm mb-2 leading-relaxed">
                    {project.desc}
                  </p>

                  <span className="text-yellow-400 font-semibold text-xs uppercase tracking-wide">
                    {project.date}
                  </span>
                </div>

              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center m-16">
            <a
              href="/portfolio"
              className="inline-block px-10 py-4 bg-[#0F2A44] text-white 
                   rounded-xl font-semibold text-lg
                   shadow-lg hover:bg-[#0c2236] 
                   hover:shadow-xl transition-all duration-300
                   active:scale-95"
            >
              View All Projects →
            </a>
          </div>

        </div>

        {/* Smooth transition into dark CTA */}
        <div className="h-px bg-[#0F2A44]/10" />
      </section>

      {/* 4. CTA SECTION */}
      <section className="relative py-32 bg-[#0F2A44] text-white overflow-hidden">

        {/* Elegant background glow */}
        <div className="absolute inset-0 opacity-10 
    bg-[radial-gradient(circle_at_50%_30%,#f59e0b,transparent_70%)]" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 mb-8 
      px-5 py-2 rounded-full 
      bg-amber-500/10 border border-amber-400/30 
      text-amber-400 text-sm font-semibold tracking-wide">
            ● Free Site Visit & Quote Within 24 Hours
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Ready to Build Your Dream Home?
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Transparent pricing. Dedicated site supervision.
            No hidden costs. Complete peace of mind.
          </p>

          {/* CTA Block */}
          <div className="mt-14 max-w-lg mx-auto space-y-5">

            {/* Primary CTA */}
            <a
              href="https://wa.me/919697985597?text=Hi%20Hydra%2C%20ready%20to%20start%20my%20project"
              className="
          w-full flex items-center justify-center gap-3
          bg-amber-500
          hover:bg-amber-600
          text-black
          px-8 py-5
          rounded-2xl
          font-bold text-xl
          shadow-xl
          transition-all duration-300
          hover:-translate-y-1
          active:scale-95
        "
            >
              📱 Start Your Project on WhatsApp
            </a>

            {/* Secondary Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href="/contact"
                className="
            flex-1 text-center
            bg-white/5
            border border-white/20
            px-6 py-4
            rounded-xl
            font-semibold
            transition-all duration-300
            hover:bg-white hover:text-[#0F2A44]
            active:scale-95
          "
              >
                Get Detailed Quote
              </a>

              <a
                href="tel:+919697985597"
                className="
            flex-1 text-center
            border border-amber-400
            text-amber-400
            px-6 py-4
            rounded-xl
            font-semibold
            transition-all duration-300
            hover:bg-amber-500 hover:text-black
            active:scale-95
          "
              >
                📞 Call Now
              </a>

            </div>
          </div>

          {/* Footer Trust Line */}
          <p className="mt-12 text-white/60 text-sm tracking-wide">
            Trusted by Pune homeowners since 2010 • 100+ Projects Delivered
          </p>

        </div>
      </section>
    </>
  )
}
