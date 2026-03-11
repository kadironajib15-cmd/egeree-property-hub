import React, { useState } from 'react';
import { MOCK_AGENTS, MOCK_PROPERTIES } from '../data/mock-data';
import PropertyCard from '../components/property/PropertyCard';
import { Mail, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export function AgentsPage() {
  const [selectedAgent, setSelectedAgent] = useState(MOCK_AGENTS[0]);
  const agentProperties = MOCK_PROPERTIES.filter(p => p.agentId === selectedAgent.id);

  return (
    <div className="pt-32 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
          <aside className="w-full md:w-96 space-y-6">
            <h2 className="text-xl font-black text-gray-400 uppercase tracking-[0.2em] mb-10">Expert Directory</h2>
            {MOCK_AGENTS.map((agent) => (
              <button
                key={agent.id}
                onClick={() => setSelectedAgent(agent)}
                className={`w-full flex items-center gap-6 p-8 rounded-[2.5rem] border-2 transition-all ${
                  selectedAgent.id === agent.id 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-2xl shadow-blue-600/20' 
                  : 'bg-white border-gray-50 text-gray-900 hover:border-blue-100 hover:bg-gray-50'
                }`}
              >
                <img src={agent.imageUrl} className="h-16 w-16 rounded-2xl object-cover shadow-lg" alt={agent.name} />
                <div className="text-left">
                  <div className="font-black text-lg tracking-tight">{agent.name}</div>
                  <div className={`text-[10px] font-black uppercase tracking-widest ${selectedAgent.id === agent.id ? 'text-blue-200' : 'text-blue-600'}`}>
                    {agent.role}
                  </div>
                </div>
              </button>
            ))}
          </aside>

          <main className="flex-1">
            <motion.div 
              key={selectedAgent.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-20"
            >
              <section className="flex flex-col lg:flex-row gap-12 items-start bg-gray-50 p-12 rounded-[3.5rem] border border-gray-100">
                <img 
                  src={selectedAgent.imageUrl} 
                  className="h-96 w-full lg:w-96 rounded-[3rem] object-cover shadow-2xl" 
                  alt={selectedAgent.name} 
                />
                <div className="flex-1">
                  <h1 className="text-6xl font-black text-gray-900 mb-6 tracking-tighter">{selectedAgent.name}</h1>
                  <p className="text-xl text-blue-600 font-black uppercase tracking-widest mb-8">{selectedAgent.role}</p>
                  <p className="text-xl text-gray-500 leading-relaxed mb-12 font-medium">{selectedAgent.bio}</p>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700 h-16 px-10 rounded-2xl font-black text-lg shadow-xl shadow-blue-600/20">Message david@egeree.com</Button>
                    <Button variant="outline" className="h-16 px-10 rounded-2xl font-black text-lg border-2">Download Profile</Button>
                  </div>
                </div>
              </section>

              <section>
                <div className="flex items-center justify-between mb-12">
                   <h2 className="text-4xl font-black text-gray-900 tracking-tight">Active Portfolio</h2>
                   <div className="text-gray-400 font-black uppercase tracking-widest text-xs">{agentProperties.length} Current Listings</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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

export default AgentsPage;