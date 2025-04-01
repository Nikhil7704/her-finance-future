
import React from 'react';

const stats = [
  { number: "$2.4M+", label: "Capital Deployed" },
  { number: "870+", label: "Women Entrepreneurs Funded" },
  { number: "92%", label: "Repayment Rate" },
  { number: "40+", label: "Countries Served" }
];

const StatsSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-empowerher-600">{stat.number}</div>
              <div className="mt-2 text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
