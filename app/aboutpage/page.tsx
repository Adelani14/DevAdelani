'use client';

import {
    Code2,
    Share2,
    MessageSquare,
    Gauge,
    Compass,
    Database,
    Cloud,
    Wrench
} from 'lucide-react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Aside from "@/components/layout/Aside";

export default function Page() {
    return (
        <div className="min-h-screen bg-[#060b13] text-slate-300 font-sans selection:bg-blue-500 selection:text-white flex flex-col justify-between">


            {/* Header */}
            <Header />

            {/* Sticky Social Sidebar */}
            <Aside />

            <main className="max-w-6xl mx-auto px-6 md:px-12 py-12 space-y-12 w-full">

                {/* Hero Section */}
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
                    <div className="lg:col-span-9 space-y-6">
                        <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
                            Philosophy & Vision
                        </span>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
                            Bridging the gap between <span className="text-blue-200">design</span> and <span className="text-blue-200">scalable architecture.</span>
                        </h1>
                        <p className="text-slate-400 text-base leading-relaxed max-w-xl">
                            I believe great software sits at the intersection of good design, solid engineering, and a clear understanding of the people who use it. My goal is to build digital experiences that are not only visually engaging, but also reliable, scalable, and intuitive. I approach every project with a mindset of continuous learning—turning ideas into practical solutions, writing clean and maintainable code, and creating products that deliver real value.                        </p>

                        {/* Micro Highlights */}
                        <div className="flex flex-wrap gap-8 pt-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                                    <Gauge size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">Performance First</h4>
                                    <p className="text-slate-500 text-xs">Optimized for every millisecond.</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                                    <Compass size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">Scalable Design</h4>
                                    <p className="text-slate-500 text-xs">Systems built to evolve.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Hero Profile Image */}
                    {/* <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-2xl shadow-blue-900/30">
                            <img
                                src="https://res.cloudinary.com/dn7lrgxvl/image/upload/v1781626143/uploads/oaumcz7vft0n6sxtwzfb.jpg"
                                alt="Developer Profile"
                                className="w-full h-full object-cover contrast-110"
                            />
                        </div>
                    </div> */}
                </section>

                {/* Evolution of Craft Section */}
                <section className="space-y-12">
                    <div className="text-center space-y-3">
                        <h2 className="text-3xl font-bold text-white">The Evolution of DevAdelani</h2>
                        <div className="w-16 h-1 bg-blue-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-6 space-y-6 text-slate-300 text-base leading-relaxed">
                            <p>
                                My journey into technology began in 2020, before I gained admission to my first degree. Like many people, I was fascinated by the way computers were portrayed in movies—the seemingly impossible things people could accomplish with technology felt like magic. That curiosity pushed me to start researching how computers and software actually worked, and what began as simple curiosity gradually developed into a genuine passion for technology.                            </p>
                            <p>
                                When I eventually gained admission to study Computer Science, that interest grew even further. During my early orientation, I was introduced to the many areas of computing, and it was there that I discovered Software Engineering. I became particularly interested in the idea of turning ideas into real-world applications through code, and I knew I had found an area I wanted to pursue.
                            </p>
                            <p>
                                The journey hasn't always been easy. It has required consistency, patience, and a willingness to keep learning even when things became challenging. I completed my National Diploma (ND) in Computer Science, but rather than immediately continuing to an HND, I decided to take a step back and invest in building stronger practical skills. I joined a coding bootcamp where I gained hands-on experience and developed a deeper understanding of modern web development and software engineering.
                            </p>

                            <p>
                                Today, I continue to grow as a developer, constantly learning, building, and challenging myself to become better. What started with curiosity about the "magic" of computers has grown into a passion for creating meaningful software and solving real-world problems with technology.
                            </p>
                            <blockquote className="border-l-2 border-blue-400 pl-4 py-1 text-slate-400 italic font-serif">
                                "What started as curiosity about the magic of computers became a passion for using technology to build, solve, and create."
                            </blockquote>
                        </div>

                        <div className="lg:col-span-6">
                            <div className="bg-[#0c1629]/60 border border-slate-800/80 rounded-2xl p-3 overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
                                    alt="Developer Workstation Code"
                                    className="rounded-xl w-full h-72 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comprehensive Tech Stack Section */}
                <section className="space-y-12 ">
                    <div className="text-center space-y-3">
                        <h2 className="text-3xl font-bold text-white">Comprehensive Tech Stack</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-around">

                        {/* Frontend Card */}
                        <div className="bg-[#0c1629]/60 border border-slate-800/80 rounded-2xl p-6 space-y-6">
                            <div className="flex items-center gap-3 text-white font-semibold">
                                <Code2 className="text-blue-400" size={20} />
                                <span>Frontend</span>
                            </div>
                            <div className="space-y-4 font-mono text-xs">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-slate-200">React / Next.js</span>
                                        <span className="text-slate-400">95%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                                        <div className="bg-blue-400 h-full w-[95%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-slate-200">JavaScript</span>
                                        <span className="text-slate-400">80%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                                        <div className="bg-blue-400 h-full w-[80%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-slate-200">Bootstrap / Tailwind / CSS</span>
                                        <span className="text-slate-400">98%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                                        <div className="bg-blue-400 h-full w-[98%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Backend Card */}
                        <div className="bg-[#0c1629]/60 border border-slate-800/80 rounded-2xl p-6 space-y-6">
                            <div className="flex items-center gap-3 text-white font-semibold">
                                <Database className="text-sky-400" size={20} />
                                <span>Backend</span>
                            </div>
                            <div className="space-y-4 font-mono text-xs">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-slate-200">Node.js</span>
                                        <span className="text-slate-400">92%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                                        <div className="bg-sky-400 h-full w-[92%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-slate-200">Express.js / REST API</span>
                                        <span className="text-slate-400">85%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                                        <div className="bg-sky-400 h-full w-[85%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-slate-200">MongoDB</span>
                                        <span className="text-slate-400">95%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                                        <div className="bg-sky-400 h-full w-[95%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* DevOps Card */}
                        {/* <div className="bg-[#0c1629]/60 border border-slate-800/80 rounded-2xl p-6 space-y-6">
                            <div className="flex items-center gap-3 text-white font-semibold">
                                <Cloud className="text-indigo-400" size={20} />
                                <span>DevOps</span>
                            </div>
                            <div className="space-y-4 font-mono text-xs">
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-slate-200">AWS / GCP</span>
                                        <span className="text-slate-400">75%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                                        <div className="bg-indigo-400 h-full w-[75%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-slate-200">Kubernetes</span>
                                        <span className="text-slate-400">70%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                                        <div className="bg-indigo-400 h-full w-[70%]"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-1">
                                        <span className="text-slate-200">CI/CD Pipelines</span>
                                        <span className="text-slate-400">90%</span>
                                    </div>
                                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                                        <div className="bg-indigo-400 h-full w-[90%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        {/* Tools Card */}
                        <div className="bg-[#0c1629]/60 border border-slate-800/80 rounded-2xl p-6 space-y-6">
                            <div className="flex items-center gap-3 text-white font-semibold">
                                <Wrench className="text-blue-400" size={20} />
                                <span>Tools</span>
                            </div>
                            <div className="flex flex-wrap gap-2 font-mono text-xs">
                                {['Docker', 'GraphQL', 'Figma', 'Git', 'Jest', 'TypeScript'].map((tool) => (
                                    <span key={tool} className="bg-slate-800/80 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700/50">
                                        {tool}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* Experience Timeline Section */}
                <section className="space-y-12">
                    <div className="text-center space-y-3">
                        <h2 className="text-3xl font-bold text-white">Experience</h2>
                    </div>

                    <div className="relative max-w-4xl mx-auto py-8">
                        {/* Timeline Vertical Line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2 hidden md:block"></div>

                        <div className="space-y-12">

                            {/* Item 1 - Right side */}
                            <div className="relative flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2"></div>
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#070d19] shadow-lg shadow-blue-500/50 hidden md:block"></div>
                                <div className="md:w-1/2 md:pl-12 w-full">
                                    <div className="bg-[#0c1629]/60 border border-slate-800/80 rounded-2xl p-6 space-y-2">
                                        <span className="text-xs font-mono text-blue-400 tracking-wider">2025 — PRESENT</span>
                                        <h3 className="text-xl font-bold text-white">Full-Stack Engineer</h3>
                                        <p className="text-xs font-mono text-slate-400">Independent Projects & Continuous Development</p>
                                        <p className="text-slate-400 text-sm leading-relaxed pt-2">
                                            Building and deploying full-stack web applications while continuously improving my skills in modern software development. Working with technologies including React, Next.js, Node.js, Express, MongoDB, and Tailwind CSS to develop responsive, scalable, and user-focused applications.                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Item 2 - Left side */}
                            <div className="relative flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 md:pr-12 w-full">
                                    <div className="bg-[#0c1629]/60 border border-slate-800/80 rounded-2xl p-6 space-y-2 text-left md:text-right">
                                        <span className="text-xs font-mono text-purple-400 tracking-wider">2025</span>
                                        <h3 className="text-xl font-bold text-white">Software Engineering Bootcamp</h3>
                                        <p className="text-xs font-mono text-slate-400">SQI College of ICT</p>
                                        <p className="text-slate-400 text-sm leading-relaxed pt-2">
                                            Completed an intensive practical training program focused on modern web development and software engineering. Strengthened my understanding of frontend and backend development by building real-world applications and working with modern development tools and practices.                                        </p>
                                    </div>
                                </div>
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-purple-400 border-4 border-[#070d19] shadow-lg shadow-purple-400/50 hidden md:block"></div>
                                <div className="md:w-1/2"></div>
                            </div>

                            {/* Item 3 - Right side */}
                            <div className="relative flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2"></div>
                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 -translate-x-1/2 z-10 w-4 h-4 rounded-full bg-sky-400 border-4 border-[#070d19] shadow-lg shadow-sky-400/50 hidden md:block"></div>
                                <div className="md:w-1/2 md:pl-12 w-full">
                                    <div className="bg-[#0c1629]/60 border border-slate-800/80 rounded-2xl p-6 space-y-2">
                                        <span className="text-xs font-mono text-sky-400 tracking-wider">2021 — 2024</span>
                                        <h3 className="text-xl font-bold text-white">Computer Science — National Diploma</h3>
                                        <p className="text-xs font-mono text-slate-400">Federal Polytechnic, Offa</p>
                                        <p className="text-slate-400 text-sm leading-relaxed pt-2">
                                            Studied Computer Science with a focus on programming, software development, databases, algorithms, and computer fundamentals. Completed my National Diploma in 2024, building the foundation that would lead me deeper into software engineering and practical development.                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* What I Bring to Every Project Section */}
                <section className="space-y-12">
                    <div className="text-center space-y-3">
                        <h2 className="text-3xl font-bold text-white">What I Bring to Every Project</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Testimonial 1 */}
                        <div className="bg-[#0c1629]/60 border border-slate-800/80 rounded-2xl p-8 relative flex flex-col justify-between space-y-6">
                            <span className="absolute top-6 right-8 text-6xl text-slate-700/40 font-serif leading-none select-none">
                                &rdquo;
                            </span>
                            <p className="text-slate-300 text-sm leading-relaxed italic relative z-10">
                                "I don't just build applications; I take the time to understand the problem behind the idea and turn it into a practical digital solution."                            </p>
                            {/* <div className="flex items-center gap-4 pt-2">
                                <img
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150"
                                    alt="Sarah Jenkins"
                                    className="w-12 h-12 rounded-full object-cover border border-slate-700"
                                />
                                <div>
                                    <h4 className="text-white font-bold text-sm">Sarah Jenkins</h4>
                                    <p className="text-slate-400 text-xs font-mono">CTO, NexaCorp</p>
                                </div>
                            </div> */}
                        </div>

                        {/* Testimonial 2 */}
                        <div className="bg-[#0c1629]/60 border border-slate-800/80 rounded-2xl p-8 relative flex flex-col justify-between space-y-6">
                            <span className="absolute top-6 right-8 text-6xl text-slate-700/40 font-serif leading-none select-none">
                                &rdquo;
                            </span>
                            <p className="text-slate-300 text-sm leading-relaxed italic relative z-10">
                                "Every project is an opportunity to learn, improve, and build something that is reliable, intuitive, and genuinely useful to the people who use it."
                            </p>
                            {/* <div className="flex items-center gap-4 pt-2">
                                <img
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
                                    alt="David Chen"
                                    className="w-12 h-12 rounded-full object-cover border border-slate-700"
                                />
                                <div>
                                    <h4 className="text-white font-bold text-sm">David Chen</h4>
                                    <p className="text-slate-400 text-xs font-mono">Founder, Velocity Studio</p>
                                </div>
                            </div> */}
                        </div>

                    </div>
                </section>

            </main>

            <Footer />

        </div>
    );
}