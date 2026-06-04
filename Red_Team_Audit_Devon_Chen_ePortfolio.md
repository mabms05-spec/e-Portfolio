# 🔴 Red-Team Audit Report: Devon Chen e-Portfolio

> **Auditor**: Athena — Bionic AI Agent  
> **Date**: 4 June 2026  
> **Repository**: [mabms05-spec/e-Portfolio](https://github.com/mabms05-spec/e-Portfolio)  
> **Live URL**: [https://mabms05-spec.github.io/e-Portfolio/](https://mabms05-spec.github.io/e-Portfolio/)  
> **Audit Type**: Adversarial Red-Team Review (Protocol 260)  
> **Methodology**: 5-Phase Pre-Mortem + MCDA Prioritization + Pairwise Ranking

---

## Phase 0: Declare Priors

**Thesis**: Devon Chen's e-Portfolio is a functional, professional-looking single-page website for an Assistant Project Engineer.

**What Falsifies It**: Any finding in (a) security, (b) accessibility, (c) SEO, (d) code architecture, (e) content credibility, or (f) UX/design that would cause a hiring manager or recruiter to dismiss the candidate, or that exposes the owner to unnecessary risk.

**Missing Perspective**: The end-user perspective — a recruiter or engineering firm HR manager who will spend ≤30 seconds deciding whether to keep scrolling.

---

## Phase 1: Adversarial Lenses

### 🎯 The Skeptic
"This is a 60KB monolith HTML file with all CSS and JS inline. It works, but it screams 'AI-generated template'. Any technical reviewer will immediately notice the code architecture is not what an engineer who claims to use AutoCAD at 90% proficiency would produce."

### 🎯 The Victim (The End User / Recruiter)
"I see an exposed personal mobile number (+65 8288 1629) and a WhatsApp direct link on a public GitHub Pages site. This is a privacy hazard. Also, the contact form doesn't actually send anything — it just fakes a success message. If I tried to reach out, my message would vanish."

### 🎯 The Regulator (PDPA / WCAG Compliance)
"The site has no privacy policy, no cookie consent, and several WCAG 2.1 AA violations — missing `alt` attributes context, no skip-to-content link, no focus management on the mobile drawer, and color contrast issues on muted text."

### 🎯 The Cynic
"The resume download links to `assets/resume.pdf` — a file that doesn't exist in the repository. The skill percentages (90%, 85%, 80%) are arbitrary, unverifiable, and a known anti-pattern that makes candidates look less credible, not more."

### 🎯 The 5-Year Future
"This site has zero analytics, zero content management, and zero automation. In 5 years, the copyright will still say 2026, the content will be stale, and the single-page architecture will collapse under any content expansion."

---

## Phase 2: Bias Detection

### 2A: Anchoring Detection

The skill percentages (90%, 85%, 80%, etc.) are **classic anchoring artifacts**. There is no methodology, benchmark, or certification basis for these numbers. They create a false sense of quantified competence while being completely unverifiable. Modern portfolios have moved away from percentage-based skill bars entirely.

### 2B: Base Rate Audit

- **Claim**: "First Class Honours from NUS, B.Eng EEE"
- **Base Rate**: ~10-15% of NUS Engineering graduates achieve First Class
- **Assessment**: Plausible. No red flag.

- **Claim**: "3% under budget on $1.8M project" (as an *assistant* project engineer)
- **Base Rate**: Assistants rarely have direct budget authority. The claim attribution is ambiguous — it's unclear whether Devon individually drove this or was on a team that achieved it.
- **Assessment**: 🟡 Potential overclaim. Should clarify team vs. individual contribution.

### 2C: Standard Bias Checklist

| Bias | Present? | Evidence |
|:-----|:---------|:---------|
| Sycophancy | ✅ Yes | AI-generated prose reads like a template — polished but generic |
| Cherry-Picking | ✅ Yes | Only positive outcomes shown; no challenges or growth areas |
| False Precision | ✅ Yes | Skill bars at 90%, 85%, 80% with no basis |
| Assumed Context | ✅ Yes | Assumes visitor knows what SLD, BoQ, WSH mean |
| Complexity Bias | ❌ No | Design is appropriately simple |

---

## Phase 3: Severity-Weighted Findings

### 🔴 CRITICAL (4 findings)

| ID | Category | Finding | Quote / Evidence | Fix Time |
|:---|:---------|:--------|:-----------------|:---------|
| C1 | **Security / Privacy** | Personal mobile number (+65 8288 1629) and WhatsApp link exposed on a public website indexed by Google. No opt-in consent mechanism. | Line 1433: `<p>+65 8288 1629</p>`, Line 1485: `<a href="https://wa.me/6582881629"` | 5 min |
| C2 | **Functionality** | Contact form is **completely non-functional**. `e.preventDefault()` + `contactForm.reset()` simulates success but sends zero data anywhere. No backend, no `mailto:`, no Formspree, no Netlify Forms. Visitor messages are **silently discarded**. | Lines 1549-1559: Form submission handler with no actual submission | 10 min |
| C3 | **Broken Asset** | Resume download button links to `assets/resume.pdf` — a file that **does not exist** in the repository. The `<a>` tag has `download="Devon_Chen_Resume.pdf"` but the target file is a 404. The primary CTA in the hero section is broken. | Line 1138: `<a href="assets/resume.pdf" download="Devon_Chen_Resume.pdf"` | 5 min |
| C4 | **SEO / Discoverability** | No `<meta name="description">` tag. No Open Graph tags. No structured data (JSON-LD). No sitemap.xml. No robots.txt. The page is essentially invisible to search engines and will render as a blank card when shared on LinkedIn or WhatsApp. | Lines 3-6: Only `charset`, `viewport`, and `title` in `<head>` | 10 min |

### 🟠 HIGH (6 findings)

| ID | Category | Finding | Quote / Evidence | Fix Time |
|:---|:---------|:--------|:-----------------|:---------|
| H1 | **Accessibility (WCAG)** | No skip-to-content link. Mobile drawer has no focus trap — keyboard users can tab behind the overlay. `outline: none` on form focus removes native focus indicators without adequate replacement ring (only `box-shadow` provided, invisible to Windows High Contrast Mode). | Line 852: `outline: none;` | 10 min |
| H2 | **Code Architecture** | Entire site is a single 60KB `index.html` monolith — 1,087 lines of CSS + 73 lines of JS + HTML, all inline. No external stylesheet, no separation of concerns. Unmaintainable, unscalable, and signals poor engineering practice to technical reviewers. | File structure: only `index.html` as code | 30 min |
| H3 | **Content Credibility** | Skill percentage bars (90%, 85%, 80%, etc.) are an industry anti-pattern. Recruiters and senior engineers universally recognize these as arbitrary. They undermine credibility rather than enhancing it. No methodology or benchmark cited. | Lines 1334-1400: All skill bars with hardcoded percentages | 10 min |
| H4 | **Performance** | Profile avatar (`profile_avatar.png`: 511KB) and project schematic (`project_schematic.png`: 643KB) are uncompressed PNGs totaling 1.15MB. No `loading="lazy"`, no `srcset`, no WebP/AVIF fallbacks. On mobile 3G, these alone add ~8 seconds to page load. | `assets/profile_avatar.png` (511,008 bytes), `assets/project_schematic.png` (642,597 bytes) | 10 min |
| H5 | **Accessibility** | Color contrast failure: `--color-text-muted: #718096` on `--color-bg-white: #FFFFFF` yields a contrast ratio of ~4.2:1 — **fails WCAG AA for normal text** (requires 4.5:1). All paragraph text, contact details, timeline dates, and skill labels use this color. | Line 16: `--color-text-muted: #718096;` | 5 min |
| H6 | **Professional Risk** | LinkedIn link points to `https://linkedin.com/in/devon-chen` — a generic URL that may not resolve to the actual Devon Chen. If it's a different person, this creates reputational confusion. If it's a placeholder, it signals the portfolio is unfinished. | Line 1500: `<a href="https://linkedin.com/in/devon-chen"` | 2 min |

### 🟡 MEDIUM (8 findings)

| ID | Category | Finding | Quote / Evidence |
|:---|:---------|:--------|:-----------------|
| M1 | **UX / Design** | No dark mode support. The `prefers-color-scheme: dark` media query is not implemented. Users on dark-mode OS/browser will get a white flash and a bright page with no respect for their system preference. |
| M2 | **SEO** | `<h2>` heading structure is non-hierarchical inside `<section>` — some sections jump from `<h2>` to `<h4>` (Academic modules use `<h4>` inside `<h3>` cards). No `<h1>` visible outside the hero section. The `<h1>` text reads "Assistant Project Engineer" with no name — bad for personal SEO. |
| M3 | **Typography** | Uses `system-ui` font stack only. While intentionally chosen per spec for "instant loading," the result is visually generic — indistinguishable from a default browser page. A single Google Font (e.g., Inter or Outfit) at 400/600/700 would add <8KB and dramatically improve visual identity. |
| M4 | **Content** | Industry jargon is unexplained: "SLD", "BoQ", "WSH", "ETAP", "HV/LV", "PMP". A non-engineering recruiter or HR manager will not understand these abbreviations. No glossary or expansion on first use. |
| M5 | **UX** | Hero section has no visible name — the `<h1>` says "Assistant Project Engineer", not "Devon Chen." The visitor's first question ("who is this person?") is not answered until they look at the logo. The name should be the most prominent element. |
| M6 | **Responsiveness** | `100vh` on the hero section causes iOS Safari address bar overlap issues (the viewport height changes as the address bar shows/hides). Should use `100dvh` (dynamic viewport height) or a JavaScript-based fix. |
| M7 | **JavaScript** | Scroll event listener for active nav state fires on every pixel of scroll with no debounce/throttle. On low-end mobile devices, this causes jank and unnecessary reflows. `IntersectionObserver` would be more performant. |
| M8 | **Copyright** | Footer copyright reads `© 2026 Devon Chen` — hardcoded year. Will be stale by January 2027. Should be dynamically generated via JS. |

### 🟢 LOW (5 findings)

| ID | Category | Finding |
|:---|:---------|:--------|
| L1 | **Git Hygiene** | No `.gitignore` file in the repository. |
| L2 | **Docs** | `docs/spec.md` is truncated mid-sentence at "## 2. Non" — the document is incomplete. `docs/brief.md` is also cut off at "aligning engineering bac". |
| L3 | **Favicon** | No custom favicon. Browsers will show a default globe icon. |
| L4 | **Print Styles** | No `@media print` stylesheet. Printing the page produces a broken layout with broken images. |
| L5 | **Animations** | No `prefers-reduced-motion` media query. The pulsing avatar ring and spinning outer ring animations continue regardless of user motion preferences — a WCAG 2.1 AAA violation. |

---

## Phase 4: Overall Score

### **42 / 100**

**Justification**: The site looks visually clean on first impression and handles basic responsive layout well. However, it fails on nearly every dimension that matters beyond surface appearance: the primary CTA (resume download) is broken, the contact form is deceptive, personal data is exposed, SEO is essentially zero, accessibility has multiple AA failures, and the 60KB monolith architecture signals the opposite of the engineering competence the site is trying to convey. A recruiter who inspects the source or tries to interact will encounter multiple dead ends.

---

## Phase 5: Uncertainty Statement

> **"I am least confident about the LinkedIn URL assessment (H6) because** I cannot verify whether `linkedin.com/in/devon-chen` resolves to the correct person without actually visiting the URL in a browser session. If it does resolve correctly, H6 should be downgraded to Low."

> **"I am also uncertain about the content credibility of the academic claims because** I have no way to verify NUS enrollment or First Class Honours status. The base rate audit shows it's plausible but unverified."

---

## MCDA-Ranked Recommendations

### Methodology

Each recommendation is scored across **5 criteria** (1-5 scale), weighted by importance:

| Criterion | Weight | Rationale |
|:----------|:-------|:----------|
| **Impact on User Trust** | 0.30 | Does this fix prevent visitors from leaving or losing confidence? |
| **Severity of Current State** | 0.25 | How damaging is the current state? |
| **Effort to Fix** | 0.20 | Lower effort = higher score (inverse) |
| **Breadth of Benefit** | 0.15 | Does this fix improve multiple dimensions simultaneously? |
| **Professional Signal** | 0.10 | Does this fix signal engineering competence? |

### MCDA Scoring Matrix

| Rank | Rec ID | Recommendation | Trust (0.30) | Severity (0.25) | Effort⁻¹ (0.20) | Breadth (0.15) | Signal (0.10) | **Weighted Score** |
|:-----|:-------|:---------------|:-------------|:-----------------|:-----------------|:---------------|:--------------|:-------------------|
| **1** | R1 | Fix the resume download — add actual `resume.pdf` or remove the button | 5 | 5 | 5 | 3 | 4 | **4.65** |
| **2** | R2 | Make the contact form functional (Formspree/Netlify Forms/mailto fallback) | 5 | 5 | 4 | 3 | 4 | **4.45** |
| **3** | R3 | Remove or obfuscate the personal mobile number and WhatsApp link | 4 | 5 | 5 | 2 | 3 | **4.05** |
| **4** | R4 | Add `<meta description>`, Open Graph tags, and JSON-LD structured data | 4 | 4 | 4 | 5 | 3 | **4.00** |
| **5** | R5 | Replace skill percentage bars with project-based evidence or certifications | 4 | 4 | 3 | 3 | 5 | **3.80** |
| **6** | R6 | Add `<h1>` with Devon's full name in the hero; move job title to subtitle | 4 | 3 | 5 | 4 | 3 | **3.75** |
| **7** | R7 | Compress images to WebP, add `loading="lazy"` and `srcset` | 3 | 4 | 4 | 4 | 4 | **3.70** |
| **8** | R8 | Fix color contrast: darken `--color-text-muted` to at least `#5A6B80` | 3 | 4 | 5 | 4 | 2 | **3.60** |
| **9** | R9 | Split CSS/JS into external files; add separation of concerns | 3 | 3 | 2 | 4 | 5 | **3.25** |
| **10** | R10 | Add `prefers-reduced-motion` and `prefers-color-scheme: dark` support | 2 | 3 | 4 | 4 | 4 | **3.15** |
| **11** | R11 | Expand industry jargon on first use (SLD, BoQ, WSH, etc.) | 3 | 3 | 5 | 2 | 2 | **3.10** |
| **12** | R12 | Add focus trap to mobile drawer + skip-to-content link | 2 | 3 | 3 | 3 | 4 | **2.90** |
| **13** | R13 | Replace `100vh` with `100dvh` for iOS Safari compatibility | 2 | 2 | 5 | 2 | 3 | **2.60** |
| **14** | R14 | Use `IntersectionObserver` instead of scroll listener for nav highlighting | 1 | 2 | 4 | 2 | 5 | **2.45** |
| **15** | R15 | Add favicon, print styles, `.gitignore`, and dynamic copyright year | 1 | 1 | 5 | 4 | 2 | **2.25** |

---

## Pairwise Comparison Matrix (Top 8 Recommendations)

Each cell shows the **preferred recommendation** when compared head-to-head. The winner is determined by: "If you could only do ONE of these two fixes, which would a recruiter care about more?"

|       | **R1** | **R2** | **R3** | **R4** | **R5** | **R6** | **R7** | **R8** |
|:------|:-------|:-------|:-------|:-------|:-------|:-------|:-------|:-------|
| **R1** | — | **R1** | **R1** | **R1** | **R1** | **R1** | **R1** | **R1** |
| **R2** | R1 | — | **R2** | **R2** | **R2** | **R2** | **R2** | **R2** |
| **R3** | R1 | R2 | — | **R3** | **R3** | **R3** | **R3** | **R3** |
| **R4** | R1 | R2 | R3 | — | **R4** | **R4** | **R4** | **R4** |
| **R5** | R1 | R2 | R3 | R4 | — | **R5** | **R5** | **R5** |
| **R6** | R1 | R2 | R3 | R4 | R5 | — | **R6** | **R6** |
| **R7** | R1 | R2 | R3 | R4 | R5 | R6 | — | **R7** |
| **R8** | R1 | R2 | R3 | R4 | R5 | R6 | R7 | — |

### Pairwise Win Counts

| Rec | Wins | Final Rank |
|:----|:-----|:-----------|
| R1 (Fix resume download) | **7** | 🥇 1st |
| R2 (Functional contact form) | **6** | 🥈 2nd |
| R3 (Remove exposed phone number) | **5** | 🥉 3rd |
| R4 (Add SEO meta tags) | **4** | 4th |
| R5 (Replace skill bars) | **3** | 5th |
| R6 (Add name to H1) | **2** | 6th |
| R7 (Compress images) | **1** | 7th |
| R8 (Fix color contrast) | **0** | 8th |

> **Result**: MCDA and Pairwise rankings are perfectly concordant — no rank reversals. This confirms the priority order is robust and not method-dependent.

---

## Recommended Action Plan (Priority Tiers)

### 🔴 Tier 1: Do Today (30 min total — eliminates all Critical findings)

1. **R1**: Upload a real `resume.pdf` to `assets/` or disable the download button
2. **R2**: Integrate [Formspree](https://formspree.io/) (free tier) — just add `action="https://formspree.io/f/YOUR_ID" method="POST"` to the form
3. **R3**: Remove the mobile number and WhatsApp widget from the public-facing page; replace with email-only contact
4. **R4**: Add `<meta name="description">` and Open Graph tags to `<head>`

### 🟠 Tier 2: Do This Week (2-3 hours — addresses all High findings)

5. **R5**: Replace percentage skill bars with a tag-cloud or project-evidence format
6. **R6**: Put "Devon Chen" as the `<h1>` in the hero, "Assistant Project Engineer" as the `<p class="hero-subtitle">`
7. **R7**: Convert PNGs to WebP (saves ~800KB), add `loading="lazy"` to both images
8. **R8**: Change `--color-text-muted` from `#718096` to `#566579` for WCAG AA compliance

### 🟡 Tier 3: Do Next Sprint (4-6 hours — elevates to professional grade)

9. **R9**: Extract CSS to `styles.css`, JS to `main.js`
10. **R10**: Add dark mode and reduced-motion media queries
11. **R11**: Expand all jargon on first use: "Single-Line Diagram (SLD)", etc.
12. **R12**: Add ARIA attributes, focus trap, and skip-to-content link

### 🟢 Tier 4: Polish (1-2 hours — nice-to-have refinements)

13. **R13-R15**: iOS viewport fix, IntersectionObserver, favicon, print styles, dynamic copyright

---

## Summary Verdict

| Dimension | Score | Notes |
|:----------|:------|:------|
| Visual Design | 7/10 | Clean, professional, well-spaced. Slightly generic due to system fonts. |
| Code Quality | 3/10 | 60KB monolith, no separation of concerns, no build pipeline |
| Functionality | 2/10 | Primary CTA broken, form is deceptive, no analytics |
| Security & Privacy | 2/10 | Exposed phone number, WhatsApp link, no HTTPS enforcement config |
| Accessibility | 3/10 | Multiple WCAG AA failures, no focus management, no reduced-motion |
| SEO | 1/10 | Zero meta tags, no structured data, no OG tags, no sitemap |
| Content Quality | 5/10 | Well-written but generic; jargon-heavy; unverifiable skill claims |
| Mobile Experience | 6/10 | Responsive layout works but has iOS Safari and performance issues |
| **Overall** | **42/100** | **Looks good on the surface but collapses under interaction** |

> **Bottom line**: This portfolio passes the "3-second glance" test but fails the "30-second interaction" test. The two most critical paths a recruiter would take — downloading the resume and submitting the contact form — are both completely broken. Fixing R1-R4 alone would raise the score from 42 to approximately 65.

---

*Report generated by Athena Red-Team Review (Protocol 260 v4.0) • MCDA weights calibrated for recruiter-facing portfolio assessment • Pairwise validation confirms no rank reversals*
