'use client';

import { useState } from 'react';
import Header from "@/components/layout/Header";
import Aside from '@/components/layout/Aside';
import Footer from '@/components/layout/Footer';


import {
    Paintbrush,
    Database,
    Layers,
    Network,
    Wrench,
    Code2,
    Share2,
    MessageSquare,
    Mail,
    ChevronDown,
    Phone,
    Star,
    Loader2
} from 'lucide-react';

export default function Page() {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: 'Full-Stack Web App',
        message: ''
    });

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        try {
            setLoading(true);

            const response = await fetch("/api/contact", {
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
        <div className="min-h-screen bg-[#050a12] text-slate-300 font-sans selection:bg-blue-500 selection:text-white relative overflow-x-hidden">

            <Aside />

            <Header />

            <main className="max-w-6xl mx-auto px-6 md:px-12 pl-16 md:pl-24 space-y-32 py-16">

                {/* Section 1: Expertise - Crafting Digital Solutions */}
                <section className="space-y-12 text-center">
                    <div className="space-y-3">
                        <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-semibold">
                            EXPERTISE
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                            Crafting Digital Solutions
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

                        {/* Card 1: Frontend */}
                        <div className="bg-[#0a1220]/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col items-center text-center space-y-4 hover:border-slate-700 transition-all">
                            <div className="p-3.5 rounded-full bg-blue-500/10 text-blue-400">
                                <Paintbrush size={22} />
                            </div>
                            <h3 className="text-white font-bold text-base">Frontend</h3>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                Polished, responsive interfaces built with React and Next.js.
                            </p>
                        </div>

                        {/* Card 2: Backend */}
                        <div className="bg-[#0a1220]/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col items-center text-center space-y-4 hover:border-slate-700 transition-all">
                            <div className="p-3.5 rounded-full bg-cyan-500/10 text-cyan-400">
                                <Database size={22} />
                            </div>
                            <h3 className="text-white font-bold text-base">Backend</h3>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                Scalable server architectures and efficient database modeling.
                            </p>
                        </div>

                        {/* Card 3: Full-Stack (Highlighted Active Border) */}
                        <div className="bg-[#0a1220]/90 border-2 border-indigo-500/80 rounded-2xl p-6 flex flex-col items-center text-center space-y-4 shadow-xl shadow-indigo-500/10 relative">
                            <div className="p-3.5 rounded-full bg-indigo-500/20 text-indigo-300">
                                <Layers size={22} />
                            </div>
                            <h3 className="text-white font-bold text-base">Full-Stack</h3>
                            <p className="text-slate-300 text-xs leading-relaxed">
                                End-to-end development of complex web applications.
                            </p>
                        </div>

                        {/* Card 4: APIs */}
                        <div className="bg-[#0a1220]/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col items-center text-center space-y-4 hover:border-slate-700 transition-all">
                            <div className="p-3.5 rounded-full bg-blue-500/10 text-blue-400">
                                <Network size={22} />
                            </div>
                            <h3 className="text-white font-bold text-base">APIs</h3>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                Robust RESTful and GraphQL API design and integration.
                            </p>
                        </div>

                        {/* Card 5: Maintenance */}
                        <div className="bg-[#0a1220]/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col items-center text-center space-y-4 hover:border-slate-700 transition-all">
                            <div className="p-3.5 rounded-full bg-cyan-500/10 text-cyan-400">
                                <Wrench size={22} />
                            </div>
                            <h3 className="text-white font-bold text-base">Maintenance</h3>
                            <p className="text-slate-400 text-xs leading-relaxed">
                                Long-term support, performance audits, and refactoring.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Section 2: Career Path - Professional Journey Timeline */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5 space-y-4">
                        <span className="text-xs font-mono tracking-widest text-blue-400 uppercase font-semibold">
                            CAREER PATH
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Professional Journey
                        </h2>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            A timeline of constant growth, technical challenges, and creative problem-solving.
                        </p>
                    </div>

                    <div className="lg:col-span-7 border-l border-slate-800 pl-8 space-y-10 relative">
                        <div className="relative">
                            {/* Timeline Bullet Node */}
                            <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-slate-600 border-4 border-[#050a12]"></div>

                            <div className="space-y-1">
                                <span className="text-xs font-mono text-slate-400 tracking-wider">2016 — 2020</span>
                                <h3 className="text-xl font-bold text-white">B.S. in Computer Science</h3>
                                <p className="text-xs font-mono text-slate-300">Global Tech Institute</p>
                                <p className="text-slate-400 text-sm leading-relaxed pt-2">
                                    Specialized in Software Engineering. Recipient of the Academic Excellence Award in Algorithms and Data Structures.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Real-Time Activity / GitHub Insights Card */}
                <section className="bg-[#0a1220]/70 border border-slate-800/80 rounded-2xl p-6 sm:p-10 backdrop-blur-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                        {/* Left Info Stats */}
                        <div className="lg:col-span-6 space-y-6">
                            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-400 uppercase">
                                <Code2 size={16} className="text-blue-400" />
                                <span>REAL-TIME ACTIVITY</span>
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-2xl font-bold text-white">GitHub Insights</h3>
                                <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                                    A deep dive into my coding habits and open-source contributions. Driven by logic, perfected by repetition.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <div className="bg-[#101a2e]/60 border border-slate-800 rounded-xl p-4 space-y-1">
                                    <div className="text-xl font-bold text-white font-mono">1,200+</div>
                                    <div className="text-xs font-mono text-slate-400">Commits this year</div>
                                </div>

                                <div className="bg-[#101a2e]/60 border border-slate-800 rounded-xl p-4 space-y-1">
                                    <div className="text-xl font-bold text-sky-300 font-mono">48</div>
                                    <div className="text-xs font-mono text-slate-400">Public Repos</div>
                                </div>
                            </div>
                        </div>

                        {/* Right SVG Contribution Card Visual */}
                        <div className="lg:col-span-6">
                            <div className="bg-[#101a2e]/90 border border-slate-800/90 rounded-xl p-6 space-y-6 shadow-2xl">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <span className="text-xs font-mono text-slate-400">contribution-graph.svg</span>
                                </div>

                                {/* Simulated Grid Grid Graph */}
                                <div className="grid grid-cols-12 gap-1.5 py-2">
                                    {Array.from({ length: 72 }).map((_, i) => {
                                        const opacityClass = [
                                            'bg-slate-800/40',
                                            'bg-blue-900/40',
                                            'bg-blue-700/60',
                                            'bg-blue-500/80',
                                            'bg-blue-400'
                                        ][i % 5];
                                        return (
                                            <div
                                                key={i}
                                                className={`h-4 w-full rounded-sm ${opacityClass}`}
                                            ></div>
                                        );
                                    })}
                                </div>

                                {/* Language Breakdown Pills */}
                                <div className="flex flex-wrap items-center justify-between text-xs font-mono text-slate-300 pt-2 border-t border-slate-800/80">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                                        <span>TypeScript</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-sky-400"></span>
                                        <span>Go</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
                                        <span>Rust</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Section 4: What Clients Say (Testimonial Cards with 5-Star Ratings) */}
                <section className="space-y-10">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-white tracking-tight">
                            What Clients Say
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Testimonial 1 */}
                        <div className="bg-[#0a1220]/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                            <div className="space-y-4">
                                <div className="flex text-sky-400 gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-slate-300 text-sm italic leading-relaxed">
                                    "The attention to detail in the architecture was beyond our expectations. A true craftsman of the web."
                                </p>
                            </div>
                            <div className="flex items-center gap-3 pt-2">
                                <img
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
                                    alt="Sarah Jenkins"
                                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                                />
                                <div>
                                    <h4 className="text-white font-bold text-sm">Sarah Jenkins</h4>
                                    <p className="text-slate-400 text-xs font-mono">CTO, Pulse Media</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-[#0a1220]/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                            <div className="space-y-4">
                                <div className="flex text-sky-400 gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-slate-300 text-sm italic leading-relaxed">
                                    "DevCraft delivered our MVP ahead of schedule and with zero major bugs. Highly recommended for complex projects."
                                </p>
                            </div>
                            <div className="flex items-center gap-3 pt-2">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
                                    alt="Mark Thomson"
                                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                                />
                                <div>
                                    <h4 className="text-white font-bold text-sm">Mark Thomson</h4>
                                    <p className="text-slate-400 text-xs font-mono">Founder, Stealth-X</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="bg-[#0a1220]/60 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between space-y-6">
                            <div className="space-y-4">
                                <div className="flex text-sky-400 gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" />
                                    ))}
                                </div>
                                <p className="text-slate-300 text-sm italic leading-relaxed">
                                    "Scalability was our biggest fear, but the backend architecture built here handles 100k users without breaking a sweat."
                                </p>
                            </div>
                            <div className="flex items-center gap-3 pt-2">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
                                    alt="Elena Rodriguez"
                                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                                />
                                <div>
                                    <h4 className="text-white font-bold text-sm">Elena Rodriguez</h4>
                                    <p className="text-slate-400 text-xs font-mono">Head of Engineering, Velo</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Section 5: Get In Touch / Let's Build Something Great */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8">

                    {/* Left Callout & Contact Handles */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <span className="text-xs font-mono tracking-widest text-slate-400 uppercase font-semibold">
                                GET IN TOUCH
                            </span>
                            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                                Let's build something great.
                            </h2>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                I'm currently available for freelance work and full-time opportunities. Drop a message and let's discuss your next breakthrough.
                            </p>
                        </div>

                        <div className="space-y-4 pt-2">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-[#101a2e] border border-slate-800 rounded-xl text-blue-400">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <div className="text-xs font-mono text-slate-400">Email</div>
                                    <a href="mailto:hello@devcraft.io" className="text-sm font-mono text-white hover:text-blue-400 transition-colors">
                                        hello@devcraft.io
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-[#101a2e] border border-slate-800 rounded-xl text-emerald-400">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <div className="text-xs font-mono text-slate-400">WhatsApp</div>
                                    <a href="https://wa.me/2349163735928" className="text-sm font-mono text-white hover:text-emerald-400 transition-colors">
                                        +234 916 373 5928
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Card */}
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

                </section>

            </main>

            {/* Footer Navigation */}
            <Footer />

        </div>
    );
}