import React, { useState } from 'react';
import { MOCK_AGENTS, MOCK_PROPERTIES } from '../data/mock-data';
import { PropertyCard } from '../components/property/PropertyCard';
import { Mail, Phone, Star, ShieldCheck, MapPin, Award, Search } from 'lucide-react';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export function AgentsPage() {
  const [selectedAgent, setSelectedAgent] = useState(MOCK_AGENTS[0]);

  const agentProperties = MOCK_PROPERTIES.filter(p => p.agentId === selectedAgent.id);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Message sent to ${selectedAgent.name}! We'll get back to you soon.`);
  };

  return (
    <div className="pt-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Agent Sidebar List */}
          <aside className="w-full md:w-80 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Our Experts</h2>
            {MOCK_AGENTS.map((agent) => (
              <button
                key={agent.id}
                onClick={() => setSelectedAgent(agent)}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all ${
                  selectedAgent.id === agent.id 
                  ? 'bg-blue-50 border-blue-200 shadow-md ring-2 ring-blue-100' 
                  : 'bg-white border-slate-100 hover:border-blue-100 hover:bg-slate-50'
                }`}
              >
                <img src={agent.imageUrl} className="h-12 w-12 rounded-full object-cover" alt={agent.name} />
                <div className="text-left">
                  <div className="font-bold text-slate-900 text-sm">{agent.name}</div>
                  <div className="text-xs text-slate-400">{agent.role}</div>
                </div>
              </button>
            ))}
          </aside>

          {/* Agent Profile Detail */}
          <main className="flex-1 space-y-12">
            <motion.div 
              key={selectedAgent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              <section className="flex flex-col md:flex-row gap-10 items-start">
                <img 
                  src={selectedAgent.imageUrl} 
                  className="h-64 w-64 md:h-80 md:w-80 rounded-[40px] object-cover shadow-2xl" 
                  alt={selectedAgent.name} 
                />
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">{selectedAgent.name}</h1>
                  <p className="text-xl text-slate-600 mb-6">{selectedAgent.role}</p>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">{selectedAgent.bio}</p>
                  <div className="flex gap-4">
                    <Button size="lg" className="bg-blue-600">Consultation</Button>
                    <Button size="lg" variant="outline">Email Agent</Button>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6">Recent Listings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {agentProperties.map(p => <PropertyCard key={p.id} property={p} />)}
                </div>
              </section>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}