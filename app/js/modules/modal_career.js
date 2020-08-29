const modalCareer = () => {
    const brendLinks = document.querySelectorAll('.career__menu_block-click'),
        brendModals = document.querySelectorAll('.career-modal'),
        closeButtonsModals = document.querySelectorAll('.career-modal__close');

    const openCloseModalCareer = links => {
        links.forEach((link, i) => {
            link.addEventListener('click', e => {
                e.preventDefault();

                brendModals[i].classList.toggle('career-modal__active');
                brendModals[i].classList.toggle('career-modal__fade');
                brendModals[i].classList.contains('career-modal__active') ? document.body.style.overflow = 'hidden' : document.body.style.overflow = '';
            });
        });
    };

    const closeModalCareer = modal => {
        modal.classList.remove('career-modal__active');
        modal.classList.remove('career-modal__fade');
        document.body.style.overflow = '';
    };

    document.body.addEventListener('keydown', e => {
        if (e.keyCode == 27) {
            brendModals.forEach(modal => {
                if (modal.classList.contains('career-modal__active')) {
                    closeModalCareer(modal);
                }
            });
        }
    });

    brendModals.forEach(modal => {
        modal.addEventListener('click', e => {
            if (e.target.classList.contains('career-modal') == modal.classList.contains('career-modal')) {
                closeModalCareer(modal);
            }
        });
    });

    openCloseModalCareer(brendLinks);
    openCloseModalCareer(closeButtonsModals);
};
export default modalCareer;