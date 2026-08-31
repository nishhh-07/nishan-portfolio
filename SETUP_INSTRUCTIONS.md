# Portfolio Setup Instructions

## Quick Start

Your portfolio is now ready! Here's how to get it running:

### 1. Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` (or the port shown in terminal) to view your portfolio.

### 2. Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

### 3. Preview Production Build

```bash
npm run preview
```

## Customization Guide

### Update Personal Information

Edit `/src/data/portfolioData.js` to update:

#### Social Links (Currently Empty)
```javascript
social: {
  github: "https://github.com/your-username",     // Add your GitHub URL
  linkedin: "https://linkedin.com/in/your-profile", // Add your LinkedIn URL
},
```

#### Add Project GitHub URLs
```javascript
projects: [
  {
    // ...
    github: "https://github.com/your-username/recruit-ai", // Add when available
  }
]
```

### Replace Placeholder Images

#### Profile Photo
1. Take or select a professional headshot photo
2. Save it as `profile.jpg` (or `.png`)
3. Place it in `/public/` folder
4. Recommended size: 400x400px or larger (square)

#### Project Screenshots
1. Take screenshots of your live projects
2. Save as `project1.jpg` and `project2.jpg`
3. Place in `/public/` folder
4. Recommended size: 800x560px or larger

#### Resume
1. Export your resume as PDF
2. Name it `resume.pdf`
3. Place it in `/public/` folder

### Update Project Information

In `/src/data/portfolioData.js`:

```javascript
export const projects = [
  {
    // Update with actual URLs when available
    liveDemo: "https://your-live-demo-url.com",
    github: "https://github.com/your-username/project-name",
  }
]
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Build your project: `npm run build`
2. Drag and drop the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/', // Add this line
   })
   ```
4. Run: `npm run deploy`

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navigation.jsx   # Top navigation bar
│   └── Footer.jsx       # Bottom footer
├── sections/           # Page sections
│   ├── Hero.jsx        # Landing section
│   ├── About.jsx       # About section
│   ├── Skills.jsx      # Skills section
│   ├── Experience.jsx  # Work experience timeline
│   ├── Projects.jsx    # Project showcase
│   ├── Education.jsx   # Education cards
│   ├── Certifications.jsx # Certifications
│   └── Contact.jsx     # Contact section
├── data/
│   └── portfolioData.js # All content configuration
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## Content Tips

### Profile Photo
- Use a professional, high-quality photo
- Plain or minimally busy background
- Good lighting
- Professional attire recommended
- Smile naturally

### Project Screenshots
- Capture the main interface/dashboard
- Show key features
- Use actual deployed versions
- Consider adding annotations in image editor

### Writing Tips
- Keep descriptions concise and specific
- Focus on technologies and impact
- Use active voice
- Quantify achievements when possible
- Proofread for grammar and spelling

## Browser Testing Checklist

Test your portfolio on:
- [ ] Chrome/Edge (Desktop)
- [ ] Firefox (Desktop)
- [ ] Safari (Mac)
- [ ] Mobile browsers (iOS Safari, Chrome Android)
- [ ] Different screen sizes (use browser DevTools)

## Performance Optimization

Your portfolio is already optimized with:
- ✅ Code splitting
- ✅ Minification
- ✅ Image optimization (when you add images)
- ✅ Lazy loading where appropriate
- ✅ Fast font loading (Google Fonts preconnect)

## SEO

Already configured:
- ✅ Page title and meta description
- ✅ Open Graph tags
- ✅ Semantic HTML
- ✅ Proper heading hierarchy

After deploying:
1. Submit your sitemap to Google Search Console
2. Add your portfolio URL to LinkedIn
3. Add it to your GitHub profile
4. Share it in your resume

## Need Help?

### Common Issues

**Problem:** Images not showing
**Solution:** Make sure image files are in `/public/` folder with exact names

**Problem:** Build fails
**Solution:** Run `npm install` again and check for error messages

**Problem:** Smooth scroll not working
**Solution:** Clear browser cache and try again

**Problem:** Mobile menu not working
**Solution:** Check browser console for errors

## Next Steps

1. ✅ Replace placeholder images
2. ✅ Add your social media links
3. ✅ Add GitHub URLs for projects
4. ✅ Test on multiple devices
5. ✅ Deploy to production
6. ✅ Share your portfolio!

## Support

If you encounter issues:
1. Check the browser console for errors (F12)
2. Verify all files are in correct locations
3. Ensure npm dependencies are installed
4. Try clearing cache and rebuilding

---

**Your portfolio is ready to showcase your work!** 🚀
