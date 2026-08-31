# Nishan M C - Personal Portfolio

A modern, responsive, premium portfolio website showcasing my skills and projects as a Software Engineer specializing in Full-Stack Development and Applied Machine Learning.

🔗 **Live Portfolio:** [Your deployed URL here]

## ✨ Features

- **Premium Dark Design** - Professional dark theme with sophisticated blue accents
- **Fully Responsive** - Seamless experience on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean typography, smooth animations, and intuitive navigation
- **Accessible** - WCAG compliant with keyboard navigation and screen reader support
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Fast Performance** - Optimized build with code splitting and lazy loading

## 🛠️ Tech Stack

- **Frontend:** React.js 18
- **Build Tool:** Vite
- **Styling:** CSS3 with modern features
- **Icons:** Lucide React + Custom SVG icons
- **Typography:** Inter font family
- **Deployment Ready:** Vercel, Netlify, or any static host

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view your portfolio locally.

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📂 Project Structure

```
nishan-portfolio/
├── public/
│   ├── profile.jpg              # Your professional photo
│   ├── resume.pdf               # Your resume
│   └── projects/
│       ├── recruit-ai.png       # Recruit AI project screenshot
│       └── network-anomaly.png  # ML project screenshot
├── src/
│   ├── components/
│   │   ├── Navigation.jsx       # Top navigation bar with social icons
│   │   └── Footer.jsx           # Footer with social links
│   ├── sections/
│   │   ├── Hero.jsx             # Hero section with profile
│   │   ├── About.jsx            # About section
│   │   ├── Skills.jsx           # Skills showcase
│   │   ├── Experience.jsx       # Professional timeline
│   │   ├── Projects.jsx         # Featured projects
│   │   ├── Education.jsx        # Education history
│   │   ├── Certifications.jsx   # Certifications
│   │   └── Contact.jsx          # Contact information
│   ├── data/
│   │   └── portfolioData.js     # Centralized content configuration
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

All personal data is centralized in `/src/data/portfolioData.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  email: "your.email@example.com",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
  },
  // ... more fields
};
```

### Add Your Assets

1. **Profile Photo**
   - Replace `/public/profile.jpg` with your professional headshot
   - Recommended: 400x400px or larger, square format

2. **Resume**
   - Add your resume as `/public/resume.pdf`

3. **Project Screenshots**
   - `/public/projects/recruit-ai.png` - Recruit AI project
   - `/public/projects/network-anomaly.png` - ML project
   - Recommended: 1200x675px (16:9 ratio)

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite settings
5. Deploy!

### Deploy to Netlify

1. Build: `npm run build`
2. Upload the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Or connect your GitHub repository for continuous deployment

### Deploy to GitHub Pages

```bash
npm install --save-dev gh-pages
```

Add to `package.json` scripts:
```json
"deploy": "npm run build && gh-pages -d dist"
```

Update `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/repository-name/',
})
```

Run: `npm run deploy`

## 📋 Key Sections

### Hero
- Professional label and introduction
- Profile photo
- Call-to-action buttons
- Social media links (GitHub, LinkedIn)

### Projects
- **Recruit AI** (Featured) - Full-stack recruitment platform
  - Live Demo: https://recruit-ai-liart.vercel.app
- **Network Anomaly Detection** - ML framework for network security

### Skills
7 skill categories covering:
- Programming Languages
- Frontend Development
- Backend Development
- Databases
- Machine Learning
- Tools & DevOps
- Computer Science Fundamentals

### Experience
- Full Stack Web Development Intern at SuprMentr Technologies
- Python Full Stack Developer Intern (AICTE Virtual Programme)

### Contact
- Email: nishanmc313@gmail.com
- Phone: +91 7204807832
- Location: Mangalore, Karnataka, India

## 🔗 Links

- **GitHub:** https://github.com/nishhh-07
- **LinkedIn:** https://www.linkedin.com/in/nishan-mc-a24041283
- **Recruit AI Live Demo:** https://recruit-ai-liart.vercel.app

## 📱 Responsive Design

Tested and optimized for:
- Desktop (1920px+)
- Laptop (1366px - 1920px)
- Tablet (768px - 1365px)
- Mobile (320px - 767px)

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels for icon-only links
- Keyboard navigation support
- Focus visible states
- Proper heading hierarchy
- Alt text for images
- Color contrast compliance

## ⚡ Performance

- **Build size:** ~225KB (gzipped: ~69KB)
- **CSS size:** ~19KB (gzipped: ~4KB)
- Fast initial load
- Optimized images
- Code splitting
- Tree shaking

## 📄 License

© 2026 Nishan M C. All rights reserved.

---

**Built with ❤️ using React + Vite**
