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
    <button id="theme-toggle" class="theme-toggle" aria-label="다크모드 전환">
      <svg class="icon-sun" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
      <svg class="icon-moon" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
    </button>
  </div>`;

  document.write(`<nav class="nav">${html}</nav>`);

  // page header eyebrow (// 00 · main 형식)도 함께 동기화하고 싶으면 아래 사용
  window.__PAGE_INFO__ = active;
})();
