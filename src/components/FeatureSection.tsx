
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
      icon: <DollarSign className="h-6 w-6 text-empowerher-600" />,
      items: [
        t('features.financing.item1'),
        t('features.financing.item2'),
        t('features.financing.item3')
      ]
    },
    {
      title: t('features.credit.title'),
      description: t('features.credit.description'),
      icon: <Users className="h-6 w-6 text-empowerher-600" />,
      items: [
        t('features.credit.item1'),
        t('features.credit.item2'),
        t('features.credit.item3')
      ]
    },
    {
      title: t('features.academy.title'),
      description: t('features.academy.description'),
      icon: <Book className="h-6 w-6 text-empowerher-600" />,
      items: [
        t('features.academy.item1'),
        t('features.academy.item2'),
        t('features.academy.item3')
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
            <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-empowerher-100 mb-4">
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
