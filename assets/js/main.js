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

  /* ── Formspree submission feedback ── */
  var form = document.getElementById('contactForm');
  var formMsg = document.getElementById('formMsg');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' }
      })
      .then(function (res) {
        if (res.ok) {
          formMsg.textContent = "Got it — I'll be in touch within one business day.";
          formMsg.className = 'form-msg success';
          form.reset();
        } else {
          return res.json().then(function (d) { throw d; });
        }
      })
      .catch(function () {
        formMsg.textContent = 'Something went wrong. Please email me directly.';
        formMsg.className = 'form-msg error';
      });
    });
  }

})();
