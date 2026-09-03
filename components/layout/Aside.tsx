import { Code2, Share2, MessageSquare } from 'lucide-react';

export default function Aside() {
    return (
        <aside className="fixed hidden md:block left-0 top-1/2 -translate-y-1/2 z-40 bg-[#0c1629]/80 backdrop-blur-md border border-slate-800/80 rounded-r-2xl p-3 flex flex-col items-center gap-6 shadow-2xl">
            <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase [writing-mode:vertical-lr] rotate-180 font-bold my-1">
                Connect
            </span>
            <div className="h-px w-6 bg-slate-800"></div>
            <a href="https://github.com/Adelani14" className="text-slate-400 hover:text-blue-400 transition-colors p-1">
                <Code2 size={18} />
            </a>
            <a href="https://www.linkedin.com/in/abdulsemiu-sodeeq-adelani-209330345" className="text-slate-400 hover:text-blue-400 transition-colors p-1">
                <Share2 size={18} />
            </a>
            <a href="https://wa.me/2349163735928" className="text-slate-400 hover:text-blue-400 transition-colors p-1">
                <MessageSquare size={18} />
            </a>
        </aside>
    );
}
