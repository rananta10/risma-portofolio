// ============================
//  MAIN.JS — Interactions
// ============================

document.addEventListener('DOMContentLoaded', () => {

  // ===== CUSTOM CURSOR =====
  const cursor = document.getElementById('cursor');
  const cursorFollower = document.getElementById('cursorFollower');
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  if (cursor && cursorFollower) {
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX - 5}px, ${mouseY - 5}px)`;
    });

    function animateFollower() {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      cursorFollower.style.transform = `translate(${followerX - 18}px, ${followerY - 18}px)`;
      requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Hover effect on interactive elements
    document.querySelectorAll('a, button, .skill-card, .port-card, .timeline-card').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform += ' scale(2.5)';
        cursorFollower.style.width = '60px';
        cursorFollower.style.height = '60px';
      });
      el.addEventListener('mouseleave', () => {
        cursorFollower.style.width = '36px';
        cursorFollower.style.height = '36px';
      });
    });
  }

  // ===== NAVBAR SCROLL =====
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ===== HAMBURGER MENU =====
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  // Close menu on link click
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });

  // ===== SCROLL REVEAL =====
  const revealEls = document.querySelectorAll(
    '.section-title, .section-label, .skill-card, .timeline-card, .port-card, .about-grid, .contact-wrap, .about-stats, .contact-link'
  );

  revealEls.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => observer.observe(el));

  // ===== STAGGER CHILDREN =====
  function staggerObserve(parentSelector, childSelector, delay = 100) {
    document.querySelectorAll(parentSelector).forEach(parent => {
      const children = parent.querySelectorAll(childSelector);
      children.forEach(child => child.classList.add('reveal'));

      const obs = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          children.forEach((child, i) => {
            setTimeout(() => child.classList.add('visible'), i * delay);
          });
          obs.unobserve(parent);
        }
      }, { threshold: 0.1 });
      obs.observe(parent);
    });
  }

  staggerObserve('.skills-grid', '.skill-card', 100);
  staggerObserve('.portfolio-grid', '.port-card', 120);
  staggerObserve('.timeline', '.timeline-item', 100);

  // ===== ACTIVE NAV LINK =====
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // ===== SMOOTH SCROLL =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ===== COUNTER ANIMATION =====
  function animateCounter(el, target, duration = 1500) {
    let start = 0;
    const isDecimal = String(target).includes('.');
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const value = progress * parseFloat(target);
      el.textContent = isDecimal ? value.toFixed(2) : Math.floor(value) + (String(target).includes('+') ? '+' : '');
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target;
    };
    requestAnimationFrame(step);
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const nums = entry.target.querySelectorAll('.stat-num');
        nums.forEach(num => {
          const val = num.textContent;
          animateCounter(num, val);
        });
        statsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  const statsEl = document.querySelector('.about-stats');
  if (statsEl) statsObserver.observe(statsEl);

});
