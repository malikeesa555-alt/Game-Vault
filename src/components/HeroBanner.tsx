import React, { useState, useEffect } from 'react';
import { Game } from '../types/game';
import { 
  Play, 
  Info, 
  Heart, 
  Star, 
  Cpu, 
  Calendar, 
  ChevronRight, 
  ChevronLeft,
  Sparkles,
  Layers
} from 'lucide-react';
import { formatReleaseDate } from '../utils/gameUtils';

interface HeroBannerProps {
  featuredGames: Game[];
  onSelectGame: (game: Game) => void;
  onExploreCatalog: () => void;
  isWishlisted: (id: string) => boolean;
  onToggleWishlist: (gameId: string) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  featuredGames,
  onSelectGame,
  onExploreCatalog,
  isWishlisted,
  onToggleWishlist,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-cycle through featured games every 8 seconds unless interacted with
  useEffect(() => {
    if (featuredGames.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredGames.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [featuredGames.length]);

  const currentGame = featuredGames[activeIndex] || featuredGames[0];
  if (!currentGame) return null;

  const wishlisted = isWishlisted(currentGame.id);

  return (
    <section className="relative w-full overflow-hidden bg-[#070B14] border-b border-slate-800/80">
      {/* Background Cinematic Art with Deep Midnight Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentGame.artwork}
          alt={currentGame.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.4] transition-all duration-700 scale-105"
        />
        {/* Layered Gradients: Midnight Navy Vignette & Accent Glows */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#070B14] via-[#070B14]/90 to-transparent" />
        
        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          
          {/* Eyebrow Kicker */}
          <div className="flex items-center gap-2.5 text-xs font-mono text-cyan-400 mb-4 tracking-wider uppercase font-semibold">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              Aether Vault Spotlight
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-300">{currentGame.primaryGenre}</span>
          </div>

          {/* Headline Display */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight font-display leading-[1.08] text-balance">
            {currentGame.title}
          </h1>

          {/* Subtitle / Tagline */}
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
            {currentGame.tagline}
          </p>

          {/* Metadata Row: Rating, Release Date, Developer */}
          <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/90 border border-slate-700/80 text-white font-mono font-bold">
              <Star className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
              <span>{currentGame.rating}/100</span>
              <span className="text-slate-500 text-xs font-normal font-sans ml-1">Rating</span>
            </div>
            
            <div className="flex items-center gap-1.5 font-mono text-slate-300">
              <Calendar className="w-4 h-4 text-slate-500" />
              <span>{formatReleaseDate(currentGame.releaseDate)}</span>
            </div>

            <span className="hidden sm:inline text-slate-700">·</span>

            <div className="text-slate-300">
              Dev: <span className="text-slate-200 font-medium">{currentGame.developer}</span>
            </div>

            <span className="hidden sm:inline text-slate-700">·</span>

            <div className="flex items-center gap-1.5 text-cyan-300 font-mono text-xs">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>PC Benchmark Edition</span>
            </div>
          </div>

          {/* Interactive CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onSelectGame(currentGame)}
              className="px-6 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 flex items-center gap-2 group active:scale-95"
            >
              <Info className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>View Specs & Overview</span>
            </button>

            <button
              onClick={onExploreCatalog}
              className="px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-cyan-500/40 rounded-xl backdrop-blur-md transition-all duration-200 flex items-center gap-2 active:scale-95"
            >
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Browse 2026 Catalog</span>
            </button>

            <button
              onClick={() => onToggleWishlist(currentGame.id)}
              className={`p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-center ${
                wishlisted
                  ? 'bg-purple-600/90 text-white border-purple-500 shadow-md shadow-purple-600/30'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border-slate-700/80 hover:border-purple-500/40 hover:bg-slate-800'
              }`}
              aria-label={wishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
            >
              <Heart className={`w-5 h-5 ${wishlisted ? 'fill-white' : ''}`} />
            </button>
          </div>
        </div>

        {/* Carousel Thumbnail Navigation Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span>FEATURED SELECTION</span>
            <span className="text-slate-600">[{activeIndex + 1}/{featuredGames.length}]</span>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {featuredGames.map((game, idx) => (
              <button
                key={game.id}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-3 p-2 rounded-lg border transition-all duration-200 text-left shrink-0 ${
                  idx === activeIndex
                    ? 'bg-slate-800/90 border-cyan-400 shadow-sm shadow-cyan-400/20 ring-1 ring-cyan-400'
                    : 'bg-[#0B1325]/70 border-slate-800/80 hover:border-slate-700 opacity-70 hover:opacity-100'
                }`}
                aria-label={`Show ${game.title}`}
              >
                <img
                  src={game.artwork}
                  alt={game.title}
                  referrerPolicy="no-referrer"
                  className="w-12 h-8 object-cover rounded"
                />
                <div className="pr-2">
                  <div className="text-xs font-bold text-white font-display line-clamp-1 max-w-[140px]">
                    {game.title}
                  </div>
                  <div className="text-[10px] text-cyan-400 font-mono">
                    {game.primaryGenre}
                  </div>
                </div>
              </button>
            ))}

            <div className="flex items-center gap-1 pl-2">
              <button
                onClick={() => setActiveIndex((prev) => (prev - 1 + featuredGames.length) % featuredGames.length)}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Previous featured game"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveIndex((prev) => (prev + 1) % featuredGames.length)}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
                aria-label="Next featured game"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
