import { Game, FilterState, SortOption } from '../types/game';

/**
 * Checks if a game matches a search query across title, developer, tags, genres, and synopsis.
 */
export function searchMatch(game: Game, query: string): boolean {
  if (!query || !query.trim()) return true;
  const q = query.trim().toLowerCase();

  return (
    game.title.toLowerCase().includes(q) ||
    game.developer.toLowerCase().includes(q) ||
    game.publisher.toLowerCase().includes(q) ||
    game.primaryGenre.toLowerCase().includes(q) ||
    game.genres.some(genre => genre.toLowerCase().includes(q)) ||
    game.tags.some(tag => tag.toLowerCase().includes(q)) ||
    game.synopsis.toLowerCase().includes(q)
  );
}

/**
 * Filters a list of games based on active search, genre, and status filters.
 */
export function filterGames(games: Game[], filter: Partial<FilterState>): Game[] {
  return games.filter(game => {
    // Search match
    if (filter.search && !searchMatch(game, filter.search)) {
      return false;
    }

    // Genre match
    if (filter.genre && filter.genre !== 'All') {
      const hasGenre = game.genres.includes(filter.genre) || game.primaryGenre === filter.genre;
      if (!hasGenre) return false;
    }

    // Status match
    if (filter.status && filter.status !== 'All') {
      if (game.status !== filter.status) return false;
    }

    return true;
  });
}

/**
 * Sorts games by the specified SortOption.
 */
export function sortGames(games: Game[], sortBy: SortOption = 'rating-desc'): Game[] {
  const sorted = [...games];

  switch (sortBy) {
    case 'rating-desc':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'date-newest':
      return sorted.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
    case 'date-oldest':
      return sorted.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());
    case 'title-asc':
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return sorted;
  }
}

/**
 * Toggles a game ID in an array of wishlist IDs.
 */
export function toggleWishlist(wishlist: string[], gameId: string): string[] {
  if (wishlist.includes(gameId)) {
    return wishlist.filter(id => id !== gameId);
  }
  return [...wishlist, gameId];
}

/**
 * Checks if a game ID is present in wishlist.
 */
export function isWishlisted(wishlist: string[], gameId: string): boolean {
  return wishlist.includes(gameId);
}

/**
 * Formats ISO date string (YYYY-MM-DD) into readable format (e.g. Sep 14, 2026).
 */
export function formatReleaseDate(dateString: string): string {
  try {
    const parts = dateString.split('-');
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const date = new Date(year, month, day);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    }
    return dateString;
  } catch {
    return dateString;
  }
}
