import React from 'react';
import { Game } from '../types/game';
import { X, Heart, Trash2, ArrowRight } from 'lucide-react';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistGames: Game[];
  onSelectGame: (game: Game) => void;
  onRemoveFromWishlist: (gameId: string) => void;
  onExploreCatalog: () => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistGames,
  onSelectGame,
  onRemoveFromWishlist,
  onExploreCatalog,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#080E1C] border-l border-slate-800 shadow-2xl flex flex-col">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-purple-950 border border-purple-500/40 text-purple-400 flex items-center justify-center">
                <Heart className="w-4 h-4 fill-purple-400" />
              </div>
              <div>
                <h2 className="text-base font-bold text-white font-display">
                  Your Vault Wishlist
                </h2>
                <span className="text-xs font-mono text-slate-400">
                  {wishlistGames.length} {wishlistGames.length === 1 ? 'game bookmarked' : 'games bookmarked'}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
              aria-label="Close wishlist drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {wishlistGames.length > 0 ? (
              wishlistGames.map((game) => (
                <div
                  key={game.id}
                  className="group relative bg-[#0B1325] border border-slate-800 hover:border-purple-500/40 rounded-xl p-3 flex gap-3 transition-all"
                >
                  <img
                    src={game.artwork}
                    alt={game.title}
                    referrerPolicy="no-referrer"
                    className="w-20 h-16 object-cover rounded-lg shrink-0 cursor-pointer"
                    onClick={() => {
                      onSelectGame(game);
                      onClose();
                    }}
                  />

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] font-mono text-cyan-400 uppercase">
                          {game.primaryGenre}
                        </span>
                        <span className="text-xs font-mono font-semibold text-slate-200">
                          {game.price}
                        </span>
                      </div>
                      <h4
                        onClick={() => {
                          onSelectGame(game);
                          onClose();
                        }}
                        className="text-xs font-bold text-white hover:text-cyan-300 transition-colors line-clamp-1 cursor-pointer font-display"
                      >
                        {game.title}
                      </h4>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => {
                          onSelectGame(game);
                          onClose();
                        }}
                        className="text-[11px] text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
                      >
                        <span>View Specs</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>

                      <button
                        onClick={() => onRemoveFromWishlist(game.id)}
                        className="p-1 text-slate-500 hover:text-red-400 transition-colors"
                        aria-label={`Remove ${game.title} from wishlist`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-20 text-center">
                <div className="w-12 h-12 rounded-2xl bg-[#0B1325] border border-slate-800 text-slate-500 flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-300 font-display">
                  No Saved Games Yet
                </h3>
                <p className="mt-1 text-xs text-slate-500 max-w-xs mx-auto">
                  Click the heart icon on any game card to bookmark it in your personal vault.
                </p>
                <div className="mt-6">
                  <button
                    onClick={() => {
                      onExploreCatalog();
                      onClose();
                    }}
                    className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition-colors"
                  >
                    Browse PC Games
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Drawer Footer */}
          {wishlistGames.length > 0 && (
            <div className="p-6 border-t border-slate-800/80 bg-[#070B14]">
              <button
                onClick={() => {
                  onExploreCatalog();
                  onClose();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-600 text-slate-200 text-xs font-semibold transition-colors"
              >
                Continue Discovering
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
