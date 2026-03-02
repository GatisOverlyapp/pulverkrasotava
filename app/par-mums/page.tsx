import { Metadata } from 'next';
import { PageHero, TextBlock } from '@/components/content';
import { WhyChooseUs } from '@/components/home';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';

export const metadata: Metadata = {
  title: 'Par Mums - Pulverkrāsošana Gulbenē, Vidzemē',
  description: 'Uzziniet vairāk par Pulverkrāsotava - profesionāla pulverkrāsošana, smilšu strūklošana un metālapstrāde Gulbenē, Vidzemē kopš 2018. gada.',
  alternates: {
    canonical: '/par-mums',
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Sākums', href: '/' },
        { name: 'Par mums', href: '/par-mums' },
      ]} />
      <PageHero title="Par mums" />
      <TextBlock>
        <h2>Pulverkrāsotava - Jūsu uzticamais partneris metāla apstrādē</h2>
        <p>
          Pulverkrāsotava ir moderna metāla apstrādes darbnīca, kas specializējas pulverkrāsošanā,
          smilšu strūklošanā un metālapstrādē. Mūsu komanda apvieno ilggadēju pieredzi ar
          modernākajām tehnoloģijām, lai piedāvātu klientiem augstākās kvalitātes pakalpojumus.
        </p>

        <h3>Mūsu vērtības</h3>
        <ul>
          <li>
            <strong>Kvalitāte</strong> - mēs nekad nepiedāvājam kompromisus kvalitātē.
            Katrs izstrādājums tiek rūpīgi pārbaudīts pirms nodošanas klientam.
          </li>
          <li>
            <strong>Uzticamība</strong> - turamies pie solītajiem termiņiem un vienošanām.
            Mūsu vārds ir mūsu galvenā vērtība.
          </li>
          <li>
            <strong>Profesionalitāte</strong> - mūsu komanda nepārtraukti pilnveido savas
            zināšanas un iemaņas.
          </li>
          <li>
            <strong>Individuāla pieeja</strong> - katrs klients un projekts ir unikāls.
            Mēs vienmēr cenšamies atrast labāko risinājumu.
          </li>
        </ul>

        <h3>Mūsu aprīkojums</h3>
        <p>
          Izmantojam modernu profesionālu aprīkojumu, kas ļauj nodrošināt stabili augstu
          kvalitāti un efektīvu darba procesu:
        </p>
        <ul>
          <li>Automātiskā pulverkrāsošanas līnija</li>
          <li>Profesionālās smilšu strūklošanas iekārtas</li>
          <li>Modernās cietināšanas krāsnis</li>
          <li>Metālapstrādes aprīkojums</li>
        </ul>

        <h3>Mūsu klienti</h3>
        <p>
          Mēs lepojamies ar sadarbību ar dažādu nozaru uzņēmumiem un privātpersonām.
          Starp mūsu klientiem ir ražošanas uzņēmumi, būvniecības kompānijas, auto servisi,
          dizaineri un daudzi citi.
        </p>
      </TextBlock>
      <WhyChooseUs title="Mūsu priekšrocības" />
    </>
  );
}
