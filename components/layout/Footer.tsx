export default function Footer() {
    return (
        <footer className="border-t border-slate-800/80 mt-24 py-12 px-6 lg:px-16 bg-[#050a14]">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center md:text-left">
                    <div className="text-xl font-black text-white tracking-tight">DevAdelani</div>
                    <p className="font-mono text-xs text-slate-500">
                        &copy; 2026 DevAdelani. Designed with purpose. Built with code.

                    </p>
                </div>

                <nav className="flex flex-wrap justify-center gap-8 font-mono text-xs text-slate-400">
                    <a href="/aboutpage" className="hover:text-white transition-colors">About</a>
                    <a href="/projectpage" className="hover:text-white transition-colors">Projects</a>
                    {/* <a href="/experiencepage" className="hover:text-white transition-colors">Experience</a> */}
                    <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                </nav>
            </div>
        </footer>
    );
}
