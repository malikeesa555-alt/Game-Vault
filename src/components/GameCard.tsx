import React from 'react';
import { Game } from '../types/game';
import { Heart, Monitor, Calendar, Check, Star } from 'lucide-react';
import { formatReleaseDate } from '../utils/gameUtils';

interface GameCardProps {
  game: Game;
  onSelectGame: (game: Game) => void;
  isWishlisted: boolean;
  onToggleWishlist: (gameId: string, e: React.MouseEvent) => void;
}

export const GameCard: React.FC<GameCardProps> = ({
  game,
  onSelectGame,
  isWishlisted,
  onToggleWishlist,
}) => {
  return (
    <div
      onClick={() => onSelectGame(game)}
      className="group relative bg-[#0B1325] border border-slate-800/80 hover:border-cyan-500/50 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 cursor-pointer flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelectGame(game);
        }
      }}
      aria-label={`View details for ${game.title}`}
    >
      {/* Artwork Container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#070B14]">
        <img
          src={game.artwork}
          alt={game.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Ambient Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1325] via-transparent to-black/30 pointer-events-none" />

        {/* Wishlist Button in Top-Right */}
        <button
          onClick={(e) => onToggleWishlist(game.id, e)}
          className={`absolute top-3 right-3 p-2 rounded-lg backdrop-blur-md transition-all duration-200 z-10 ${
            isWishlisted
              ? 'bg-purple-600/90 text-white shadow-md shadow-purple-600/40'
              : 'bg-black/60 text-slate-300 hover:text-white hover:bg-black/80'
          }`}
          aria-label={isWishlisted ? `Remove ${game.title} from wishlist` : `Add ${game.title} to wishlist`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
        </button>

        {/* Rating Score Top-Left */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md border border-slate-700/60 text-xs font-mono font-bold text-white shadow-sm">
          <Star className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400" />
          <span>{game.rating}</span>
        </div>

        {/* Status indicator bottom right */}
        {game.status !== 'Available Now' && (
          <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded text-[11px] font-mono font-medium tracking-wide bg-purple-950/80 border border-purple-500/40 text-purple-300 backdrop-blur-sm">
            {game.status}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata: Genre · Release Date */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-1.5 font-medium">
            <span className="text-cyan-400 font-semibold">{game.primaryGenre}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3 text-slate-500" />
              {formatReleaseDate(game.releaseDate)}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1 font-display">
            {game.title}
          </h3>

          {/* Tagline */}
          <p className="mt-1.5 text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {game.tagline}
          </p>
        </div>

        {/* Bottom Specs and Action Strip */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <span className="flex items-center gap-1 text-[11px] font-mono text-slate-300">
              <Monitor className="w-3 h-3 text-cyan-400" />
              PC DX12
            </span>
            {game.deckVerified && (
              <>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-0.5">
                  <Check className="w-3 h-3" /> Deck
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono font-semibold text-slate-200">
              {game.price}
            </span>
            <span className="text-[11px] font-semibold text-cyan-400 group-hover:translate-x-0.5 transition-transform">
              Details &rarr;
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
