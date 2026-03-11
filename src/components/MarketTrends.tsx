import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { MARKET_DATA } from '../data/mockData';
import { TrendingUp, Activity, BarChart3, Info } from 'lucide-react';

export const MarketTrends = () => {
  return (
    <section id="trends" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">
              <Activity size={16} />
              Real-Time Market Insights
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
              Stay Ahead of the <br />
              <span className="text-blue-600">Property Market.</span>
            </h2>
            <p className="text-gray-500 font-medium">
              We track thousands of data points to provide you with the most accurate real estate trends. Make informed decisions based on real market performance.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">Median Price</p>
              <div className="text-2xl font-black text-gray-900">$1.25M</div>
              <div className="text-emerald-500 text-xs font-bold flex items-center gap-1 mt-1">
                <TrendingUp size={12} /> +8.4% YoY
              </div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
              <p className="text-gray-400 text-[10px] font-bold uppercase mb-1">Days on Market</p>
              <div className="text-2xl font-black text-gray-900">18 Days</div>
              <div className="text-red-500 text-xs font-bold flex items-center gap-1 mt-1">
                -2 Days from Dec
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-gray-900 flex items-center gap-2">
                <BarChart3 size={20} className="text-blue-600" />
                Price Performance Index
              </h3>
              <div className="flex gap-2">
                <div className="flex items-center gap-1.5 text-xs font-bold text-gray-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" /> Average Price
                </div>
              </div>
            </div>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={MARKET_DATA}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 600}}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 600}}
                    tickFormatter={(value) => `$${value/1000000}M`}
                  />
                  <Tooltip 
                    contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'}}
                    labelStyle={{fontWeight: 800, color: '#1e293b'}}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="avgPrice" 
                    stroke="#2563eb" 
                    strokeWidth={4} 
                    fillOpacity={1} 
                    fill="url(#colorPrice)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-200/50">
            <h3 className="font-bold text-gray-900 mb-8 flex items-center gap-2">
              <Info size={20} className="text-blue-600" />
              Inventory Trends
            </h3>
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={MARKET_DATA}>
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#94a3b8', fontSize: 12, fontWeight: 600}}
                  />
                  <Bar 
                    dataKey="inventory" 
                    fill="#3b82f6" 
                    radius={[10, 10, 0, 0]} 
                    barSize={24}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-50">
              <p className="text-xs text-gray-400 font-medium leading-relaxed">
                Inventory levels remain tight, contributing to continued price support in core markets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};