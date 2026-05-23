const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Active state for floating nav
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-btn');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.style.background = 'var(--glass-bg)';
    link.style.color = 'var(--text-main)';
    if (link.getAttribute('href').includes(current)) {
      link.style.background = 'var(--accent)';
      link.style.color = '#111';
    }
  });
});
