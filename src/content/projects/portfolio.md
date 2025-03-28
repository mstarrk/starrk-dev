---
title: "Portfolio Website"
description: "A personal portfolio website built with Astro and Tailwind CSS."
date: 2023-11-15
thumbnail: "https://margaretmoon.com/wp-content/uploads/2016/03/lorem-ipsum.jpg"
liveUrl: "https://starrk.dev"
githubUrl: "https://github.com/mstarrk/portfolio"
featured: true
technologies: ["Astro", "Tailwind CSS", "JavaScript"]
images: [
  {
    url: "https://i.blogs.es/83bdf1/loremeee/1366_2000.jpg",
    alt: "Portfolio homepage screenshot"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTki8U-118MN1jIlHqzkrB9ZOx0X-8KVYU5EQ&s",
    alt: "Portfolio projects page screenshot"
  }
]
---

## Project Overview

This portfolio website showcases my work and skills as a developer. Built with Astro and styled with Tailwind CSS, it features a responsive design, dark/light mode, and dynamically generated project pages.

## Development Challenges

### Challenge 1: Theme Implementation

Implementing a seamless dark/light mode theme that persists user preferences was challenging. I solved this by:

- Using CSS variables for theme colors
- Storing the user's preference in localStorage
- Adding smooth transitions between themes

### Challenge 2: Performance Optimization

Optimizing performance for a perfect Lighthouse score required:

- Implementing responsive images
- Minimizing CSS with Tailwind's purge feature
- Using Astro's partial hydration for interactive components

## Key Features

- **Fast Performance**: Built with Astro's static site generation
- **Responsive Design**: Looks great on all devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Content Collections**: Dynamically generated project and blog pages
- **SEO Optimized**: Proper meta tags and structured data
