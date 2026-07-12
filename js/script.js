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
const menuLists = document.querySelectorAll('.menu-list');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const cat = tab.dataset.cat;
    menuLists.forEach(list => list.classList.toggle('show', list.dataset.cat === cat));
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
const waFloat = document.querySelector('.wa-float');
const COOKIE_KEY = 'mezcalrock_cookie_choice';

function positionWaFloat() {
  if (cookieBanner.classList.contains('show')) {
    waFloat.style.bottom = (cookieBanner.offsetHeight + 32) + 'px';
  } else {
    waFloat.style.bottom = '';
  }
}

if (!localStorage.getItem(COOKIE_KEY)) {
  cookieBanner.classList.add('show');
}
positionWaFloat();
window.addEventListener('resize', positionWaFloat);

cookieAccept.addEventListener('click', () => {
  localStorage.setItem(COOKIE_KEY, 'accepted');
  cookieBanner.classList.remove('show');
  positionWaFloat();
});
cookieReject.addEventListener('click', () => {
  localStorage.setItem(COOKIE_KEY, 'rejected');
  cookieBanner.classList.remove('show');
  positionWaFloat();
});
