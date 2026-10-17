import type { APIRoute } from 'astro';
import { PROJECTS } from '../data/projects';
import { SITE } from '../data/site';

// llms.txt: a plain-text summary of the site for AI assistants and crawlers (https://llmstxt.org)
export const GET: APIRoute = () => {
  const u = (p: string) => new URL(p, SITE.url).href;
  const body = `# Tiziana Lisci

> Tiziana Lisci is a Creative Director & Producer born in Sardinia and based in Rome, Italy. She studied Fashion Editor, Styling & Communication at Accademia Costume & Moda (ACM), Rome. Her work combines creative direction and production, and focuses on people, the body and personal stories, through photography and photobooks.

- Name: Tiziana Lisci
- Role: Creative Director & Producer (direzione creativa, art direction, produzione)
- Based in: Rome (Roma), Italy. From Sardinia (Sardegna).
- Education: Accademia Costume & Moda, Rome
- Contact: ${SITE.email}
- Instagram: ${SITE.instagramUrl}
- Languages of the site: Italian (default), English (/en/)

## Projects

${PROJECTS.map((p) => `- [${p.title}, ${p.subtitle.en}](${u(`/en/work/${p.slug}/`)}): ${p.seo.en} Italian version: ${u(`/work/${p.slug}/`)}`).join('\n')}

## Pages

- [Home](${u('/')}): introduction and selected projects (Italian). English: ${u('/en/')}
- [About](${u('/about/')}): biography, education, skills, values, vision and mission (Italian). English: ${u('/en/about/')}

## Project details

${PROJECTS.map((p) => `### ${p.title}, ${p.subtitle.en}

${p.summary.en}

${p.meta.map((m) => `- ${m.label.en}: ${m.value.en}`).join('\n')}
${p.credits.map((c) => `- ${c.label.en}: ${c.value}`).join('\n')}`).join('\n\n')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
