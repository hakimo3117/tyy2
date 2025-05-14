import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function MobileDownloadSection() {
  const { toast } = useToast();

  const handleDownload = (platform: string, e: React.MouseEvent) => {
    e.preventDefault();
    
    // Track download button click
    console.log(`Button click tracked: ${platform} Download`);
    
    // Show toast notification
    toast({
      title: `Download started`,
      description: `Your GTA 6 for ${platform} download has started. Please wait while we prepare your files.`,
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
    <section id="mobile-download" className="py-16 bg-dark-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pl-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Download GTA 6 for Mobile</h2>
            <p className="text-gray-300 mb-6">Take the GTA experience with you on the go. Our optimized mobile version brings the same thrilling gameplay to your smartphone or tablet.</p>
            
            <div className="bg-dark p-6 rounded-lg mb-6">
              <h3 className="text-xl font-heading font-semibold mb-3">Device Requirements</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-secondary font-medium mb-2">Android:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li><span className="font-medium">OS:</span> Android 10.0 or higher</li>
                    <li><span className="font-medium">Processor:</span> Snapdragon 865 or equivalent</li>
                    <li><span className="font-medium">RAM:</span> 6 GB</li>
                    <li><span className="font-medium">Storage:</span> 15 GB free space</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-primary font-medium mb-2">iOS:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li><span className="font-medium">OS:</span> iOS 15 or later</li>
                    <li><span className="font-medium">Device:</span> iPhone 11 or newer</li>
                    <li><span className="font-medium">Storage:</span> 15 GB free space</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#" 
                onClick={(e) => handleDownload('Android', e)}
                className="shine-effect btn bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg font-accent font-semibold flex items-center justify-center"
              >
                <i className="fab fa-android text-xl mr-2"></i> Download for Android
              </a>
              <a 
                href="#" 
                onClick={(e) => handleDownload('iOS', e)}
                className="shine-effect btn bg-gray-800 hover:bg-gray-900 text-white px-6 py-4 rounded-lg font-accent font-semibold flex items-center justify-center"
              >
                <i className="fab fa-apple text-xl mr-2"></i> Download for iOS
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1616423640778-28d1b53229bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=900&q=80" 
                alt="GTA 6 Mobile Gameplay" 
                className="rounded-lg shadow-2xl w-full object-cover"
                style={{maxHeight: "500px"}}
              />
              <div className="absolute -bottom-4 -right-4 bg-secondary text-white text-sm font-bold py-2 px-4 rounded-lg shadow-lg">
                OPTIMIZED FOR MOBILE
              </div>
            </div>
          </div>
        </div>
        
        {/* Ad placement */}
        <div className="mt-12">
          <div className="ad-container rounded-lg min-h-[90px] bg-dark-secondary bg-opacity-50 border border-dashed border-gray-700 flex items-center justify-center" data-ad-slot="mobile-download-banner">
            <p className="text-gray-400 text-sm">Advertisement Space (Adstera)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
