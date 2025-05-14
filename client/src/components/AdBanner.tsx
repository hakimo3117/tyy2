import { useEffect, useState } from 'react';
import BannerAd from './ads/BannerAd';
import NativeBanner from './ads/NativeBanner';

interface AdBannerProps {
  adSlot: string;
}

export default function AdBanner({ adSlot }: AdBannerProps) {
  const [adType, setAdType] = useState<'banner' | 'native'>('banner');
  
  useEffect(() => {
    // Optimize revenue by randomizing ad types or using specific slots for specific ad types
    // For example, middle banners could be more effective with native ads
    if (adSlot === 'middle-banner' || Math.random() > 0.6) {
      setAdType('native');
    } else {
      setAdType('banner');
    }
  }, [adSlot]);

  return (
    <div className="container mx-auto px-4 py-3">
      <div className="ad-wrapper" id={`ad-wrapper-${adSlot}`}>
        {adType === 'native' ? (
          <NativeBanner />
        ) : (
          <BannerAd placement={adSlot} />
        )}
      </div>
    </div>
  );
}
