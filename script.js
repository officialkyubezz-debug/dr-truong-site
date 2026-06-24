const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const navTabLinks = document.querySelectorAll('.main-nav a[data-tab]');
const tabLinks = document.querySelectorAll('a[data-tab]');
const tabPanels = document.querySelectorAll('.tab-panel');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const opened = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', opened ? 'true' : 'false');
  });
}

function activateTab(tabId) {
  // Only update the active state of navigation links.
  navTabLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.tab === tabId);
  });
}

tabLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const tabId = link.dataset.tab;
    if (!tabId) return;
    // Update nav link active state
    activateTab(tabId);

    // If on mobile, open the link in a new tab and close the menu.
    const isMobile = window.matchMedia('(max-width: 760px)').matches;
    if (isMobile) {
      const href = link.getAttribute('href');
      if (href) window.open(href, '_blank');
      if (mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
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
    const isMobile = window.matchMedia('(max-width: 760px)').matches;
    if (isMobile) {
      event.preventDefault();
      const href = link.getAttribute('href');
      if (href) window.open(href, '_blank');
    }
    if (mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
