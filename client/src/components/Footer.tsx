import { Link } from "wouter";
import AdBanner from "./AdBanner";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
      variant: "default"
    });
    setEmail("");
  };

  return (
    <footer className="bg-dark-secondary pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4 text-light">HixTeam</h3>
            <p className="text-gray-400 mb-4">Your source for the latest gaming downloads and news.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-light">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-primary transition">Home</Link></li>
              <li><a href="#pc-download" className="text-gray-400 hover:text-primary transition">PC Download</a></li>
              <li><a href="#mobile-download" className="text-gray-400 hover:text-primary transition">Mobile Download</a></li>
              <li><a href="#trailer" className="text-gray-400 hover:text-primary transition">Trailer</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-primary transition">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-light">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary transition">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-light">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get updates on the latest game releases and news.</p>
            <form className="flex" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-dark border border-gray-700 text-gray-300 px-4 py-2 rounded-l-lg focus:outline-none focus:border-primary"
              />
              <button type="submit" className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        
        {/* Ad placement */}
        <div className="mb-8">
          <AdBanner adSlot="footer-banner" />
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} HixTeam. All rights reserved.</p>
            <p className="text-gray-500 text-xs">Disclaimer: This website is not affiliated with Rockstar Games or Take-Two Interactive. GTA and Grand Theft Auto are registered trademarks of Take-Two Interactive.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
