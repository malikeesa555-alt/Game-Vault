import React from 'react';
import { X, Gamepad2, Cpu, Shield, Globe, Award, Sparkles } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="relative max-w-2xl w-full bg-[#080E1C] border border-cyan-500/30 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="about-title"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 p-[1.5px] shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#070B14] rounded-[10px] flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 text-cyan-400" />
            </div>
          </div>
          <div>
            <span className="text-xl font-black text-white font-display tracking-tight">
              GAME<span className="text-cyan-400">VAULT</span>
            </span>
            <span className="block text-xs font-mono text-purple-400 font-semibold tracking-wider uppercase">
              AETHER TECHNOLOGIES
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
          <div>
            <h3 id="about-title" className="text-lg font-bold text-white font-display flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Engineered for the PC Enthusiast
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300">
              GAMEVAULT was conceived by <strong>AETHER TECHNOLOGIES</strong> to solve modern PC gaming discovery. In an era oversaturated with unoptimized ports and fragmented launchers, GAMEVAULT provides an uncompromising benchmark of titles engineered specifically to take advantage of modern graphics architectures, high-refresh OLED displays, and ultra-fast NVMe storage.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#0B1325] border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs font-display">
                <Cpu className="w-4 h-4" />
                Hardware Optimization
              </div>
              <p className="text-xs text-slate-400">
                Every listed title undergoes testing for DirectX 12 Ultimate, Vulkan parity, and uncapped framerate stability.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0B1325] border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-xs font-display">
                <Shield className="w-4 h-4" />
                Player-First Standards
              </div>
              <p className="text-xs text-slate-400">
                Prioritizing DRM-free offline installations, native ultra-wide monitor support, and full Steam Deck verification.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0B1325] border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs font-display">
                <Globe className="w-4 h-4" />
                Independent Publishing
              </div>
              <p className="text-xs text-slate-400">
                Partnering directly with visionary boutique studios pushing real-time simulation and immersive worldbuilding.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0B1325] border border-slate-800 space-y-1.5">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-xs font-display">
                <Award className="w-4 h-4" />
                Aether Lab Certification
              </div>
              <p className="text-xs text-slate-400">
                System requirements independently benchmarked on both modern mainstream and enthusiast PC test benches.
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-800 text-xs text-slate-400">
            For developer submissions, hardware benchmark inquiries, and platform integration, contact the engineering team at <span className="text-cyan-400 font-mono">contact@aethertechnologies.io</span>.
          </div>
        </div>

        {/* Modal Action */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
