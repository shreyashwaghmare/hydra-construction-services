'use client'
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        emailjs.sendForm('service_b2cdpwx', 'template_1swruy8', form.current, 'mDMYzla2QLO-Whp4M')
            .then((result) => {
                setMessage('✅ Quote sent to hydracorporation.in@gmail.com! We\'ll call within 24hrs.');
                form.current.reset();
            }, (error) => {
                setMessage('❌ Error sending. Please WhatsApp +91 969798 5597');
            })
            .finally(() => setLoading(false));
    };
    return (
        <div className="min-h-screen bg-gray-50 py-20">
            <div className="max-w-4xl mx-auto px-6">
                {/* Hero Header */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-6">
                        Contact Us
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Get your free site visit in Pune & Ahilyanagar.<br/>
                        Licensed builders ready to help.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info Cards */}
                    <div className="space-y-8">
                        {/* Phone */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto">📞</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Call Anytime</h3>
                            <p className="text-3xl font-black text-blue-600 text-center mb-2">+91 969798 5597</p>
                            <p className="text-gray-500 text-center">24/7 Emergency Support</p>
                            <a href="tel:+919697985597" className="block w-full bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-xl font-bold text-center mt-6 transition-all duration-300">
                                Call Now →
                            </a>
                        </div>

                        {/* WhatsApp */}
                        <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto text-white">💬</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">WhatsApp Quote</h3>
                            <p className="text-xl font-bold text-center mb-6">Instant Response</p>
                            <a href="https://wa.me/919697985597?text=Hi%2C%20need%20construction%20quote"
                                className="block w-full bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-xl font-bold text-center shadow-xl hover:shadow-2xl transition-all duration-300">
                                Send Message →
                            </a>
                        </div>

                        {/* Address */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-xl border border-blue-100">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto">📍</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Pune Office</h3>
                            <div className="space-y-2 text-gray-600 text-sm">
                                <p>MH/2026/001 Licensed</p>
                                <p>Shop No. 12, Godrej River Crest</p>
                                <p>Kalyani Nagar, Pune 411045</p>
                                <p>Maharashtra, India</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-2xl border border-gray-100">
                        <h2 className="text-3xl font-black text-gray-900 mb-2">Get Free Quote</h2>
                        <p className="text-xl text-gray-600 mb-8">Fill details below. We'll visit your site within 24hrs.</p>

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Shreyash Waghmare"
                                    required
                                    className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-blue-200 focus:border-blue-500 transition-all duration-300 text-lg text-gray-900 placeholder-gray-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Phone *</label>
                                <input
                                    type="tel"
                                    name="user_phone"
                                    placeholder="969798 5597"
                                    required
                                    className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all duration-300 text-lg text-gray-900 placeholder-gray-400"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="hydracorporation.in@gmail.com"
                                    className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-500 transition-all duration-300 text-lg text-gray-900 placeholder-gray-400"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">Service Needed *</label>
                                
                                <select
                                    name="service"
                                    required
                                    className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all duration-300 text-lg text-gray-900"
                                >
                                    <option value="">Select a service</option>
                                    <option>Bungalow Construction</option>
                                    <option>Kitchen Remodeling</option>
                                    <option>Bathroom Design</option>
                                    <option>Full Interior</option>
                                    <option>Building AMC</option>
                                    <option>Waterproofing</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder="Project details, location, budget..."
                                    className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-4 focus:ring-teal-200 focus:border-teal-500 transition-all duration-300 text-lg resize-vertical text-gray-900 placeholder-gray-400"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed text-white py-6 px-8 rounded-2xl font-black text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 disabled:transform-none"
                            >
                                {loading ? 'Sending...' : 'Send Quote Request →'}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="mt-24 grid md:grid-cols-3 gap-8 text-center">
                    <a href="https://wa.me/919697985597" className="group">
                        <div className="w-20 h-20 bg-green-500 rounded-3xl mx-auto flex items-center justify-center text-3xl text-white shadow-2xl group-hover:scale-110 transition-all duration-300 mb-4">
                            💬
                        </div>
                        <p className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">WhatsApp</p>
                    </a>
                    <a href="tel:+919697985597" className="group">
                        <div className="w-20 h-20 bg-blue-500 rounded-3xl mx-auto flex items-center justify-center text-3xl text-white shadow-2xl group-hover:scale-110 transition-all duration-300 mb-4">
                            📞
                        </div>
                        <p className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">Call</p>
                    </a>
                    <a href="mailto:hydracorporation.in@gmail.com" className="group">
                        <div className="w-20 h-20 bg-purple-500 rounded-3xl mx-auto flex items-center justify-center text-3xl text-white shadow-2xl group-hover:scale-110 transition-all duration-300 mb-4">
                            ✉️
                        </div>
                        <p className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                            hydracorporation.in@gmail.com
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}
