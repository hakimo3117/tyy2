import { useEffect, useRef } from 'react';

export default function SocialBarAd() {
  const socialBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // The social bar will be automatically initialized by the script loaded in AdScripts
    // This is just a container for it to appear

    // Add a custom class to make sure the social bar is visible and prominent
    const addSocialBarStyles = () => {
      const style = document.createElement('style');
      style.textContent = `
        .social-bar-container {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          text-align: center;
          padding: 5px 0;
          background: rgba(0, 0, 0, 0.7);
        }
      `;
      document.head.appendChild(style);
    };

    addSocialBarStyles();
    
    // Occasionally check and make sure the social bar is visible (it's important for revenue)
    const ensureSocialBarVisible = setInterval(() => {
      const socialBarElements = document.querySelectorAll('[id^="adstera-social-bar"]');
      if (socialBarElements.length === 0 && socialBarRef.current) {
        // If no social bar exists, it might have been removed, try to reload it
        const refreshScript = document.createElement('script');
        refreshScript.type = 'text/javascript';
        refreshScript.src = '//pl26645218.profitableratecpm.com/6d/d7/1f/6dd71f1a6b284c8ad2188e2719e4ae5b.js';
        document.head.appendChild(refreshScript);
      }
    }, 30000); // Check every 30 seconds

    return () => {
      clearInterval(ensureSocialBarVisible);
    };
  }, []);

  return (
    <div className="social-bar-container" ref={socialBarRef} id="social-bar-container">
      {/* The social bar will be inserted here by the script */}
    </div>
  );
}