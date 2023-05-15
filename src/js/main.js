window.document.addEventListener('DOMContentLoaded', () => {
  
  // Open Close Menu
  const menu = document.querySelector('.nav-list');
  const bars = document.querySelector('.bars');
  const open = document.querySelector('.open-btn');
  const close = document.querySelector('.close-btn');

  bars.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      menu.style = 'transition: all 0.5s ease-in-out;'
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


//   Display the about text
    const about = document.querySelectorAll('.show-aboout');
    const aboutText = document.querySelectorAll('.about-text');

    for(let i = 0; i < about.length; i++) {
        about[i].addEventListener('click', () => {
            aboutText[i].classList.toggle('hidden');
            aboutText[i].style = 'transition: all 0.5s ease-in-out;'

            // rotate arrow
            if(aboutText[i].classList.contains('hidden')) {
                about[i].style = 'transform: rotate(0deg); transition: transform 0.5s ease-in-out;'
            } else {
                about[i].style = 'transform: rotate(-180deg); transition: transform 0.5s ease-in-out;'

            }

        });
    }

    // close menu when clicking outside
    window.addEventListener('click', (e) => {

        if (e.target !== aboutText[i] && e.target !== about[i]) {
            aboutText[i].classList.add('hidden');
        }
    }
    );
});