import type { APIRoute } from 'astro';

const SITE_URL = 'https://danielamado.com';

export const GET: APIRoute = () => {
  const staticPages = [
    {
      url: '/',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0
    },
    {
      url: '/en',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0
    }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${staticPages
    .map(page => {
      return `
  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastModified.toISOString()}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
    ${page.url === '/' ? `
    <xhtml:link 
      rel="alternate" 
      hreflang="es" 
      href="${SITE_URL}/" />
    <xhtml:link 
      rel="alternate" 
      hreflang="en" 
      href="${SITE_URL}/en" />
    <xhtml:link 
      rel="alternate" 
      hreflang="x-default" 
      href="${SITE_URL}/" />` : ''}
    ${page.url === '/en' ? `
    <xhtml:link 
      rel="alternate" 
      hreflang="es" 
      href="${SITE_URL}/" />
    <xhtml:link 
      rel="alternate" 
      hreflang="en" 
      href="${SITE_URL}/en" />
    <xhtml:link 
      rel="alternate" 
      hreflang="x-default" 
      href="${SITE_URL}/" />` : ''}
  </url>`;
    })
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
