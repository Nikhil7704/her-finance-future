
import React from 'react';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-empowerher-600 to-coral-500"></div>
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)]" style={{ backgroundSize: '20px 20px' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to transform your financial future?
        </h2>
        <p className="mt-6 text-xl text-white/80 max-w-2xl mx-auto">
          Join thousands of women entrepreneurs who are accessing the capital, knowledge, and community they need to thrive.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="bg-white text-empowerher-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
            Apply for Financing
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
            Explore the Academy
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
