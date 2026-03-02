import {
  Hero,
  ServicesGrid,
  WhyChooseUs,
  Partners,
  ReviewsSlider,
} from '@/components/home';

export default function Home() {
  return (
    <>
      <Hero
        title="Pulverkrāsošana, Metālapstrāde, Smilšu Strūkla"
        subtitle="Profesionāla pulverkrāsošana, smilšu strūklošana un metālapstrāde uzņēmumiem Vidzemē"
      />
      <ServicesGrid title="Mūsu pakalpojumi" />
      <WhyChooseUs title="Kāpēc izvēlēties mūs?" />
      <Partners title="Mūsu partneri" />
      <ReviewsSlider title="Ko saka mūsu klienti" />
    </>
  );
}
