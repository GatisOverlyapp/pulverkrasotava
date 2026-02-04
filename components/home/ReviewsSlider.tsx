'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface Review {
  author: string;
  authorImage?: string;
  rating: number;
  text: string;
}

interface ReviewsSliderProps {
  title?: string;
  reviews?: Review[];
}

const defaultReviews: Review[] = [
  {
    author: 'Jānis K.',
    authorImage: '/images/reviews/review-1.jpg',
    rating: 5,
    text: 'Lieliski apkalpošana un augsta kvalitāte! Darbs tika paveikts ātri un precīzi. Noteikti ieteikšu draugiem.',
  },
  {
    author: 'Mārtiņš L.',
    authorImage: '/images/reviews/review-2.jpg',
    rating: 5,
    text: 'Esmu ļoti apmierināts ar pulverkrāsošanas kvalitāti. Profesionāla komanda un konkurētspējīgas cenas.',
  },
  {
    author: 'Andris P.',
    rating: 5,
    text: 'Jau trešo reizi izmantoju Pulverkrāsotavas pakalpojumus. Vienmēr lieliska kvalitāte un ātri izpildes termiņi.',
  },
];

export default function ReviewsSlider({
  title = "Ko saka mūsu klienti",
  reviews = defaultReviews,
}: ReviewsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  }, [reviews.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Image
        key={index}
        src="/images/star.svg"
        alt=""
        width={20}
        height={20}
        className={`w-5 h-5 ${index < rating ? 'opacity-100' : 'opacity-30'}`}
      />
    ));
  };

  return (
    <section className="bg-pulver-grey section-padding">
      <div className="container">
        <h2 className="text-center text-pulver-light text-3xl md:text-4xl font-bold mb-12">
          {title}
        </h2>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Reviews */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-pulver-dark rounded-lg p-8 text-center">
                    {/* Author image and stars */}
                    <div className="flex flex-col items-center mb-6">
                      {review.authorImage && (
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                          <Image
                            src={review.authorImage}
                            alt={review.author}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex gap-1">
                        {renderStars(review.rating)}
                      </div>
                    </div>

                    {/* Author name */}
                    <h4 className="text-pulver-gold font-bold text-lg mb-4">
                      {review.author}
                    </h4>

                    {/* Review text */}
                    <p className="text-pulver-text leading-relaxed italic">
                      &ldquo;{review.text}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          {reviews.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 w-10 h-10 rounded-full bg-pulver-dark flex items-center justify-center text-pulver-gold hover:bg-pulver-gold hover:text-pulver-dark transition-colors"
                aria-label="Previous review"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 w-10 h-10 rounded-full bg-pulver-dark flex items-center justify-center text-pulver-gold hover:bg-pulver-gold hover:text-pulver-dark transition-colors"
                aria-label="Next review"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Dots indicator */}
          {reviews.length > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-pulver-gold' : 'bg-pulver-dark'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
