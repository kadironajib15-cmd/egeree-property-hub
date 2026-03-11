import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, ArrowUpRight, TrendingUp } from 'lucide-react';
import { MARKET_TRENDS_DATA } from '../../data/mock-data';
import { formatCurrency } from '../../lib/utils';

export function MarketTrends() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Market Trends</h2>
            <p className="text-slate-600 mb-8">Real-time data visualization of local real estate trends.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="text-2xl font-bold text-slate-900">+12.4%</div>
                <div className="text-xs text-slate-400">Growth YoY</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MARKET_TRENDS_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" hide />
                <YAxis hide />
                <Tooltip />
                <Area type="monotone" dataKey="price" stroke="#2563eb" fill="#dbeafe" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}