// Dynamically include navbar and footer
function includeHTML() {
  const includeElements = document.querySelectorAll('[id="navbar"], [id="footer"]');
  includeElements.forEach(el => {
    let file = el.id === 'navbar' ? 'navbar.html' : 'footer.html';
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error('File not found: ' + file);
        return response.text();
      })
      .then(data => {
        el.innerHTML = data;
        if (el.id === 'navbar') setupMenu(el);
      })
      .catch(err => console.error(err));
  });
}

// Mobile menu button
function setupMenu(navbar) {
  const button = navbar.querySelector('.menu-toggle');
  const header = navbar.querySelector('header');
  if (!button || !header) return;

  button.addEventListener('click', () => {
    const open = header.classList.toggle('menu-open');
    button.setAttribute('aria-expanded', open);
    button.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
}

document.addEventListener('DOMContentLoaded', includeHTML);