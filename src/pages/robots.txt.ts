import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const robotsTxt = `
User-agent: *
Allow: /

Sitemap: https://danielamado.com/sitemap.xml
`.trim();

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
