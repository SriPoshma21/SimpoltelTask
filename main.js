const toggleBtn = document.querySelector('.menu-toggle');
const panel = document.getElementById('mobile-menu');

toggleBtn?.addEventListener('click', () => {
  const willOpen = panel.hasAttribute('hidden');
  if (willOpen) {
    panel.removeAttribute('hidden');
    toggleBtn.setAttribute('aria-expanded', 'true');
  } else {
    panel.setAttribute('hidden', '');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }
});
