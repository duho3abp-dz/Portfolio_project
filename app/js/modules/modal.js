const modal = ({
    linksClass,
    modalsClass,
    closeButtonsClass,
    activeBtnClass,
    active,
    fade,
    background
}) => {
    const links = document.querySelectorAll(linksClass),
          modals = document.querySelectorAll(modalsClass),
          closeBtns = document.querySelectorAll(closeButtonsClass);

    const openCloseModalCareer = links => links.forEach((link, i) => {
        link.addEventListener('click', e => {
            e.preventDefault();

            if (activeBtnClass) { link.classList.toggle(activeBtnClass); }
            if (fade) { modals[i].classList.toggle(fade); }

            modals[i].classList.toggle(active);
            modals[i].classList.contains(active) ? 
                document.body.style.overflow = 'hidden' : 
                document.body.style.overflow = '' ;
        });
    });

    const closeModalCareer = modal => {
        if (activeBtnClass) { links.forEach(link => link.classList.toggle(activeBtnClass)); }
        if (fade) { modal.classList.remove(fade); }

        modal.classList.remove(active);
        document.body.style.overflow = '';
    };

    document.body.addEventListener('keydown', e => {
        if (e.keyCode == 27) {
            modals.forEach(modal => {
                if (modal.classList.contains(active)) {
                    closeModalCareer(modal);
                }
            });
        }
    });

    if (background) {
        modals.forEach(modal => {
            modal.addEventListener('click', e => {
                if (e.target.classList.contains(modalsClass.replace(/\./, ''))) { closeModalCareer(modal); }
            });
        });
        openCloseModalCareer(closeBtns);
    }
    
    openCloseModalCareer(links);
};
export default modal;