/**
 * Indian B2B Export Application - Product & Category Master Data
 * Brand Placeholder: [BRAND_NAME]
 * Contact: exports@[brandname].com
 */

const EXPORT_DATA = {
  brand: (typeof siteConfig !== 'undefined') ? {
    name: siteConfig.brandName,
    subtitle: siteConfig.tagline,
    email: siteConfig.email,
    phone: siteConfig.phoneDisplay,
    landline: siteConfig.landlineDisplay,
    iec: siteConfig.statutory ? siteConfig.statutory.iec : "0389021488 (DGFT India)",
    address: siteConfig.address ? siteConfig.address.full : "[BRAND_NAME] Export Towers, Suite 402-405, JNPT Maritime Hub, Navi Mumbai - 400707, India",
    ports: siteConfig.dispatchPorts || ["Tuticorin Port (INTUT)", "Chennai Port (INMAA)", "Cochin Port (INCOK)", "Nhava Sheva (JNPT)"]
  } : {
    name: "[BRAND_NAME]",
    subtitle: "Govt. Regd. Star Export House",
    email: "exports@[brandname].com",
    phone: "+91 98200 12345",
    landline: "+91 22 2789 6500",
    iec: "0389021488 (DGFT India)",
    address: "[BRAND_NAME] Export Towers, Suite 402-405, JNPT Maritime Hub, Navi Mumbai - 400707, India",
    ports: ["Tuticorin Port (INTUT)", "Chennai Port (INMAA)", "Cochin Port (INCOK)", "Nhava Sheva (JNPT)"]
  },
  credentials: [
    {
      code: "IEC",
      title: "IEC Registered",
      org: "DGFT Govt. of India",
      regNo: "BEX-0389021488",
      icon: "domain_verification",
      desc: "Licensed cross-border Star Export House registered with the Directorate General of Foreign Trade."
    },
    {
      code: "APEDA",
      title: "APEDA Certified",
      org: "Ministry of Commerce",
      regNo: "APEDA/RCMC/2024/774",
      icon: "agriculture",
      desc: "Accredited for scheduled agricultural, basmati, non-basmati rice, and processed food exports."
    },
    {
      code: "SPICES_BOARD",
      title: "Spices Board",
      org: "Ministry of Commerce",
      regNo: "SB/CRES/EX-4491",
      icon: "local_fire_department",
      desc: "Certificate of Registration as Exporter of Spices (CRES) with mandatory pesticide & aflatoxin testing."
    },
    {
      code: "COIR_BOARD",
      title: "Coir Board",
      org: "Govt. of India Statutory",
      regNo: "CB/REG/2024/912",
      icon: "eco",
      desc: "Statutory registration for export-grade coco peat blocks, grow bags, coir fibre, and geotextiles."
    },
    {
      code: "ISO_9001",
      title: "ISO 9001:2015",
      org: "Quality Management",
      regNo: "TUV-ISO-9001-2024",
      icon: "workspace_premium",
      desc: "Audited quality management system covering sourcing, processing, packaging, and dispatch."
    },
    {
      code: "FSSAI",
      title: "FSSAI Licensed",
      org: "Central Export License",
      regNo: "FSSAI-10024011000882",
      icon: "sanitizer",
      desc: "Central licensing authority clearance for food safety, hygiene, and international food dispatch."
    }
  ],
  categories: [
    {
      id: "coir-peat",
      name: "Coir & Coco Peat Products",
      shortName: "Coir & Coco Peat",
      icon: "eco",
      badge: "AGRI & HORTICULTURE",
      hsCode: "5305.00 / 1404.90",
      itemCount: 5,
      description: "Low EC washed coir substrates, compressed coco peat blocks, grow slabs, and high-tensile coir fibre for global hydroponic growers and industrial applications.",
      itemsList: ["Coco Peat Blocks", "Coco Peat Grow Bags", "Coir Fibre", "Coir Rope", "Coir Mats"],
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "spices",
      name: "Spices & Masala",
      shortName: "Spices & Masala",
      icon: "local_fire_department",
      badge: "SPICES & ESSENTIALS",
      hsCode: "0904 / 0908 / 0910",
      itemCount: 5,
      description: "Geographical Indication (GI) certified Indian whole and ground spices sourced directly from Malabar, Idukki, Salem, and Guntur farming belts.",
      itemsList: ["Turmeric", "Black Pepper", "Cardamom", "Cloves", "Chilli Powder"],
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "rice-food",
      name: "Rice & Food Products",
      shortName: "Rice & Food",
      icon: "rice_bowl",
      badge: "FOOD & STAPLES",
      hsCode: "1006.30 / 1104.12 / 1904.90",
      itemCount: 5,
      description: "Authentic Indian non-basmati specialty rices, nutrient-dense climate-smart millets, and hygienic shelf-stable ready-to-cook export foods.",
      itemsList: ["Ponni Rice", "Idly Rice", "Traditional Rice", "Millet Products", "Ready-to-cook Foods"],
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "coconut",
      name: "Coconut Products",
      shortName: "Coconut Products",
      icon: "nutrition",
      badge: "PLANT-BASED COMMODITIES",
      hsCode: "1513.11 / 0801.11 / 4402.90",
      itemCount: 4,
      description: "Export products derived from fresh South Indian coastal coconuts: cold-pressed virgin oil, fine desiccated flakes, and eco-friendly shell charcoal.",
      itemsList: ["Coconut Oil", "Desiccated Coconut", "Coconut Shell Products", "Coconut Coir"],
      image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "handicrafts",
      name: "Handicrafts",
      shortName: "Handicrafts",
      icon: "palette",
      badge: "ARTISANAL & METALS",
      hsCode: "7419.80 / 8306.29 / 4420.10",
      itemCount: 4,
      description: "Authentic Indian artisan masterworks: brass idols, cast bronze temple art, hand-carved solid wood artifacts, and festive heritage home decor.",
      itemsList: ["Brass Products", "Bronze Items", "Wooden Handicrafts", "Traditional Decor"],
      image: "https://images.unsplash.com/photo-1610444583710-5302f8319524?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "textiles",
      name: "Textiles & Garments",
      shortName: "Textiles & Garments",
      icon: "checkroom",
      badge: "SUSTAINABLE APPAREL",
      hsCode: "5208.11 / 6109.10 / 6302.21",
      itemCount: 5,
      description: "Export-quality combed Indian cotton fabrics, knitted apparel, and luxury hospitality bed and bath linen from Tirupur and Coimbatore textile clusters.",
      itemsList: ["Cotton Fabrics", "T-Shirts", "Bedsheets", "Towels", "Home Textiles"],
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80"
    }
  ],
  products: [
    // 1. COIR & COCO PEAT PRODUCTS (5 items)
    {
      id: "coco-peat-blocks",
      name: "Coco Peat Blocks",
      category: "coir-peat",
      categoryName: "Coir & Coco Peat Products",
      hsCode: "5305.00",
      specs: "Low EC (< 0.5 mS/cm), High Expansion (75-80 L/block), Moisture < 15%, 5kg blocks",
      origin: "Pollachi, Tamil Nadu / South India",
      moq: "1 x 40ft HC Container (24-26 MT / 4,800-5,200 blocks)",
      packaging: "Palletized blocks with stretch wrap (240 blocks/pallet) or nude unpacked",
      packagingOptions: [
        "Palletized 5kg blocks (240 blocks per ISPM-15 wooden pallet)",
        "Nude unpacked container floor loaded (Max payload ~26 MT)",
        "Individual shrink-wrapped blocks with custom OEM barcode labels",
        "Custom private-label printed cartons (4 x 5kg blocks per box)"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Tuticorin / Chennai / Cochin",
      certifications: ["Coir Board Certified", "Phytosanitary Approved", "ISO 9001"],
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=800&q=80",
      description: "Premium triple-washed low EC 5kg coco peat blocks processed from aged coconut husk. Superior water retention, optimal air porosity, and balanced pH (5.8-6.5) engineered for commercial hydroponics and potting soil manufacturers.",
      leadTime: "10-14 Days to Dispatch Port",
      sampleAvailable: "1kg compressed sample block via DHL/FedEx courier with full lab assay"
    },
    {
      id: "coco-peat-grow-bags",
      name: "Coco Peat Grow Bags",
      category: "coir-peat",
      categoryName: "Coir & Coco Peat Products",
      hsCode: "1404.90",
      specs: "Pre-cut plant & drain holes, UV treated 3-year co-extruded poly bags, 70/30 Coir-Pith/Chip blend",
      origin: "Pollachi & Coimbatore, Tamil Nadu / South India",
      moq: "1 x 40ft HC Container (15,000 grow slabs)",
      packaging: "UV-treated LDPE multi-layer white/black grow bag with custom punch holes",
      packagingOptions: [
        "UV-stabilized 3-year co-extruded black/white poly slabs (100x15x12cm)",
        "Palletized slabs on ISPM-15 heat-treated pallets",
        "Custom private-label carton packaging for retail nurseries",
        "Pre-drilled plant and dripper holes to greenhouse layouts"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Tuticorin / Cochin / Chennai",
      certifications: ["Coir Board Certified", "Global GAP Compatible", "Heavy Metal Free"],
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
      description: "Ready-to-use hydroponic grow slabs engineered for greenhouse tomato, cucumber, strawberry, and capsicum cultivation. Formulated with 70% pith and 30% crushed chips for balanced root drainage.",
      leadTime: "12-15 Days",
      sampleAvailable: "Sample grow slab (100cm) shipped via international courier"
    },
    {
      id: "coir-fibre",
      name: "Coir Fibre",
      category: "coir-peat",
      categoryName: "Coir & Coco Peat Products",
      hsCode: "5305.00",
      specs: "Natural brown fibre, staple length 10-25 cm, moisture < 15%, impurity < 3%",
      origin: "Dindigul & Pollachi, Tamil Nadu / South India",
      moq: "1 x 40ft HC Container (20 MT compressed bales)",
      packaging: "100-120 kg hydraulically compressed bales bound with plastic/steel strapping",
      packagingOptions: [
        "100kg - 120kg hydraulically compressed bales with plastic straps",
        "Bale packing wrapped in protective woven PP covers",
        "Palletized mini-bales (50kg) for specialized industrial buyers"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Tuticorin / Chennai / Cochin",
      certifications: ["Coir Board Verified", "Fumigation Stamped", "ISO 9001"],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80",
      description: "100% natural, biodegradable brown coir extracted from mature coconut husks. Extensively exported for rubberized mattress cores, automotive seat pads, acoustic dampening, and erosion bio-logs.",
      leadTime: "7-10 Days",
      sampleAvailable: "500g swatch sample with tensile strength certification"
    },
    {
      id: "coir-rope",
      name: "Coir Rope",
      category: "coir-peat",
      categoryName: "Coir & Coco Peat Products",
      hsCode: "5607.90",
      specs: "2-ply / 3-ply machine & hand twisted, 6mm to 25mm diameter, high tensile strength",
      origin: "Alappuzha & Pollachi, Tamil Nadu / South India",
      moq: "1 x 20ft FCL Container (10 MT)",
      packaging: "Coils of 200m - 500m in woven polypropylene bundles",
      packagingOptions: [
        "Continuous coils of 200m - 500m packed in 25kg/50kg PP bags",
        "Wooden reel spools for automated agricultural dispensing",
        "Custom private-label bundled hanks with barcode hangtags"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Tuticorin / Cochin / Chennai",
      certifications: ["Coir Board Accredited", "100% Biodegradable"],
      image: "https://images.unsplash.com/photo-1612198790700-0ff08cb726e5?auto=format&fit=crop&w=800&q=80",
      description: "High-breaking strength natural coir twine and braided ropes used globally for hop farming, oyster cultivation, marine mooring, and general agricultural trellising.",
      leadTime: "10-14 Days",
      sampleAvailable: "10-meter sample coil via express courier"
    },
    {
      id: "coir-mats",
      name: "Coir Mats",
      category: "coir-peat",
      categoryName: "Coir & Coco Peat Products",
      hsCode: "5702.20",
      specs: "Open mesh coir geotextiles (400, 700, 900 GSM) & PVC backed decorative tufted mats",
      origin: "Cherthala & Pollachi, Tamil Nadu / South India",
      moq: "1 x 20ft FCL (5,000 sq. meters)",
      packaging: "Rolls of 1m, 2m, 4m width wrapped in waterproof HDPE sheets",
      packagingOptions: [
        "Heavy-duty HDPE waterproof roll wrapping with edge protectors",
        "Palletized rolls loaded horizontally with ISPM-15 chocks",
        "Custom printed retail cartons for PVC-backed tufted doormats"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Tuticorin / Cochin / Chennai",
      certifications: ["Coir Board Certified", "ASTM D4355 Compliant", "ISO 9001"],
      image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=800&q=80",
      description: "Woven coir geotextiles for riverbank bio-engineering and highway slope erosion stabilization, alongside natural tufted coir door mats with vinyl/latex backing.",
      leadTime: "14-18 Days",
      sampleAvailable: "Geotextile swatch binder (400/700/900 GSM) with lab test cert"
    },

    // 2. SPICES & MASALA (5 items)
    {
      id: "turmeric",
      name: "Turmeric",
      category: "spices",
      categoryName: "Spices & Masala",
      hsCode: "0910.30",
      specs: "Salem / Alleppey Finger & Powder, Curcumin 3.5% - 5.2%, Moisture < 10%",
      origin: "Salem & Erode, Tamil Nadu / South India",
      moq: "5 MT (LCL) / 1 x 20ft FCL (18 MT)",
      packaging: "25kg / 50kg multi-layer Kraft paper bags with inner poly liner or jute bags",
      packagingOptions: [
        "25kg / 50kg food-grade PP woven bags with heat-sealed PE liner",
        "25kg multi-wall Kraft paper bags with moisture-proof barrier",
        "Vacuum packs (5kg / 10kg) inside export corrugated master cartons",
        "Custom private-label 500g / 1kg retail pouches with custom branding"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Tuticorin / Chennai / Cochin",
      certifications: ["Spices Board CRES", "APEDA", "FSSAI Central", "ISO 22000"],
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
      description: "Deep golden-yellow Salem turmeric fingers and ultra-fine mesh ground powder with natural essential oils and verified high curcumin content (3.5% - 5.2%) for nutraceutical, pharmaceutical, and culinary markets.",
      leadTime: "7-10 Days",
      sampleAvailable: "500g vacuum-sealed sample with batch HPLC curcumin assay report"
    },
    {
      id: "black-pepper",
      name: "Black Pepper",
      category: "spices",
      categoryName: "Spices & Masala",
      hsCode: "0904.11",
      specs: "Tellicherry Garbled Extra Bold (TGSEB 4.75mm+) & Malabar Garbled 550GL - 600GL",
      origin: "Idukki & Wayanad, South India",
      moq: "2 MT",
      packaging: "25kg food-grade vacuum sealed poly-lined jute bags",
      packagingOptions: [
        "25kg vacuum packs inside export master cartons",
        "25kg / 50kg food-grade multi-layer poly-lined jute bags",
        "Custom private-label retail glass grinders and stand-up pouches"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Cochin / Tuticorin / Chennai",
      certifications: ["Spices Board CRES", "US FDA Registered", "FSSAI", "Halal"],
      image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=800&q=80",
      description: "Sun-dried whole black peppercorns from the Western Ghats with high piperine content (6-8%), intense pungent bite, and uniform bulk density (550 to 600 g/l).",
      leadTime: "5-7 Days",
      sampleAvailable: "250g vacuum sample with moisture and bulk density certificate"
    },
    {
      id: "cardamom",
      name: "Cardamom",
      category: "spices",
      categoryName: "Spices & Masala",
      hsCode: "0908.31",
      specs: "Alleppey Green Bold (AGEB 7.5mm - 8mm) & Jumbo 8mm+, Moisture < 11%",
      origin: "Bodinayakanur & Idukki, Tamil Nadu / South India",
      moq: "500 Kg",
      packaging: "5kg & 10kg airtight aluminum foil vacuum pouches inside 20kg master cartons",
      packagingOptions: [
        "5kg & 10kg airtight aluminum foil vacuum pouches inside 20kg master cartons",
        "Nitrogen-flushed vacuum barrier cartons to prevent color fading",
        "Custom private-label luxury tins and retail pouches"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Tuticorin / Cochin / Chennai",
      certifications: ["Spices Board of India", "APEDA", "FSSAI Export Certified"],
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
      description: "The 'Queen of Spices'. Pristine emerald-green cardamom pods harvested from high-elevation plantations with volatile oil content exceeding 8.5% and intense aromatic bouquet.",
      leadTime: "3-5 Days (Express Air or Ocean)",
      sampleAvailable: "100g foil pouch sample with pod size caliper verification"
    },
    {
      id: "cloves",
      name: "Cloves",
      category: "spices",
      categoryName: "Spices & Masala",
      hsCode: "0907.10",
      specs: "Handpicked whole cloves, headless < 2%, eugenol content > 18%, moisture < 12%",
      origin: "Kanyakumari & Nagercoil, Tamil Nadu / South India",
      moq: "1 MT",
      packaging: "10kg / 25kg multi-wall paper cartons with desiccant protection",
      packagingOptions: [
        "10kg / 25kg multi-wall paper cartons with moisture desiccant bags",
        "25kg food-grade PP woven bags with heat-sealed PE inner liners",
        "Custom private-label spice cartons"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Tuticorin / Chennai / Cochin",
      certifications: ["Spices Board CRES", "ISO 9001", "FSSAI"],
      image: "https://images.unsplash.com/photo-1599909533601-aa07d1e9a44f?auto=format&fit=crop&w=800&q=80",
      description: "Aromatic reddish-brown unopened flower buds sorted for intact crowns and high essential eugenol oil concentration (> 18%).",
      leadTime: "7-10 Days",
      sampleAvailable: "250g sample pack with eugenol chemical assay"
    },
    {
      id: "chilli-powder",
      name: "Chilli Powder",
      category: "spices",
      categoryName: "Spices & Masala",
      hsCode: "0904.22",
      specs: "Guntur Sannam S4 / Teja Chilli, 30,000 - 80,000 SHU, ASTA Color 60-120",
      origin: "Guntur & Kovilpatti, South India",
      moq: "5 MT",
      packaging: "25kg HDPE laminated bags with nitrogen flushing or consumer retail cartons",
      packagingOptions: [
        "25kg HDPE laminated bags with nitrogen flushing",
        "25kg / 50kg multi-wall Kraft paper sacks with food-grade PE liner",
        "Custom private-label retail foil pouches (100g to 1kg)"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Chennai / Tuticorin / Cochin",
      certifications: ["Spices Board CRES", "Aflatoxin Tested (< 5 ppb)", "APEDA", "FSSAI"],
      image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80",
      description: "Pure stemless Guntur red chilli powder cold stone ground to preserve natural capsanthin pigments and intense fiery pungent heat.",
      leadTime: "7-12 Days",
      sampleAvailable: "500g nitrogen-sealed sample pouch"
    },

    // 3. RICE & FOOD PRODUCTS (5 items)
    {
      id: "ponni-rice",
      name: "Ponni Rice",
      category: "rice-food",
      categoryName: "Rice & Food Products",
      hsCode: "1006.30",
      specs: "Thanjavur Boiled & Raw Ponni, 100% Sortex Clean, Average grain length 5.2mm, Moisture < 12%",
      origin: "Cauvery Delta, Thanjavur, Tamil Nadu / South India",
      moq: "1 x 20ft FCL Container (25 MT)",
      packaging: "5kg, 10kg, 20kg, 25kg non-woven / BOPP bags & 50kg PP bags",
      packagingOptions: [
        "25kg / 50kg food-grade woven polypropylene (PP) bags",
        "5kg, 10kg & 20kg premium printed BOPP bags with carry handle",
        "Palletized bags (1 MT per ISPM-15 wooden pallet)",
        "Custom private-label printed packaging for departmental supermarkets"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Tuticorin / Chennai / Cochin",
      certifications: ["APEDA Registered", "FSSAI Central Export License", "ISO 22000"],
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
      description: "Famous South Indian staple rice cultivated in the fertile Cauvery delta basin. Prized for its soft fluffy non-sticky texture, pleasant aroma, and low glycemic index after cooking.",
      leadTime: "5-7 Days to Loading Port",
      sampleAvailable: "1kg sample bag via DHL/FedEx with moisture analysis certificate"
    },
    {
      id: "idly-rice",
      name: "Idly Rice",
      category: "rice-food",
      categoryName: "Rice & Food Products",
      hsCode: "1006.30",
      specs: "Short bold parboiled rice, 100% Sortex clean, high amylose content for fluffy batter",
      origin: "Thanjavur & Madurai, Tamil Nadu / South India",
      moq: "1 x 20ft FCL Container (25 MT)",
      packaging: "10kg, 25kg, 50kg food-grade branded woven polypropylene bags",
      packagingOptions: [
        "25kg / 50kg food-grade woven polypropylene (PP) bags",
        "10kg retail bags with moisture-resistant PE liner",
        "Custom private-label bags with buyer barcode and brand artwork"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Tuticorin / Chennai / Cochin",
      certifications: ["APEDA", "FSSAI Certified", "AGMARK Grade 1"],
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      description: "Short, thick-grain parboiled rice engineered specifically for fermented South Indian batters to yield soft, pillowy idlies and crispy golden dosas.",
      leadTime: "7 Days",
      sampleAvailable: "1kg sealed sample pack"
    },
    {
      id: "traditional-rice",
      name: "Traditional Rice",
      category: "rice-food",
      categoryName: "Rice & Food Products",
      hsCode: "1006.30",
      specs: "Heirloom varieties: Mappillai Samba, Karuppu Kavuni (Black Rice), Seeraga Samba",
      origin: "Heritage Farming Belts, Tamil Nadu / South India",
      moq: "2 MT (Palletized)",
      packaging: "1kg & 5kg vacuum-sealed retail pouches or 25kg jute export bags",
      packagingOptions: [
        "1kg & 5kg vacuum packs with oxygen scavenger in master cartons",
        "25kg food-grade PP woven bags with inner heat-sealed liners",
        "Custom private-label gourmet retail boxes"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Chennai / Tuticorin / Cochin",
      certifications: ["NPOP Organic", "APEDA", "FSSAI", "Non-GMO"],
      image: "https://images.unsplash.com/photo-1536304447766-da0ed4ce1b73?auto=format&fit=crop&w=800&q=80",
      description: "Ancient medicinal and aromatic heritage rices packed with anthocyanins, iron, zinc, and dietary fibre. Highly sought after in international specialty wellness aisles.",
      leadTime: "7-10 Days",
      sampleAvailable: "Assorted 3 x 250g heritage rice sampler"
    },
    {
      id: "millet-products",
      name: "Millet Products",
      category: "rice-food",
      categoryName: "Rice & Food Products",
      hsCode: "1008.29",
      specs: "Dehulled whole grains & flours: Foxtail, Barnyard, Kodo, Little, Pearl & Finger Millet (Ragi)",
      origin: "Dharmapuri & Coimbatore, Tamil Nadu / South India",
      moq: "5 MT",
      packaging: "25kg Kraft paper bags with PE inner liner or 500g branded standup pouches",
      packagingOptions: [
        "25kg Kraft paper sacks with PE inner liner",
        "Palletized bags shrink-wrapped on export pallets",
        "Custom private-label 500g / 1kg standup zip pouches"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Tuticorin / Chennai / Cochin",
      certifications: ["APEDA Nutri-Cereal Certified", "FSSAI", "Gluten-Free Certified"],
      image: "https://images.unsplash.com/photo-1612257999756-18fb0284f4ec?auto=format&fit=crop&w=800&q=80",
      description: "Export-grade superfood millets processed using modern optical sorting to ensure 99.9% grain purity for cereal manufacturers and healthy food brands.",
      leadTime: "10 Days",
      sampleAvailable: "500g grain sample with gluten-free test report"
    },
    {
      id: "ready-to-cook-foods",
      name: "Ready-to-cook Foods",
      category: "rice-food",
      categoryName: "Rice & Food Products",
      hsCode: "1904.90",
      specs: "Instant Idly/Dosa Dry Mixes, Millet Upma Mix, Traditional Rasam & Sambar Paste",
      origin: "Coimbatore Food Processing Zone, Tamil Nadu / South India",
      moq: "500 Master Cartons (5,000 retail packs)",
      packaging: "Multi-layer barrier retort pouches and nitrogen-flushed stand-up zip pouches (12-18 months shelf life)",
      packagingOptions: [
        "Retort multi-layer barrier pouches (shelf-stable 18 months)",
        "Nitrogen-flushed standup pouches inside 5-ply export master cartons",
        "Custom private-label supermarket shelf packaging"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Tuticorin / Chennai / Cochin",
      certifications: ["US FDA Registered", "FSSAI Export License", "BRC Food Certified", "HACCP"],
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      description: "Authentic, preservative-free traditional Indian meal foundations manufactured in US FDA approved automated facilities with 12 to 18-month ambient shelf stability.",
      leadTime: "14 Days",
      sampleAvailable: "Sample culinary tasting kit (4 assorted packs)"
    },

    // 4. COCONUT PRODUCTS (4 items)
    {
      id: "coconut-oil",
      name: "Coconut Oil",
      category: "coconut",
      categoryName: "Coconut Products",
      hsCode: "1513.11",
      specs: "100% Pure Cold-Pressed Virgin (VCO, Lauric Acid > 50%) & RBD Edible Export Grade",
      origin: "Kangayam & Pollachi, Tamil Nadu / South India",
      moq: "1 x 20ft FCL (Flexitank 21 MT or IBC Totes)",
      packaging: "1000L IBC totes, 190kg steel drums, 21,000L flexibags, or retail bottles",
      packagingOptions: [
        "1000L food-grade IBC totes with bottom discharge valve",
        "190kg / 200L epoxy-lined steel drums palletized",
        "21,000-liter food-grade bulk Flexitanks",
        "Custom private-label 500ml / 1000ml retail glass & PET bottles"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Tuticorin / Cochin / Chennai",
      certifications: ["FSSAI", "ISO 22000", "Halal", "Kosher", "USDA Organic"],
      image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
      description: "Cold-pressed from fresh mature coconut milk without chemical solvents or heat treatment. Clear, aromatic, unrefined virgin coconut oil rich in lauric acid (> 50%) and medium-chain triglycerides (MCTs).",
      leadTime: "10 Days",
      sampleAvailable: "250ml sample bottle with gas chromatography fatty acid profile"
    },
    {
      id: "desiccated-coconut",
      name: "Desiccated Coconut",
      category: "coconut",
      categoryName: "Coconut Products",
      hsCode: "0801.11",
      specs: "High Fat (Fat > 65%), Fine & Medium grade shredding, Moisture < 3%, Free of SO2",
      origin: "Pollachi & Kangayam, Tamil Nadu / South India",
      moq: "1 x 20ft FCL Container (12 MT)",
      packaging: "25kg / 50kg multi-wall Kraft paper bags with inner heat-sealed food-grade polythene",
      packagingOptions: [
        "25kg / 50kg multi-wall Kraft paper sacks with heat-sealed PE inner liner",
        "Vacuum packs (10kg) in export corrugated cartons",
        "Custom private-label retail bakery bags"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Tuticorin / Cochin / Chennai",
      certifications: ["FSSAI Central Export License", "ISO 22000", "Microbiologically Tested"],
      image: "https://images.unsplash.com/photo-1581375321224-79da6fd32f6e?auto=format&fit=crop&w=800&q=80",
      description: "Snow-white dried shredded coconut meat prepared without artificial sulfur bleaching. Widely imported for international confectionery, bakery, and dairy applications.",
      leadTime: "7-10 Days",
      sampleAvailable: "500g vacuum sample with microbiological assay"
    },
    {
      id: "coconut-shell-products",
      name: "Coconut Shell Products",
      category: "coconut",
      categoryName: "Coconut Products",
      hsCode: "4402.90",
      specs: "Coconut Shell Charcoal Briquettes (Fixed carbon > 75%), Activated Carbon granules (CTC 50-60%)",
      origin: "Tirupur & Pollachi, Tamil Nadu / South India",
      moq: "1 x 20ft FCL Container (18 MT)",
      packaging: "25kg PP bags, 500kg jumbo bulk bags, or 1kg / 10kg retail BBQ cartons",
      packagingOptions: [
        "25kg / 50kg PP bags with inner moisture barrier",
        "500kg heavy-duty Jumbo bulk bags with lifting loops",
        "Custom private-label 1kg, 3kg, 10kg retail BBQ briquette boxes with handle"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Tuticorin / Cochin / Chennai",
      certifications: ["MSDS Approved", "Self-Heating Cargo Test Cleared (IMO Compliant)"],
      image: "https://images.unsplash.com/photo-1567306295427-94503f8300d7?auto=format&fit=crop&w=800&q=80",
      description: "Eco-friendly natural coconut shell charcoal briquettes with high calorific value, low ash (< 3%), and high-iodine steam-activated carbon for water/air filtration.",
      leadTime: "12-14 Days",
      sampleAvailable: "1kg sample box of briquettes with burning time specs"
    },
    {
      id: "coconut-coir",
      name: "Coconut Coir",
      category: "coconut",
      categoryName: "Coconut Products",
      hsCode: "5305.00",
      specs: "Curled coconut coir yarn & decorticated mattress fibre, moisture < 14%, low debris",
      origin: "Pollachi & Tenkasi, Tamil Nadu / South India",
      moq: "1 x 40ft HC Container (20 MT)",
      packaging: "Hydraulic bales of 120kg or continuous curled rope coils",
      packagingOptions: [
        "Hydraulically compressed bales of 120kg strapped with plastic/iron bands",
        "Continuous curled coir rope coils for automated rubberizing plants",
        "Palletized bales with corner protectors"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Tuticorin / Cochin / Chennai",
      certifications: ["Coir Board Verified", "Fumigation Certificate Issued"],
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
      description: "Resilient spring-like curled coconut coir fibre specifically engineered for rubberized coir mattress manufacturing, acoustic insulation, and automotive seating.",
      leadTime: "10 Days",
      sampleAvailable: "Sample mini-bale (1kg) with resilience elasticity data"
    },

    // 5. HANDICRAFTS (4 items)
    {
      id: "brass-products",
      name: "Brass Products",
      category: "handicrafts",
      categoryName: "Handicrafts",
      hsCode: "7419.80",
      specs: "Cast & engraved solid brass: Diya lamps, Urulis, elephant bells, antique lacquer finish",
      origin: "Kumbakonam & Madurai, Tamil Nadu / South India",
      moq: "100 Pcs / $2,500 mixed consignment",
      packaging: "Individual bubble-wrapped foam-lined gift box inside 7-ply export master cartons",
      packagingOptions: [
        "Individual bubble-wrapped foam-lined gift box with desiccant",
        "Master 7-ply heavy export cartons with corner edge protectors",
        "Custom private-label printed presentation boxes with barcode tags",
        "ISPM-15 heat-treated export wooden crates"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Chennai / Tuticorin / Cochin",
      certifications: ["EPCH Member (Export Promotion Council for Handicrafts)", "Lead-Free Tested"],
      image: "https://images.unsplash.com/photo-1610444583710-5302f8319524?auto=format&fit=crop&w=800&q=80",
      description: "Exquisite sand-cast solid brass traditional lamps, peacock oil lamps, and tabletop decorative bowls handcrafted by generational artisans in brass manufacturing clusters.",
      leadTime: "15-20 Days",
      sampleAvailable: "Single prototype sample via DHL courier"
    },
    {
      id: "bronze-items",
      name: "Bronze Items",
      category: "handicrafts",
      categoryName: "Handicrafts",
      hsCode: "8306.29",
      specs: "Lost-wax cast Panchaloha bronze idols, temple bells, ceremonial urlis with patina finish",
      origin: "Swamimalai & Thanjavur, Tamil Nadu / South India (GI Tagged)",
      moq: "25 Pcs / Curated art shipment",
      packaging: "Custom-cut foam cushioned wooden crates with ISPM-15 export certification",
      packagingOptions: [
        "Custom-cut high-density foam cushioned wooden crates (ISPM-15 stamped)",
        "Multi-layer velvet pouch inside individual luxury wooden gift cases",
        "Reinforced export flight cases for museum-grade bronze casting"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Chennai / Tuticorin / Cochin",
      certifications: ["Geographical Indication (GI) Swamimalai Bronze", "EPCH Verified"],
      image: "https://images.unsplash.com/photo-1590058535484-b1b0150efc11?auto=format&fit=crop&w=800&q=80",
      description: "World-renowned lost-wax bronze sculptures cast using the ancient Chola metallurgical technique. Museum-grade detail, resonant sonics, and heirloom longevity.",
      leadTime: "25-30 Days Custom Casting",
      sampleAvailable: "Miniature bronze bell sample with alloy metallurgical certificate"
    },
    {
      id: "wooden-handicrafts",
      name: "Wooden Handicrafts",
      category: "handicrafts",
      categoryName: "Handicrafts",
      hsCode: "4420.10",
      specs: "Solid Sheesham, Rosewood, and Teakwood: Hand-carved decorative panels, boxes & figurines",
      origin: "Thanjavur & Nagercoil, Tamil Nadu / South India",
      moq: "200 Pcs",
      packaging: "Poly-wrapped with corner edge protectors in corrugated shipping cartons",
      packagingOptions: [
        "Foam-wrapped with plastic corner edge protectors in 5-ply cartons",
        "Individual bubble-wrapped gift boxes with anti-fungal pouches",
        "Palletized cartons bound with stretch wrap on fumigated wooden pallets"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Chennai / Tuticorin / Cochin",
      certifications: ["VRIKSH Certified (CITES Compliance)", "EPCH", "Fumigation Certified"],
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
      description: "Artisanal solid hardwood carvings, intricate brass-inlay spice boxes, and decorative carved wall corbels complying with legal timber export verifications.",
      leadTime: "18-22 Days",
      sampleAvailable: "Carved wooden box sample via courier"
    },
    {
      id: "traditional-decor",
      name: "Traditional Decor",
      category: "handicrafts",
      categoryName: "Handicrafts",
      hsCode: "6913.90",
      specs: "Terracotta wall hangings, Pichwai art frames, handcrafted Torans & festive metal wall art",
      origin: "Madurai & Kanchipuram, Tamil Nadu / South India",
      moq: "300 Pcs assorted",
      packaging: "Double-walled honeycomb shock-absorbent protective retail cartons",
      packagingOptions: [
        "Double-walled honeycomb shock-absorbent protective retail cartons",
        "Individual polybags with custom cardboard header cards for store display",
        "Export master cartons with reinforced edge bars"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Chennai / Tuticorin / Cochin",
      certifications: ["EPCH Certified", "100% Handcrafted Artisan Federation"],
      image: "https://images.unsplash.com/photo-1604014237256-11d475e2a2d8?auto=format&fit=crop&w=800&q=80",
      description: "Vibrant ethnic Indian festive wall decor, auspicious metal hangings, and terracotta accents designed for global Indian diaspora and boutique home decor retailers.",
      leadTime: "14-20 Days",
      sampleAvailable: "Sample decor pack (2 units)"
    },

    // 6. TEXTILES & GARMENTS (5 items)
    {
      id: "cotton-fabrics",
      name: "Cotton Fabrics",
      category: "textiles",
      categoryName: "Textiles & Garments",
      hsCode: "5208.11",
      specs: "100% Combed Organic Cotton, 30s to 80s yarn count, Greige, Bleached, Dyed & Printed",
      origin: "Coimbatore & Erode, Tamil Nadu / South India",
      moq: "3,000 Meters",
      packaging: "Rolls of 100m - 150m packed in transparent poly bags and outer burlap wrapping",
      packagingOptions: [
        "Rolls of 100m - 150m packed in transparent poly bags and outer burlap wrapping",
        "Palletized fabric rolls loaded in container with moisture desiccants",
        "Custom bolt packaging with cardboard cores and measurement stickers"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Tuticorin / Chennai / Cochin",
      certifications: ["GOTS (Global Organic Textile Standard)", "OEKO-TEX Standard 100", "BCI Cotton"],
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
      description: "Premium Indian woven cotton fabrics with high colorfastness, breathable weave, and minimal shrinkage (< 2%). Manufactured to international garment manufacturing specifications.",
      leadTime: "14-21 Days Mill Lead Time",
      sampleAvailable: "A4 Fabric Swatch Book with all weave counts (30s-80s) and color cards"
    },
    {
      id: "t-shirts",
      name: "T-Shirts",
      category: "textiles",
      categoryName: "Textiles & Garments",
      hsCode: "6109.10",
      specs: "100% Ring-spun combed cotton, 160 - 220 GSM, Bio-washed, Enzyme treated, Custom Screen/DTG",
      origin: "Tirupur, Tamil Nadu / South India (India's Knitwear Capital)",
      moq: "500 Pcs per style/color",
      packaging: "Individual clear poly bag, 50-100 pcs per 5-ply export carton",
      packagingOptions: [
        "Individual clear poly bag with custom branded barcode sticker",
        "50-100 pcs flat packed per 5-ply heavy export carton",
        "Hanger pack ready for department store retail display",
        "Custom private-label printed poly mailers"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Tuticorin / Chennai / Cochin",
      certifications: ["WRAP Certified", "Sedex SMETA Audited", "OEKO-TEX 100"],
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800&q=80",
      description: "Export-grade crew neck and polo t-shirts manufactured in Tirupur. Features double-needle stitching, anti-pilling bio-wash, and custom OEM private branding with custom neck tags.",
      leadTime: "15-25 Days",
      sampleAvailable: "Pre-production garment sample with custom embroidery/print"
    },
    {
      id: "bedsheets",
      name: "Bedsheets",
      category: "textiles",
      categoryName: "Textiles & Garments",
      hsCode: "6302.21",
      specs: "300 to 800 Thread Count (TC) Percale & Sateen, 100% Long-Staple Indian Cotton, Single/Double/King",
      origin: "Coimbatore & Karur, Tamil Nadu / South India",
      moq: "500 Sets",
      packaging: "Book-fold zipper PVC pouch with cardboard insert or flat hotel bundle packing",
      packagingOptions: [
        "Book-fold zipper PVC pouch with printed color cardboard insert",
        "Flat bundle hotel linen packing in plastic bands and carton cases",
        "Custom private-label eco-friendly paper sleeve band packaging"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Tuticorin / Chennai / Cochin",
      certifications: ["OEKO-TEX Standard 100", "ISO 9001", "Hospitality Grade Audited"],
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80",
      description: "Silky smooth, high thread count luxury hotel bed sheets and duvet covers woven from long-staple Indian cotton with superior wash resistance, minimal pilling, and luster.",
      leadTime: "14-20 Days",
      sampleAvailable: "Full King-size sheet set sample for fabric inspection"
    },
    {
      id: "towels",
      name: "Towels",
      category: "textiles",
      categoryName: "Textiles & Garments",
      hsCode: "6302.60",
      specs: "100% Cotton Zero-Twist & Ring-Spun Terry Towels, 450 to 700 GSM, High absorbency",
      origin: "Karur & Madurai, Tamil Nadu / South India",
      moq: "1,000 Pcs",
      packaging: "Compressed bale packing or cartons with moisture-resistant poly liners",
      packagingOptions: [
        "Compressed bale packing (100 pcs per bale) wrapped in HDPE",
        "5-ply corrugated export cartons with moisture-resistant poly liners",
        "Custom retail ribbon-tied gift sets for department stores"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Tuticorin / Chennai / Cochin",
      certifications: ["OEKO-TEX Standard 100", "GOTS Organic", "Azo-Free Dye Certified"],
      image: "https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&w=800&q=80",
      description: "Plush, ultra-absorbent terry bath towels, hand towels, and pool towels crafted with combed cotton yarns for luxury hospitality and retail department stores.",
      leadTime: "14-18 Days",
      sampleAvailable: "Bath towel sample (600 GSM) via DHL courier"
    },
    {
      id: "home-textiles",
      name: "Home Textiles",
      category: "textiles",
      categoryName: "Textiles & Garments",
      hsCode: "6304.92",
      specs: "Cotton & linen table runners, cushion covers, blackout curtains, kitchen aprons & oven mitts",
      origin: "Karur & Kannur, Tamil Nadu / South India",
      moq: "1,000 Pcs assorted",
      packaging: "Eco-friendly belly band packaging in master cartons",
      packagingOptions: [
        "Eco-friendly kraft belly band packaging inside master cartons",
        "Individual clear polybags with barcode labels for Amazon/FBA or retail",
        "Custom master cartons with barcode pallet markings"
      ],
      incoterms: "EXW, FOB, CIF",
      ports: "Tuticorin / Chennai / Cochin",
      certifications: ["Sedex Compliant", "OEKO-TEX", "REACH Standard"],
      image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",
      description: "Textured woven jacquard and yarn-dyed home furnishings tailored for European and North American home decor brands and departmental retail chains.",
      leadTime: "18-25 Days",
      sampleAvailable: "Assorted home textile sample pack (table runner + cushion cover)"
    }
  ]
};

// Helper lookup methods
function getCategoryById(id) {
  return EXPORT_DATA.categories.find(c => c.id === id);
}

function getProductById(id) {
  return EXPORT_DATA.products.find(p => p.id === id);
}

function getProductsByCategory(catId) {
  if (!catId || catId === 'all') return EXPORT_DATA.products;
  return EXPORT_DATA.products.filter(p => p.category === catId);
}

function searchProducts(query, category = 'all') {
  let list = getProductsByCategory(category);
  if (!query || !query.trim()) return list;
  const q = query.toLowerCase().trim();
  return list.filter(p => 
    p.name.toLowerCase().includes(q) ||
    p.categoryName.toLowerCase().includes(q) ||
    p.hsCode.toLowerCase().includes(q) ||
    p.specs.toLowerCase().includes(q) ||
    p.origin.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q)
  );
}
