document.getElementById('year').textContent = new Date().getFullYear();

/* Menú móvil */
const burger = document.getElementById('burgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

burger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  burger.classList.toggle('open', isOpen);
  burger.setAttribute('aria-expanded', isOpen);
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  });
});

/* Filtro de carta por categoría */
const tabs = document.querySelectorAll('.menu-tab');
const dishes = document.querySelectorAll('.dish');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const cat = tab.dataset.cat;
    dishes.forEach(d => d.classList.toggle('show', d.dataset.cat === cat));
  });
});

/* Carrusel de opiniones */
const track = document.getElementById('reviewsTrack');
const prevBtn = document.getElementById('revPrev');
const nextBtn = document.getElementById('revNext');

function scrollReviews(dir) {
  const card = track.querySelector('.review-card');
  if (!card) return;
  const gap = 22;
  track.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: 'smooth' });
}
prevBtn.addEventListener('click', () => scrollReviews(-1));
nextBtn.addEventListener('click', () => scrollReviews(1));

/* Banner de cookies */
const cookieBanner = document.getElementById('cookieBanner');
const cookieAccept = document.getElementById('cookieAccept');
const cookieReject = document.getElementById('cookieReject');
const COOKIE_KEY = 'mezcalrock_cookie_choice';

if (!localStorage.getItem(COOKIE_KEY)) {
  cookieBanner.classList.add('show');
}
cookieAccept.addEventListener('click', () => {
  localStorage.setItem(COOKIE_KEY, 'accepted');
  cookieBanner.classList.remove('show');
});
cookieReject.addEventListener('click', () => {
  localStorage.setItem(COOKIE_KEY, 'rejected');
  cookieBanner.classList.remove('show');
});

/* Header con fondo sólido al hacer scroll */
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10 ? '0 8px 24px rgba(0,0,0,.35)' : 'none';
});
