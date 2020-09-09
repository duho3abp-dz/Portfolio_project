'use strict';

const hide = ({hideElemClass, elemTargetClass}) => {
    
    const hideElement = document.querySelector(hideElemClass),
          elementTarget = document.querySelector(elemTargetClass),
          clientHeightScreen = document.documentElement.clientHeight;
    let targetHeight = elementTarget.getBoundingClientRect().bottom - clientHeightScreen;

    const heightTest = (target, elem) => {
        if (+target <= 0) {
            elem.style.display = 'none';
        } else {
            elem.style.display = '';
        }
    };

    document.addEventListener('scroll', () => {
        targetHeight = elementTarget.getBoundingClientRect().bottom - clientHeightScreen;

        heightTest(targetHeight, hideElement);
    });

    heightTest(targetHeight, hideElement);

};

export default hide;