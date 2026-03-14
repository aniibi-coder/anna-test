/**
 * Folder switcher
 * stack[0] = back, stack[1] = mid, stack[2] = front (active)
 */

const POSITIONS = ['back', 'mid', 'front'];
let stack = ['main', 'about', 'projects']; // initial order

function render() {
  stack.forEach((id, i) => {
    const el = document.querySelector(`.folder[data-id="${id}"]`);
    if (el) el.setAttribute('data-pos', POSITIONS[i]);
  });
}

function openFolder(id) {
  const i = stack.indexOf(id);
  if (i === 2) return; // already front — do nothing
  stack.splice(i, 1);
  stack.push(id);
  render();
}

// Also allow clicking anywhere on a non-front folder's visible header strip
document.querySelectorAll('.folder-header').forEach(header => {
  header.addEventListener('click', () => {
    const id = header.closest('.folder').dataset.id;
    openFolder(id);
  });
});

render();

