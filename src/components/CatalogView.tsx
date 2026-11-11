import React from 'react';
import { Game, SortOption } from '../types/game';
import { GENRES_LIST, STATUS_LIST } from '../data/games';
import { GameCard } from './GameCard';
import { Search, X, SlidersHorizontal, RotateCcw, Sparkles } from 'lucide-react';

interface CatalogViewProps {
  games: Game[];
  totalGamesCount: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  onSelectGame: (game: Game) => void;
  isWishlisted: (id: string) => boolean;
  onToggleWishlist: (gameId: string, e: React.MouseEvent) => void;
  onResetFilters: () => void;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  games,
  totalGamesCount,
  searchQuery,
  onSearchChange,
  selectedGenre,
  onGenreChange,
  selectedStatus,
  onStatusChange,
  sortBy,
  onSortChange,
  onSelectGame,
  isWishlisted,
  onToggleWishlist,
  onResetFilters,
}) => {
  const hasActiveFilters = searchQuery !== '' || selectedGenre !== 'All' || selectedStatus !== 'All' || sortBy !== 'rating-desc';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 animate-fadeIn">
      
      {/* Catalog Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 uppercase tracking-wider font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Aether Vault Index</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            PC Game Discovery Catalog
          </h1>
          <p className="mt-2 text-sm text-slate-400 max-w-2xl">
            Explore verified PC releases featuring uncapped framerates, high-refresh display calibration, and deep architectural simulations.
          </p>
        </div>

        {/* Total Results Counter */}
        <div className="text-xs font-mono text-slate-400 self-start md:self-auto bg-[#0B1325] px-3 py-1.5 rounded-lg border border-slate-800">
          Showing <span className="text-cyan-400 font-bold">{games.length}</span> of {totalGamesCount} Games
        </div>
      </div>

      {/* Filter & Search Bar Container */}
      <div className="bg-[#0B1325]/80 border border-slate-800/80 rounded-2xl p-4 sm:p-5 mb-8 space-y-4">
        
        {/* Top Filter Row: Search & Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
          
          {/* Search Input */}
          <div className="sm:col-span-6 relative">
            <input
              type="text"
              placeholder="Search by title, developer, tags, synopsis..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-[#070B14] border border-slate-700/80 rounded-xl pl-10 pr-9 py-2.5 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-body"
              aria-label="Filter games by text search"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Status Dropdown */}
          <div className="sm:col-span-3">
            <select
              value={selectedStatus}
              onChange={(e) => onStatusChange(e.target.value)}
              className="w-full bg-[#070B14] border border-slate-700/80 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-400 font-body cursor-pointer"
              aria-label="Filter by release status"
            >
              {STATUS_LIST.map((status) => (
                <option key={status} value={status}>
                  Status: {status}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="sm:col-span-3">
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="w-full bg-[#070B14] border border-slate-700/80 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-400 font-body cursor-pointer"
              aria-label="Sort games"
            >
              <option value="rating-desc">Sort: Highest Rated</option>
              <option value="date-newest">Sort: Newest Releases</option>
              <option value="date-oldest">Sort: Oldest Releases</option>
              <option value="title-asc">Sort: Title (A-Z)</option>
            </select>
          </div>

        </div>

        {/* Genre Filter Segmented Bar */}
        <div className="pt-2 border-t border-slate-800/60 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-mono text-slate-400 shrink-0 mr-1 flex items-center gap-1">
            <SlidersHorizontal className="w-3 h-3 text-cyan-400" />
            Genres:
          </span>

          {GENRES_LIST.map((genre) => {
            const isSelected = selectedGenre === genre;
            return (
              <button
                key={genre}
                onClick={() => onGenreChange(genre)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-cyan-500 text-black shadow-md shadow-cyan-500/25 font-bold'
                    : 'bg-[#070B14] text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-800'
                }`}
                aria-pressed={isSelected}
              >
                {genre}
              </button>
            );
          })}

          {/* Reset Filters Action */}
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="ml-auto text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 shrink-0 px-2.5 py-1 rounded-md hover:bg-purple-950/30 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Filters</span>
            </button>
          )}
        </div>

      </div>

      {/* Games Catalog Grid */}
      {games.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onSelectGame={onSelectGame}
              isWishlisted={isWishlisted(game.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-20 text-center bg-[#0B1325]/50 border border-slate-800 rounded-2xl p-8 max-w-lg mx-auto">
          <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center mx-auto mb-4 text-slate-400">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white font-display">No Games Found</h3>
          <p className="mt-2 text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
            We couldn't find any PC titles matching "{searchQuery}" under the current filters.
          </p>
          <div className="mt-6">
            <button
              onClick={onResetFilters}
              className="px-4 py-2 rounded-lg bg-cyan-500 text-black text-xs font-bold hover:bg-cyan-400 transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
