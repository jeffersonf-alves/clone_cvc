var subMenu = document.getElementById('submenu');
var trianguloChange = document.getElementById('changeTria');

function showSubmenu() {
    subMenu.style.display = "flex";
    trianguloChange.classList.remove('triangulo');
    trianguloChange.classList.add('trianguloChange');
}
function closeMenu() {
    subMenu.style.display = "none";
    trianguloChange.classList.remove('trianguloChange');
    trianguloChange.classList.add('triangulo');
}