
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-empowerher-500 to-coral-500 flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="font-bold text-xl text-gray-900">EmpowerHer</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/financing" className="text-gray-600 hover:text-empowerher-600 transition-colors">Financing</Link>
            <Link to="/credit" className="text-gray-600 hover:text-empowerher-600 transition-colors">Credit Evaluation</Link>
            <Link to="/academy" className="text-gray-600 hover:text-empowerher-600 transition-colors">Academy</Link>
            <Link to="/about" className="text-gray-600 hover:text-empowerher-600 transition-colors">About</Link>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-empowerher-500 to-coral-500 hover:from-empowerher-600 hover:to-coral-600 text-white border-none">
              Get Started
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
