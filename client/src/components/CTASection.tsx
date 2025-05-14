import { Button } from "@/components/ui/button";

export default function CTASection() {
  const trackButtonClick = (buttonType: string) => {
    // This would be replaced with actual analytics code
    console.log('Button click tracked:', buttonType);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-blue-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">Ready to Experience GTA 6?</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">Download now and be among the first to explore the next generation of the Grand Theft Auto series.</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#pc-download" 
            className="shine-effect btn bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-lg font-accent font-semibold transition flex items-center justify-center"
            onClick={() => trackButtonClick('CTA PC Download')}
          >
            <i className="fas fa-desktop mr-2"></i> PC Download
          </a>
          <a 
            href="#mobile-download" 
            className="shine-effect btn bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-accent font-semibold transition flex items-center justify-center"
            onClick={() => trackButtonClick('CTA Mobile Download')}
          >
            <i className="fas fa-mobile-alt mr-2"></i> Mobile Download
          </a>
        </div>
      </div>
    </section>
  );
}
