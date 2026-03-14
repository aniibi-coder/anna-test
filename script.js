const POSITIONS = ['back', 'mid', 'front'];
let stack = ['main', 'about', 'projects'];

function render() {
  stack.forEach((id, i) => {
    const el = document.querySelector(`.folder[data-id="${id}"]`);
    if (el) el.setAttribute('data-pos', POSITIONS[i]);
  });
}

function openFolder(id) {
  if (stack.indexOf(id) === 2) return;
  stack.splice(stack.indexOf(id), 1);
  stack.push(id);
  render();
}

render();
