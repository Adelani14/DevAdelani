"use client";
import {
  Code2,
  Share2,
  MessageSquare,
  ExternalLink,
  ArrowDownToLine,
  Compass,
  Rocket,
  Check,
  ShieldCheck,
  Database,
  Cloud,
  CheckCircle
} from 'lucide-react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Aside from "@/components/layout/Aside";
import { useEffect, useState } from 'react';


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



  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Full-Stack', 'Tools'];

  const projects = [
    {
      id: 1,
      title: 'Community Issue Reporting System',
      category: 'Full-Stack',
      description: 'This is a platform that allows citizens to report community issues such as potholes, waste management problems, and broken infrastructure.',

      images: [
        'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788518401/community-img_jfrsvb.jpg',
        'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788624902/Screenshot_2026-09-05_085653_nhgjqa.png',
        'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788624902/Screenshot_2026-09-05_091204_fwbxe7.png',
        'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788624903/Screenshot_2026-09-05_091336_jh7ebf.png',
        'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788624903/Screenshot_2026-09-05_091344_rv2knb.png',
        'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788624903/Screenshot_2026-09-05_085930_bvyxgg.png',
        'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788624904/Screenshot_2026-09-05_090015_cn8yxo.png',
      ],

      tags: ['React.js', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB'],

      primaryBtn: {
        text: 'Live Demo',
        icon: <Rocket size={15} />,
        href: 'https://communityissuereportsystem.vercel.app/'
      },

      secondaryBtn: {
        text: 'View code',
        icon: <Code2 size={15} />,
        href: 'https://github.com/Adelani14/Community_issue_report_system'
      },



      subdescription1: 'User authentication and role-based access',
      subdescription2: 'Community issue reporting and management',
      subdescription3: 'Location-based issue information',
      subdescription4: 'Issue status tracking',
      subdescription5: 'Image upload and management',
      subdescription6: 'Admin dashboard for issue management',
    },
    {
      id: 2,
      title: 'Mutpel Household Store',
      category: 'Full-Stack',
      description: 'A modern and responsive e-commerce web application built to deliver a seamless online shopping experience. This platform allows users to browse products, view detailed information, add items to their cart, and manage purchases efficiently.',

      images: [
        'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788518392/mutpelimg_gl6cgp.jpg',
        'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788622564/Screenshot_2026-09-04_133656_ayrd8b.png',
        'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788622564/Screenshot_2026-09-04_134111_gvieqn.png',
        'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788622563/Screenshot_2026-09-04_133753_w2lctx.png',
        'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788622564/Screenshot_2026-09-04_134210_f2xylb.png',
        'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788622563/Screenshot_2026-09-04_133600_r53bzi.png',
        'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788622563/Screenshot_2026-09-04_133418_xxuszp.png',
      ],

      tags: ['React.js', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB'],

      primaryBtn: {
        text: 'Live Demo',
        icon: <Rocket size={15} />,
        href: 'https://mutpel-store.vercel.app/'
      },

      secondaryBtn: {
        text: 'View code',
        icon: <Code2 size={15} />,
        href: 'https://github.com/Adelani14/Mutpel_Store'
      },

      subdescription1: 'Product browsing, search, and category filtering',
      subdescription2: 'Shopping cart and checkout functionality',
      subdescription3: 'User authentication and account management',
      subdescription4: 'Order management ',
      subdescription5: 'Responsive design',
    },
   

  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const [currentImage, setCurrentImage] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openGallery = (project, imageIndex = 0) => {
    setSelectedProject(project);
    setCurrentImage(imageIndex);
    setShowGallery(true);
  };

  const closeGallery = () => {
    setShowGallery(false);
    setSelectedProject(null);
    setCurrentImage(0);
  };

  const nextImage = () => {
    if (!selectedProject) return;

    setCurrentImage((prev) =>
      prev === selectedProject.images.length - 1
        ? 0
        : prev + 1
    );
  };

  const previousImage = () => {
    if (!selectedProject) return;

    setCurrentImage((prev) =>
      prev === 0
        ? selectedProject.images.length - 1
        : prev - 1
    );
  };


  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!showGallery) return;

      if (e.key === "ArrowRight") {
        nextImage();
      }

      if (e.key === "ArrowLeft") {
        previousImage();
      }

      if (e.key === "Escape") {
        closeGallery();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showGallery, selectedProject]);








  return (
    <>
      <div className="min-h-screen bg-[#060b13] text-slate-300 font-sans selection:bg-blue-500 selection:text-white flex flex-col justify-between">

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
              <div className="lg:col-span-9 space-y-6">
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
                    Download Resume
                  </a>
                  <a
                    href="/projectpage"
                    className="border border-slate-700 hover:border-slate-500 text-slate-200 font-mono text-sm px-6 py-3 rounded-lg font-medium transition-all"
                  >
                    view my work
                  </a>
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
                      <span className="text-slate-400">20%</span>
                    </div>
                    <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                      <div className="bg-sky-400 h-full w-[20%]"></div>
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


            </div>
          </section>

          {/* Selected Works / Projects Section */}
          <section id="projects" className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">Selected Works</h2>
                <p className="text-slate-300 text-sm">A collection of projects that push the boundaries of web development.</p>
              </div>
              <a href="projectpage" className="font-mono text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors">
                View Archive &rarr;
              </a>
            </div>

            {/* Projects Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-[#0a1220]/70 border border-slate-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group"
                >
                  {/* Card Header & Preview Image */}
                  <div className="space-y-4">
                    <div
                      className="relative aspect-[16/9] overflow-hidden bg-slate-900 border-b border-slate-800/80 cursor-pointer"
                      onClick={() => openGallery(project, 0)}
                    >
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                      />

                      {/* View Gallery Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-white text-sm font-medium">
                          <span className="flex items-center gap-2">
                            <i className="bi bi-images"></i>
                            View Gallery
                          </span>
                        </div>
                      </div>

                      {/* Category */}
                      <span className="absolute top-3 right-3 bg-[#0a1220]/90 backdrop-blur-md border border-slate-700/60 text-slate-300 font-mono text-[10px] px-3 py-1 rounded-md">
                        {project.category}
                      </span>
                    </div>

                    {/* Card Title & Description */}
                    <div className="px-6 space-y-2">
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-xs leading-relaxed min-h-[48px]">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Tags & Action Buttons */}
                  <div className="p-6 space-y-5">
                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-[#101a2e] border border-slate-800/80 text-slate-400 px-2.5 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>


                    <div className="space-y-3">

                      <div className="flex items-start gap-3">
                        <span className="text-blue-400 mt-0.5"><Check size={20} /></span>
                        <p className="text-sm text-slate-400">
                          {project.subdescription1}
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-blue-400 mt-0.5"><Check size={20} /></span>
                        <p className="text-sm text-slate-400">
                          {project.subdescription2}
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-blue-400 mt-0.5"><Check size={20} /></span>
                        <p className="text-sm text-slate-400">
                          {project.subdescription3}
                        </p>
                      </div>

                      <div className="flex items-start gap-3">
                        <span className="text-blue-400 mt-0.5"><Check size={20} /></span>
                        <p className="text-sm text-slate-400">
                          {project.subdescription4}
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-400 mt-0.5"><Check size={20} /></span>
                        <p className="text-sm text-slate-400">
                          {project.subdescription5}
                        </p>
                      </div>

                    </div>

                    <div className="grid grid-cols-3 gap-3 mt-6">
                      {project.images.slice(1, 4).map((image, index) => (
                        <div
                          key={index}
                          className="h-24 rounded-lg overflow-hidden border border-slate-800"
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${index + 2}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                            onClick={() => openGallery(project, index + 1)}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Card Buttons */}
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      

                      <a
                        href={project.secondaryBtn.href}
                        className="bg-[#a5c4ff] hover:bg-blue-300 text-slate-950 font-mono font-medium text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/10"
                      >
                        {project.secondaryBtn.icon}
                        <span>{project.secondaryBtn.text}</span>
                      </a>
                    </div>
                  </div>

                </div>
              ))}
            </section>
          </section>

        </main>


        {
          showGallery && selectedProject && (
            <div
              className="fixed inset-0 bg-black/95 z-[99999] flex items-center justify-center p-4"
              onClick={closeGallery}
            >

              <div
                className="w-full max-w-6xl h-full flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >

                {/* Header */}
                <div className="flex items-center justify-between py-4">

                  <div>
                    <h3 className="text-white text-xl font-semibold">
                      {selectedProject.title}
                    </h3>

                    <p className="text-slate-400 text-sm mt-1">
                      {currentImage + 1} / {selectedProject.images.length}
                    </p>
                  </div>

                  <button
                    onClick={closeGallery}
                    className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
                  >
                    ✕
                  </button>

                </div>


                <div className="flex-1 flex items-center justify-center relative">

                  <button
                    onClick={previousImage}
                    className="absolute left-2 md:left-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
                  >
                    <i className="bi bi-chevron-left text-xl"></i>
                  </button>


                  {/* Image */}
                  <img
                    src={selectedProject.images[currentImage]}
                    alt={`${selectedProject.title} screenshot ${currentImage + 1}`}
                    className="max-h-[70vh] max-w-full object-contain rounded-xl"
                  />


                  <button
                    onClick={nextImage}
                    className="absolute right-2 md:right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
                  >
                    <i className="bi bi-chevron-right text-xl"></i>
                  </button>

                </div>



                <div className="flex gap-3 justify-center overflow-x-auto py-5">

                  {selectedProject.images.map((image, index) => (

                    <button
                      key={index}
                      type="button"
                      onClick={() => setCurrentImage(index)}
                      className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition ${currentImage === index
                        ? "border-blue-400"
                        : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                    >

                      <img
                        src={image}
                        alt=""
                        className="w-20 h-14 md:w-24 md:h-16 object-cover"
                      />

                    </button>

                  ))}

                </div>

              </div>

            </div>
          )
        }

        <Footer />
      </div >
    </>
  );
}

