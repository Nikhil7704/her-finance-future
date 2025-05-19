
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, GraduationCap, FileText, ArrowRight, Calculator } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from "@/components/ui/use-toast";

const CreditEvaluation = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    businessName: '',
    yearsInBusiness: '',
    monthlyRevenue: '',
    businessType: '',
    existingLoans: '',
  });
  const [creditScore, setCreditScore] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const calculateCreditScore = () => {
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      // Simple algorithm to calculate credit score based on inputs
      const yearsScore = Math.min(parseInt(formData.yearsInBusiness) * 10, 100);
      const revenueScore = Math.min(parseInt(formData.monthlyRevenue) / 1000, 100);
      const loansScore = 100 - (parseInt(formData.existingLoans) * 5);
      
      // Weighted average
      const score = Math.floor(
        (yearsScore * 0.3) + 
        (revenueScore * 0.5) + 
        (loansScore * 0.2)
      );
      
      // Cap the score between 300 and 850
      const cappedScore = Math.max(300, Math.min(850, 300 + score * 5.5));
      
      setCreditScore(Math.floor(cappedScore));
      setIsLoading(false);
      
      toast({
        title: "Credit Evaluation Complete",
        description: "Your business credit score has been calculated based on the information provided.",
      });
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateCreditScore();
  };

  const getCreditTier = (score: number) => {
    if (score >= 750) return { tier: "Excellent", color: "text-green-600" };
    if (score >= 650) return { tier: "Good", color: "text-blue-600" };
    if (score >= 550) return { tier: "Fair", color: "text-yellow-600" };
    return { tier: "Needs Improvement", color: "text-orange-600" };
  };

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
                  <span className="block">{t('creditEval.heroTitle1')}</span>
                  <span className="block text-empowerher-600">{t('creditEval.heroTitle2')}</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 max-w-2xl">
                  {t('creditEval.heroDescription')}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => document.getElementById('evaluationForm')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-gradient-to-r from-empowerher-500 to-coral-500 hover:from-empowerher-600 hover:to-coral-600 text-white"
                  >
                    {t('creditEval.getEvaluation')}
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => document.getElementById('howItWorks')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {t('creditEval.learnHow')}
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

        {/* Evaluation Form Section */}
        <section id="evaluationForm" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                {t('creditEval.formTitle')}
              </h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                {t('creditEval.formDescription')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t('creditEval.businessDetails')}</CardTitle>
                  <CardDescription>{t('creditEval.allFieldsRequired')}</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">{t('creditEval.businessName')}</Label>
                      <Input
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleInputChange}
                        required
                        placeholder={t('creditEval.businessNamePlaceholder')}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="yearsInBusiness">{t('creditEval.yearsInBusiness')}</Label>
                      <Input
                        id="yearsInBusiness"
                        name="yearsInBusiness"
                        type="number"
                        min="0"
                        max="100"
                        value={formData.yearsInBusiness}
                        onChange={handleInputChange}
                        required
                        placeholder={t('creditEval.yearsInBusinessPlaceholder')}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="monthlyRevenue">{t('creditEval.monthlyRevenue')}</Label>
                      <Input
                        id="monthlyRevenue"
                        name="monthlyRevenue"
                        type="number"
                        min="0"
                        value={formData.monthlyRevenue}
                        onChange={handleInputChange}
                        required
                        placeholder={t('creditEval.monthlyRevenuePlaceholder')}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="businessType">{t('creditEval.businessType')}</Label>
                      <Input
                        id="businessType"
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleInputChange}
                        required
                        placeholder={t('creditEval.businessTypePlaceholder')}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="existingLoans">{t('creditEval.existingLoans')}</Label>
                      <Input
                        id="existingLoans"
                        name="existingLoans"
                        type="number"
                        min="0"
                        value={formData.existingLoans}
                        onChange={handleInputChange}
                        required
                        placeholder={t('creditEval.existingLoansPlaceholder')}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-empowerher-500 to-coral-500"
                      disabled={isLoading}
                    >
                      {isLoading ? t('creditEval.calculating') : t('creditEval.calculateScore')}
                      {!isLoading && <Calculator className="ml-2 h-4 w-4" />}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>{t('creditEval.yourScore')}</CardTitle>
                  <CardDescription>{t('creditEval.scoreDescription')}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center justify-center py-12">
                  {creditScore !== null ? (
                    <div className="text-center">
                      <div className="relative">
                        <div className="w-48 h-48 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                          <div className="text-5xl font-bold">{creditScore}</div>
                        </div>
                        <div className="absolute -top-2 -right-2 bg-empowerher-500 text-white rounded-full p-2">
                          <CheckCircle className="h-6 w-6" />
                        </div>
                      </div>
                      <div className={`text-2xl font-semibold mt-4 ${getCreditTier(creditScore).color}`}>
                        {getCreditTier(creditScore).tier}
                      </div>
                      <p className="mt-2 text-gray-600">
                        {t('creditEval.scoreRangeInfo')}
                      </p>
                      <div className="mt-6">
                        <Button className="bg-gradient-to-r from-empowerher-500 to-coral-500">
                          {t('creditEval.downloadReport')}
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <div className="w-48 h-48 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                        <div className="text-xl text-gray-400">{t('creditEval.awaitingData')}</div>
                      </div>
                      <p className="mt-4 text-gray-600">
                        {t('creditEval.fillFormPrompt')}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="howItWorks" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t('creditEval.howItWorks')}</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                {t('creditEval.howItWorksDescription')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-empowerher-100 flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-empowerher-600" />
                  </div>
                  <CardTitle className="text-xl">{t('creditEval.holisticReview')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {t('creditEval.holisticReviewDescription')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-coral-100 flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-coral-600" />
                  </div>
                  <CardTitle className="text-xl">{t('creditEval.potentialAssessment')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {t('creditEval.potentialAssessmentDescription')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-empowerher-100 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-empowerher-600" />
                  </div>
                  <CardTitle className="text-xl">{t('creditEval.characterCapability')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {t('creditEval.characterCapabilityDescription')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Academy Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t('creditEval.academy')}</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                {t('creditEval.academyDescription')}
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
                    <CardTitle>{t('creditEval.fundamentals')}</CardTitle>
                    <CardDescription>{t('creditEval.forBeginners')}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600">
                      {t('creditEval.fundamentalsDescription')}
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-empowerher-600 mr-2" />
                        <span className="text-gray-700">{t('creditEval.understandingReports')}</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-empowerher-600 mr-2" />
                        <span className="text-gray-700">{t('creditEval.buildingCredit')}</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-empowerher-600 mr-2" />
                        <span className="text-gray-700">{t('creditEval.repairStrategies')}</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-0 mt-auto">
                    <Button className="w-full">
                      {t('creditEval.startLearning')} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
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
                    <CardTitle>{t('creditEval.advanced')}</CardTitle>
                    <CardDescription>{t('creditEval.forGrowing')}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-gray-600">
                      {t('creditEval.advancedDescription')}
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-coral-600 mr-2" />
                        <span className="text-gray-700">{t('creditEval.advancedUtilization')}</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-coral-600 mr-2" />
                        <span className="text-gray-700">{t('creditEval.debtManagement')}</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-coral-600 mr-2" />
                        <span className="text-gray-700">{t('creditEval.alternativeFunding')}</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter className="pt-0 mt-auto">
                    <Button className="w-full bg-gradient-to-r from-coral-500 to-empowerher-500 hover:from-coral-600 hover:to-empowerher-600 text-white">
                      {t('creditEval.startLearning')} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-empowerher-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">{t('creditEval.ctaTitle')}</h2>
              <p className="mt-4 text-lg text-empowerher-100 max-w-2xl mx-auto">
                {t('creditEval.ctaDescription')}
              </p>
              <div className="mt-8">
                <Button 
                  onClick={() => document.getElementById('evaluationForm')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-empowerher-900 hover:bg-empowerher-50"
                >
                  {t('creditEval.getFreeEvaluation')}
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
