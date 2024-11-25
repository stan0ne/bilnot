import React from 'react';
import { Clock } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  highlighted: boolean;
}

export function PricingCard({ title, price, features, buttonText, highlighted }: PricingCardProps) {
  return (
    <div className={`rounded-xl p-8 ${
      highlighted 
        ? 'bg-indigo-600 text-white ring-4 ring-indigo-600 ring-opacity-50' 
        : 'bg-white'
    }`}>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Clock className="h-5 w-5 mr-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <button className={`w-full py-2 px-4 rounded-full transition-colors ${
        highlighted
          ? 'bg-white text-indigo-600 hover:bg-gray-100'
          : 'bg-indigo-600 text-white hover:bg-indigo-700'
      }`}>
        {buttonText}
      </button>
    </div>
  );
}