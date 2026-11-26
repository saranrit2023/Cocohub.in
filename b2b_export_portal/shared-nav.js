/**
 * Shared Navigation & UI Engine for [BRAND_NAME] Export Web App
 * Includes: Sticky Header, Category Dropdowns, Mobile Drawer, and
 * the Global Product Specification Slide-Over Modal for B2B buyers.
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initProductsDropdown();
  initMobileMenu();
  highlightActiveNav();
  initGlobalSpecModal();
});

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
    }, 250);
  };

  dropdownTrigger.addEventListener('mouseenter', show);
  dropdownTrigger.addEventListener('mouseleave', hide);
  dropdownMenu.addEventListener('mouseenter', show);
  dropdownMenu.addEventListener('mouseleave', hide);
  dropdownTrigger.addEventListener('focus', show);
}

function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const closeBtn = document.getElementById('mobileMenuClose');

  if (!toggleBtn || !mobileMenu) return;

  toggleBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  }
}

function highlightActiveNav() {
  const path = window.location.pathname.toLowerCase();
  const filename = path.split('/').pop() || 'index.html';

  const navLinks = document.querySelectorAll('header nav a[data-page]');
  navLinks.forEach(link => {
    const page = link.getAttribute('data-page');
    if (
      (filename === '' || filename === 'index.html') && page === 'home' ||
      filename.includes('products') && page === 'products' ||
      filename.includes('quality') && page === 'quality' ||
      filename.includes('logistics') && page === 'logistics' ||
      filename.includes('rfq') && page === 'rfq'
    ) {
      link.classList.add('text-primary', 'font-bold', 'border-b-2', 'border-secondary-container');
      link.classList.remove('text-on-surface-variant');
    }
  });
}

/**
 * ================================================================
 * GLOBAL PRODUCT SPECIFICATION SLIDE-OVER MODAL FOR B2B BUYERS
 * ================================================================
 */

function initGlobalSpecModal() {
  // If modal container does not exist on page, inject it
  if (!document.getElementById('b2bProductSpecDrawer')) {
    const drawerHtml = `
      <div id="b2bProductSpecDrawer" class="hidden fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
        <!-- Backdrop -->
        <div id="b2bDrawerBackdrop" class="fixed inset-0 bg-primary/60 backdrop-blur-sm transition-opacity opacity-0 duration-300"></div>

        <div class="fixed inset-y-0 right-0 max-w-full flex pl-10">
          <!-- Slide-over Panel -->
          <div id="b2bDrawerPanel" class="w-screen max-w-2xl bg-surface-container-lowest border-l border-outline-variant shadow-2xl flex flex-col transform translate-x-full transition-transform duration-300 ease-in-out">
            
            <!-- Drawer Header -->
            <div class="px-6 py-4 bg-primary text-surface-container-lowest flex items-center justify-between border-b border-primary-container">
              <div class="flex items-center gap-2">
                <span class="material-symbols-outlined text-secondary-container text-[22px]">verified</span>
                <div>
                  <span class="block text-[10px] uppercase font-bold tracking-wider text-secondary-fixed">Export Specification Sheet</span>
                  <span class="font-bold text-sm text-surface-container-lowest"><span data-site="brandName">${(typeof siteConfig !== 'undefined' && siteConfig.brandName) ? siteConfig.brandName : '[BRAND_NAME]'}</span> Trade Portal</span>
                </div>
              </div>
              <button id="b2bDrawerCloseBtn" class="p-1 rounded-lg text-primary-fixed-dim hover:text-white hover:bg-white/10 transition-colors" title="Close Panel">
                <span class="material-symbols-outlined text-[24px]">close</span>
              </button>
            </div>

            <!-- Drawer Scrollable Body -->
            <div id="b2bDrawerContent" class="flex-grow overflow-y-auto p-6 sm:p-8 space-y-6">
              <!-- Dynamically populated via openProductSpecModal() -->
            </div>

            <!-- Drawer Sticky Footer Actions -->
            <div id="b2bDrawerFooter" class="p-4 sm:p-6 bg-surface-container-low border-t border-outline-variant/60 flex flex-col sm:flex-row items-center justify-between gap-3">
              <!-- Dynamically populated buttons -->
            </div>

          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', drawerHtml);

    // Event listeners for close
    document.getElementById('b2bDrawerCloseBtn').addEventListener('click', closeProductSpecModal);
    document.getElementById('b2bDrawerBackdrop').addEventListener('click', closeProductSpecModal);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeProductSpecModal();
    });
  }
}

/**
 * Open the Product Specification View / Slide-Over Modal for any product
 */
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

  // Format Packaging Options list
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

  // Format Certifications
  const certsHtml = (product.certifications || []).map(cert => `
    <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-surface border border-outline-variant/60 text-[11px] font-bold text-primary">
      <span class="material-symbols-outlined text-secondary text-[14px]">verified</span>
      ${escapeHtml(cert)}
    </span>
  `).join('');

  // Populate Content
  content.innerHTML = `
    <!-- Product Visual & Badges -->
    <div class="relative rounded-xl overflow-hidden bg-surface-container aspect-[16/9] border border-outline-variant/60 group">
      <img src="${product.image}" alt="${escapeHtml(product.name)}" class="w-full h-full object-cover"/>
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

    <!-- Title & Summary -->
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

    <!-- Realistic Export Metadata Fields (Tailored for International B2B Buyers) -->
    <div class="space-y-3">
      <h3 class="text-xs font-bold text-primary uppercase tracking-wider border-b border-outline-variant/40 pb-1.5 flex items-center gap-1.5">
        <span class="material-symbols-outlined text-secondary text-[16px]">tune</span>
        Standard International Export Metadata
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        
        <!-- Category -->
        <div class="p-3 rounded-lg bg-surface border border-outline-variant/60">
          <span class="text-outline block text-[11px] font-medium">Export Category:</span>
          <span class="font-bold text-primary block mt-0.5">${escapeHtml(product.categoryName)}</span>
        </div>

        <!-- Origin -->
        <div class="p-3 rounded-lg bg-surface border border-outline-variant/60">
          <span class="text-outline block text-[11px] font-medium">Export Origin:</span>
          <span class="font-bold text-primary block mt-0.5 flex items-center gap-1">
            <span class="material-symbols-outlined text-secondary text-[14px]">place</span>
            ${escapeHtml(product.origin)}
          </span>
        </div>

        <!-- HS Code -->
        <div class="p-3 rounded-lg bg-surface border border-outline-variant/60">
          <span class="text-outline block text-[11px] font-medium">Harmonized Tariff (HS Code):</span>
          <span class="font-bold text-primary block mt-0.5">HS ${escapeHtml(product.hsCode)}</span>
        </div>

        <!-- MOQ -->
        <div class="p-3 rounded-lg bg-surface border border-outline-variant/60">
          <span class="text-outline block text-[11px] font-medium">Minimum Order Quantity (MOQ):</span>
          <span class="font-bold text-secondary block mt-0.5">${escapeHtml(product.moq)}</span>
        </div>

        <!-- Supported Incoterms -->
        <div class="p-3 rounded-lg bg-surface border border-outline-variant/60">
          <span class="text-outline block text-[11px] font-medium">Supported Incoterms (2020):</span>
          <span class="font-bold text-primary block mt-0.5">${escapeHtml(product.incoterms || 'EXW, FOB, CIF')}</span>
        </div>

        <!-- Dispatch Ports -->
        <div class="p-3 rounded-lg bg-surface border border-outline-variant/60">
          <span class="text-outline block text-[11px] font-medium">Primary Dispatch Ports:</span>
          <span class="font-bold text-primary block mt-0.5">${escapeHtml(product.ports || 'Tuticorin / Chennai / Cochin')}</span>
        </div>

      </div>
    </div>

    <!-- Export Packaging Options -->
    <div class="p-4 rounded-xl bg-surface-container-low border border-outline-variant/60">
      <span class="block text-xs font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
        <span class="material-symbols-outlined text-secondary text-[16px]">inventory_2</span>
        Certified Export Packaging Options:
      </span>
      <ul class="space-y-1.5">
        ${packagingListHtml}
      </ul>
      <p class="text-[11px] text-outline mt-3 pt-2 border-t border-outline-variant/30">
        All wooden pallets and dunnage conform strictly to ISPM-15 phytosanitary heat treatment with international methyl bromide/phosphine certification.
      </p>
    </div>

    <!-- Statutory Accreditations -->
    <div>
      <span class="block text-xs font-bold text-outline uppercase tracking-wider mb-2">Quality &amp; Safety Compliance:</span>
      <div class="flex flex-wrap gap-2">
        ${certsHtml}
      </div>
    </div>
  `;

  // Populate Footer with the two requested buttons: "Request Bulk Quote" and "Request Sample"
  footer.innerHTML = `
    <div class="flex items-center gap-2 w-full sm:w-auto">
      <a 
        href="product-detail.html?product=${encodeURIComponent(product.id)}" 
        class="text-xs font-bold text-primary hover:text-secondary flex items-center gap-1 px-3 py-2 rounded-lg border border-outline-variant hover:bg-surface-container transition-colors"
      >
        <span>Dedicated Page</span>
        <span class="material-symbols-outlined text-[16px]">open_in_new</span>
      </a>
    </div>

    <div class="flex items-center gap-2 w-full sm:w-auto">
      <!-- Button 2: Request Sample -->
      <a 
        href="rfq.html?product=${encodeURIComponent(product.id)}&category=${encodeURIComponent(product.category)}&type=sample"
        class="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-secondary text-secondary hover:bg-secondary-fixed/30 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
      >
        <span class="material-symbols-outlined text-[16px]">biotech</span>
        <span>Request Sample</span>
      </a>

      <!-- Button 1: Request Bulk Quote -->
      <a 
        href="rfq.html?product=${encodeURIComponent(product.id)}&category=${encodeURIComponent(product.category)}&type=bulk"
        class="flex-1 sm:flex-none px-5 py-2.5 bg-secondary-container hover:bg-secondary text-surface-container-lowest font-bold text-xs rounded-lg transition-all shadow hover:shadow-md flex items-center justify-center gap-1.5"
      >
        <span>Request Bulk Quote</span>
        <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
      </a>
    </div>
  `;

  // Animate Open
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

// Global modal helpers
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
