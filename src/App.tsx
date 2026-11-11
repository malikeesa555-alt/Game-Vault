import React, { useState, useEffect, useMemo } from 'react';
import { Game, SortOption } from './types/game';
import { SAMPLE_GAMES } from './data/games';
import { filterGames, sortGames, toggleWishlist, isWishlisted } from './utils/gameUtils';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroBanner } from './components/HeroBanner';
import { GameCard } from './components/GameCard';
import { GameDetailPage } from './components/GameDetailPage';
import { CatalogView } from './components/CatalogView';
import { WishlistDrawer } from './components/WishlistDrawer';
import { AboutModal } from './components/AboutModal';
import { ExportGuideModal } from './components/ExportGuideModal';
import { 
  Flame, 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  ShieldCheck, 
  Monitor, 
  Gamepad2, 
  Zap,
  TrendingUp,
  Layers
} from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'catalog'>('home');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  
  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [sortBy, setSortBy] = useState<SortOption>('rating-desc');

  // Wishlist state (persists in localStorage)
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('gamevault_wishlist');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    // Default 1 marquee title wishlisted for instant interactive feedback
    return ['cyberpunk-nights-2154'];
  });

  useEffect(() => {
    try {
      localStorage.setItem('gamevault_wishlist', JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  // Modals & Drawers
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [exportGuideOpen, setExportGuideOpen] = useState(false);

  // Filtered & Sorted Games for Catalog
  const filteredCatalogGames = useMemo(() => {
    const filtered = filterGames(SAMPLE_GAMES, {
      search: searchQuery,
      genre: selectedGenre,
      status: selectedStatus,
    });
    return sortGames(filtered, sortBy);
  }, [searchQuery, selectedGenre, selectedStatus, sortBy]);

  // Curated subsets for Homepage
  const featuredMarqueeGames = useMemo(() => {
    return SAMPLE_GAMES.filter((g) => g.featured);
  }, []);

  const trendingGames = useMemo(() => {
    return SAMPLE_GAMES.filter((g) => g.trending);
  }, []);

  const topRatedGames = useMemo(() => {
    return sortGames(SAMPLE_GAMES, 'rating-desc').slice(0, 4);
  }, []);

  const wishlistGames = useMemo(() => {
    return SAMPLE_GAMES.filter((g) => wishlist.includes(g.id));
  }, [wishlist]);

  // Navigation handlers
  const handleNavigate = (
    view: 'home' | 'catalog', 
    extra?: { genre?: string; sortBy?: string }
  ) => {
    setCurrentView(view);
    setSelectedGame(null);
    if (extra?.genre) {
      setSelectedGenre(extra.genre);
    }
    if (extra?.sortBy) {
      setSortBy(extra.sortBy as SortOption);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectGame = (game: Game) => {
    setSelectedGame(game);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromDetail = () => {
    setSelectedGame(null);
  };

  const handleToggleWishlist = (gameId: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setWishlist((prev) => toggleWishlist(prev, gameId));
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedGenre('All');
    setSelectedStatus('All');
    setSortBy('rating-desc');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070B14] text-slate-100 font-body selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Top Navigation Bar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenWishlist={() => setWishlistOpen(true)}
        wishlistCount={wishlist.length}
        onOpenAbout={() => setAboutOpen(true)}
        onOpenExportGuide={() => setExportGuideOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (currentView !== 'catalog') {
            setCurrentView('catalog');
            setSelectedGame(null);
          }
        }}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {selectedGame ? (
          /* Game Detail Page */
          <GameDetailPage
            game={selectedGame}
            onBack={handleBackFromDetail}
            onSelectGame={handleSelectGame}
            allGames={SAMPLE_GAMES}
            isWishlisted={isWishlisted(wishlist, selectedGame.id)}
            onToggleWishlist={handleToggleWishlist}
          />
        ) : currentView === 'catalog' ? (
          /* Catalog View */
          <CatalogView
            games={filteredCatalogGames}
            totalGamesCount={SAMPLE_GAMES.length}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedGenre={selectedGenre}
            onGenreChange={setSelectedGenre}
            selectedStatus={selectedStatus}
            onStatusChange={setSelectedStatus}
            sortBy={sortBy}
            onSortChange={setSortBy}
            onSelectGame={handleSelectGame}
            isWishlisted={(id) => isWishlisted(wishlist, id)}
            onToggleWishlist={handleToggleWishlist}
            onResetFilters={handleResetFilters}
          />
        ) : (
          /* Homepage View */
          <div className="space-y-16 pb-20">
            {/* Hero Showcase Banner */}
            <HeroBanner
              featuredGames={featuredMarqueeGames}
              onSelectGame={handleSelectGame}
              onExploreCatalog={() => handleNavigate('catalog')}
              isWishlisted={(id) => isWishlisted(wishlist, id)}
              onToggleWishlist={handleToggleWishlist}
            />

            {/* Curated Highlights Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-purple-400 mb-1 font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Aether Hall of Fame</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    Top Rated PC Masterpieces
                  </h2>
                </div>
                <button
                  onClick={() => handleNavigate('catalog', { sortBy: 'rating-desc' })}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 self-start sm:self-auto group"
                >
                  <span>View All Top Rated</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {topRatedGames.map((game) => (
                  <GameCard
                    key={game.id}
                    game={game}
                    onSelectGame={handleSelectGame}
                    isWishlisted={isWishlisted(wishlist, game.id)}
                    onToggleWishlist={handleToggleWishlist}
                  />
                ))}
              </div>
            </section>

            {/* Fast-Track Genre Explorer */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-[#0B1325]/70 border border-slate-800 rounded-2xl p-6 sm:p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white font-display">
                      Explore By PC Genre Specialization
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Targeted engineering filters designed for high-fidelity PC game styles
                    </p>
                  </div>
                  <button
                    onClick={() => handleNavigate('catalog')}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 self-start md:self-auto"
                  >
                    <span>Full Genre Taxonomy</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {[
                    { name: 'Cyberpunk', count: '3 Titles', icon: Zap },
                    { name: 'Action RPG', count: '4 Titles', icon: Flame },
                    { name: 'Space Sim', count: '2 Titles', icon: Monitor },
                    { name: 'Dark Fantasy', count: '2 Titles', icon: Sparkles },
                    { name: 'Tactical RTS', count: '3 Titles', icon: Cpu },
                    { name: 'Stealth Action', count: '2 Titles', icon: ShieldCheck },
                  ].map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <button
                        key={cat.name}
                        onClick={() => handleNavigate('catalog', { genre: cat.name })}
                        className="p-3.5 rounded-xl bg-[#070B14] border border-slate-800/80 hover:border-cyan-500/50 hover:bg-[#0E172E] text-left transition-all duration-200 group"
                      >
                        <Icon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform mb-2" />
                        <div className="text-xs font-bold text-white group-hover:text-cyan-300 font-display">
                          {cat.name}
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                          {cat.count}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Trending & Upcoming Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1 font-semibold uppercase tracking-wider">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Active In Vault</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                    Trending PC Releases & Previews
                  </h2>
                </div>
                <button
                  onClick={() => handleNavigate('catalog')}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 self-start sm:self-auto group"
                >
                  <span>Explore Vault Catalog</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {trendingGames.slice(0, 3).map((game) => (
                  <GameCard
                    key={game.id}
                    game={game}
                    onSelectGame={handleSelectGame}
                    isWishlisted={isWishlisted(wishlist, game.id)}
                    onToggleWishlist={handleToggleWishlist}
                  />
                ))}
              </div>
            </section>

            {/* Aether Technologies Hardware Certification Banner */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#0C152A] via-[#0E1A38] to-[#150F2C] border border-cyan-500/30 p-8 sm:p-12 shadow-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10 max-w-2xl space-y-4">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                    <Cpu className="w-4 h-4" />
                    <span>Aether Hardware Lab Standards</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                    PC Gaming Without Compromise.
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Every title in GAMEVAULT is vetted for uncapped framerate stability, ultra-wide aspect ratios, low shader-compilation stutter, and verified Steam Deck compatibility.
                  </p>

                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => handleNavigate('catalog')}
                      className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition-all shadow-lg shadow-cyan-500/20"
                    >
                      Explore Verified Games
                    </button>
                    <button
                      onClick={() => setExportGuideOpen(true)}
                      className="px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-semibold transition-all"
                    >
                      Read Run & Export Guide
                    </button>
                  </div>
                </div>
              </div>
            </section>

          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenAbout={() => setAboutOpen(true)}
        onOpenExportGuide={() => setExportGuideOpen(true)}
      />

      {/* Slide-Over Wishlist Drawer */}
      <WishlistDrawer
        isOpen={wishlistOpen}
        onClose={() => setWishlistOpen(false)}
        wishlistGames={wishlistGames}
        onSelectGame={handleSelectGame}
        onRemoveFromWishlist={(id) => handleToggleWishlist(id)}
        onExploreCatalog={() => handleNavigate('catalog')}
      />

      {/* About Aether Technologies Modal */}
      <AboutModal
        isOpen={aboutOpen}
        onClose={() => setAboutOpen(false)}
      />

      {/* How to Run & Export Modal */}
      <ExportGuideModal
        isOpen={exportGuideOpen}
        onClose={() => setExportGuideOpen(false)}
      />

    </div>
  );
}
