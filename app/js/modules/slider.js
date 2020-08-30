const slider = ({
    nextBtnClass, 
    prevBtnClass, 
    allSlidesClass,
    active,
    fade
}) => {
    const next = document.querySelector(nextBtnClass),
          prev = document.querySelector(prevBtnClass),
          allSlides = document.querySelectorAll(allSlidesClass);
    let index = 0;

    const changeSlide = (compare, slides) => {
        compare === next ? index++ : index-- ;

        if (index >= slides.length) {
            index = 0;
        } else if (index < 0) {
            index = slides.length - 1;
        }
        
        slides.forEach((slide, i) => {
            index === i ? 
                slide.classList.add(active, fade) : 
                slide.classList.remove(active, fade) ;
        });
    };

    const buttonAssignmentEvent = (compare, sliders) => {
        if (compare) {
            compare.addEventListener('click', e => {
                e.preventDefault();
                changeSlide(compare, sliders);
            });
        }
    };

    document.addEventListener('keydown', e => {
        if (e.keyCode == 39) {
            changeSlide(next, allSlides);
        }
        if (e.keyCode == 37) {
            changeSlide(prev, allSlides);
        }
    });

    buttonAssignmentEvent(next, allSlides);
    buttonAssignmentEvent(prev, allSlides);
};
export default slider;