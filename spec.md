# Design Specification: Career e-Portfolio Website

## Goal
To build a clean, minimalist, high-performance static website for an Assistant Project Engineer with an Electrical & Electronic Engineering background, showcasing academic achievements, professional experience, and technical skills.

---

## 1. Requirements

### 1.1 Content & Layout Requirements
1. **Single-Page Responsive Layout:** Mobile-first, fluid layout transitioning seamlessly to tablet and desktop viewports.
2. **Hero/Header:**
   - Clear title and subtitle: "Assistant Project Engineer | Electrical & Electronic Background".
   - Subtle call-to-action button linking to the contact section or resume download.
3. **About Me:**
   - Professional bio showcasing technical knowledge paired with project execution capabilities.
4. **Academic Background:**
   - Clear breakdown of qualification details (Institutions, majors, dates, and key modules).
5. **Work Experience Timeline:**
   - Chronological vertical timeline representing milestones, job titles, and specific electrical engineering project deliverables.
6. **Skills Inventory Grid:**
   - Divided into categories (e.g., *Project Engineering & Management, Electrical & Hardware Design, Software & Tools*).
7. **Contact & Footer:**
   - Email, professional networking links (LinkedIn), and download link for the offline Resume PDF.

### 1.2 Design & Aesthetic Requirements
1. **Clean & Minimalist Style:**
   - Focus on generous white space, readable typography, and alignment.
2. **Color Palette:**
   - Primary: Charcoal/Slate (`#2D3748`) for text and dark borders.
   - Backgrounds: Very soft off-white (`#F7FAFC` / `#FFFFFF`) or soft silver-gray.
   - Accent/Highlight: Muted Steel Blue (`#4A5568`) and Muted Teal (`#319795`) for electrical/technical associations.
   - Critical rule: Avoid high-contrast primary colors (reds, yellows) or clashing gradients.
3. **Typography:**
   - Clean, modern system sans-serif fonts (`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`) to ensure instant loading without external font dependencies.
4. **Micro-interactions:**
   - Smooth transition effects on buttons and link hover states (transition duration between 0.2s to 0.3s).
   - No distracting parallax scrolling, text-writing animations, or heavy load-in screens.

---

## 2. Non-Requirements (Out of Scope)
- **Backend Database/Authentication:** The website is strictly static and doesn't store state or user accounts.
- **Server-side form processing:** Contact form can use static actions (e.g., Formspree or Netlify Forms built-in system) to avoid server code.
- **Heavy Animation Libraries:** No GSAP, complex Three.js 3D models, or scroll-triggered canvas animations.

---

## 3. Technical Architecture

### 3.1 Directory Structure
All site files will be structured inside the `e-Portfolio` folder as follows:
```text
e-Portfolio/
├── brief.md                 # Project Overview / Requirements Brief
├── spec.md                  # This Technical Specification
├── index.html               # Main page layout & semantic structure
├── styles.css               # Styling (Clean, responsive, utility-based CSS)
├── app.js                   # Minimal JavaScript for smooth scroll / dynamic interactions
└── assets/                  # Directory for images, icons, and PDF resume
    └── resume.pdf           # Offline resume PDF (placeholder)
```

### 3.2 Frontend Stack
- **HTML5:** Semantic tags (`<header>`, `<section>`, `<article>`, `<footer>`, `<time>`).
- **CSS3:** Flexbox and Grid layouts, CSS Custom Properties (variables) for uniform styling.
- **JavaScript (ES6):** Vanilla JS for toggles (e.g. mobile navigation) and smooth scrolling, if necessary.

---

## 4. Edge Cases to Handle
- **Broken PDFs:** Gracefully handle the absence of the offline Resume PDF or direct link if it hasn't been uploaded yet.
- **Small Screens:** Timeline layout must stack vertically on mobile screens (< 768px) and show horizontal or staggered layouts only on wide screens.
- **Font Availability:** Fallback fonts must preserve hierarchy and readability on older Windows, Mac, and mobile OS devices.

---

## 5. Acceptance Criteria

- [ ] Page passes HTML5 validation (W3C standard).
- [ ] Responsive design functions correctly on screen widths: 375px (mobile), 768px (tablet), and 1200px+ (desktop).
- [ ] No colors clash (checked via contrast ratios and visually).
- [ ] Interactive elements (links, buttons) have obvious, pleasant hover states.
- [ ] Timeline aligns correctly chronologically.
- [ ] Build outputs can be deployed immediately to Netlify via drag-and-drop or Git linking.
