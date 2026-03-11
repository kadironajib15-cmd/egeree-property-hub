import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Quote } from 'lucide-react';
import { SearchFilters } from '../components/SearchFilters';
import { PropertyCard } from '../components/PropertyCard';
import { MarketStats } from '../components/MarketStats';
import { PROPERTIES, TESTIMONIALS } from '../data/mockData';
import { motion } from 'framer-motion';

const HERO_IMG = "https://storage.googleapis.com/dala-prod-public-storage/generated-images/d099c8fc-a751-41e4-a464-833f96d3bca0/luxury-mansion-f7dcae01-1773261267235.webp";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} className="w-full h-full object-cover scale-105" alt="Luxury Mansion" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl text-white"
          >
            <span className="inline-block bg-blue-600 px-4 py-1.5 rounded-full text-xs font-black mb-6 tracking-widest uppercase shadow-lg shadow-blue-900/40">
              Elite Construction & Realty
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9]">
              Precision.<br />Craft.<br /><span className="text-blue-500">Excellence.</span>
            </h1>
            <p className="text-xl text-gray-200 mb-12 max-w-xl leading-relaxed font-medium">
              We don't just find homes; we construct legacies. Egeree Construction brings high-performance engineering to luxury real estate.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/properties" className="bg-white text-gray-900 px-10 py-5 rounded-full font-black hover:bg-blue-600 hover:text-white transition-all flex items-center group shadow-2xl">
                Browse Collection <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 relative z-20">
        <SearchFilters onSearch={() => {}} />
      </div>

      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black text-gray-900 mb-6">Curated Portfolio</h2>
              <p className="text-gray-500 text-lg">
                Each property in our collection undergoes a rigorous quality assessment to ensure it meets the Egeree standard of excellence.
              </p>
            </div>
            <Link to="/properties" className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold flex items-center hover:bg-blue-600 transition-all">
              See All <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROPERTIES.slice(0, 3).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-8">Data-Driven Market Intelligence</h2>
              <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                Stay informed with our proprietary market analysis tools. We provide the transparency you need to make confident investment decisions.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div className="p-6 bg-gray-50 rounded-2xl border-l-8 border-blue-600">
                  <div className="text-4xl font-black text-gray-900 mb-1">+12.5%</div>
                  <div className="text-xs text-gray-400 font-black uppercase tracking-widest">Annual Growth</div>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border-l-8 border-blue-600">
                  <div className="text-4xl font-black text-gray-900 mb-1">18d</div>
                  <div className="text-xs text-gray-400 font-black uppercase tracking-widest">Avg. Days to Close</div>
                </div>
              </div>
              <button className="bg-gray-900 text-white px-10 py-4 rounded-xl font-black hover:bg-blue-600 transition-all shadow-xl">
                Download Q4 Report
              </button>
            </div>
            <MarketStats />
          </div>
        </div>
      </section>

      <section className="py-32 bg-blue-600 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-6">Client Experiences</h2>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              We measure our success by the satisfaction of our clients and the integrity of the structures we build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl">
                <Quote className="w-12 h-12 text-white/20 mb-6" />
                <p className="text-2xl font-bold mb-8 italic leading-relaxed">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center font-black">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <div className="font-black text-lg">{testimonial.name}</div>
                    <div className="text-blue-200 text-sm font-bold">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};