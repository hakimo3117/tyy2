import { useEffect, useRef } from 'react';

export default function NativeBanner() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create and add native banner script
    const script = document.createElement('script');
    script.async = true;
    script.setAttribute('data-cfasync', 'false');
    script.src = '//pl26645176.profitableratecpm.com/eb3a84242c499db20df03292411836ec/invoke.js';
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="ad-container my-6 p-4 bg-dark-secondary rounded-lg shadow-md max-w-full overflow-hidden">
      <div id="container-eb3a84242c499db20df03292411836ec" ref={containerRef}></div>
    </div>
  );
}