import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const trackButtonClick = (buttonType: string) => {
    // This would be replaced with actual analytics code
    console.log('Button click tracked:', buttonType);
  };

  return (
    <section className="py-12 md:py-20 relative bg-[url('https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-r from-dark to-transparent opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-4">
              <span className="text-light">Download</span> 
              <span className="text-secondary"> GTA 6</span> 
              <span className="text-light"> Now!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">Experience the next generation of the legendary Grand Theft Auto series on your PC and mobile device.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#pc-download" 
                className="shine-effect btn bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-accent font-semibold transition flex items-center justify-center"
                onClick={() => trackButtonClick('PC Download')}
              >
                <i className="fas fa-desktop mr-2"></i> PC Download
              </a>
              <a 
                href="#mobile-download" 
                className="shine-effect btn bg-secondary hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-accent font-semibold transition flex items-center justify-center"
                onClick={() => trackButtonClick('Mobile Download')}
              >
                <i className="fas fa-mobile-alt mr-2"></i> Mobile Download
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
                alt="GTA 6 Game Art" 
                className="rounded-lg shadow-2xl w-full object-cover transform hover:scale-105 transition duration-500" 
                style={{height: "400px"}}
              />
              <div className="absolute -bottom-4 -right-4 bg-secondary text-white text-lg font-bold py-2 px-4 rounded-lg shadow-lg animate-pulse-slow">
                NEW RELEASE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
