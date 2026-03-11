import { Property, Agent, Testimonial, Neighborhood } from '../types';

export const MOCK_PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Modern Architectural Villa',
    description: 'A stunning contemporary villa featuring floor-to-ceiling windows and open living spaces.',
    price: 1250000,
    location: 'Beverly Hills, CA',
    type: 'Villa',
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 3500,
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/property-1-c5a62a7f-1773260191830.webp',
    images: [
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/property-1-c5a62a7f-1773260191830.webp',
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/interior-1-60f0a391-1773260191657.webp'
    ],
    features: ['Pool', 'Smart Home', 'Wine Cellar', 'Ocean View'],
    coordinates: { lat: 34.0736, lng: -118.4004 },
    virtualTourUrl: 'https://my.matterport.com/show/?m=9S999999999',
    agentId: 'a1',
    status: 'For Sale',
    yearBuilt: 2022
  },
  {
    id: '2',
    title: 'Urban Glass Penthouse',
    description: 'Luxurious penthouse in the heart of downtown with panoramic city views.',
    price: 850000,
    location: 'Downtown, Los Angeles',
    type: 'Apartment',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/property-2-81eeb64a-1773260197334.webp',
    features: ['Gym', 'Concierge', 'Rooftop Garden'],
    coordinates: { lat: 34.0407, lng: -118.2468 },
    agentId: 'a2',
    status: 'For Sale',
    yearBuilt: 2023
  },
  {
    id: '3',
    title: 'Skyline Terrace Residences',
    description: 'Elevated living with premium finishes and high-tech amenities.',
    price: 650000,
    location: 'Westwood, CA',
    type: 'Condo',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2200,
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/hero-background-d2ddc606-1773260190915.webp',
    features: ['Parking', 'Storage', 'Pet Friendly'],
    coordinates: { lat: 34.0635, lng: -118.4455 },
    agentId: 'a1',
    status: 'For Sale',
    yearBuilt: 2021
  }
];

export const MOCK_AGENTS: Agent[] = [
  {
    id: 'a1',
    name: 'David Sterling',
    role: 'Principal Agent',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/agent-1-977cccd9-1773260190273.webp',
    phone: '(555) 123-4567',
    email: 'david@egeree.com',
    bio: 'Over 15 years of experience in luxury construction and real estate sales.',
    rating: 4.9,
    listingsCount: 24
  },
  {
    id: 'a2',
    name: 'Sarah Jenkins',
    role: 'Modern Living Specialist',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/agent-2-137a1d22-1773260203289.webp',
    phone: '(555) 987-6543',
    email: 'sarah@egeree.com',
    bio: 'Specializing in urban development and high-tech residential solutions.',
    rating: 4.8,
    listingsCount: 18
  }
];

export const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Michael Thompson',
    role: 'Homeowner',
    content: 'EGEREE CONSTRUCTION delivered beyond our expectations. Their attention to detail in our villa build was impeccable.',
    imageUrl: 'https://i.pravatar.cc/150?u=t1'
  },
  {
    id: 't2',
    name: 'Elena Rodriguez',
    role: 'Investor',
    content: 'The property management and market insights provided by EGEREE helped me scale my portfolio efficiently.',
    imageUrl: 'https://i.pravatar.cc/150?u=t2'
  }
];

export const MOCK_NEIGHBORHOODS: Neighborhood[] = [
  {
    id: 'n1',
    name: 'Highland Park',
    description: 'A vibrant neighborhood known for its historic charm and modern culinary scene.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/neighborhood-guide-9b8ab1e4-1773260191566.webp',
    stats: {
      medianPrice: 950000,
      crimeRate: 'Low',
      schools: 'A+',
      vibe: 'Artistic & Historic'
    }
  }
];

export const MARKET_TRENDS_DATA = [
  { month: 'Jan', price: 820000 },
  { month: 'Feb', price: 845000 },
  { month: 'Mar', price: 830000 },
  { month: 'Apr', price: 890000 },
  { month: 'May', price: 920000 },
  { month: 'Jun', price: 950000 },
];