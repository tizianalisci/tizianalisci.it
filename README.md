# tizianalisci.it

Portfolio di Tiziana Lisci, Creative Director & Producer a Roma. Sito statico fatto con [Astro](https://astro.build), in italiano (default) e inglese (`/en/`).

## Avviare in locale

Serve Node.js 22 o superiore.

```bash
npm install
npm run dev      # anteprima su http://localhost:4321
npm run build    # sito finale in dist/
```

## Dove si modifica cosa

- `src/data/projects.ts`: i progetti. Testi IT/EN, ordine delle foto, impaginazione (blocchi `full`, `pair`, `single`, `row`, `chapter`, `poem`...), credits.
- `src/data/site.ts`: email, Instagram, scuola, testi dell'interfaccia.
- `src/views/`: Home, pagina progetto, Chi sono.
- `src/assets/`: foto. Per aggiungerne una basta metterla qui e citarla in `projects.ts` (es. `vanessa/vanessa-10`).
- `src/styles/global.css`: colori, font, spaziature.

## SEO e AI

- Meta title/description per pagina, canonical, hreflang IT/EN, Open Graph e Twitter card.
- Dati strutturati JSON-LD: Person, WebSite, ProfilePage, CreativeWork con galleria, BreadcrumbList.
- `sitemap-index.xml` automatica, `robots.txt` aperto anche ai crawler AI, `llms.txt` generato dai contenuti.

## Pubblicazione

Il sito si pubblica da solo su GitHub Pages a ogni push sul branch `main` (workflow in `.github/workflows/deploy.yml`).

- Senza dominio il sito è su `https://<utente>.github.io/tizianalisci.it/`.
- Comprato `tizianalisci.it`: creare `public/CNAME` con dentro solo `tizianalisci.it`, impostare i DNS verso GitHub Pages e indicare il dominio in Settings > Pages del repository. Da quel momento il sito è servito dalla radice del dominio.
- Poi registrare il sito su Google Search Console e Bing Webmaster Tools e inviare `https://tizianalisci.it/sitemap-index.xml`.
