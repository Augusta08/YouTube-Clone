var hamburgerMenuIcon = document.querySelector('.hamburger-icon-button');
var hamburgerNav = document.querySelector('.hamburger-nav');
var backdrop = document.querySelector('.backdrop');
var mainContent = document.querySelector('main')
// console.log(hamburgerMenu);

hamburgerMenuIcon.addEventListener('click', function() {
    backdrop.classList.add('open');
    hamburgerNav.classList.add('open');
})

backdrop.addEventListener('click', function() {
    backdrop.classList.remove('open');
    hamburgerNav.classList.remove('open');
})

// if (hamburgerNav.style.display == block) {
//     hamburgerMenuIcon.addEventListener('click', function() {
//         backdrop.classList.remove('open');
//         hamburgerNav.classList.remove('open');
//         mainContent.style.position = 'static';
//     });
// }