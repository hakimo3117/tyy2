import { useState } from 'react';

export function useFAQ() {
  const [openFaqs, setOpenFaqs] = useState<number[]>([]);

  const toggleFaq = (id: number) => {
    setOpenFaqs(prev => 
      prev.includes(id) 
        ? prev.filter(faqId => faqId !== id) 
        : [...prev, id]
    );
  };

  return {
    openFaqs,
    toggleFaq
  };
}
