(function () {
  const PAGES = [
    { file: 'index.html',    label: '메인',    key: 'main',     num: '00' },
    { file: 'about.html',    label: '이력소개', key: 'about',    num: '01' },
    { file: 'projects.html', label: '프로젝트', key: 'projects', num: '02' },
    { file: 'blog.html',     label: '블로그',   key: 'blog',     num: '03' },
  ];

  const current = location.pathname.split('/').pop() || 'index.html';
  const active = PAGES.find(p => p.file === current) || PAGES[0];

  const links = PAGES.map(p => {
    const cls = p.file === current ? ' class="active"' : '';
    return `<li><a href="${p.file}"${cls}>${p.label}</a></li>`;
  }).join('\n      ');

  const html = `
  <div class="nav-inner">
    <div class="nav-query">SELECT * FROM <span>${active.key}</span></div>
    <ul class="nav-links">
      ${links}
    </ul>
    <button class="dark-light-toggle" id="theme-toggle" aria-hidden="true">🌜</button>
  </div>`;

  document.write(`<nav class="nav">${html}</nav>`);

  // page header eyebrow (// 00 · main 형식)도 함께 동기화하고 싶으면 아래 사용
  window.__PAGE_INFO__ = active;
})();
