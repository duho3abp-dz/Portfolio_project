'use strict';

import testHrefLink from './methods/testHrefLink';

const theme = ({
    classStyleLink, 
    idIndex, 
    lightThemeLink, 
    darkThemeLink,
    toggleBtnClass,
    switchClass,
    activeDarkClass
}) => {
    const mainStyle = document.querySelector(classStyleLink),
          toggleBtn = document.querySelector(toggleBtnClass),
          switchElem = document.querySelector(switchClass);

    toggleBtn.addEventListener('click', e => {
        if (switchElem.classList.contains(activeDarkClass)) {

            localStorage.setItem('theme', 'light');

            switchElem.classList.remove(activeDarkClass);
            testHrefLink(mainStyle, idIndex, lightThemeLink);

        } else {

            localStorage.setItem('theme', 'dark');

            switchElem.classList.add(activeDarkClass);
            testHrefLink(mainStyle, idIndex, darkThemeLink);

        }
    });

};

export default theme;