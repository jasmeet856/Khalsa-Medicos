/**
 * Khalsa Medicos - Shopping Cart & Order System (Pure Frontend / LocalStorage)
 */

const CART_STORAGE_KEY = 'khalsa_medicos_cart';

// Retrieve cart from LocalStorage
function getCart() {
  try {
    const data = localStorage.getItem(CART_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Error reading cart from localStorage', e);
    return [];
  }
}

// Persist cart to LocalStorage
function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartBadges();
  } catch (e) {
    console.error('Error saving cart to localStorage', e);
  }
}

// Update all cart count badges in the DOM
function updateCartBadges() {
  const cart = getCart();
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach((badge) => {
    badge.textContent = totalCount;
    badge.style.display = totalCount > 0 ? 'inline-block' : 'inline-block';
  });
}

// Add item to cart
function addToCart(product, quantity = 1) {
  const cart = getCart();
  const existingIndex = cart.findIndex((item) => item.id === product.id);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice || product.price,
      image: product.image,
      category: product.category,
      requiresPrescription: Boolean(product.requiresPrescription),
      quantity: quantity
    });
  }

  saveCart(cart);
  renderCartDrawer();
  
  if (typeof showToast === 'function') {
    showToast(`Added "${product.name}" to cart`, 'success');
  }
  
  openCartDrawer();
}

// Remove item from cart
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== productId);
  saveCart(cart);
  renderCartDrawer();
  if (typeof showToast === 'function') {
    showToast('Item removed from cart', 'warning');
  }
}

// Change quantity (+1 or -1)
function updateCartQuantity(productId, delta) {
  const cart = getCart();
  const item = cart.find((i) => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart(cart);
  renderCartDrawer();
}

// Clear all items
function clearCart() {
  saveCart([]);
  renderCartDrawer();
}

// Calculate total sums
function calculateCartTotals() {
  const cart = getCart();
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = Math.round(subtotal * 0.05); // 5% GST on pharmacy supplies
  const shipping = subtotal > 499 || subtotal === 0 ? 0 : 50;
  const total = subtotal + tax + shipping;
  const hasRx = cart.some(item => item.requiresPrescription);

  return { subtotal, tax, shipping, total, hasRx };
}

// Render the cart slide-over drawer
function renderCartDrawer() {
  const cartContainer = document.getElementById('cartDrawerItems');
  const footerContainer = document.getElementById('cartDrawerFooter');
  if (!cartContainer || !footerContainer) return;

  const cart = getCart();
  const { subtotal, tax, shipping, total, hasRx } = calculateCartTotals();

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="cart-empty-view">
        <div class="cart-empty-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="8" cy="21" r="1"/>
            <circle cx="19" cy="21" r="1"/>
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
          </svg>
        </div>
        <h3 style="font-size: 1.15rem; margin-bottom: 0.5rem; color: var(--dark);">Your Cart is Empty</h3>
        <p style="font-size: 0.875rem; color: var(--muted); margin-bottom: 1.5rem;">Explore authentic healthcare & wellness essentials from Khalsa Medicos.</p>
        <a href="products.html" class="btn btn-primary btn-sm" onclick="closeCartDrawer()">Shop Products</a>
      </div>
    `;
    footerContainer.style.display = 'none';
    return;
  }

  footerContainer.style.display = 'block';

  let itemsHtml = '';
  cart.forEach((item) => {
    itemsHtml += `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${item.name}" class="cart-item-thumb" onerror="this.src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300'"/>
        <div class="cart-item-info">
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-price">₹${item.price} ${item.requiresPrescription ? '<span style="font-size: 0.7rem; background:#fed7aa; color:#c2410c; padding: 2px 6px; border-radius: 4px; font-weight:700;">Rx Req.</span>' : ''}</div>
          <div class="cart-item-actions">
            <div class="qty-control">
              <button class="qty-btn" onclick="updateCartQuantity('${item.id}', -1)" title="Decrease quantity">−</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQuantity('${item.id}', 1)" title="Increase quantity">+</button>
            </div>
            <button class="remove-item-btn" onclick="removeFromCart('${item.id}')">Remove</button>
          </div>
        </div>
      </div>
    `;
  });

  cartContainer.innerHTML = itemsHtml;

  footerContainer.innerHTML = `
    ${hasRx ? `
      <div style="background: #fffbeb; border: 1px solid #fef08a; padding: 0.65rem 0.85rem; border-radius: 6px; font-size: 0.775rem; color: #92400e; margin-bottom: 0.75rem;">
        <strong>Notice:</strong> Your order contains prescription items. Our registered pharmacist will verify your prescription prior to dispatch.
      </div>
    ` : ''}
    <div class="cart-summary-line">
      <span>Subtotal</span>
      <span>₹${subtotal}</span>
    </div>
    <div class="cart-summary-line">
      <span>Estimated GST (5%)</span>
      <span>₹${tax}</span>
    </div>
    <div class="cart-summary-line">
      <span>Delivery Charges</span>
      <span>${shipping === 0 ? '<span style="color:var(--success); font-weight:600;">FREE</span>' : `₹${shipping}`}</span>
    </div>
    <div class="cart-summary-total">
      <span>Total Amount</span>
      <span>₹${total}</span>
    </div>
    <div style="display: flex; gap: 0.5rem;">
      <button class="btn btn-secondary btn-sm" onclick="clearCart()" style="flex: 1;">Clear</button>
      <button class="btn btn-primary" onclick="initiateCheckout()" style="flex: 2;">Proceed to Checkout</button>
    </div>
  `;
}

// Drawer Open / Close Controls
function openCartDrawer() {
  const backdrop = document.getElementById('cartDrawerBackdrop');
  if (backdrop) {
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
    renderCartDrawer();
  }
}

function closeCartDrawer() {
  const backdrop = document.getElementById('cartDrawerBackdrop');
  if (backdrop) {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Frontend simulated checkout modal
function initiateCheckout() {
  const cart = getCart();
  if (cart.length === 0) return;

  const { total, hasRx } = calculateCartTotals();
  const orderId = 'KM-' + Math.floor(100000 + Math.random() * 900000);

  // Close drawer
  closeCartDrawer();

  const checkoutModal = document.getElementById('checkoutModal');
  if (!checkoutModal) {
    alert(`Thank you for your order! Order ID: ${orderId}. Total: ₹${total}. Khalsa Medicos team will contact you on +91 98881 02937.`);
    clearCart();
    return;
  }

  const modalBody = document.getElementById('checkoutModalBody');
  modalBody.innerHTML = `
    <div style="text-align: center; margin-bottom: 1.5rem;">
      <div style="width: 56px; height: 56px; background: #dcfce7; color: var(--primary-dark); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem; font-size: 1.5rem;">
        ✓
      </div>
      <h3 style="font-size: 1.4rem; color: var(--dark); margin-bottom: 0.25rem;">Order Placed Successfully!</h3>
      <p style="font-size: 0.85rem; color: var(--muted);">Demo Order ID: <strong>${orderId}</strong></p>
    </div>

    <div style="background: var(--light-bg); border: 1px solid var(--border-color); border-radius: 8px; padding: 1rem; margin-bottom: 1.25rem; font-size: 0.9rem;">
      <div style="display:flex; justify-content:space-between; margin-bottom: 0.4rem;">
        <span>Payment Method:</span>
        <strong>Cash on Delivery / UPI at Counter</strong>
      </div>
      <div style="display:flex; justify-content:space-between; margin-bottom: 0.4rem;">
        <span>Amount Payable:</span>
        <strong style="color: var(--primary); font-size: 1.1rem;">₹${total}</strong>
      </div>
      <div style="display:flex; justify-content:space-between;">
        <span>Status:</span>
        <span style="color: var(--success); font-weight: 700;">Confirmed (Frontend Demo)</span>
      </div>
    </div>

    ${hasRx ? `
      <div style="background: #fffbeb; border: 1px solid #fde68a; border-radius: 8px; padding: 0.85rem; margin-bottom: 1.25rem; font-size: 0.825rem; color: #92400e;">
        <strong>Pharmacist Verification Notice:</strong> For the prescription medicines in this order, please present your valid prescription doctor slip via WhatsApp at <strong>+91 98881-02937</strong> or during counter pickup.
      </div>
    ` : ''}

    <p style="font-size: 0.85rem; color: var(--muted); text-align: center; margin-bottom: 1.5rem;">
      Khalsa Medicos has received your reservation. For immediate urgent delivery or queries, call us at <strong>98881-02937</strong>.
    </p>

    <div style="display: flex; gap: 0.75rem;">
      <button class="btn btn-secondary btn-block" onclick="closeCheckoutModal()">Continue Shopping</button>
    </div>
  `;

  checkoutModal.classList.add('open');
  clearCart();
}

function closeCheckoutModal() {
  const checkoutModal = document.getElementById('checkoutModal');
  if (checkoutModal) {
    checkoutModal.classList.remove('open');
  }
}

// Global initialization
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadges();

  const backdrop = document.getElementById('cartDrawerBackdrop');
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeCartDrawer();
      }
    });
  }

  const checkoutModal = document.getElementById('checkoutModal');
  if (checkoutModal) {
    checkoutModal.addEventListener('click', (e) => {
      if (e.target === checkoutModal) {
        closeCheckoutModal();
      }
    });
  }
});
