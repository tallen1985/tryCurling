const navBar = document.getElementById('navBar');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', (e) => {
   e.stopPropagation();
   navBar.style.visibility = "visible";
   navBar.style.opacity = '1';
});
document.addEventListener('click', (e) => {
    let element = e.target;

    if (navBar.style.visibility = 'visible'){
        if (element !== document.getElementById('navBar')) {
            navBar.removeAttribute('style')
        }
    }
})