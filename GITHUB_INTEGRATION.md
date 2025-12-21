# Connect Cloudflare Pages to GitHub

## ✅ What's Already Done

- ✅ GitHub repository created: https://github.com/thilinatpr/waterengineeringinsights.org
- ✅ Code pushed to GitHub
- ✅ Cloudflare Pages project created: `waterengineeringinsights`
- ✅ Manual deployment successful: https://waterengineeringinsights.pages.dev/
- ✅ Build configuration in `wrangler.toml`

## 🔗 Connect to GitHub (One-time setup)

### Steps:

1. **Go to Cloudflare Dashboard**
   - Visit: https://dash.cloudflare.com/
   - Navigate to: **Workers & Pages** → **waterengineeringinsights**

2. **Settings Tab**
   - Click **Settings** → **Builds & deployments**
   - Click **Connect to Git** button

3. **Authorize GitHub**
   - Select **GitHub** as provider
   - Click **Authorize Cloudflare Pages**
   - Grant repository access

4. **Select Repository**
   - Choose: `thilinatpr/waterengineeringinsights.org`
   - Click **Begin setup**

5. **Build Configuration** (Should auto-detect from wrangler.toml)
   ```
   Production branch:  main
   Build command:      npm run build
   Build directory:    (leave empty - root)
   Output directory:   dist
   ```

6. **Environment Variables** (Optional but recommended)
   ```
   NODE_VERSION = 20
   ```

7. **Click "Save and Deploy"**

## 🎉 After Connection

Once connected, **automatic deployments** will trigger on:
- ✅ Every push to `main` branch
- ✅ Every pull request (preview deployments)

### Deployment Workflow:
```
git add .
git commit -m "Your changes"
git push
```
→ Cloudflare automatically builds and deploys! ⚡

## 🔍 Verify

After connecting, verify:
- Go to **Deployments** tab
- You should see deployments linked to GitHub commits
- Each deployment shows commit hash and author

## 📝 Build Settings Reference

If auto-detection doesn't work, manually set:

| Setting | Value |
|---------|-------|
| Framework preset | None (or Astro if available) |
| Build command | `npm run build` |
| Build output | `dist` |
| Root directory | `/` |
| Environment variables | `NODE_VERSION=20` |

---

**Note:** The GitHub connection requires OAuth authorization which cannot be done via CLI. This is a one-time setup through the web dashboard.

Once connected, you'll have **full CI/CD** - just push to GitHub and it deploys automatically! 🚀
