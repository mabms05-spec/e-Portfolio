# Task List: e-Portfolio Audit Remediation

Track progress on resolving issues from the Red-Team Audit Report.

## 🛠️ Automated Fixes (AI Execution)

- [x] **Code Architecture & Modularization (R9)**
  - [x] Extract inline CSS to `styles.css`
  - [x] Extract inline JS to `app.js`
  - [x] Update `index.html` references
- [x] **SEO & Metadata (R4, M2, M5)**
  - [x] Add `<meta name="description">` and Open Graph/social card tags
  - [x] Inject JSON-LD structured data (schema.org)
  - [x] Place "Devon Chen" in the main `<h1>` title
- [x] **Interactive Elements & UX (R2, M1, M6, M8)**
  - [x] Integrate Netlify Forms (`data-netlify="true"`) to contact form
  - [x] Implement Dark Mode support (`prefers-color-scheme: dark`)
  - [x] Replace `100vh` with `100dvh` for iOS Safari compatibility
  - [x] Inject dynamic copyright year via `app.js`
- [x] **Accessibility (WCAG AA) (H1, H5, R8, R12, L5)**
  - [x] Darken text colors (`--color-text-muted` to `#566579`) for color contrast compliance
  - [x] Add "Skip to Content" accessibility link
  - [x] Implement mobile nav drawer keyboard focus trap
  - [x] Add support for `prefers-reduced-motion` to stop spinners
- [x] **Credibility & Performance (R5, R7, R11, R14)**
  - [x] Replace arbitrary skill percentage bars with clean skill badge matrices
  - [x] Add `loading="lazy"` and `srcset` placeholders to images
  - [x] Expand engineering jargon (SLD, BoQ, WSH, ETAP) on first use
  - [x] Refactor scroll highlighting script using `IntersectionObserver`
- [x] **Polishing & Git (L1, L2, L3, L4)**
  - [x] Create a standard `.gitignore` file
  - [x] Fix truncated markdown pages (`spec.md` and `brief.md` verified complete)
  - [x] Inject inline SVG Favicon
  - [x] Add basic CSS print styles (`@media print`)

---

## 📝 Technical Debt: User Action Items (Requires Devon's Input)

- [ ] **R1 (Resume Asset):** Upload your actual `resume.pdf` to the `assets/` folder (replacing the placeholder).
- [ ] **R3 (Privacy Check):** Decide if you want to keep your personal phone number (+65 8288 1629) visible on a public website. We recommend removing the phone number and WhatsApp widget to prevent spam, keeping contact email-only.
- [ ] **R6 (Social Handles):** Verify and confirm if `https://linkedin.com/in/devon-chen` is your actual LinkedIn profile handle.
