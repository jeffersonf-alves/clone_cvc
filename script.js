var subMenu = document.getElementById('submenu');
var trianguloChange = document.getElementById('changeTria');
let verify = true;
function showSubmenu() {
 
    if(verify == true) {
        subMenu.style.display = "flex";
        trianguloChange.classList.remove('triangulo');
        trianguloChange.classList.add('trianguloChange');
        verify = false;
    } 
    else if(verify == false){
        subMenu.style.display = "none";
        trianguloChange.classList.remove('trianguloChange');
        trianguloChange.classList.add('triangulo');
        verify = true;
    }
    console.log(verify);
}
