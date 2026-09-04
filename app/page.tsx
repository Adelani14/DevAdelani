"use client";
import {
  Code2,
  Share2,
  MessageSquare,
  ExternalLink,
  Compass,
  ShieldCheck,
  Database,
  Cloud
} from 'lucide-react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Aside from "@/components/layout/Aside";
import { useEffect } from 'react';


export default function Page() {


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
  return (
    <>
      <div className="min-h-screen bg-[#070d19] text-slate-300 font-sans selection:bg-blue-500 selection:text-white relative overflow-x-hidden">

        <Header />
        <Aside />

        <main className="max-w-6xl mx-auto px-6 md:px-12 pl-16 md:pl-24 space-y-32 py-4">

          {/* Hero Section */}
          <section className="pt-8">
            <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-800 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-mono text-slate-300">Available for new opportunities</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                {/* <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
                  Crafting <span className="italic font-normal text-blue-200">Scalable</span><br />
                  Digital<br />
                  Experiences.
                </h1> */}
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight">
                  Building Ideas Into<span className="italic font-normal text-blue-200"> Powerful</span> Digital Experiences.
                </h2>
                <p className="text-slate-400 max-w-xl leading-relaxed text-base">
                  Hi, I'm a <strong className="text-white font-semibold">Full-Stack Web Developer</strong> specialized in building robust, user-centric applications that solve complex business problems with elegant code.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="/resume/ABDULSEMIU_SODEEQ_ADELANI_Junior_FullStack_developer_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-300 hover:bg-blue-200 text-slate-900 font-mono text-sm px-6 py-3 rounded-lg font-medium transition-all"
                  >
                    View Resume
                  </a>
                  <a
                    href="#contact"
                    className="border border-slate-700 hover:border-slate-500 text-slate-200 font-mono text-sm px-6 py-3 rounded-lg font-medium transition-all"
                  >
                    Contact Me
                  </a>
                </div>
              </div>

              {/* Hero Image Avatar */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-blue-500/30 shadow-2xl shadow-blue-900/20">
                  <img
                    src="https://res.cloudinary.com/dn7lrgxvl/image/upload/v1785776312/portfoliodp_lgmuzd.jpg"
                    alt="Developer Portrait"
                    className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 bg-[#0c1629]/60 border border-slate-800/80 rounded-2xl p-8 backdrop-blur-sm">
              <div className="text-6xl font-extrabold text-white mb-2">2+</div>
              <div className="font-mono text-sm text-slate-400 uppercase tracking-wider leading-snug">
                Years of Learning, Building & Growing in Software Development
              </div>
            </div>

            <div className="lg:col-span-8 space-y-8">
              <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400">About Me</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                I’m a passionate Software Engineer and Computer Science graduate focused on building modern, scalable, and user-friendly web applications. My journey into technology started with simple curiosity and has grown into a commitment to continuously learn, build, and solve real-world problems with code. I enjoy turning ideas into functional digital experiences and working with technologies such as JavaScript, React, Next.js, Node.js, and MongoDB.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[#0c1629]/60 border border-slate-800/80 rounded-2xl p-6 space-y-3">
                  <Compass className="text-blue-400" size={24} />
                  <h3 className="text-white font-bold text-lg">Scalability First</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Designing systems that grow with your user base without compromising performance.
                  </p>
                </div>

                <div className="bg-[#0c1629]/60 border border-slate-800/80 rounded-2xl p-6 space-y-3">
                  <ShieldCheck className="text-blue-400" size={24} />
                  <h3 className="text-white font-bold text-lg">Clean Code</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Writing maintainable, well-documented code that teams love to work with.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Arsenal / Skills Section */}
          <section id="skills" className="space-y-12">
            <div className="text-center space-y-3 max-w-xl mx-auto">
              <h2 className="text-2xl font-bold text-white">Technical Arsenal</h2>
              <p className="text-slate-400 text-sm">Modern technologies I leverage to build superior products.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 ">

              {/* Frontend */}
              <div className="bg-[#0c1629]/60 border border-slate-800/80 rounded-2xl p-6 space-y-6">
                <div className="flex items-center gap-3 text-white font-semibold">
                  <Code2 className="text-blue-400" size={20} />
                  <span>Frontend</span>
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-200">React / Next.js</span>
                      <span className="text-slate-400">95%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-blue-400 h-full w-[95%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-200">Bootstrap / Tailwind </span>
                      <span className="text-slate-400">90%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-blue-400 h-full w-[90%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-200">JavaScript</span>
                      <span className="text-slate-400">85%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-blue-400 h-full w-[85%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Backend */}
              <div className="bg-[#0c1629]/60 border border-slate-800/80 rounded-2xl p-6 space-y-6">
                <div className="flex items-center gap-3 text-white font-semibold">
                  <Code2 className="text-sky-400" size={20} />
                  <span>Backend</span>
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-200">Node.js</span>
                      <span className="text-slate-400">90%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-sky-400 h-full w-[90%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-200">Express.js</span>
                      <span className="text-slate-400">75%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-sky-400 h-full w-[75%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-200">GraphQL</span>
                      <span className="text-slate-400">30%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-sky-400 h-full w-[30%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Database */}
              <div className="bg-[#0c1629]/60 border border-slate-800/80 rounded-2xl p-6 space-y-6">
                <div className="flex items-center gap-3 text-white font-semibold">
                  <Database className="text-indigo-400" size={20} />
                  <span>Database</span>
                </div>
                <div className="space-y-4 font-mono text-sm">
                  {/* <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-200">PostgreSQL</span>
                      <span className="text-slate-400">90%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-indigo-400 h-full w-[90%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-200">Redis</span>
                      <span className="text-slate-400">85%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-indigo-400 h-full w-[85%]"></div>
                    </div>
                  </div> */}
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-200">MongoDB</span>
                      <span className="text-slate-400">80%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-indigo-400 h-full w-[80%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* DevOps */}
              {/* <div className="bg-[#0c1629]/60 border border-slate-800/80 rounded-2xl p-6 space-y-6">
                <div className="flex items-center gap-3 text-white font-semibold">
                  <Cloud className="text-rose-400" size={20} />
                  <span>DevOps</span>
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-200">Docker & K8s</span>
                      <span className="text-slate-400">80%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-rose-400 h-full w-[80%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-200">AWS / GCP</span>
                      <span className="text-slate-400">75%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-rose-400 h-full w-[75%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-slate-200">CI/CD</span>
                      <span className="text-slate-400">90%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-rose-400 h-full w-[90%]"></div>
                    </div>
                  </div>
                </div>
              </div> */}

            </div>
          </section>

          {/* Selected Works / Projects Section */}
          <section id="projects" className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">Selected Works</h2>
                <p className="text-slate-300 text-sm">A collection of projects that push the boundaries of web development.</p>
              </div>
              <a href="#archive" className="font-mono text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors">
                View Archive &rarr;
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Project 1 */}
              <div className="bg-[#0c1629]/60 border border-slate-800/80 rounded-2xl overflow-hidden group flex flex-col justify-between">
                <div className="p-4 bg-slate-900/50">
                  <div className="relative h-64 w-full rounded-xl overflow-hidden border border-slate-800">
                    <img
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                      alt="Nebula Finance Dashboard"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4 font-mono text-xs">
                    <span className="bg-slate-800/80 text-slate-300 px-3 py-1 rounded-full">React</span>
                    <span className="bg-slate-800/80 text-slate-300 px-3 py-1 rounded-full">Chart.js</span>
                    <span className="bg-slate-800/80 text-slate-300 px-3 py-1 rounded-full">PostgreSQL</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">Nebula Finance</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    A real-time cryptocurrency tracking platform with advanced sentiment analysis and predictive modeling features.
                  </p>
                  <div className="flex items-center gap-6 pt-2 font-mono text-xs">
                    <a href="#live" className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                    <a href="#code" className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors">
                      <Code2 size={14} /> GitHub
                    </a>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="bg-[#0c1629]/60 border border-slate-800/80 rounded-2xl overflow-hidden group flex flex-col justify-between">
                <div className="p-4 bg-slate-900/50">
                  <div className="relative h-64 w-full rounded-xl overflow-hidden border border-slate-800">
                    <img
                      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
                      alt="Echo CMS"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4 font-mono text-xs">
                    <span className="bg-slate-800/80 text-slate-300 px-3 py-1 rounded-full">Next.js</span>
                    <span className="bg-slate-800/80 text-slate-300 px-3 py-1 rounded-full">Prisma</span>
                    <span className="bg-slate-800/80 text-slate-300 px-3 py-1 rounded-full">AWS</span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white">Echo CMS</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    A headless content management system optimized for blazing-fast edge delivery and seamless developer experience.
                  </p>
                  <div className="flex items-center gap-6 pt-2 font-mono text-xs">
                    <a href="#live" className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors">
                      <ExternalLink size={14} /> Live Demo
                    </a>
                    <a href="#code" className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors">
                      <Code2 size={14} /> GitHub
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </section>

        </main>

        <Footer />
      </div >
    </>
  );
}

