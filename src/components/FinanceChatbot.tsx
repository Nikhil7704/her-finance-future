
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// Define types for messages
interface Message {
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Define finance topics and responses
interface FinanceTopics {
  [key: string]: {
    keywords: string[];
    response: string;
  }
}

const FinanceChatbot = () => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Initialize with welcome message when component mounts or language changes
  useEffect(() => {
    setMessages([
      {
        content: t('chatbot.startMessage'),
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  }, [t]);

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Finance knowledge base
  const financeTopics: FinanceTopics = {
    loan: {
      keywords: ['loan', 'borrow', 'financing', 'mortgage', 'debt', 'interest', 'emi', 'repayment'],
      response: t('chatbot.responses.loanDetailed')
    },
    credit: {
      keywords: ['credit', 'score', 'cibil', 'report', 'history', 'bureau'],
      response: t('chatbot.responses.creditDetailed')
    },
    savings: {
      keywords: ['save', 'savings', 'deposit', 'investment', 'returns', 'interest'],
      response: t('chatbot.responses.savingsDetailed')
    },
    business: {
      keywords: ['business', 'startup', 'entrepreneur', 'company', 'venture', 'msme'],
      response: t('chatbot.responses.businessDetailed')
    },
    academy: {
      keywords: ['course', 'learn', 'study', 'academy', 'education', 'training', 'workshop'],
      response: t('chatbot.responses.academyDetailed')
    },
    mentor: {
      keywords: ['mentor', 'guidance', 'advisor', 'coach', 'consultant', 'expert'],
      response: t('chatbot.responses.mentorDetailed')
    },
    insurance: {
      keywords: ['insurance', 'policy', 'coverage', 'claim', 'premium', 'risk', 'protection'],
      response: t('chatbot.responses.insuranceDetailed')
    },
    tax: {
      keywords: ['tax', 'taxation', 'income tax', 'gst', 'filing', 'return', 'deduction'],
      response: t('chatbot.responses.taxDetailed')
    }
  };

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage = {
      content: input,
      sender: 'user' as const,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Generate bot response with enhanced logic
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages(prev => [...prev, {
        content: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }]);
    }, 800);
  };
  
  // Enhanced response system
  const getBotResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    // Check for greetings
    if (/^(hi|hello|hey|greetings|namaste|hola)/i.test(lowerQuery)) {
      return `${t('chatbot.responses.greeting')} ${t('chatbot.responses.helpPrompt')}`;
    }

    // Check for thank you
    if (/thank|thanks|thx|appreciate|grateful/i.test(lowerQuery)) {
      return t('chatbot.responses.thankYou');
    }

    // Check for goodbye
    if (/bye|goodbye|see you|talk later|later|exit|quit/i.test(lowerQuery)) {
      return t('chatbot.responses.goodbye');
    }

    // Check for help request
    if (/help|assist|support|guide/i.test(lowerQuery)) {
      return t('chatbot.responses.helpDetailed');
    }

    // Check for contact request
    if (/contact|speak|talk|call|phone|email|reach/i.test(lowerQuery)) {
      return t('chatbot.responses.contactInfo');
    }

    // Check for specific finance topics
    for (const topic in financeTopics) {
      const { keywords, response } = financeTopics[topic];
      if (keywords.some(keyword => lowerQuery.includes(keyword))) {
        return response;
      }
    }
    
    // Check for questions about the platform
    if (/who are you|what (is|are) (this|you)|about|platform|website|app/i.test(lowerQuery)) {
      return t('chatbot.responses.aboutPlatform');
    }

    // Default response with suggestions
    return `${t('chatbot.responses.default')} ${t('chatbot.responses.suggestions')}`;
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  return (
    <>
      {/* Floating chat button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-empowerher-500 to-coral-500 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50"
        aria-label={t('chatbot.openChat')}
      >
        <MessageCircle size={24} />
      </button>
      
      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-[80px] right-6 w-80 sm:w-96 shadow-xl z-40 max-h-[500px] flex flex-col">
          <CardHeader className="bg-gradient-to-r from-empowerher-500 to-coral-500 text-white py-3">
            <CardTitle className="text-lg flex items-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              {t('chatbot.title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-y-auto max-h-[320px] p-4">
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-lg p-3 ${
                    msg.sender === 'user' 
                      ? 'bg-empowerher-100 text-gray-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm">{msg.content}</p>
                    <span className="text-xs text-gray-500 mt-1 block">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter className="border-t p-3">
            <div className="flex w-full items-center space-x-2">
              <Input
                placeholder={t('chatbot.placeholder')}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default FinanceChatbot;
