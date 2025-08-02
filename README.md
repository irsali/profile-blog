# Irshad Ali - Profile & Blog

A modern, responsive personal website built with SvelteKit, featuring a professional profile page and technical blog.

## 🚀 Features

### Profile Page
- **Modern Design**: Inspired by [Svelte.dev](https://svelte.dev/) with clean, professional aesthetics
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth scrolling, hover effects, and animated components
- **Professional Sections**:
  - Hero section with key statistics
  - About section with achievements
  - Professional experience timeline
  - Skills and technologies showcase
  - Contact information and social links

### Blog System
- **Markdown Support**: Write blog posts in Markdown with frontmatter
- **Category & Tag System**: Organize content by categories and tags
- **Search Functionality**: Find posts using Fuse.js search
- **Syntax Highlighting**: Code blocks with Shiki syntax highlighting
- **Comments**: Giscus integration for blog comments

## 🛠️ Tech Stack

- **Framework**: SvelteKit 2.16.0
- **Styling**: TailwindCSS 4.0.0
- **Icons**: Lucide Svelte
- **Markdown**: mdsvex with rehype plugins
- **Syntax Highlighting**: Shiki with Nord theme
- **Search**: Fuse.js
- **Comments**: Giscus
- **Deployment**: Static site generation

## 📁 Project Structure

```
src/
├── routes/
│   ├── +page.svelte          # Main profile page
│   ├── +layout.svelte        # Global layout
│   └── blog/                 # Blog routes
├── posts/
│   └── blog/                 # Markdown blog posts
├── lib/
│   ├── services/             # Business logic
│   ├── templates/            # Reusable components
│   └── types.ts              # TypeScript definitions
└── static/
    └── static/
        ├── profile/          # Profile images
        └── blog/             # Blog assets
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Svelte orange (#ff3e00)
- **Background**: Clean white and light gray
- **Text**: Dark gray for readability
- **Accents**: Subtle shadows and borders

### Typography
- **System Fonts**: Apple system fonts for optimal performance
- **Hierarchy**: Clear heading structure with proper spacing
- **Readability**: Optimized line heights and letter spacing

### Animations
- **Hover Effects**: Subtle transforms and shadow changes
- **Smooth Scrolling**: Anchor link navigation
- **Loading States**: Progressive enhancement

## 📱 Responsive Design

- **Desktop**: Full-featured layout with side-by-side sections
- **Tablet**: Adjusted grid layouts and spacing
- **Mobile**: Single-column layout with optimized touch targets

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📝 Content Management

### Profile Information
Update the profile data in `src/routes/+page.svelte`:
- Personal information
- Professional experience
- Skills and technologies
- Contact details

### Blog Posts
Add new blog posts in `src/posts/blog/` with frontmatter:
```yaml
---
title: "Post Title"
date: "YYYY-MM-DD"
description: "Brief description"
categories: ["category1", "category2"]
tags: ["tag1", "tag2"]
icon: "icon-name"
---
```

## 🎯 Key Sections

### Hero Section
- Professional title and description
- Key statistics (experience, articles, projects)
- Call-to-action buttons
- Profile image

### About Section
- Personal introduction
- Key achievements with icons
- Professional philosophy

### Experience Timeline
- Chronological work history
- Company details and roles
- Project descriptions

### Skills Showcase
- Programming languages
- Frameworks and libraries
- Cloud platforms
- Development tools

### Contact Information
- Email and location
- Social media links
- Blog access

## 🔧 Customization

### Colors
Update CSS variables in the component styles:
```css
:global(:root) {
  --color-primary: #ff3e00;
  --color-primary-hover: #ff5722;
  /* ... other variables */
}
```

### Layout
Modify grid layouts and spacing in the CSS:
```css
.hero__container {
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}
```

### Content
Update the profile data object in the script section:
```javascript
const profile = {
  name: 'Your Name',
  title: 'Your Title',
  // ... other properties
};
```

## 📊 Performance

- **Static Generation**: Pre-built pages for fast loading
- **Image Optimization**: Responsive images with proper sizing
- **Code Splitting**: Automatic route-based code splitting
- **Minification**: Optimized CSS and JavaScript

## 🌐 Deployment

The site is configured for static deployment:
- **Adapter**: `@sveltejs/adapter-static`
- **Build Output**: Static HTML, CSS, and JavaScript
- **Hosting**: Compatible with Netlify, Vercel, GitHub Pages, etc.

## 📄 License

This project is open source and available under the MIT license.

---

Built with ❤️ using SvelteKit and inspired by the Svelte community.
