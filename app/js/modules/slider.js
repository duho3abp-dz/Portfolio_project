const slider = ({
    nextBtnClass, 
    prevBtnClass,
    actualPageClass,
    allPagesClass,
    allSlidesClass,
    active,
    fade
}) => {
    const next = document.querySelector(nextBtnClass),
          prev = document.querySelector(prevBtnClass),
          allSlides = document.querySelectorAll(allSlidesClass),
          actualPage = document.querySelector(actualPageClass),
          allPages = document.querySelector(allPagesClass);
    let index = 0;

    const testCounter = (num) => num < 10 ? `0${num}` : num ;

    const counterProjects = (ind, elem) => elem ? elem.textContent = `${testCounter(ind + 1)}/` : null;

    const changeSlide = (compare, slides, actual) => {
        compare === next ? index++ : index-- ;

        if (index >= slides.length) {
            index = 0;
        } else if (index < 0) {
            index = slides.length - 1;
        }

        counterProjects(index, actual);
        
        slides.forEach((slide, i) => {
            index === i ? 
                slide.classList.add(active, fade) : 
                slide.classList.remove(active, fade) ;
        });
    };

    const buttonAssignmentEvent = (compare, slides, actual) => {
        if (compare) {
            compare.addEventListener('click', e => {
                e.preventDefault();
                changeSlide(compare, slides, actual);
            });
        }
    };

    if (allPages) { allPages.textContent = testCounter(allSlides.length); }
    
    document.addEventListener('keydown', e => {
        if (e.keyCode == 39) {
            changeSlide(next, allSlides, actualPage);
        }
        if (e.keyCode == 37) {
            changeSlide(prev, allSlides, actualPage);
        }
    });

    counterProjects(index, actualPage);
    buttonAssignmentEvent(next, allSlides, actualPage);
    buttonAssignmentEvent(prev, allSlides, actualPage);
};
export default slider;