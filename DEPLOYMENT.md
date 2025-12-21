# Cloudflare Pages Deployment Guide

## 🚀 Quick Deploy

### Step 1: Push to GitHub

1. Create a new repository on GitHub: https://github.com/new
   - Name: `waterengineeringinsights.org`
   - Visibility: Public or Private (your choice)
   - **Don't** initialize with README (we already have one)

2. Push your code:
```bash
cd /root/WEI/waterengineeringinsights.org
git remote add origin https://github.com/YOUR_USERNAME/waterengineeringinsights.org.git
git push -u origin main
```

### Step 2: Deploy to Cloudflare Pages

1. **Go to Cloudflare Dashboard**
   - Navigate to: https://dash.cloudflare.com/
   - Click **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**

2. **Connect GitHub Repository**
   - Authorize Cloudflare to access your GitHub
   - Select: `waterengineeringinsights.org`

3. **Configure Build Settings**
   ```
   Project name:       waterengineeringinsights
   Production branch:  main
   Build command:      npm run build
   Build output dir:   dist
   ```

4. **Environment Variables** (Optional)
   ```
   NODE_VERSION = 20
   ```

5. **Click "Save and Deploy"**

Your site will be live at: `https://waterengineeringinsights.pages.dev`

### Step 3: Add Custom Domain (Optional)

1. In Cloudflare Pages → **Custom domains** → **Set up a custom domain**
2. Enter: `waterengineeringinsights.org`
3. Follow DNS setup instructions
4. SSL certificate will be auto-provisioned

---

## 📋 Build Verification

Before deploying, verify locally:

```bash
# Clean build
rm -rf dist/ .astro/

# Build for production
npm run build

# Preview production build
npm run preview
```

Expected output:
```
✓ 7 page(s) built in X.XXs
[@astrojs/sitemap] `sitemap-index.xml` created at `dist`
```

---

## 🔄 Continuous Deployment

Every push to `main` branch automatically triggers a new deployment.

**Workflow:**
1. Make changes locally
2. Test with `npm run dev`
3. Commit and push to GitHub
4. Cloudflare automatically builds and deploys
5. Live in ~30-60 seconds

---

## 🛠️ Troubleshooting

### Build Fails on Cloudflare

**Check Node version:**
- Add environment variable: `NODE_VERSION = 20`

**Build command not found:**
- Verify `package.json` has `"build": "astro build"`

**Missing dependencies:**
- Ensure `package-lock.json` is committed

### Sitemap Not Generating

- Must run `npm run build` (not available in `npm run dev`)
- Check `astro.config.mjs` has `site` configured
- Verify `@astrojs/sitemap` in `integrations` array

---

## 📊 Post-Deployment

### Verify Deployment

- ✅ Homepage loads: `https://your-site.pages.dev/`
- ✅ Dark mode works
- ✅ Navigation links work
- ✅ Insights load: `/insights/`
- ✅ RSS feed: `/rss.xml`
- ✅ Sitemap: `/sitemap-index.xml`

### Performance Check

Run Lighthouse audit:
- Open DevTools → Lighthouse → Generate report
- Target: 100 Performance, 100 Accessibility, 100 Best Practices, 100 SEO

---

## 🎯 Next Steps After Deployment

1. **Submit to Google Search Console**
   - Add property: `waterengineeringinsights.org`
   - Submit sitemap: `https://waterengineeringinsights.org/sitemap-index.xml`

2. **Analytics** (Optional)
   - Add Google Analytics
   - Or use Cloudflare Web Analytics (privacy-friendly)

3. **Content Schedule**
   - Publish 1 insight per week
   - Share on LinkedIn/Twitter
   - Build your audience

---

**Need help?** Check [Cloudflare Pages docs](https://developers.cloudflare.com/pages/) or the [Astro deployment guide](https://docs.astro.build/en/guides/deploy/cloudflare/)
