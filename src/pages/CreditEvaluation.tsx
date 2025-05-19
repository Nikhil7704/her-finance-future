
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, GraduationCap, FileText, ArrowRight } from 'lucide-react';

const CreditEvaluation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-empowerher-50 to-coral-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Redefining Credit</span>
                  <span className="block text-empowerher-600">For Women Entrepreneurs</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-2xl">
                  Our AI-powered credit evaluation system looks beyond traditional metrics to recognize the true potential of women-owned businesses.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-empowerher-500 to-coral-500 hover:from-empowerher-600 hover:to-coral-600 text-white">
                    Get Your Credit Evaluation
                  </Button>
                  <Button variant="outline">
                    Learn How It Works
                  </Button>
                </div>
              </div>
              <div className="lg:pl-8">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" 
                    alt="Credit Evaluation Dashboard" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-empowerher-900/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How Our Evaluation Works</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                We assess your business potential using data points that traditional banks often overlook.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-empowerher-100 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-empowerher-600" />
                  </div>
                  <CardTitle className="text-xl">Holistic Financial Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We analyze your cash flow patterns, revenue consistency, and growth trajectory, not just credit scores and collateral.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-coral-100 flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-coral-600" />
                  </div>
                  <CardTitle className="text-xl">Business Potential Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our AI evaluates your business model, market opportunity, and competitive advantage to understand your growth potential.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-empowerher-100 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-empowerher-600" />
                  </div>
                  <CardTitle className="text-xl">Character and Capability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We consider your entrepreneurial experience, adaptability, and commitment to your business success.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Academy Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Credit Academy</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Build your knowledge and improve your credit profile with our educational resources.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-md overflow-hidden">
                <div className="flex flex-col h-full">
                  <div className="h-48 bg-empowerher-100">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
                      alt="Credit Fundamentals Course"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Credit Fundamentals</CardTitle>
                    <CardDescription>For Beginners</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600">
                      Learn the basics of credit, how scoring works, and simple strategies to improve your business credit profile.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-empowerher-600 mr-2" />
                        <span className="text-gray-700">Understanding credit reports</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-empowerher-600 mr-2" />
                        <span className="text-gray-700">Building business credit</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-empowerher-600 mr-2" />
                        <span className="text-gray-700">Credit repair strategies</span>
                      </li>
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <Button className="w-full">
                      Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="border-0 shadow-md overflow-hidden">
                <div className="flex flex-col h-full">
                  <div className="h-48 bg-coral-100">
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
                      alt="Advanced Credit Strategies Course"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>Advanced Credit Strategies</CardTitle>
                    <CardDescription>For Growing Businesses</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600">
                      Discover sophisticated credit optimization techniques and alternative funding strategies for your growing business.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-coral-600 mr-2" />
                        <span className="text-gray-700">Advanced credit utilization</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-coral-600 mr-2" />
                        <span className="text-gray-700">Strategic debt management</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-coral-600 mr-2" />
                        <span className="text-gray-700">Alternative funding sources</span>
                      </li>
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <Button className="w-full bg-gradient-to-r from-coral-500 to-empowerher-500 hover:from-coral-600 hover:to-empowerher-600 text-white">
                      Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-empowerher-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Ready to transform your credit profile?</h2>
              <p className="mt-4 text-lg text-empowerher-100 max-w-2xl mx-auto">
                Join thousands of women entrepreneurs who have improved their credit and accessed the funding they deserve.
              </p>
              <div className="mt-8">
                <Button className="bg-white text-empowerher-900 hover:bg-empowerher-50">
                  Get Your Free Credit Evaluation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CreditEvaluation;
