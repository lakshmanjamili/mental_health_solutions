# 🧠 Mental Fitness Solutions LLC - Professional Mental Health Coaching Website

> **Clarity begins with caring for your Emotional and mental well-being - Take the first step toward a balanced, healthier you.**

## 🌟 Overview

A modern, responsive website for Mental Fitness Solutions LLC, featuring Dr. Deepti Talluri's professional mental health coaching services. Built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui components.

## ✨ Features

### 🎨 **Modern Design**
- Beautiful gradient hero section with call-to-action
- Responsive design that works on all devices
- Smooth animations and hover effects
- Glassmorphism and modern UI elements
- Professional color scheme (purple/blue gradients)

### 📱 **Responsive Sections**
- **Hero Section**: Compelling headline with booking CTA
- **About Section**: Dr. Deepti's credentials and approach  
- **Services Section**: Life, Behavioral, and Mental Health coaching
- **Booking Section**: Package selection and free consultation form
- **Contact Section**: Multiple contact methods and contact form

### 💼 **Professional Services**
- **Life Coaching**: Goal setting, career transitions, confidence building
- **Behavioral Coaching**: Habit change, emotional regulation, stress management
- **Mental Health Coaching**: Anxiety/depression support, mindfulness, trauma recovery
- **Additional Services**: 1-on-1 coaching, workshops, team coaching, masterclasses

### 📦 **Pricing Packages**
- **Clarity Starter**: 4 weeks - $399 (Weekly sessions + email support)
- **Deep Dive**: 8 weeks - $749 (Personalized plan + tools & guides) 
- **Thrive Unlimited**: Monthly - $249/mo (Unlimited messaging + 2 calls/month)

### 📧 **Email Integration**
- Contact form submissions sent to your email
- Booking form submissions with package selection
- EmailJS integration for reliable email delivery
- Form validation and error handling

### 🚀 **Performance & SEO**
- Next.js 15 with App Router for optimal performance
- TypeScript for type safety and better development experience
- Tailwind CSS for fast, responsive styling
- SEO optimized with proper meta tags and structured data
- Fast loading times and smooth animations

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Icons**: Lucide React
- **Email**: EmailJS for form submissions
- **Deployment**: Vercel (recommended)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project**:
```bash
cd /Users/lakshmanjamili/Desktop/Loukri-AI/loukri_ai/mental_health_solutions
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables**:
```bash
cp .env.example .env.local
```

4. **Configure EmailJS** (see Email Setup section below)

5. **Start development server**:
```bash
npm run dev
```

6. **Open browser**: Visit http://localhost:3000

## 📧 Email Setup

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Create a new email service (Gmail, Outlook, etc.)
4. Create an email template

### 2. Configure Environment Variables
Update `.env.local` with your EmailJS credentials:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here  
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 3. Email Template Variables
Your EmailJS template should include these variables:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{phone}}` - User's phone number
- `{{subject}}` - Email subject
- `{{message}}` - User's message
- `{{preferred_package}}` - Selected coaching package
- `{{to_name}}` - Your name (Dr. Deepti Talluri)
- `{{to_email}}` - Your email address

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**:
```bash
npm install -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel --prod
```

4. **Set up environment variables in Vercel dashboard**

### Deploy to Other Platforms

The website can be deployed to:
- **Netlify**: Connect GitHub repo and deploy
- **Heroku**: Use Node.js buildpack
- **AWS Amplify**: Connect repository for automatic deployment
- **DigitalOcean App Platform**: Deploy from GitHub

## 🔗 Domain Setup for WordPress Users

### Method 1: Point WordPress Domain to Vercel

1. **Get Vercel deployment URL** from dashboard
2. **Add custom domain** in Vercel project settings
3. **Update DNS records** in WordPress hosting:
   - A Record: `@` → Vercel IP address
   - CNAME Record: `www` → `cname.vercel-dns.com`
4. **Wait for DNS propagation** (24-48 hours)

### Method 2: Subdomain Approach

1. **Create subdomain** in WordPress hosting (e.g., `app.yourdomain.com`)
2. **Point subdomain** to Vercel deployment
3. **Keep WordPress** at main domain
4. **Link to subdomain** from WordPress site

### Method 3: Reverse Proxy

Set up WordPress to proxy `/app` path to Vercel deployment while keeping WordPress at root.

## 📱 Contact Information Setup

Update contact information in the following files:
- `src/components/Header.tsx` - Phone number in header
- `src/components/Footer.tsx` - All contact details
- `src/components/ContactSection.tsx` - Contact methods
- `src/app/layout.tsx` - Meta tags and site info

## 🎨 Customization

### Colors
The website uses a purple/blue gradient theme. To customize:
- Update CSS variables in `src/app/globals.css`
- Modify Tailwind config for custom colors
- Update gradient classes throughout components

### Content
- **Hero Section**: Update headline and CTA text
- **About Section**: Modify Dr. Deepti's bio and credentials
- **Services**: Customize service offerings and descriptions
- **Packages**: Update pricing and package details
- **Contact**: Update contact information and social links

### Images
Add professional images to `/public` folder:
- `dr-deepti-photo.jpg` - Professional headshot
- `hero-background.jpg` - Hero section background
- `og-image.jpg` - Social media preview image

## 📊 Analytics Setup

### Google Analytics
1. Create Google Analytics account
2. Add tracking ID to `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```
3. Add Google Analytics component to layout

### Other Analytics
The website is compatible with:
- Facebook Pixel
- Mixpanel
- Hotjar
- Google Tag Manager

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type checking
npm run type-check
```

### Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Homepage with all sections
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer with branding
│   ├── HeroSection.tsx      # Hero with CTA
│   ├── AboutSection.tsx     # About Dr. Deepti
│   ├── ServicesSection.tsx  # Services overview
│   ├── BookingSection.tsx   # Packages and booking
│   └── ContactSection.tsx   # Contact form and info
└── lib/
    ├── utils.ts             # Utility functions
    └── emailService.ts      # Email handling
```

## 🎯 SEO Optimization

The website includes:
- **Meta tags**: Title, description, keywords
- **Open Graph**: Social media preview tags
- **Twitter Cards**: Twitter-specific preview
- **Structured data**: JSON-LD for search engines
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine directives

## 🔒 Security & Privacy

- **Form validation**: Client and server-side validation
- **Email sanitization**: Prevent injection attacks
- **HTTPS**: Secure connections via Vercel
- **Privacy compliance**: GDPR/CCPA considerations
- **No data storage**: Forms send emails directly

## 🆘 Troubleshooting

### Common Issues

1. **Email not sending**:
   - Check EmailJS configuration
   - Verify environment variables
   - Test EmailJS service in dashboard

2. **Styling not loading**:
   - Clear browser cache
   - Check Tailwind CSS installation
   - Verify component imports

3. **Build errors**:
   - Check TypeScript errors
   - Verify all imports
   - Run `npm run lint`

4. **DNS issues**:
   - Wait for propagation (24-48 hours)
   - Use DNS checker tools
   - Verify DNS records

## 📞 Support

For technical support or customization requests:

- **Email**: Built by [Loukri AI Inc.](https://www.loukriai.com)
- **Website**: www.loukriai.com
- **Tagline**: "Have an idea? We'll build anything for you."

## 📄 License

This project is proprietary software created for Mental Fitness Solutions LLC.

## 🎉 Features Included

✅ **Responsive Design** - Works on all devices  
✅ **Modern UI/UX** - Professional design with animations  
✅ **Email Integration** - Contact and booking forms  
✅ **SEO Optimized** - Meta tags and structured data  
✅ **Performance** - Fast loading with Next.js 15  
✅ **Accessibility** - WCAG compliant design  
✅ **TypeScript** - Type safety and better DX  
✅ **Professional Branding** - Loukri AI footer attribution  

## 🚀 Ready to Launch!

Your Mental Fitness Solutions website is ready for deployment. The professional design, integrated email functionality, and responsive layout provide everything needed for a successful mental health coaching business online presence.

**Next Steps:**
1. Configure EmailJS for form submissions
2. Deploy to Vercel or your preferred platform  
3. Set up custom domain (if replacing WordPress)
4. Add professional photos and final content review
5. Set up analytics and monitoring
6. Launch and start helping clients! 

---

**Built with ❤️ by [Loukri AI Inc.](https://www.loukriai.com) - Have an idea? We'll build anything for you.**