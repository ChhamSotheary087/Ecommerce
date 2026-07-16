# StyleWear - Modern E-Commerce Storefront

This is a complete, professional, and production-ready static e-commerce storefront designed for a university assignment. It is built strictly using **HTML5** and **CSS3**, without any JavaScript or CSS frameworks.

## Features

- **No JavaScript:** All interactivity (like mobile menus and FAQ toggles) is handled purely with CSS hacks (e.g., hidden checkboxes).
- **No CSS Frameworks:** Custom CSS utilizing Flexbox, CSS Grid, variables, and modern techniques.
- **Responsive Design:** Fully responsive across mobile, tablet, and desktop using CSS Media Queries.
- **Modern UI/UX:** Features a beautiful dark mode-inspired hero, glassmorphism hints, smooth gradients, hover effects, and modern typography (Google Fonts: Outfit and Inter).
- **Semantic HTML5:** Proper use of tags like `<header>`, `<main>`, `<article>`, `<section>`, and `<aside>`.
- **Pages Included:**
  - `index.html`: Home page with hero, categories, featured products, promo, and testimonials.
  - `shop.html`: Product catalog with 20 unique products and a static sidebar filter UI.
  - `cart.html`: Professional shopping cart layout with order summary.
  - `checkout.html`: Secure multi-step visual checkout interface with HTML5 form validation.
  - `about.html`: Company story and values.
  - `contact.html`: Contact form and company information.
  - `faq.html`: Interactive FAQ section using CSS-only toggles.

## Folder Structure

```
ecommerce-store/
│
├── index.html
├── shop.html
├── cart.html
├── checkout.html
├── about.html
├── contact.html
├── faq.html
│
├── css/
│   └── style.css
│
├── images/
│   ├── banner/
│   ├── products/
│   ├── testimonials/
│   └── icons/
│
└── README.md
```

> **Note on Images:** To ensure perfect compatibility with GitHub Pages and immediate high-quality visual presentation, the images used in the HTML files are sourced directly from the Unsplash CDN via HTTPS URLs. The required empty folder structure for `images/` is present in the repository, so you can easily replace the Unsplash URLs with local paths (e.g., `images/products/item1.jpg`) if preferred.

## How to Deploy on GitHub Pages

1. **Create a Repository:** Go to GitHub and create a new public repository (e.g., `ecommerce-store`).
2. **Upload Files:** Upload all the files and folders from this project into the new repository.
3. **Commit Changes:** Commit the files to the `main` branch.
4. **Enable GitHub Pages:** 
   - Go to the repository **Settings**.
   - On the left sidebar, click on **Pages**.
   - Under "Build and deployment", set the **Source** to `Deploy from a branch`.
   - Select the `main` branch and the `/ (root)` folder, then click **Save**.
5. **View Website:** Within a few minutes, your site will be live at `https://<your-username>.github.io/<repository-name>/`. All links and image URLs will work seamlessly because they use relative paths and external CDNs.

## Technologies Used

- HTML5
- CSS3 (Variables, Flexbox, Grid, Media Queries, Transitions)
- Google Fonts (Outfit, Inter)
- Font Awesome 6 (Icons)
- Unsplash (Royalty-free placeholder images)
