# SEO & AI-SEO Reference

## Title formulas

- `[Primary Keyword] | [Differentiator] | [Brand]`
- `[Service] in [Location] | [Brand]`
- `[Outcome] with [Service] — [Brand]`

Keep primary term early; avoid duplicate titles across pages.

## Meta description formula

`[What you offer] for [who/where]. [Proof or differentiator]. [CTA].`

## Quotable AI answer paragraph (template)

Use near the top of key pages:

> [Brand] is a [category] in [location] that [primary value]. We specialize in [services]. Clients choose us for [2–3 proof points]. Contact [phone/area] for [next step].

## LocalBusiness JSON-LD skeleton

Fill only true fields; remove unknowns.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "",
  "url": "",
  "image": "",
  "telephone": "",
  "email": "",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "",
    "addressLocality": "",
    "addressRegion": "",
    "postalCode": "",
    "addressCountry": ""
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "",
    "longitude": ""
  },
  "openingHoursSpecification": [],
  "sameAs": [],
  "areaServed": [],
  "priceRange": ""
}
```

## FAQPage skeleton

Each question/answer must appear visibly on the page.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": ""
      }
    }
  ]
}
```

## robots.txt patterns

**Marketing site (AI visibility on):**

```
User-agent: *
Allow: /

Sitemap: https://www.example.com/sitemap.xml

User-agent: GPTBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /
```

**Opt out of AI training/crawlers** only when the user explicitly wants it — then disallow the relevant bots and document the tradeoff (less AI citation potential).

## Sitemap URL entry

```xml
<url>
  <loc>https://www.example.com/page/</loc>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

Include only canonical, indexable URLs. Homepage typically highest priority.

## Technical audit checklist (expanded)

- [ ] HTTPS and valid cert
- [ ] Mobile viewport + usable tap targets
- [ ] Unique title + description per indexable URL
- [ ] Single H1; heading hierarchy intact
- [ ] Canonical self-reference or correct cross-canonical
- [ ] No `noindex` on money pages
- [ ] robots.txt not blocking CSS/JS needed for rendering
- [ ] Sitemap submitted / listed in robots.txt
- [ ] Soft 404s / thin pages addressed
- [ ] Redirect map for renamed URLs (single hop)
- [ ] Structured data matches visible content
- [ ] Images: alt, compression, CLS-safe dimensions
- [ ] Core Web Vitals within healthy ranges on mobile
- [ ] Internal links to priority pages
- [ ] 404 page helpful; no soft-404 indexing

## AI-SEO prompt tests (manual)

After publishing, test prompts like:

- “Best [service] in [city/country]”
- “Who offers [niche service] near [area]?”
- “What does [Brand] do?”
- “[Brand] vs [competitor category]”

Record whether the brand is mentioned, cited, or absent — then close content/entity gaps.

## Content brief for new landing pages

1. Primary + secondary keywords  
2. Search intent + stage of funnel  
3. Mandatory sections (answer, benefits, process, proof, FAQ, CTA)  
4. Internal link targets (from/to)  
5. Schema types  
6. Differentiation vs top competitors (unique angles only)

## Anti-patterns (do not do)

- Doorway pages / spun location spam  
- Hidden text, keyword stuffing, cloaking  
- Fake reviews or fabricated schema ratings  
- Buying links or PBNs  
- Duplicate titles/descriptions sitewide  
- Blocking the whole site in robots while “working on SEO”  
- Guaranteeing rankings or timelines
