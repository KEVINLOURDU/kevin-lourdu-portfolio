# Kevin Lourdu — Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Vercel-Live%20Demo-black?logo=vercel)](https://kevin-lourdu-portfolio.vercel.app)
[![Repository](https://img.shields.io/badge/GitHub-Repository-181717?logo=github)](https://github.com/KEVINLOURDU/kevin-lourdu-portfolio)

Personal portfolio website built with clean-room web architecture, vanilla JavaScript, 3D perspective tilt physics, and Web Audio API synthesis.

**Live Deployment:** https://kevin-lourdu-portfolio.vercel.app

---

## Preview

### Desktop Overview
![Portfolio Preview](assets/preview.png)

### Projects Showcase
![Projects Showcase](assets/preview-projects.png)

---

## Overview

A client-side developer portfolio engineered without external UI frameworks, prioritizing zero runtime overhead, responsive design, and tactile motion interactions.

### Core Features

- **Single-Page Application Routing**: Deep-linked hash routing (`#home`, `#projects`, `#skills`, `#education`, `#about`, `#contact`) alongside standalone HTML views for direct URL access.
- **3D Spatial Perspective Tilt**: Hardware-accelerated perspective calculations based on mouse coordinates relative to card centers.
- **Specular Spotlight Effect**: Dynamic pointer coordinate tracking injecting custom CSS variables for subtle radial illumination.
- **Web Audio API Feedback**: Synthesizes a 1200 Hz to 400 Hz frequency sweep on interactive clicks with zero external audio assets.
- **Design Tokens**: Structured CSS variables for dark-mode glassmorphism, responsive grids, and fluid layout scaling.

---

## Technical Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Audio**: Web Audio API
- **Deployment**: Vercel Fluid Edge Network
- **Version Control**: Git & GitHub

---

## Directory Structure

```
kevin-lourdu-portfolio/
├── assets/
│   ├── kevin-portrait.jpg      # Profile portrait asset
│   ├── preview.png             # Desktop hero preview
│   └── preview-projects.png    # Projects archive preview
├── css/
│   └── styles.css              # Stylesheet & design tokens
├── js/
│   └── script.js               # Interaction controller & routing
├── pages/
│   ├── about.html              # Standalone biography
│   ├── contact.html            # Standalone contact hub
│   ├── education.html          # Standalone education view
│   ├── projects.html           # Standalone projects view
│   └── skills.html             # Standalone skills view
├── index.html                  # Single-Page Application (SPA) root
├── preview.bat                 # Windows local launcher
├── README.md                   # Project documentation
└── vercel.json                 # Vercel configuration & rewrites
```

---

## Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/KEVINLOURDU/kevin-lourdu-portfolio.git
   cd kevin-lourdu-portfolio
   ```

2. Open the application:
   - On Windows: Run `preview.bat`
   - Or open `index.html` directly in any modern browser.
