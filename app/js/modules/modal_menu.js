const modalMenu = () => {
    const naviMenu = document.querySelector('.navi_menu'),
        fixedMenu = document.querySelector('.fixed_menu-link');

    fixedMenu.addEventListener('click', e => {
        e.preventDefault();

        naviMenu.classList.toggle('navi__menu--active');
        fixedMenu.classList.toggle('active_menu');
        naviMenu.classList.contains('navi__menu--active') ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';
    });

    document.addEventListener('keydown', e => {
        if (e.keyCode === 27 && naviMenu.classList.contains('navi__menu--active')) {
            naviMenu.classList.remove('navi__menu--active');
            fixedMenu.classList.remove('active_menu');
            document.body.style.overflow = '';
        }
    });
};
export default modalMenu;