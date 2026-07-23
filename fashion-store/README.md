# AURUM — Luxury Fashion E-commerce Storefront

AURUM is a high-end, production-ready static e-commerce storefront designed for a premium online fashion clothing brand. Built as a university final project, it offers a fully responsive, visually stunning client experience featuring dynamic pages, advanced multi-criteria product filtering, persistent shopping cart/wishlist states, a multi-step secure checkout form with validations, and interactive help sections.

The storefront is built entirely using **HTML5, CSS3, Vanilla JavaScript (ES6)**, and **Tailwind CSS (via CDN)**. It contains no external framework dependencies (like React or Vue) or database backends, making it perfectly optimized for immediate, zero-config deployment on **GitHub Pages**.

---

## 🌟 Key Features

- **Premium Monochromatic Aesthetics:** Minimalist design with curated fonts (Playfair Display and Plus Jakarta Sans), smooth micro-animations, custom scrollbars, and premium hover zoom effects.
- **Dynamic Product Catalog (`shop.html`):** Renders products dynamically from a database of 20 unique items. Includes sorting options (price low-to-high, price high-to-low, top-rated, new arrivals) and a real-time multi-criteria filter sidebar (Search, Gender, Category, Brand, Max Price Slider, Minimum Rating, and Size selections).
- **Interactive Product Details (`product.html`):** Features a high-resolution image gallery with thumbnail previews, interactive color and size selectors, quantity adjustment, tabbed panels for item specifications vs. client reviews, and custom review submission simulation.
- **Shopping Cart State (`cart.html`):** Keeps items stored across sessions using `localStorage`. Supports real-time quantity adjustments, price calculations (subtotal, shipping fees, tax, and total), and coupon code activations (e.g., use code `AURUM20` to subtract 20% from your order).
- **Multi-Step Checkout Wizard (`checkout.html`):** A 4-step wizard (Account Info, Shipping Address, Payment Method, Order Review) that requires proper HTML5 validation patterns (such as correct email structure, numeric phone length, and 16-digit credit cards) before letting users proceed to checkout. On completion, it displays a mock receipt with an order number.
- **Interactive FAQ Section (`faq.html`):** Clean, animatable accordion-style questions and answers categorized by category, supported by a live search bar that instantly hides non-matching items.
- **Contact Showroom page (`contact.html`):** Contains customer service opening hours, contact details, a validated inquiry submission form, and a responsive embedded Google Map.

---

## 📂 Project Directory Structure

```text
fashion-store/
│
├── index.html          # Landing Page (New Arrivals, Collections, Newsletters)
├── shop.html           # Store Catalog Page (Advanced filters & sorting)
├── product.html        # Product Details Page (Gallery, Selectors, Reviews)
├── cart.html           # Persistent Shopping Cart (Coupons & Totals)
├── checkout.html       # Multi-Step Secure Checkout Form (Validations)
├── about.html          # Brand Story, Corporate Values & Team Grid
├── contact.html        # Customer Concierge Form & Interactive Google Maps
├── faq.html            # Help Center (Real-time searchable FAQ Accordions)
├── README.md           # Project documentation and deployment instructions
│
├── css/
│   └── style.css       # Custom stylesheet (Luxury design tokens, transitions)
│
└── js/
    └── script.js       # Master application script (Product DB, router, cart state)
```

---

## 🛠️ Technology Stack

1.  **HTML5:** Structured semantic markup (using tags like `<header>`, `<main>`, `<section>`, `<aside>`, `<footer>`, `<article>`).
2.  **CSS3:** Standard styling for custom variables, range inputs, keyframes, transitions, and webkit scrollbars.
3.  **Tailwind CSS (CDN):** For fast, consistent utility-first layout styling.
4.  **Vanilla JavaScript (ES6):** State management (`localStorage`), routing, event listeners, dynamic DOM manipulation, validation, and filters.

---

## 🚀 Getting Started Locally

Since the project is completely static, there is no build process or package installation required.

### Method 1: Double-Click (Local File)

Simply double-click `index.html` inside the `fashion-store` folder to open the storefront in any web browser.

### Method 2: Local Server (Recommended for perfect routing)

Run a lightweight HTTP server in the project folder to emulate production hosting:

- **Using Python:**
  ```bash
  python -m http.server 8000
  ```
  Then, navigate to `http://localhost:8000` in your web browser.
- **Using Node.js (`live-server` / `http-server`):**
  ```bash
  npx live-server
  ```

---

## ☁️ Deployment to GitHub Pages

To host this project online for free using GitHub Pages:

1.  **Create a GitHub Repository:** Go to [GitHub](https://github.com) and create a new public repository (e.g., `luxury-fashion-store`).
2.  **Push the Code:** Initialize Git locally, commit all files, and push them to your repository:
    ```bash
    git init
    git add .
    git commit -m "Initialize luxury fashion storefront project"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    git push -u origin main
    ```
3.  **Enable GitHub Pages:**
    - In your GitHub repository, click on **Settings** (gear icon).
    - On the left sidebar, click on **Pages**.
    - Under **Build and deployment**, select **Deploy from a branch** under Source.
    - Choose the `main` branch and `/ (root)` folder, then click **Save**.
4.  **Access Your Site:** After a few moments, your website will be live at:
    `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## 🎓 University Project Details

- **Project Name:** AURUM - Luxury Fashion Clothing Store
- **Course:** Web Development & E-Commerce Technologies (Final Assignment)
- **Developer:** Chham Sotheary
- **Academic Year:** 2026
