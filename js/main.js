/**
 * Khalsa Medicos - Main Shared JavaScript Module
 * Handles mobile drawer, global toasts, header scroll states, and session status.
 */

// Show toast notification
function showToast(message, type = 'success') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'success' ? 'toast-success' : 'toast-warning'}`;
  
  const icon = type === 'success' ? '✓' : '⚠️';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 300);
  }, 3200);
}

// Toggle Mobile Navigation Drawer
function toggleMobileNav(forceState) {
  const backdrop = document.getElementById('mobileNavBackdrop');
  if (!backdrop) return;

  if (typeof forceState === 'boolean') {
    if (forceState) {
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  } else {
    const isOpen = backdrop.classList.contains('open');
    if (isOpen) {
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    } else {
      backdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }
}

// Open prescription guide modal
function openPrescriptionPolicyModal() {
  const modal = document.getElementById('rxPolicyModal');
  if (modal) {
    modal.classList.add('open');
  }
}

function closePrescriptionPolicyModal() {
  const modal = document.getElementById('rxPolicyModal');
  if (modal) {
    modal.classList.remove('open');
  }
}

// Check logged in user and display avatar in navbar
function updateHeaderUserStatus() {
  try {
    const raw = localStorage.getItem('khalsa_medicos_user');
    if (!raw) return;
    const user = JSON.parse(raw);
    if (!user || !user.name) return;

    const navActions = document.querySelectorAll('.user-nav-slot');
    navActions.forEach((slot) => {
      slot.innerHTML = `
        <a href="login.html" class="user-status-pill" title="Signed in as ${user.name}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
          <span>${user.name.split(' ')[0]}</span>
        </a>
      `;
    });
  } catch (e) {
    console.error('Error syncing header user status', e);
  }
}

// Scroll effects
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (header) {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
});

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  updateHeaderUserStatus();

  // Mobile menu close on backdrop click
  const backdrop = document.getElementById('mobileNavBackdrop');
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        toggleMobileNav(false);
      }
    });
  }

  // Prescription modal backdrop click
  const rxModal = document.getElementById('rxPolicyModal');
  if (rxModal) {
    rxModal.addEventListener('click', (e) => {
      if (e.target === rxModal) {
        closePrescriptionPolicyModal();
      }
    });
  }
});
