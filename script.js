// toggel icon navbar 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let link = document.querySelector('#link');
let linkd = document.querySelector('#link');
let linkt = document.querySelector('#link');
let linke = document.querySelector('#link');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    link.addEventListener('click', function() {
        navbar.classList.toggle('active');
    })
    linkd.addEventListener('click', function() {
        navbar.classList.toggle('active');
    })
    linkt.addEventListener('click', function() {
        navbar.classList.toggle('active');
    })
    linke.addEventListener('click', function() {
        navbar.classList.toggle('active');
    })
};

// scrol sections antive link
let sections = document. querySelectorAll('section');
let navlinks = document.  querySelectorAll('header nav a');

/**
 * Function to handle scroll event and perform necessary actions
 */
window.onscroll = () => {
    // Iterate over all sections
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        // Check if current section is in view
        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all navlinks
            navlinks.forEach(links => {
                links.classList.remove('active');
            });
            // Add 'active' class to the corresponding navlink
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    // Remove toggle icon and navbar when click navbar link (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
