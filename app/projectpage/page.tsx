'use client';

import React, { useState } from 'react';
import {
    Code2,
    MessageSquare,
    Rocket,
    Eye,
    FileText,
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
            image: 'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788518401/community-img_jfrsvb.jpg',
            tags: ['React.js', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB'],
            primaryBtn: { text: 'Live Demo', icon: <Rocket size={15} />, href: 'https://communityissuereportsystem.vercel.app/' },
            secondaryBtn: { text: 'Code', icon: <Code2 size={15} />, href: 'https://github.com/Adelani14/Community_issue_report_system' }
        },
        {
            id: 2,
            title: 'Mutpel Household Store',
            category: 'Full-Stack',
            description: 'A modern and responsive e-commerce web application built to deliver a seamless online shopping experience. This platform allows users to browse products, view detailed information, add items to their cart, and manage purchases efficiently.',
            image: 'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788518392/mutpelimg_gl6cgp.jpg',
            tags: ['React.js', 'Bootstrap', 'Node.js', 'Express.js', 'MongoDB'],
            primaryBtn: { text: 'Live Demo', icon: <Eye size={15} />, href: 'https://mutpel-store.vercel.app/' },
            secondaryBtn: { text: 'Code', icon: <Code2 size={15} />, href: 'https://github.com/Adelani14/Mutpel_Store' }
        },
         {
             id: 3,
             title: 'DevAdelani portfolio',
             category: 'Frontend',
             description: 'A sleek and modern personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. It showcases my projects, skills, and experience in a visually appealing and responsive design.',
             image: 'https://res.cloudinary.com/dn7lrgxvl/image/upload/v1788518392/devportimg_sgog7y.jpg',
             tags: ['Next.js', 'TypeScript', 'Tailwind CSS' ],
             primaryBtn: { text: 'Live Demo', icon: <FileText size={15} />, href: 'https://devadelani.com.ng' },
             secondaryBtn: { text: 'Code', icon: <Code2 size={15} />, href: 'https://github.com/Adelani14/DevAdelani' }
         },
        // {
        //     id: 4,
        //     title: 'DeployCraft CLI',
        //     category: 'Tools',
        //     description: 'A command-line tool designed to automate zero-downtime deployments across multi-cloud environments with simple YAML config.',
        //     image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800',
        //     tags: ['Rust', 'Bash', 'AWS SDK'],
        //     primaryBtn: { text: 'Install', icon: <Download size={15} />, href: '#' },
        //     secondaryBtn: { text: 'Repo', icon: <FolderGit2 size={15} />, href: '#' }
        // },
        // {
        //     id: 5,
        //     title: 'CipherChat Mobile',
        //     category: 'Full-Stack',
        //     description: 'Engineered a real-time collaborative social platform with end-to-end encryption and a custom-built messaging protocol.',
        //     image: 'https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&fit=crop&q=80&w=800',
        //     tags: ['React Native', 'Socket.io', 'MongoDB'],
        //     primaryBtn: { text: 'App Store', icon: <Smartphone size={15} />, href: '#' },
        //     secondaryBtn: { text: 'Source', icon: <Code2 size={15} />, href: '#' }
        // }
    ];

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen bg-[#050a12] text-slate-300 font-sans selection:bg-blue-500 selection:text-white relative overflow-x-hidden flex flex-col justify-between">

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
                                <div className="relative aspect-[16/9] overflow-hidden bg-slate-900 border-b border-slate-800/80">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                                    />
                                    {/* Category Tag Badge */}
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

                                {/* Card Buttons */}
                                <div className="grid grid-cols-2 gap-3 pt-1">
                                    <a
                                        href={project.primaryBtn.href}
                                        className="bg-[#a5c4ff] hover:bg-blue-300 text-slate-950 font-mono font-medium text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-500/10"
                                    >
                                        {project.primaryBtn.icon}
                                        <span>{project.primaryBtn.text}</span>
                                    </a>

                                    <a
                                        href={project.secondaryBtn.href}
                                        className="bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-mono font-medium text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-all"
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

            {/* Footer Component */}
            <Footer />

        </div>
    );
}