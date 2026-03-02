import { Metadata } from 'next';
import { PageHero, TextBlock, TextWithImage, FaqAccordion } from '@/components/content';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Metālapstrāde - Griešana, Locīšana, Metināšana',
  description: 'Profesionāla metālapstrāde Gulbenē, Vidzemē - griešana, locīšana, metināšana un citi metāla apstrādes pakalpojumi. Zvaniet +371 26 102 841.',
  alternates: {
    canonical: '/pakalpojumi/metalapstrade',
  },
};

const faqItems = [
  {
    question: 'Kādus metālapstrādes pakalpojumus piedāvājat?',
    answer: 'Piedāvājam metāla griešanu, locīšanu, MIG/MAG un TIG metināšanu, slīpēšanu, urbšanu un citus metālapstrādes darbus. Varam apstrādāt dažāda veida metālus.',
  },
  {
    question: 'Vai varat izgatavot pēc maniem rasējumiem?',
    answer: 'Jā, mēs izgatavosim metāla izstrādājumus pēc jūsu rasējumiem vai skicēm. Varat arī aprakstīt savu ideju, un mūsu speciālisti palīdzēs to realizēt.',
  },
  {
    question: 'Kāds ir minimālais pasūtījuma apjoms?',
    answer: 'Minimālā pasūtījuma summa ir 50 EUR (bez PVN). Mēs izpildām gan viena izstrādājuma pasūtījumus, gan sērijveida ražošanu.',
  },
  {
    question: 'Vai piedāvājat arī pulverkrāsošanu pēc metālapstrādes?',
    answer: 'Jā, mēs piedāvājam pilnu servisu - no metālapstrādes līdz smilšu strūklošanai un pulverkrāsošanai. Tas ietaupa jūsu laiku un nodrošina labāku gala rezultātu.',
  },
  {
    question: 'Cik ilgi aizņem metālapstrādes darbi?',
    answer: 'Izpildes laiks atkarīgs no darba sarežģītības un apjoma. Vienkārši darbi tiek izpildīti 1-3 dienu laikā, sarežģītāki projekti - 1-2 nedēļu laikā.',
  },
];

export default function MetalapstradePage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Sākums', href: '/' },
        { name: 'Pakalpojumi', href: '/pakalpojumi' },
        { name: 'Metālapstrāde', href: '/pakalpojumi/metalapstrade' },
      ]} />
      <ServiceSchema
        name="Metālapstrāde"
        description="Profesionāla metālapstrāde - griešana, locīšana, metināšana un citi metāla apstrādes pakalpojumi."
        url="/pakalpojumi/metalapstrade"
        image="/images/services/metalapstrade-1.jpg"
      />
      <FaqSchema items={faqItems} />
      <PageHero
        title="Metālapstrāde"
        backgroundImage="/images/header-background.jpg"
      />
      <TextBlock>
        <h2>Metālapstrādes pakalpojumi</h2>
        <p>
          Piedāvājam visaptverošus metālapstrādes pakalpojumus - no vienkāršiem
          griešanas un locīšanas darbiem līdz sarežģītu konstrukciju izgatavošanai.
          Mūsu pieredzējušie speciālisti un moderna iekārta garantē augstas
          kvalitātes rezultātu.
        </p>
      </TextBlock>

      <TextWithImage
        image="/images/services/metalapstrade-1.jpg"
        imageAlt="Metālapstrādes process"
        imagePosition="right"
      >
        <h3>Mūsu pakalpojumi</h3>
        <ul>
          <li><strong>Metāla griešana</strong> - precīza griešana pēc izmēriem</li>
          <li><strong>Metāla locīšana</strong> - dažādu profilu un leņķu veidošana</li>
          <li><strong>Metināšana</strong> - MIG/MAG un TIG metināšana</li>
          <li><strong>Slīpēšana</strong> - virsmu apstrāde un apdare</li>
          <li><strong>Urbšana</strong> - precīzu caurumu veidošana</li>
        </ul>
      </TextWithImage>

      <TextWithImage
        image="/images/services/metalapstrade-2.jpg"
        imageAlt="Metāla izstrādājumi"
        imagePosition="left"
      >
        <h3>Ko varam izgatavot?</h3>
        <p>
          Veicam dažādus metālapstrādes darbus:
        </p>
        <ul>
          <li>Konstrukcijas un rāmji</li>
          <li>Kāpnes un margas</li>
          <li>Vārti un žogi</li>
          <li>Mēbeļu elementi</li>
          <li>Rūpnieciskās detaļas</li>
          <li>Individuāli projekti pēc pasūtījuma</li>
        </ul>
      </TextWithImage>

      <FaqAccordion title="Biežāk uzdotie jautājumi" items={faqItems} />

      <section className="bg-pulver-grey section-padding">
        <div className="container text-center">
          <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-6">
            Nepieciešami metālapstrādes darbi?
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
