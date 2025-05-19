
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Users, Book } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeatureSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      title: t('features.financing.title'),
      description: t('features.financing.description'),
      icon: <DollarSign className="h-6 w-6" />,
      items: [
        "Crowdfunding Marketplace with Impact Story Builder",
        "Revenue-Based Financing with dynamic repayment rates",
        "Community Credit Circles leveraging social capital"
      ]
    },
    {
      title: t('features.credit.title'),
      description: t('features.credit.description'),
      icon: <Users className="h-6 w-6" />,
      items: [
        "Alternative data integration from mobile money and e-commerce",
        "Bias mitigation with explainable AI and fairness audits",
        "Dynamic credit scoring that updates in real-time"
      ]
    },
    {
      title: t('features.academy.title'),
      description: t('features.academy.description'),
      icon: <Book className="h-6 w-6" />,
      items: [
        "Personalized learning paths with microlearning videos",
        "AI Chatbot Mentor via WhatsApp and Telegram",
        "Mentorship network with industry experts"
      ]
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('features.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {t('features.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="empowerher-card hover:translate-y-[-5px]">
              <CardHeader>
                <div className="feature-icon mb-4 inline-flex">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600 mt-2">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-empowerher-500 mr-2">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
