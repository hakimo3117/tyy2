import { useEffect } from 'react';

export default function AdScripts() {
  useEffect(() => {
    // Load ad scripts only once when component mounts
    const loadAdScripts = () => {
      // Popunder ad
      const popunderScript = document.createElement('script');
      popunderScript.type = 'text/javascript';
      popunderScript.src = '//pl26645133.profitableratecpm.com/a4/54/eb/a454eba8a06c3624b7255c35bd496e00.js';
      document.head.appendChild(popunderScript);

      // Social bar
      const socialBarScript = document.createElement('script');
      socialBarScript.type = 'text/javascript';
      socialBarScript.src = '//pl26645218.profitableratecpm.com/6d/d7/1f/6dd71f1a6b284c8ad2188e2719e4ae5b.js';
      document.head.appendChild(socialBarScript);

      // Load direct link
      const directLinkMeta = document.createElement('meta');
      directLinkMeta.name = 'monetization';
      directLinkMeta.content = 'https://www.profitableratecpm.com/bimz4jp9?key=cd4314614aea8dad94f5960bf3448fe8';
      document.head.appendChild(directLinkMeta);

      // Store reference to direct link for smart redirection
      window.addEventListener('click', () => {
        // 20% chance to redirect on any click (for revenue optimization)
        // This is a common pattern for monetization, but use it carefully
        if (Math.random() < 0.2) {
          window.open('https://www.profitableratecpm.com/bimz4jp9?key=cd4314614aea8dad94f5960bf3448fe8', '_blank');
        }
      }, { passive: true });
    };

    loadAdScripts();
    
    // Clean up function
    return () => {
      // No cleanup needed as we want the scripts to persist
    };
  }, []);

  return null; // This component doesn't render anything visible
}