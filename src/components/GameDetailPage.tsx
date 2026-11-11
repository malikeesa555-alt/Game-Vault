import React, { useState } from 'react';
import { Game } from '../types/game';
import { 
  ArrowLeft, 
  Heart, 
  Share2, 
  Star, 
  Monitor, 
  Cpu, 
  HardDrive, 
  Calendar, 
  Building2, 
  Check, 
  Sparkles,
  Layers,
  Copy,
  CheckCircle2,
  Tv
} from 'lucide-react';
import { formatReleaseDate } from '../utils/gameUtils';
import { GameCard } from './GameCard';

interface GameDetailPageProps {
  game: Game;
  onBack: () => void;
  onSelectGame: (game: Game) => void;
  allGames: Game[];
  isWishlisted: boolean;
  onToggleWishlist: (gameId: string) => void;
}

export const GameDetailPage: React.FC<GameDetailPageProps> = ({
  game,
  onBack,
  onSelectGame,
  allGames,
  isWishlisted,
  onToggleWishlist,
}) => {
  const [activeSpecTab, setActiveSpecTab] = useState<'minimum' | 'recommended'>('recommended');
  const [copied, setCopied] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);

  // Find 3 related games by matching genres
  const relatedGames = allGames
    .filter(g => g.id !== game.id && (g.primaryGenre === game.primaryGenre || g.genres.some(genre => game.genres.includes(genre))))
    .slice(0, 3);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <article className="min-h-screen bg-[#070B14] pb-24 animate-fadeIn">
      {/* Back Navigation Bar */}
      <div className="bg-[#0B1325]/90 border-b border-slate-800/80 sticky top-18 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-300 hover:text-cyan-400 transition-colors py-1 px-2 -ml-2 rounded-lg hover:bg-slate-800/60"
            aria-label="Return to previous view"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Discovery</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-xs text-slate-300 hover:text-white hover:border-slate-600 transition-all"
              aria-label="Copy game link"
            >
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied!' : 'Share'}</span>
            </button>

            <button
              onClick={() => onToggleWishlist(game.id)}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
                isWishlisted
                  ? 'bg-purple-600/90 text-white border-purple-500 shadow-md shadow-purple-600/30'
                  : 'bg-slate-900 border-slate-700/80 text-slate-300 hover:text-white hover:border-purple-500/40'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-white' : ''}`} />
              <span>{isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <div className="relative w-full overflow-hidden bg-[#0A1020] border-b border-slate-800/80">
        <div className="absolute inset-0 z-0">
          <img
            src={game.heroBackdrop || game.artwork}
            alt={game.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070B14] via-[#070B14]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Key Metadata & Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
                <span className="text-cyan-400 font-semibold uppercase tracking-wider font-mono">
                  {game.primaryGenre}
                </span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Release: {formatReleaseDate(game.releaseDate)}</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-purple-300 font-mono">{game.status}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight font-display text-balance">
                {game.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
                {game.tagline}
              </p>

              {/* Score Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 border border-slate-700/80 text-white">
                  <Star className="w-4 h-4 text-cyan-400 fill-cyan-400" />
                  <span className="text-base font-bold">{game.rating}</span>
                  <span className="text-slate-400 font-sans text-xs">Critic Score</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 border border-slate-700/80 text-white">
                  <span className="text-base font-bold text-purple-400">{game.userScore}</span>
                  <span className="text-slate-400 font-sans text-xs">Player Rating</span>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-cyan-500/30 text-cyan-300 font-medium">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>DX12 Ultimate Verified</span>
                </div>
              </div>

              {/* Studio & Publisher */}
              <div className="pt-2 flex items-center gap-4 text-xs text-slate-400">
                <div>
                  Developer: <span className="text-slate-200 font-medium">{game.developer}</span>
                </div>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <div>
                  Publisher: <span className="text-slate-200 font-medium">{game.publisher}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Art Showcase Frame */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl shadow-cyan-950/40 bg-[#0B1325] group">
                <img
                  src={game.artwork}
                  alt={game.title}
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-4">
                  <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                    <Tv className="w-4 h-4 text-cyan-400" />
                    Ultra 4K Native Assets
                  </span>
                  <button
                    onClick={() => setPreviewOpen(true)}
                    className="px-3 py-1.5 rounded-lg bg-cyan-500/90 hover:bg-cyan-400 text-black text-xs font-bold flex items-center gap-1.5 shadow-md shadow-cyan-500/30 transition-all"
                  >
                    <span>Inspect Art</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Column (8 cols): Overview, Features, Specs */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview / Synopsis */}
            <section className="bg-[#0B1325]/70 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white font-display mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Game Synopsis & World Overview
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {game.synopsis}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-800 text-xs sm:text-sm text-slate-400 leading-relaxed space-y-3">
                <p>{game.detailedDescription}</p>
              </div>

              {/* Tags Cloud */}
              <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
                <span className="text-xs text-slate-400 font-mono mr-2">Tags:</span>
                {game.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded bg-[#070B14] border border-slate-800 text-slate-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Key Gameplay Features */}
            <section className="bg-[#0B1325]/70 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
              <h2 className="text-xl font-bold text-white font-display mb-5 flex items-center gap-2">
                <Layers className="w-5 h-5 text-purple-400" />
                Key PC Innovations & Features
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {game.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[#070B14]/80 border border-slate-800/60"
                  >
                    <div className="w-5 h-5 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Hardware Specifications Module */}
            <section className="bg-[#0B1325]/70 border border-slate-800/80 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white font-display flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-cyan-400" />
                    PC System Requirements
                  </h2>
                  <p className="text-xs text-slate-400 mt-1 font-mono">
                    Benchmarked and calibrated by Aether Technologies Hardware Lab
                  </p>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 p-1 bg-[#070B14] rounded-lg border border-slate-800 self-start sm:self-auto">
                  <button
                    onClick={() => setActiveSpecTab('minimum')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                      activeSpecTab === 'minimum'
                        ? 'bg-slate-800 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Minimum
                  </button>
                  <button
                    onClick={() => setActiveSpecTab('recommended')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                      activeSpecTab === 'recommended'
                        ? 'bg-cyan-500 text-black shadow-sm font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Recommended (60+ FPS)
                  </button>
                </div>
              </div>

              {/* Active Specs Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(() => {
                  const currentSpec = game.specs[activeSpecTab];
                  return (
                    <>
                      <div className="p-4 rounded-xl bg-[#070B14]/80 border border-slate-800/80 space-y-1">
                        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                          Operating System
                        </span>
                        <p className="text-sm font-semibold text-slate-200">{currentSpec.os}</p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#070B14]/80 border border-slate-800/80 space-y-1">
                        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                          Processor (CPU)
                        </span>
                        <p className="text-sm font-semibold text-slate-200">{currentSpec.cpu}</p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#070B14]/80 border border-slate-800/80 space-y-1">
                        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                          Graphics Card (GPU)
                        </span>
                        <p className="text-sm font-semibold text-cyan-300">{currentSpec.gpu}</p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#070B14]/80 border border-slate-800/80 space-y-1">
                        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                          Memory (RAM)
                        </span>
                        <p className="text-sm font-semibold text-slate-200">{currentSpec.ram}</p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#070B14]/80 border border-slate-800/80 space-y-1">
                        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                          Storage Requirement
                        </span>
                        <p className="text-sm font-semibold text-slate-200 flex items-center gap-1.5">
                          <HardDrive className="w-4 h-4 text-purple-400" />
                          {currentSpec.storage}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-[#070B14]/80 border border-slate-800/80 space-y-1">
                        <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                          DirectX API
                        </span>
                        <p className="text-sm font-semibold text-slate-200">{currentSpec.directx}</p>
                      </div>
                    </>
                  );
                })()}
              </div>
            </section>
          </div>

          {/* Sidebar Column (4 cols): Buy/Wishlist Card, Studio Info, Quick Facts */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Contiguous Purchase / Wishlist Module */}
            <div className="bg-[#0B1325] border border-cyan-500/30 rounded-2xl p-6 shadow-xl shadow-cyan-950/20 sticky top-36">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-mono text-slate-400">PC Standard Edition</span>
                <span className="text-2xl font-black text-white font-mono">{game.price}</span>
              </div>

              <div className="py-4 space-y-3">
                <button
                  onClick={() => onToggleWishlist(game.id)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    isWishlisted
                      ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-600/30'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
                  <span>{isWishlisted ? 'Saved to Your Vault' : 'Add to Wishlist'}</span>
                </button>

                <button
                  onClick={() => alert(`Pre-order / Purchase gateway for ${game.title} will open during the Aether PC Launch event.`)}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-xs font-semibold text-slate-200 transition-colors"
                >
                  Acquire on Aether Vault
                </button>
              </div>

              {/* Platform & Verification Checklist */}
              <div className="pt-4 border-t border-slate-800 space-y-2.5 text-xs text-slate-300">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Platform</span>
                  <span className="font-semibold text-white">Windows 10 / 11 (PC)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">DRM Architecture</span>
                  <span className="font-semibold text-emerald-400">DRM-Free / Offline Capable</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Controller Support</span>
                  <span className="font-semibold text-white">Xbox, DualSense, Steam Deck</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Cloud Saves</span>
                  <span className="font-semibold text-cyan-400">Aether Sync Supported</span>
                </div>
              </div>
            </div>

            {/* Studio Dossier */}
            <div className="bg-[#0B1325]/70 border border-slate-800/80 rounded-2xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-white font-display flex items-center gap-2">
                <Building2 className="w-4 h-4 text-cyan-400" />
                Developer Dossier
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                <strong className="text-slate-200">{game.developer}</strong> is an independent partner studio working in direct collaboration with Aether Technologies to establish new standards for PC gaming fidelity.
              </p>
              <div className="pt-2 text-[11px] font-mono text-slate-500">
                Published globally by {game.publisher}.
              </div>
            </div>

          </div>

        </div>

        {/* Related Games Carousel / Grid */}
        {relatedGames.length > 0 && (
          <section className="mt-20 pt-10 border-t border-slate-800/80">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white font-display">
                  More in {game.primaryGenre} & Sci-Fi
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Hand-picked PC titles with comparable gameplay systems
                </p>
              </div>
              <button
                onClick={onBack}
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
              >
                <span>View Full Catalog</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedGames.map((relGame) => (
                <GameCard
                  key={relGame.id}
                  game={relGame}
                  onSelectGame={onSelectGame}
                  isWishlisted={false}
                  onToggleWishlist={() => onToggleWishlist(relGame.id)}
                />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Fullscreen Art Preview Modal */}
      {previewOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setPreviewOpen(false)}
        >
          <div className="relative max-w-5xl w-full bg-[#070B14] border border-cyan-500/50 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={game.artwork}
              alt={game.title}
              referrerPolicy="no-referrer"
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="p-4 bg-[#0B1325] flex items-center justify-between">
              <span className="text-sm font-bold text-white font-display">{game.title} — Key Art</span>
              <button
                onClick={() => setPreviewOpen(false)}
                className="px-4 py-1.5 rounded-lg bg-slate-800 text-xs font-semibold text-white hover:bg-slate-700"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
};
