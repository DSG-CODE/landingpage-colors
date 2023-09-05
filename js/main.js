document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menuList = document.querySelector('.nav__menu');

    menuToggle.addEventListener('click', function () {
        menuList.classList.toggle('nav__menu--active');
    });
});