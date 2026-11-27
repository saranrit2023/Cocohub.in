# Cocohub — Indian B2B International Export Portal

**Cocohub** (`Cocohub Global Trade Private Limited`) is a static, multi-page B2B international export portal built with HTML5, Tailwind CSS (CDN), Material Symbols, and vanilla JavaScript. It showcases verified Indian export commodities across 6 categories, statutory trade credentials, quality assurance workflows, global port logistics, and an interactive Request for Quotation (RFQ) / Proforma Invoice inquiry desk.

- **Brand Name:** Cocohub (`Cocohub Global Trade Private Limited`)
- **Founded:** 2026
- **Founders:** Saran R & Nivendhan S
- **Contact Phone & WhatsApp:** `+91 8248561253` (`https://wa.me/918248561253`)
- **Email:** `sarankavin304@gmail.com`

---

## Project Structure & What Each File Contains

```text
b2b_export_portal/
├── assets/
│   └── cocohub-logo.svg      # Custom SVG brand logo (coconut + globe emblem)
├── index.html                # Main landing page & flagship commodities overview
├── products.html             # Full export catalog with category filtering & live search
├── product-detail.html       # Dynamic single-product specification & packaging page
├── quality.html              # Quality assurance, lab testing & statutory certifications
├── logistics.html            # Global shipping corridors, Incoterms 2020 & port dispatch
├── rfq.html                  # Request for Quotation (RFQ) & courier sample form
├── site-config.js            # Central brand, founder, contact, WhatsApp & DOM hydration config
├── export-data.js            # Master catalog database (credentials, 6 categories, 28 items)
├── shared-nav.js             # Shared navigation, favicon, spec drawer modal & WhatsApp widget
└── README.md                 # This documentation file
```

### 1. HTML Pages
| File | Purpose & Contents |
| :--- | :--- |
| **`index.html`** | Main homepage featuring the sticky top bar, hero section, trust/credential strip, 6-category showcase, flagship commodities grid (`#featuredCommoditiesGrid`), export process overview, commercial desk CTA, and footer. |
| **`products.html`** | Interactive product catalog powered by `export-data.js`. Supports URL query filtering (`?category=coir-peat`), category tabs, and live search across product names, HS codes, specs, and origins. |
| **`product-detail.html`** | Dynamic product specification page loaded via `?product=<id>`. Displays HS code, MOQ, origin, Indian dispatch ports, packaging options, certifications, sample policy, and direct RFQ/sample links. |
| **`quality.html`** | Quality & compliance page detailing statutory Indian export councils (DGFT IEC, APEDA, Spices Board, Coir Board, ISO 9001:2015, FSSAI), NABL lab testing, and pre-shipment inspection protocols. |
| **`logistics.html`** | Maritime dispatch and trade terms page covering Tuticorin (`INTUT`), Chennai (`INMAA`), Cochin (`INCOK`), and Nhava Sheva (`JNPT`), container loadability, and an Incoterms 2020 responsibility matrix. |
| **`rfq.html`** | Commercial RFQ & sample request form (`#rfqForm`). Pre-fills category/product/sample mode from URL parameters, generates an inquiry reference (`PI-2026-IND-XXXX`), optionally submits via Web3Forms, and provides a one-click WhatsApp confirmation link. |

### 2. JavaScript & Asset Files
| File | Purpose & Contents |
| :--- | :--- |
| **`site-config.js`** | Defines the `siteConfig` object (brand identity, founders, email, phone, WhatsApp helper `getChatUrl()`, statutory credentials, office address, dispatch ports, commercial terms), `getFallbackImageSvg()`, and `applySiteConfig()` which hydrates `data-site="..."` elements and links on page load. |
| **`export-data.js`** | Defines `EXPORT_DATA` containing `brand`, `credentials` (6 statutory bodies), `categories` (Coir & Coco Peat, Spices & Masala, Rice & Food, Coconut Products, Handicrafts, Textiles & Garments), and `products` (detailed item metadata), plus helper functions `getCategoryById()`, `getProductsByCategory()`, `getProductById()`, and `searchProducts()`. |
| **`shared-nav.js`** | Runs across all pages to inject the SVG favicon (`injectFavicon()`), manage sticky header scroll styles (`initStickyHeader()`), Products dropdown hover (`initProductsDropdown()`), mobile drawer (`initMobileMenu()`), active nav highlighting (`highlightActiveNav()`), floating WhatsApp button (`initFloatingWhatsApp()`), and the global slide-over Product Specification Drawer (`initGlobalSpecModal()` / `openProductSpecModal()`). |
| **`assets/cocohub-logo.svg`** | Vector brand logo rendered in the header and footer of every page. |

---

## How to Run Locally

Because this is a pure static site with no build step required:
1. **Direct Open:** Double-click `index.html` to open it in any modern browser.
2. **Local Dev Server (Recommended):** Run any static server from the `b2b_export_portal` folder, for example:
   ```bash
   npx serve .
   ```
   or with Python:
   ```bash
   python -m http.server 8080
   ```
   Then open `http://localhost:8080` in your browser.

---

## How to Change Things (Customization Guide)

### 1. Brand Name, Founders, Year & Contact Info
- **Dynamic config:** Edit `siteConfig` at the top of `site-config.js`:
  - `brandName`, `legalName`, `tagline`, `establishedYear`, `copyrightYears`
  - `founders` array (`name`, `phone`)
  - `email`, `phoneDisplay`, `phoneRaw`, `landlineDisplay`, `landlineRaw`
  - `whatsapp` (`number`, `rawNumber`, `deskLink`, `defaultMessage`)
- **Static HTML (SEO & initial render):** Because each HTML page also contains static text in `<title>`, `<meta>`, headers, and footers, update those values in `index.html`, `products.html`, `product-detail.html`, `quality.html`, `logistics.html`, and `rfq.html` when changing brand/contact details permanently.

### 2. Website Logo & Favicon
- **Header & Footer Logo:** Replace `assets/cocohub-logo.svg` with your new SVG or PNG file (or update `siteConfig.logo` in `site-config.js` and the `<img src="assets/cocohub-logo.svg" ...>` tags in the HTML files).
- **Browser Tab Favicon:** Edit the inline SVG inside `injectFavicon()` in `shared-nav.js`.

### 3. Products, Categories & Pricing/Specs
- Edit `EXPORT_DATA.categories` and `EXPORT_DATA.products` in `export-data.js`.
- Each product object supports: `id`, `category`, `categoryName`, `name`, `hsCode`, `origin`, `ports`, `moq`, `incoterms`, `leadTime`, `specs`, `packaging`, `packagingOptions`, `certifications`, `sampleAvailable`, `description`, and `image`.
- To change which 6 products appear on the homepage, edit `flagshipIds` in the inline `<script>` at the bottom of `index.html`.

### 4. RFQ Form Email Delivery (Web3Forms)
- Open `rfq.html` and locate line ~291:
  ```html
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
  ```
- Replace `YOUR_ACCESS_KEY_HERE` with your access key from [web3forms.com](https://web3forms.com) (configured for `sarankavin304@gmail.com`). Until replaced, submitting the form runs in demo mode and displays the generated reference modal + WhatsApp link without sending an email.

### 5. Office Address, Ports & Statutory Numbers
- Update `siteConfig.statutory` (IEC, APEDA, Spices Board, Coir Board, ISO, FSSAI), `siteConfig.address`, and `siteConfig.dispatchPorts` in `site-config.js`.
- Also update matching static blocks in `export-data.js` (`EXPORT_DATA.credentials`), `quality.html`, `logistics.html`, and the footers of the HTML pages.

### 6. Colors & Typography
- Each HTML file includes an inline Tailwind config (`tailwind.config = { theme: { extend: { colors: ... } } }`) in `<head>`.
- Primary palette tokens:
  - `primary`: `#0f2537` (Deep Navy)
  - `secondary-container`: `#fe932c` (Warm Amber)
  - `secondary`: `#904d00` (Burnt Amber)
  - `surface`: `#f7f9fc` (Light Background)
- Font family: `Plus Jakarta Sans` loaded from Google Fonts.
