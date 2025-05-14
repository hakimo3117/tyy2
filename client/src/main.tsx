import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Enable dark mode by default
document.documentElement.classList.add('dark');

// Add metadata for SEO
const meta = document.createElement('meta');
meta.name = 'description';
meta.content = 'Download GTA 6 for PC and mobile devices. Get access to the latest version of Grand Theft Auto with optimized gameplay for all platforms. HixTeam is your source for GTA 6 downloads, news, and updates.';
document.head.appendChild(meta);

// Add Open Graph tags for better social media sharing
const addOpenGraphTag = (property: string, content: string) => {
  const tag = document.createElement('meta');
  tag.setAttribute('property', property);
  tag.content = content;
  document.head.appendChild(tag);
};

addOpenGraphTag('og:title', 'HixTeam - Download GTA 6 for PC and Mobile');
addOpenGraphTag('og:description', 'Get early access to GTA 6 on PC and mobile. HixTeam provides the latest Grand Theft Auto downloads, news, and updates.');
addOpenGraphTag('og:type', 'website');
addOpenGraphTag('og:url', window.location.href);
addOpenGraphTag('og:image', 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80');

// Add page title
document.title = 'HixTeam - Download GTA 6 for PC and Mobile';

// Add font preload
const linkFonts = document.createElement('link');
linkFonts.rel = 'stylesheet';
linkFonts.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&family=Inter:wght@300;400;500&family=Montserrat:wght@600;700&display=swap';
document.head.appendChild(linkFonts);

// Add Font Awesome for icons
const linkFA = document.createElement('link');
linkFA.rel = 'stylesheet';
linkFA.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
document.head.appendChild(linkFA);

// Set theme color for dark mode
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
if (themeColorMeta) {
  themeColorMeta.setAttribute('content', '#0f172a'); // dark blue color
}

createRoot(document.getElementById("root")!).render(<App />);
