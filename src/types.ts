export type ProductStatus = 'instock' | 'outofstock' | 'preorder';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  icon?: string;
  badge?: string;
  status: ProductStatus;
  isPopular?: boolean;
  deliveryTime: string;
  rating: number;
  reviewsCount: number;
  features: string[];
  brandColor?: string;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
  isDiscordVerified?: boolean;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  brandColor?: string;
}

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  role: 'user' | 'admin';
}

export interface Order {
  id: string;
  userId: string;
  productId: string;
  productName: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  createdAt: string;
  deliveryDetails?: string;
}
