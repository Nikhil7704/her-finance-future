
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

const FinanceChatbot = () => {
  const { t } = useLanguage();
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
    
    // Simulate bot response (in a real app, you'd call an API here)
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages(prev => [...prev, {
        content: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }]);
    }, 1000);
  };
  
  // Basic response system - in a real app, you'd use a proper NLP service
  const getBotResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('loan') || lowerQuery.includes('financing')) {
      return t('chatbot.responses.financing');
    } else if (lowerQuery.includes('credit') || lowerQuery.includes('score')) {
      return t('chatbot.responses.credit');
    } else if (lowerQuery.includes('course') || lowerQuery.includes('learn') || lowerQuery.includes('academy')) {
      return t('chatbot.responses.academy');
    } else if (lowerQuery.includes('mentor') || lowerQuery.includes('guidance')) {
      return t('chatbot.responses.mentor');
    } else {
      return t('chatbot.responses.default');
    }
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
