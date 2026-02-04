import Image from 'next/image';

interface TextWithImageProps {
  title?: string;
  content: React.ReactNode;
  image: string;
  imageAlt?: string;
  imagePosition?: 'left' | 'right';
  className?: string;
}

export default function TextWithImage({
  title,
  content,
  image,
  imageAlt = '',
  imagePosition = 'right',
  className = '',
}: TextWithImageProps) {
  return (
    <section className={`bg-pulver-dark section-padding ${className}`}>
      <div className="container">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
          }`}
        >
          {/* Text content */}
          <div className={imagePosition === 'left' ? 'lg:order-2' : ''}>
            {title && (
              <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-6">
                {title}
              </h2>
            )}
            <div className="text-pulver-white leading-relaxed space-y-4">
              {content}
            </div>
          </div>

          {/* Image */}
          <div className={imagePosition === 'left' ? 'lg:order-1' : ''}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
