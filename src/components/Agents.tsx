import React from 'react';
import { AGENTS } from '../data/mockData';
import { Phone, Mail, Instagram, Linkedin, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

export const Agents = () => {
  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! Our agent will contact you shortly.');
  };

  return (
    <section id="agents" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Dedicated Support</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
            Work with our elite team of real estate experts to find your dream construction project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {AGENTS.map((agent) => (
            <div key={agent.id} className="bg-white rounded-[3rem] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center border border-gray-100 shadow-xl shadow-gray-200/50">
              <div className="relative group shrink-0">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-48 h-48 rounded-full object-cover relative z-10 border-4 border-white shadow-2xl"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.2em] mb-2 block">{agent.role}</span>
                <h3 className="text-3xl font-black text-gray-900 mb-4">{agent.name}</h3>
                <div className="space-y-3 mb-8">
                  <a href={`tel:${agent.phone}`} className="flex items-center justify-center md:justify-start gap-3 text-gray-500 hover:text-blue-600 font-bold transition-colors">
                    <Phone size={18} />
                    {agent.phone}
                  </a>
                  <a href={`mailto:${agent.email}`} className="flex items-center justify-center md:justify-start gap-3 text-gray-500 hover:text-blue-600 font-bold transition-colors">
                    <Mail size={18} />
                    {agent.email}
                  </a>
                </div>
                <div className="flex justify-center md:justify-start gap-4">
                  {[Linkedin, Instagram, MessageSquare].map((Icon, i) => (
                    <button key={i} className="p-3 rounded-2xl bg-gray-50 text-gray-400 hover:bg-blue-600 hover:text-white transition-all">
                      <Icon size={20} />
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleContact} className="w-full md:w-72 bg-gray-50 p-6 rounded-[2rem] space-y-4">
                <h4 className="font-black text-gray-900 text-sm uppercase tracking-wider mb-2">Quick Message</h4>
                <input
                  required
                  placeholder="Your Name"
                  className="w-full bg-white border-none rounded-xl p-3 text-sm font-medium focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  required
                  placeholder="Inquiry Details"
                  rows={2}
                  className="w-full bg-white border-none rounded-xl p-3 text-sm font-medium focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold text-sm hover:bg-black transition-colors">
                  Send Inquiry
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};