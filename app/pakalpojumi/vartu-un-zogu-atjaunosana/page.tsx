import { Metadata } from 'next';
import { PageHero, TextBlock, TextWithImage, FaqAccordion } from '@/components/content';
import Link from 'next/link';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import ServiceSchema from '@/components/ServiceSchema';
import FaqSchema from '@/components/FaqSchema';

export const metadata: Metadata = {
  title: 'Vārtu un Žogu Atjaunošana - Smilšu Strūkla un Pulverkrāsošana',
  description: 'Vārtu un žogu atjaunošana Gulbenē, Vidzemē - smilšu strūklošana, rūsas noņemšana un pulverkrāsošana. Atjaunojam vecus vārtus un žogus. Zvaniet +371 26 102 841.',
  alternates: {
    canonical: '/pakalpojumi/vartu-un-zogu-atjaunosana',
  },
};

const faqItems = [
  {
    question: 'Kā notiek vārtu atjaunošanas process?',
    answer: 'Process ietver vairākus soļus: demontāža (ja nepieciešams), smilšu strūklošana rūsas un vecās krāsas noņemšanai, metāla remonts (ja nepieciešams), pulverkrāsošana un montāža atpakaļ.',
  },
  {
    question: 'Vai atjaunošana ir izdevīgāka par jaunu vārtu iegādi?',
    answer: 'Vairumā gadījumu atjaunošana ir ievērojami izdevīgāka nekā jaunu vārtu vai žoga iegāde. Izmaksas parasti ir 30-50% no jaunas konstrukcijas cenas, un jūs saglabājat savu unikālo dizainu.',
  },
  {
    question: 'Vai varat atjaunot arī kaltos vārtus?',
    answer: 'Jā, mēs specializējamies arī kalto vārtu un žogu atjaunošanā. Smilšu strūklošana un pulverkrāsošana ļauj pilnībā atjaunot pat ļoti sarūsējušus kaltus izstrādājumus.',
  },
  {
    question: 'Cik ilgi kalpo atjaunotie vārti?',
    answer: 'Ar pulverkrāsas pārklājumu atjaunotie vārti kalpo 15-20 gadus, kas ir ievērojami ilgāk nekā tradicionālā krāsošana. Pulverkrāsa nodrošina lielisku aizsardzību pret koroziju.',
  },
  {
    question: 'Vai piedāvājat transportu?',
    answer: 'Jā, varam organizēt vārtu un žogu elementu transportēšanu no jūsu objekta uz mūsu darbnīcu un atpakaļ. Sazinieties ar mums, lai apspriestu transporta iespējas.',
  },
];

export default function VartuAtjaunosanaPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Sākums', href: '/' },
        { name: 'Pakalpojumi', href: '/pakalpojumi' },
        { name: 'Vārtu un žogu atjaunošana', href: '/pakalpojumi/vartu-un-zogu-atjaunosana' },
      ]} />
      <ServiceSchema
        name="Vārtu un žogu atjaunošana"
        description="Vārtu un žogu atjaunošana - smilšu strūklošana, rūsas noņemšana un pulverkrāsošana. Pilns atjaunošanas serviss."
        url="/pakalpojumi/vartu-un-zogu-atjaunosana"
        image="/images/services/varti-1.jpg"
      />
      <FaqSchema items={faqItems} />
      <PageHero
        title="Vārtu un žogu atjaunošana"
        backgroundImage="/images/header-background.jpg"
      />
      <TextBlock>
        <h2>Vārtu un žogu atjaunošanas pakalpojumi</h2>
        <p>
          Piedāvājam pilnu vārtu un žogu atjaunošanas servisu - no virsmas
          sagatavošanas līdz gala pārklājumam. Atjaunojam gan vecos, sarūsējušos
          vārtus, gan žogus, piešķirot tiem jaunu izskatu.
        </p>
      </TextBlock>

      <TextWithImage
        image="/images/services/varti-1.jpg"
        imageAlt="Vārtu atjaunošana"
        imagePosition="right"
      >
        <h3>Atjaunošanas process</h3>
        <ul>
          <li><strong>Demontāža</strong> - ja nepieciešams, demontējam vārtus vai žoga elementus</li>
          <li><strong>Smilšu strūklošana</strong> - pilnībā noņemam rūsu un veco krāsu</li>
          <li><strong>Remonts</strong> - ja nepieciešams, veicam metāla remontu</li>
          <li><strong>Pulverkrāsošana</strong> - uzklājam izturīgu pulverkrāsas pārklājumu</li>
          <li><strong>Montāža</strong> - atjaunotos elementus uzstādām atpakaļ</li>
        </ul>
      </TextWithImage>

      <TextWithImage
        image="/images/services/varti-2.jpg"
        imageAlt="Atjaunoti vārti"
        imagePosition="left"
      >
        <h3>Kāpēc atjaunot, nevis pirkt jaunu?</h3>
        <p>
          Atjaunošana ir izdevīgāka, jo:
        </p>
        <ul>
          <li>Izmaksas parasti ir zemākas nekā jauniem vārtiem</li>
          <li>Saglabājat savu unikālo dizainu</li>
          <li>Ekloloģiskāka izvēle - samazināts atkritumu daudzums</li>
          <li>Pulverkrāsas pārklājums ir ilgmūžīgāks par parasto krāsu</li>
          <li>Iespēja izvēlēties jebkuru krāsu</li>
        </ul>
      </TextWithImage>

      <FaqAccordion title="Biežāk uzdotie jautājumi" items={faqItems} />

      <section className="bg-pulver-grey section-padding">
        <div className="container text-center">
          <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-6">
            Nepieciešama vārtu vai žoga atjaunošana?
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
