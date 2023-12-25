const navlinks = document.querySelector('.nav-links');

function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu'
    navlinks.classList.toggle('top-20');
}

const property = document.querySelector('.property');
const subproperty = document.querySelector('.subproperty');
const pages = document.querySelector('.pages');
const subpages = document.querySelector('.subpages');

if (window.innerWidth <= 1024) {
    resizedWindow();
}

if (window.innerWidth > 1024) {
    resizedWindow();
}

function resizedWindow() {
    //location.reload();
    //window.onload();
    //console.log(innerWidth)
    if (window.innerWidth <= 1024) {

        property.addEventListener('click', () => {
            console.log(innerWidth)
            if (subproperty.style.display === 'none' || subproperty.style.display === '') {
                subproperty.style.display = 'block'
                    // subproperty.name = 'chevron-up-outline'
                    // subproperty.name === 'chevron-down-outline' ? 'chevron-up-outline' : 'chevron-down-outline'
            } else {
                subproperty.style.display = 'none'
                    // subproperty.name = subproperty.name === 'chevron-up-outline' ? 'chevron-down-outline' : 'chevron-up-outline'
            }
        })
        pages.addEventListener('click', () => {
            if (subpages.style.display === 'none' || subpages.style.display === '') {
                subpages.style.display = 'block'
                    // subproperty.name = 'chevron-up-outline'
                    // subproperty.name === 'chevron-down-outline' ? 'chevron-up-outline' : 'chevron-down-outline'
            } else {
                subpages.style.display = 'none'
                    // subproperty.name = subproperty.name === 'chevron-up-outline' ? 'chevron-down-outline' : 'chevron-up-outline'
            }
        })
    } else if (window.innerWidth > 1024) {
        property.addEventListener('mouseover', () => {
            subproperty.style.position = 'absolute'
            subproperty.style.display = 'block'
        })
        property.addEventListener('mouseout', () => {
            subproperty.style.position = 'absolute'
            subproperty.style.display = 'none'
        })
        pages.addEventListener('mouseover', () => {
            subpages.style.position = 'absolute'
            subpages.style.display = 'block'
        })
        pages.addEventListener('mouseout', () => {
            subpages.style.position = 'absolute'
            subpages.style.display = 'none'
        })
    }
}

window.addEventListener('resize', resizedWindow)