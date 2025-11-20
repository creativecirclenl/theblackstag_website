"use client";
import React, { useEffect, useRef } from "react";

interface PinterestGalleryProps {
  boardUrl: string;
  title?: string;
}

/**
 * PinterestGallery component displays a Pinterest board using Pinterest's embed widget.
 * 
 * This component uses Pinterest's official board widget to display pins without requiring
 * API authentication or dealing with CORS issues. The widget is loaded dynamically and
 * renders the board content directly from Pinterest.
 */
const PinterestGallery: React.FC<PinterestGalleryProps> = ({ boardUrl, title }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Pinterest's widget script if not already loaded
    if (!document.querySelector('script[src*="pinit.js"]')) {
      const script = document.createElement('script');
      script.async = true;
      script.defer = true;
      script.src = 'https://assets.pinterest.com/js/pinit.js';
      document.body.appendChild(script);
    } else {
      // If script is already loaded, trigger a rebuild of widgets
      if (window.PinUtils) {
        window.PinUtils.build();
      }
    }
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {title && (
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            {title}
          </h2>
        )}

        <div ref={containerRef} className="flex flex-col items-center">
          {/* Pinterest Board Widget */}
          <a
            data-pin-do="embedBoard"
            data-pin-board-width="100%"
            data-pin-scale-height="600"
            data-pin-scale-width="80"
            href={boardUrl}
            className="block w-full"
          />
          
          {/* Fallback link for when JavaScript is disabled or widget fails to load */}
          <noscript>
            <div className="text-center py-8">
              <a
                href={boardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-tbsorange to-tbsyellow text-white font-semibold rounded-lg hover:shadow-lg transition focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
              >
                Bekijk op Pinterest →
              </a>
            </div>
          </noscript>
        </div>

        <div className="text-center mt-8">
          <a
            href={boardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-gradient-to-r from-tbsorange to-tbsyellow text-white font-semibold rounded-lg hover:shadow-lg transition focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
          >
            Meer ideeën op Pinterest →
          </a>
        </div>
      </div>
    </section>
  );
};

// Extend Window interface for Pinterest's PinUtils
declare global {
  interface Window {
    PinUtils?: {
      build: () => void;
    };
  }
}

export default PinterestGallery;
