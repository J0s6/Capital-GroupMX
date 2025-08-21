// Mobile menu
const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('primaryNav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Active link on scroll
const links = Array.from(document.querySelectorAll('.nav-links a'));
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

const setActive = () => {
  const y = window.scrollY + 120;
  let active = null;
  for (const sec of sections) {
    if (y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight) {
      active = sec.id;
      break;
    }
  }
  links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + active));
};
window.addEventListener('scroll', setActive);
window.addEventListener('load', setActive);

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('show'));
}, {threshold: .12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
