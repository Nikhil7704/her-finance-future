
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden bg-gray-50 pt-16 pb-32">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-r from-empowerher-50 to-coral-50 lg:block" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <div className="max-w-md mx-auto lg:mx-0 lg:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block">Financial freedom</span>
                <span className="block gradient-text">for every woman</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                EmpowerHer Finance is dismantling barriers for women entrepreneurs through alternative financing, 
                AI-powered credit evaluation, and practical financial education.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button className="bg-gradient-to-r from-empowerher-500 to-coral-500 hover:from-empowerher-600 hover:to-coral-600 text-white text-lg py-6 px-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                  Start Your Journey
                </Button>
                <button 
                  onClick={scrollToFeatures} 
                  className="flex items-center text-empowerher-600 hover:text-empowerher-700 font-medium transition-colors"
                >
                  Learn More
                  <ArrowDown className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-16 lg:mt-0 lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1571727629954-064e23874e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Women entrepreneurs celebrating success" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-empowerher-900/50 to-transparent opacity-60"></div>
              </div>
              <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-xl shadow-lg p-4 w-48 animate-fade-up">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-900">Funding approved!</span>
                </div>
                <div className="mt-2">
                  <span className="text-xs text-gray-500">$12,500 at 5% revenue share</span>
                </div>
              </div>
              <div className="absolute -left-4 bottom-8 animate-fade-up delay-100 bg-white rounded-xl shadow-lg p-4 w-48">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-coral-100 flex items-center justify-center">
                    <svg className="h-5 w-5 text-coral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <span className="font-medium text-gray-900">Credit Score</span>
                </div>
                <div className="mt-2">
                  <div className="h-2 rounded-full bg-gray-200">
                    <div className="h-2 rounded-full bg-gradient-to-r from-empowerher-400 to-empowerher-600 w-4/5"></div>
                  </div>
                  <div className="mt-1 flex justify-between text-xs">
                    <span className="text-gray-500">Previous</span>
                    <span className="font-medium text-empowerher-600">+35 points</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
