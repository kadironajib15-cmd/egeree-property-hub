import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Properties } from './components/Properties';
import { MarketTrends } from './components/MarketTrends';
import { Neighborhoods } from './components/Neighborhoods';
import { MortgageCalculator } from './components/MortgageCalculator';
import { Agents } from './components/Agents';
import { PropertyMap } from './components/PropertyMap';
import { Footer } from './components/Footer';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Toaster position="top-center" expand={true} richColors />
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Properties />
        <PropertyMap />
        <MarketTrends />
        <Neighborhoods />
        <MortgageCalculator />
        <Agents />
        
        {/* Testimonials Section */}
        <section className="py-24 bg-blue-600 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
          <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-16 tracking-tight">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'David Chen', text: 'Egeree Construction delivered our dream home with precision. Their attention to detail is unmatched.', company: 'Tech CEO' },
                { name: 'Sarah Jenkins', text: 'The 3D virtual tours made our decision so much easier. Transparent and professional throughout.', company: 'Real Estate Investor' },
                { name: 'Michael Ross', text: 'Their market data tool helped us time our investment perfectly. Highly recommended team.', company: 'Financial Advisor' }
              ].map((t, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/10 text-left hover:bg-white/15 transition-all">
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(s => <span key={s} className="text-yellow-400">★</span>)}
                  </div>
                  <p className="text-white text-lg font-medium italic mb-8">"{t.text}"</p>
                  <div>
                    <h4 className="text-white font-black">{t.name}</h4>
                    <p className="text-blue-200 text-sm font-bold uppercase tracking-wider">{t.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;