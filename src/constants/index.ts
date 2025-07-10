import { PricingItem } from '../types';
export const pricingItems: PricingItem[] = [
  // Followers
  { price: 99, quantity: 500, category: 'Followers' },
  { price: 199, quantity: 1500, category: 'Followers' },
  { price: 599, quantity: 5000, category: 'Followers' },
  { price: 1599, quantity: 15000, category: 'Followers' },

  // Likes
  { price: 19, quantity: 1000, category: 'Likes' },
  { price: 49, quantity: 3000, category: 'Likes' },
  { price: 99, quantity: 10000, category: 'Likes' },
  { price: 129, quantity: 30000, category: 'Likes' },

  // Views
  { price: 55, quantity: 5000, category: 'Views' },
  { price: 69, quantity: 15000, category: 'Views' },
  { price: 111, quantity: 50000, category: 'Views' },
  { price: 209, quantity: 150000, category: 'Views' },
];


 export const categories = [
  'All',
  'Followers',
  'Likes',
  'Views',
  // 'Comments',
  // 'Saves',
  // 'Shares',
  // 'Story Views'
];


export const validReferralCodes = ["ktf942"];

export const comboPacks = [
  {
    title: ['500 subscribers', '1k likes', '5k views'],
    prices: [99, 29, 55],
    total: 183,
    actualPrice: 149,
  },
  {
    title: ['1.5k subscribers', '3k likes', '15k views'],
    prices: [199, 89, 69],
    total: 357,
    actualPrice: 299,
  },
  {
    title: ['5k subscribers', '10k likes', '50k views'],
    prices: [599, 99, 111],
    total: 809,
    actualPrice: 699,
  },
  {
    title: ['15k subscribers', '30k likes', '150k views'],
    prices: [1599, 149, 209],
    total: 1957,
    actualPrice: 1799,
  },
  {
    title: ['15k subscribers', '30k likes', '150k views'],
    prices: [1599, 149, 209],
    total: 1957,
    actualPrice: 1799,
  },
];
