# 🚀 Deploy Your Portfolio NOW!

Your code is committed and ready to deploy. Follow these simple steps:

---

## Option 1: Deploy to Vercel (Recommended - EASIEST!) ⚡

Vercel is the fastest way to get your portfolio live. **Takes only 5 minutes!**

### Step 1: Push to GitHub

1. **Go to GitHub** and sign in: https://github.com/nishhh-07

2. **Create a new repository:**
   - Click the **"+"** icon (top right)
   - Select **"New repository"**
   - Repository name: `nishan-portfolio` (or any name you like)
   - Keep it **Public** (so Vercel can access it)
   - **DO NOT** initialize with README, .gitignore, or license
   - Click **"Create repository"**

3. **Copy the repository URL** (will look like):
   ```
   https://github.com/nishhh-07/nishan-portfolio.git
   ```

4. **Run these commands in your terminal:**
   ```bash
   # Add GitHub as remote
   git remote add origin https://github.com/nishhh-07/nishan-portfolio.git
   
   # Push your code
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to Vercel:** https://vercel.com

2. **Sign Up/Login:**
   - Click **"Sign Up"** (if new) or **"Login"**
   - Choose **"Continue with GitHub"**
   - Authorize Vercel to access your GitHub

3. **Import Your Project:**
   - Click **"Add New..."** → **"Project"**
   - You'll see your GitHub repositories
   - Find **"nishan-portfolio"**
   - Click **"Import"**

4. **Configure (Auto-Detected!):**
   - **Framework Preset:** Vite ✅ (auto-detected)
   - **Root Directory:** ./ ✅ (auto)
   - **Build Command:** `npm run build` ✅ (auto)
   - **Output Directory:** `dist` ✅ (auto)
   - **Install Command:** `npm install` ✅ (auto)
   
   **Just click "Deploy"!** 🎉

5. **Wait 2-3 Minutes:**
   - Vercel will build and deploy your site
   - You'll see a progress screen
   - When done, you'll get a live URL!

6. **Your Portfolio is LIVE!** 🎉
   - URL will be something like: `nishan-portfolio.vercel.app`
   - Click the URL to see your live portfolio
   - Share it with everyone!

### Step 3: Get a Better URL (Optional)

Your initial URL will be something like `nishan-portfolio-abc123.vercel.app`

To get a cleaner URL:
1. Go to your project in Vercel
2. Click **"Settings"**
3. Click **"Domains"**
4. Edit the domain name to: `nishanmc-portfolio.vercel.app` (or similar)
5. Save

Or buy a custom domain like `nishanmc.com` and connect it!

---

## Option 2: Deploy to Netlify (Alternative) 🌐

If you prefer Netlify:

### Method A: Drag & Drop (Fastest)

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Go to Netlify Drop:** https://app.netlify.com/drop

3. **Drag the `dist` folder** onto the upload area

4. **Done!** Your site is live in seconds

5. **Get your URL** - will be like `random-name-123.netlify.app`

### Method B: GitHub Integration (Recommended)

1. **Push to GitHub** (follow Step 1 from Vercel above)

2. **Go to Netlify:** https://netlify.com

3. **Sign up/Login with GitHub**

4. **New site from Git:**
   - Click **"Add new site"** → **"Import an existing project"**
   - Choose **"Deploy with GitHub"**
   - Select your **nishan-portfolio** repository

5. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click **"Deploy site"**

6. **Live in 2-3 minutes!**

---

## Quick Commands Reference

### Already Committed ✅

Your code is committed and ready!

### To Push to GitHub:

```bash
# 1. Add your GitHub repository URL (replace with yours)
git remote add origin https://github.com/nishhh-07/nishan-portfolio.git

# 2. Push to GitHub
git branch -M main
git push -u origin main
```

### If You Make Changes Later:

```bash
# 1. Save and commit changes
git add .
git commit -m "Update portfolio"

# 2. Push to GitHub
git push

# Vercel/Netlify will auto-deploy the changes!
```

---

## What Happens During Deployment?

1. **Upload Code** → Your code goes to Vercel/Netlify
2. **Install Dependencies** → Runs `npm install`
3. **Build Project** → Runs `npm run build`
4. **Deploy** → Your `dist` folder goes live
5. **Get URL** → You get a live website URL!

---

## After Deployment Checklist

Once your site is live:

- [ ] Visit your live URL
- [ ] Test all navigation links
- [ ] Check profile photo displays
- [ ] Test resume download
- [ ] Check project images display
- [ ] Test Recruit AI live demo link
- [ ] Click GitHub link (opens your GitHub)
- [ ] Click LinkedIn link (opens your LinkedIn)
- [ ] Test on mobile (responsive?)
- [ ] Test email link (opens email?)
- [ ] Test phone link (opens dialer?)

---

## Sharing Your Portfolio

Once deployed, share your portfolio:

### 1. Update LinkedIn
- Go to your profile
- Add to **Featured** section
- Add to **Contact Info**

### 2. Update GitHub Profile
- Edit your profile README
- Add portfolio link
- Pin the repository

### 3. Update Resume
Add your portfolio URL:
- In header/contact section
- In "Portfolio" or "Projects" section

### 4. Job Applications
Include in:
- Cover letters
- Application forms
- Email signatures
- LinkedIn messages to recruiters

---

## Custom Domain (Optional)

Want `nishanmc.com` instead of `.vercel.app`?

### Buy a Domain:
- **Namecheap:** https://www.namecheap.com (~$10/year)
- **Google Domains:** https://domains.google
- **GoDaddy:** https://www.godaddy.com

### Connect to Vercel:
1. Go to Vercel project settings
2. **Domains** tab
3. Add your custom domain
4. Follow DNS instructions
5. Done in 5 minutes!

---

## Troubleshooting

### "git: command not found"
- Install Git: https://git-scm.com/download/win
- Restart terminal after installing

### "npm: command not found"
- Make sure Node.js is installed
- Restart terminal

### Build fails on Vercel/Netlify
- Check build logs
- Usually missing dependency
- Run `npm install` locally first

### Images not showing on live site
- Make sure all files committed: `git status`
- Add missing files: `git add public/`
- Commit: `git commit -m "Add images"`
- Push: `git push`

### Environment different than local
- Vercel/Netlify use Linux
- Your setup works fine, no issues expected

---

## Your Next Steps

1. ✅ **Code committed** (Already done!)
2. 📤 **Push to GitHub** (Follow steps above)
3. 🚀 **Deploy to Vercel** (5 minutes)
4. 🎉 **Share your live portfolio!**

---

## Quick Start (Copy & Paste)

### Create GitHub Repository:
1. Go to: https://github.com/new
2. Name: `nishan-portfolio`
3. Public repository
4. Create repository

### Push Your Code:
```bash
# Add remote (replace with your actual URL)
git remote add origin https://github.com/nishhh-07/nishan-portfolio.git

# Push
git branch -M main
git push -u origin main
```

### Deploy:
1. Go to: https://vercel.com
2. Sign up with GitHub
3. Import `nishan-portfolio`
4. Click Deploy
5. Done!

---

## Support

If you get stuck:
- Check Vercel docs: https://vercel.com/docs
- Check Netlify docs: https://docs.netlify.com
- GitHub push issues? Check SSH keys or use HTTPS

---

## Success! 🎉

Once deployed:
- ✅ Your portfolio is live on the internet
- ✅ Anyone can visit your URL
- ✅ Auto-deploys when you push to GitHub
- ✅ Free hosting forever
- ✅ Fast, reliable, and professional

**Now go deploy and get that job!** 🚀

---

**Start Here:** https://vercel.com  
**Your Code:** ✅ Ready to deploy  
**Time Needed:** 5 minutes  
**Cost:** Free forever
