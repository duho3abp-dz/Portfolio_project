'use strict';

const hide = ({hideElemClass, elemTargetClass}) => {
    
    const hideElement = document.querySelector(hideElemClass),
          elementTarget = document.querySelector(elemTargetClass),
          clientHeightScreen = document.documentElement.clientHeight;

    document.addEventListener('scroll', () => {
        const targetHeight = elementTarget.getBoundingClientRect().bottom - clientHeightScreen;

        if (+targetHeight <= 0) {
            hideElement.style.display = 'none';
        } else {
            hideElement.style.display = '';
        }
    });

};

export default hide;