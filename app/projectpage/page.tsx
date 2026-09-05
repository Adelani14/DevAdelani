'use client';

import { useEffect, useState } from 'react';
import {
    Code2,
    MessageSquare,
    Rocket,
    Eye,
    FileText,
    CheckCircle,
    Download,
    FolderGit2,
    Smartphone
} from 'lucide-react';
import Header from "@/components/layout/Header";
import Aside from '@/components/layout/Aside';
import Footer from '@/components/layout/Footer';


export default function Page() {
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
                'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788622894/Gemini_Generated_Image_sed805sed805sed8_sehjsd.jpg',
                'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788625477/Screenshot_2026-09-05_092416_w1f02z.png',
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
        {
            id: 3,
            title: 'DevAdelani Portfolio Website',
            category: 'Frontend',
            description: 'A modern, responsive portfolio website built with Next.js and TypeScript to showcase my projects, technical skills, development journey, and experience through a clean, interactive, and user-focused interface.',

            images: [
                'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788626326/Screenshot_2026-09-05_093132_uptl3e.png',
                'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788626561/Screenshot_2026-09-05_093301_c98ldb.png',
                'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788626560/Screenshot_2026-09-05_093531_y6d03r.png',
                'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788626560/Screenshot_2026-09-05_093633_zwm6uo.png',
                'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788626561/Screenshot_2026-09-05_094012_nirzwv.png',
                'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788626560/Screenshot_2026-09-05_094127_a46rq2.png',
            ],

            tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js'],

            primaryBtn: {
                text: 'Live Demo',
                icon: <Rocket size={15} />,
                href: 'https://devadelani.com.ng'
            },

            secondaryBtn: {
                text: 'View code',
                icon: <Code2 size={15} />,
                href: 'https://github.com/Adelani14/DevAdelani'
            },

           subdescription1: 'Responsive design across devices',
            subdescription2: 'Interactive and smooth UI animations',
            subdescription3: 'Project and technical skill showcase',
            subdescription4: 'Contact form integration',
            subdescription5: 'Responsive navigation and modern UI/UX',
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
        <div className="min-h-screen bg-[#060b13] text-slate-300 font-sans selection:bg-blue-500 selection:text-white flex flex-col justify-between">

            {/* Fixed Left Sidebar Navigation */}
            <Aside />

            {/* Main Header */}
            <Header />

            {/* Main Container */}
            <main className="max-w-6xl mx-auto px-6 md:px-12 py-12 space-y-12 w-full">

                {/* Title & Filter Options Section */}
                <section className="space-y-6">
                    <div className="space-y-2">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                            Featured <span className="italic font-serif font-normal text-blue-200">Projects</span>
                        </h1>
                        <p className="text-slate-400 text-sm max-w-xl leading-relaxed">
                            Explore a curated selection of architectural solutions and high-performance applications designed to solve complex real-world challenges.
                        </p>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-5 py-2 rounded-xl text-xs font-mono font-medium transition-all ${activeCategory === cat
                                    ? 'bg-[#c7d2fe] text-slate-950 shadow-md font-bold'
                                    : 'bg-[#0f172a]/70 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </section>

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
                                        <span className="text-blue-400 mt-0.5"><CheckCircle size={20} /></span>
                                        <p className="text-sm text-slate-400">
                                            {project.subdescription1}
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-0.5"><CheckCircle size={20} /></span>
                                        <p className="text-sm text-slate-400">
                                            {project.subdescription2}
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-0.5"><CheckCircle size={20} /></span>
                                        <p className="text-sm text-slate-400">
                                            {project.subdescription3}
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-3">
                                        <span className="text-blue-400 mt-0.5"><CheckCircle size={20} /></span>
                                        <p className="text-sm text-slate-400">
                                            {project.subdescription4}
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
                                    {/* <a
                                        href={project.primaryBtn.href}
                                        className="bg-[#a5c4ff] hover:bg-blue-300 text-slate-950 font-mono font-medium text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/10"
                                    >
                                        {project.primaryBtn.icon}
                                        <span>{project.primaryBtn.text}</span>
                                    </a> */}

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


                            {/* Main Image */}
                            <div className="flex-1 flex items-center justify-center relative">

                                {/* Previous */}
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


                                {/* Next */}
                                <button
                                    onClick={nextImage}
                                    className="absolute right-2 md:right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
                                >
                                    <i className="bi bi-chevron-right text-xl"></i>
                                </button>

                            </div>


                            {/* Thumbnails */}
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



            {/* Footer Component */}
            <Footer />

        </div>
    );
}