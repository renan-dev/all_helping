
const menu = document.querySelector('nav');

window.onscroll = () => {
  
    const top = window.pageYOffset;
    if (top > 80) {
        menu.classList.add('menu-aux');
    }
    if (top === 0) {
        menu.classList.remove('menu-aux');
    }
}