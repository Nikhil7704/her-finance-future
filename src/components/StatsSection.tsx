
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { number: "$2.4M+", label: "Capital Deployed" },
  { number: "870+", label: "Women Entrepreneurs Funded" },
  { number: "92%", label: "Repayment Rate" },
  { number: "40+", label: "Countries Served" }
];

const StatsSection = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Impact</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering women entrepreneurs globally through financial inclusion and support.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 h-full">
              <CardContent className="p-6 text-center flex flex-col justify-center items-center h-full">
                <div className="text-4xl md:text-5xl font-bold text-empowerher-600 mb-3">{stat.number}</div>
                <div className="text-base text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
