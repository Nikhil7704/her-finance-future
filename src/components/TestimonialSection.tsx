
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    quote: "EmpowerHer Finance helped me secure funding when traditional banks turned me away. Their revenue-based financing allowed me to expand my business without the stress of fixed monthly payments.",
    author: "Sarah Johnson",
    role: "Founder, EcoStyle Clothing",
    imageSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "The AI credit evaluation recognized my business potential despite my lack of formal credit history. Now I have access to the capital I need to grow my tech startup.",
    author: "Maria Rodriguez",
    role: "CEO, InnoTech Solutions",
    imageSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "The Financial Literacy Academy transformed how I manage my business finances. The personalized courses and AI mentor helped me understand complex financial concepts in simple terms.",
    author: "Amina Okafor",
    role: "Owner, Sunrise Bakery",
    imageSrc: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Success Stories
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Meet the women entrepreneurs who have transformed their businesses with EmpowerHer Finance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="empowerher-card bg-white h-full flex flex-col">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div className="mb-6">
                  <svg
                    className="h-12 w-12 text-empowerher-200 opacity-50 mb-4"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="text-gray-700 text-lg italic line-clamp-6">{testimonial.quote}</p>
                </div>
                <div className="mt-auto flex items-center">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.imageSrc}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">{testimonial.author}</div>
                    <div className="text-empowerher-600">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
