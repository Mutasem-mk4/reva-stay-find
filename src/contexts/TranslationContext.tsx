import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TranslationContextType {
  language: 'en' | 'ar';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.properties': 'Properties',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.signin': 'Sign In',
    'nav.listproperty': 'List Your Property',
    
    // Hero Section
    'hero.title1': 'Discover Your Perfect',
    'hero.title2': 'Jordanian Retreat',
    'hero.subtitle': 'Experience luxury villas across Jordan\'s stunning landscapes. From Amman\'s hills to Wadi Rum\'s desert.',
    'hero.location': 'Location',
    'hero.checkin': 'Check-in',
    'hero.checkout': 'Check-out',
    'hero.guests': 'Guests',
    'hero.search': 'Search Properties',
    'hero.placeholder.location': 'Where do you want to go?',
    
    // Featured Properties
    'featured.title': 'Featured Properties',
    'featured.subtitle': 'Discover our hand-picked selection of luxury villas across Jordan, from historic Amman to the magical Wadi Rum desert and the healing waters of the Dead Sea.',
    
    // Property Cards
    'property.requestbooking': 'Request Booking',
    'property.night': '/night',
    'property.guests': 'Up to {count} guests',
    'property.more': '+{count} more',
    
    // Footer
    'footer.tagline': 'Your gateway to luxury Jordanian villas and authentic Middle Eastern experiences. Discover Jordan\'s hidden gems from ancient cities to mystical deserts.',
    'footer.quicklinks': 'Quick Links',
    'footer.browse': 'Browse Properties',
    'footer.services': 'Services',
    'footer.villas': 'Villa Rentals',
    'footer.management': 'Property Management',
    'footer.concierge': 'Concierge Services',
    'footer.events': 'Event Planning',
    'footer.contact': 'Get in Touch',
    'footer.copyright': '© 2024 Jordan Retreats. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
  },
  ar: {
    // Header
    'nav.home': 'الرئيسية',
    'nav.properties': 'العقارات',
    'nav.about': 'معلومات عنا',
    'nav.contact': 'اتصل بنا',
    'nav.signin': 'تسجيل الدخول',
    'nav.listproperty': 'اعرض عقارك',
    
    // Hero Section
    'hero.title1': 'اكتشف ملاذك المثالي',
    'hero.title2': 'الأردني',
    'hero.subtitle': 'اختبر الفلل الفاخرة عبر المناظر الطبيعية الخلابة في الأردن. من تلال عمان إلى صحراء وادي رم.',
    'hero.location': 'الموقع',
    'hero.checkin': 'تاريخ الوصول',
    'hero.checkout': 'تاريخ المغادرة',
    'hero.guests': 'الضيوف',
    'hero.search': 'البحث عن العقارات',
    'hero.placeholder.location': 'أين تريد أن تذهب؟',
    
    // Featured Properties
    'featured.title': 'العقارات المميزة',
    'featured.subtitle': 'اكتشف مجموعتنا المختارة بعناية من الفلل الفاخرة عبر الأردن، من عمان التاريخية إلى صحراء وادي رم السحرية والمياه العلاجية للبحر الميت.',
    
    // Property Cards
    'property.requestbooking': 'طلب حجز',
    'property.night': '/ليلة',
    'property.guests': 'حتى {count} ضيوف',
    'property.more': '+{count} المزيد',
    
    // Footer
    'footer.tagline': 'بوابتك إلى الفلل الأردنية الفاخرة والتجارب الشرق أوسطية الأصيلة. اكتشف جواهر الأردن المخفية من المدن القديمة إلى الصحاري الغامضة.',
    'footer.quicklinks': 'روابط سريعة',
    'footer.browse': 'تصفح العقارات',
    'footer.services': 'الخدمات',
    'footer.villas': 'إيجار الفلل',
    'footer.management': 'إدارة العقارات',
    'footer.concierge': 'خدمات الكونسيرج',
    'footer.events': 'تخطيط الفعاليات',
    'footer.contact': 'تواصل معنا',
    'footer.copyright': '© 2024 ملاذات الأردن. جميع الحقوق محفوظة.',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.cookies': 'سياسة ملفات الارتباط',
  }
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
    // Update document direction for Arabic
    document.dir = language === 'en' ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'en' ? 'ar' : 'en';
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <TranslationContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};