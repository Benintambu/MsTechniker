/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
let prevScrollpos = window.pageYOffset;
const navBar = document.querySelector('#nav-bar')
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        navBar.style.top = "0";
    } else {
        navBar.style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
} 