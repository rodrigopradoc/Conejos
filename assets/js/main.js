/**
* Template Name: Restaurantly
* Updated: Jul 27 2023 with Bootstrap v5.3.1
* Template URL: https://bootstrapmade.com/restaurantly-restaurant-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /* ---------- Helpers ---------- */
  const select = (el, all = false) => {
    el = el.trim();
    return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
  };

  const on = (type, el, listener, all = false) => {
    const sel = select(el, all);
    if (!sel) return;
    (all ? sel : [sel]).forEach(e => e.addEventListener(type, listener));
  };

  const onscroll = (el, listener) => el.addEventListener('scroll', listener);

  /* ---------- Navbar links active on scroll ---------- */
  const navbarlinks = select('#navbar .scrollto', true);
  const navbarlinksActive = () => {
    const position = window.scrollY + 200;
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return;
      const section = select(navbarlink.hash);
      if (!section) return;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    });
  };
  window.addEventListener('load', navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /* ---------- Smooth scroll with optional header offset ---------- */
  const scrollto = (el) => {
    const header = select('#header') || select('.header');   // puede no existir
    const offset = header ? header.offsetHeight : 0;

    const target = select(el);
    if (!target) return;

    const y = target.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  /* ---------- Header scrolled classes (si existiera) ---------- */
  const selectHeader = select('#header') || select('.header');
  const selectTopbar = select('#topbar');
  if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled');
        if (selectTopbar) selectTopbar.classList.add('topbar-scrolled');
      } else {
        selectHeader.classList.remove('header-scrolled');
        if (selectTopbar) selectTopbar.classList.remove('topbar-scrolled');
      }
    };
    window.addEventListener('load', headerScrolled);
    onscroll(document, headerScrolled);
  }

  /* ---------- Back to top ---------- */
  const backtotop = select('.back-to-top');
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) backtotop.classList.add('active');
      else backtotop.classList.remove('active');
    };
    window.addEventListener('load', toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  /* ---------- Mobile nav ---------- */
  on('click', '.mobile-nav-toggle', function() {
    select('#navbar').classList.toggle('navbar-mobile');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });

  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault();
      this.nextElementSibling.classList.toggle('dropdown-active');
    }
  }, true);

  /* ---------- Scrollto for .scrollto links ---------- */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault();
      const navbar = select('#navbar');
      if (navbar && navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile');
        const navbarToggle = select('.mobile-nav-toggle');
        if (navbarToggle) {
          navbarToggle.classList.toggle('bi-list');
          navbarToggle.classList.toggle('bi-x');
        }
      }
      scrollto(this.hash);
    }
  }, true);

  /* ---------- Scroll when page loads with hash ---------- */
  window.addEventListener('load', () => {
    if (window.location.hash && select(window.location.hash)) {
      scrollto(window.location.hash);
    }
  });

  /* ---------- Preloader ---------- */
  const preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => preloader.remove());
  }

  /* ---------- Isotope (si existiera) ---------- */
  window.addEventListener('load', () => {
    const menuContainer = select('.menu-container');
    if (!menuContainer) return;
    const menuIsotope = new Isotope(menuContainer, {
      itemSelector: '.menu-item',
      layoutMode: 'fitRows'
    });
    const menuFilters = select('#menu-flters li', true);
    on('click', '#menu-flters li', function(e) {
      e.preventDefault();
      menuFilters.forEach(el => el.classList.remove('filter-active'));
      this.classList.add('filter-active');
      menuIsotope.arrange({ filter: this.getAttribute('data-filter') });
      menuIsotope.on('arrangeComplete', () => AOS.refresh());
    }, true);
  });

  /* ---------- GLightbox: video -> scroll a #about ---------- */
  const lightbox = GLightbox({ selector: '.glightbox' });

  const scrollToAbout = () => scrollto('#about');
  let shouldScrollAfterClose = false;

  lightbox.on('open', () => {
    const wire = () => {
      const slide = document.querySelector('.gslide.current');
      if (!slide) { requestAnimationFrame(wire); return; }

      const vid = slide.querySelector('video');
      shouldScrollAfterClose = !!vid;

      if (!vid) return;

      vid.addEventListener('ended', () => {
        try { lightbox.close(); } catch (_) {}
        setTimeout(scrollToAbout, 0);
      }, { once: true, passive: true });
    };
    requestAnimationFrame(wire);
  });

  lightbox.on('close', () => {
    if (shouldScrollAfterClose) requestAnimationFrame(scrollToAbout);
    shouldScrollAfterClose = false;
  });

  /* ---------- Swipers (si existen) ---------- */
  new Swiper('.events-slider', {
    speed: 600,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    slidesPerView: 'auto',
    pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true }
  });

  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: false },
    slidesPerView: 'auto',
    pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      1200: { slidesPerView: 3, spaceBetween: 20 }
    }
  });

  /* ---------- Gallery lightbox por si usas otra clase ---------- */
  GLightbox({ selector: '.gallery-lightbox' });

  /* ---------- AOS ---------- */
  window.addEventListener('load', () => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true, mirror: false });
  });

})();
