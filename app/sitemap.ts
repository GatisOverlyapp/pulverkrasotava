import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pulverkrasotava.lv';

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/pakalpojumi`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pakalpojumi/pulverkrasosana`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pakalpojumi/smilsu-strukla-smilsu-struklosana`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pakalpojumi/metalapstrade`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pakalpojumi/metala-konstrukciju-izgatavosana-metala-izstradajumi`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pakalpojumi/metala-koka-mebelu-izgatavosana-darza-mebeles-ara-mebeles`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pakalpojumi/vartu-un-zogu-atjaunosana`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/par-mums`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kontakti`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cenas`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/informacija`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/informacija/kas-ir-pulverkrasosana`,
      lastModified: new Date('2024-01-15'),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/informacija/ka-sagatavot-metalu`,
      lastModified: new Date('2024-01-10'),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/informacija/ral-krasu-katalogs`,
      lastModified: new Date('2024-01-05'),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/informacija/pulverkrasosana-vs-tradiconala`,
      lastModified: new Date('2023-12-20'),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/jaunumi`,
      lastModified: new Date('2025-01-15'),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/jaunumi/kas-ir-pulverkrasosana`,
      lastModified: new Date('2024-01-15'),
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    },
  ];

  // Regional pages
  const regionSlugs = ['vidzeme', 'latgale', 'cesis', 'valmiera', 'madona', 'aluksne', 'smiltene', 'daugavpils', 'rezekne', 'riga'];
  const regionalPages = regionSlugs.map((slug) => ({
    url: `${baseUrl}/regioni/${slug}`,
    lastModified: new Date('2025-01-15'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Industry pages
  const industrySlugs = ['lauksaimnieciba', 'mezsaimnieciba', 'razosana', 'komercialie-objekti', 'buvnieciba'];
  const industryPages = industrySlugs.map((slug) => ({
    url: `${baseUrl}/nozares/${slug}`,
    lastModified: new Date('2025-01-15'),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Legal pages
  const legalPages = [
    {
      url: `${baseUrl}/privatums`,
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/lietosanas-noteikumi`,
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/atruna`,
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  return [...staticPages, ...regionalPages, ...industryPages, ...legalPages];
}
