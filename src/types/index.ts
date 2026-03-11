export interface Property {
  id: string;
  title: string;
  price: number;
  type: 'Villa' | 'Apartment' | 'Townhouse' | 'Penthouse';
  beds: number;
  baths: number;
  sqft: number;
  location: string;
  image: string;
  virtualTourUrl: string;
  description: string;
  features: string[];
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  image: string;
  phone: string;
  email: string;
}

export interface MarketData {
  month: string;
  avgPrice: number;
  inventory: number;
}