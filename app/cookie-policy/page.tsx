import { Metadata } from 'next';
import { PageHero, TextBlock } from '@/components/content';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Pulverkrāsotava sīkdatņu (cookie) politika.',
};

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero title="Sīkdatņu politika" />
      <TextBlock>
        <h2>Sīkdatņu (Cookie) politika</h2>
        <p>Pēdējoreiz atjaunināts: 2024. gada janvāris</p>

        <h3>Kas ir sīkdatnes?</h3>
        <p>
          Sīkdatnes ir mazi teksta faili, ko vietnes saglabā jūsu ierīcē (datorā, planšetdatorā
          vai viedtālrunī), lai atcerētos informāciju par jūsu apmeklējumu.
        </p>

        <h3>Kā mēs izmantojam sīkdatnes</h3>
        <p>Mūsu vietne izmanto sīkdatnes šādiem mērķiem:</p>
        <ul>
          <li><strong>Nepieciešamās sīkdatnes</strong> - nodrošina vietnes pareizu darbību</li>
          <li><strong>Analītiskās sīkdatnes</strong> - palīdz saprast, kā apmeklētāji izmanto vietni</li>
          <li><strong>Mārketinga sīkdatnes</strong> - tiek izmantotas reklāmas efektivitātes mērīšanai</li>
        </ul>

        <h3>Izmantotās sīkdatnes</h3>

        <h4>Google Analytics</h4>
        <p>
          Mēs izmantojam Google Analytics, lai analizētu vietnes apmeklējumu. Šīs sīkdatnes
          vāc anonīmu informāciju par to, kā apmeklētāji lieto mūsu vietni.
        </p>

        <h4>Facebook Pixel</h4>
        <p>
          Mēs izmantojam Facebook Pixel, lai mērītu reklāmas kampaņu efektivitāti un
          piedāvātu relevantu saturu Facebook platformā.
        </p>

        <h3>Sīkdatņu pārvaldība</h3>
        <p>
          Jūs varat kontrolēt un dzēst sīkdatnes pēc saviem ieskatiem. Lielākā daļa
          pārlūkprogrammu ļauj:
        </p>
        <ul>
          <li>Skatīt, kādas sīkdatnes ir saglabātas, un dzēst tās atsevišķi</li>
          <li>Bloķēt trešo pušu sīkdatnes</li>
          <li>Bloķēt sīkdatnes no konkrētām vietnēm</li>
          <li>Bloķēt visas sīkdatnes</li>
          <li>Dzēst visas sīkdatnes, aizverot pārlūkprogrammu</li>
        </ul>

        <h3>Pārlūkprogrammu iestatījumi</h3>
        <p>Sīkdatņu pārvaldīšanas instrukcijas populārākajām pārlūkprogrammām:</p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer">Apple Safari</a></li>
          <li><a href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>

        <h3>Izmaiņas politikā</h3>
        <p>
          Mēs varam periodiski atjaunināt šo sīkdatņu politiku. Ieteicams regulāri pārskatīt
          šo lapu, lai būtu informēti par izmaiņām.
        </p>

        <h3>Kontaktinformācija</h3>
        <p>
          Jautājumu gadījumā par sīkdatņu izmantošanu sazinieties ar mums:<br />
          E-pasts: info@pulverkrasotava.lv<br />
          Tālrunis: +371 26 102 841
        </p>
      </TextBlock>
    </>
  );
}
