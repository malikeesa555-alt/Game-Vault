import { Game } from '../types/game';

export const SAMPLE_GAMES: Game[] = [
  {
    id: 'cyberpunk-nights-2154',
    title: 'CYBERPUNK NIGHTS: METROPOLIS 2154',
    subtitle: 'High-Octane Open-World Action RPG',
    tagline: 'Rule the neon verticality of Neo-Kyoto in a story-driven cyberpunk epic.',
    artwork: '/src/assets/images/game_cyberpunk_neon_1794377057034.jpg',
    heroBackdrop: '/src/assets/images/game_cyberpunk_neon_1794377057034.jpg',
    genres: ['Action RPG', 'Cyberpunk', 'Open World'],
    primaryGenre: 'Cyberpunk',
    releaseDate: '2026-09-14',
    status: 'Available Now',
    developer: 'Aether NeuroTech Studios',
    publisher: 'Aether Technologies Interactive',
    rating: 96,
    userScore: 9.3,
    price: '$69.99',
    featured: true,
    trending: true,
    deckVerified: true,
    tags: ['Cyberpunk', 'Ray Tracing Overdrive', 'Deep Lore', 'Full Controller Support', 'Open World'],
    synopsis: 'Immerse yourself in a rain-soaked, volumetric metropolis powered by Unreal Engine 5. Play as Kaelen Cross, a rogue neural operative surviving between mega-corporations, black-market augments, and high-speed aerial vehicular combat.',
    detailedDescription: 'Engineered specifically for cutting-edge PC hardware, Cyberpunk Nights features uncapped framerates, full path tracing support, dynamic DLSS 3.7 / FSR 3.1 frame generation, and direct HDR10+ calibration. Traverse vertically across 18 districts without loading screens, customize neural cyberware trees, and dictate the political power balance of the 22nd century.',
    features: [
      'Seamless multi-tiered skyscraper exploration with grappling cables and aero-skimmers',
      'Over 75 hours of branched narrative quests with zero filler fetch-missions',
      'Deep kinetic gunplay paired with tactical hacking and cyberware overclock abilities',
      'Native ultra-wide (21:9 & 32:9) display support with customizable FOV sliders'
    ],
    specs: {
      minimum: {
        os: 'Windows 10 / 11 64-bit (v22H2)',
        cpu: 'Intel Core i5-12400F / AMD Ryzen 5 5600',
        gpu: 'NVIDIA RTX 3060 (12GB) / AMD Radeon RX 6700 XT',
        ram: '16 GB DDR4',
        storage: '85 GB NVMe SSD space',
        directx: 'DirectX 12 Ultimate'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        cpu: 'Intel Core i7-14700K / AMD Ryzen 7 7800X3D',
        gpu: 'NVIDIA RTX 4080 Super / AMD Radeon RX 7900 XTX',
        ram: '32 GB DDR5 6000MHz',
        storage: '85 GB PCIe Gen4 NVMe SSD',
        directx: 'DirectX 12 Ultimate'
      }
    }
  },
  {
    id: 'deep-space-exploration-violet-giant',
    title: 'DEEP SPACE EXPLORATION: ORBITING THE VIOLET GIANT',
    subtitle: 'Hard-Sci-Fi Interstellar Simulation',
    tagline: 'Pilot the Explorer-7 through uncharted celestial anomalies and ring systems.',
    artwork: '/src/assets/images/game_space_odyssey_1794377057391.jpg',
    heroBackdrop: '/src/assets/images/game_space_odyssey_1794377057391.jpg',
    genres: ['Sci-Fi', 'Space Sim', 'Exploration'],
    primaryGenre: 'Space Sim',
    releaseDate: '2026-06-22',
    status: 'Available Now',
    developer: 'Cosmic Drift Dynamics',
    publisher: 'Aether Technologies Interactive',
    rating: 94,
    userScore: 9.1,
    price: '$59.99',
    featured: true,
    trending: true,
    deckVerified: true,
    tags: ['Space Sim', 'Newtonian Physics', 'Procedural Cosmos', 'Photorealistic', 'Atmospheric'],
    synopsis: 'A groundbreaking interstellar journey simulating the outer atmospheric rings of an uncharted violet gas giant. Command a multi-crew science vessel, conduct orbital orbital burns, and unravel planetary relics.',
    detailedDescription: 'Deep Space Exploration sets a new standard for PC astrophysics simulations. Experience 1:1 scale planetary orbital mechanics, complex thermodynamic life-support systems, realistic thruster inertia, and jaw-dropping volumetric nebula lighting rendered in real time.',
    features: [
      'Hard science Newtonian flight mechanics with optional fly-by-wire assist modules',
      'Realistic planetary atmospheric entry heating and ring-asteroid deflection systems',
      'Seamless transition from ship flight bridge to planetary surface rover exploration',
      'Full HOTAS and Dual-Stick flight hardware profile mappings out of the box'
    ],
    specs: {
      minimum: {
        os: 'Windows 10 64-bit',
        cpu: 'Intel Core i5-11400 / AMD Ryzen 5 3600',
        gpu: 'NVIDIA RTX 2070 / AMD Radeon RX 5700 XT',
        ram: '16 GB DDR4',
        storage: '110 GB SSD space required',
        directx: 'DirectX 12'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        cpu: 'Intel Core i9-13900K / AMD Ryzen 9 7950X',
        gpu: 'NVIDIA RTX 4070 Ti / AMD Radeon RX 7900 XT',
        ram: '32 GB DDR5',
        storage: '110 GB High-Speed NVMe M.2 SSD',
        directx: 'DirectX 12 Ultimate'
      }
    }
  },
  {
    id: 'vale-of-eclipse',
    title: 'VALE OF ECLIPSE: SHADOW OF CATHEDRAL',
    subtitle: 'Gothic Dark Fantasy Action RPG',
    tagline: 'Awaken as the Eclipse Knight in a ruined realm bathed in violet lightning.',
    artwork: '/src/assets/images/game_dark_fantasy_1794377058650.jpg',
    heroBackdrop: '/src/assets/images/game_dark_fantasy_1794377058650.jpg',
    genres: ['Dark Fantasy', 'Action RPG'],
    primaryGenre: 'Dark Fantasy',
    releaseDate: '2026-03-10',
    status: 'Available Now',
    developer: 'Black Sigil Studios',
    publisher: 'Aether Technologies Interactive',
    rating: 98,
    userScore: 9.6,
    price: '$69.99',
    featured: true,
    trending: true,
    deckVerified: true,
    tags: ['Souls-like', 'Dark Fantasy', 'Masterpiece', 'Difficult', 'Atmospheric', 'Runic Magic'],
    synopsis: 'A masterclass in dark fantasy level design and precision combat. Journey through decaying gothic spires, mist-shrouded mountain fortresses, and confront ancient monarchs cursed by the eternal eclipse.',
    detailedDescription: 'Praised by critics worldwide for its punishing yet deeply rewarding combat systems. Master runic broadswords, parry timing down to individual frames, and uncover the sorrowful history of the Cathedral of Thorns.',
    features: [
      'Frame-precise combat feedback with zero input latency on high-refresh PC monitors',
      'Over 40 handcrafted boss encounters with reactive multi-phase behavior systems',
      'Interconnected world architecture with hidden shortcuts and environmental storytelling',
      'Dynamic weather system featuring violet thunderstorm deluges and eclipse shifts'
    ],
    specs: {
      minimum: {
        os: 'Windows 10 64-bit',
        cpu: 'Intel Core i5-10400 / AMD Ryzen 5 3600',
        gpu: 'NVIDIA GTX 1660 Super (6GB) / AMD Radeon RX 5600 XT',
        ram: '16 GB RAM',
        storage: '70 GB SSD space',
        directx: 'DirectX 12'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        cpu: 'Intel Core i7-13700 / AMD Ryzen 7 7700X',
        gpu: 'NVIDIA RTX 4070 (12GB) / AMD Radeon RX 7800 XT',
        ram: '32 GB RAM',
        storage: '70 GB NVMe SSD',
        directx: 'DirectX 12 Ultimate'
      }
    }
  },
  {
    id: 'iron-siege-titan-wars',
    title: 'IRON SIEGE: TITAN WARS',
    subtitle: 'Next-Gen Tactical RTS & Mech Warfare',
    tagline: 'Command mechanized battalions across scorched industrial conflict zones.',
    artwork: '/src/assets/images/game_tactical_mech_1794377059371.jpg',
    heroBackdrop: '/src/assets/images/game_tactical_mech_1794377059371.jpg',
    genres: ['Tactical RTS', 'Sci-Fi'],
    primaryGenre: 'Tactical RTS',
    releaseDate: '2026-11-28',
    status: 'Coming Soon',
    developer: 'Vanguard Forge Interactive',
    publisher: 'Aether Technologies Interactive',
    rating: 91,
    userScore: 8.9,
    price: '$54.99',
    featured: true,
    trending: false,
    deckVerified: false,
    tags: ['Tactical RTS', 'Mecha', 'Destructible Physics', 'Multiplayer Strategy', 'Military'],
    synopsis: 'Deploy massive bipedal Titan mechs equipped with kinetic rotary cannons, plasma barrier shields, and artillery pods. Balance resources, terrain elevation, and energy capacitors in high-stakes battlefield engagements.',
    detailedDescription: 'Iron Siege pushes real-time strategy into the modern era with fully destructible terrain physics, complex ballistics calculations, and customizable chassis configurations for heavy walkers and drone escorts.',
    features: [
      'Full architectural destruction physics powered by GPU compute particle engines',
      'Tactical command zoom from satellite orbit perspective down to single-mech gun barrel view',
      'Deep modular chassis customization with 300+ ballistic and energy weapon attachments',
      'Competitive 1v1, 2v2, and cooperative 4-player horde defense modes'
    ],
    specs: {
      minimum: {
        os: 'Windows 10 64-bit',
        cpu: 'Intel Core i5-12600K / AMD Ryzen 5 7600',
        gpu: 'NVIDIA RTX 3070 / AMD Radeon RX 6800',
        ram: '16 GB DDR4/DDR5',
        storage: '65 GB SSD space',
        directx: 'DirectX 12'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        cpu: 'Intel Core i7-14700K / AMD Ryzen 7 9800X3D',
        gpu: 'NVIDIA RTX 4080 / AMD Radeon RX 7900 XTX',
        ram: '32 GB DDR5',
        storage: '65 GB NVMe PCIe Gen4 SSD',
        directx: 'DirectX 12 Ultimate'
      }
    }
  },
  {
    id: 'silent-reign-protocol-zero',
    title: 'SILENT REIGN: PROTOCOL ZERO',
    subtitle: 'Tactical Cyber Stealth Thriller',
    tagline: 'Infiltrate guarded corporate citadels in the shadows of a nocturnal dystopia.',
    artwork: '/src/assets/images/game_stealth_cyber_1794377059125.jpg',
    heroBackdrop: '/src/assets/images/game_stealth_cyber_1794377059125.jpg',
    genres: ['Stealth Action', 'Cyberpunk', 'Action RPG'],
    primaryGenre: 'Stealth Action',
    releaseDate: '2026-08-05',
    status: 'Available Now',
    developer: 'Specter Logic Labs',
    publisher: 'Aether Technologies Interactive',
    rating: 95,
    userScore: 9.2,
    price: '$59.99',
    featured: true,
    trending: true,
    deckVerified: true,
    tags: ['Stealth', 'Tactical', 'Cyberpunk', 'Espionage', 'Singleplayer', 'Rich Story'],
    synopsis: 'Master the art of silent infiltration as a rogue operative equipped with electromagnetic camouflage and holographic decoy beacons. Ghost through maximum-security complexes without leaving a trace.',
    detailedDescription: 'Silent Reign rewards patience, tactical recon, and emergent problem solving. Use acoustic dampeners, disrupt perimeter thermal scanners, and deploy silent kinetic suppressors across multi-level sandbox compounds.',
    features: [
      'Unscripted sandbox infiltration allowing lethal, non-lethal, or pure ghost ghost playthroughs',
      'Dynamic acoustic simulation where environmental materials dictate footwear decibel levels',
      'Advanced neural optics visor with thermal, electromagnetic, and patrol vector overlays',
      'Replay value with dynamic patrol route variations and random security countermeasures'
    ],
    specs: {
      minimum: {
        os: 'Windows 10 64-bit',
        cpu: 'Intel Core i5-11600K / AMD Ryzen 5 5600X',
        gpu: 'NVIDIA RTX 3060 / AMD Radeon RX 6600 XT',
        ram: '16 GB RAM',
        storage: '55 GB SSD space',
        directx: 'DirectX 12'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        cpu: 'Intel Core i7-13700K / AMD Ryzen 7 7800X3D',
        gpu: 'NVIDIA RTX 4070 Super / AMD Radeon RX 7800 XT',
        ram: '32 GB RAM',
        storage: '55 GB NVMe SSD',
        directx: 'DirectX 12 Ultimate'
      }
    }
  },
  {
    id: 'chrono-apex-sub-orbital',
    title: 'CHRONO APEX: SUB-ORBITAL',
    subtitle: 'Anti-Gravity High-Velocity Combat Racing',
    tagline: 'Hit Mach 2 across magnetic vacuum tunnels and stratosphere ribbons.',
    artwork: '/src/assets/images/game_space_odyssey_1794377057391.jpg',
    heroBackdrop: '/src/assets/images/game_space_odyssey_1794377057391.jpg',
    genres: ['Racing', 'Sci-Fi'],
    primaryGenre: 'Racing',
    releaseDate: '2026-04-18',
    status: 'Available Now',
    developer: 'Apex Velocity Labs',
    publisher: 'Aether Technologies Interactive',
    rating: 89,
    userScore: 8.8,
    price: '$49.99',
    featured: false,
    trending: true,
    deckVerified: true,
    tags: ['Fast-Paced', 'Racing', 'Synthwave', 'High FPS', 'Split Screen', 'VR Support'],
    synopsis: 'The pinnacle of high-velocity anti-gravity racing. Pilot magnetic hover-craft across orbital ribbons at blistering speeds with reactive electronic synthesizers driving your boost meters.',
    detailedDescription: 'Engineered for competitive PC racers with native support for 240Hz+ displays, ultra-low input latency pipelines, and comprehensive time-trial telemetry leaderboards.',
    features: [
      '24 exhilarating sub-orbital tracks spanning orbital space elevators to deep oceanic tunnels',
      'Gravitational barrel rolls and magnetic track locking at speeds exceeding 1,200 km/h',
      'Dynamic electronic soundtrack dynamically synchronized to speed and boost chains',
      'Full VR headset support alongside standard monitor racing modes'
    ],
    specs: {
      minimum: {
        os: 'Windows 10 64-bit',
        cpu: 'Intel Core i5-9600K / AMD Ryzen 5 3600',
        gpu: 'NVIDIA GTX 1660 Ti / AMD Radeon RX 5600',
        ram: '16 GB RAM',
        storage: '40 GB SSD space',
        directx: 'DirectX 12'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        cpu: 'Intel Core i7-12700K / AMD Ryzen 7 5800X3D',
        gpu: 'NVIDIA RTX 3080 / AMD Radeon RX 6800 XT',
        ram: '32 GB RAM',
        storage: '40 GB NVMe SSD',
        directx: 'DirectX 12 Ultimate'
      }
    }
  },
  {
    id: 'aether-tactics-stellar-dominion',
    title: 'AETHER TACTICS: STELLAR DOMINION',
    subtitle: 'Grand 4X Space Strategy & Fleet Command',
    tagline: 'Forge an interstellar hegemony across thousands of simulated star systems.',
    artwork: '/src/assets/images/game_tactical_mech_1794377059371.jpg',
    heroBackdrop: '/src/assets/images/game_tactical_mech_1794377059371.jpg',
    genres: ['Tactical RTS', 'Sci-Fi'],
    primaryGenre: 'Tactical RTS',
    releaseDate: '2026-12-15',
    status: 'Coming Soon',
    developer: 'Helios Nebula Games',
    publisher: 'Aether Technologies Interactive',
    rating: 93,
    userScore: 9.0,
    price: '$59.99',
    featured: false,
    trending: false,
    deckVerified: false,
    tags: ['4X', 'Grand Strategy', 'Space', 'Turn-Based', 'Deep Economy', 'Mod Support'],
    synopsis: 'A grand strategy masterpiece simulating galactic empires, technological breakthroughs, diplomatic pacts, and massive dreadnought fleet engagements in full 3D space.',
    detailedDescription: 'Manage supply routes, colonize diverse exoplanets, design modular battleships, and orchestrate galactic senate resolutions to outmaneuver rival civilizations.',
    features: [
      'Galactic procedural map generation with up to 2,000 stars and dynamic stellar events',
      'Detailed fleet ship-designer with specialized weapon hardpoints and shield harmonics',
      'Asymmetric alien civilizations each featuring unique political doctrines and tech trees',
      'Extensive Steam Workshop and native PC modding framework support'
    ],
    specs: {
      minimum: {
        os: 'Windows 10 64-bit',
        cpu: 'Intel Core i5-10600 / AMD Ryzen 5 3600X',
        gpu: 'NVIDIA GTX 1070 (8GB) / AMD Radeon RX 590',
        ram: '16 GB RAM',
        storage: '35 GB SSD space',
        directx: 'DirectX 12'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        cpu: 'Intel Core i7-13700 / AMD Ryzen 7 7700',
        gpu: 'NVIDIA RTX 3070 Ti / AMD Radeon RX 6750 XT',
        ram: '32 GB DDR5 RAM',
        storage: '35 GB NVMe SSD',
        directx: 'DirectX 12'
      }
    }
  },
  {
    id: 'quantum-protocol-zero-dawn',
    title: 'QUANTUM DRIFT: OBLIVION PROTOCOL',
    subtitle: 'Hardcore Sci-Fi Extraction Shooter',
    tagline: 'Infiltrate abandoned orbital laboratories, retrieve anomaly relics, extract alive.',
    artwork: '/src/assets/images/game_stealth_cyber_1794377059125.jpg',
    heroBackdrop: '/src/assets/images/game_stealth_cyber_1794377059125.jpg',
    genres: ['Stealth Action', 'Sci-Fi'],
    primaryGenre: 'Stealth Action',
    releaseDate: '2026-07-29',
    status: 'Early Access',
    developer: 'Singularity Interactive',
    publisher: 'Aether Technologies Interactive',
    rating: 88,
    userScore: 8.6,
    price: '$39.99',
    featured: false,
    trending: true,
    deckVerified: true,
    tags: ['Extraction Shooter', 'PvPvE', 'Hardcore', 'Tactical', 'Gunsmith', 'Co-op'],
    synopsis: 'High-risk extraction inside shifting zero-gravity orbital research stations. Scavenge experimental quantum technology while contending with mutated anomalies and rival operative squads.',
    detailedDescription: 'Featuring ultra-realistic ballistics, armor penetration calculations, zero-G thruster mobility, and deep weapons customization with real-time field modifications.',
    features: [
      'Thrilling zero-gravity and magnetic boots combat traversal inside rotating space habitats',
      'High-stakes persistence: lose your gear upon elimination or safely extract through airlocks',
      'Comprehensive modular gunsmith system with 150+ tactical optics, suppressors, and grips',
      'Dynamic environmental decompression hazards when hull breaches occur'
    ],
    specs: {
      minimum: {
        os: 'Windows 10 64-bit',
        cpu: 'Intel Core i5-12400 / AMD Ryzen 5 5600X',
        gpu: 'NVIDIA RTX 3060 (12GB) / AMD Radeon RX 6600',
        ram: '16 GB RAM',
        storage: '60 GB SSD space',
        directx: 'DirectX 12'
      },
      recommended: {
        os: 'Windows 11 64-bit',
        cpu: 'Intel Core i7-13700K / AMD Ryzen 7 7800X3D',
        gpu: 'NVIDIA RTX 4070 Ti / AMD Radeon RX 7900 XT',
        ram: '32 GB RAM',
        storage: '60 GB High-Speed NVMe SSD',
        directx: 'DirectX 12 Ultimate'
      }
    }
  }
];

export const GENRES_LIST = [
  'All',
  'Action RPG',
  'Sci-Fi',
  'Dark Fantasy',
  'Tactical RTS',
  'Cyberpunk',
  'Stealth Action',
  'Space Sim',
  'Racing'
] as const;

export const STATUS_LIST = [
  'All',
  'Available Now',
  'Coming Soon',
  'Early Access'
] as const;
