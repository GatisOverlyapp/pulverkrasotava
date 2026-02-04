import { Metadata } from 'next';
import { PageHero, TextBlock } from '@/components/content';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cenas',
  description: 'Pulverkrāsošanas, smilšu strūklošanas un metālapstrādes cenas. Saņemiet individuālu piedāvājumu.',
};

const wheelPrices = [
  { size: 'R13', price: '5.00 EUR' },
  { size: 'R14', price: '5.50 EUR' },
  { size: 'R15', price: '6.00 EUR' },
  { size: 'R16', price: '6.50 EUR' },
  { size: 'R17', price: '7.00 EUR' },
  { size: 'R18', price: '8.00 EUR' },
  { size: 'R19', price: '9.00 EUR' },
  { size: 'R20', price: '10.00 EUR' },
  { size: 'R21', price: '12.00 EUR' },
  { size: 'R22', price: '15.00 EUR' },
];

export default function PricingPage() {
  return (
    <>
      <PageHero title="Cenas" />
      <TextBlock>
        <h2>Mūsu pakalpojumu cenas</h2>
        <p>
          Cenas tiek noteiktas individuāli katram projektam, ņemot vērā darba apjomu,
          sarežģītību, materiālus un termiņus.
        </p>

        <h3>Stundas likme</h3>
        <p>
          Standarta darbu stundas likme: <strong>25.00 EUR/h</strong> (bez PVN)
        </p>

        <h3>Disku pulverkrāsošana</h3>
      </TextBlock>

      {/* Wheel pricing table */}
      <section className="bg-pulver-dark pb-12">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="bg-pulver-grey rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-pulver-gold text-pulver-dark">
                    <th className="py-4 px-6 text-left font-bold">Diska izmērs</th>
                    <th className="py-4 px-6 text-right font-bold">Cena (1 gab.)</th>
                  </tr>
                </thead>
                <tbody>
                  {wheelPrices.map((item, index) => (
                    <tr
                      key={item.size}
                      className={index % 2 === 0 ? 'bg-pulver-grey' : 'bg-pulver-dark/30'}
                    >
                      <td className="py-3 px-6 text-pulver-light">{item.size}</td>
                      <td className="py-3 px-6 text-pulver-gold text-right font-semibold">
                        {item.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-pulver-text text-sm mt-4 text-center">
              * Cenas norādītas bez PVN. Cenā iekļauta standarta vienkrāsas pulverkrāsošana.
            </p>
          </div>
        </div>
      </section>

      <TextBlock>
        <h3>Smilšu strūklošana</h3>
        <p>Cena atkarīga no virsmas stāvokļa un pieejamības:</p>
        <ul>
          <li>Standarta tīrīšana - no <strong>10-20 EUR/m²</strong></li>
          <li>Intensīva rūsas noņemšana - no <strong>15-25 EUR/m²</strong></li>
        </ul>

        <h3>Minimālā pasūtījuma summa</h3>
        <p>
          Minimālā pasūtījuma summa ir <strong>50 EUR</strong> (bez PVN).
        </p>

        <h3>Saņemiet precīzu piedāvājumu</h3>
        <p>
          Lai saņemtu precīzu cenu aprēķinu jūsu projektam, lūdzu sazinieties ar mums,
          norādot:
        </p>
        <ul>
          <li>Izstrādājumu aprakstu un fotogrāfijas</li>
          <li>Orientējošos izmērus un daudzumu</li>
          <li>Vēlamo krāsu (RAL kodu, ja zināms)</li>
          <li>Vēlamo izpildes termiņu</li>
        </ul>
      </TextBlock>
      <section className="bg-pulver-grey section-padding">
        <div className="container text-center">
          <h2 className="text-pulver-light text-2xl md:text-3xl font-bold mb-6">
            Gatavs sākt savu projektu?
          </h2>
          <p className="text-pulver-text mb-8 max-w-2xl mx-auto">
            Sazinieties ar mums jebkurā Jums ērtā veidā, un mēs sagatavosim
            individuālu piedāvājumu jūsu projektam.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/kontakti" className="btn btn-primary">
              Sazināties ar mums
            </Link>
            <a href="tel:+37126102841" className="btn btn-secondary">
              +371 26 102 841
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
