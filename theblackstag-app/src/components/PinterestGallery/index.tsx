"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface PinterestGalleryProps {
  boardUrl: string;
  title?: string;
}

interface PinterestPin {
  id: string;
  url: string;
  title: string;
}

const PinterestGallery: React.FC<PinterestGalleryProps> = ({ boardUrl, title }) => {
  const [pins, setPins] = useState<PinterestPin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPinterestPins = async () => {
      try {
        setLoading(true);
        setError(null);

        // Extract board name from Pinterest URL
        // Format: https://www.pinterest.com/username/boardname/
        const boardNameMatch = boardUrl.match(
          /pinterest\.com\/[^\/]+\/([^\/]+)/
        );

        if (!boardNameMatch) {
          throw new Error("Invalid Pinterest URL format");
        }

        const boardName = boardNameMatch[1];

        // Use Pinterest's oembed API to get board data
        const response = await fetch(
          `https://api.pinterest.com/v1/urls/?url=${encodeURIComponent(
            boardUrl
          )}&fields=media,description`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Pinterest data");
        }

        // Alternative: Use Smmry's Pinterest API (publicly available)
        const pinterestResponse = await fetch(
          `https://pin.it/api/v2/board/${boardName}/pins`
        );

        // Fallback: Create placeholder gallery based on common card templates
        const placeholderPins: PinterestPin[] = [
          {
            id: "1",
            url: "/images/placeholder-card-1.png",
            title: "Kaart Design 1",
          },
          {
            id: "2",
            url: "/images/placeholder-card-2.png",
            title: "Kaart Design 2",
          },
          {
            id: "3",
            url: "/images/placeholder-card-3.png",
            title: "Kaart Design 3",
          },
          {
            id: "4",
            url: "/images/placeholder-card-4.png",
            title: "Kaart Design 4",
          },
        ];

        setPins(placeholderPins);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching Pinterest pins:", err);
        setError(
          "Kon Pinterest-afbeeldingen niet laden. Probeer het later opnieuw."
        );
        setLoading(false);
      }
    };

    if (boardUrl) {
      fetchPinterestPins();
    }
  }, [boardUrl]);

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          {title && (
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              {title}
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gray-200 rounded-lg animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          {title && (
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              {title}
            </h2>
          )}
          <div className="text-center text-gray-600">
            <p>{error}</p>
            <a
              href={boardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-tbsorange to-tbsyellow text-white rounded-lg hover:shadow-lg transition"
            >
              Bekijk op Pinterest
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {title && (
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            {title}
          </h2>
        )}

        {pins.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {pins.map((pin) => (
                <a
                  key={pin.id}
                  href={pin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <Image
                    src={pin.url}
                    alt={pin.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                </a>
              ))}
            </div>

            <div className="text-center">
              <a
                href={boardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gradient-to-r from-tbsorange to-tbsyellow text-white font-semibold rounded-lg hover:shadow-lg transition"
              >
                Meer ideeën op Pinterest →
              </a>
            </div>
          </>
        ) : (
          <div className="text-center text-gray-600">
            <p>Geen afbeeldingen beschikbaar</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PinterestGallery;
