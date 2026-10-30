const links = [...document.querySelectorAll('nav a')];
const sections = [...document.querySelectorAll('main section[id]')];
const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    for (const link of links) {
      const active = link.hash === '#' + entry.target.id;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }
}, { rootMargin: '-10% 0px -60% 0px', threshold: 0 });
sections.forEach(section => observer.observe(section));
document.querySelector('#year').textContent = new Date().getFullYear();
