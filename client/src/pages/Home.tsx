import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AdBanner from "@/components/AdBanner";
import TrailerSection from "@/components/TrailerSection";
import PCDownloadSection from "@/components/PCDownloadSection";
import MobileDownloadSection from "@/components/MobileDownloadSection";
import FeaturesSection from "@/components/FeaturesSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import BannerAd from "@/components/ads/BannerAd";
import NativeBanner from "@/components/ads/NativeBanner";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Set page title and metadata for SEO
    document.title = "HixTeam - Download GTA 6 for PC and Mobile";
    
    // Track page view (would be replaced with actual analytics code in production)
    const trackPageView = () => {
      console.log('Page view tracked');
    };
    
    trackPageView();
  }, []);

  return (
    <div className="min-h-screen font-body">
      <Header />
      <main>
        <HeroSection />
        <AdBanner adSlot="top-banner" />
        <TrailerSection />
        <PCDownloadSection />
        {/* Additional ad placement for higher revenue */}
        <BannerAd placement="after-pc-section" />
        <MobileDownloadSection />
        <NativeBanner />
        <FeaturesSection />
        <AdBanner adSlot="middle-banner" />
        <BlogSection />
        {/* Additional ad placement for higher revenue */}
        <BannerAd placement="before-faq" />
        <FAQSection />
        <NativeBanner />
        <CTASection />
        {/* Final ad before footer for maximum clicks */}
        <BannerAd placement="before-footer" />
      </main>
      <Footer />
    </div>
  );
}
