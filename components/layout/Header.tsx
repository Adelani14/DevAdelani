"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#050a12]/80 backdrop-blur-md border-b border-slate-800/60">

            <div className="px-6 lg:px-16 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="text-2xl font-black text-white tracking-tight">
                        DevAdelani
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
                    <Link href="/aboutpage" className={pathname === "/aboutpage" ? "text-white border-b-2 border-blue-400 pb-1 font-semibold" : "hover:text-white"}>
                        About
                    </Link>

                    <Link href="/skillpage" className={pathname === "/skillpage" ? "text-white border-b-2 border-blue-400 pb-1 font-semibold" : "hover:text-white"}>
                        Skills
                    </Link>

                    <Link href="/projectpage" className={pathname === "/projectpage" ? "text-white border-b-2 border-blue-400 pb-1 font-semibold" : "hover:text-white"}>
                        Projects
                    </Link>

                    {/* <Link href="/experiencepage" className={pathname === "/experiencepage" ? "text-white border-b-2 border-blue-400 pb-1 font-semibold" : "hover:text-white"}>
                        Experience
                    </Link> */}

                    <Link href="/contactpage" className={pathname === "/contactpage" ? "text-white border-b-2 border-blue-400 pb-1 font-semibold" : "hover:text-white"}>
                        Contact
                    </Link>
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-3">

                    <a
                        href="/contactpage"
                        className="hidden sm:block bg-[#93c5fd] hover:bg-blue-300 text-slate-950 font-mono font-semibold px-5 py-2 rounded-lg text-sm transition-all shadow-lg shadow-blue-500/20"
                    >
                        Contact Me
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>

                </div>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden border-t border-slate-800 bg-[#050a12]">

                    <nav className="flex flex-col text-slate-300">

                        <Link
                            href="/aboutpage"
                            onClick={() => setMenuOpen(false)}
                            className="px-6 py-4 hover:bg-slate-900"
                        >
                            About
                        </Link>

                        <Link
                            href="/skillpage"
                            onClick={() => setMenuOpen(false)}
                            className="px-6 py-4 hover:bg-slate-900"
                        >
                            Skills
                        </Link>

                        <Link
                            href="/projectpage"
                            onClick={() => setMenuOpen(false)}
                            className="px-6 py-4 hover:bg-slate-900"
                        >
                            Projects
                        </Link>

                        <Link
                            href="/experiencepage"
                            onClick={() => setMenuOpen(false)}
                            className="px-6 py-4 hover:bg-slate-900"
                        >
                            Experience
                        </Link>

                        <Link
                            href="/contactpage"
                            onClick={() => setMenuOpen(false)}
                            className="px-6 py-4 hover:bg-slate-900"
                        >
                            Contact
                        </Link>

                        {/* Resume inside mobile menu */}
                        <a
                            href="/resume/ABDULSEMIU_SODEEQ_ADELANI_junior_FullStack_developer__CV.pdf"
                            download
                            className="mx-6 my-4 text-center bg-[#93c5fd] text-slate-900 font-semibold py-3 rounded-lg"
                        >
                            Download Resume
                        </a>

                    </nav>

                </div>
            )}

        </header>
    );
}