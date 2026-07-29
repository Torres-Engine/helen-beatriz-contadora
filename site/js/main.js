// Helen Beatriz Contadora — main.js
// Vanilla JS, sem dependências. Responsável por: menu mobile, sombra no header
// ao rolar, ano dinâmico no footer, fade-in com stagger, barra de progresso de
// rolagem e botão flutuante de WhatsApp.

document.addEventListener('DOMContentLoaded', () => {

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Ano dinâmico no footer ---
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Header com sombra ao rolar + barra de progresso + botão flutuante ---
  const navbar = document.getElementById('navbar');
  const scrollProgress = document.getElementById('scrollProgress');
  const whatsappFloat = document.getElementById('whatsappFloat');
  const hero = document.querySelector('.hero');

  const onScroll = () => {
    const scrollY = window.scrollY;

    // Sombra no header
    if (scrollY > 8) navbar.classList.add('is-scrolled');
    else navbar.classList.remove('is-scrolled');

    // Barra de progresso de rolagem
    if (scrollProgress) {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      scrollProgress.style.width = pct + '%';
    }

    // Botão flutuante de WhatsApp: só aparece depois de passar do hero
    if (whatsappFloat && hero) {
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      whatsappFloat.classList.toggle('is-visible', scrollY > heroBottom - 200);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Menu mobile (hamburger) ---
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Fecha o menu ao clicar em um link (mobile)
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Fade-in com stagger ao entrar na viewport ---
  // Agrupado por "pai" (grid) para que o atraso em cascata seja relativo aos
  // irmãos do próprio grid, e não à posição global na página.
  const groups = document.querySelectorAll('.cards-grid');
  groups.forEach(group => {
    Array.from(group.children).forEach((el, i) => {
      el.classList.add('reveal');
      if (!prefersReducedMotion) el.style.transitionDelay = `${Math.min(i, 5) * 70}ms`;
    });
  });

  const soloTargets = document.querySelectorAll('.section__text, .section__media, .banner-ir__inner');
  soloTargets.forEach(el => el.classList.add('reveal'));

  const allRevealTargets = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  allRevealTargets.forEach(el => observer.observe(el));

  // --- Scrollspy: destaca no menu a seção que está sendo vista ---
  // Considera a seção "ativa" quando ela cruza uma faixa próxima ao topo
  // (logo abaixo do header sticky), não quando só encosta na borda da tela.
  const navLinks = Array.from(document.querySelectorAll('.nav__list a[href^="#"]'));
  const spySections = navLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (navLinks.length && spySections.length) {
    const setActive = (id) => {
      navLinks.forEach(link => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
      });
    };

    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    spySections.forEach(section => spyObserver.observe(section));
  }
});
