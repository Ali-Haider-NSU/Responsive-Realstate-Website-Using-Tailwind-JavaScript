const navlinks = document.querySelector('.nav-links');

function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navlinks.classList.toggle('top-5');
}