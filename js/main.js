/* =========================================
   AUTO SPA — MAIN JS
   ========================================= */
(function() {
  'use strict';

  // Header scroll
  var header = document.getElementById('header');
  var backToTop = document.getElementById('backToTop');
  var whatsappFloat = document.getElementById('whatsappFloat');

  window.addEventListener('scroll', function() {
    var y = window.scrollY;

    // Header background
    if (y > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Back to top
    if (y > 600) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }

    // WhatsApp float
    if (y > 400) {
      whatsappFloat.classList.add('visible');
    } else {
      whatsappFloat.classList.remove('visible');
    }
  });

  // Back to top click
  backToTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Mobile menu
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileOverlay = document.getElementById('mobileOverlay');
  var mobileClose = document.getElementById('mobileClose');
  var mobileLinks = document.querySelectorAll('.mobile-links a');

  function openMenu() {
    hamburger.classList.add('active');
    mobileMenu.classList.add('open');
    document.body.classList.add('no-scroll');
  }

  function closeMenu() {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  hamburger.addEventListener('click', function() {
    if (mobileMenu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  mobileOverlay.addEventListener('click', closeMenu);
  mobileClose.addEventListener('click', closeMenu);

  for (var i = 0; i < mobileLinks.length; i++) {
    mobileLinks[i].addEventListener('click', closeMenu);
  }

  // Hero animation
  setTimeout(function() {
    var hero = document.querySelector('.hero');
    if (hero) hero.classList.add('loaded');
  }, 100);

  // FAQ accordion
  var faqQuestions = document.querySelectorAll('.faq-q');

  for (var j = 0; j < faqQuestions.length; j++) {
    faqQuestions[j].addEventListener('click', function() {
      var item = this.closest('.faq-item');
      var isOpen = item.classList.contains('open');

      // Close all others
      var allItems = document.querySelectorAll('.faq-item.open');
      for (var k = 0; k < allItems.length; k++) {
        if (allItems[k] !== item) {
          allItems[k].classList.remove('open');
          allItems[k].querySelector('.faq-q').setAttribute('aria-expanded', 'false');
        }
      }

      item.classList.toggle('open', !isOpen);
      this.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  // Smooth scroll for anchor links
  var anchorLinks = document.querySelectorAll('a[href^="#"]');

  for (var l = 0; l < anchorLinks.length; l++) {
    anchorLinks[l].addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
        if (mobileMenu.classList.contains('open')) closeMenu();
      }
    });
  }

})();