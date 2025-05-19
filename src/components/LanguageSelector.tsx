
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage, type Language } from '@/contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  
  const handleLanguageChange = (value: string) => {
    setLanguage(value as Language);
  };
  
  return (
    <Select value={language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[140px] h-9">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="english">English</SelectItem>
        <SelectItem value="hindi">हिंदी (Hindi)</SelectItem>
        <SelectItem value="marathi">मराठी (Marathi)</SelectItem>
        <SelectItem value="gujarati">ગુજરાતી (Gujarati)</SelectItem>
        <SelectItem value="tamil">தமிழ் (Tamil)</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
