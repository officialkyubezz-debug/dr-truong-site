const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const navTabLinks = document.querySelectorAll('.main-nav a[data-tab]');
const tabLinks = document.querySelectorAll('a[data-tab]');
const tabPanels = document.querySelectorAll('.tab-panel');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const opened = mainNav.classList.toggle('open');
    navToggle.classList.toggle('open', opened);
    navToggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });
}

function activateTab(tabId) {
  // Only update the active state of navigation links.
  navTabLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.tab === tabId);
  });
  // Hide the hero section on any tab other than the start/home.
  const hero = document.querySelector('.hero-section');
  if (hero) {
    // show hero only when tabId is falsy or explicitly 'home'
    hero.classList.toggle('hidden', !!tabId && tabId !== 'home');
  }
}

tabLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const tabId = link.dataset.tab;
    if (!tabId) return;

    // Update nav link active state
    activateTab(tabId);

    const isMobile = window.matchMedia('(max-width: 760px)').matches;
    if (isMobile) {
      tabPanels.forEach(panel => {
        panel.classList.toggle('active', panel.id === tabId);
      });
      if (mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
      return;
    }

    // Desktop: smooth-scroll to section
    if (mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
    const target = document.getElementById(tabId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const links = document.querySelectorAll('.main-nav a:not([data-tab])');
links.forEach(link => {
  link.addEventListener('click', event => {
    // Do not open new browser tabs from the mobile menu. Let the link behave normally
    // (anchor navigation or external navigation) and only close the menu.
    if (mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
    // allow default navigation to proceed
  });
});
