
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, GraduationCap, FileText, ArrowRight, Settings } from 'lucide-react';

const Academy = () => {
  // Course data
  const beginnerCourses = [
    {
      title: "Financial Literacy Basics",
      description: "Learn the fundamentals of business finance to strengthen your financial foundation.",
      image: "https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?auto=format&fit=crop&w=800&q=80",
      lessons: ["Understanding financial statements", "Cash flow management", "Business budgeting"],
      level: "Beginner",
    },
    {
      title: "Credit Building 101",
      description: "Discover how to establish and improve your business credit profile from scratch.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80",
      lessons: ["Credit score fundamentals", "Building business credit", "Separating personal & business credit"],
      level: "Beginner",
    },
    {
      title: "Funding Readiness",
      description: "Prepare your business to be attractive to various funding sources.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80",
      lessons: ["Documentation preparation", "Business plan development", "Funding option evaluation"],
      level: "Beginner",
    },
  ];

  const advancedCourses = [
    {
      title: "Advanced Credit Optimization",
      description: "Strategic approaches to maximize your business credit and leverage opportunities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      lessons: ["Credit utilization strategies", "Strategic debt management", "Credit repair advanced tactics"],
      level: "Advanced",
    },
    {
      title: "Alternative Funding Mastery",
      description: "Navigate the world of non-traditional funding sources to grow your business.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
      lessons: ["Venture capital readiness", "Crowdfunding campaign creation", "Revenue-based financing negotiation"],
      level: "Advanced",
    },
    {
      title: "Financial Growth Strategies",
      description: "Advanced tactics to sustainably scale your business while maintaining financial health.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      lessons: ["Strategic reinvestment", "Sustainable growth modeling", "Financial risk management"],
      level: "Advanced",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-empowerher-50 to-coral-50 py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">EmpowerHer</span>
                <span className="block text-empowerher-600">Academy</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Designed specifically for women entrepreneurs, our courses will help you build the financial knowledge and skills needed to succeed in business.
              </p>
              <div className="mt-8 flex justify-center">
                <Button className="bg-gradient-to-r from-empowerher-500 to-coral-500 hover:from-empowerher-600 hover:to-coral-600 text-white">
                  Explore Courses
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Beginner Courses Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-empowerher-100 rounded-full mb-4">
                <GraduationCap className="h-6 w-6 text-empowerher-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Beginner Courses</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Start your journey with our foundational courses designed for new entrepreneurs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beginnerCourses.map((course, index) => (
                <Card key={index} className="flex flex-col h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="h-48 bg-gray-100">
                    <img 
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-empowerher-100 text-empowerher-800">
                        {course.level}
                      </span>
                    </div>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <h4 className="font-medium text-sm text-gray-700 mb-2">What you'll learn:</h4>
                    <ul className="space-y-2">
                      {course.lessons.map((lesson, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-empowerher-600 mr-2 mt-0.5" />
                          <span className="text-sm text-gray-700">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button className="w-full">
                      Start Course <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Courses Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-coral-100 rounded-full mb-4">
                <Settings className="h-6 w-6 text-coral-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Advanced Courses</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Take your business to the next level with our specialized advanced courses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedCourses.map((course, index) => (
                <Card key={index} className="flex flex-col h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="h-48 bg-gray-100">
                    <img 
                      src={course.image}
                      alt={course.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-coral-100 text-coral-800">
                        {course.level}
                      </span>
                    </div>
                    <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <h4 className="font-medium text-sm text-gray-700 mb-2">What you'll learn:</h4>
                    <ul className="space-y-2">
                      {course.lessons.map((lesson, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-coral-600 mr-2 mt-0.5" />
                          <span className="text-sm text-gray-700">{lesson}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Button className="w-full bg-gradient-to-r from-coral-500 to-empowerher-500 hover:from-coral-600 hover:to-empowerher-600 text-white">
                      Start Course <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mentorship Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center p-2 bg-empowerher-100 rounded-full mb-4">
                  <FileText className="h-6 w-6 text-empowerher-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">1:1 Mentorship</h2>
                <p className="mt-4 text-lg text-gray-600">
                  Connect with experienced women entrepreneurs who have been in your shoes. Our mentorship program pairs you with business leaders who understand your unique challenges.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-empowerher-600 mr-3 mt-0.5" />
                    <span>Personalized guidance tailored to your business needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-empowerher-600 mr-3 mt-0.5" />
                    <span>Monthly 1:1 sessions with your dedicated mentor</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-empowerher-600 mr-3 mt-0.5" />
                    <span>Access to our exclusive network of successful entrepreneurs</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Button className="bg-gradient-to-r from-empowerher-500 to-coral-500 hover:from-empowerher-600 hover:to-coral-600 text-white">
                    Apply for Mentorship
                  </Button>
                </div>
              </div>
              <div className="lg:pl-8">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80" 
                    alt="Mentorship Session" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-empowerher-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Ready to grow your financial knowledge?</h2>
              <p className="mt-4 text-lg text-empowerher-100 max-w-2xl mx-auto">
                Join thousands of women entrepreneurs who have transformed their businesses through our academy.
              </p>
              <div className="mt-8">
                <Button className="bg-white text-empowerher-900 hover:bg-empowerher-50">
                  Create Your Free Account
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

export default Academy;
