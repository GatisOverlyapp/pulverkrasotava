import Image from 'next/image';
import Link from 'next/link';

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  showScrollIcon?: boolean;
}

export default function Hero({
  title = "Pulverkrāsošana",
  subtitle = "Profesionāla pulverkrāsošana, smilšu strūklošana un metālapstrāde ar augstāko kvalitāti",
  backgroundImage = "/images/header-background.jpg",
  showScrollIcon = true,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-pulver-dark/60"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-center pt-24 pb-32">
        <h1 className="text-pulver-light text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-pulver-text text-lg md:text-xl max-w-2xl mx-auto mb-10">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/kontakti" className="btn btn-primary">
            Sazināties ar mums
          </Link>
          <Link href="/pakalpojumi" className="btn btn-secondary">
            Mūsu pakalpojumi
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      {showScrollIcon && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <a href="#services" className="block">
            <Image
              src="/scroll-down.gif"
              alt="Scroll down"
              width={40}
              height={40}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          </a>
        </div>
      )}
    </section>
  );
}
