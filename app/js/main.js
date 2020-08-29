'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // Меню (модальное окно) --------------------------------------------------------------
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

    // Слайдер (projects) --------------------------------------------------------------
    const nextSlide = document.querySelector('.button_next'),
        prevSlide = document.querySelector('.button_prev'),
        allSliders = document.querySelectorAll('.project_block'),
        firstSlide = document.querySelector('.project__slide--wrap').firstElementChild,
        lastSlide = document.querySelector('.project__slide--wrap').lastElementChild;

    const changeSlide = (extr, compare, sliders) => {
        let activeElem;

        sliders.forEach((slide, i) => {
            if (slide != extr) {
                if (slide.classList.contains('project__active')) {
                    if (sliders.length == i + 2) {
                        compare.style.display = 'none';
                    } else {
                        nextSlide.style.display = 'block';
                        prevSlide.style.display = 'block';
                    }
                    if (slide != extr) {
                        slide.classList.remove('project__active');
                        slide.classList.remove('project__fade');
                        if (compare == nextSlide) {
                            activeElem = slide.nextElementSibling;
                        } else if (compare == prevSlide) {
                            activeElem = slide.previousElementSibling;
                        }
                    } else {
                        activeElem = slide;
                    }
                }
            }
        });

        if (!activeElem.classList.contains('project__active')) {
            activeElem.classList.add('project__active');
            activeElem.classList.add('project__fade');
        }
    };

    const buttonAssignmentEvent = (extr, compare, sliders) => {
        compare.addEventListener('click', e => {
            e.preventDefault();

            changeSlide(extr, compare, sliders);
        });
    };

    document.addEventListener('keydown', e => {
        if (e.keyCode == 39) {
            changeSlide(lastSlide, nextSlide, allSliders);
        }
        if (e.keyCode == 37) {
            changeSlide(firstSlide, prevSlide, allSliders);
        }
    });

    buttonAssignmentEvent(lastSlide, nextSlide, allSliders);
    buttonAssignmentEvent(firstSlide, prevSlide, allSliders);

});