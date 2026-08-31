# Deployment Guide 🚀

This guide will help you deploy your portfolio to the internet so recruiters and employers can view it.

## 📋 Before You Deploy

### Required Files Checklist

Make sure you have added:

- [ ] `/public/profile.jpg` - Your professional photo
- [ ] `/public/resume.pdf` - Your resume
- [ ] Code is committed to Git

### Optional Files

- [ ] `/public/projects/recruit-ai.png` - Project screenshot (SVG mockup provided)
- [ ] `/public/projects/network-anomaly.png` - Project screenshot (SVG mockup provided)

---

## Option 1: Deploy to Vercel (Recommended) ⚡

Vercel is the easiest and fastest way to deploy. It's free and auto-detects Vite projects.

### Steps:

1. **Push your code to GitHub**
   ```bash
   # If you haven't already initialized git
   git init
   git add .
   git commit -m "Initial portfolio commit"
   
   # Create a new repository on GitHub, then:
   git remote add origin https://github.com/nishhh-07/portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. **Sign up for Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up"
   - Choose "Continue with GitHub"

3. **Import Your Project**
   - Click "Add New Project"
   - Select "Import Git Repository"
   - Choose your portfolio repository
   - Click "Import"

4. **Configure (Usually Auto-Detected)**
   - Framework Preset: Vite ✅ (auto-detected)
   - Build Command: `npm run build` ✅ (auto-detected)
   - Output Directory: `dist` ✅ (auto-detected)
   - Click "Deploy"

5. **Wait for Deployment** ⏳
   - Takes 1-2 minutes
   - You'll get a live URL like: `your-portfolio.vercel.app`

6. **Done!** 🎉
   - Your portfolio is live!
   - Every git push will auto-deploy

### Custom Domain (Optional)

1. Go to your project settings in Vercel
2. Click "Domains"
3. Add your custom domain (e.g., `nishanmc.com`)
4. Follow DNS configuration instructions

---

## Option 2: Deploy to Netlify 🌐

Netlify is another excellent free hosting option with drag-and-drop deployment.

### Method A: Netlify Drop (Easiest)

1. **Build Your Project**
   ```bash
   npm run build
   ```

2. **Upload to Netlify**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag your `dist` folder to the upload area
   - Wait a few seconds
   - Get your live URL!

### Method B: Netlify Git Integration (Recommended)

1. **Push code to GitHub** (see Vercel instructions above)

2. **Sign up for Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Sign Up"
   - Choose "GitHub"

3. **New Site from Git**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your repository

4. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

5. **Done!** 🎉
   - Live at `random-name-123.netlify.app`
   - You can change the site name in settings

---

## Option 3: GitHub Pages 📄

Free hosting directly from your GitHub repository.

### Steps:

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   
   Add this to the `scripts` section:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Update vite.config.js**
   
   Change this:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/nishan-portfolio/', // Change to your repo name
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Settings → Pages
   - Source: `gh-pages` branch
   - Click Save

6. **Access Your Site**
   - URL: `https://nishhh-07.github.io/nishan-portfolio/`
   - Replace with your username and repo name

---

## Option 4: Other Hosting Options

### Render
- Free tier available
- Connect GitHub repository
- Build command: `npm run build`
- Publish directory: `dist`

### Railway
- Free tier with generous limits
- Connect GitHub
- Auto-detects Vite

### Cloudflare Pages
- Unlimited bandwidth on free tier
- Connect GitHub
- Build command: `npm run build`
- Build output: `dist`

---

## 🔧 Environment Variables

Your portfolio doesn't use any environment variables, so no configuration needed!

---

## 🌍 Custom Domain Setup

Once deployed, you can use a custom domain:

### Purchase a Domain
- [Namecheap](https://www.namecheap.com)
- [Google Domains](https://domains.google)
- [GoDaddy](https://www.godaddy.com)

### Configure DNS

For Vercel:
1. Add domain in Vercel dashboard
2. Add DNS records from Vercel to your domain provider

For Netlify:
1. Add domain in Netlify dashboard
2. Update nameservers or add DNS records

---

## 📊 Post-Deployment Checklist

After deploying, test everything:

### Functionality
- [ ] All navigation links work
- [ ] Mobile menu works
- [ ] Profile image loads
- [ ] Resume downloads correctly
- [ ] Project images load
- [ ] Recruit AI live demo link works
- [ ] GitHub link works
- [ ] LinkedIn link works
- [ ] Email link works
- [ ] Phone link works

### Performance
- [ ] Page loads quickly (< 3 seconds)
- [ ] Images load properly
- [ ] No console errors
- [ ] Smooth scrolling works

### Mobile
- [ ] Test on actual mobile device
- [ ] All sections visible
- [ ] Buttons work
- [ ] Menu works
- [ ] No horizontal scrolling

### Browsers
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

---

## 🔄 Updating Your Portfolio

### For Vercel/Netlify (Git Integration):
```bash
# Make your changes
git add .
git commit -m "Update portfolio"
git push
```
Your site will automatically redeploy! ✨

### For Netlify Drop:
```bash
npm run build
# Then drag the new dist folder to Netlify
```

### For GitHub Pages:
```bash
npm run deploy
```

---

## 🎯 Sharing Your Portfolio

Once deployed, share your portfolio:

### LinkedIn
1. Go to your LinkedIn profile
2. Click "Add profile section"
3. "Featured" → "Add link"
4. Paste your portfolio URL
5. Add title: "Personal Portfolio"

### GitHub Profile
1. Go to your GitHub profile
2. Edit README
3. Add link to portfolio
4. Pin the repository

### Resume
Add your portfolio URL to:
- Header section
- Contact information
- Online presence section

### Job Applications
Always include your portfolio link when applying for:
- Software Engineer positions
- Full-Stack Developer roles
- Frontend Developer roles
- Web Developer positions

---

## 🐛 Troubleshooting

### "404 Not Found" errors
- Make sure `dist` folder is being deployed
- Check build command is `npm run build`
- Verify output directory is `dist`

### Images not loading
- Verify files are in `public` folder
- Check file names match exactly (case-sensitive)
- Clear CDN cache if using custom domain

### Site looks broken
- Check browser console for errors
- Verify build completed successfully
- Test locally with `npm run preview`

### Resume not downloading
- Make sure `resume.pdf` is in `public` folder
- Check file size (< 10MB recommended)
- Verify file permissions

---

## 📈 Analytics (Optional)

Want to track visitors?

### Google Analytics
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID
3. Add to your `index.html`

### Vercel Analytics
- Built-in on Vercel
- Enable in project settings
- Free tier available

### Netlify Analytics
- Built-in on Netlify
- Paid feature ($9/month)

---

## 💡 Pro Tips

1. **Test before you deploy**
   ```bash
   npm run build
   npm run preview
   ```

2. **Use custom domain** - Looks more professional than `*.vercel.app`

3. **Enable HTTPS** - Usually automatic on modern platforms

4. **Set up automatic deployments** - Push to GitHub and your site updates

5. **Monitor performance** - Use Lighthouse in Chrome DevTools

6. **Keep dependencies updated** - Run `npm update` periodically

---

## ✅ Success!

Congratulations on deploying your portfolio! 🎉

Your portfolio is now live and ready to impress recruiters and potential employers.

### What's Next?

1. Share your portfolio link everywhere
2. Add it to your resume
3. Update LinkedIn with the link
4. Apply for jobs with confidence
5. Keep your portfolio updated with new projects

**Portfolio URL:** `[Add your deployed URL here]`

---

**Good luck with your job search!** 🚀

If you need help, refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
