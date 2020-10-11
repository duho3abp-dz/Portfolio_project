'use strict';

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

    const testHrefLink = (elem, id, themeLink) => {
        if (elem.id === id) {    
            elem.href = themeLink;
        } else {
            elem.href = `../${themeLink}`;
        }
    }

    toggleBtn.addEventListener('click', e => {
        if (switchElem.classList.contains(activeDarkClass)) {

            switchElem.classList.remove(activeDarkClass);
            testHrefLink(mainStyle, idIndex, lightThemeLink);

        } else {

            switchElem.classList.add(activeDarkClass);
            testHrefLink(mainStyle, idIndex, darkThemeLink);
            
        }
    });

};

export default theme;