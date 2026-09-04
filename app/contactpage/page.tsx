'use client';

import { useEffect, useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
    Mail,
    Loader2,
    MessageSquare,
    Code2,
    ArrowRight,
    ExternalLink,
    ChevronDown
} from 'lucide-react';



export default function Page() {

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: 'Full-Stack Web App',
        message: ''
    });

    useEffect(() => {

        const pingServer = async () => {
            try {
                const response = await fetch("https://api.devadelani.com.ng/ping", {
                    method: "GET"
                });
            } catch (error) {
                console.error("Error pinging server:", error);
            }
        };

        pingServer();
    }, []);

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await fetch("https://api.devadelani.com.ng/contactinfo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                alert("Message sent successfully!");

                setFormData({
                    name: "",
                    email: "",
                    projectType: "Full-Stack Web App",
                    message: "",
                });
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.log(error);
            alert("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#060b13] text-slate-300 font-sans selection:bg-blue-500 selection:text-white flex flex-col justify-between">

            {/* Header Navigation */}
            <Header />

            {/* Main Container */}
            <main className="max-w-6xl mx-auto px-6 md:px-12 py-12 space-y-12 w-full">

                {/* Contact Hero Title Header */}
                <section className="space-y-4 max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                        Have an Idea? <br />
                        <span className="bg-gradient-to-r from-blue-300 to-indigo-400 bg-clip-text text-transparent">
                            Let’s Build It Together. 
                        </span>
                    </h1>
                    <p className="text-slate-400 text-base leading-relaxed">
                       Every great product starts with an idea. Whether you have a project ready to build or simply an idea you’d like to explore, let’s turn it into something real. I’m always interested in solving new problems, learning through challenging projects, and creating digital experiences that people can actually use.
                    </p>
                </section>

                {/* Content Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left Side: Contact Form Container */}
                    <div className="lg:col-span-7 bg-[#0a1220]/70 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-2xl">
                        <form className="space-y-6" onSubmit={handleSubmit}>

                            {/* Name & Email Group */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        placeholder=" "
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="peer w-full bg-[#101a2e]/60 border border-slate-700/60 rounded-xl px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:border-blue-500 transition-colors text-sm"
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute left-4 top-2 text-[11px] font-mono text-slate-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-blue-400"
                                    >
                                        Name
                                    </label>
                                </div>

                                <div className="relative">
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        placeholder=" "
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="peer w-full bg-[#101a2e]/60 border border-slate-700/60 rounded-xl px-4 pt-5 pb-2 text-white placeholder-transparent focus:outline-none focus:border-blue-500 transition-colors text-sm"
                                    />
                                    <label
                                        htmlFor="email"
                                        className="absolute left-4 top-2 text-[11px] font-mono text-slate-400 transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 peer-focus:top-2 peer-focus:text-[11px] peer-focus:text-blue-400"
                                    >
                                        Email Address
                                    </label>
                                </div>
                            </div>

                            {/* Project Type Select Box */}
                            <div className="relative">
                                <span className="absolute left-3 -top-2.5 bg-[#0e172a] px-2 text-[10px] font-mono uppercase text-slate-400 rounded z-10 border border-slate-800">
                                    Project Type
                                </span>
                                <select
                                    value={formData.projectType}
                                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                                    className="w-full bg-[#101a2e]/60 border border-slate-700/60 rounded-xl px-4 py-4 text-slate-200 focus:outline-none focus:border-blue-500 transition-colors text-sm appearance-none cursor-pointer"
                                >
                                    <option value="Full-Stack Web App">Full-Stack Web App</option>
                                    <option value="Frontend Engineering">Frontend Engineering</option>
                                    <option value="API & System Architecture">API & System Architecture (Backend Engineer)</option>
                                    <option value="UI/UX Design & Development">UI/UX Design & Development</option>
                                    <option value="Other">Other</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={18} />
                            </div>

                            {/* Message Input Area */}
                            <div className="relative">
                                <textarea
                                    id="message"
                                    rows={5}
                                    required
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-[#101a2e]/60 border border-slate-700/60 rounded-xl p-4 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full sm:w-auto bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </div>

                        </form>
                    </div>

                    {/* Right Side Info Section */}
                    <div className="lg:col-span-5 space-y-6">

                        {/* Availability Card */}
                        <div className="bg-[#0a1220]/70 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm space-y-2">
                            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                                CURRENT AVAILABILITY
                            </span>
                            <div className="flex items-center gap-3 pt-1">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                                <h3 className="text-xl font-bold text-white">Open to New Opportunities</h3>
                            </div>
                        </div>

                        {/* Direct Channels Box */}
                        <div className="bg-[#0a1220]/70 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm space-y-4">
                            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase block mb-2">
                                DIRECT CHANNELS
                            </span>

                            <div className="space-y-3">
                                {/* Email */}
                                <a
                                    href="mailto:abdulsemiusodeeq14@gmail.com"
                                    className="flex items-center justify-between p-3.5 bg-[#101a2e]/60 hover:bg-[#14223d] border border-slate-800 rounded-xl group transition-all text-sm"
                                >
                                    <div className="flex items-center gap-3 text-slate-200">
                                        <Mail size={18} className="text-blue-400" />
                                        <span>abdulsemiusodeeq14@gmail.com</span>
                                    </div>
                                    <ArrowRight size={16} className="text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                                </a>

                                {/* WhatsApp Support */}
                                <a
                                    href="https://wa.me/2349163735928"
                                    className="flex items-center justify-between p-3.5 bg-[#101a2e]/60 hover:bg-[#14223d] border border-slate-800 rounded-xl group transition-all text-sm"
                                >
                                    <div className="flex items-center gap-3 text-slate-200">
                                        <MessageSquare size={18} className="text-emerald-400" />
                                        <span>WhatsApp Support</span>
                                    </div>
                                    <ExternalLink size={16} className="text-slate-500 group-hover:text-emerald-400 transition-all" />
                                </a>

                                {/* LinkedIn Profile */}
                                <a
                                    href="https://www.linkedin.com/in/abdulsemiu-sodeeq-adelani-209330345"
                                    className="flex items-center justify-between p-3.5 bg-[#101a2e]/60 hover:bg-[#14223d] border border-slate-800 rounded-xl group transition-all text-sm"
                                >
                                    <div className="flex items-center gap-3 text-slate-200">
                                        <ExternalLink size={18} className="text-blue-400" />
                                        <span>LinkedIn Profile</span>
                                    </div>
                                    <ExternalLink size={16} className="text-slate-500 group-hover:text-blue-400 transition-all" />
                                </a>

                                {/* GitHub Repositories */}
                                <a
                                    href="https://github.com/DevAdelani"
                                    className="flex items-center justify-between p-3.5 bg-[#101a2e]/60 hover:bg-[#14223d] border border-slate-800 rounded-xl group transition-all text-sm"
                                >
                                    <div className="flex items-center gap-3 text-slate-200">
                                        <Code2 size={18} className="text-slate-400" />
                                        <span>GitHub Repositories</span>
                                    </div>
                                    <ExternalLink size={16} className="text-slate-500 group-hover:text-slate-200 transition-all" />
                                </a>
                            </div>
                        </div>

                        {/* Core Hours Box */}
                        <div className="bg-[#0a1220]/70 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm space-y-4">
                            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase block">
                                CORE HOURS
                            </span>
                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between items-center text-slate-300">
                                    <span>Mon - Fri</span>
                                    <span className="font-mono text-slate-200 font-semibold">09:00 - 18:00 EST</span>
                                </div>
                                <div className="flex justify-between items-center text-slate-300">
                                    <span>Sat - Sun</span>
                                    <span className="font-mono text-blue-400 font-medium">Urgent Only</span>
                                </div>
                            </div>
                        </div>

                        {/* Setup Desk Workspace Image Preview */}
                        <div className="rounded-2xl overflow-hidden border border-slate-800/80 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
                                alt="Triple Monitor Setup"
                                className="w-full h-44 object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                            />
                        </div>

                    </div>

                </div>

            </main>

            <Footer />

        </div>
    );
}