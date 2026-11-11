export type GameGenre = 
  | 'All'
  | 'Action RPG'
  | 'Sci-Fi'
  | 'Dark Fantasy'
  | 'Tactical RTS'
  | 'Cyberpunk'
  | 'Stealth Action'
  | 'Space Sim'
  | 'Racing';

export type GameStatus = 'All' | 'Available Now' | 'Coming Soon' | 'Early Access';

export type SortOption = 'rating-desc' | 'date-newest' | 'date-oldest' | 'title-asc';

export interface SystemSpecs {
  os: string;
  cpu: string;
  gpu: string;
  ram: string;
  storage: string;
  directx: string;
}

export interface Game {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  artwork: string;
  heroBackdrop?: string;
  genres: string[];
  primaryGenre: string;
  releaseDate: string; // ISO format: YYYY-MM-DD
  status: 'Available Now' | 'Coming Soon' | 'Early Access';
  developer: string;
  publisher: string;
  rating: number; // 0 - 100
  userScore: number; // 0.0 - 10.0
  price: string;
  featured: boolean;
  trending: boolean;
  synopsis: string;
  detailedDescription: string;
  features: string[];
  specs: {
    minimum: SystemSpecs;
    recommended: SystemSpecs;
  };
  tags: string[];
  deckVerified?: boolean;
}

export interface FilterState {
  search: string;
  genre: string;
  status: string;
  sortBy: SortOption;
}
