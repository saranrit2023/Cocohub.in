document.addEventListener('DOMContentLoaded', () => {
  injectFavicon();
  initStickyHeader();
  initProductsDropdown();
  initMobileMenu();
  highlightActiveNav();
  initGlobalSpecModal();
  initFloatingWhatsApp();
});

function injectFavicon() {
  if (document.querySelector('link[rel="icon"]')) return;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
    <rect width="64" height="64" rx="14" fill="#0f2537"/>
    <path d="M32 19 C26 11, 16 11, 13 17 C19 16, 25 18, 30 22 Z" fill="#34d399"/>
    <path d="M32 19 C38 11, 48 11, 51 17 C45 16, 39 18, 34 22 Z" fill="#10b981"/>
    <circle cx="32" cy="36" r="16" fill="#fe932c"/>
    <circle cx="32" cy="36" r="10" fill="#ffffff" stroke="#0f2537" stroke-width="2"/>
    <ellipse cx="32" cy="36" rx="4.5" ry="10" fill="none" stroke="#0f2537" stroke-width="1.8"/>
    <line x1="22" y1="36" x2="42" y2="36" stroke="#0f2537" stroke-width="1.8"/>
  </svg>`;
  const link = document.createElement('link');
  link.rel = 'icon';
  link.type = 'image/svg+xml';
  link.href = 'data:image/svg+xml,' + encodeURIComponent(svg);
  document.head.appendChild(link);
}

function initStickyHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-md', 'bg-surface-container-lowest/95', 'backdrop-blur-md');
    } else {
      header.classList.remove('shadow-md', 'backdrop-blur-md');
    }
  });
}

function initProductsDropdown() {
  const dropdownTrigger = document.getElementById('productsNavTrigger');
  const dropdownMenu = document.getElementById('productsDropdownMenu');

  if (!dropdownTrigger || !dropdownMenu) return;

  let timeoutId = null;

  const show = () => {
    clearTimeout(timeoutId);
    dropdownMenu.classList.remove('hidden', 'opacity-0', 'pointer-events-none', 'translate-y-2');
    dropdownMenu.classList.add('opacity-100', 'translate-y-0');
  };

  const hide = () => {
    timeoutId = setTimeout(() => {
      dropdownMenu.classList.remove('opacity-100', 'translate-y-0');
      dropdownMenu.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
      setTimeout(() => {
        if (dropdownMenu.classList.contains('opacity-0')) {
          dropdownMenu.classList.add('hidden');
        }
      }, 200);
    }, 220);
  };

  dropdownTrigger.addEventListener('mouseenter', show);
  dropdownTrigger.addEventListener('mouseleave', hide);
  dropdownMenu.addEventListener('mouseenter', show);
  dropdownMenu.addEventListener('mouseleave', hide);
  dropdownTrigger.addEventListener('focusin', show);
}

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!toggleBtn || !mobileMenu) return;

  const closeMenu = () => {
    mobileMenu.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  };

  toggleBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden', !isHidden);
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) closeMenu();
  });
}

function highlightActiveNav() {
  const path = window.location.pathname.toLowerCase();
  const filename = path.split('/').pop() || 'index.html';

  const navLinks = document.querySelectorAll('header nav a[data-page]');
  navLinks.forEach(link => {
    const page = link.getAttribute('data-page');
    const isActive =
      ((filename === '' || filename === 'index.html') && page === 'home') ||
      ((filename.includes('products') || filename.includes('product-detail')) && page === 'products') ||
      (filename.includes('quality') && page === 'quality') ||
      (filename.includes('logistics') && page === 'logistics');

    if (isActive) {
      link.classList.add('text-primary', 'font-bold', 'border-b-2', 'border-secondary-container');
      link.classList.remove('text-on-surface-variant', 'font-medium');
    } else {
      link.classList.remove('text-primary', 'font-bold', 'border-b-2', 'border-secondary-container');
      link.classList.add('text-on-surface-variant', 'font-medium');
    }
  });
}

function initFloatingWhatsApp() {
  if (document.querySelector('aside[aria-label="Floating WhatsApp contact"]')) return;
  const waUrl = (typeof siteConfig !== 'undefined' && siteConfig.whatsapp)
    ? siteConfig.whatsapp.getChatUrl()
    : 'https://wa.me/918248561253';

  const widget = document.createElement('aside');
  widget.setAttribute('aria-label', 'Floating WhatsApp contact');
  widget.className = 'fixed bottom-6 right-6 z-40 print:hidden';
  widget.innerHTML = `
    <a 
      href="${waUrl}" 
      target="_blank" 
      rel="noopener noreferrer"
      class="group flex items-center gap-2.5 bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-3 rounded-full shadow-2xl hover:shadow-emerald-900/50 transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-emerald-400"
      title="Chat on WhatsApp Business"
    >
      <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
      <span class="material-symbols-outlined text-[22px]">chat</span>
      <span class="text-xs font-bold whitespace-nowrap pr-1">Chat on WhatsApp</span>
    </a>
  `;
  document.body.appendChild(widget);
}

/**
 * GLOBAL PRODUCT SPECIFICATION SLIDE-OVER MODAL
 */
function initGlobalSpecModal() {
  if (document.getElementById('b2bProductSpecDrawer')) return;

  const brandName = (typeof siteConfig !== 'undefined' && siteConfig.brandName) ? siteConfig.brandName : 'Cocohub';
  const drawerHtml = `
    <div id="b2bProductSpecDrawer" class="hidden fixed inset-0 z-50 overflow-hidden print:hidden" role="dialog" aria-modal="true">
      <div id="b2bDrawerBackdrop" class="fixed inset-0 bg-primary/60 backdrop-blur-sm transition-opacity opacity-0 duration-300"></div>
      <div class="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div id="b2bDrawerPanel" class="w-screen max-w-2xl bg-surface-container-lowest border-l border-outline-variant shadow-2xl flex flex-col transform translate-x-full transition-transform duration-300 ease-in-out">
          <div class="px-6 py-4 bg-primary text-surface-container-lowest flex items-center justify-between border-b border-primary-container">
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-secondary-container text-[22px]">verified</span>
              <div>
                <span class="block text-[10px] uppercase font-bold tracking-wider text-secondary-fixed">Export Specification Sheet</span>
                <span class="font-bold text-sm text-surface-container-lowest"><span data-site="brandName">${escapeHtml(brandName)}</span> Trade Portal</span>
              </div>
            </div>
            <button id="b2bDrawerCloseBtn" class="p-1 rounded-lg text-primary-fixed-dim hover:text-white hover:bg-white/10 transition-colors" title="Close Panel" aria-label="Close specification sheet">
              <span class="material-symbols-outlined text-[24px]">close</span>
            </button>
          </div>
          <div id="b2bDrawerContent" class="flex-grow overflow-y-auto p-6 sm:p-8 space-y-6"></div>
          <div id="b2bDrawerFooter" class="p-4 sm:p-6 bg-surface-container-low border-t border-outline-variant/60 flex flex-col sm:flex-row items-center justify-between gap-3"></div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', drawerHtml);

  document.getElementById('b2bDrawerCloseBtn').addEventListener('click', closeProductSpecModal);
  document.getElementById('b2bDrawerBackdrop').addEventListener('click', closeProductSpecModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProductSpecModal();
  });
}

function openProductSpecModal(productId) {
  if (typeof EXPORT_DATA === 'undefined') return;
  const product = getProductById(productId);
  if (!product) return;

  const drawer = document.getElementById('b2bProductSpecDrawer');
  const backdrop = document.getElementById('b2bDrawerBackdrop');
  const panel = document.getElementById('b2bDrawerPanel');
  const content = document.getElementById('b2bDrawerContent');
  const footer = document.getElementById('b2bDrawerFooter');

  if (!drawer || !panel || !content) return;

  const fallbackImg = (typeof getFallbackImageSvg === 'function') ? getFallbackImageSvg(product.name) : '';

  const packagingListHtml = (product.packagingOptions && product.packagingOptions.length > 0)
    ? product.packagingOptions.map(opt => `
        <li class="flex items-start gap-2 text-xs text-on-surface">
          <span class="material-symbols-outlined text-secondary text-[16px] flex-shrink-0 mt-0.5">check_circle</span>
          <span>${escapeHtml(opt)}</span>
        </li>
      `).join('')
    : `
        <li class="flex items-start gap-2 text-xs text-on-surface">
          <span class="material-symbols-outlined text-secondary text-[16px] flex-shrink-0 mt-0.5">check_circle</span>
          <span>${escapeHtml(product.packaging)}</span>
        </li>
      `;

  const certsHtml = (product.certifications || []).map(cert => `
    <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface border border-outline-variant/60 text-[11px] font-bold text-primary">
      <span class="material-symbols-outlined text-secondary text-[14px]">verified</span>
      ${escapeHtml(cert)}
    </span>
  `).join('');

  content.innerHTML = `
    <div class="relative rounded-xl overflow-hidden bg-surface-container aspect-[16/9] border border-outline-variant/60">
      <img src="${product.image}" alt="${escapeHtml(product.name)}" onerror="this.onerror=null;this.src='${fallbackImg}';" class="w-full h-full object-cover"/>
      <div class="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent"></div>
      <div class="absolute top-3 left-3 flex flex-wrap gap-2">
        <span class="px-2.5 py-1 rounded bg-primary/90 text-white text-[11px] font-bold uppercase tracking-wider backdrop-blur-md shadow">
          ${escapeHtml(product.categoryName)}
        </span>
        <span class="px-2.5 py-1 rounded bg-secondary-container text-white text-[11px] font-bold backdrop-blur-md shadow">
          HS Code: ${escapeHtml(product.hsCode)}
        </span>
      </div>
      <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs drop-shadow">
        <span class="flex items-center gap-1 font-semibold">
          <span class="material-symbols-outlined text-secondary-container text-[16px]">location_on</span>
          Origin: ${escapeHtml(product.origin)}
        </span>
        <span class="bg-black/40 backdrop-blur px-2 py-0.5 rounded text-[11px]">
          Ports: ${escapeHtml(product.ports)}
        </span>
      </div>
    </div>

    <div>
      <div class="flex items-center justify-between gap-2 mb-1">
        <span class="text-xs font-bold text-secondary uppercase tracking-wider">Export Commodity Spec Sheet</span>
        <span class="text-xs text-outline font-semibold">Ref: BEX-${escapeHtml(product.hsCode).replace(/[^0-9]/g, '')}-EXP</span>
      </div>
      <h2 class="text-2xl font-bold text-primary leading-tight">${escapeHtml(product.name)}</h2>
      <p class="text-xs text-on-surface-variant mt-2 leading-relaxed">
        ${escapeHtml(product.description)}
      </p>
    </div>

    <div class="space-y-3">
      <h3 class="text-xs font-bold text-primary uppercase tracking-wider border-b border-outline-variant/40 pb-1.5 flex items-center gap-1.5">
        <span class="material-symbols-outlined text-secondary text-[16px]">tune</span>
        Standard International Export Metadata
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div class="p-3 rounded-lg bg-surface border border-outline-variant/60">
          <span class="text-outline block text-[11px] font-medium">Export Category:</span>
          <span class="font-bold text-primary block mt-0.5">${escapeHtml(product.categoryName)}</span>
        </div>
        <div class="p-3 rounded-lg bg-surface border border-outline-variant/60">
          <span class="text-outline block text-[11px] font-medium">Export Origin:</span>
          <span class="font-bold text-primary block mt-0.5 flex items-center gap-1">
            <span class="material-symbols-outlined text-secondary text-[14px]">place</span>
            ${escapeHtml(product.origin)}
          </span>
        </div>
        <div class="p-3 rounded-lg bg-surface border border-outline-variant/60">
          <span class="text-outline block text-[11px] font-medium">Harmonized Tariff (HS Code):</span>
          <span class="font-bold text-primary block mt-0.5">HS ${escapeHtml(product.hsCode)}</span>
        </div>
        <div class="p-3 rounded-lg bg-surface border border-outline-variant/60">
          <span class="text-outline block text-[11px] font-medium">Minimum Order Quantity (MOQ):</span>
          <span class="font-bold text-secondary block mt-0.5">${escapeHtml(product.moq)}</span>
        </div>
        <div class="p-3 rounded-lg bg-surface border border-outline-variant/60">
          <span class="text-outline block text-[11px] font-medium">Supported Incoterms (2020):</span>
          <span class="font-bold text-primary block mt-0.5">${escapeHtml(product.incoterms || 'EXW, FOB, CIF')}</span>
        </div>
        <div class="p-3 rounded-lg bg-surface border border-outline-variant/60">
          <span class="text-outline block text-[11px] font-medium">Dispatch Lead Time:</span>
          <span class="font-bold text-primary block mt-0.5">${escapeHtml(product.leadTime || '7-14 Days')}</span>
        </div>
        <div class="p-3 rounded-lg bg-surface border border-outline-variant/60 sm:col-span-2">
          <span class="text-outline block text-[11px] font-medium">Technical Grade &amp; Specifications:</span>
          <span class="font-semibold text-primary block mt-0.5">${escapeHtml(product.specs)}</span>
        </div>
      </div>
    </div>

    <div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/60">
      <span class="block text-xs font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
        <span class="material-symbols-outlined text-secondary text-[16px]">inventory_2</span>
        Certified Export Packaging Options:
      </span>
      <ul class="space-y-1.5">
        ${packagingListHtml}
      </ul>
      <p class="text-[11px] text-outline mt-3 pt-2 border-t border-outline-variant/30">
        <strong>Sample Policy:</strong> ${escapeHtml(product.sampleAvailable || 'Courier sample available with NABL COA.')}
      </p>
    </div>

    <div>
      <span class="block text-xs font-bold text-outline uppercase tracking-wider mb-2">Quality &amp; Safety Compliance:</span>
      <div class="flex flex-wrap gap-2">
        ${certsHtml}
      </div>
    </div>
  `;

  footer.innerHTML = `
    <div class="flex items-center gap-2 w-full sm:w-auto">
      <a 
        href="product-detail.html?product=${encodeURIComponent(product.id)}" 
        class="text-xs font-bold text-primary hover:text-secondary flex items-center gap-1 px-3 py-2 rounded-lg border border-outline-variant hover:bg-surface-container transition-colors"
      >
        <span>Full Spec Page</span>
        <span class="material-symbols-outlined text-[16px]">open_in_new</span>
      </a>
    </div>

    <div class="flex items-center gap-2 w-full sm:w-auto">
      <a 
        href="rfq.html?product=${encodeURIComponent(product.id)}&category=${encodeURIComponent(product.category)}&type=sample"
        class="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-secondary text-secondary hover:bg-secondary-fixed/30 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
      >
        <span class="material-symbols-outlined text-[16px]">biotech</span>
        <span>Request Sample</span>
      </a>
      <a 
        href="rfq.html?product=${encodeURIComponent(product.id)}&category=${encodeURIComponent(product.category)}&type=bulk"
        class="flex-1 sm:flex-none px-5 py-2.5 bg-secondary-container hover:bg-secondary text-surface-container-lowest font-bold text-xs rounded-lg transition-all shadow hover:shadow-md flex items-center justify-center gap-1.5"
      >
        <span>Request Bulk Quote</span>
        <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
      </a>
    </div>
  `;

  drawer.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
  setTimeout(() => {
    backdrop.classList.remove('opacity-0');
    backdrop.classList.add('opacity-100');
    panel.classList.remove('translate-x-full');
    panel.classList.add('translate-x-0');
  }, 10);
}

function closeProductSpecModal() {
  const drawer = document.getElementById('b2bProductSpecDrawer');
  const backdrop = document.getElementById('b2bDrawerBackdrop');
  const panel = document.getElementById('b2bDrawerPanel');

  if (!drawer || !backdrop || !panel) return;

  backdrop.classList.remove('opacity-100');
  backdrop.classList.add('opacity-0');
  panel.classList.remove('translate-x-0');
  panel.classList.add('translate-x-full');

  setTimeout(() => {
    drawer.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }, 300);
}

function openQuoteModal(productName = '', categoryName = '') {
  window.location.href = `rfq.html?product=${encodeURIComponent(productName)}&category=${encodeURIComponent(categoryName)}`;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}