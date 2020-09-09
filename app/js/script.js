'use strict';

import modal from './modules/modal';
import slider from './modules/slider';
import hide from './modules/hide';

window.addEventListener('DOMContentLoaded', () => {

    modal({
        linksClass: '.fixed_menu-link',
        modalsClass: '.navi_menu',
        closeButtonsClass: '.fixed_menu-link',
        activeBtnClass: 'active_menu',
        active: 'navi__menu--active'
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