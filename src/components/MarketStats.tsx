import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MARKET_TRENDS } from '../data/mockData';
import { TrendingUp, Info } from 'lucide-react';

export const MarketStats: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h3 className="text-xl font-black text-gray-900 mb-1">Market Performance</h3>
          <p className="text-gray-400 text-sm font-medium">Real-time local data feed</p>
        </div>
        <div className="flex items-center text-green-600 bg-green-50 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider">
          <TrendingUp className="w-4 h-4 mr-1.5" /> Bullish
        </div>
      </div>

      <div className="h-[300px] mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={MARKET_TRENDS}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2563eb" stopOpacity={0.15}/>
                <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 10, fontWeight: 700}} tickFormatter={(value) => `$${value/1000}k`} />
            <Tooltip 
              contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)', padding: '12px' }}
              labelStyle={{ fontWeight: 800, color: '#1e293b', marginBottom: '4px' }}
            />
            <Area type="monotone" dataKey="price" stroke="#2563eb" strokeWidth={4} fillOpacity={1} fill="url(#colorPrice)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-50 rounded-2xl flex items-start gap-3">
          <Info className="w-4 h-4 text-blue-600 mt-0.5" />
          <p className="text-[10px] text-gray-500 font-bold leading-relaxed uppercase">
            Avg. price growth of 12.5% in the last 6 months across Seaside Heights properties.
          </p>
        </div>
        <div className="p-4 bg-blue-600 rounded-2xl text-white text-center flex flex-col justify-center">
          <div className="text-[10px] font-black uppercase opacity-60">Avg. Sqft Price</div>
          <div className="text-lg font-black">$1,450</div>
        </div>
      </div>
    </div>
  );
};