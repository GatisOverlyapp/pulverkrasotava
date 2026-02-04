import { Metadata } from 'next';
import { PageHero, TextBlock } from '@/components/content';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Article content - in production this would come from Keystatic CMS
const articles: Record<string, { title: string; content: string; date: string }> = {
  'kas-ir-pulverkrasosana': {
    title: 'Kas ir pulverkrāsošana un kā tā darbojas?',
    date: '2024-01-15',
    content: `
      <h2>Pulverkrāsošanas tehnoloģija</h2>
      <p>
        Pulverkrāsošana ir moderna metāla virsmu apstrādes tehnoloģija, kas nodrošina
        izturīgu, vienmērīgu un ilgmūžīgu pārklājumu. Atšķirībā no tradicionālās šķidrās
        krāsas, pulverkrāsa ir sausas sveķu un pigmentu daļiņas, kas tiek uzklātas
        elektrostatiski.
      </p>

      <h3>Kā notiek process?</h3>
      <ol>
        <li><strong>Virsmas sagatavošana</strong> - izstrādājums tiek tīrīts no rūsas,
        netīrumiem un vecās krāsas, parasti izmantojot smilšu strūklošanu.</li>
        <li><strong>Pulvera uzklāšana</strong> - izmantojot speciālu pistoli,
        elektrostatiski uzlādētais pulveris tiek uzklāts uz metāla virsmas.</li>
        <li><strong>Sacietēšana krāsnī</strong> - izstrādājums tiek ievietots krāsnī
        160-200°C temperatūrā, kur pulveris kūst un veido cietu, vienmērīgu pārklājumu.</li>
      </ol>

      <h3>Pulverkrāsošanas priekšrocības</h3>
      <ul>
        <li>Augsta izturība pret mehāniskiem bojājumiem</li>
        <li>Lieliska pretkorozijas aizsardzība</li>
        <li>Videi draudzīga - nesatur šķīdinātājus</li>
        <li>Plašs krāsu un faktūru klāsts</li>
        <li>Ilgmūžīgs rezultāts</li>
      </ul>
    `,
  },
  'ka-sagatavot-metalu': {
    title: 'Kā sagatavot metālu pirms pulverkrāsošanas?',
    date: '2024-01-10',
    content: `
      <h2>Virsmas sagatavošanas nozīme</h2>
      <p>
        Pareiza virsmas sagatavošana ir būtisks solis pirms pulverkrāsošanas.
        Labi sagatavota virsma nodrošina labāku krāsas saķeri un ilgmūžīgāku rezultātu.
      </p>

      <h3>Sagatavošanas soļi</h3>
      <ol>
        <li><strong>Attaukošana</strong> - tauku, eļļu un citu piesārņojumu noņemšana</li>
        <li><strong>Rūsas noņemšana</strong> - smilšu strūklošana vai ķīmiska apstrāde</li>
        <li><strong>Virsmas profila veidošana</strong> - raupjuma izveide labākai adhēzijai</li>
        <li><strong>Tīrīšana</strong> - putekļu un daļiņu noņemšana pirms krāsošanas</li>
      </ol>

      <h3>Biežākās kļūdas</h3>
      <ul>
        <li>Nepilnīga rūsas noņemšana</li>
        <li>Tauku paliekas uz virsmas</li>
        <li>Pārāk ilgs laiks starp sagatavošanu un krāsošanu</li>
      </ul>
    `,
  },
  'ral-krasu-katalogs': {
    title: 'RAL krāsu katalogs - kā izvēlēties pareizo krāsu?',
    date: '2024-01-05',
    content: `
      <h2>Par RAL krāsu sistēmu</h2>
      <p>
        RAL ir starptautiski atzīta krāsu standartizācijas sistēma, kas nodrošina
        precīzu krāsu atbilstību. Sistēma tika izveidota Vācijā 1927. gadā un
        šobrīd ietver vairāk nekā 2500 krāsu.
      </p>

      <h3>Populārākās RAL krāsas</h3>
      <ul>
        <li><strong>RAL 9005</strong> - Spīdīgi melns</li>
        <li><strong>RAL 9010</strong> - Tīri balts</li>
        <li><strong>RAL 7016</strong> - Antracīta pelēks</li>
        <li><strong>RAL 3000</strong> - Ugunssarkanais</li>
        <li><strong>RAL 5010</strong> - Enciāna zils</li>
      </ul>

      <h3>Kā izvēlēties krāsu?</h3>
      <p>
        Ja nezināt precīzu RAL kodu, varat atsūtīt mums paraugu vai fotogrāfiju,
        un mēs palīdzēsim atrast atbilstošāko krāsu. Piedāvājam arī metāliskās
        krāsas un speciālās faktūras.
      </p>
    `,
  },
  'pulverkrasosana-vs-tradiconala': {
    title: 'Pulverkrāsošana vs. tradicionālā krāsošana',
    date: '2023-12-20',
    content: `
      <h2>Salīdzinājums</h2>
      <p>
        Izvēloties starp pulverkrāsošanu un tradicionālo krāsošanu, ir svarīgi
        saprast abu metožu priekšrocības un trūkumus.
      </p>

      <h3>Pulverkrāsošanas priekšrocības</h3>
      <ul>
        <li>Augstāka izturība un ilgmūžība</li>
        <li>Videi draudzīgāka (nav šķīdinātāju)</li>
        <li>Vienmērīgāks pārklājums</li>
        <li>Labāka pretkorozijas aizsardzība</li>
        <li>Ekonomiskāka lieliem apjomiem</li>
      </ul>

      <h3>Tradicionālās krāsošanas priekšrocības</h3>
      <ul>
        <li>Piemērota jebkādiem materiāliem</li>
        <li>Var veikt uz vietas</li>
        <li>Mazākas sākuma investīcijas</li>
        <li>Piemērota maziem labojumiem</li>
      </ul>

      <h3>Secinājums</h3>
      <p>
        Pulverkrāsošana ir labākā izvēle metāla izstrādājumiem, kur nepieciešama
        augsta izturība un ilgmūžība. Tradicionālā krāsošana ir piemērotāka
        maziem darbiem un situācijām, kad nav iespējams pārvietot izstrādājumu.
      </p>
    `,
  },
};

type PageParams = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return { title: 'Raksts nav atrasts' };
  }

  return {
    title: `${article.title} | Pulverkrāsotava`,
    description: `${article.title} - noderīga informācija par pulverkrāsošanu un metālapstrādi.`,
  };
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default async function ArticlePage({ params }: { params: PageParams }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  return (
    <>
      <PageHero title={article.title} />
      <TextBlock>
        <div className="mb-6">
          <time className="text-pulver-text text-sm">
            {new Date(article.date).toLocaleDateString('lv-LV', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </div>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </TextBlock>

      <section className="bg-pulver-grey section-padding">
        <div className="container text-center">
          <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-6">
            Vai jums ir jautājumi?
          </h2>
          <p className="text-pulver-text mb-8 max-w-2xl mx-auto">
            Sazinieties ar mums, un mēs labprāt atbildēsim uz visiem jūsu jautājumiem.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/kontakti" className="btn btn-primary">
              Sazināties ar mums
            </Link>
            <Link href="/informacija" className="btn btn-secondary">
              Visi raksti
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
