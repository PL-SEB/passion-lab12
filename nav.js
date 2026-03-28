// Passion Lab — Global Navigation
// Lägg till <script src="nav.js"></script> i <body> på varje sida
// Sätt data-page="filnamn" på <body> för aktiv länk, t.ex. <body data-page="sponsring">

(function () {
  const pages = [
    { href: 'om-oss.html',    label: 'Om oss' },
    { href: 'reklam.html',    label: 'Reklam' },
    { href: 'sponsring.html', label: 'Sponsring' },
    { href: 'event.html',     label: 'Event' },
    { href: 'artiklar.html',  label: 'Artiklar' },
  ];

  const currentPage = document.body.dataset.page || '';
  const isLightPage = ['artiklar', 'artikel-template'].includes(currentPage);
  const logoStyle = isLightPage
    ? 'height:28px;display:block;filter:invert(1) brightness(0)'
    : 'height:28px;display:block';

  const navLinks = pages.map(p => {
    const isActive = p.href.replace('.html','') === currentPage;
    return `
      <span class="nav-link-wrap${isActive ? ' active' : ''}">
        <a href="${p.href}"${isActive ? ' class="active"' : ''}>${p.label}</a>
      </span>`;
  }).join('');

  const mobileLinks = pages.map(p => `
    <a href="${p.href}" onclick="document.querySelector('.mobile-menu').classList.remove('open')">${p.label}</a>
  `).join('');

  const html = `
    <nav id="navbar">
      <a class="nav-logo" href="index.html">
        <img src="logo.png" alt="Passion Lab" style="${logoStyle}">
      </a>
      <div class="nav-links">
        ${navLinks}
        <a href="kontakt.html" class="nav-cta">Kontakt</a>
      </div>
      <button class="hamburger" onclick="document.querySelector('.mobile-menu').classList.toggle('open')" aria-label="Meny">
        <span></span><span></span><span></span>
      </button>
    </nav>

    <div class="mobile-menu">
      <button class="mobile-close" onclick="document.querySelector('.mobile-menu').classList.remove('open')">✕</button>
      ${mobileLinks}
      <a href="kontakt.html" onclick="document.querySelector('.mobile-menu').classList.remove('open')">Kontakt</a>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', html);

  window.addEventListener('scroll', () => {
    document.getElementById('navbar')?.classList.toggle('scrolled', scrollY > 50);
  });
})();
