window.document.addEventListener('DOMContentLoaded', () => {
  
  // Open Close Menu
  const menu = document.querySelector('.nav-list');
  const bars = document.querySelector('.bars');
  const open = document.querySelector('.open-btn');
  const close = document.querySelector('.close-btn');

  bars.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      open.classList.toggle('hidden');
      close.classList.toggle('hidden');

      // close menu when clicking on a link
      const links = document.querySelectorAll('.nav-list a', '.nav-below a');
      links.forEach((link) => {
          link.addEventListener('click', () => {
              menu.classList.add('hidden');
              open.classList.remove('hidden');
              close.classList.add('hidden');
          });
      });

      // close menu when clicking outside
      window.addEventListener('click', (e) => {
          if (e.target !== menu && e.target !== bars && e.target !== open && e.target !== close) {
              menu.classList.add('hidden');
              open.classList.remove('hidden');
              close.classList.add('hidden');
              //   dropMenu.classList.add('hidden')
          }
      });

  });



});