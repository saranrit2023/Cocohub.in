/**
 * ========================================================================
 * SITE CONFIGURATION ENGINE - [BRAND_NAME] B2B INTERNATIONAL EXPORT PORTAL
 * ========================================================================
 * Centralized master configuration for the entire web application.
 * 
 * TO RE-BRAND THIS ENTIRE WEBSITE:
 * Simply update the values in the 'siteConfig' object below.
 * When you finalize your company name, tagline, email, phone/WhatsApp,
 * or address in this single file, every page, header, navigation bar,
 * product catalog, specification sheet, RFQ modal, footer, and link
 * across the entire web application updates automatically.
 * ========================================================================
 */

const siteConfig = {
  // 1. Company Name & Brand Identity
  brandName: "[BRAND_NAME]",
  legalName: "[BRAND_NAME] Global Trade Private Limited",
  tagline: "Govt. Regd. Star Export House",
  establishedYear: "2024",
  copyrightYears: "2024-2025",
  brandAcronym: "BEX",

  // 2. Direct Contact & Trade Desk Details
  email: "exports@[brandname].com",
  phoneDisplay: "+91 98200 12345",
  phoneRaw: "+919820012345",
  landlineDisplay: "+91 22 2789 6500",
  landlineRaw: "+912227896500",

  // 3. WhatsApp Business Integration
  whatsapp: {
    number: "+91 98200 12345",
    rawNumber: "91XXXXXXXXXX", // Replace with your 10-12 digit WhatsApp business number (no '+' or spaces)
    deskLink: "https://wa.me/91XXXXXXXXXX",
    defaultMessage: "Hello [BRAND_NAME], I would like to inquire about bulk export pricing",
    
    // Helper to generate formatted wa.me URLs
    getChatUrl(customMessage = null) {
      const bName = siteConfig ? siteConfig.brandName : "[BRAND_NAME]";
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
    building: "[BRAND_NAME] Export Towers",
    suite: "Suite 402-405",
    hub: "Jawaharlal Nehru Port Trust (JNPT) Maritime Hub",
    city: "Navi Mumbai",
    state: "Maharashtra",
    pincode: "400707",
    country: "India",
    short: "[BRAND_NAME] Towers, JNPT Maritime Hub, Navi Mumbai, India",
    full: "[BRAND_NAME] Towers, Suite 402-405, Jawaharlal Nehru Port Trust (JNPT) Maritime Hub, Navi Mumbai, Maharashtra 400707, India",
    html: `[BRAND_NAME] Towers, Suite 402-405,<br/>Jawaharlal Nehru Port Trust (JNPT) Maritime Hub,<br/>Navi Mumbai, Maharashtra 400707, India`
  },

  // 6. Direct Dispatch Gateways (South Indian Ports & JNPT)
  dispatchPorts: [
    "Tuticorin Port (INTUT)",
    "Chennai Port (INMAA)",
    "Cochin Port (INCOK)",
    "Nhava Sheva (JNPT)"
  ],

  // 7. Commercial Terms & Response Guarantees
  terms: {
    incoterms: "Incoterms 2020 Standard: FOB, CIF, CFR, EXW",
    responseGuarantee: "Quotes within 24 hours",
    defaultCurrency: "USD ($) / EUR (€) / AED",
    samplePolicy: "Courier export samples shipped worldwide via DHL / FedEx with accredited COA."
  }
};

/**
 * ========================================================================
 * AUTOMATIC DOM HYDRATION ENGINE
 * ========================================================================
 * Runs across every page on DOM ready to inject the configured brand name,
 * email, phone numbers, WhatsApp links, and addresses everywhere.
 */
function applySiteConfig() {
  if (typeof siteConfig === 'undefined' || typeof document === 'undefined') return;

  const bName = siteConfig.brandName;
  const bLower = (bName === "[BRAND_NAME]") ? "brandname" : bName.toLowerCase().replace(/[^a-z0-9]/g, '');
  const email = siteConfig.email.replace('[brandname]', bLower);
  const waUrl = siteConfig.whatsapp ? siteConfig.whatsapp.getChatUrl() : `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(`Hello ${bName}, I would like to inquire about bulk export pricing`)}`;
  const fullAddress = siteConfig.address.full.replace(/\[BRAND_NAME\]/g, bName);
  const addressHtml = siteConfig.address.html.replace(/\[BRAND_NAME\]/g, bName);
  const legalName = siteConfig.legalName.replace(/\[BRAND_NAME\]/g, bName);

  // 1. Update Document Title
  if (document.title && document.title.includes('[BRAND_NAME]')) {
    document.title = document.title.replace(/\[BRAND_NAME\]/g, bName);
  }

  // 2. Update Meta Description
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && metaDesc.content && metaDesc.content.includes('[BRAND_NAME]')) {
    metaDesc.content = metaDesc.content.replace(/\[BRAND_NAME\]/g, bName);
  }

  // 3. Update Elements with explicit data-site attributes
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

  // 4. Update all Mailto links
  document.querySelectorAll('a[href^="mailto:"]').forEach(a => {
    if (a.href.includes('[brandname]')) {
      a.href = `mailto:${email}`;
    }
    if (a.textContent.includes('exports@[brandname].com')) {
      a.textContent = email;
    }
  });

  // 5. Update all Phone/Tel links
  document.querySelectorAll('a[href^="tel:"]').forEach(a => {
    if (a.href.includes('+919820012345')) {
      a.href = `tel:${siteConfig.phoneRaw}`;
    }
    if (a.textContent.includes('+91 98200 12345')) {
      a.textContent = siteConfig.phoneDisplay;
    }
  });

  // 6. Update all WhatsApp links
  document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
    // If it's a general quote link, update it with configured link
    if (a.href.includes('inquire%20about%20bulk%20export%20pricing') || a.href.includes('inquire about bulk export pricing') || a.href.endsWith('91XXXXXXXXXX')) {
      a.href = waUrl;
    } else if (a.href.includes('[BRAND_NAME]')) {
      a.href = a.href.replace(/\[BRAND_NAME\]/g, encodeURIComponent(bName));
    }
  });

  // 7. Update Inputs, Placeholders, and Form Values
  document.querySelectorAll('input, textarea').forEach(input => {
    if (input.placeholder && input.placeholder.includes('[BRAND_NAME]')) {
      input.placeholder = input.placeholder.replace(/\[BRAND_NAME\]/g, bName);
    }
    if (input.value && input.value.includes('[BRAND_NAME]')) {
      input.value = input.value.replace(/\[BRAND_NAME\]/g, bName);
    }
  });

  // 8. Update Form Hidden Inputs (Web3Forms from_name and subject)
  const formFromName = document.querySelector('input[name="from_name"]');
  if (formFromName) formFromName.value = `${bName} Export RFQ Portal`;

  const formSubject = document.getElementById('formSubject');
  if (formSubject && formSubject.value.includes('[BRAND_NAME]')) {
    formSubject.value = formSubject.value.replace(/\[BRAND_NAME\]/g, bName);
  }

  // 9. Comprehensive DOM Text-Node Walker:
  // Catches any remaining [BRAND_NAME] and exports@[brandname].com in body text
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  const textNodes = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.nodeValue && (
      node.nodeValue.includes('[BRAND_NAME]') || 
      node.nodeValue.includes('[brandname]') ||
      node.nodeValue.includes('exports@[brandname].com')
    )) {
      textNodes.push(node);
    }
  }

  textNodes.forEach(node => {
    node.nodeValue = node.nodeValue
      .replace(/\[BRAND_NAME\]/g, bName)
      .replace(/exports@\[brandname\]\.com/g, email)
      .replace(/\[brandname\]/g, bLower);
  });
}

// Automatically execute on DOM ready (with safe environment check)
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applySiteConfig);
  } else {
    applySiteConfig();
  }
}

// Node.js module export support if running under CommonJS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { siteConfig, applySiteConfig };
}
