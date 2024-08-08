const primaryNav = document.querySelector('.nav-ul');
const navToggle = document.querySelector('.toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if(visibility === "false"){
        primaryNav.setAttribute('data-visible', true);
        primaryNav.setAttribute('aria-expanded', true);
        navToggle.setAttribute('src', "Img/close-hamburguesa.png");
    }else {
        primaryNav.setAttribute('data-visible', false);
        primaryNav.setAttribute('aria-expanded', false);
        navToggle.setAttribute('src', "Img/Hamburguesita.png");
    }
})