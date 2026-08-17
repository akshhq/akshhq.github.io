# Maurice Solar Energy Solutions — Website

A responsive, multi-page corporate website for **Maurice Solar Energy Solutions**, a Himachal Pradesh-based solar energy company. The website presents the company's solar solutions, products, projects, EPC capabilities, company background, and contact/lead-generation flow through a modern clean-tech visual system.

The website is implemented as a **static HTML/CSS/JavaScript project** and does not require a traditional backend, database, package manager, or build step.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Pages](#pages)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [How the Website Works](#how-the-website-works)
- [Interactive Solar Calculator](#interactive-solar-calculator)
- [Solar System Visualizer](#solar-system-visualizer)
- [Lead Generation and WhatsApp Integration](#lead-generation-and-whatsapp-integration)
- [Responsive Design](#responsive-design)
- [Assets](#assets)
- [Content and Company Information](#content-and-company-information)
- [Local Development](#local-development)
- [Deployment](#deployment)
- [Customization Guide](#customization-guide)
- [Updating Contact Information](#updating-contact-information)
- [Updating Calculator Logic](#updating-calculator-logic)
- [Adding or Removing Pages](#adding-or-removing-pages)
- [Adding Project Images](#adding-project-images)
- [SEO and Metadata](#seo-and-metadata)
- [Accessibility Considerations](#accessibility-considerations)
- [Performance Considerations](#performance-considerations)
- [Browser Compatibility](#browser-compatibility)
- [Important Notes](#important-notes)
- [Future Enhancements](#future-enhancements)
- [Credits and Source Material](#credits-and-source-material)

---

## Overview

The Maurice Solar website is designed as a premium corporate/engineering website rather than a simple brochure page.

The experience focuses on:

- Solar energy solutions
- Rooftop solar installations
- Ground-mounted solar power plants
- Solar water heating
- Solar LED street lighting
- Turnkey EPC services
- Operations and maintenance
- Project showcases
- Product information
- Solar savings estimation
- WhatsApp-based quote generation
- Responsive navigation and mobile usability
- High-quality project and product imagery

The visual direction combines a **clean technology aesthetic** with references to Maurice Solar's Himalayan/Himachal Pradesh identity.

The company profile supplied with the project states that Maurice Solar Energy Solutions was established in Himachal Pradesh in 2017, has completed 2,000+ rooftop solar water heater projects, and has a presence in Himachal Pradesh and Delhi. It also identifies the business as Maurice Solar Private Limited and lists the company website as `https://mauricesolar.com`.

---

## Key Features

### 1. Multi-page website

The project contains separate pages for:

- Home
- Solutions
- Products
- Projects
- EPC Services
- About Us
- Contact

This allows each major business area to have its own URL and content structure.

### 2. Responsive navigation

The desktop navigation includes:

- Solutions
- Projects
- Products
- EPC Services
- About Us
- Get a Quote

On smaller screens, the navigation switches to a mobile drawer menu.

### 3. Scroll-aware navigation

The navigation changes appearance after the user begins scrolling.

The site also includes a small top-of-page scroll progress indicator.

### 4. Animated statistics

Elements marked with `data-count` are animated when they enter the viewport.

This uses `IntersectionObserver` and `requestAnimationFrame` rather than an external animation library.

### 5. Interactive solar savings calculator

The homepage includes an interactive calculator where visitors can:

- Select Residential or Commercial/Hotel
- Adjust their monthly electricity bill
- View recommended solar capacity
- View estimated annual savings
- View estimated 25-year savings
- View approximate required roof area
- View estimated annual CO₂ reduction
- See a residential subsidy message or commercial tax-depreciation message
- Generate a personalized WhatsApp quote message

### 6. Interactive solar system visualizer

The website explains the flow of a solar system through interactive nodes.

Two modes are available:

- On-grid
- Off-grid

The nodes change depending on the selected system type.

### 7. Product tab interface

The Products page uses JavaScript-powered tabs to switch between product categories without requiring a separate page reload for every product section.

### 8. Project image lightbox

Project/gallery images can be opened in a larger modal view.

The lightbox supports:

- Click-to-open
- Click-outside-to-close
- Close button
- Escape-key close

### 9. WhatsApp quote flow

The website uses WhatsApp as the primary lead-conversion mechanism.

Users can:

- Open a general WhatsApp quote
- Send a calculator-generated feasibility request
- Submit the Contact page form and have the entered details formatted into a WhatsApp message

### 10. Reduced-motion support

The JavaScript checks the browser's:

`prefers-reduced-motion`

setting.

When reduced motion is requested, animated number counters skip the animation and display their final values directly.

---

# Pages

## `index.html` — Home

The homepage acts as the primary marketing and conversion page.

Major sections include:

- Hero section
- Company trust indicators
- Product/service marquee
- Company introduction
- Interactive solar savings calculator
- Interactive solar energy visualizer
- Product/service highlights
- Track-record statistics
- Solar benefits
- Project showcase
- CTA sections
- Footer/contact information

The hero communicates the brand positioning around clean energy, engineering, Himalayan resilience, and long-term performance.

---

## `solutions.html` — Solar Solutions

This page presents the company's major solar solution categories.

The content covers areas such as:

- Rooftop solar
- Ground-mounted solar
- Solar water heating
- Solar street lighting
- Other solar applications
- Residential solutions
- Commercial/industrial applications

The page is intended to answer:

> "What type of solar solution is suitable for my requirement?"

---

## `products.html` — Products

The Products page presents the major hardware/product categories used or offered by the company.

The project includes content for:

- Solar panels
- Solar inverters
- Solar water heaters
- Solar LED street lights
- Other solar products

The product sections contain technical specifications, features, benefits, and product imagery.

---

## `projects.html` — Projects

The Projects page is designed as a portfolio/case-study section.

It presents selected project examples and installation imagery.

The project content includes examples such as:

### Bhuttico — Kullu, Himachal Pradesh

- 22 kWh rooftop solar power plant
- Approx. 18,000–22,000 kWh annual generation
- Approx. ₹1.15L–₹1.45L annual savings
- Approx. 15–17 tons CO₂ reduction/year

### Himcapes' Law College — Una, Himachal Pradesh

- 55 kWh rooftop solar power plant
- Approx. 275–325 kWh/day generation
- Approx. ₹5L–₹7L annual revenue
- Approx. 80–95 tons CO₂ reduction/year

### Jai Maa Bhuvaneshwari — Una, Himachal Pradesh

- 5,000 kWh solar power park
- Ongoing project
- Approx. 25,000–30,000 kWh/day generation
- Approx. ₹3.2 Cr–₹4.9 Cr annual revenue
- Approx. 7,300–8,700 tons CO₂ reduction/year

These values are presented as project-profile information and should be verified before being used as current commercial claims.

---

## `epc.html` — EPC Services

This page presents Maurice Solar's end-to-end Engineering, Procurement & Construction offering.

The workflow is divided into:

1. Engineering
2. Procurement
3. Project Execution
4. Testing & Commissioning
5. Operations & Maintenance

The EPC content includes:

- Site feasibility
- Energy assessment
- Rooftop and ground-mounted system design
- Shadow analysis
- Generation forecasting
- Electrical and structural engineering
- Procurement
- Quality control
- MNRE/IEC compliance references
- Civil, structural and electrical installation
- Grid synchronization
- Documentation and handover
- On-site training
- Preventive maintenance
- Breakdown maintenance
- Performance monitoring
- Inspection and cleaning

---

## `about.html` — About Us

The About page covers:

- Company background
- Company history
- Leadership
- Vision
- Company's approach
- Company milestones
- Trust/certification information
- Long-term commitment

The supplied company profile describes:

- Maurice Solar Private Limited
- Establishment in 2017
- Himachal Pradesh origin
- 2,000+ solar water heater installations
- 355+ on-grid solar systems
- Presence in Himachal Pradesh and Delhi
- National vendor status under PM Surya Ghar Muft Bijli Yojana

---

## `contact.html` — Contact

The Contact page provides the main conversion form.

Visitors can enter:

- Name
- Phone
- Email
- City/site
- Property type
- Required solution
- Monthly electricity bill
- Additional notes

The form does not submit to a server.

Instead, JavaScript formats the information into a structured WhatsApp message and opens WhatsApp for the user.

---

# Technology Stack

This is intentionally a lightweight static website.

| Technology | Purpose |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | Layout, responsive design, visual styling and animations |
| Vanilla JavaScript | Interactivity and dynamic behaviour |
| SVG | Inline icons and UI graphics |
| Google Fonts | DM Sans and Manrope typography |
| JPEG | Primary image format |
| WebP | Optimized image format |
| WhatsApp URL API | Lead/quote conversion |
| IntersectionObserver | Viewport-triggered animations |

### No framework required

The website does **not** currently depend on:

- React
- Next.js
- Vue
- Angular
- Bootstrap
- Tailwind CSS
- jQuery
- Node.js
- Express
- PHP
- MySQL/PostgreSQL
- Firebase
- WordPress

There is no build process.

---

# Project Structure

```text
Maurice Solar/
│
├── index.html
├── about.html
├── solutions.html
├── products.html
├── projects.html
├── epc.html
├── contact.html
│
├── style.css
├── script.js
│
└── assets/
    ├── logo_mark.png
    ├── favicon.png
    ├── favicon-32.png
    │
    ├── solar_panel_product.jpeg
    ├── inverter_product.jpeg
    ├── water_heater_product.jpeg
    ├── streetlight_product.jpeg
    │
    ├── panels_field-*.jpeg
    ├── panels_field-*.webp
    ├── groundmount_field-*.jpeg
    ├── groundmount_field-*.webp
    │
    ├── project_bhuttico-*.jpeg
    ├── project_bhuttico-*.webp
    ├── project_lawcollege-*.jpeg
    ├── project_lawcollege-*.webp
    │
    ├── expertise*-*.jpeg
    ├── expertise*-*.webp
    ├── epc*-*.jpeg
    ├── epc*-*.webp
    │
    ├── gallery_*.jpeg
    ├── gallery_*.webp
    │
    └── team_*.jpeg
```

The actual asset folder contains additional responsive image variants.

---

# How the Website Works

## 1. Page loading

Every HTML page loads:

```html
<link rel="stylesheet" href="style.css">
```

and the shared JavaScript:

```html
<script src="script.js"></script>
```

The JavaScript starts after:

```javascript
document.addEventListener("DOMContentLoaded", () => {
    ...
});
```

This means the same interaction engine can safely be shared across all pages.

---

## 2. Shared navigation

Every page contains the same general navigation structure.

Navigation links point directly to the individual HTML files:

```text
solutions.html
projects.html
products.html
epc.html
about.html
contact.html
```

This makes the site compatible with simple static hosting.

---

## 3. Shared stylesheet

`style.css` contains the global design system.

The CSS defines:

- Brand colours
- Typography
- Spacing
- Border radii
- Shadows
- Buttons
- Cards
- Navigation
- Hero sections
- Forms
- Product sections
- Project galleries
- Responsive layouts
- Dark sections
- Mobile layouts
- Accessibility/focus styles

---

# Interactive Solar Calculator

The calculator is implemented completely in `script.js`.

It does not call an API.

## Inputs

The user can control:

### Property type

```text
Residential Home
Commercial / Hotel
```

### Monthly electricity bill

The slider currently ranges from:

```text
₹1,000
to
₹50,000
```

with:

```text
₹500
```

increments.

---

## Current calculation model

The JavaScript estimates the recommended capacity using:

### Residential

```text
recommended kW ≈ monthly bill / 1050
```

with a minimum of:

```text
1 kW
```

### Commercial

```text
recommended kW ≈ monthly bill / 950
```

with a minimum of:

```text
3 kW
```

The result is rounded to one decimal place.

---

## Annual savings

The current implementation estimates annual savings as:

```text
monthly bill × 12 × 0.90
```

This represents an assumed 90% offset.

---

## 25-year savings

The current implementation uses:

```text
annual savings × 25
```

This is a simple projection and does not model:

- tariff escalation
- system degradation
- maintenance cost
- financing
- inverter replacement
- inflation
- downtime
- changing net-metering rules
- actual site-specific generation

Therefore, it should be treated as an indicative website estimate rather than an engineering or financial quotation.

---

## Estimated roof area

The current calculation uses approximately:

```text
recommended kW × 90 sq.ft
```

---

## Estimated CO₂ reduction

The current implementation uses:

```text
recommended kW × 1.35
```

and displays the result in tons/year.

---

## Subsidy display

For residential calculations, the current interface displays:

- ₹30,000
- ₹60,000
- ₹78,000

depending on the calculated capacity.

For commercial calculations, it displays:

```text
40% Accelerated Tax Depr.
```

These values are embedded in the website's JavaScript.

**Important:** subsidy, taxation, net-metering and policy figures can change. Verify current government rules and company-approved commercial policy before using the calculator as a live financial tool.

---

# Solar System Visualizer

The homepage contains an interactive solar-system flow.

## On-grid mode

The current flow is:

```text
Solar Array
      ↓
DC Protection
      ↓
Smart Inverter
      ↓
AC Distribution
      ↓
Bi-Directional Grid
```

Each node contains an explanation.

The on-grid explanation includes concepts such as:

- DC generation
- DC protection
- DC-to-AC conversion
- Home loads
- Net metering
- Grid export

---

## Off-grid mode

The current flow is:

```text
Solar Array
      ↓
DCDB & MPPT
      ↓
Hybrid Inverter
      ↓
Battery Storage
      ↓
Total Independence
```

The off-grid explanation focuses on:

- Independent solar generation
- MPPT
- Hybrid inverter management
- Battery storage
- Off-grid power availability

---

# Lead Generation and WhatsApp Integration

The site currently uses WhatsApp instead of a backend form-processing system.

The configured number in the JavaScript is:

```text
+91 98165 91699
```

This matches the contact number listed in the supplied company profile.

The website uses URLs in the form:

```text
https://wa.me/919816591699
```

---

## Calculator WhatsApp flow

When a visitor uses the calculator, JavaScript creates a message containing:

- Monthly bill
- Property type
- Recommended system size
- Estimated annual savings
- Request for a feasibility quote

The WhatsApp button URL is updated dynamically.

---

## Contact form WhatsApp flow

When the contact form is submitted:

1. JavaScript prevents normal form submission.
2. Form values are collected with `FormData`.
3. A structured message is generated.
4. WhatsApp opens in a new browser tab/window.
5. The form is replaced with a success state.

The generated message contains:

```text
Name
Phone
Email
City/Site
Property
Solution
Monthly Bill
Notes
```

---

## Backend limitation

There is currently **no database**.

Therefore:

- No leads are stored on the website server.
- No admin dashboard exists.
- No email notification is sent by the site itself.
- No CRM integration exists.
- No form submissions are recoverable if the visitor does not complete the WhatsApp action.

For production lead management, a backend or third-party form service can be added later.

---

# Responsive Design

The stylesheet includes responsive breakpoints around:

```text
1024px
768px
480px
```

The design adapts for:

- Desktop
- Laptop/tablet
- Mobile
- Small mobile screens

Responsive behaviour includes:

- Collapsing navigation
- Mobile navigation drawer
- Flexible grids
- Responsive typography
- Responsive hero sections
- Smaller spacing
- Mobile-friendly buttons
- Responsive image sizing
- Reflowed product/project layouts

---

# Assets

The website uses both JPEG and WebP versions of many images.

A typical responsive asset family looks like:

```text
example-lg.jpeg
example-lg.webp
example-sm.jpeg
example-sm.webp
```

The naming convention generally indicates:

- `lg` → larger desktop-oriented asset
- `sm` → smaller/mobile-oriented asset
- `jpeg` → JPEG version
- `webp` → WebP version

---

## Main asset categories

### Brand assets

```text
logo_mark.png
favicon.png
favicon-32.png
```

### Product assets

```text
solar_panel_product.jpeg
inverter_product.jpeg
water_heater_product.jpeg
streetlight_product.jpeg
```

### Project assets

```text
project_bhuttico-*
project_lawcollege-*
gallery_*
```

### EPC assets

```text
epc1-*
epc2-*
epc3-*
epc4-*
```

### Team assets

```text
team_abhishek.jpeg
team_harender.jpeg
team_samriti.jpeg
```

---

# Content and Company Information

The supplied company profile contains the following core company information used by the website:

**Business Name:** Maurice Solar Energy Solutions

**Company:** Maurice Solar Private Limited

**Established:** 2017

**Location:**

```text
15, V.P.O. Jia,
Tehsil Bhuntar,
District Kullu,
Himachal Pradesh - 175125
```

**CIN:**

```text
U74999HP2017PTC006598
```

**PAN:**

```text
AALCM0592R
```

**GSTIN:**

```text
02AALCM0592R1ZZ
```

**MSME UAM:**

```text
HP06A0000263
```

**Email:**

```text
solarmaurice@gmail.com
```

**Phone:**

```text
+91 98165 91699
```

**Website:**

```text
https://mauricesolar.com
```

The supplied profile also describes the company's presence in Himachal Pradesh and Delhi and its national-vendor status under the PM Surya Ghar Muft Bijli Yojana.

---

# Local Development

Because this is a static website, it can be opened directly in a browser.

## Option 1 — Open directly

Double-click:

```text
index.html
```

This is sufficient for basic testing.

However, using a local HTTP server is recommended.

---

## Option 2 — Python local server

If Python is installed:

```bash
cd "Maurice Solar"
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

---

## Option 3 — VS Code Live Server

If using Visual Studio Code:

1. Open the project folder.
2. Install the Live Server extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

---

# Deployment

The website can be deployed on almost any static hosting service.

Possible options include:

- College/institutional web hosting
- cPanel hosting
- Apache
- Nginx
- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- AWS S3 static hosting

No server-side runtime is required for the current version.

---

## Traditional hosting

For Apache/cPanel-style hosting, upload:

```text
index.html
about.html
solutions.html
products.html
projects.html
epc.html
contact.html
style.css
script.js
assets/
```

to the appropriate public web directory.

Make sure the relative folder structure is preserved.

---

## Important hosting requirement

The following structure must remain valid:

```text
/index.html
/style.css
/script.js
/assets/...
```

Do not move the `assets` directory somewhere else unless all image paths are updated.

---

# Customization Guide

## Change the logo

Replace:

```text
assets/logo_mark.png
```

while keeping the same filename, or update references to the new filename.

---

## Change the favicon

Replace:

```text
assets/favicon.png
assets/favicon-32.png
```

and update the HTML `<link rel="icon">` reference if necessary.

---

## Change brand colours

The main colours are defined near the top of `style.css`.

Examples:

```css
--blue: #0284c7;
--blue-dark: #0369a1;
--solar: #f59e0b;
--green: #10b981;
```

Changing these variables will update a large portion of the site's visual system.

---

## Change typography

The site imports:

```text
DM Sans
Manrope
```

from Google Fonts.

The font imports are located in the `<head>` of the HTML pages.

If the site must work without Google Fonts, local font files can be added and the CSS can be converted to `@font-face`.

---

# Updating Contact Information

The phone number is used in multiple locations.

Search the project for:

```text
919816591699
```

and:

```text
+91 98165 91699
```

Update all occurrences if the company's WhatsApp/contact number changes.

The primary JavaScript locations include:

- Calculator WhatsApp link
- Calculator-generated WhatsApp message
- Contact form WhatsApp flow

Also update visible phone numbers in the HTML pages.

---

## Updating Email

Search for:

```text
solarmaurice@gmail.com
```

and update all visible instances if required.

---

# Updating Calculator Logic

The main calculator function is:

```javascript
function updateCalculator()
```

located in:

```text
script.js
```

The key variables are:

```javascript
monthlyBill
recommendedKw
annualSavings
lifetimeSavings
requiredAreaSqFt
annualCo2Tons
subsidyText
```

For example:

```javascript
const annualSavings = Math.round(monthlyBill * 12 * 0.90);
```

Changing this formula changes the displayed savings.

Before modifying the calculator for live commercial use, confirm:

- Electricity tariff assumptions
- Expected annual generation
- Location-specific solar irradiation
- System losses
- Panel degradation
- Net-metering policy
- Subsidy eligibility
- Current government scheme rules
- Installation costs
- O&M costs

The calculator should ideally be presented as an **indicative estimate**, not a final quotation.

---

# Adding or Removing Pages

To add a new page:

1. Create a new `.html` file.
2. Copy the shared navigation.
3. Link `style.css`.
4. Link `script.js`.
5. Add the page to the navigation.
6. Add the required content and assets.
7. Test desktop and mobile layouts.

Example:

```text
services.html
```

Then add:

```html
<a href="services.html">Services</a>
```

to both desktop and mobile navigation.

---

# Adding Project Images

Project/gallery images are stored inside:

```text
assets/
```

A new project image can be added using a descriptive filename, for example:

```text
project_new-installation-lg.webp
project_new-installation-sm.webp
```

Then reference it from the HTML:

```html
<img
  src="assets/project_new-installation-lg.webp"
  alt="Maurice Solar rooftop installation"
/>
```

For accessibility and SEO, use meaningful `alt` text instead of generic values such as:

```text
image1
photo
solar
```

---

# SEO and Metadata

Each main page has its own `<title>`.

The homepage also contains a meta description similar to:

```html
<meta
  name="description"
  content="Maurice Solar Energy Solutions — Tier-1 rooftop solar, ground-mounted power plants, solar water heaters, and EPC services across North India and Himachal Pradesh."
/>
```

For production deployment, consider adding:

- Open Graph metadata
- Twitter/X card metadata
- Canonical URLs
- Structured data / JSON-LD
- Sitemap
- Robots.txt
- Organization schema
- LocalBusiness schema where appropriate
- Individual service schema where appropriate

---

# Accessibility Considerations

The website includes several accessibility-oriented practices:

- Semantic HTML structure
- `alt` attributes for images
- `aria-label` on important controls
- Keyboard Escape support for the lightbox
- Visible focus styling through `:focus-visible`
- Reduced-motion detection
- Mobile-friendly controls

For a production-grade accessibility audit, test with:

- Keyboard-only navigation
- Screen readers
- Lighthouse
- axe DevTools
- Colour contrast tools

---

# Performance Considerations

The project already includes several performance-oriented choices.

### WebP assets

Many images have WebP versions, reducing image transfer size compared with JPEG.

### Lazy loading

Non-critical images can use:

```html
loading="lazy"
```

The hero image intentionally uses eager loading because it is above the fold.

### No JavaScript framework

Using vanilla JavaScript keeps the runtime footprint small.

### No build pipeline

The site can be deployed without dependency installation or bundling.

### Passive scroll listener

The scroll event listener is registered with:

```javascript
{ passive: true }
```

which helps browser scrolling performance.

---

# Browser Compatibility

The site uses modern browser features including:

- CSS custom properties
- CSS Grid
- Flexbox
- `IntersectionObserver`
- `requestAnimationFrame`
- `FormData`
- `URL`/URL encoding
- `prefers-reduced-motion`
- Backdrop blur where supported

Current versions of modern browsers should be supported, including:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
- Mobile Chrome
- Mobile Safari

Older browsers may require graceful degradation or polyfills.

---

# Important Notes

## 1. No backend

The current website is purely static.

There is no:

```text
Database
Authentication
Admin panel
CMS
Lead storage
Server-side form handler
```

The website therefore cannot provide a secure admin interface for changing content without modifying the files.

---

## 2. WhatsApp is the current lead mechanism

The form does not permanently store submissions.

A future production implementation could add:

```text
Website Form
      ↓
Backend/API
      ↓
Database / CRM
      ↓
Email + WhatsApp + Admin Dashboard
```

---

## 3. Calculator values are estimates

The solar calculator uses simplified formulas implemented in JavaScript.

It should not be treated as a substitute for:

- Site survey
- Shadow analysis
- Electrical design
- Structural assessment
- Generation simulation
- Financial feasibility study
- Official subsidy calculation
- Final EPC quotation

---

## 4. Policy-dependent information should be reviewed

Government schemes, subsidy slabs, net-metering rules, taxation, and electricity tariffs may change.

The website's policy-related values should be reviewed before every production release.

---

## 5. External Google Fonts

The current design loads Google Fonts from:

```text
fonts.googleapis.com
fonts.gstatic.com
```

If the hosting environment requires all assets to be self-hosted, replace these with locally hosted font files.

---

# Future Enhancements

The current static architecture is suitable for a company showcase website, but several upgrades could make it significantly more powerful.

## Content Management System

Add a CMS/admin panel so authorized company staff can update:

- Projects
- Products
- News
- Testimonials
- Events
- Company statistics
- Gallery images

without editing HTML.

---

## Admin Dashboard

A future dashboard could support:

```text
Login
  ↓
Admin Dashboard
  ├── Projects
  ├── Products
  ├── Leads
  ├── Gallery
  ├── Company Information
  └── Website Settings
```

---

## Lead Management

Instead of only opening WhatsApp, the contact form could also save leads.

Possible architecture:

```text
Frontend
   ↓
API
   ↓
Database
   ↓
Admin Dashboard
```

Potential lead fields:

- Name
- Phone
- Email
- City
- Property type
- System type
- Monthly bill
- Estimated capacity
- Message
- Submission time
- Lead status

---

## Solar Feasibility Tool

The current calculator can be expanded into a proper feasibility tool using:

- Monthly electricity consumption
- Location
- Roof area
- Roof orientation
- Roof tilt
- Shadow conditions
- Electricity tariff
- System type
- Battery requirement
- Financing
- Subsidy eligibility

This would produce a more useful preliminary proposal.

---

## Project CMS

A project CMS could allow authorized users to create:

```text
Project Name
Location
Capacity
Client
Project Type
Annual Generation
Annual Savings
CO₂ Reduction
Project Status
Images
Description
```

and publish it automatically to `projects.html` or a database-driven project page.

---

## Analytics

Add privacy-conscious analytics to measure:

- Page views
- Calculator usage
- Quote-button clicks
- WhatsApp clicks
- Product interest
- Project gallery interaction
- Contact form starts
- Contact form completion

This would help determine which parts of the website generate the most business enquiries.

---

# Recommended Production Checklist

Before deploying the website publicly:

- [ ] Verify company name and legal information
- [ ] Verify phone number
- [ ] Verify email address
- [ ] Verify company website URL
- [ ] Verify all product specifications
- [ ] Verify project statistics
- [ ] Verify subsidy information
- [ ] Verify tax/depreciation claims
- [ ] Verify net-metering statements
- [ ] Verify all leadership information
- [ ] Replace placeholder/temporary imagery if any
- [ ] Test every navigation link
- [ ] Test every WhatsApp button
- [ ] Test contact form
- [ ] Test calculator on mobile
- [ ] Test calculator edge cases
- [ ] Test lightbox
- [ ] Test mobile navigation
- [ ] Test keyboard navigation
- [ ] Run Lighthouse
- [ ] Check image loading performance
- [ ] Add production SEO metadata
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Configure a custom 404 page
- [ ] Verify HTTPS
- [ ] Test on real Android and iOS devices
- [ ] Verify final domain paths
- [ ] Confirm legal/commercial approval of public claims

---

# Credits and Source Material

This website's company-specific content is based on the supplied **Maurice Solar Energy Solutions — Company Profile**.

The company profile contains 24 pages covering:

- Company overview
- General company information
- Geographic presence
- Certifications
- Company history
- Project highlights
- Rooftop and off-grid/on-grid solar explanations
- Ground-mounted solar
- Solar panel specifications
- Solar inverter specifications
- Solar water heaters
- Solar LED street lights
- Other solar products
- EPC services
- Project expertise
- Company leadership
- Site images
- Contact information

The website implementation in this repository is a separate static web presentation of that business information, with additional interactive UI and estimation features implemented in JavaScript.

---

# License / Usage

No explicit open-source license is included with the project.

Unless a separate license or written permission exists, treat the website source code, branding, company information, logos, photographs, and other proprietary assets as belonging to their respective owners.

Do not redistribute company branding, project photographs, or commercial content without appropriate permission.

---

## Contact

**Maurice Solar Energy Solutions**

Maurice Solar Private Limited  
Himachal Pradesh, India

**Email:** `solarmaurice@gmail.com`

**Phone:** `+91 98165 91699`

**Website:** `https://mauricesolar.com`

---

**Project type:** Static multi-page corporate website  
**Primary domain:** `https://mauricesolar.com`  
**Frontend:** HTML5 + CSS3 + Vanilla JavaScript  
**Backend:** None  
**Database:** None  
**Lead channel:** WhatsApp
