import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, DollarSign, Percent, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export const MortgageCalculator = () => {
  const [price, setPrice] = useState(1200000);
  const [downPayment, setDownPayment] = useState(240000);
  const [rate, setRate] = useState(6.5);
  const [term, setTerm] = useState(30);
  const [monthly, setMonthly] = useState(0);

  useEffect(() => {
    const principal = price - downPayment;
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = term * 12;
    const monthlyPayment =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    setMonthly(monthlyPayment);
  }, [price, downPayment, rate, term]);

  return (
    <section id="calculator" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gray-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-[120px] -z-0" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-xs font-bold uppercase tracking-widest mb-8">
                <CalcIcon size={14} />
                Financial Planning
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
                Plan Your New <br />
                <span className="text-blue-400">Chapter Confidently.</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-md">
                Calculate your monthly payments and see how much home you can afford with our interactive mortgage tool.
              </p>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Home Price</label>
                    <span className="text-xl font-black text-white">${price.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="10000000"
                    step="50000"
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Down Payment</label>
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <input
                        type="number"
                        value={downPayment}
                        onChange={(e) => setDownPayment(Number(e.target.value))}
                        className="w-full bg-gray-800 border-none rounded-xl py-4 pl-12 pr-4 font-bold text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Interest Rate (%)</label>
                    <div className="relative">
                      <Percent className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <input
                        type="number"
                        step="0.1"
                        value={rate}
                        onChange={(e) => setRate(Number(e.target.value))}
                        className="w-full bg-gray-800 border-none rounded-xl py-4 pl-12 pr-4 font-bold text-white focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 text-center">
              <h3 className="text-gray-400 font-bold uppercase tracking-[0.2em] text-sm mb-4">Estimated Monthly Payment</h3>
              <div className="text-6xl md:text-8xl font-black text-white mb-4">
                <span className="text-blue-500 text-4xl align-top mt-2 mr-1">$</span>
                {Math.round(monthly).toLocaleString()}
              </div>
              <p className="text-gray-400 font-medium mb-12">Total monthly investment for your future home.</p>
              
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <div className="text-blue-400 font-black text-2xl mb-1">{term} Yrs</div>
                  <div className="text-gray-500 text-[10px] font-bold uppercase">Loan Term</div>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <div className="text-blue-400 font-black text-2xl mb-1">{((downPayment/price)*100).toFixed(0)}%</div>
                  <div className="text-gray-500 text-[10px] font-bold uppercase">Down Payment</div>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-blue-900/40">
                Get Pre-Approved Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};