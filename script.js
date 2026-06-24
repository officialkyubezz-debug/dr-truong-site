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
  tabPanels.forEach(panel => {
    panel.classList.toggle('active', panel.id === tabId);
  });

  navTabLinks.forEach(link => {
    link.classList.toggle('active', link.dataset.tab === tabId);
  });
}

tabLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const tabId = link.dataset.tab;
    if (!tabId) return;
    activateTab(tabId);

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
  link.addEventListener('click', () => {
    if (mainNav.classList.contains('open')) {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
