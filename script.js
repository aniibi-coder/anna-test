const folders = document.querySelectorAll('[data-folder]');

folders.forEach((folder) => {
  const tab = folder.querySelector('.folder-tab');
  const body = folder.querySelector('.folder-body');

  tab.addEventListener('click', () => {
    const isOpen = folder.classList.contains('is-open');

    folders.forEach((item) => {
      item.classList.remove('is-open');
      item.querySelector('.folder-tab').setAttribute('aria-expanded', 'false');
      item.querySelector('.folder-body').hidden = true;
    });

    if (!isOpen) {
      folder.classList.add('is-open');
      tab.setAttribute('aria-expanded', 'true');
      body.hidden = false;
    }
  });
});
