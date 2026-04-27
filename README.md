# zavalatechconsulting.com

Static site for Zavala Tech Consulting. Hosted on GitHub Pages, DNS via Cloudflare.

## Setup checklist

### 1. GitHub repo
- [ ] Create a new repo at `github.com/zavalalabs/zavalatechconsulting`
- [ ] Push this directory to it
- [ ] Go to **Settings → Pages → Source**: set to `main` branch, `/ (root)`
- [ ] GitHub will auto-detect the `CNAME` file and link the custom domain

### 2. Formspree (contact form)
- [ ] Create a free account at [formspree.io](https://formspree.io)
- [ ] Create a new form → copy the form ID (looks like `abcd1234`)
- [ ] In `index.html`, replace `YOUR_FORM_ID` with your actual ID
- [ ] Verify your email in Formspree

### 3. Cloudflare DNS (point domain to GitHub Pages)
Add these DNS records in Cloudflare (free tier):

| Type  | Name | Value                    | Proxy |
|-------|------|--------------------------|-------|
| A     | @    | 185.199.108.153          | ✅ ON |
| A     | @    | 185.199.109.153          | ✅ ON |
| A     | @    | 185.199.110.153          | ✅ ON |
| A     | @    | 185.199.111.153          | ✅ ON |
| CNAME | www  | zavalalabs.github.io     | ✅ ON |

SSL: In Cloudflare → SSL/TLS → set to **Full (strict)**.
GitHub Pages will provision a Let's Encrypt cert automatically (may take ~30 min).

### 4. Update nameservers at your registrar
Point your domain's nameservers to Cloudflare's assigned pair
(shown in your Cloudflare dashboard after adding the domain).

## Content to personalize
- [ ] `index.html` → hero stats (years of experience, etc.)
- [ ] Portfolio cards → replace placeholder descriptions with real work
- [ ] Contact methods → add your actual email if desired
- [ ] `<meta name="description">` → tweak SEO description
- [ ] Favicon → replace the emoji favicon with a real one
