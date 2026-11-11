import test from 'node:test';
import assert from 'node:assert/strict';
import { filterGames, sortGames, searchMatch, toggleWishlist, isWishlisted, formatReleaseDate } from './gameUtils';
import { SAMPLE_GAMES } from '../data/games';

test('searchMatch correctly finds matches by title, developer, or tags', () => {
  const game = SAMPLE_GAMES[0]; // Cyberpunk Nights
  assert.equal(searchMatch(game, 'cyberpunk'), true);
  assert.equal(searchMatch(game, 'Aether NeuroTech'), true);
  assert.equal(searchMatch(game, 'Ray Tracing'), true);
  assert.equal(searchMatch(game, 'xyznonexistent'), false);
  assert.equal(searchMatch(game, ''), true);
});

test('filterGames filters by search, genre, and status correctly', () => {
  // Test genre filter
  const darkFantasyGames = filterGames(SAMPLE_GAMES, { genre: 'Dark Fantasy' });
  assert.ok(darkFantasyGames.length > 0);
  assert.ok(darkFantasyGames.every(g => g.genres.includes('Dark Fantasy')));

  // Test status filter
  const comingSoon = filterGames(SAMPLE_GAMES, { status: 'Coming Soon' });
  assert.ok(comingSoon.length > 0);
  assert.ok(comingSoon.every(g => g.status === 'Coming Soon'));

  // Test combined filter
  const cyberAvailable = filterGames(SAMPLE_GAMES, { 
    search: 'Metropolis', 
    genre: 'Cyberpunk', 
    status: 'Available Now' 
  });
  assert.equal(cyberAvailable.length, 1);
  assert.equal(cyberAvailable[0].id, 'cyberpunk-nights-2154');
});

test('sortGames sorts games by rating, date, and title', () => {
  const byRating = sortGames(SAMPLE_GAMES, 'rating-desc');
  for (let i = 0; i < byRating.length - 1; i++) {
    assert.ok(byRating[i].rating >= byRating[i + 1].rating);
  }

  const byDateNewest = sortGames(SAMPLE_GAMES, 'date-newest');
  for (let i = 0; i < byDateNewest.length - 1; i++) {
    const timeA = new Date(byDateNewest[i].releaseDate).getTime();
    const timeB = new Date(byDateNewest[i + 1].releaseDate).getTime();
    assert.ok(timeA >= timeB);
  }

  const byTitle = sortGames(SAMPLE_GAMES, 'title-asc');
  assert.equal(byTitle[0].title <= byTitle[1].title, true);
});

test('toggleWishlist adds and removes game IDs properly', () => {
  let wishlist: string[] = [];
  wishlist = toggleWishlist(wishlist, 'game-1');
  assert.deepEqual(wishlist, ['game-1']);
  assert.equal(isWishlisted(wishlist, 'game-1'), true);
  assert.equal(isWishlisted(wishlist, 'game-2'), false);

  wishlist = toggleWishlist(wishlist, 'game-2');
  assert.deepEqual(wishlist, ['game-1', 'game-2']);

  wishlist = toggleWishlist(wishlist, 'game-1');
  assert.deepEqual(wishlist, ['game-2']);
});

test('formatReleaseDate formats dates properly', () => {
  const formatted = formatReleaseDate('2026-09-14');
  assert.equal(formatted.includes('2026'), true);
  assert.equal(formatted.includes('Sep'), true);
});
