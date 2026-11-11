import React, { useState } from 'react';
import { X, Terminal, Copy, CheckCircle2, Play, Package, ShieldCheck, Check } from 'lucide-react';

interface ExportGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportGuideModal: React.FC<ExportGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const copyCode = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const steps = [
    {
      title: '1. Local Development',
      cmd: 'npm install\nnpm run dev',
      desc: 'Starts the Vite development server on port 3000 with Hot Module Reloading.'
    },
    {
      title: '2. Run Fast-Feedback Unit Tests',
      cmd: 'npx --yes tsx --test src/utils/gameUtils.test.ts',
      desc: 'Executes the fast deterministic test suite for search, filtering, and wishlist logic.'
    },
    {
      title: '3. Production Build & Bundling',
      cmd: 'npm run build',
      desc: 'Bundles the application into optimized static assets under the /dist directory.'
    },
    {
      title: '4. Preview Built App',
      cmd: 'npm run preview',
      desc: 'Locally serves the compiled production build to verify assets and performance.'
    },
    {
      title: '5. Export & Deployment Options',
      cmd: '# Deploy to Vercel, Netlify, Cloud Run, or GitHub Pages\n# Upload the contents of the /dist folder to any static hosting provider',
      desc: 'GAMEVAULT is a production-grade single page application (SPA) that can be hosted on any static host, CDN, or Docker container with zero server dependencies.'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
      <div 
        className="relative max-w-2xl w-full bg-[#080E1C] border border-cyan-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="export-title"
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <h2 id="export-title" className="text-xl font-bold text-white font-display">
              Run & Export Guide
            </h2>
            <span className="text-xs font-mono text-cyan-400">
              GAMEVAULT by AETHER TECHNOLOGIES
            </span>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm">
          {steps.map((step, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-[#0B1325] border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-200">{step.title}</span>
                <button
                  onClick={() => copyCode(step.cmd, idx)}
                  className="flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 transition-colors px-2 py-0.5 rounded bg-[#070B14]"
                >
                  {copiedIndex === idx ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-2.5 rounded-lg bg-[#070B14] text-cyan-300 font-mono text-xs overflow-x-auto border border-slate-900">
                {step.cmd}
              </pre>
              <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};
