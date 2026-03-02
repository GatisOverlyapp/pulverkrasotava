'use client';

import { useState } from 'react';
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
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredItems = activeCategory === 'all'
    ? items
    : items.filter((item) => item.category === activeCategory);

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
            key={`${item.src}-${index}`}
            onClick={() => setLightboxImage(item.src)}
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
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-pulver-dark/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 text-pulver-light hover:text-pulver-gold transition-colors z-10"
            aria-label="Aizvērt"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full">
            <Image
              src={lightboxImage}
              alt="Portfolio attēls"
              fill
              sizes="90vw"
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
