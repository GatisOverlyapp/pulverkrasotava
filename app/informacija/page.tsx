import { Metadata } from 'next';
import { PageHero } from '@/components/content';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Informācija - Padomi par Pulverkrāsošanu un Metālapstrādi',
  description: 'Noderīga informācija par pulverkrāsošanu, smilšu strūklošanu un metālapstrādi. Padomi un ieteikumi no Pulverkrāsotava speciālistiem.',
  alternates: {
    canonical: '/informacija',
  },
};

const articles = [
  {
    title: 'Kas ir pulverkrāsošana un kā tā darbojas?',
    slug: 'kas-ir-pulverkrasosana',
    excerpt: 'Uzziniet vairāk par pulverkrāsošanas tehnoloģiju, tās priekšrocībām un pielietojumu.',
    date: '2024-01-15',
  },
  {
    title: 'Kā sagatavot metālu pirms pulverkrāsošanas?',
    slug: 'ka-sagatavot-metalu',
    excerpt: 'Pareiza virsmas sagatavošana ir būtiska kvalitatīvam rezultātam. Uzziniet, kā to izdarīt pareizi.',
    date: '2024-01-10',
  },
  {
    title: 'RAL krāsu katalogs - kā izvēlēties pareizo krāsu?',
    slug: 'ral-krasu-katalogs',
    excerpt: 'Ceļvedis RAL krāsu sistēmā un padomi, kā izvēlēties piemērotāko krāsu jūsu projektam.',
    date: '2024-01-05',
  },
  {
    title: 'Pulverkrāsošana vs. tradicionālā krāsošana',
    slug: 'pulverkrasosana-vs-tradiconala',
    excerpt: 'Salīdziniet pulverkrāsošanu ar tradicionālo krāsošanu un uzziniet, kura metode ir piemērotāka jums.',
    date: '2023-12-20',
  },
];

export default function InformacijaPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Sākums', href: '/' },
        { name: 'Informācija', href: '/informacija' },
      ]} />
      <PageHero title="Informācija" />
      <section id="content" className="bg-pulver-dark section-padding">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <p className="text-pulver-text text-lg mb-12 text-center">
              Noderīga informācija par pulverkrāsošanu, smilšu strūklošanu un metālapstrādi.
              Padomi un ieteikumi, kas palīdzēs labāk izprast mūsu pakalpojumus.
            </p>

            <div className="space-y-8">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="bg-pulver-grey rounded-lg p-6 md:p-8 hover:bg-pulver-grey/80 transition-colors"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <h2 className="text-pulver-light text-xl md:text-2xl font-bold">
                      <Link
                        href={`/informacija/${article.slug}`}
                        className="hover:text-pulver-gold transition-colors"
                      >
                        {article.title}
                      </Link>
                    </h2>
                    <time className="text-pulver-text text-sm flex-shrink-0">
                      {new Date(article.date).toLocaleDateString('lv-LV', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                  </div>
                  <p className="text-pulver-text mb-4">{article.excerpt}</p>
                  <Link
                    href={`/informacija/${article.slug}`}
                    className="text-pulver-gold hover:text-pulver-light transition-colors inline-flex items-center gap-2"
                  >
                    Lasīt vairāk
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-pulver-grey section-padding">
        <div className="container text-center">
          <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-6">
            Vai jums ir jautājumi?
          </h2>
          <p className="text-pulver-text mb-8 max-w-2xl mx-auto">
            Sazinieties ar mums, un mēs labprāt atbildēsim uz visiem jūsu jautājumiem.
          </p>
          <Link href="/kontakti" className="btn btn-primary">
            Sazināties ar mums
          </Link>
        </div>
      </section>
    </>
  );
}
