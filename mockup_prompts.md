# AI Mock-up Prompts for Gemini UI

This document contains three detailed, copy-pasteable prompts you can feed into Gemini (or any LLM code generator) to generate responsive, high-fidelity mock-ups for your portfolio using plain HTML, CSS, and JS. 

These prompts are strictly based on the technical specification defined in **[spec.md](file:///C:/Users/Ryo/Desktop/e-Portfolio/spec.md)**.

---

## Prompt 1: Single-Page Minimalist Portfolio (Single File Mock-up)
*Use this prompt to generate a single-file prototype that contains all HTML, CSS, and JS.*

```text
Act as an expert senior frontend engineer. Build a single, self-contained index.html file that includes all HTML, CSS (in a <style> tag), and JavaScript (in a <script> tag) for a professional, highly readable career e-Portfolio website.

Target Role: Assistant Project Engineer with an Electrical & Electronic Engineering background.
Design Goal: Clean, minimalist, and professional.

Follow these strict design guidelines:
1. Color Palette:
   - Primary Text & Elements: Charcoal Slate (#2D3748)
   - Background: Crisp warm white (#FFFFFF) and soft light gray (#F7FAFC) for alternating sections
   - Accent/Highlight colors: Muted Steel Blue (#4A5568) and Muted Teal (#319795) representing engineering and precision.
   - Avoid generic high-contrast colors (like bright red, standard blue, or lime green).
2. Typography: System sans-serif stack (system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto) to guarantee immediate load times. Use clean sizing and a generous line height (1.6) for readability.
3. Micro-interactions: Use CSS transitions (0.25s ease) for links, buttons, and card hovers. Avoid heavy visual entry animations or parallax effects.

Structure requirements:
- Sticky Header & Navigation: A clean navbar with links for Home, About, Academics, Experience, Skills, Contact. It should shrink slightly or add a subtle shadow on scroll.
- Hero Section: High-impact introduction. Headline: "Assistant Project Engineer" with the sub-headline: "Electrical & Electronic Specialist | Bridging Engineering Design & Project Operations". Include a primary action button to "Download Resume" (pointing to "assets/resume.pdf" as a download link).
- About Me Section: Detailed bio describing an engineering graduate who manages schedules, costings, site installations, and tests electrical circuits.
- Academic Background: Grid layout displaying Degrees (B.Eng in Electrical & Electronic Engineering, etc.), Institutions, Graduation Years, and key modules (e.g. Power Systems, Project Management).
- Work Experience: A vertical timeline detailing roles (e.g., Assistant Project Engineer), companies, dates, and clear project accomplishments (milestones, budget, hardware installations).
- Skills Inventory Grid: Grouped clearly into:
  * "Project Engineering & Management" (planning, site coordination, reporting)
  * "Electrical & Hardware Design" (circuit design, power distribution, testing)
  * "Software & Tools" (AutoCAD, MATLAB, MS Project)
- Contact Section: A clean, responsive form with fields for Name, Email, Subject, and Message, and a submit button.
- Footer: Professional links (LinkedIn, GitHub) and copyright info.

Code Quality:
- Deliver clean, semantic HTML5 (<header>, <nav>, <section>, <main>, <time>, <footer>).
- Ensure it is 100% responsive and works perfectly on mobile devices (implement a responsive mobile navigation drawer using lightweight vanilla JavaScript).
- Do not use any external frameworks (no Bootstrap, Tailwind, or jQuery).
- Write authentic placeholder text for an Assistant Project Engineer instead of using Lorem Ipsum.
- Return ONLY the raw code inside a markdown block.
```

---

## Prompt 2: Modern Multi-Page Portfolio (Three-File Architecture)
*Use this prompt if you want Gemini to write code separated into index.html, styles.css, and app.js as outlined in the spec.*

```text
Act as an expert frontend developer. Write the code for a clean, minimalist career portfolio website for an Assistant Project Engineer (Electrical & Electronic background) structured across three separate files: index.html, styles.css, and app.js.

The design must be modular, modern, and highly legible, using the following details:
- Theme: Off-white background (#F8FAFC), slate grey typography (#2D3748), steel blue headers (#4A5568), and teal accents (#319795).
- Structure: index.html must contain all section markup (Hero, About, Academics, Experience, Skills, Contact). styles.css must contain all styles. app.js will handle the interactive components.

Please generate the code for these three files:

1. styles.css:
- Define CSS custom properties for the color system.
- Build a responsive layout system using CSS Grid and Flexbox.
- Style a sticky header navigation, a modern vertical timeline for work history, a clean grid for academic cards, a categorized skills list, and a professional contact form.
- Add CSS transition effects (0.2s ease-in-out) for all interactive hover states.

2. index.html:
- Set up a semantic layout referencing the external stylesheet and JS script.
- Header: Logo / Name and links (Home/About, Academics, Experience, Skills, Contact).
- Hero: "Assistant Project Engineer" overlay with a call-to-action button linking to the contact form.
- About Me: Blends technical electrical engineering background with project controls.
- Academics: Responsive cards outlining qualifications.
- Experience Timeline: Chronological vertical list showing companies, titles, and project scopes.
- Skills Grid: Divided into "Project Management", "Electrical Engineering", and "Software & Systems".
- Contact Section: Modern form styled to look sleek.
- Footer: LinkedIn, Email, and resume download link pointing to "assets/resume.pdf".

3. app.js:
- Include lightweight vanilla JS to manage a mobile navigation burger menu (toggle a class on the navigation list).
- Include smooth scrolling functionality for anchor links.
- Set up a small scroll event listener that adds a class to the header for a shadow effect once the page scrolls past 50px.

Format your response to show each file clearly inside separate, complete markdown code blocks.
```

---

## Prompt 3: Symmetrical Islamic/Halal Design Inspired Portfolio (Single File)
*Use this prompt to generate a version utilizing Islamic architectural/geometric aesthetics and Halal design guidelines.*

```text
Act as a premium UI/UX designer and frontend developer. Write a self-contained index.html file (including embedded CSS and JS) for an Assistant Project Engineer's e-Portfolio using modern Islamic/Halal design principles.

Islamic and Halal Design Principles to implement:
1. Symmetrical Balance & Geometry: Symmetrical page layout. Incorporate clean geometric grids, border designs, and subtle vector star-pattern dividers.
2. Color Palette: Inspired by traditional Islamic architecture and illumination:
   - Background: Rich cream / Warm parchment (#FFFDF5)
   - Primary Accent: Deep Emerald Green (#064E3B) for headers and primary highlights
   - Secondary Accent: Muted Sand/Gold (#D97706) for borders, bullet markers, and hover states
   - Text: Charcoal Grey (#1F2937) for highly legible body copy
3. Typography: Symmetrical, elegant headings using Georgia, Cambria, or standard Serif fonts. Body text should use a clean, highly readable Sans-serif (like Arial or system-ui).
4. Modesty & Minimalism: Avoid flashiness, excessive animations, or distractors. No background music or heavy scripts. Information must be clear, honest, and well-structured.

Section Guidelines:
- Header: Elegant, centered logo or name, with a balanced navigation bar (About, Academics, Experience, Skills, Contact).
- Hero Section: Large centered typography introducing: "Assistant Project Engineer | Electrical & Electronic Background". Frame this section with a subtle, mathematically symmetrical geometric SVG border or corner ornaments.
- About Me: Paragraphs sharing professional values, engineering background, and projects.
- Academics & Qualifications: Grid cards framed with thin gold-sand borders (#D97706) and clean spacing.
- Work Experience: Symmetrical timeline using thin gold lines and emerald circles as nodes, depicting job history.
- Skills Grid: Grouped by competence (Project Control, Electrical Engineering, Technical Software) using styled card grids.
- Contact Form: Symmetrical, clean input elements (Name, Email, Message) with a deep green button that changes to sand-gold on hover.

Requirements:
- Fully mobile-responsive layout.
- Use only native CSS grid/flexbox and SVG coordinates embedded directly in the HTML to create geometric borders/dividers (no external images or font dependencies).
- Deliver 100% complete, functional code in a single file inside a markdown block.
```
