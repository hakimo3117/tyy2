import { useQuery } from "@tanstack/react-query";
import { useFAQ } from "@/hooks/useFAQ";
import { Faq } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

export default function FAQSection() {
  const { data: faqs, isLoading, error } = useQuery<Faq[]>({
    queryKey: ['/api/faqs'],
  });

  const { openFaqs, toggleFaq } = useFAQ();

  return (
    <section className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know about downloading and playing GTA 6</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {isLoading ? (
            // Loading state
            Array(5).fill(0).map((_, i) => (
              <div key={`skeleton-${i}`} className="mb-6 border-b border-gray-800 pb-6">
                <div className="flex justify-between items-center">
                  <Skeleton className="h-8 w-3/4" />
                  <Skeleton className="h-6 w-6 rounded-full" />
                </div>
              </div>
            ))
          ) : error ? (
            <div className="text-center text-red-500">
              <p>Error loading FAQs. Please try again later.</p>
            </div>
          ) : (
            faqs?.map((faq) => (
              <div key={faq.id} className="faq-item mb-6 border-b border-gray-800 pb-6">
                <button 
                  className="faq-question w-full flex justify-between items-center text-left focus:outline-none"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <h3 className="text-xl font-heading font-semibold">{faq.question}</h3>
                  <i className={`fas fa-chevron-down text-gray-400 transition-transform ${openFaqs.includes(faq.id) ? 'rotate-180' : ''}`}></i>
                </button>
                <div className={`faq-answer mt-4 text-gray-300 ${openFaqs.includes(faq.id) ? '' : 'hidden'}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
