import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { HomePage } from './pages/HomePage';
import { ListingsPage } from './pages/ListingsPage';
import { PropertyDetailPage } from './pages/PropertyDetailPage';
import { AgentsPage } from './pages/AgentsPage';
import { NeighborhoodsPage } from './pages/NeighborhoodsPage';
import { Toaster } from 'sonner';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-600">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/listings" element={<ListingsPage />} />
            <Route path="/properties/:id" element={<PropertyDetailPage />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/neighborhoods" element={<NeighborhoodsPage />} />
          </Routes>
        </main>
        
        <footer className="bg-slate-900 text-white py-20 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <img src="https://storage.googleapis.com/dala-prod-public-storage/attachments/11007e86-66bf-437e-969a-429a955a44b0/1773259194029_IMG_20251224_004455_653.jpg" className="h-10 rounded shadow-lg" alt="Logo" />
                  <span className="text-2xl font-black tracking-tight">EGEREE CONSTRUCTION</span>
                </div>
                <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
                  Redefining luxury through architectural mastery and unparalleled engineering. From conception to completion, we build the spaces where legends live.
                </p>
                <div className="flex gap-4">
                  {['Twitter', 'Instagram', 'LinkedIn', 'YouTube'].map(social => (
                    <a key={social} href="#" className="text-slate-500 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">{social}</a>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                <ul className="space-y-4 text-slate-400">
                  <li><Link to="/listings" className="hover:text-blue-400">View Listings</Link></li>
                  <li><Link to="/agents" className="hover:text-blue-400">Our Agents</Link></li>
                  <li><Link to="/neighborhoods" className="hover:text-blue-400">Market Guide</Link></li>
                  <li><a href="#" className="hover:text-blue-400 font-bold text-blue-400">Build With Us</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-lg mb-6">Offices</h4>
                <ul className="space-y-4 text-slate-400 text-sm">
                  <li>
                    <strong className="text-white block">Los Angeles HQ</strong>
                    123 Sunset Blvd, CA 90210
                  </li>
                  <li>
                    <strong className="text-white block">New York Studio</strong>
                    456 5th Avenue, NY 10001
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-bold uppercase tracking-widest">
              <div>© 2024 EGEREE CONSTRUCTION. All Rights Reserved.</div>
              <div className="flex gap-8">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
        <Toaster position="bottom-right" richColors />
      </div>
    </Router>
  );
}

export default App;