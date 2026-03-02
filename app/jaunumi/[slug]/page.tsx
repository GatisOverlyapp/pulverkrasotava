import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogPost } from '@/components/content';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

// This will be replaced with Keystatic data fetching
const posts = [
  {
    slug: 'kas-ir-pulverkrasosana',
    title: 'Kas ir pulverkrāsošana un kāpēc tā ir labāka?',
    content: `
      <p>Pulverkrāsošana ir moderna metāla virsmu apstrādes tehnoloģija, kas piedāvā daudzas priekšrocības salīdzinājumā ar tradicionālo šķidrās krāsas pielietojumu.</p>

      <h2>Kas ir pulverkrāsošana?</h2>
      <p>Pulverkrāsošana ir process, kurā sausas krāsas pulvera daļiņas tiek elektrostatiski uzklātas uz metāla virsmas un pēc tam cietinātas augstā temperatūrā (parasti 180-200°C). Rezultātā veidojas izturīgs, vienmērīgs un estētisks pārklājums.</p>

      <h2>Procesa soļi</h2>
      <ol>
        <li><strong>Virsmas sagatavošana</strong> - izstrādājums tiek notīrīts no rūsas, vecās krāsas un netīrumiem</li>
        <li><strong>Pulvera uzklāšana</strong> - elektrostatiski uzlādēts pulveris tiek uzklāts uz iezemētas metāla virsmas</li>
        <li><strong>Cietināšana</strong> - izstrādājums tiek ievietots krāsnī, kur pulveris izkūst un veido cietu pārklājumu</li>
        <li><strong>Dzesēšana</strong> - izstrādājums tiek atdzesēts un ir gatavs lietošanai</li>
      </ol>

      <h2>Priekšrocības</h2>
      <ul>
        <li>Augstāka izturība pret skrāpējumiem un triecieniem</li>
        <li>Labāka izturība pret koroziju</li>
        <li>Vienmērīgāks pārklājums bez tecēšanas</li>
        <li>Plašāka krāsu un faktūru izvēle</li>
        <li>Videi draudzīgāka tehnoloģija (bez šķīdinātājiem)</li>
      </ul>
    `,
    featuredImage: '/images/header-background.jpg',
    publishedDate: '2024-01-15',
    metaTitle: 'Kas ir pulverkrāsošana un kāpēc tā ir labāka?',
    metaDescription: 'Uzziniet, kas ir pulverkrāsošana, kā notiek process un kāpēc šī tehnoloģija ir labāka par tradicionālo krāsošanu.',
  },
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Raksts nav atrasts',
    };
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription,
    alternates: {
      canonical: `/jaunumi/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24">
      <BreadcrumbSchema items={[
        { name: 'Sākums', href: '/' },
        { name: 'Jaunumi', href: '/jaunumi' },
        { name: post.title, href: `/jaunumi/${slug}` },
      ]} />
      <BlogPost
        title={post.title}
        content={<div dangerouslySetInnerHTML={{ __html: post.content }} />}
        featuredImage={post.featuredImage}
        publishedDate={post.publishedDate}
      />
    </div>
  );
}
