'use client';

import {
    Layout,
    Server,
    Cloud,
    Wrench,
    BookOpen,
    Award,
    Search
} from 'lucide-react';
import Header from "@/components/layout/Header";
import Footer from '@/components/layout/Footer';


export default function Page() {
    return (
        <div className="min-h-screen bg-[#050a12] text-slate-300 font-sans selection:bg-blue-500 selection:text-white relative overflow-x-hidden flex flex-col justify-between">

            {/* Navigation Header */}
            <Header />

            {/* Main Container */}
            <main className="max-w-6xl mx-auto px-6 md:px-12 py-16 space-y-24 w-full">

                {/* Hero Banner Section */}
                <section className="space-y-4">
                    <span className="text-xs font-mono tracking-widest text-slate-400 uppercase font-semibold">
                        TECHNICAL COMPETENCIES
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                        Mastering the <span className="bg-gradient from-blue-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent">Digital Craft</span>
                    </h1>
                    <p className="text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
                        A multi-disciplinary approach to engineering, combining robust backend architecture with pixel-perfect frontend experiences and scalable infrastructure.
                    </p>
                </section>

                {/* Section 1: Core Proficiency Matrix & Pentagon Radar Visual */}
                <section className="bg-[#0a1220]/70 border border-slate-800/80 rounded-2xl p-6 sm:p-10 backdrop-blur-sm shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Left Metrics */}
                        <div className="lg:col-span-6 space-y-8">
                            <div className="space-y-3">
                                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                                    Core Proficiency Matrix
                                </h2>
                                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                                    My expertise spans across the entire lifecycle of software development. I prioritize code maintainability, system performance, and user-centric design in every project.
                                </p>
                            </div>

                            {/* Top Skills Linear Indicators */}
                            <div className="space-y-6 pt-2">

                                {/* Metric 1 */}
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center text-xs font-mono">
                                        <span className="text-white font-semibold">Architecture Design</span>
                                        <span className="text-blue-300">98%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-400 rounded-full w-[98%]"></div>
                                    </div>
                                </div>

                                {/* Metric 2 */}
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center text-xs font-mono">
                                        <span className="text-white font-semibold">Frontend Engineering</span>
                                        <span className="text-blue-300">95%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-400 rounded-full w-[95%]"></div>
                                    </div>
                                </div>

                                {/* Metric 3 */}
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center text-xs font-mono">
                                        <span className="text-white font-semibold">API & Scalability</span>
                                        <span className="text-blue-300">92%</span>
                                    </div>
                                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-blue-400 rounded-full w-[92%]"></div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Right Pentagon Radar Chart Graphic */}
                        <div className="lg:col-span-6 flex justify-center items-center py-6">
                            <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">

                                {/* SVG Pentagon Background Web */}
                                <svg className="w-full h-full text-slate-800/80" viewBox="0 0 200 200">
                                    {/* Outer Pentagon Grid */}
                                    <polygon
                                        points="100,20 180,75 150,165 50,165 20,75"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    />
                                    {/* Inner Pentagon Grid 1 */}
                                    <polygon
                                        points="100,45 155,83 135,145 65,145 45,83"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                    />
                                    {/* Inner Pentagon Grid 2 */}
                                    <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="1" />

                                    {/* Active Skill Area Polygon */}
                                    <polygon
                                        points="100,25 170,80 145,158 55,158 30,80"
                                        className="fill-blue-500/10 stroke-blue-300"
                                        strokeWidth="2"
                                    />

                                    {/* Nodes */}
                                    <circle cx="100" cy="25" r="4" className="fill-blue-300" />
                                    <circle cx="170" cy="80" r="4" className="fill-blue-300" />
                                    <circle cx="145" cy="158" r="4" className="fill-blue-300" />
                                    <circle cx="55" cy="158" r="4" className="fill-blue-300" />
                                    <circle cx="30" cy="80" r="4" className="fill-blue-300" />
                                </svg>

                                {/* Labels around chart */}
                                <span className="absolute -top-1 font-mono text-[11px] text-slate-300">Systems</span>
                                <span className="absolute top-20 -right-6 font-mono text-[11px] text-slate-300">UI/UX</span>
                                <span className="absolute -bottom-2 right-12 font-mono text-[11px] text-slate-300">Cloud</span>
                                <span className="absolute -bottom-2 left-12 font-mono text-[11px] text-slate-300">Data</span>
                                <span className="absolute top-20 -left-8 font-mono text-[11px] text-slate-300">Security</span>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Section 2: Detailed Technical Skill Breakdowns */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Card 1: Frontend Ecosystem */}
                    <div className="bg-[#0a1220]/70 border-l-2 border-l-blue-400 border-t border-r border-b border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-slate-800/60 text-blue-300 border border-slate-700/50">
                                <Layout size={22} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Frontend Ecosystem</h3>
                                <p className="text-xs font-mono text-slate-400">User Interface & Experience</p>
                            </div>
                        </div>

                        <div className="space-y-6 pt-2">
                            {/* Skill 1 */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-white">React & Next.js</span>
                                    <span className="text-xs font-mono text-blue-300">80%</span>
                                </div>
                                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-400 rounded-full w-[80%]"></div>
                                </div>
                                <p className="text-xs font-mono text-slate-400 leading-relaxed pt-1">
                                    SSR, ISR, Server Components, State Management (Zustand/Redux)
                                </p>
                            </div>

                            {/* Skill 2 */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-white">JavaScript & TypeScript</span>
                                    <span className="text-xs font-mono text-blue-300">84%</span>
                                </div>
                                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-400 rounded-full w-[84%]"></div>
                                </div>
                                <p className="text-xs font-mono text-slate-400 leading-relaxed pt-1">
                                    Advanced Typing, Utility Types, Generic Patterns, Module Systems
                                </p>
                            </div>

                            {/* Skill 3 */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-white">Tailwind & Bootstrap</span>
                                    <span className="text-xs font-mono text-blue-300">88%</span>
                                </div>
                                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-400 rounded-full w-[88%]"></div>
                                </div>
                                <p className="text-xs font-mono text-slate-400 leading-relaxed pt-1">
                                    Utility-first Design, Complex Animations, Responsive Fluid Grids
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Backend Architecture */}
                    <div className="bg-[#0a1220]/70 border-l-2 border-l-purple-400 border-t border-r border-b border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-slate-800/60 text-purple-300 border border-slate-700/50">
                                <Server size={22} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Backend Architecture</h3>
                                <p className="text-xs font-mono text-slate-400">Server, Database & Logic</p>
                            </div>
                        </div>

                        <div className="space-y-6 pt-2">
                            {/* Skill 1 */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-white">Node.js & Express.js</span>
                                    <span className="text-xs font-mono text-purple-300">72%</span>
                                </div>
                                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-purple-400 rounded-full w-[72%]"></div>
                                </div>
                                <p className="text-xs font-mono text-slate-400 leading-relaxed pt-1">
                                    Event-driven, Microservices, Concurrency, RESTful APIs
                                </p>
                            </div>

                            {/* Skill 2 */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-white">MongoDB</span>
                                    <span className="text-xs font-mono text-purple-300">90%</span>
                                </div>
                                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-purple-400 rounded-full w-[90%]"></div>
                                </div>
                                <p className="text-xs font-mono text-slate-400 leading-relaxed pt-1">
                                    Query Optimization, Schema Design, Data Sharding
                                </p>
                            </div>

                            {/* Skill 3 */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-white">Redis</span>
                                    <span className="text-xs font-mono text-purple-300">75%</span>
                                </div>
                                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-purple-400 rounded-full w-[75%]"></div>
                                </div>
                                <p className="text-xs font-mono text-slate-400 leading-relaxed pt-1">
                                    Caching Strategies, Message Queues, Real-time WebSockets
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Cloud & Infrastructure */}
                    {/* <div className="bg-[#0a1220]/70 border-l-2 border-l-cyan-400 border-t border-r border-b border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-slate-800/60 text-cyan-300 border border-slate-700/50">
                                <Cloud size={22} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Cloud & Infrastructure</h3>
                                <p className="text-xs font-mono text-slate-400">Deployment & Automation</p>
                            </div>
                        </div>

                        <div className="space-y-6 pt-2">
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-white">Docker & Kubernetes</span>
                                    <span className="text-xs font-mono text-cyan-300">88%</span>
                                </div>
                                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-cyan-400 rounded-full w-[88%]"></div>
                                </div>
                                <p className="text-xs font-mono text-slate-400 leading-relaxed pt-1">
                                    Containerization, Orchestration, Helm Charts, CI/CD Pipelines
                                </p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-white">AWS & GCP</span>
                                    <span className="text-xs font-mono text-cyan-300">91%</span>
                                </div>
                                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-cyan-400 rounded-full w-[91%]"></div>
                                </div>
                                <p className="text-xs font-mono text-slate-400 leading-relaxed pt-1">
                                    EC2, S3, Lambda, Cloud Run, Serverless Architecture, IAM
                                </p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-white">Terraform & Ansible</span>
                                    <span className="text-xs font-mono text-cyan-300">82%</span>
                                </div>
                                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-cyan-400 rounded-full w-[82%]"></div>
                                </div>
                                <p className="text-xs font-mono text-slate-400 leading-relaxed pt-1">
                                    Infrastructure as Code, Automated Provisioning
                                </p>
                            </div>
                        </div>
                    </div> */}

                    {/* Card 4: Workflow & Tools */}
                    <div className="bg-[#0a1220]/70 border-l-2 border-l-[#c7d2fe] border-t border-r border-b border-slate-800/80 rounded-2xl p-6 sm:p-8 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-xl bg-slate-800/60 text-indigo-200 border border-slate-700/50">
                                <Wrench size={22} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Workflow & Tools</h3>
                                <p className="text-xs font-mono text-slate-400">Efficiency & Collaboration</p>
                            </div>
                        </div>

                        <div className="space-y-6 pt-2">
                            {/* Skill 1 */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-white">Git & GitHub Actions</span>
                                    <span className="text-xs font-mono text-indigo-200">95%</span>
                                </div>
                                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-indigo-300 rounded-full w-[95%]"></div>
                                </div>
                                <p className="text-xs font-mono text-slate-400 leading-relaxed pt-1">
                                    Version Control, Automated Workflows, Semantic Versioning
                                </p>
                            </div>

                            {/* Skill 2 */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-white">Jest & Cypress</span>
                                    <span className="text-xs font-mono text-indigo-200">89%</span>
                                </div>
                                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-indigo-300 rounded-full w-[89%]"></div>
                                </div>
                                <p className="text-xs font-mono text-slate-400 leading-relaxed pt-1">
                                    Unit Testing, E2E Testing, TDD, Code Coverage Analysis
                                </p>
                            </div>

                            {/* Skill 3 */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-bold text-white">Figma & Adobe CC</span>
                                    <span className="text-xs font-mono text-indigo-200">84%</span>
                                </div>
                                <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-indigo-300 rounded-full w-[84%]"></div>
                                </div>
                                <p className="text-xs font-mono text-slate-400 leading-relaxed pt-1">
                                    Prototyping, Design Systems, SVG Optimization, Brand
                                </p>
                            </div>
                        </div>
                    </div>

                </section>

                {/* <section className="space-y-10">
                    <div className="text-center space-y-2">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                            Continuous Learning
                        </h2>
                        <p className="text-slate-400 text-sm">
                            Staying ahead of the curve in the ever-evolving tech landscape.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <div className="bg-[#0a1220]/70 border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl hover:border-slate-700 transition-all group">
                            <div className="h-44 overflow-hidden relative bg-slate-900 border-b border-slate-800/80">
                                <img
                                    src="https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=600"
                                    alt="Pragmatic Programmer Book"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                                />
                            </div>
                            <div className="p-6 space-y-3">
                                <div className="flex items-center gap-2 text-xs font-mono text-purple-300 uppercase font-semibold">
                                    <BookOpen size={14} />
                                    <span>READING</span>
                                </div>
                                <h3 className="text-xl font-bold text-white">Pragmatic Programmer</h3>
                                <p className="text-slate-400 text-xs leading-relaxed">
                                    Refining technical excellence and professional mastery in software construction.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#0a1220]/70 border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl hover:border-slate-700 transition-all group">
                            <div className="h-44 overflow-hidden relative bg-slate-900 border-b border-slate-800/80">
                                <img
                                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600"
                                    alt="AWS Servers"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                                />
                            </div>
                            <div className="p-6 space-y-3">
                                <div className="flex items-center gap-2 text-xs font-mono text-indigo-300 uppercase font-semibold">
                                    <Award size={14} />
                                    <span>CERTIFICATION</span>
                                </div>
                                <h3 className="text-xl font-bold text-white">AWS Solutions Architect</h3>
                                <p className="text-slate-400 text-xs leading-relaxed">
                                    Mastering scalable, highly-available, and fault-tolerant systems on AWS.
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#0a1220]/70 border border-slate-800/80 rounded-2xl overflow-hidden shadow-xl hover:border-slate-700 transition-all group">
                            <div className="h-44 overflow-hidden relative bg-slate-900 border-b border-slate-800/80">
                                <img
                                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600"
                                    alt="Rust Mesh Network"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                                />
                            </div>
                            <div className="p-6 space-y-3">
                                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase font-semibold">
                                    <Search size={14} />
                                    <span>RESEARCHING</span>
                                </div>
                                <h3 className="text-xl font-bold text-white">Rust Systems Dev</h3>
                                <p className="text-slate-400 text-xs leading-relaxed">
                                    Exploring memory safety and high-performance computation with the Rust ecosystem.
                                </p>
                            </div>
                        </div>

                    </div>
                </section> */}

            </main>

            {/* Footer Navigation Component */}
            <Footer />

        </div>
    );
}