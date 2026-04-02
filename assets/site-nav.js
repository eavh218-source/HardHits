(function () {
  var active = (document.body.getAttribute('data-nav') || '').trim();
  var items = [
    { href: 'HardHits.html', label: 'Home', id: 'home' },
    { href: 'BvP.html', label: 'BvP', id: 'bvp' },
    { href: 'DailyHomers.html', label: 'Daily Homers', id: 'daily' },
    { href: 'HRProbability_Combined.html', label: 'HR Probability', id: 'hr' },
    { href: 'projects.html', label: 'Roadmap', id: 'projects' }
  ];

  var nav = document.createElement('nav');
  nav.className = 'site-nav';
  nav.setAttribute('aria-label', 'Main navigation');

  var inner = document.createElement('div');
  inner.className = 'site-nav__inner';

  var logo = document.createElement('a');
  logo.href = 'HardHits.html';
  logo.className = 'site-nav__logo';
  logo.textContent = 'HARDHITS';
  inner.appendChild(logo);

  var links = document.createElement('div');
  links.className = 'site-nav__links';

  items.forEach(function (item) {
    var a = document.createElement('a');
    a.href = item.href;
    a.className = 'site-nav__link' + (active === item.id ? ' site-nav__link--active' : '');
    a.textContent = item.label;
    links.appendChild(a);
  });

  inner.appendChild(links);
  nav.appendChild(inner);
  var firstEl = document.body.firstElementChild;
  if (firstEl) {
    document.body.insertBefore(nav, firstEl);
  } else {
    document.body.appendChild(nav);
  }
})();
