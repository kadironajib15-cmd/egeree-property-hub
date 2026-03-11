import { Property, Agent, Testimonial, Neighborhood } from '../types';

export const LOGO_URL = "https://storage.googleapis.com/dala-prod-public-storage/attachments/11007e86-66bf-437e-969a-429a955a44b0/1773259194029_IMG_20251224_004455_653.jpg";

export const MOCK_PROPERTIES: Property[] = [
  {
    id: 'p1',
    title: 'Modern Sunset Villa',
    description: 'This architectural masterpiece features floor-to-ceiling windows, a private infinity pool, and smart home integration throughout. Located in the exclusive hills of Beverly Hills, it offers unparalleled privacy and luxury.',
    price: 1250000,
    location: 'Beverly Hills, CA',
    type: 'Villa',
    bedrooms: 5,
    bathrooms: 4.5,
    sqft: 4500,
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/modern-luxury-villa-2bccd16b-1773260528146.webp',
    images: [
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/modern-luxury-villa-2bccd16b-1773260528146.webp',
      'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/modern-kitchen-2dc2255c-1773260528510.webp'
    ],
    features: ['Infinity Pool', 'Smart Home', 'Wine Cellar', 'Ocean View', 'Gourmet Kitchen'],
    coordinates: { lat: 34.0736, lng: -118.4004 },
    virtualTourUrl: 'https://my.matterport.com/show/?m=example',
    agentId: 'a1',
    status: 'For Sale',
    yearBuilt: 2023
  },
  {
    id: 'p2',
    title: 'Skyline Penthouse',
    description: 'Breathtaking city views from every room. This penthouse offers luxury living in the heart of the city with a private rooftop terrace and premium finishes.',
    price: 850000,
    location: 'Downtown Los Angeles, CA',
    type: 'Apartment',
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/luxury-apartment-building-4493531d-1773260529114.webp',
    features: ['Gym', 'Concierge', 'Rooftop Garden', 'Private Elevator'],
    coordinates: { lat: 34.0407, lng: -118.2468 },
    virtualTourUrl: 'https://my.matterport.com/show/?m=example2',
    agentId: 'a1',
    status: 'For Sale',
    yearBuilt: 2022
  },
  {
    id: 'p3',
    title: 'Minimalist Haven',
    description: 'A serene escape featuring clean lines and sustainable materials. Perfect for modern families seeking a minimalist lifestyle without compromising on luxury.',
    price: 980000,
    location: 'West Hollywood, CA',
    type: 'House',
    bedrooms: 3,
    bathrooms: 3,
    sqft: 2600,
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/minimalist-living-room-16349f39-1773260527834.webp',
    features: ['Solar Panels', 'Zen Garden', 'Open Plan', 'Natural Light'],
    coordinates: { lat: 34.0900, lng: -118.3617 },
    virtualTourUrl: 'https://my.matterport.com/show/?m=example3',
    agentId: 'a2',
    status: 'For Sale',
    yearBuilt: 2021
  }
];

export const MOCK_AGENTS: Agent[] = [
  {
    id: 'a1',
    name: 'David Sterling',
    role: 'Senior Real Estate Specialist',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/real-estate-agent-1-70049fab-1773260534526.webp',
    phone: '+1 (555) 123-4567',
    email: 'david@egeree.com',
    bio: 'With over 15 years in luxury construction and real estate, David brings a unique technical perspective to property acquisition.',
    rating: 4.9,
    listingsCount: 24
  },
  {
    id: 'a2',
    name: 'Sarah Jenkins',
    role: 'Modern Living Specialist',
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    phone: '+1 (555) 987-6543',
    email: 'sarah@egeree.com',
    bio: 'Sarah specializes in finding the perfect urban sanctuary for modern professionals and creative minds.',
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
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael'
  },
  {
    id: 't2',
    name: 'Elena Rodriguez',
    role: 'Investor',
    content: 'The property management and market insights provided by EGEREE helped me scale my portfolio efficiently.',
    imageUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena'
  }
];

export const MOCK_NEIGHBORHOODS: Neighborhood[] = [
  {
    id: 'n1',
    name: 'Beverly Hills',
    description: 'Iconic luxury, palm-lined streets, and world-class amenities.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/suburban-neighborhood-2cfe57b6-1773260527379.webp',
    stats: {
      medianPrice: 2450000,
      crimeRate: 'Very Low',
      schools: 'A+',
      vibe: 'Sophisticated & Private'
    }
  },
  {
    id: 'n2',
    name: 'West Hollywood',
    description: 'A vibrant hub for design, fashion, and creative living.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/minimalist-living-room-16349f39-1773260527834.webp',
    stats: {
      medianPrice: 1350000,
      crimeRate: 'Low',
      schools: 'A',
      vibe: 'Creative & Walkable'
    }
  }
];

export const MOCK_MARKET_TRENDS_DATA = [
  { month: 'Jan', price: 820000 },
  { month: 'Feb', price: 845000 },
  { month: 'Mar', price: 830000 },
  { month: 'Apr', price: 890000 },
  { month: 'May', price: 920000 },
  { month: 'Jun', price: 950000 },
];