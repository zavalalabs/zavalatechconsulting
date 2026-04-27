/* Zavala Tech Consulting — main.js */
(function () {
  'use strict';

  /* ── Mobile nav toggle ── */
  var toggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded',
        navLinks.classList.contains('open') ? 'true' : 'false');
    });

    /* close on link click */
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Active nav link on scroll ── */
  var sections = document.querySelectorAll('section[id]');
  var navItems = document.querySelectorAll('.nav-links a[href^="#"]');

  function onScroll() {
    var scrollY = window.scrollY + 80;
    sections.forEach(function (section) {
      if (scrollY >= section.offsetTop &&
          scrollY < section.offsetTop + section.offsetHeight) {
        navItems.forEach(function (a) { a.classList.remove('active'); });
        var active = document.querySelector('.nav-links a[href="#' + section.id + '"]');
        if (active) active.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Scroll reveal via IntersectionObserver ── */
  var revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if (revealEls.length && 'IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    /* fallback: just show everything */
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

})();
