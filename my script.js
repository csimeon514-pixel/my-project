// Portfolio filter - buttons switch between two categories
const btnAll = document.getElementById('btnAll');
const btnPoster = document.getElementById('btnPoster');
const btnLogo = document.getElementById('btnLogo');
const items = document.querySelectorAll('.portfolio-item');

function showCategory(cat) {
  items.forEach(item => {
    if (cat === 'all' || item.dataset.category === cat) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
if (btnAll) btnAll.addEventListener('click', () => showCategory('all'));
if (btnPoster) btnPoster.addEventListener('click', () => showCategory('poster'));
if (btnLogo) btnLogo.addEventListener('click', () => showCategory('logo'));

// Contact form show message
const form = document.getElementById('inquiryForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMsg').textContent = 'Thank you! Your inquiry was received. We will reply in 2 days.';
  });
}