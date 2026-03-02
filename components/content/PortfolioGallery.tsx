'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface PortfolioItem {
  src: string;
  alt: string;
  category: string;
}

interface PortfolioGalleryProps {
  items: PortfolioItem[];
  categories: { key: string; label: string }[];
}

export default function PortfolioGallery({ items, categories }: PortfolioGalleryProps) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter((item) => item.category === activeCategory);

  const isOpen = lightboxIndex !== null;

  const goNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  const goPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  const close = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, close, goNext, goPrev]);

  return (
    <>
      {/* Category filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === 'all'
              ? 'bg-pulver-gold text-pulver-dark'
              : 'bg-pulver-grey text-pulver-text hover:bg-pulver-gold/20 hover:text-pulver-light'
          }`}
        >
          Visi darbi
        </button>
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat.key
                ? 'bg-pulver-gold text-pulver-dark'
                : 'bg-pulver-grey text-pulver-text hover:bg-pulver-gold/20 hover:text-pulver-light'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Gallery grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map((item, index) => (
          <button
            key={item.src}
            onClick={() => setLightboxIndex(index)}
            className="group relative aspect-square overflow-hidden rounded-lg bg-pulver-grey cursor-pointer"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-pulver-dark/0 group-hover:bg-pulver-dark/40 transition-colors duration-300 flex items-end">
              <span className="text-pulver-light text-sm p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.alt}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {isOpen && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-pulver-dark/95 flex items-center justify-center"
          onClick={close}
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-6 right-6 text-pulver-light hover:text-pulver-gold transition-colors z-10"
            aria-label="Aizvērt (Esc)"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-pulver-light hover:text-pulver-gold transition-colors z-10 p-2"
            aria-label="Iepriekšējais"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-pulver-light hover:text-pulver-gold transition-colors z-10 p-2"
            aria-label="Nākamais"
          >
            <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full mx-16 md:mx-24"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredItems[lightboxIndex].src}
              alt={filteredItems[lightboxIndex].alt}
              fill
              sizes="90vw"
              className="object-contain"
            />
          </div>

          {/* Caption + counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center z-10">
            <p className="text-pulver-light text-sm mb-1">
              {filteredItems[lightboxIndex].alt}
            </p>
            <p className="text-pulver-text text-xs">
              {lightboxIndex + 1} / {filteredItems.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
