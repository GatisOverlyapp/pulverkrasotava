import { Metadata } from 'next';
import { PageHero, TextBlock, TextWithImage, FaqAccordion } from '@/components/content';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Smilšu Strūklošana - Metāla Virsmu Sagatavošana',
  description: 'Profesionāla smilšu strūklošana Gulbenē, Vidzemē. Rūsas, vecās krāsas un netīrumu noņemšana. Virsmu sagatavošana pulverkrāsošanai. Zvaniet +371 26 102 841.',
  alternates: {
    canonical: '/pakalpojumi/smilsu-strukla-smilsu-struklosana',
  },
};

const faqItems = [
  {
    question: 'Kas ir smilšu strūklošana?',
    answer: 'Smilšu strūklošana (abrazīvā strūklošana) ir metāla virsmu tīrīšanas metode, kurā abrazīvās daļiņas ar lielu ātrumu tiek virzītas uz apstrādājamo virsmu, noņemot rūsu, veco krāsu un netīrumus.',
  },
  {
    question: 'Kāpēc ir nepieciešama smilšu strūklošana pirms pulverkrāsošanas?',
    answer: 'Smilšu strūklošana nodrošina tīru un raupju virsmu, uz kuras pulverkrāsa daudz labāk saķeras. Tas garantē ilgmūžīgāku un kvalitatīvāku pārklājumu.',
  },
  {
    question: 'Kādus materiālus var strūklot?',
    answer: 'Strūklot var jebkurus metāla izstrādājumus - tēraudu, alumīniju, čugunu un citus metālus. Metode ir piemērota gan maziem, gan lieliem izstrādājumiem.',
  },
  {
    question: 'Cik maksā smilšu strūklošana?',
    answer: 'Cena ir atkarīga no virsmas stāvokļa un laukuma. Standarta tīrīšana sākas no 10-20 EUR/m², intensīva rūsas noņemšana no 15-25 EUR/m². Sazinieties ar mums precīzam izcenojumam.',
  },
  {
    question: 'Vai var strūklot uz vietas?',
    answer: 'Mūsu strūklošanas iekārtas atrodas mūsu darbnīcā Gulbenē. Izstrādājumus var atvest pie mums vai arī varam organizēt transportu.',
  },
];

export default function SmilsuStruklosanaPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Sākums', href: '/' },
        { name: 'Pakalpojumi', href: '/pakalpojumi' },
        { name: 'Smilšu strūklošana', href: '/pakalpojumi/smilsu-strukla-smilsu-struklosana' },
      ]} />
      <ServiceSchema
        name="Smilšu strūklošana"
        description="Profesionāla smilšu strūklošana metāla virsmu sagatavošanai. Rūsas, vecās krāsas un netīrumu pilnīga noņemšana."
        url="/pakalpojumi/smilsu-strukla-smilsu-struklosana"
        image="/images/services/smilsu-strukla-1.jpg"
      />
      <FaqSchema items={faqItems} />
      <PageHero
        title="Smilšu strūklošana"
        backgroundImage="/images/header-background.jpg"
      />
      <TextBlock>
        <h2>Kas ir smilšu strūklošana?</h2>
        <p>
          Smilšu strūklošana (abrazīvā strūklošana) ir efektīva metāla virsmu
          sagatavošanas metode, kas ļauj pilnībā noņemt rūsu, veco krāsu, netīrumus
          un citus piesārņojumus. Šī tehnoloģija ir būtisks solis pirms
          pulverkrāsošanas vai cita pārklājuma uzklāšanas.
        </p>
      </TextBlock>

      <TextWithImage
        image="/images/services/smilsu-strukla-1.jpg"
        imageAlt="Smilšu strūklošanas process"
        imagePosition="right"
      >
        <h3>Smilšu strūklošanas priekšrocības</h3>
        <ul>
          <li><strong>Pilnīga tīrīšana</strong> - noņem pat dziļi iesēdušos rūsu un netīrumus</li>
          <li><strong>Virsmas sagatavošana</strong> - izveido ideālu virsmu turpmākai apstrādei</li>
          <li><strong>Universālums</strong> - piemērota dažāda lieluma izstrādājumiem</li>
          <li><strong>Ātrums</strong> - efektīva un ātra apstrāde</li>
          <li><strong>Kvalitāte</strong> - nodrošina labāku krāsas saķeri</li>
        </ul>
      </TextWithImage>

      <TextWithImage
        image="/images/services/smilsu-strukla-2.jpg"
        imageAlt="Strūkloti izstrādājumi"
        imagePosition="left"
      >
        <h3>Ko var strūklot?</h3>
        <p>
          Smilšu strūklošana ir piemērota:
        </p>
        <ul>
          <li>Metāla konstrukcijām un rāmjiem</li>
          <li>Auto detaļām un diskiem</li>
          <li>Vārtiem un žogiem</li>
          <li>Rūpnieciskām iekārtām</li>
          <li>Veciem izstrādājumiem atjaunošanai</li>
          <li>Fasādes elementiem</li>
        </ul>
      </TextWithImage>

      <FaqAccordion title="Biežāk uzdotie jautājumi" items={faqItems} />

      <section className="bg-pulver-grey section-padding">
        <div className="container text-center">
          <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-6">
            Nepieciešama virsmas sagatavošana?
          </h2>
          <p className="text-pulver-text mb-8 max-w-2xl mx-auto">
            Sazinieties ar mums, lai apspriestu jūsu projektu un saņemtu bezmaksas konsultāciju.
          </p>
          <Link href="/kontakti" className="btn btn-primary">
            Sazināties ar mums
          </Link>
        </div>
      </section>
    </>
  );
}
