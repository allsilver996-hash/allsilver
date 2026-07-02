document.addEventListener('DOMContentLoaded', function () {
  const wrap = document.getElementById('post-viewer');
  if (!wrap) return;

  const posts = window[wrap.dataset.posts] || [];
  const listEl = document.getElementById('post-list');
  const contentEl = document.getElementById('post-content');
  if (!posts.length) return;

  function render(id) {
    const post = posts.find(p => p.id === id) || posts[0];
    contentEl.innerHTML = `
      <div class="post-date">${post.date}</div>
      <h2 class="post-title">${post.title}</h2>
      <div class="post-body">${post.body}</div>
    `;
    listEl.querySelectorAll('button').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.id === post.id);
    });
  }

  listEl.innerHTML = posts.map(p =>
    `<li><button data-id="${p.id}">${p.title}</button></li>`
  ).join('');

  listEl.addEventListener('click', e => {
    const btn = e.target.closest('button');
    if (btn) render(btn.dataset.id);
  });

  render(posts[0].id);
});
