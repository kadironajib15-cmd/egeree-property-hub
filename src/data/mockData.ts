import { Property, Agent, MarketData } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern Glass Villa',
    price: 2450000,
    type: 'Villa',
    beds: 5,
    baths: 4,
    sqft: 4500,
    location: 'Beverly Hills, CA',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/property-1-a1d13058-1773261713937.webp',
    virtualTourUrl: 'https://my.matterport.com/show/?m=9S7Nf2N9Z',
    description: 'A stunning architectural masterpiece featuring floor-to-ceiling glass walls.',
    features: ['Infinity Pool', 'Home Cinema', 'Smart Home', 'Wine Cellar']
  },
  {
    id: '2',
    title: 'Urban Sky Townhouse',
    price: 1250000,
    type: 'Townhouse',
    beds: 3,
    baths: 2.5,
    sqft: 2200,
    location: 'Downtown Seattle, WA',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/property-2-b3fe121f-1773261713830.webp',
    virtualTourUrl: 'https://my.matterport.com/show/?m=7X8Nf3N9A',
    description: 'Sleek contemporary living in the heart of the city.',
    features: ['Rooftop Terrace', 'Modern Kitchen', 'EV Charging', 'Gym']
  },
  {
    id: '3',
    title: 'Eco-Luxe Apartment',
    price: 850000,
    type: 'Apartment',
    beds: 2,
    baths: 2,
    sqft: 1400,
    location: 'Austin, TX',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/property-3-6e0b41c9-1773261713536.webp',
    virtualTourUrl: 'https://my.matterport.com/show/?m=5Y4Nf1N9B',
    description: 'Sustainable luxury with vertical gardens and smart energy systems.',
    features: ['Solar Panels', 'Garden Balcony', 'Open Layout', 'Concierge']
  },
  {
    id: '4',
    title: 'Horizon Penthouse',
    price: 3900000,
    type: 'Penthouse',
    beds: 4,
    baths: 4.5,
    sqft: 5200,
    location: 'Miami, FL',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/hero-image-ff008107-1773261724330.webp',
    virtualTourUrl: 'https://my.matterport.com/show/?m=1Z2Nf3N9C',
    description: 'Panoramic ocean views and unmatched luxury amenities.',
    features: ['Private Elevator', 'Spa Bath', 'Outdoor Kitchen', '360 Views']
  }
];

export const AGENTS: Agent[] = [
  {
    id: 'a1',
    name: 'Marcus Sterling',
    role: 'Principal Broker',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/agent-1-e959d317-1773261714275.webp',
    phone: '+1 (555) 123-4567',
    email: 'marcus@egeree.com'
  },
  {
    id: 'a2',
    name: 'Elena Rodriguez',
    role: 'Luxury Specialist',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/agent-2-b86a973f-1773261714220.webp',
    phone: '+1 (555) 987-6543',
    email: 'elena@egeree.com'
  }
];

export const MARKET_DATA: MarketData[] = [
  { month: 'Jan', avgPrice: 1100000, inventory: 45 },
  { month: 'Feb', avgPrice: 1150000, inventory: 42 },
  { month: 'Mar', avgPrice: 1180000, inventory: 38 },
  { month: 'Apr', avgPrice: 1220000, inventory: 40 },
  { month: 'May', avgPrice: 1250000, inventory: 35 },
  { month: 'Jun', avgPrice: 1300000, inventory: 30 },
];