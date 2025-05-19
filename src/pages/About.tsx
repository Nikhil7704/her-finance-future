
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Users } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Founder & CEO",
      bio: "Former investment banker with a passion for financial inclusion and women's economic empowerment.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Maya Johnson",
      role: "Chief Technology Officer",
      bio: "AI expert and engineer dedicated to building ethical algorithms that recognize the potential of underserved entrepreneurs.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Elena Rodriguez",
      role: "Chief Financial Officer",
      bio: "Financial strategist with experience in microfinance and alternative credit systems across global markets.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      name: "Aisha Okafor",
      role: "Head of Education",
      bio: "Former finance professor and curriculum developer specializing in accessible financial literacy programs.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  const values = [
    {
      title: "Financial Inclusion",
      description: "We believe that access to capital should not be determined by gender or background, but by business potential and vision."
    },
    {
      title: "Innovation",
      description: "We leverage technology to create new pathways to financial success for women entrepreneurs everywhere."
    },
    {
      title: "Education",
      description: "We empower through knowledge, providing the tools and resources needed for financial independence."
    },
    {
      title: "Community",
      description: "We foster connections between women entrepreneurs, creating support networks that amplify success."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-empowerher-900 py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-b from-empowerher-500 to-coral-500 opacity-30"></div>
            <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-empowerher-300 via-transparent to-transparent opacity-30"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Our Mission
              </h1>
              <p className="mt-6 text-xl text-empowerher-100 max-w-2xl mx-auto">
                EmpowerHer Finance is on a mission to dismantle financial barriers for women entrepreneurs through innovation, education, and community.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Story</h2>
                <div className="mt-6 space-y-6 text-lg text-gray-600">
                  <p>
                    EmpowerHer Finance was founded in 2020 by Sarah Chen, who experienced firsthand the challenges women entrepreneurs face in accessing capital and financial education.
                  </p>
                  <p>
                    After being rejected by traditional financial institutions despite having a profitable business, Sarah recognized that the system was not designed to see the potential of women-led ventures.
                  </p>
                  <p>
                    She assembled a team of finance experts, technologists, and educators with a shared vision: to create financial systems that recognize and nurture the potential of women entrepreneurs around the world.
                  </p>
                  <p>
                    Today, EmpowerHer Finance has helped over 10,000 women entrepreneurs access more than $50 million in funding and build stronger financial foundations for their businesses.
                  </p>
                </div>
              </div>
              <div className="lg:pl-8">
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
                    alt="EmpowerHer Finance team" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Values</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do at EmpowerHer Finance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="h-12 w-12 rounded-full bg-empowerher-100 flex items-center justify-center mb-4">
                      <CheckCircle className="h-6 w-6 text-empowerher-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                    <p className="mt-4 text-gray-600 flex-grow">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Meet Our Team</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Passionate experts dedicated to transforming financial access for women entrepreneurs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 mb-6">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-4 border-empowerher-100"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-empowerher-600 font-medium">{member.role}</p>
                  <p className="mt-2 text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Partners</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                We collaborate with organizations that share our commitment to women's economic empowerment.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-12 items-center">
              <div className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300">
                <img src="https://via.placeholder.com/150x60?text=Partner+Logo" alt="Partner 1" className="h-full w-auto" />
              </div>
              <div className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300">
                <img src="https://via.placeholder.com/150x60?text=Partner+Logo" alt="Partner 2" className="h-full w-auto" />
              </div>
              <div className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300">
                <img src="https://via.placeholder.com/150x60?text=Partner+Logo" alt="Partner 3" className="h-full w-auto" />
              </div>
              <div className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300">
                <img src="https://via.placeholder.com/150x60?text=Partner+Logo" alt="Partner 4" className="h-full w-auto" />
              </div>
              <div className="h-16 w-auto grayscale hover:grayscale-0 transition-all duration-300">
                <img src="https://via.placeholder.com/150x60?text=Partner+Logo" alt="Partner 5" className="h-full w-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-empowerher-600 to-coral-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Join Our Mission</h2>
              <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                Whether you're an entrepreneur seeking funding, an investor looking to make an impact, or a partner organization, we'd love to connect with you.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-empowerher-600 hover:bg-empowerher-50">
                  Apply for Financing
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Partner With Us
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

export default About;
