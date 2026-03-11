import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { AGENTS, PROPERTIES } from '../data/mockData';
import { 
  Phone, Mail, Linkedin, Twitter, Star, 
  ChevronRight, ArrowLeft, MessageSquare, 
  MapPin, Award, CheckCircle 
} from 'lucide-react';
import { PropertyCard } from '../components/PropertyCard';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export const AgentProfile: React.FC = () => {
  const { id } = useParams();
  const agent = AGENTS.find(a => a.id === id);
  const agentProperties = PROPERTIES.filter(p => p.agentId === id);
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  if (!agent) return <div className="pt-40 text-center">Agent not found</div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! Sarah will get back to you shortly.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="container mx-auto px-6">
        <Link to="/properties" className="flex items-center text-sm font-bold text-gray-500 hover:text-blue-600 mb-8">
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Properties
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-32">
              <div className="relative mb-8">
                <img 
                  src={agent.photo} 
                  alt={agent.name} 
                  className="w-full aspect-square object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap border-4 border-white">
                  TOP PRODUCER 2024
                </div>
              </div>

              <div className="text-center mb-8">
                <h1 className="text-2xl font-black text-gray-900 mb-1">{agent.name}</h1>
                <p className="text-blue-600 font-bold text-sm mb-4">{agent.role}</p>
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-gray-400 ml-1">(48 Reviews)</span>
                </div>
                
                <div className="flex justify-center gap-4">
                  <a href="#" className="p-3 bg-gray-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-gray-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href="#" className="p-3 bg-gray-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="space-y-4 pt-8 border-t">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase">Mobile</div>
                    <div className="text-sm font-bold text-gray-900">{agent.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 font-bold uppercase">Email</div>
                    <div className="text-sm font-bold text-gray-900">{agent.email}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio and Listings */}
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-black text-gray-900 mb-6">About {agent.name.split(' ')[0]}</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                {agent.bio} With a track record of over $200M in lifetime sales, {agent.name} is dedicated to providing white-glove service to every client. Specializing in high-end developments and exclusive residential properties within the EGEREE portfolio.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-blue-600" /> Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {agent.specialties.map((s, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-50 text-gray-600 text-sm font-medium rounded-lg border border-gray-100">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-blue-600" /> Professional Focus
                  </h4>
                  <ul className="text-sm text-gray-500 space-y-2">
                    <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-blue-600" /> Luxury Portfolio Management</li>
                    <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-blue-600" /> Real Estate Investment Strategy</li>
                    <li className="flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-blue-600" /> International Client Relations</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black text-gray-900">Current Listings</h2>
                <span className="text-sm font-bold text-gray-400">{agentProperties.length} Properties</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {agentProperties.map(p => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>
            </section>

            {/* Contact Form */}
            <section className="bg-blue-600 rounded-3xl p-8 lg:p-12 shadow-xl text-white">
              <div className="max-w-xl">
                <h2 className="text-3xl font-black mb-4">Work with {agent.name.split(' ')[0]}</h2>
                <p className="text-blue-100 mb-8 font-medium">
                  Ready to start your real estate journey? Send a message and we'll reach out within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white/10 border border-white/20 rounded-xl p-4 placeholder:text-white/60 focus:bg-white/20 focus:outline-none transition-all" 
                    />
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-white/10 border border-white/20 rounded-xl p-4 placeholder:text-white/60 focus:bg-white/20 focus:outline-none transition-all" 
                    />
                  </div>
                  <textarea 
                    placeholder="Tell me what you're looking for..." 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/10 border border-white/20 rounded-xl p-4 placeholder:text-white/60 focus:bg-white/20 focus:outline-none transition-all"
                  ></textarea>
                  <button type="submit" className="w-full bg-white text-blue-600 font-bold py-4 rounded-xl hover:bg-blue-50 transition-all transform active:scale-95 shadow-lg">
                    Send Inquiry
                  </button>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};