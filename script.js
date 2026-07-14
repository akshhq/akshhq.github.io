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

// Resume Modal Interaction
const modal = document.getElementById('resume-modal');
const closeBtn = document.querySelector('.close-btn');
const resumeLinks = document.querySelectorAll('a[href="aksh_resume.pdf"]:not([download])');

resumeLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  });
});

const closeModal = () => {
  modal.classList.remove('show');
  document.body.style.overflow = '';
};

if (closeBtn) closeBtn.addEventListener('click', closeModal);
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
    closeModal();
  }
});

// Glassmorphism Card Hover Spotlight Glow
document.querySelectorAll('.glass-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

// Interactive Skills Mapping
const skillToProjectMap = {
  'HTML5': ['Boat Link Medical Equipment Website'],
  'CSS3': ['Boat Link Medical Equipment Website'],
  'JavaScript': ['Boat Link Medical Equipment Website', 'College Fest Website'],
  'Python': ['ActivityProfiler-Desktop'],
  'Responsive UI': ['Boat Link Medical Equipment Website', 'College Fest Website'],
  'Mobile-First': ['Boat Link Medical Equipment Website'],
  'SEO Basics': ['Boat Link Medical Equipment Website'],
  'Product UI': ['Boat Link Medical Equipment Website'],
  'Logo Design': ['Boat Link Medical Equipment Website']
};

const skillTags = document.querySelectorAll('.skill-tag');
const projectCards = document.querySelectorAll('.proj-card');

skillTags.forEach(tag => {
  const skillName = tag.textContent.trim();
  const targetProjectTitles = skillToProjectMap[skillName];
  
  if (targetProjectTitles && targetProjectTitles.length > 0) {
    tag.style.cursor = 'pointer';
    
    tag.addEventListener('mouseenter', () => {
      projectCards.forEach(card => {
        const cardTitle = card.querySelector('.proj-title').textContent.trim();
        if (targetProjectTitles.includes(cardTitle)) {
          card.classList.add('highlighted');
        } else {
          card.classList.add('faded');
        }
      });
    });
    
    tag.addEventListener('mouseleave', () => {
      projectCards.forEach(card => {
        card.classList.remove('highlighted', 'faded');
      });
    });
  }
});

