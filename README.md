# Profile Blog

A modern, responsive blog built with SvelteKit featuring dark/light theme support, smooth animations, and dynamic content management.

## Features

### Core Features
- **Modern Design**: Clean, professional design with dark/light theme support
- **Responsive Layout**: Mobile-first responsive design
- **Blog System**: Markdown-based blog posts with categories and tags
- **Reading Time**: Automatic calculation of reading time for blog posts
- **Comments**: Giscus-powered comments with theme synchronization
- **Smooth Animations**: Viewport-triggered animations using Animate.css
- **Custom Cursor**: Elegant glow cursor effect for desktop
- **Typing Effects**: Character-by-character typing animations
- **Ripple Effects**: Dynamic button interactions

### Reading Time Calculation
The blog automatically calculates reading time for each post using the following methodology:

- **Word Count**: Analyzes the raw markdown content, excluding HTML tags and metadata
- **Reading Speed**: Uses 200 words per minute as the average reading speed
- **Formatting**: Displays as "X min read" or "Less than 1 min read" for short posts
- **Accuracy**: Rounds up to the nearest minute for better user experience

The calculation is performed at build time and cached for performance.

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## Project Structure

```
src/
├── lib/
│   ├── components/     # Reusable UI components
│   ├── data/          # Profile and content data
│   ├── services/      # Business logic services
│   ├── stores/        # Svelte stores (theme, etc.)
│   ├── templates/     # Blog templates
│   ├── types.ts       # TypeScript type definitions
│   └── utils/         # Utility functions (reading time, etc.)
├── posts/
│   └── blog/          # Markdown blog posts
├── routes/            # SvelteKit routes
└── static/            # Static assets
```

## Blog Post Format

Blog posts are written in Markdown with frontmatter:

```yaml
---
title: "Post Title"
date: "2024-01-01"
description: "Brief description"
categories: ["category1", "category2"]
tags: ["tag1", "tag2"]
icon: "icon-name"
---
```

## Theme System

The application supports dynamic theme switching with CSS custom properties:

- **Light Theme**: Clean, bright interface
- **Dark Theme**: Easy on the eyes for low-light environments
- **Automatic Detection**: Respects system theme preferences
- **Persistent Storage**: Remembers user's theme choice

## Animation System

Built with performance and accessibility in mind:

- **Viewport Triggered**: Animations activate when elements enter the viewport
- **Staggered Delays**: Smooth sequential animations for grid items
- **Reduced Motion**: Respects user's motion preferences
- **GPU Accelerated**: Uses CSS transforms for smooth performance

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
