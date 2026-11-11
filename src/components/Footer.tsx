import React from 'react';
import { Gamepad2, Cpu, ShieldCheck, Terminal, ExternalLink, Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: 'home' | 'catalog', extra?: { genre?: string; sortBy?: string }) => void;
  onOpenAbout: () => void;
  onOpenExportGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenAbout,
  onOpenExportGuide,
}) => {
  return (
    <footer className="w-full bg-[#050810] border-t border-slate-800/80 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 p-[1.5px] shadow-md shadow-cyan-500/20">
                <div className="w-full h-full bg-[#070B14] rounded-[10px] flex items-center justify-center">
                  <Gamepad2 className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <div>
                <span className="text-lg font-bold tracking-wider text-white font-display">
                  GAME<span className="text-cyan-400">VAULT</span>
                </span>
                <span className="block text-[10px] tracking-widest text-purple-400 font-mono uppercase font-semibold">
                  AETHER TECHNOLOGIES
                </span>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Engineered by Aether Technologies as the premier PC gaming discovery and hardware benchmarking index. Curating titles that redefine graphical fidelity, real-time physics, and responsive mechanics.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-300">
              <span className="flex items-center gap-1.5 text-cyan-400 font-mono">
                <Cpu className="w-3.5 h-3.5" />
                DX12 & Vulkan Verified
              </span>
              <span className="text-slate-600">·</span>
              <span className="flex items-center gap-1.5 text-purple-400 font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                No DRM Bloat
              </span>
            </div>
          </div>

          {/* Column 1: Discovery */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 font-display">
              Discovery
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Featured Showcases
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Complete PC Catalog
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog', { sortBy: 'rating-desc' })}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Highest Rated Masterpieces
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog', { sortBy: 'date-newest' })}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  New & Upcoming Releases
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Genres */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 font-display">
              Genres & Tags
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('catalog', { genre: 'Action RPG' })}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Action RPG
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog', { genre: 'Cyberpunk' })}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Cyberpunk & Dystopia
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog', { genre: 'Sci-Fi' })}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Hard Sci-Fi & Space Sim
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog', { genre: 'Dark Fantasy' })}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Dark Fantasy & Souls-like
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('catalog', { genre: 'Tactical RTS' })}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Tactical RTS & Mecha
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Aether Technologies & Dev */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 font-display">
              Architecture & Export
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={onOpenAbout}
                  className="hover:text-cyan-400 transition-colors text-left flex items-center gap-1.5"
                >
                  <span>About Aether Tech</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenExportGuide}
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-left flex items-center gap-1.5"
                >
                  <Terminal className="w-3 h-3" />
                  <span>How to Run & Export</span>
                </button>
              </li>
              <li>
                <span className="text-slate-500 block pt-1">
                  Engineered with React 19, Tailwind CSS v4 & TypeScript.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Standards */}
        <div className="mt-12 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© 2026 AETHER TECHNOLOGIES INC. All rights reserved.</span>
            <span aria-hidden="true">·</span>
            <span>GAMEVAULT Platform v1.2</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition-colors cursor-pointer" onClick={onOpenAbout}>Privacy Policy</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer" onClick={onOpenAbout}>Hardware Benchmarking Terms</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer" onClick={onOpenExportGuide}>Deployment Docs</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
