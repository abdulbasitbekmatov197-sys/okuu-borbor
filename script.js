/* ===== Катраң окуу борбору — script.js ===== */

/* 1. Mobile hamburger меню */
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
  burger.textContent = open ? '✕' : '☰';
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  burger.setAttribute('aria-expanded', 'false');
  burger.textContent = '☰';
}));

/* 2. Графиктин tab'тарын алмаштыруу */
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
function showTab(name) {
  tabs.forEach(t => t.setAttribute('aria-selected', t.dataset.tab === name));
  panels.forEach(p => p.classList.toggle('active', p.id === 'panel-' + name));
}
tabs.forEach(t => t.addEventListener('click', () => showTab(t.dataset.tab)));

/* "Кеңири маалымат" басылганда тийешелүү график ачылат */
document.querySelectorAll('a[data-tab]').forEach(a =>
  a.addEventListener('click', () => showTab(a.dataset.tab)));

/* 3. Скролл болгондо жумшак пайда болуу (fade-in) */
const items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('show'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  items.forEach(el => io.observe(el));
} else {
  items.forEach(el => el.classList.add('show'));
}

/* 4. Байланыш формасы (backend жок — демо билдирүү) */
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.textContent = 'Рахмат! Билдирүүңүз кабыл алынды. Жакында сиз менен байланышабыз.';
  e.target.reset();
});
