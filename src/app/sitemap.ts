import { MetadataRoute } from 'next';
import { tours } from '@/lib/data/tours';
import { destinations } from '@/lib/data/destinations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://baspa-travels.com';

  const tourRoutes = tours.map((tour) => ({
    url: `${baseUrl}/tours/${tour.slug}`,
    lastModified: new Date(),
  }));

  const destinationRoutes = destinations.map((dest) => ({
    url: `${baseUrl}/destinations/${dest.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/tours`, lastModified: new Date() },
    { url: `${baseUrl}/destinations`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    ...tourRoutes,
    ...destinationRoutes,
  ];
}
