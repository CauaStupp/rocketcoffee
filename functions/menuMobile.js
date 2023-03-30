export function menuMobile() {
  const btnMobileOpen = document.querySelector('.btn-mobile-open');
  const btnMobileClose = document.querySelector('.btn-mobile-close');
  const navMobile = document.querySelector('.nav-mobile');

  if (window.innerWidth <= 700) {
    if (navMobile.classList.contains('open')) {
      btnMobileOpen.classList.remove('show');
      btnMobileOpen.classList.add('hidden');
    } else {
      btnMobileOpen.classList.add('show')
      btnMobileOpen.classList.remove('hidden');
    }
    

    btnMobileOpen.addEventListener('click' || 'touch', () => {
      btnMobileOpen.classList.remove('show');
      btnMobileOpen.classList.add('hidden');
      btnMobileClose.classList.add('show');
      navMobile.classList.add('open');
      document.body.style.overflow = 'hidden';
    });

    btnMobileClose.addEventListener('click' || 'touch', () => {
      btnMobileClose.classList.remove('show');
      btnMobileClose.classList.add('hidden');
      btnMobileOpen.classList.remove('hidden');
      btnMobileOpen.classList.add('show');
      navMobile.classList.remove('open');
    });
  } else if (window.innerWidth > 700) {
    btnMobileOpen.classList.add('hidden');
    btnMobileClose.classList.add('hidden');
    navMobile.classList.add('hidden');

    btnMobileClose.classList.remove('show');
    btnMobileOpen.classList.remove('show');
    navMobile.classList.remove('show');
  } else {
    btnMobileOpen.classList.add('show');
  }
}
  
