import { Category, FAQ, Product, Review } from "./types";

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Nitro', slug: 'nitro', icon: 'Zap', brandColor: '#5865F2' },
  { id: '2', name: 'Streaming', slug: 'streaming', icon: 'MonitorPlay', brandColor: '#E50914' },
  { id: '3', name: 'Gaming', slug: 'gaming', icon: 'Gamepad2', brandColor: '#107C10' },
  { id: '4', name: 'Subscriptions', slug: 'subscriptions', icon: 'CreditCard', brandColor: '#1DB954' },
  { id: '5', name: 'Gift Cards', slug: 'gift-cards', icon: 'Gift', brandColor: '#FF0000' },
  { id: '6', name: 'Accounts', slug: 'accounts', icon: 'UserCircle', brandColor: '#FFFFFF' },
];

export const PRODUCTS: Product[] = [
  {
    id: 'nitro-basic',
    name: 'Discord Nitro Basic',
    description: 'The simple Discord experience with some extra perks.',
    price: 2.99,
    originalPrice: 4.99,
    category: 'Nitro',
    image: 'https://ais-dev-wjuhj2jqhbhov42errgmpu-857377644372.europe-west2.run.app/_/artifacts/2026-05-14T19:58:40Z/f5.png',
    icon: 'Zap',
    badge: 'Best Seller',
    status: 'instock',
    isPopular: true,
    deliveryTime: 'Instant',
    rating: 4.9,
    reviewsCount: 1250,
    features: ['300MB upload limit', 'Custom emojis anywhere', 'Special Nitro badge', '2 Nitro boosts included'],
    brandColor: '#5865F2'
  },
  {
    id: 'netflix-premium',
    name: 'Netflix Premium (Ultra HD)',
    description: 'Shared premium account with 4K resolution and 4 screens.',
    price: 3.50,
    originalPrice: 15.99,
    category: 'Streaming',
    image: 'https://ais-dev-wjuhj2jqhbhov42errgmpu-857377644372.europe-west2.run.app/_/artifacts/2026-05-14T19:58:40Z/f1.png',
    icon: 'Tv',
    badge: '-70% OFF',
    status: 'instock',
    isPopular: true,
    deliveryTime: '5-10 Minutes',
    rating: 4.8,
    reviewsCount: 850,
    features: ['4K + HDR quality', 'Valid for 30 Days', 'Private profile with PIN', 'Warranty included'],
    brandColor: '#E50914'
  },
  {
    id: 'spotify-premium',
    name: 'Spotify Premium (1 Year)',
    description: 'Listen to music ad-free, offline and with high-quality audio.',
    price: 12.00,
    originalPrice: 99.00,
    category: 'Streaming',
    image: 'https://ais-dev-wjuhj2jqhbhov42errgmpu-857377644372.europe-west2.run.app/_/artifacts/2026-05-14T19:58:40Z/f2.png',
    icon: 'Music',
    badge: 'Popular',
    status: 'instock',
    isPopular: true,
    deliveryTime: 'Instant',
    rating: 4.9,
    reviewsCount: 2100,
    features: ['No advertisements', 'Download for offline', 'Premium sound quality', '12 Month duration'],
    brandColor: '#1DB954'
  },
  {
    id: 'game-pass-ultimate',
    name: 'Xbox Game Pass Ultimate',
    description: 'Access hundreds of high-quality games on console and PC.',
    price: 4.50,
    originalPrice: 14.99,
    category: 'Gaming',
    image: 'https://ais-dev-wjuhj2jqhbhov42errgmpu-857377644372.europe-west2.run.app/_/artifacts/2026-05-14T19:58:40Z/f3.png',
    icon: 'Gamepad',
    badge: 'Hot',
    status: 'instock',
    isPopular: true,
    deliveryTime: 'Instant',
    rating: 4.7,
    reviewsCount: 420,
    features: ['Console & PC access', 'EA Play included', 'Cloud gaming (Beta)', 'Monthly rewards'],
    brandColor: '#107C10'
  },
  {
    id: 'youtube-premium',
    name: 'YouTube Premium (Family)',
    description: 'Ad-free YouTube and Music, with background play and downloads.',
    price: 3.99,
    originalPrice: 22.99,
    category: 'Streaming',
    image: 'https://ais-dev-wjuhj2jqhbhov42errgmpu-857377644372.europe-west2.run.app/_/artifacts/2026-05-14T19:58:40Z/f4.png',
    icon: 'Youtube',
    badge: 'Flash Deal',
    status: 'instock',
    isPopular: false,
    deliveryTime: '2-5 Minutes',
    rating: 4.9,
    reviewsCount: 310,
    features: ['No ads', 'Background play', 'YT Music included', 'Personal account upgrade'],
    brandColor: '#FF0000'
  }
];


export const REVIEWS: Review[] = [
  {
    id: '1',
    userId: 'u1',
    userName: 'Zenix.gg',
    userAvatar: 'https://i.pravatar.cc/150?u=u1',
    rating: 5,
    comment: 'Instantly got my Nitro. Paradise Store is literally the goat in the gaming market.',
    date: '2 hours ago',
    isDiscordVerified: true
  },
  {
    id: '2',
    userId: 'u2',
    userName: 'Kaelo_01',
    userAvatar: 'https://i.pravatar.cc/150?u=u2',
    rating: 5,
    comment: 'Was skeptical at first but the Netflix account works perfectly in 4K. Support is fast too!',
    date: '5 hours ago',
    isDiscordVerified: true
  },
  {
    id: '3',
    userId: 'u3',
    userName: 'EliteSniper',
    userAvatar: 'https://i.pravatar.cc/150?u=u3',
    rating: 4,
    comment: 'Great prices, delivery took 10 mins instead of instant but still very fast.',
    date: '1 day ago',
    isDiscordVerified: false
  }
];

export const FAQS: FAQ[] = [
  {
    question: "How fast is delivery?",
    answer: "Most of our digital products are delivered instantly. For some accounts that require manual processing, it takes between 5 to 15 minutes."
  },
  {
    question: "Are accounts safe?",
    answer: "Yes, all our products come with a full warranty. We use legitimate methods to acquire subscriptions and accounts."
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept Crypto, PayPal, Credit/Debit cards, and local payment methods via our secure checkout."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer refunds if the product is not as described or if we cannot fulfill your order within the specified time."
  },
  {
    question: "Is support available 24/7?",
    answer: "Our support team is available 24/7 on Discord and via our live chat on the website."
  }
];
