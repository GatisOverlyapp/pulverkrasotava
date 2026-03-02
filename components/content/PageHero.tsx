import Image from 'next/image';

interface PageHeroProps {
  title: string;
  backgroundImage?: string;
}

export default function PageHero({
  title,
  backgroundImage = '/images/header-background.jpg',
}: PageHeroProps) {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-pulver-dark/60"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center pt-24">
        <h1 className="text-pulver-light text-4xl md:text-5xl lg:text-6xl font-extrabold">
          {title}
        </h1>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#content" className="block">
          <Image
            src="/scroll-down.gif"
            alt="Scroll down"
            width={40}
            height={40}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
        </a>
      </div>
    </section>
  );
}
