const siteConfig = {
  // 1. Company Name & Brand Identity
  brandName: "Cocohub",
  legalName: "Cocohub Global Trade Private Limited",
  tagline: "Govt. Regd. Star Export House",
  establishedYear: "2026",
  copyrightYears: "2026",
  founders: [
    { name: "Saran R", phone: "+91 8248561253" },
    { name: "Nivendhan S", phone: "+91 8248561253" }
  ],
  brandAcronym: "CHB",
  logo: {
    light: "assets/cocohub-logo.svg",
    dark: "assets/cocohub-logo.svg",
    alt: "Cocohub Logo",
    width: "44px",
    height: "44px"
  },

  // 2. Direct Contact & Trade Desk Details
  email: "sarankavin304@gmail.com",
  phoneDisplay: "+91 8248561253",
  phoneRaw: "+918248561253",
  landlineDisplay: "+91 8248561253",
  landlineRaw: "+918248561253",

  // 3. WhatsApp Business Integration
  whatsapp: {
    number: "+91 8248561253",
    rawNumber: "918248561253",
    deskLink: "https://wa.me/918248561253",
    defaultMessage: "Hello Cocohub, I would like to inquire about bulk export pricing",

    getChatUrl(customMessage = null) {
      const bName = (typeof siteConfig !== 'undefined' && siteConfig.brandName) ? siteConfig.brandName : "Cocohub";
      const rawMsg = customMessage || this.defaultMessage.replace(/\[BRAND_NAME\]/g, bName);
      return `https://wa.me/${this.rawNumber}?text=${encodeURIComponent(rawMsg)}`;
    }
  },

  // 4. Statutory Accreditations & Export Credentials
  statutory: {
    iec: "0389021488 (DGFT India)",
    iecCode: "0389021488",
    msmeUdyam: "MSME Udyam Verified",
    starCategory: "Star Export House",
    credentials: [
      { code: "IEC", title: "IEC Registered", org: "DGFT Govt. of India", regNo: "BEX-0389021488" },
      { code: "APEDA", title: "APEDA Certified", org: "Ministry of Commerce", regNo: "APEDA/RCMC/2024/774" },
      { code: "SPICES_BOARD", title: "Spices Board", org: "Ministry of Commerce", regNo: "SB/CRES/EX-4491" },
      { code: "COIR_BOARD", title: "Coir Board", org: "Govt. of India Statutory", regNo: "CB/REG/2024/912" },
      { code: "ISO_9001", title: "ISO 9001:2015", org: "Quality Management", regNo: "TUV-ISO-9001-2024" },
      { code: "FSSAI", title: "FSSAI Licensed", org: "Central Export License", regNo: "FSSAI-10024011000882" }
    ]
  },

  // 5. Official Indian Trade Office & Maritime Address
  address: {
    building: "Cocohub Towers",
    suite: "Suite 402-405",
    hub: "Jawaharlal Nehru Port Trust (JNPT) Maritime Hub",
    city: "Navi Mumbai",
    state: "Maharashtra",
    pincode: "400707",
    country: "India",
    short: "Cocohub Towers, JNPT Maritime Hub, Navi Mumbai, India",
    full: "Cocohub Towers, Suite 402-405, Jawaharlal Nehru Port Trust (JNPT) Maritime Hub, Navi Mumbai, Maharashtra 400707, India",
    html: `Cocohub Towers, Suite 402-405,<br/>Jawaharlal Nehru Port Trust (JNPT) Maritime Hub,<br/>Navi Mumbai, Maharashtra 400707, India`
  },

  // 6. Direct Dispatch Gateways
  dispatchPorts: [
    "Tuticorin Port (INTUT)",
    "Chennai Port (INMAA)",
    "Cochin Port (INCOK)",
    "Nhava Sheva (JNPT)"
  ],

  // 7. Commercial Terms & Response Guarantees
  terms: {
    incoterms: "Incoterms 2020 Standard: FOB, CIF, CFR, DDP",
    responseGuarantee: "Quotes within 24 hours",
    defaultCurrency: "USD ($) / EUR (€) / AED",
    samplePolicy: "Courier export samples shipped worldwide via DHL / FedEx with accredited COA."
  }
};

/**
 * Fallback SVG data URI generator for resilient product thumbnails
 */
function getFallbackImageSvg(label = "Export Commodity") {
  const safeLabel = String(label).replace(/[<>&"']/g, "");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <rect width="800" height="600" fill="#e6eeff"/>
    <rect x="40" y="40" width="720" height="520" rx="20" fill="#ffffff" stroke="#c3c7cd" stroke-width="2"/>
    <text x="400" y="290" font-family="sans-serif" font-size="26" font-weight="bold" fill="#0f2537" text-anchor="middle">${safeLabel}</text>
    <text x="400" y="330" font-family="sans-serif" font-size="16" fill="#904d00" text-anchor="middle">Verified Indian Export Grade</text>
  </svg>`;
  return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
}

/**
 * Automatic DOM Hydration Engine
 */
function applySiteConfig() {
  if (typeof siteConfig === 'undefined' || typeof document === 'undefined') return;

  const bName = siteConfig.brandName;
  const bLower = (bName === "[BRAND_NAME]") ? "brandname" : bName.toLowerCase().replace(/[^a-z0-9]/g, '');
  const email = siteConfig.email.includes('[brandname]') ? siteConfig.email.replace('[brandname]', bLower) : siteConfig.email;
  const waUrl = siteConfig.whatsapp ? siteConfig.whatsapp.getChatUrl() : `https://wa.me/918248561253`;
  const fullAddress = siteConfig.address.full.replace(/\[BRAND_NAME\]/g, bName);
  const addressHtml = siteConfig.address.html.replace(/\[BRAND_NAME\]/g, bName);
  const legalName = siteConfig.legalName.replace(/\[BRAND_NAME\]/g, bName);

  // 1. Update Document Title & Meta Description
  if (document.title && document.title.includes('[BRAND_NAME]')) {
    document.title = document.title.replace(/\[BRAND_NAME\]/g, bName);
  }
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && metaDesc.content && metaDesc.content.includes('[BRAND_NAME]')) {
    metaDesc.content = metaDesc.content.replace(/\[BRAND_NAME\]/g, bName);
  }

  // 2. Explicit data-site attributes
  document.querySelectorAll('[data-site="brandName"]').forEach(el => { el.textContent = bName; });
  document.querySelectorAll('[data-site="legalName"]').forEach(el => { el.textContent = legalName; });
  document.querySelectorAll('[data-site="tagline"]').forEach(el => { el.textContent = siteConfig.tagline; });
  document.querySelectorAll('[data-site="email"]').forEach(el => {
    el.textContent = email;
    if (el.tagName === 'A') el.href = `mailto:${email}`;
  });
  document.querySelectorAll('[data-site="phone"]').forEach(el => {
    el.textContent = siteConfig.phoneDisplay;
    if (el.tagName === 'A') el.href = `tel:${siteConfig.phoneRaw}`;
  });
  document.querySelectorAll('[data-site="landline"]').forEach(el => {
    el.textContent = siteConfig.landlineDisplay;
    if (el.tagName === 'A') el.href = `tel:${siteConfig.landlineRaw}`;
  });
  document.querySelectorAll('[data-site="address"]').forEach(el => { el.innerHTML = addressHtml; });
  document.querySelectorAll('[data-site="address-full"]').forEach(el => { el.textContent = fullAddress; });
  document.querySelectorAll('[data-site="iec"]').forEach(el => { el.textContent = siteConfig.statutory.iec; });
  document.querySelectorAll('[data-site="founders"]').forEach(el => {
    if (Array.isArray(siteConfig.founders)) {
      el.textContent = siteConfig.founders.map(f => f.name).join(' & ');
    }
  });

  // 3. Mailto & Tel links
  document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
    if (a.href.includes('[brandname]') || a.href.includes('exports@')) {
      a.href = `mailto:${email}`;
    }
    if (a.textContent.includes('exports@[brandname].com')) {
      a.textContent = email;
    }
  });

  document.querySelectorAll('a[href^="tel:"]').forEach(a => {
    if (a.href.includes('919820012345')) {
      a.href = `tel:${siteConfig.phoneRaw}`;
    }
    if (a.textContent.includes('+91 98200 12345')) {
      a.textContent = siteConfig.phoneDisplay;
    }
  });

  // 4. WhatsApp links
  document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
    if (a.href.includes('91XXXXXXXXXX') || a.href.includes('inquire%20about%20bulk%20export%20pricing')) {
      a.href = waUrl;
    } else if (a.href.includes('[BRAND_NAME]')) {
      a.href = a.href.replace(/\[BRAND_NAME\]/g, encodeURIComponent(bName));
    }
  });

  // 5. Inputs & Form Hidden Values
  document.querySelectorAll('input, textarea').forEach(input => {
    if (input.placeholder && input.placeholder.includes('[BRAND_NAME]')) {
      input.placeholder = input.placeholder.replace(/\[BRAND_NAME\]/g, bName);
    }
    if (input.value && input.value.includes('[BRAND_NAME]')) {
      input.value = input.value.replace(/\[BRAND_NAME\]/g, bName);
    }
  });

  const formFromName = document.querySelector('input[name="from_name"]');
  if (formFromName) formFromName.value = `${bName} Export RFQ Portal`;

  const formSubject = document.getElementById('formSubject');
  if (formSubject && formSubject.value.includes('[BRAND_NAME]')) {
    formSubject.value = formSubject.value.replace(/\[BRAND_NAME\]/g, bName);
  }

  // 6. Comprehensive DOM Text-Node Walker (Brand, Email, Phone, Landline, IEC, Copyright)
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  const textNodes = [];
  while (walker.nextNode()) {
    const val = walker.currentNode.nodeValue;
    if (val && (
      val.includes('[BRAND_NAME]') ||
      val.includes('[brandname]') ||
      val.includes('exports@[brandname].com') ||
      val.includes('+91 98200 12345') ||
      val.includes('+91 22 2789 6500') ||
      val.includes('0389021488') ||
      val.includes('2024-2025')
    )) {
      textNodes.push(walker.currentNode);
    }
  }

  textNodes.forEach(node => {
    node.nodeValue = node.nodeValue
      .replace(/\[BRAND_NAME\]/g, bName)
      .replace(/exports@\[brandname\]\.com/g, email)
      .replace(/\[brandname\]/g, bLower)
      .replace(/\+91 98200 12345/g, siteConfig.phoneDisplay)
      .replace(/\+91 22 2789 6500/g, siteConfig.landlineDisplay)
      .replace(/0389021488/g, siteConfig.statutory.iecCode)
      .replace(/2024-2025/g, siteConfig.copyrightYears);
  });
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applySiteConfig);
  } else {
    applySiteConfig();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { siteConfig, applySiteConfig, getFallbackImageSvg };
}