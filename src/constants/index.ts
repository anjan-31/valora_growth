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
    title: ['500 YouTube subscribers', '1k likes', '5k views'],
    prices: [99, 29, 55],
    total: 183,
    actualPrice: 149,
  },
  {
    title: ['1.5k YouTube subscribers', '3k likes', '15k views'],
    prices: [199, 89, 69],
    total: 357,
    actualPrice: 299,
  },
  {
    title: ['5k YouTube subscribers', '10k likes', '50k views'],
    prices: [599, 99, 111],
    total: 809,
    actualPrice: 699, 
  },
  
  {
    title: ['15k YouTube subscribers', '30k likes', '150k views'],
    prices: [1599, 149, 209],
    total: 1957,
    actualPrice: 1799,
  },
  {
    title: ['50k Instagram views'],
    prices: [60],
    total: 60,
    actualPrice: 56,
  },
  {
    title: ['100k Instagram views'],
    prices: [120],
    total: 120,
    actualPrice: 112,
  },
  {
    title: ['250k Instagram views'],
    prices: [180],
    total: 180,
    actualPrice: 168,
  },
  {
    title: ['550k Instagram views'],
    prices: [600],
    total: 600,
    actualPrice: 504,
  },
  {
    title: ['1k YouTube Subscribers'],
    prices: [549],
    total: 549,
    actualPrice: 349,
  },
  {
    title: ['2K YouTube Subscribers'],
    prices: [1098],
    total: 1098,
    actualPrice: 698,
  },
  {
    title: ['3K YouTube Subscribers'],
    prices: [1647],
    total: 1647,
    actualPrice: 1647,
  },  {
    title: ['4K YouTube Subscribers'],
    prices: [2196],
    total: 2196,
    actualPrice: 2196,
  },
  
];
