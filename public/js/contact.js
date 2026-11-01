/**
 * Khalsa Medicos - Contact Form & Location Module (Pure Frontend)
 */

function handleContactSubmit(e) {
  e.preventDefault();

  const nameInput = document.getElementById('contactName');
  const phoneInput = document.getElementById('contactPhone');
  const emailInput = document.getElementById('contactEmail');
  const queryTypeInput = document.getElementById('contactQueryType');
  const messageInput = document.getElementById('contactMessage');
  const successBox = document.getElementById('contactSuccessBox');

  const name = nameInput ? nameInput.value.trim() : '';
  const phone = phoneInput ? phoneInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';
  const queryType = queryTypeInput ? queryTypeInput.value : 'General';
  const message = messageInput ? messageInput.value.trim() : '';

  // Frontend Validation
  if (!name || name.length < 2) {
    alert('Please enter your full name.');
    if (nameInput) nameInput.focus();
    return;
  }

  // Validate phone (10 digits)
  const phoneDigits = phone.replace(/\D/g, '');
  if (phoneDigits.length < 10) {
    alert('Please provide a valid 10-digit mobile number for pharmacist callback.');
    if (phoneInput) phoneInput.focus();
    return;
  }

  // Generate Demo Inquiry Reference ID
  const refId = 'KM-INQ-' + Math.floor(1000 + Math.random() * 9000);

  if (successBox) {
    successBox.innerHTML = `
      <div style="display:flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
        <span style="background: var(--primary); color: #fff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items:center; justify-content: center; font-weight: bold;">✓</span>
        <h4 style="color: var(--primary-dark); font-size: 1.1rem; margin:0;">Inquiry Submitted Successfully</h4>
      </div>
      <p style="font-size: 0.9rem; margin-bottom: 0.5rem;">
        Thank you, <strong>${name}</strong>. Your ticket <strong>#${refId}</strong> for <em>${queryType}</em> has been registered with Khalsa Medicos.
      </p>
      <p style="font-size: 0.85rem; color: var(--muted); margin:0;">
        Our pharmacist on duty will review your details and reach out at <strong>+91 ${phone}</strong> within 30 minutes during store hours.
      </p>
    `;
    successBox.style.display = 'block';
  }

  // Reset Form
  e.target.reset();

  if (typeof showToast === 'function') {
    showToast(`Inquiry #${refId} received!`, 'success');
  }

  // Smooth scroll to confirmation
  if (successBox) {
    successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
  }
});
