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
          <li><strong>Cietināšanas krāsns</strong> - iekšējie izmēri: 3.50m (garums) × 1.50m (platums) × 1.70m (augstums)</li>
          <li><strong>Automātiskā pulverkrāsošanas līnija</strong> - elektrostatiskā pulvera uzklāšana</li>
          <li><strong>Smilšu strūklošanas iekārtas</strong> - profesionāla virsmu sagatavošana</li>
          <li><strong>Lentzāģis</strong> - precīza metāla griešana (alumīnijs, nerūsējošais tērauds, titāns, konstrukciju tērauds)</li>
          <li><strong>MIG/MAG metināšanas iekārtas</strong> - melnais un nerūsējošais tērauds</li>
          <li><strong>Urbšanas iekārtas</strong> - precīzu caurumu veidošana ar iegremdēšanas iespēju</li>
        </ul>
        <p>
          Maksimālais apstrādājamo izstrādājumu izmērs: līdz <strong>6m garumā</strong>, <strong>1.50m platumā</strong> un <strong>1.80m augstumā</strong>.
        </p>

        <h3>Mūsu klienti</h3>
        <p>
          Mēs lepojamies ar sadarbību ar dažādu nozaru uzņēmumiem visā Vidzemes reģionā
          un Latvijā. Starp mūsu klientiem ir ražošanas uzņēmumi, lauksaimniecības un
          mežsaimniecības saimniecības, būvniecības kompānijas, noliktavas, degvielas
          uzpildes stacijas un citi B2B klienti.
        </p>
      </TextBlock>
      <WhyChooseUs title="Mūsu priekšrocības" />
    </>
  );
}
