import { useEffect, useRef } from 'react';

interface BannerAdProps {
  placement: string; // For tracking different ad placements
}

export default function BannerAd({ placement }: BannerAdProps) {
  const adContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create script for banner ad
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.text = `
      atOptions = {
        'key' : 'ac5b6d7e921c068c1243d83cc98dcdbf',
        'format' : 'iframe',
        'height' : 50,
        'width' : 320,
        'params' : {}
      };
    `;
    
    // Create invoking script
    const invokeScript = document.createElement('script');
    invokeScript.type = 'text/javascript';
    invokeScript.src = '//www.highperformanceformat.com/ac5b6d7e921c068c1243d83cc98dcdbf/invoke.js';
    
    // Add both scripts to the container
    if (adContainerRef.current) {
      adContainerRef.current.appendChild(script);
      adContainerRef.current.appendChild(invokeScript);
    }

    return () => {
      // Clean up scripts when component unmounts
      if (adContainerRef.current) {
        while (adContainerRef.current.firstChild) {
          adContainerRef.current.removeChild(adContainerRef.current.firstChild);
        }
      }
    };
  }, [placement]);

  return (
    <div className="ad-container my-4 flex justify-center">
      <div
        ref={adContainerRef}
        className="banner-ad-container"
        data-placement={placement}
      ></div>
    </div>
  );
}