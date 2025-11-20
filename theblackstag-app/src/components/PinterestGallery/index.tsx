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
    <section className="my-12">
      <div className="container">
        {title && (
          <div className="mb-8">
            <h3 className="text-tbsyellow uppercase text-lg mb-2 md:text-xl">
              Inspiratie
            </h3>
            <h4 className="text-2xl md:text-4xl">
              {title}
            </h4>
          </div>
        )}

        <div ref={containerRef} className="mb-8 flex justify-left">
          {/* Pinterest Board Widget */}
          <a
            data-pin-do="embedBoard"
            data-pin-board-width="800"
            data-pin-scale-height="400"
            data-pin-scale-width="400"
            href={boardUrl}
            className="block"
          />
          
          {/* Fallback link for when JavaScript is disabled or widget fails to load */}
          <noscript>
            <div className="py-8">
              <a
                href={boardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b leading-relaxed hover:bg-linear-to-t hover:from-50% hover:to-50% hover:from-tbsgreen hover:border-b-0"
              >
                Bekijk op Pinterest →
              </a>
            </div>
          </noscript>
        </div>

        <div>
          <a
            href={boardUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b leading-relaxed hover:bg-linear-to-t hover:from-50% hover:to-50% hover:from-tbsgreen hover:border-b-0"
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
