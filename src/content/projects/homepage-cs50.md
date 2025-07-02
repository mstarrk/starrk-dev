---
title: "CS50x Homepage Project"
description: "Responsive, component-based homepage built with plain HTML, CSS, JavaScript, and Bootstrap — no frameworks or build tools."
date: 2024-06-16
thumbnail: "https://www.harvardmagazine.com/sites/default/files/img/article/0823/hm_8.10.23_cs50-ai_sm.jpg"
liveUrl: "https://mstarrk.github.io/Homepage/"
githubUrl: "https://github.com/mstarrk/Homepage"
featured: true
technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"]
images: [
  {
  url: "https://raw.githubusercontent.com/mstarrk/Homepage/main/assets/screenshots/hero.png",
  alt: "Homepage hero section"
},

{
url: "https://raw.githubusercontent.com/mstarrk/Homepage/main/assets/screenshots/mobile-view.png",
alt: "Homepage mobile view"
}

]
---

## Project Overview

This homepage was created as a solution for CS50x Problem Set 8. The challenge was to design and build a complete personal website using only frontend technologies — no frameworks, no Node.js, no build tools.

The final result is a lightweight, responsive site featuring reusable components, interactive UI elements, and modern design techniques. I built every piece by hand, with a focus on writing scalable, reusable HTML and CSS — and implemented a custom solution for component reusability using pure JavaScript.

## Key Features

* 💡 **Component loader script** (`loader.js`) that injects HTML from external files into the DOM at runtime (a basic, hand-rolled "component system")
* 🌗 **Dark mode toggle** with persistent preference storage
* 📱 **Responsive layout** using Flexbox and Bootstrap grid system
* 🍔 **Hamburger menu** with mobile-first navigation
* 🎀 **Bootstrap carousel** for featured content
* 💅 **500+ lines of hand-crafted CSS** and accessible markup
* 🖼️ **Vector illustrations** from [undraw.co](https://undraw.co/)

## Custom Component System

This project includes a lightweight, dependency-free HTML component system built with JavaScript. It works like this:

```html
<!-- Placeholder in main HTML -->
<div class="navbar_component"></div>
```

The `loader.js` script loads and injects HTML content from `components/navbar.html` into that div. This allows reusability and DRY principles in a no-build-tool environment — an extra challenge I took on to better understand component composition without relying on libraries.

## Development Insights

* Built entirely with **vanilla HTML/CSS/JS**, plus Bootstrap for grid and UI components.
* Optimized for learning: everything is transparent and editable with no abstraction layers.
* Learned how to manage component reuse, responsiveness, and interactivity from scratch.

## Repository

* [GitHub – Homepage](https://github.com/mstarrk/Homepage)
