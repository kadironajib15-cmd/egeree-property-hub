import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MOCK_MARKET_TRENDS_DATA } from '../../data/mock-data';
import { TrendingUp, MapPin, BarChart3, ArrowUpRight, Activity } from 'lucide-react';

export const MarketTrends = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Market Analytics</div>
            <h2 className="text-5xl font-black text-gray-900 tracking-tight">Local Market Trends</h2>
            <p className="text-gray-500 mt-6 text-xl font-medium">Real-time data visualization of the luxury real estate economy.</p>
          </div>
          <div className="bg-gray-50 px-8 py-6 rounded-[2.5rem] border border-gray-100 flex items-center gap-6 shadow-sm">
             <div className="bg-green-500/10 p-4 rounded-2xl">
                <TrendingUp className="text-green-600 w-8 h-8" />
             </div>
             <div>
                <div className="text-3xl font-black text-gray-900">+12.5%</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-gray-400">Annual Appreciation</div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <Card className="lg:col-span-8 border-none shadow-[0_48px_80px_-16px_rgba(0,0,0,0.08)] rounded-[3rem] overflow-hidden bg-white p-4">
            <CardHeader className="p-10 pb-0">
              <CardTitle className="text-xl font-black text-gray-900 flex justify-between items-center">
                <div className="flex items-center gap-3">
                   <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                      <Activity className="w-5 h-5" />
                   </div>
                   Median Sale Price Index
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-10 h-[500px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={MOCK_MARKET_TRENDS_DATA}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.15}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 900 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 900 }}
                    tickFormatter={(value) => `$${value/1000}k`}
                    dx={-10}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '24px', border: 'none', boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.15)', padding: '20px' }}
                    labelStyle={{ fontWeight: 900, fontSize: '12px', textTransform: 'uppercase', color: '#64748b' }}
                    itemStyle={{ fontWeight: 900, fontSize: '18px', color: '#1e293b' }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, 'Price Index']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#2563eb" 
                    strokeWidth={6}
                    fillOpacity={1} 
                    fill="url(#colorPrice)" 
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="lg:col-span-4 space-y-10">
            <Card className="border-none shadow-2xl bg-gray-900 text-white rounded-[3.5rem] p-4 group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000" />
              <CardContent className="p-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="bg-white/10 p-4 rounded-[2rem] border border-white/10">
                    <MapPin className="w-8 h-8 text-blue-400" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-4 py-2 bg-blue-600 rounded-full shadow-lg">Hot Zone</span>
                </div>
                <h3 className="text-3xl font-black mb-4 tracking-tight">Beverly Hills</h3>
                <p className="text-gray-400 text-sm font-medium mb-10 leading-relaxed">Inventory remains at historic lows, fueling a highly competitive seller's market for estate properties.</p>
                <div className="flex items-end justify-between">
                   <div>
                      <div className="text-5xl font-black">$2.8M</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-blue-500 mt-2">Median Entry</div>
                   </div>
                   <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                      <ArrowUpRight className="w-5 h-5" />
                   </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketTrends;