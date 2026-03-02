import { Metadata } from 'next';
import { PageHero, BlogGrid } from '@/components/content';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Jaunumi',
  description: 'Pulverkrāsotava jaunumi - raksti par pulverkrāsošanu, metālapstrādi un mūsu projektiem.',
  alternates: {
    canonical: '/jaunumi',
  },
};

// This will be replaced with Keystatic data fetching
const posts = [
  {
    slug: 'kas-ir-pulverkrasosana',
    title: 'Kas ir pulverkrāsošana un kāpēc tā ir labāka?',
    excerpt: 'Uzziniet, kas ir pulverkrāsošana, kā notiek process un kāpēc šī tehnoloģija ir labāka par tradicionālo krāsošanu.',
    featuredImage: '/images/header-background.jpg',
    publishedDate: '2024-01-15',
  },
  {
    slug: 'pulverkrasosanas-priekrocibas',
    title: 'Pulverkrāsošanas priekšrocības salīdzinājumā ar parasto krāsošanu',
    excerpt: 'Detalizēts salīdzinājums starp pulverkrāsošanu un tradicionālo šķidrās krāsas pielietojumu.',
    featuredImage: '/images/header-background.jpg',
    publishedDate: '2024-01-10',
  },
];

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Sākums', href: '/' },
        { name: 'Jaunumi', href: '/jaunumi' },
      ]} />
      <PageHero title="Jaunumi" />
      <BlogGrid posts={posts} />
    </>
  );
}
