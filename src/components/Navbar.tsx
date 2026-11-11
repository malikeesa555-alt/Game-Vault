import React, { useState } from 'react';
import { 
  Gamepad2, 
  Search, 
  Heart, 
  Menu, 
  X, 
  Flame, 
  Sparkles, 
  Layers, 
  Info,
  HelpCircle
} from 'lucide-react';

interface NavbarProps {
  currentView: 'home' | 'catalog';
  onNavigate: (view: 'home' | 'catalog', extra?: { genre?: string; sortBy?: string }) => void;
  onOpenWishlist: () => void;
  wishlistCount: number;
  onOpenAbout: () => void;
  onOpenExportGuide: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenWishlist,
  wishlistCount,
  onOpenAbout,
  onOpenExportGuide,
  searchQuery,
  onSearchChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const handleNavClick = (view: 'home' | 'catalog', extra?: { genre?: string; sortBy?: string }) => {
    onNavigate(view, extra);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#070B14]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2.5 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg p-1"
              aria-label="GAMEVAULT Homepage"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600 p-[1.5px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
                <div className="w-full h-full bg-[#070B14] rounded-[10px] flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                </div>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300 font-display whitespace-nowrap">
                  GAME<span className="text-cyan-400">VAULT</span>
                </span>
                <span className="block text-[10px] tracking-widest text-purple-400 font-mono uppercase font-semibold">
                  AETHER TECHNOLOGIES
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300" aria-label="Main Navigation">
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-cyan-400 transition-colors whitespace-nowrap py-1 relative ${
                currentView === 'home' ? 'text-cyan-400 font-semibold' : 'text-slate-300'
              }`}
            >
              Featured
              {currentView === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full" />
              )}
            </button>
            <button
              onClick={() => handleNavClick('catalog')}
              className={`hover:text-cyan-400 transition-colors whitespace-nowrap py-1 relative ${
                currentView === 'catalog' ? 'text-cyan-400 font-semibold' : 'text-slate-300'
              }`}
            >
              All Games
              {currentView === 'catalog' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full" />
              )}
            </button>
            <button
              onClick={() => handleNavClick('catalog', { sortBy: 'rating-desc' })}
              className="hover:text-cyan-400 transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              Top Rated
            </button>
            <button
              onClick={() => handleNavClick('catalog', { genre: 'Cyberpunk' })}
              className="hover:text-cyan-400 transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <Flame className="w-3.5 h-3.5 text-cyan-400" />
              Cyberpunk & Sci-Fi
            </button>
            <button
              onClick={onOpenAbout}
              className="hover:text-cyan-400 transition-colors whitespace-nowrap"
            >
              About Aether
            </button>
          </nav>

          {/* Zone 3: Primary Action & Controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick Search Input (Desktop) */}
            <div className="relative hidden md:block w-52 lg:w-64">
              <input
                type="text"
                placeholder="Search games, genres..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => {
                  if (currentView !== 'catalog') {
                    onNavigate('catalog');
                  }
                }}
                className="w-full bg-[#0D1527] border border-slate-700/80 rounded-lg pl-9 pr-8 py-2 text-xs text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-body"
                aria-label="Search games"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-colors"
              aria-label="Toggle search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Button with Badge */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2.5 text-slate-300 hover:text-purple-300 hover:bg-purple-950/30 rounded-lg border border-transparent hover:border-purple-500/30 transition-all"
              aria-label={`Wishlist with ${wishlistCount} games`}
            >
              <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'text-purple-400 fill-purple-400/30' : 'text-slate-300'}`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-[11px] font-bold flex items-center justify-center font-mono shadow-sm">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => handleNavClick('catalog')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 whitespace-nowrap shrink-0 active:scale-95"
            >
              <Layers className="w-4 h-4" />
              Explore Vault
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Dropdown Bar */}
        {searchOpen && (
          <div className="md:hidden py-3 border-t border-slate-800">
            <div className="relative">
              <input
                type="text"
                placeholder="Search games, genres..."
                value={searchQuery}
                onChange={(e) => {
                  onSearchChange(e.target.value);
                  if (currentView !== 'catalog') onNavigate('catalog');
                }}
                className="w-full bg-[#0D1527] border border-slate-700 rounded-lg pl-9 pr-9 py-2.5 text-sm text-slate-100 placeholder:text-slate-400 focus:outline-none focus:border-cyan-400"
                autoFocus
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800/80 space-y-2 animate-fadeIn">
            <button
              onClick={() => handleNavClick('home')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'home' ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              Featured Showcase
            </button>
            <button
              onClick={() => handleNavClick('catalog')}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'catalog' ? 'bg-cyan-500/10 text-cyan-400 font-semibold' : 'text-slate-300 hover:bg-slate-800/60'
              }`}
            >
              All Games Catalog
            </button>
            <button
              onClick={() => handleNavClick('catalog', { sortBy: 'rating-desc' })}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800/60 flex items-center justify-between"
            >
              <span>Top Rated PC Titles</span>
              <Sparkles className="w-4 h-4 text-purple-400" />
            </button>
            <button
              onClick={() => handleNavClick('catalog', { genre: 'Cyberpunk' })}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800/60 flex items-center justify-between"
            >
              <span>Cyberpunk & Sci-Fi</span>
              <Flame className="w-4 h-4 text-cyan-400" />
            </button>
            <button
              onClick={() => {
                onOpenAbout();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800/60 flex items-center gap-2"
            >
              <Info className="w-4 h-4 text-slate-400" />
              <span>About Aether Technologies</span>
            </button>
            <button
              onClick={() => {
                onOpenExportGuide();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800/60 flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4 text-cyan-400" />
              <span>How to Run & Export</span>
            </button>
            
            <div className="pt-2 border-t border-slate-800">
              <button
                onClick={() => handleNavClick('catalog')}
                className="w-full py-2.5 px-4 text-center text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-md"
              >
                Explore Full PC Catalog
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
