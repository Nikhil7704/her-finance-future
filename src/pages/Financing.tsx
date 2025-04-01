
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Financing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-empowerher-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Alternative Financing Hub
              </h1>
              <p className="mt-4 text-xl text-gray-600">
                Flexible, non-traditional funding options tailored to women entrepreneurs' unique needs.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Tabs defaultValue="crowdfunding" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="crowdfunding">Crowdfunding Marketplace</TabsTrigger>
              <TabsTrigger value="revenue">Revenue-Based Financing</TabsTrigger>
              <TabsTrigger value="credit-circles">Community Credit Circles</TabsTrigger>
            </TabsList>
            
            <TabsContent value="crowdfunding" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Crowdfunding Marketplace</h2>
                  <p className="text-gray-600 mb-4">
                    Our dedicated platform allows women entrepreneurs to pitch their businesses to impact investors and peer lenders around the world.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-empowerher-500 mr-2">•</span>
                      <span className="text-gray-700"><strong>Impact Story Builder:</strong> AI-assisted tool to create compelling narratives using templates and success metrics.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-empowerher-500 mr-2">•</span>
                      <span className="text-gray-700"><strong>Transparent Fund Tracking:</strong> Blockchain ensures real-time visibility into fund allocation and repayments.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-empowerher-500 mr-2">•</span>
                      <span className="text-gray-700"><strong>Global Reach:</strong> Connect with investors and supporters from around the world.</span>
                    </li>
                  </ul>
                  <Button className="bg-gradient-to-r from-empowerher-500 to-coral-500 hover:from-empowerher-600 hover:to-coral-600 text-white">
                    Start Your Campaign
                  </Button>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                    alt="Crowdfunding" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 bg-white">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Success Story: Kenyan Artisan Collective</h3>
                    <p className="text-gray-600 mb-4">
                      A group of women artisans raised $10,000 through small contributions from 200 global supporters to expand their craft business.
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="font-medium text-empowerher-600">$10,000</span>
                        <span className="text-gray-500 text-sm ml-1">raised</span>
                      </div>
                      <div>
                        <span className="font-medium text-empowerher-600">200</span>
                        <span className="text-gray-500 text-sm ml-1">supporters</span>
                      </div>
                      <div>
                        <span className="font-medium text-empowerher-600">45</span>
                        <span className="text-gray-500 text-sm ml-1">days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 mt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Featured Campaigns</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((item) => (
                    <Card key={item} className="empowerher-card">
                      <img 
                        src={`https://source.unsplash.com/random/300x200?business&sig=${item}`} 
                        alt="Campaign" 
                        className="w-full h-40 object-cover rounded-t-xl"
                      />
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">Eco-Friendly Packaging</CardTitle>
                        <CardDescription>Sustainable solutions for local businesses</CardDescription>
                      </CardHeader>
                      <CardContent className="pb-2">
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-empowerher-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                        <div className="flex justify-between mt-2 text-sm">
                          <span className="text-gray-600">$7,000 raised</span>
                          <span className="text-empowerher-600 font-medium">70%</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">View Campaign</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="revenue" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Revenue-Based Financing</h2>
                  <p className="text-gray-600 mb-4">
                    Our flexible funding solution where loans are repaid as a percentage of your monthly revenue, reducing cash flow strain during slower periods.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-empowerher-500 mr-2">•</span>
                      <span className="text-gray-700"><strong>Flexible Repayments:</strong> Pay 5-10% of monthly revenue instead of fixed amounts.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-empowerher-500 mr-2">•</span>
                      <span className="text-gray-700"><strong>Dynamic Adjustment:</strong> Algorithm adjusts rates based on real-time sales data from integrated platforms.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-empowerher-500 mr-2">•</span>
                      <span className="text-gray-700"><strong>No Collateral Required:</strong> Funding based on business performance, not assets.</span>
                    </li>
                  </ul>
                  <Button className="bg-gradient-to-r from-empowerher-500 to-coral-500 hover:from-empowerher-600 hover:to-coral-600 text-white">
                    Check Your Eligibility
                  </Button>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                    alt="Revenue-Based Financing" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 bg-white">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">How It Works</h3>
                    <div className="space-y-4 mt-4">
                      <div className="flex items-start">
                        <div className="bg-empowerher-100 text-empowerher-600 font-bold h-8 w-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">1</div>
                        <div>
                          <h4 className="font-medium text-gray-900">Connect your sales platforms</h4>
                          <p className="text-gray-600 text-sm">Integrate with Shopify, Jumia, or other e-commerce platforms</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-empowerher-100 text-empowerher-600 font-bold h-8 w-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">2</div>
                        <div>
                          <h4 className="font-medium text-gray-900">Receive funding offer</h4>
                          <p className="text-gray-600 text-sm">Based on your sales history and growth potential</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-empowerher-100 text-empowerher-600 font-bold h-8 w-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">3</div>
                        <div>
                          <h4 className="font-medium text-gray-900">Repay as you earn</h4>
                          <p className="text-gray-600 text-sm">A small percentage of daily sales is automatically collected</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="credit-circles" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Community Credit Circles</h2>
                  <p className="text-gray-600 mb-4">
                    Group lending pools where 5-10 women entrepreneurs co-guarantee loans, leveraging social capital to bypass traditional collateral requirements.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-empowerher-500 mr-2">•</span>
                      <span className="text-gray-700"><strong>Peer Accountability:</strong> Dashboard tracks repayments and sends SMS reminders to group members.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-empowerher-500 mr-2">•</span>
                      <span className="text-gray-700"><strong>Shared Success Bonuses:</strong> Reduced interest rates for circles with 100% on-time repayments.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-empowerher-500 mr-2">•</span>
                      <span className="text-gray-700"><strong>Community Support:</strong> Building stronger business networks while accessing capital.</span>
                    </li>
                  </ul>
                  <Button className="bg-gradient-to-r from-empowerher-500 to-coral-500 hover:from-empowerher-600 hover:to-coral-600 text-white">
                    Join a Credit Circle
                  </Button>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                    alt="Community Credit Circles" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 bg-white">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">Credit Circle Performance</h3>
                    <div className="space-y-3 mt-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">Lagos Entrepreneurs Circle</span>
                          <span className="text-green-600 font-medium">100% Repayment</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full w-full"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">Nairobi Tech Founders</span>
                          <span className="text-green-600 font-medium">92% Repayment</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full w-[92%]"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">Accra Market Women</span>
                          <span className="text-green-600 font-medium">98% Repayment</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full w-[98%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Financing;
