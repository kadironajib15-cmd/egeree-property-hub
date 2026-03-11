import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Calculator, DollarSign, Percent, Calendar, PieChart, ShieldCheck } from 'lucide-react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const MortgageCalculator = () => {
  const [homePrice, setHomePrice] = useState(1250000);
  const [downPayment, setDownPayment] = useState(250000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(6320);

  const calculateMortgage = () => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const payment = 
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    setMonthlyPayment(payment);
    toast.success("Affordability updated!");
  };

  return (
    <div className="max-w-7xl mx-auto py-24 px-6">
      <div className="text-center mb-20 max-w-2xl mx-auto">
        <div className="text-blue-600 font-black uppercase tracking-[0.2em] text-[10px] mb-4">Financial Tools</div>
        <h2 className="text-5xl font-black text-gray-900 mb-6 tracking-tight">Affordability Analysis</h2>
        <p className="text-gray-500 text-xl font-medium">Precision tools for planning your high-value property acquisition.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <Card className="border-none shadow-[0_48px_80px_-16px_rgba(0,0,0,0.08)] bg-white rounded-[3rem] p-4">
            <CardHeader className="p-8">
              <CardTitle className="text-2xl font-black text-gray-900 flex items-center">
                <div className="bg-blue-600 p-3 rounded-2xl mr-4 text-white">
                   <Calculator className="w-6 h-6" />
                </div>
                Parameters
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-8">
              <div className="space-y-3">
                <Label className="font-black text-xs uppercase tracking-widest text-gray-400">Home Price</Label>
                <div className="relative">
                  <DollarSign className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input 
                    type="number" 
                    className="h-16 pl-14 pr-6 rounded-2xl border-2 border-gray-50 bg-gray-50 focus:bg-white focus:border-blue-500 transition-all font-black text-lg"
                    value={homePrice} 
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label className="font-black text-xs uppercase tracking-widest text-gray-400">Down Payment</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input 
                      type="number" 
                      className="h-14 pl-12 pr-6 rounded-2xl border-2 border-gray-50 bg-gray-50 focus:bg-white transition-all font-bold"
                      value={downPayment} 
                      onChange={(e) => setDownPayment(Number(e.target.value))}
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label className="font-black text-xs uppercase tracking-widest text-gray-400">Interest Rate %</Label>
                  <div className="relative">
                    <Percent className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input 
                      type="number" 
                      step="0.1"
                      className="h-14 pl-12 pr-6 rounded-2xl border-2 border-gray-50 bg-gray-50 focus:bg-white transition-all font-bold"
                      value={interestRate} 
                      onChange={(e) => setInterestRate(Number(e.target.value))}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Label className="font-black text-xs uppercase tracking-widest text-gray-400">Loan Term (Years)</Label>
                <div className="grid grid-cols-3 gap-2">
                  {[15, 20, 30].map(term => (
                    <button
                      key={term}
                      onClick={() => setLoanTerm(term)}
                      className={`py-4 rounded-xl font-black text-sm transition-all ${
                        loanTerm === term ? 'bg-gray-900 text-white shadow-xl shadow-gray-900/20' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                      }`}
                    >
                      {term}Y
                    </button>
                  ))}
                </div>
              </div>

              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 py-10 rounded-[2rem] font-black text-xl shadow-2xl shadow-blue-600/20 mt-4"
                onClick={calculateMortgage}
              >
                Estimate Payment
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-[3.5rem] p-16 text-white h-full relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -mr-200 -mt-200" />
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center gap-4 mb-10">
                   <div className="bg-white/10 p-4 rounded-2xl border border-white/10">
                      <PieChart className="w-8 h-8 text-blue-400" />
                   </div>
                   <h3 className="text-3xl font-black tracking-tight">Financial Forecast</h3>
                </div>
                
                <div className="mb-16">
                   <span className="text-gray-400 font-black uppercase tracking-[0.2em] text-[10px]">Estimated Monthly Payment</span>
                   <div className="text-[7rem] md:text-[8rem] font-black leading-none tracking-tighter mt-4 flex items-start">
                     <span className="text-4xl mt-6 mr-4 opacity-30">$</span>
                     {monthlyPayment ? Math.round(monthlyPayment).toLocaleString() : '0'}
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 backdrop-blur-md">
                   <div className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">Total Principal</div>
                   <div className="text-3xl font-black">${(homePrice - downPayment).toLocaleString()}</div>
                </div>
                <div className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 backdrop-blur-md">
                   <div className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-2">Total Interest</div>
                   <div className="text-3xl font-black">${monthlyPayment ? Math.round((monthlyPayment * loanTerm * 12) - (homePrice - downPayment)).toLocaleString() : '0'}</div>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-4 text-gray-400 font-bold bg-white/5 p-6 rounded-[2rem] border border-white/5">
                <ShieldCheck className="w-6 h-6 text-green-500" />
                <p className="text-xs italic leading-relaxed">Financial estimates are provided for planning purposes only. Consult with our construction finance experts for official loan structures.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;