# ⚡ Quick Setup for Auto-Deploy

## Current Status
✅ Site is LIVE: https://waterengineeringinsights.pages.dev/
✅ Code on GitHub: https://github.com/thilinatpr/waterengineeringinsights.org
✅ GitHub Actions workflow configured

## 🎯 Get Auto-Deploy Working (2 Minutes)

### Step 1: Create Cloudflare API Token

1. Go to: **https://dash.cloudflare.com/profile/api-tokens**
2. Click **"Create Token"**
3. Click **"Use template"** next to **"Edit Cloudflare Workers"**
4. Or create **Custom token** with these permissions:
   ```
   Account → Cloudflare Pages → Edit
   ```
5. Click **"Continue to summary"** → **"Create Token"**
6. **COPY THE TOKEN** (you'll only see it once!)

### Step 2: Add Secrets to GitHub

1. Go to: **https://github.com/thilinatpr/waterengineeringinsights.org/settings/secrets/actions**

2. Click **"New repository secret"**

3. Add **First Secret:**
   - Name: `CLOUDFLARE_API_TOKEN`
   - Value: [Paste the token from Step 1]
   - Click **"Add secret"**

4. Add **Second Secret:**
   - Name: `CLOUDFLARE_ACCOUNT_ID`
   - Value: `e81ea992523c4e14d3d1a89f10732576`
   - Click **"Add secret"**

### Step 3: Test It!

Make a small change and push:

```bash
cd /root/WEI/waterengineeringinsights.org

# Make a test change
echo "<!-- Updated -->" >> README.md

# Commit and push
git add .
git commit -m "Test auto-deploy"
git push
```

Then watch it deploy automatically:
- Go to: https://github.com/thilinatpr/waterengineeringinsights.org/actions
- You should see the workflow running!

---

## 🔄 How It Works After Setup

Every time you push to GitHub:
1. GitHub Actions automatically runs
2. Builds your Astro site
3. Deploys to Cloudflare Pages
4. Your site updates in ~60 seconds

**Workflow:**
```bash
# Edit content
vim src/content/insights/new-post.md

# Deploy
git add .
git commit -m "Add new insight"
git push
# ↑ That's it! Auto-deploys! ⚡
```

---

## 📊 Monitor Deployments

- **GitHub Actions:** https://github.com/thilinatpr/waterengineeringinsights.org/actions
- **Cloudflare Pages:** https://dash.cloudflare.com/ → Workers & Pages → waterengineeringinsights

---

## 🆘 Troubleshooting

**GitHub Action fails?**
- Check secrets are added correctly
- Verify API token has Pages Edit permissions
- Check account ID matches: `e81ea992523c4e14d3d1a89f10732576`

**Still need help?**
- View workflow logs in GitHub Actions tab
- Or continue using manual deploy: `npm run build && wrangler pages deploy dist --project-name=waterengineeringinsights`

---

That's it! Once you add those 2 secrets, full CI/CD is enabled! 🚀
