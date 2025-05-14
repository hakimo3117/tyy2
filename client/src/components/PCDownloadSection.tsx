import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function PCDownloadSection() {
  const { toast } = useToast();

  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Track download button click
    console.log('Button click tracked: PC Download');
    
    // Show toast notification
    toast({
      title: "Download started",
      description: "Your GTA 6 for PC download has started. Please wait while we prepare your files.",
      variant: "default"
    });
    
    // In a real implementation, this would redirect to a download page or start the download
    setTimeout(() => {
      toast({
        title: "Download information",
        description: "This is a promotional page. The actual game will be available through official channels upon release.",
        variant: "default"
      });
    }, 3000);
  };

  return (
    <section id="pc-download" className="py-16 relative">
      <div 
        className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Download GTA 6 for PC</h2>
            <p className="text-gray-300 mb-6">Experience the ultimate graphics and performance on your gaming PC. GTA 6 pushes the boundaries of open-world gaming with stunning visuals and immersive gameplay.</p>
            
            <div className="bg-dark-secondary p-6 rounded-lg mb-6">
              <h3 className="text-xl font-heading font-semibold mb-3">System Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-secondary font-medium mb-2">Minimum:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li><span className="font-medium">OS:</span> Windows 10 64-bit</li>
                    <li><span className="font-medium">Processor:</span> Intel Core i5-8400 / AMD Ryzen 5 2600</li>
                    <li><span className="font-medium">RAM:</span> 12 GB</li>
                    <li><span className="font-medium">Graphics:</span> NVIDIA GTX 1660 / AMD RX 5600 XT</li>
                    <li><span className="font-medium">Storage:</span> 150 GB SSD</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-primary font-medium mb-2">Recommended:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li><span className="font-medium">OS:</span> Windows 11 64-bit</li>
                    <li><span className="font-medium">Processor:</span> Intel Core i7-10700K / AMD Ryzen 7 5800X</li>
                    <li><span className="font-medium">RAM:</span> 16 GB</li>
                    <li><span className="font-medium">Graphics:</span> NVIDIA RTX 3070 / AMD RX 6800 XT</li>
                    <li><span className="font-medium">Storage:</span> 150 GB SSD</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <a 
              href="#" 
              onClick={handleDownload}
              className="shine-effect btn bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-accent font-semibold text-lg w-full block text-center transition"
            >
              <i className="fas fa-download mr-2"></i> Download for PC (89.5 GB)
            </a>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://pixabay.com/get/g95bb7f6e1df30060bdb9cb36970e7b08e17fbf1147a652be38e5a9de099b1a7c231d6874e6aab1e7296627547309430fa6c8358a9c19765beddc1eaebf3d2a75_1280.jpg" 
              alt="GTA 6 PC Gameplay" 
              className="rounded-lg shadow-2xl w-full object-cover"
              style={{maxHeight: "450px"}}
            />
          </div>
        </div>
        
        {/* Ad placement - Importing the component directly */}
        <div className="mt-12">
          <div className="ad-container rounded-lg min-h-[90px] bg-dark-secondary bg-opacity-50 border border-dashed border-gray-700 flex items-center justify-center" data-ad-slot="pc-download-banner">
            <p className="text-gray-400 text-sm">Advertisement Space (Adstera)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
