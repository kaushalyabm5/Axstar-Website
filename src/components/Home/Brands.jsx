// Brands.jsx
import React, { useRef, useEffect, useState } from "react";
import cimg1 from "../../assets/cimg1.png";
import cimg2 from "../../assets/cimg2.png";
import cimg3 from "../../assets/cimg3.png";
import cimg4 from "../../assets/cimg4.png";
import cimg5 from "../../assets/cimg5.png";

const images = [cimg1, cimg2, cimg3, cimg4, cimg5];

const Brands = () => {
  const firstSetRef = useRef(null);
  const [offset, setOffset] = useState(null);

  useEffect(() => {
    // Preload all images first
    let loaded = 0;
    const preload = () => {
      loaded++;
      if (loaded === images.length) {
        // After all images loaded, measure the exact width of one set
        if (firstSetRef.current) {
          setOffset(firstSetRef.current.offsetWidth);
        }
      }
    };

    images.forEach((src) => {
      const img = new Image();
      img.onload = preload;
      img.onerror = preload;
      img.src = src;
    });
  }, []);

  // Also measure on resize
  useEffect(() => {
    if (offset === null) return;
    const handleResize = () => {
      if (firstSetRef.current) {
        setOffset(firstSetRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [offset]);

  const GAP = 16; // gap-4 = 16px (matches md:gap-6 fallback for simplicity)

  return (
    <section className="w-full py-28 bg-[#2b2a2a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-gray-100 text-center">
          Our Brands
        </h2>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex whitespace-nowrap"
            style={{
              gap: `${GAP}px`,
              animation:
                offset !== null
                  ? `scroll 20s linear infinite`
                  : "none",
              ["--scroll-offset"]: offset !== null ? `${offset + GAP}px` : "0px",
            }}
          >
            {/* First set — measured */}
            <div ref={firstSetRef} className="flex" style={{ gap: `${GAP}px` }}>
              {images.map((img, index) => (
                <div
                  key={`a-${index}`}
                  className="flex-none w-[110px] md:w-[140px] h-24 md:h-28 bg-black/10 backdrop-blur-md flex items-center justify-center"
                >
                  <img
                    src={img}
                    alt={`brand-${index}`}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              ))}
            </div>

            {/* Duplicate set */}
            <div className="flex" style={{ gap: `${GAP}px` }}>
              {images.map((img, index) => (
                <div
                  key={`b-${index}`}
                  className="flex-none w-[110px] md:w-[140px] h-24 md:h-28 bg-black/10 backdrop-blur-md flex items-center justify-center"
                >
                  <img
                    src={img}
                    alt={`brand-${index}`}
                    className="w-full h-full object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-1 * var(--scroll-offset))); }
        }
        .overflow-hidden > div > div[style]:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Brands;