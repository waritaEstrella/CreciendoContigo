// Mostrar elementos con clase .fade-in, .card y .mockup al hacer scroll
const observador = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.fade-in, .card, .mockup').forEach(el => {
  observador.observe(el);
});

// Scroll suave al hacer clic en enlaces del menú
document.querySelectorAll('a[href^="#"]').forEach(ancla => {
  ancla.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Menú hamburguesa responsive
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
