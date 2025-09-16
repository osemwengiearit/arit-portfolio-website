// Simple JS for nav toggle and smooth scroll + fade-in on scroll
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle &&
    navToggle.addEventListener('click', function () {
      mainNav.classList.toggle('open');
    });

  // Smooth scroll for internal anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (mainNav.classList.contains('open'))
          mainNav.classList.remove('open');
      }
    });
  });

  // Fade-in on scroll
  const faders = document.querySelectorAll(
    '.card, .project-card, .timeline-item, .hero-text'
  );
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.15 }
  );
  faders.forEach(el => observer.observe(el));
});
