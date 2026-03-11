export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  type: 'House' | 'Apartment' | 'Villa' | 'Condo';
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  imageUrl: string;
  images?: string[];
  features: string[];
  coordinates: { lat: number; lng: number };
  virtualTourUrl?: string;
  agentId: string;
  status: 'For Sale' | 'For Rent';
  yearBuilt: number;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  phone: string;
  email: string;
  bio: string;
  rating: number;
  listingsCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  role: string;
  imageUrl: string;
}

export interface Neighborhood {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  stats: {
    medianPrice: number;
    crimeRate: string;
    schools: string;
    vibe: string;
  };
}