# Khalsa Medicos - Medical Store Web Application
> **Cloud Computing College Project**  
> Pure Frontend Static Web Application (HTML5, CSS3, Vanilla JavaScript)  
> Designed for Cloud Deployment on Netlify, GitHub Pages, Vercel, Render, or Firebase Hosting.

---

## 📌 1. Project Overview

**Khalsa Medicos (ਖ਼ਾਲਸਾ ਮੈਡੀਕੋਜ਼)** is a modern, responsive, and trustworthy pharmacy web application built specifically for a college project demonstration in **Cloud Computing**. 

The project delivers an authentic medical store experience featuring:
- Real store photographs showcasing the actual brick-and-mortar pharmacy, dispensing counter, and specialized cold-chain medication refrigerators.
- High-resolution real healthcare and diagnostic product imagery.
- Live client-side product search, instant category filtering, and sorting.
- Persistent shopping cart with quantities, GST calculation, free shipping thresholds, and simulated checkout receipt.
- Clearly designated **Prescription Medicines Policy** complying with pharmaceutical dispensing standards (Schedule H / H1 drugs).
- Client-side validated contact inquiry form generating unique tracking reference tickets.
- Clearly labelled **Demo Login Portal** with 1-click credential auto-fill for customer and pharmacist roles.

---

## 🏗️ 2. Architectural Design & Philosophy

This project adheres strictly to **Static Cloud Computing Principles**:
1. **Frontend-Only Architecture:** Zero backend dependencies, no server-side databases (MySQL/PostgreSQL), and no server-side runtimes (PHP/Node runtime needed in production).
2. **Standard Web Technologies:** Built strictly with standard **HTML5**, **CSS3**, and **Vanilla JavaScript (ES6+)**.
3. **Edge & CDN Ready:** The entire website compiles to static assets ready to be served from global Edge Content Delivery Networks (CDNs) with near-instant Time to First Byte (TTFB) and zero server maintenance overhead.

---

## 📂 3. Project Folder Structure

```
khalsa-medicos/
│
├── index.html                  # Home Page (Hero, store introduction, categories, real store showcase)
├── products.html               # Products Catalog (Search bar, category filters, cart, prescription tags)
├── login.html                  # Demo Authentication Page (Show/hide password, client-side validation)
├── contact.html                # About & Contact Page (Address, opening hours, Google Maps, validated inquiry form)
│
├── css/
│   └── style.css               # Shared medical-themed stylesheet (CSS Variables, flex/grid, mobile responsive)
│
├── public/
│   ├── js/
│   │   ├── main.js             # Shared UI controls (Mobile drawer, toasts, sticky header, user badge)
│   │   ├── products.js         # Catalog data, real photos, live search, filter pills, quick-view modal
│   │   ├── cart.js             # LocalStorage shopping cart, quantity calculations, simulated checkout
│   │   ├── login.js            # Demo credential auto-filler, password toggle, form validation, session mock
│   │   └── contact.js          # Inquiry form validation, mobile phone verification, ticket generator
│   ├── css/
│   │   └── style.css           # Medical-themed stylesheet (Vite copies directly to dist/css/)
│   └── assets/aistudio/        # Authentic store photographs (Storefront, counter, racks, cold storage)
│       ├── WhatsApp_Image_2026-10-30_at_6.51.15_PM_e7895910.jpeg      (Main storefront & Leeford sign)
│       ├── WhatsApp_Image_2026-10-30_at_6.51.16_PM_e2e293ed.jpeg      (Interior racks & refrigerator)
│       ├── WhatsApp_Image_2026-10-30_at_6.51.15_PM__1__11ef614a.jpeg  (Pharmacist desk & window)
│       ├── WhatsApp_Image_2026-10-30_at_6.51.15_PM__2__ec6419a7.jpeg  (Customer service counter)
│       └── WhatsApp_Image_2026-10-30_at_6.51.16_PM__1__11455c1a.jpeg  (Personal care product wall)
│
├── metadata.json               # Applet metadata
├── package.json                # Project dependencies and build scripts
├── vite.config.ts              # Multi-page bundling configuration for production builds
└── README.md                   # Project documentation & Cloud Deployment Guide
```

---

## 📄 4. Detailed Page Descriptions

### 1. Home Page (`index.html`)
- **Top Announcement Bar:** Real emergency helpline (`+91 98881 02937`), operating timings (Mon–Sun 8:00 AM – 10:30 PM), and license confirmation.
- **Navbar:** Khalsa Medicos brand emblem, primary navigation, account indicator, and responsive cart badge.
- **Hero Section:** "Your Trusted Healthcare Partner in Every Step" with call-to-actions, trust indicators (100% Genuine, 25+ Years, 15k+ Patients), and real storefront photography.
- **Feature Pillars:** 100% genuine sourcing, cold-chain temperature monitoring (2°C–8°C), diagnostic equipment, and registered pharmacist counseling.
- **Category Highlights:** Direct shortcuts to Healthcare Devices, First Aid, General Wellness, and Personal Care.
- **Store Showcase:** Real 4-photo mosaic gallery highlighting interior medicine racks, dispensing desk, and cosmetic displays.
- **Prescription Notice:** Clear alert and popup guidelines explaining Schedule H drug requirements.

### 2. Products Catalog (`products.html`)
- **Product Cards:** Featuring authentic, high-resolution product photographs, real brand names (Omron, Accu-Chek, Dettol, Cetaphil), pricing, star ratings, and review counts.
- **Search Bar:** Real-time search by medicine name, brand, or symptom with instant feedback.
- **Category Filter Pills:** Switch effortlessly between *All Products*, *Healthcare Devices*, *First Aid & Surgical*, *General Wellness*, *Personal Care*, and *Prescription Medicines*.
- **Sorting:** Sort by Featured, Price (Low to High), Price (High to Low), or Customer Ratings.
- **Add to Cart & Quick View:** Instant add to cart and modal dialogs with dosage information.
- **Prescription Badges:** Clear visual tags on prescription-required drugs.

### 3. Login Page (`login.html`)
- **Transparent Demo Notice:** Clearly states that this is a frontend-only project with simulated local session management.
- **1-Click Demo Fill:** Auto-populate buttons for "Patient Demo" (`customer@khalsamedicos.com`) and "Pharmacist Staff Demo" (`pharmacist@khalsamedicos.com`).
- **Show/Hide Password:** Interactive eye icon toggling input masking.
- **Form Validation:** Validates email syntax and password length with error messaging.
- **Active Session State:** Once logged in, persists state in `localStorage` and presents user name, role, and a clean logout option.

### 4. About & Contact Page (`contact.html`)
- **Store Facility Overview:** Photographic tour of cold-storage units and pharmacist consultation desks.
- **Contact Details:** Real phone number (`+91 98881 02937`), alternate contact, complete address, and operating hours.
- **Validated Inquiry Form:** Real-time validation for name, 10-digit mobile number, query type, and message.
- **Inquiry Ticket Generation:** Displays simulated confirmation with ticket reference (`#KM-INQ-XXXX`).
- **Interactive Map:** Embedded Google Map with direct link to Google Maps navigation.

---

## 🚀 5. How to Run Locally

### Option A: Using Node.js & Vite (Development Server)
1. Ensure Node.js (version 18 or newer) is installed.
2. In the project root directory, install dependencies:
   ```bash
   npm install
   ```
3. Start the local development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:3000`.

### Option B: Pure Static Server (Zero-Build)
Since the project uses standard HTML, CSS, and JavaScript, you can run it using any static HTTP server:
- **Python 3:**
  ```bash
  python3 -m http.server 8000
  ```
  Open `http://localhost:8000`
- **VS Code Live Server Extension:** Right-click `index.html` and click **"Open with Live Server"**.
- **Node `serve`:**
  ```bash
  npx serve .
  ```

---

## ☁️ 6. Cloud Deployment Instructions

This website is ready for 1-click deployment on modern cloud static hosting providers:

### 🌐 Deploying on Netlify (Recommended)

#### Method 1: Netlify Drag-and-Drop (Under 1 Minute)
1. Build the production files:
   ```bash
   npm run build
   ```
   *(This generates optimized HTML, CSS, and JS in the `dist` folder).*
   *(Alternatively, you can deploy the root folder directly with zero build step).*
2. Log in to [Netlify](https://www.netlify.com/).
3. Navigate to the **Sites** tab and locate the **"Drag and drop your site output folder here"** area.
4. Drag and drop the `dist/` folder (or the root project folder).
5. Netlify will immediately provision a secure HTTPS URL (e.g. `https://khalsa-medicos.netlify.app`).

#### Method 2: Netlify via GitHub (Continuous Deployment)
1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Khalsa Medicos college project static website"
   git branch -M main
   git remote add origin https://github.com/your-username/khalsa-medicos.git
   git push -u origin main
   ```
2. On Netlify, select **"Add new site" > "Import an existing project" > "GitHub"**.
3. Select your repository.
4. Configure Build Settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **"Deploy Site"**. Every new commit will automatically trigger an instant cloud deployment!

---

### 🐙 Deploying on GitHub Pages
1. In your GitHub repository, go to **Settings > Pages**.
2. Under **Build and deployment > Source**, select **Deploy from a branch**.
3. Choose the `main` branch and `/ (root)` folder.
4. Click **Save**. Your site will be live at `https://your-username.github.io/khalsa-medicos/`.

---

### ▲ Deploying on Vercel
1. Install Vercel CLI (`npm i -g vercel`) or visit [Vercel Dashboard](https://vercel.com).
2. Import your GitHub repository.
3. Vercel automatically detects the project settings.
4. Click **Deploy**.

---

## 🎓 7. College Project Presentation Highlights
- **Cloud Elasticity:** Zero server provisioning required; assets are cached at CDN Edge nodes worldwide.
- **High Availability & Fault Tolerance:** No database to crash, zero cold starts, 99.99% uptime guarantee by Netlify CDN.
- **Security by Design:** No backend attack vectors (no SQL injection, no server-side RCE vulnerabilities).
- **Responsive Web Design:** Form-fitted for smartphones, tablets, laptops, and ultra-wide desktop monitors.
- **Real Business Alignment:** Built with real photographs and contact information for Khalsa Medicos pharmacy.
