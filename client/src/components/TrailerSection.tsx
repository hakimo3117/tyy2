import { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player/lazy';

export default function TrailerSection() {
  // GTA 6 official trailer URL
  const trailerUrl = "https://www.youtube.com/watch?v=QdBZY2fkU-0"; // GTA 6 official trailer
  const playerRef = useRef<ReactPlayer | null>(null);

  return (
    <section id="trailer" className="py-12 bg-dark-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">GTA 6 Official Trailer</h2>
          <p className="text-gray-400">Check out the latest trailer for the most anticipated game of the decade</p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-dark rounded-xl overflow-hidden shadow-xl">
          <div className="relative pb-[56.25%] h-0">
            <ReactPlayer
              ref={playerRef}
              url={trailerUrl}
              className="absolute inset-0"
              width="100%"
              height="100%"
              controls={true}
              light={true} // This shows a preview thumbnail until the user clicks play
              playing={false}
              config={{
                youtube: {
                  playerVars: { showinfo: 1 }
                }
              }}
            />
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <a 
            href={trailerUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:text-blue-400 font-medium transition flex items-center"
          >
            <i className="fas fa-external-link-alt mr-2"></i> Watch on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
