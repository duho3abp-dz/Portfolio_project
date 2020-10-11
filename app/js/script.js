'use strict';

import modal from './modules/modal';
import slider from './modules/slider';
import hide from './modules/hide';
import theme from './modules/theme';

import testHrefLink from './modules/methods/testHrefLink';

window.addEventListener('DOMContentLoaded', () => {

    const checkTheme = () => {
        const classStyleLink = '.theme',
              idIndex = 'index',
              lightThemeLink = 'css/light.min.css',
              darkThemeLink = 'css/dark.min.css',
              activeDarkClass = 'theme-toggle__switch--dark';

        const mainStyle = document.querySelector(classStyleLink),
            switchElem = document.querySelector('.theme-toggle__switch'),
            actualTheme = localStorage.getItem('theme');
            
        if (actualTheme === 'light') {
            switchElem.classList.remove(activeDarkClass);
            testHrefLink(mainStyle, idIndex, lightThemeLink);
        } else if (actualTheme === 'dark') {
            switchElem.classList.add(activeDarkClass);
            testHrefLink(mainStyle, idIndex, darkThemeLink);
        } else {
            testHrefLink(mainStyle, idIndex, lightThemeLink);
        }

        theme({
            classStyleLink,
            idIndex,
            activeDarkClass,
            lightThemeLink,
            darkThemeLink,
            toggleBtnClass: '.theme-toggle',
            switchClass: '.theme-toggle__switch'
        });
    };
    
    checkTheme();

    modal({
        linksClass: '.fixed_menu-link',
        modalsClass: '.navi_menu',
        closeButtonsClass: '.fixed_menu-link',
        activeBtnClass: 'active_menu',
        active: 'navi__menu--active',
        escape: true
    });

    modal({
        linksClass: '.career__menu_block-click',
        modalsClass: '.career-modal',
        closeButtonsClass: '.career-modal__close',
        active: 'career-modal__active',
        fade: 'career-modal__fade',
        background: true
    });
    
    slider({
        sliderWrapClass: '.project__slide--wrap',
        nextBtnClass: '.button_next', 
        prevBtnClass: '.button_prev',
        allSlidesClass: '.project_block',
        active: 'project__active',
        fade: 'project__fade',
        actualPageClass: '.project_counter-active',
        allPagesClass: '.project_counter-all'
    });

    hide({
        hideElemClass: '.fixed-socials',
        elemTargetClass: '.footer .socials'
    });
    
});