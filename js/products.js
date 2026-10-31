/**
 * Khalsa Medicos - Product Catalog, Search & Filtering Module
 * Featuring comprehensive authentic medicines, healthcare devices, and prices in INR (₹).
 */

const PRODUCTS_DATA = [
  // --- MEDICINES & PAIN RELIEF ---
  {
    id: 'med-1',
    name: 'Dolo 650mg Paracetamol Tablets',
    brand: 'Micro Labs / Khalsa Medicos',
    category: 'Medicines & Pain Relief',
    packageSize: 'Strip of 15 Tablets',
    price: 32,
    originalPrice: 42,
    rating: 4.9,
    reviews: 380,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: false,
    description: 'Trusted fever and moderate body ache relief tablet. Fast antipyretic action for headaches, viral fever, toothache, and musculoskeletal discomfort.'
  },
  {
    id: 'med-2',
    name: 'Combiflam Ibuprofen (400mg) & Paracetamol (325mg)',
    brand: 'Sanofi India',
    category: 'Medicines & Pain Relief',
    packageSize: 'Strip of 20 Tablets',
    price: 45,
    originalPrice: 56,
    rating: 4.8,
    reviews: 295,
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: false,
    description: 'Dual-action anti-inflammatory painkiller for severe body ache, arthritis flare-ups, muscular sprains, and back pain.'
  },
  {
    id: 'med-3',
    name: 'Volini Fast Joint & Muscle Pain Relief Gel',
    brand: 'Sun Pharma',
    category: 'Medicines & Pain Relief',
    packageSize: '50g Topical Gel Tube',
    price: 165,
    originalPrice: 195,
    rating: 4.8,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: false,
    description: 'Diclofenac diethylamine formulation that penetrates deep into joints and muscles to quickly relieve acute backache, neck pain, and sports sprains.'
  },

  // --- PRESCRIPTION MEDICINES (ANTIBIOTICS & SPECIALIZED) ---
  {
    id: 'med-4',
    name: 'Amoxicillin & Potassium Clavulanate 625mg (Leemox-CV)',
    brand: 'Leeford Healthcare / Khalsa Medicos Partner',
    category: 'Prescription Medicines',
    packageSize: 'Strip of 10 Tablets',
    price: 195,
    originalPrice: 245,
    rating: 4.9,
    reviews: 140,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: true,
    description: 'High-potency broad-spectrum antibiotic for bacterial chest infections, sinusitis, tonsillitis, dental abscesses, and skin infections. Dispensed strictly against doctor prescription.'
  },
  {
    id: 'med-5',
    name: 'Azithromycin 500mg Tablets (Azee 500)',
    brand: 'Cipla Ltd.',
    category: 'Prescription Medicines',
    packageSize: 'Strip of 5 Tablets',
    price: 118,
    originalPrice: 145,
    rating: 4.8,
    reviews: 125,
    image: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: true,
    description: 'Macrolide antibiotic tablet for upper respiratory tract infections, strep throat, and bronchitis. Schedule H drug requiring registered doctor slip.'
  },
  {
    id: 'med-6',
    name: 'Ciprofloxacin & Dexamethasone Eye / Ear Drops',
    brand: 'Leeford / Cipla',
    category: 'Prescription Medicines',
    packageSize: '10ml Sterile Dropper Bottle',
    price: 48,
    originalPrice: 62,
    rating: 4.7,
    reviews: 88,
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: true,
    description: 'Antibacterial and anti-inflammatory ophthalmic solution for conjunctivitis, corneal redness, and external ear bacterial infections.'
  },
  {
    id: 'med-7',
    name: 'Pediatric Paracetamol & Ibuprofen Oral Suspension',
    brand: 'Leeford Healthcare',
    category: 'Prescription Medicines',
    packageSize: '60ml Suspension with Measuring Cap',
    price: 45,
    originalPrice: 58,
    rating: 4.8,
    reviews: 94,
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: true,
    description: 'Paediatric fever and pain reducing oral suspension in pleasant fruit flavour. Always consult your paediatrician for precise weight-based dosage.'
  },

  // --- DIGESTIVE & ANTACIDS ---
  {
    id: 'med-8',
    name: 'Pan-D Pantoprazole (40mg) & Domperidone (30mg SR)',
    brand: 'Alkem Laboratories',
    category: 'Digestive & Acidity',
    packageSize: 'Strip of 15 Capsules',
    price: 178,
    originalPrice: 220,
    rating: 4.9,
    reviews: 310,
    image: 'https://images.unsplash.com/photo-1585435465945-bef5a93f8849?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: true,
    description: 'Sustained-release capsule formulation for chronic acidity, GERD, acid reflux, heartburn, and morning sickness.'
  },
  {
    id: 'med-9',
    name: 'Digene Antacid & Antigas Oral Gel (Mint Flavour)',
    brand: 'Abbott Healthcare',
    category: 'Digestive & Acidity',
    packageSize: '200ml Liquid Bottle',
    price: 145,
    originalPrice: 175,
    rating: 4.8,
    reviews: 245,
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: false,
    description: 'Sugar-free fast acting liquid antacid with magnesium hydroxide and simethicone to immediately relieve burning in chest and bloated stomach.'
  },
  {
    id: 'med-10',
    name: 'Electral WHO-Formula Oral Rehydration Salts (ORS)',
    brand: 'FDC Limited',
    category: 'Digestive & Acidity',
    packageSize: 'Pack of 5 Sachets (21.8g each)',
    price: 98,
    originalPrice: 115,
    rating: 4.9,
    reviews: 180,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: false,
    description: 'WHO certified oral electrolyte formulation for rapid recovery from dehydration due to diarrhoea, intense heat, vomitting, and fatigue.'
  },

  // --- COUGH, COLD & ALLERGY ---
  {
    id: 'med-11',
    name: 'Cetirizine 10mg Anti-Allergy Tablets (Cetcip)',
    brand: 'Cipla Ltd.',
    category: 'Cough, Cold & Allergy',
    packageSize: 'Strip of 10 Tablets',
    price: 24,
    originalPrice: 32,
    rating: 4.8,
    reviews: 190,
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: false,
    description: 'Effective 24-hour antihistamine for seasonal hay fever, runny nose, allergic sneezing, watery eyes, and skin itching (urticaria).'
  },
  {
    id: 'med-12',
    name: 'Cheston Cold Cough & Decongestant Tablets',
    brand: 'Cipla Ltd.',
    category: 'Cough, Cold & Allergy',
    packageSize: 'Strip of 10 Tablets',
    price: 52,
    originalPrice: 65,
    rating: 4.7,
    reviews: 165,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: false,
    description: 'Combination of Paracetamol, Phenylephrine, and Cetirizine for comprehensive relief from sinus congestion, fever, and nasal blockage.'
  },
  {
    id: 'med-13',
    name: 'Herbal Tulsi & Honey Ayurvedic Cough Syrup (Koflet)',
    brand: 'Himalaya / Leeford',
    category: 'Cough, Cold & Allergy',
    packageSize: '100ml Syrup Bottle',
    price: 110,
    originalPrice: 140,
    rating: 4.7,
    reviews: 115,
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: false,
    description: '100% non-drowsy herbal honey elixir with Holy Basil and Vasaka. Calms bronchial spasms and soothes inflamed throat tissues.'
  },

  // --- VITAMINS & SUPPLEMENTS ---
  {
    id: 'med-14',
    name: 'Becosules Performance B-Complex & Zinc Capsules',
    brand: 'Pfizer Ltd.',
    category: 'Vitamins & Supplements',
    packageSize: 'Strip of 30 Capsules',
    price: 52,
    originalPrice: 68,
    rating: 4.9,
    reviews: 420,
    image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: false,
    description: 'Essential Vitamin B-Complex with Vitamin C and Zinc. Treats mouth ulcers, restores vitality, and replenishes micronutrient deficiencies.'
  },
  {
    id: 'med-15',
    name: 'Neurobion Forte Vitamin B12 + B6 Nerve Health',
    brand: 'Procter & Gamble Health',
    category: 'Vitamins & Supplements',
    packageSize: 'Strip of 30 Tablets',
    price: 38,
    originalPrice: 48,
    rating: 4.8,
    reviews: 350,
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: false,
    description: 'Therapeutic B-vitamins formula designed to relieve numbness, tingling sensations in hands and feet, and promote healthy nerve cell regeneration.'
  },
  {
    id: 'med-16',
    name: 'Vitamin C 500mg Chewable with Zinc & Amla (Limcee)',
    brand: 'Abbott Healthcare',
    category: 'Vitamins & Supplements',
    packageSize: 'Pack of 60 Orange Chewables',
    price: 285,
    originalPrice: 380,
    rating: 4.8,
    reviews: 210,
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: false,
    description: 'Daily antioxidant and immunity support chewable tablet. Rich in ascorbic acid, bioflavonoids, and organic amla extract.'
  },
  {
    id: 'med-17',
    name: 'Triple Strength Omega-3 Fish Oil 1000mg Softgels',
    brand: 'Khalsa Medicos Health Line',
    category: 'Vitamins & Supplements',
    packageSize: 'Bottle of 60 Softgels',
    price: 649,
    originalPrice: 999,
    rating: 4.8,
    reviews: 95,
    image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: false,
    description: 'Pure molecularly distilled marine oil with 550mg EPA and 380mg DHA for cardiovascular health, joint flexibility, and cognitive clarity.'
  },

  // --- HEALTHCARE DEVICES & DIAGNOSTICS ---
  {
    id: 'dev-1',
    name: 'Omron HEM-7120 Digital Blood Pressure Monitor',
    brand: 'Omron Healthcare Japan',
    category: 'Healthcare Devices',
    packageSize: 'Machine Kit with Arm Cuff',
    price: 1899,
    originalPrice: 2450,
    rating: 4.9,
    reviews: 142,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: false,
    description: 'Clinically validated upper-arm digital BP monitor featuring Intellisense technology, hypertension warning indicator, and 3-year warranty.'
  },
  {
    id: 'dev-2',
    name: 'Accu-Chek Active Blood Glucose Monitor Kit',
    brand: 'Roche Diagnostics',
    category: 'Healthcare Devices',
    packageSize: 'Meter + 10 Strips + Lancing Pen',
    price: 1249,
    originalPrice: 1599,
    rating: 4.7,
    reviews: 110,
    image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: false,
    description: 'Reliable, painless 5-second blood sugar level testing kit. Meets ISO 15197:2013 strict accuracy standards for home diabetes care.'
  },
  {
    id: 'dev-3',
    name: 'Fingertip Pulse Oximeter with OLED Display',
    brand: 'Dr. Morepen / Khalsa',
    category: 'Healthcare Devices',
    packageSize: 'OLED Device + Batteries + Lanyard',
    price: 699,
    originalPrice: 1200,
    rating: 4.6,
    reviews: 86,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: false,
    description: 'Rapid 8-second blood oxygen saturation (SpO2) and pulse rate monitor. Auto shut-off sensor and dual-color graphic display.'
  },

  // --- FIRST AID & ANTISEPTICS ---
  {
    id: 'fa-1',
    name: 'Betadine 10% Antiseptic Microbicidal Ointment',
    brand: 'Win-Medicare',
    category: 'First Aid',
    packageSize: '20g Ointment Tube',
    price: 120,
    originalPrice: 140,
    rating: 4.9,
    reviews: 215,
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: false,
    description: 'Povidone-Iodine 10% w/w water-soluble ointment for prevention and treatment of surface wound infections, burns, cuts, and abrasions.'
  },
  {
    id: 'fa-2',
    name: 'Dettol Antiseptic Disinfectant Liquid 550ml',
    brand: 'Reckitt Benckiser',
    category: 'First Aid',
    packageSize: '550ml Value Pack Bottle',
    price: 215,
    originalPrice: 240,
    rating: 4.9,
    reviews: 320,
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: false,
    description: 'Proven hospital-grade antiseptic formula for first aid wound cleansing, insect bites, surface disinfection, and hygiene bathing.'
  },
  {
    id: 'fa-3',
    name: 'Elastic Crepe Bandage (10cm) with Fastener Clips',
    brand: 'Leeford Surgical Line',
    category: 'First Aid',
    packageSize: 'Roll of 4 Metres Stretched',
    price: 160,
    originalPrice: 210,
    rating: 4.6,
    reviews: 65,
    image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: false,
    description: '100% woven cotton breathable elastic support bandage for sprains, muscle swelling, sports injuries, and joint stabilization.'
  },

  // --- PERSONAL CARE & DERMATOLOGY ---
  {
    id: 'pc-1',
    name: 'Cetaphil Gentle Skin Cleanser for Sensitive Skin',
    brand: 'Galderma',
    category: 'Personal Care',
    packageSize: '250ml Pump Dispenser',
    price: 420,
    originalPrice: 510,
    rating: 4.9,
    reviews: 260,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: false,
    description: 'Dermatologist recommended soap-free, non-comedogenic daily gentle facial cleanser that hydrates while gently removing impurities.'
  },
  {
    id: 'pc-2',
    name: 'Pure Aloe Vera Soothing & Cooling Gel 200g',
    brand: 'Leeford Herbal Line',
    category: 'Personal Care',
    packageSize: '200g Jar',
    price: 180,
    originalPrice: 240,
    rating: 4.6,
    reviews: 118,
    image: 'https://images.unsplash.com/photo-1608248597359-5613470404c0?w=600&auto=format&fit=crop&q=80',
    requiresPrescription: false,
    description: 'Pure cold-pressed organic aloe vera gel enriched with Vitamin E. Soothes heat rash, sunburns, shaving irritation, and dry skin.'
  }
];

// Current filter and search states
let currentCategory = 'all';
let currentSearchQuery = '';
let currentSort = 'featured';

// Calculate discount percentage
function getDiscountPercent(price, originalPrice) {
  if (!originalPrice || originalPrice <= price) return null;
  return Math.round(((originalPrice - price) / originalPrice) * 100);
}

// Render the products into the target container
function renderProducts() {
  const container = document.getElementById('productsContainer');
  if (!container) return;

  let filtered = PRODUCTS_DATA.filter((item) => {
    const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
    const matchesSearch = item.name.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                          item.category.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                          (item.brand && item.brand.toLowerCase().includes(currentSearchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Apply sorting
  if (currentSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Update counter text
  const counterEl = document.getElementById('productResultsCount');
  if (counterEl) {
    counterEl.textContent = `Showing ${filtered.length} of ${PRODUCTS_DATA.length} products`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-products-state">
        <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🔍</div>
        <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem; color: var(--dark);">No healthcare products found</h3>
        <p style="color: var(--muted); margin-bottom: 1.25rem; font-size: 0.95rem;">
          We couldn't find matches for "${currentSearchQuery}". Try another medicine keyword or browse our pharmacy categories.
        </p>
        <button class="btn btn-secondary btn-sm" onclick="resetProductFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  let html = '';
  filtered.forEach((product) => {
    const discount = getDiscountPercent(product.price, product.originalPrice);

    html += `
      <div class="product-card" data-id="${product.id}">
        <div class="product-badge-wrap">
          ${product.requiresPrescription ? `
            <span class="badge-rx" title="Prescription Required - Schedule H Medicine">
              Rx Required
            </span>
          ` : ''}
          <span class="badge-category">${product.category}</span>
        </div>

        <div class="product-img-container" onclick="openProductQuickView('${product.id}')" style="cursor: pointer;">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            loading="lazy" 
            onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500'"
          />
        </div>

        <div class="product-body">
          <div class="product-category-sub">${product.brand || product.category}</div>
          <h3 class="product-title" onclick="openProductQuickView('${product.id}')" style="cursor: pointer;" title="${product.name}">${product.name}</h3>

          ${product.packageSize ? `
            <div class="product-package-tag">
              📦 ${product.packageSize}
            </div>
          ` : ''}

          <div class="product-meta">
            <div class="rating-stars" title="${product.rating} out of 5 stars">
              ★ <span>${product.rating}</span> <span style="color: var(--muted); font-size: 0.75rem;">(${product.reviews})</span>
            </div>
            <span style="color: var(--success); font-weight: 600; font-size: 0.775rem;">● In Stock</span>
          </div>

          <div class="product-price-row">
            <span class="product-price">₹${product.price}</span>
            ${product.originalPrice ? `<span class="product-original-price">₹${product.originalPrice}</span>` : ''}
            ${discount ? `<span class="product-discount-pill">${discount}% OFF</span>` : ''}
          </div>

          <div class="card-action-btns">
            <button class="btn-add-cart" onclick="handleAddToCartClick('${product.id}')" title="Add to Cart (₹${product.price})">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
              </svg>
              <span>Add ₹${product.price}</span>
            </button>
            <button class="btn-quick-view" onclick="openProductQuickView('${product.id}')" title="View Medicine Details">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Handler for add to cart button
function handleAddToCartClick(productId) {
  const product = PRODUCTS_DATA.find((p) => p.id === productId);
  if (!product) return;

  if (typeof addToCart === 'function') {
    addToCart(product, 1);
  }
}

// Quick View Modal
function openProductQuickView(productId) {
  const product = PRODUCTS_DATA.find((p) => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('productDetailModal');
  const modalContent = document.getElementById('productDetailContent');
  if (!modal || !modalContent) return;

  const discount = getDiscountPercent(product.price, product.originalPrice);

  modalContent.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 1.5rem; align-items: start;">
      <div style="border-radius: 8px; overflow: hidden; border: 1px solid var(--border-color); background: var(--light-bg);">
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          style="width: 100%; height: 260px; object-fit: cover;" 
          onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500'"
        />
      </div>
      <div>
        <div style="font-size: 0.75rem; color: var(--primary); font-weight: 700; text-transform: uppercase; margin-bottom: 0.35rem;">
          ${product.brand || product.category}
        </div>
        <h2 style="font-size: 1.35rem; color: var(--dark); margin-bottom: 0.5rem; line-height: 1.3;">${product.name}</h2>
        
        ${product.packageSize ? `
          <div style="font-size: 0.85rem; color: var(--muted); margin-bottom: 0.75rem;">
            Unit Packing: <strong>${product.packageSize}</strong>
          </div>
        ` : ''}

        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem; font-size: 0.85rem;">
          <span style="color: #f59e0b; font-weight: 700;">★ ${product.rating}</span>
          <span style="color: var(--muted);">(${product.reviews} verified reviews)</span>
          <span style="color: var(--success); font-weight: 600;">• Sourced Direct</span>
        </div>

        <div style="display: flex; align-items: baseline; gap: 0.75rem; margin-bottom: 1rem;">
          <span style="font-size: 1.65rem; font-weight: 800; color: var(--primary-dark);">₹${product.price}</span>
          ${product.originalPrice ? `<span style="font-size: 1rem; color: var(--muted); text-decoration: line-through;">MRP ₹${product.originalPrice}</span>` : ''}
          ${discount ? `
            <span style="font-size: 0.8rem; background: #dcfce7; color: var(--primary-dark); padding: 2px 8px; border-radius: 4px; font-weight: 700;">
              Save ${discount}% (₹${product.originalPrice - product.price})
            </span>
          ` : ''}
        </div>

        ${product.requiresPrescription ? `
          <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 6px; padding: 0.75rem; margin-bottom: 1rem; font-size: 0.8rem; color: #92400e;">
            <strong>⚠️ Schedule H Prescription Drug:</strong> Requires a valid physical or digital prescription from a registered doctor. Verified by Khalsa Medicos licensed pharmacist before dispensing.
          </div>
        ` : ''}

        <p style="font-size: 0.9rem; color: var(--body-text); margin-bottom: 1.5rem; line-height: 1.6;">
          ${product.description}
        </p>

        <div style="display: flex; gap: 0.75rem;">
          <button class="btn btn-primary btn-block" onclick="handleAddToCartClick('${product.id}'); closeProductDetailModal();">
            Add to Cart (₹${product.price})
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
}

function closeProductDetailModal() {
  const modal = document.getElementById('productDetailModal');
  if (modal) {
    modal.classList.remove('open');
  }
}

// Reset filters
function resetProductFilters() {
  currentCategory = 'all';
  currentSearchQuery = '';
  currentSort = 'featured';

  const searchInput = document.getElementById('productSearchInput');
  if (searchInput) searchInput.value = '';

  const sortSelect = document.getElementById('productSortSelect');
  if (sortSelect) sortSelect.value = 'featured';

  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach((p) => {
    p.classList.toggle('active', p.getAttribute('data-category') === 'all');
  });

  renderProducts();
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();

  // Search input with debounce
  const searchInput = document.getElementById('productSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value.trim();
      renderProducts();
    });
  }

  // Category filter buttons
  const pills = document.querySelectorAll('.filter-pill');
  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      pills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
      currentCategory = pill.getAttribute('data-category');
      renderProducts();
    });
  });

  // Sort dropdown
  const sortSelect = document.getElementById('productSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderProducts();
    });
  }

  // Modal backdrop click
  const modal = document.getElementById('productDetailModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeProductDetailModal();
      }
    });
  }
});
