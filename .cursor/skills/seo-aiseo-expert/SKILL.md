---
name: seo-aiseo-expert
description: Optimize sites for Google rankings and AI search (AEO/GEO) — technical SEO, on-page, local SEO, schema, Core Web Vitals, content strategy, and answer-engine visibility. Use when the user mentions SEO, AISEO, AEO, GEO, Google ranking, meta tags, schema markup, sitemap, robots.txt, SERP, keywords, or improving organic/AI search traffic.
---

# SEO & AI-SEO Expert

Rank for classic Google results **and** AI answer surfaces (AI Overviews, ChatGPT, Perplexity, Gemini). Treat every change as measurable: intent → page → signals → verify.

## When to apply

- Auditing or improving ranking / visibility
- Editing titles, descriptions, headings, content, links
- Touching `robots.txt`, `sitemap.xml`, canonicals, hreflang
- Adding or fixing JSON-LD / Open Graph
- Local/business SEO (NAP, Google Business Profile alignment)
- Preparing content that AI engines will cite

## Operating principles

1. **Intent first** — Map each page to one primary query + clear search intent (informational, commercial, transactional, local).
2. **One page, one job** — Avoid keyword cannibalization; consolidate thin/duplicate pages.
3. **E-E-A-T** — Show experience, expertise, authority, trust (author/org identity, proof, citations, contact, policies).
4. **Crawlable truth** — What bots see in HTML must match what users see (no critical SEO only in JS if avoidable).
5. **AI-citable** — Clear answers, definitions, steps, and facts near the top; stable URLs; allow reputable AI crawlers unless the user opts out.
6. **No fake guarantees** — Never promise “#1 on Google.” Optimize for relevance, quality, and measurability.

## Workflow (use this checklist)

```
SEO task:
- [ ] 1. Goal & target queries
- [ ] 2. Technical crawl/index check
- [ ] 3. On-page optimization
- [ ] 4. Content & E-E-A-T
- [ ] 5. Schema & rich/AI eligibility
- [ ] 6. Local (if applicable)
- [ ] 7. AI-SEO (AEO/GEO)
- [ ] 8. Performance (CWV)
- [ ] 9. Internal links & sitemap
- [ ] 10. Verify & hand off measurement
```

### 1. Goal & target queries

- Primary keyword + 3–8 secondary / supporting terms
- Intent, persona, location modifiers (e.g. city, country)
- SERP features to win: snippet, local pack, FAQ, AI Overview citation

### 2. Technical crawl / index

- `robots.txt`: allow important paths; declare `Sitemap:`
- Canonical absolute HTTPS URLs; no conflicting canonicals
- Indexable: no accidental `noindex`, soft-404s, or blocked resources
- Status codes: 200 for live; 301 for permanent moves; avoid redirect chains
- XML sitemap: only canonical, indexable URLs; lastmod accurate
- HTTPS, mobile-friendly viewport, correct `lang` / hreflang if multi-language

### 3. On-page

| Element | Rule |
|--------|------|
| Title | ~50–60 chars; primary keyword near front; unique; brand when it fits |
| Meta description | ~150–160 chars; benefit + CTA; unique; matches intent |
| H1 | One H1; aligns with title/intent |
| Headings | Logical H2/H3; cover subtopics users/AI expect |
| URL | Short, readable, keyword-relevant; stable |
| Body | Answer the query early; scannable; original; sufficient depth |
| Images | Descriptive filenames; alt text; compressed; dimensions set |
| Links | Descriptive anchors; fix broken links; prefer HTTPS |

Avoid stuffing `keywords` meta as a ranking lever (low value). Prefer real content and schema.

### 4. Content & E-E-A-T

- Lead with a direct answer (2–3 sentences), then detail
- Use original photos, case details, credentials, process, warranties
- Cite sources for claims; date-stamp time-sensitive content
- Clear About / Contact / service-area pages
- FAQs that match People Also Ask and real customer questions

### 5. Schema (JSON-LD preferred)

Add only accurate types. Common sets:

- `Organization` / `LocalBusiness` (NAP, geo, `sameAs`, hours)
- `WebSite` (+ `SearchAction` only if site search exists)
- `Service` / `Product` for offerings
- `FAQPage`, `HowTo`, `Article` / `BlogPosting` when content matches
- `BreadcrumbList` for hierarchy

Validate mentally: every property must be true on-page. Invalid schema hurts trust.

### 6. Local SEO

- Consistent NAP (Name, Address, Phone) site-wide
- Geo meta / `LocalBusiness` coordinates when accurate
- Location + service landing pages only if unique value (not doorway spam)
- Align site copy with Google Business Profile categories and services

### 7. AI-SEO (AEO / GEO)

Make the brand the best citation source:

- **Answer blocks**: definition, who/what/where, pricing ranges if honest, process steps
- **Entity clarity**: consistent brand name, legal name, locations, services
- **Structure**: lists, tables, FAQ; unambiguous facts
- **Authority**: third-party mentions, `sameAs` profiles, expert bylines
- **Crawl policy**: allow GPTBot, Google-Extended, PerplexityBot, ClaudeBot, etc. when AI visibility is desired (already common on modern marketing sites)
- **Freshness**: update stats and service pages; keep sitemap `lastmod` honest
- Write so an AI Overview can quote a self-contained paragraph without misleading context

### 8. Performance (Core Web Vitals)

- LCP: optimize hero image, preload critical assets, reduce blocking CSS/JS
- INP: minimize heavy main-thread JS
- CLS: width/height on media; reserve space for fonts/ads
- Compress images; lazy-load below-fold; preconnect sparingly to real origins

### 9. Internal links & discovery

- Hub pages link to money/service pages with clear anchors
- Orphans: every important URL reachable from home within few clicks
- Update `sitemap.xml` when URLs change; submit/refresh in Search Console when available

### 10. Verify & measure

Recommend (do not invent access):

- Google Search Console: coverage, queries, Core Web Vitals
- Rich Results / schema testing for JSON-LD
- PageSpeed Insights or CrUX for CWV
- Rank / AI-visibility checks for target prompts over time

## Output formats

### Page SEO brief

```markdown
## Page: [URL or name]
**Primary query:** 
**Intent:** 
**Secondary terms:** 

### Changes
- Title: 
- Meta description: 
- H1 / H2 plan: 
- Content gaps to fill: 
- Schema to add/fix: 
- Internal links: 

### AI-SEO
- Quotable answer paragraph: 
- FAQ candidates: 
```

### Site audit (severity)

```markdown
## SEO audit — [site]
### Critical (fix now)
### High
### Medium
### AI / answer-engine gaps
### Quick wins (≤1 day)
```

Severity: **Critical** (indexing/ranking blockers) → **High** → **Medium** → **Nice to have**.

## Implementation rules for this agent

- Prefer editing real HTML/meta/schema/sitemap/robots over advice-only when the user wants improvements in-repo
- Keep titles/descriptions unique per page
- Do not remove tracking (GTM/analytics) unless asked
- Do not add deceptive schema, hidden text, cloaking, or link schemes
- Match existing site voice and design system
- After SEO edits, summarize what changed and what to verify in Search Console

## Additional resources

- Templates and expanded checklists: [reference.md](reference.md)
