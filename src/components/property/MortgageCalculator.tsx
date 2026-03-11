import React, { useState, useEffect } from 'react';
import { Calculator, Calendar, Percent } from 'lucide-react';
import { formatCurrency } from '../../lib/utils';
import { Button } from '../ui/button';

interface MortgageCalculatorProps {
  propertyPrice: number;
}

export function MortgageCalculator({ propertyPrice }: MortgageCalculatorProps) {
  const [price, setPrice] = useState(propertyPrice);
  const [downPayment, setDownPayment] = useState(propertyPrice * 0.2);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const principal = price - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      setMonthlyPayment(principal / numberOfPayments);
    } else {
      const payment =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
      setMonthlyPayment(payment);
    }
  }, [price, downPayment, interestRate, loanTerm]);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        <Calculator className="h-5 w-5 text-blue-600" /> Mortgage Calculator
      </h3>

      <div className="space-y-6">
        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 mb-2 flex justify-between">
            Property Price <span>{formatCurrency(price)}</span>
          </label>
          <input
            type="range"
            min={100000}
            max={10000000}
            step={10000}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase text-slate-500 mb-2 flex justify-between">
            Down Payment <span>{formatCurrency(downPayment)}</span>
          </label>
          <input
            type="range"
            min={0}
            max={price}
            step={1000}
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
              Rate (%)
            </label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-slate-500 mb-2">
              Term (Yrs)
            </label>
            <select
              value={loanTerm}
              onChange={(e) => setLoanTerm(Number(e.target.value))}
              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg"
            >
              <option value={15}>15</option>
              <option value={30}>30</option>
            </select>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 text-center">
          <span className="text-sm text-slate-500">Monthly Payment</span>
          <div className="text-4xl font-black text-slate-900">{formatCurrency(monthlyPayment)}</div>
        </div>
      </div>
    </div>
  );
}