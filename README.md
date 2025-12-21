# Water Engineering Insights

A high-performance technical blog and resource center for civil engineers specializing in water infrastructure, hydraulics, and stormwater management.

## 🏗️ Tech Stack

- **Framework:** [Astro](https://astro.build) - Static site generation with optimal performance
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com) - Utility-first CSS with custom design system
- **Language:** TypeScript (strict mode) - Type-safe development
- **Deployment:** Optimized for [Cloudflare Pages](https://pages.cloudflare.com)

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/
├── public/              # Static assets (favicon, images)
├── src/
│   ├── components/      # Reusable Astro components
│   │   ├── CodeSnippet.astro
│   │   ├── DataCard.astro
│   │   └── InsightCard.astro
│   ├── content/         # Content collections
│   │   ├── insights/    # Blog posts
│   │   ├── case-studies/# Technical case studies
│   │   └── config.ts    # Content schema definitions
│   ├── layouts/         # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/           # File-based routing
│   │   ├── insights/
│   │   ├── case-studies/
│   │   ├── about.astro
│   │   ├── index.astro
│   │   └── rss.xml.ts
│   └── styles/
│       └── global.css   # Tailwind configuration
├── astro.config.mjs     # Astro configuration
├── tsconfig.json        # TypeScript configuration
└── package.json
```

## 📝 Content Collections

### Insights (Blog Posts)

Create new insights in `src/content/insights/` with required frontmatter:

```markdown
---
title: 'Your Post Title'
description: 'Brief description'
pubDate: 2025-12-21
author: 'Water Engineering Insights'
tags: ['Hydraulics', 'Modeling']
featured: false
---

Your content here...
```

### Case Studies

Create case studies in `src/content/case-studies/` with strict schema:

```markdown
---
title: 'Case Study Title'
description: 'Project overview'
project_name: 'Official Project Name'
location: 'City, State'
engineering_discipline: 'Hydraulic Engineering'
client: 'Client Name'
date: 2025-12-21
duration: '6 months'
budget: '$500,000'
featured: true
tags: ['Design', 'Analysis']
---

Detailed case study content...
```

## 🎨 Design System

### Typography

- **Font Stack:** Inter var (primary), system-ui fallback
- **Monospace:** JetBrains Mono, Fira Code
- **Headings:** Bold, tight tracking
- **Body:** 18px base, 1.75 line height

### Colors

#### Brand (Blue)
- Primary: `#2563eb` (brand-600)
- Dark Mode: `#60a5fa` (brand-400)

#### Neutrals
- Light Mode: White background, neutral-900 text
- Dark Mode: neutral-900 background, neutral-100 text

### Components

#### DataCard
Display engineering metrics and statistics:
```astro
<DataCard
  title="Peak Flow"
  value="125"
  unit="m³/s"
  description="100-year event"
  variant="highlight"
/>
```

#### CodeSnippet
Display code with syntax highlighting:
```astro
<CodeSnippet
  language="python"
  filename="analysis.py"
  code={`import numpy as np\n...`}
/>
```

## 🌙 Dark Mode

Dark mode is fully supported with:
- System preference detection
- Manual toggle in navigation
- Persistent localStorage setting
- No flash on page load

## 🔍 SEO & Performance

### Built-in Features
- ✅ Automatic sitemap generation
- ✅ RSS feed at `/rss.xml`
- ✅ Open Graph meta tags
- ✅ Twitter Card support
- ✅ Semantic HTML
- ✅ Optimized for Core Web Vitals

### Lighthouse Scores
Target: 100/100 across all metrics
- Performance: Static generation, minimal JS
- Accessibility: Semantic markup, ARIA labels
- Best Practices: Modern standards
- SEO: Meta tags, structured data

## 📦 Deployment

### Cloudflare Pages

```bash
# Build command
npm run build

# Output directory
dist

# Environment variables
NODE_VERSION=20
```

### Build Output
- Static HTML for all pages
- Optimized CSS bundle
- Minimal JavaScript (navigation, theme toggle)
- Sitemap and RSS feed

## 🛠️ Development

### Commands

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Install dependencies                             |
| `npm run dev`          | Start dev server at `localhost:4321`             |
| `npm run build`        | Build production site to `./dist/`               |
| `npm run preview`      | Preview build locally before deploying           |
| `npm run astro ...`    | Run Astro CLI commands (`--help` for list)       |

### Content Validation

Zod schemas enforce strict content structure. Build will fail if:
- Required frontmatter fields are missing
- Field types don't match schema
- Invalid `engineering_discipline` enum value

## 📄 License

All content and code © 2025 Water Engineering Insights

---

**Built with precision for civil engineers**
