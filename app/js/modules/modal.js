const modal = ({
    linksClass,
    modalsClass,
    closeButtonsClass,
    activeBtnClass,
    active,
    fade,
    background,
    escape
}) => {
    const links = document.querySelectorAll(linksClass),
          modals = document.querySelectorAll(modalsClass),
          closeBtns = document.querySelectorAll(closeButtonsClass);

    const openCloseModal = (modal, link) => {
        if (activeBtnClass) { link.classList.toggle(activeBtnClass); }
        if (fade) { modal.classList.toggle(fade); }

        modal.classList.toggle(active);

        if (modal.classList.contains(active)) {
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.html.style.overflow = 'hidden';
            document.html.style.position = 'fixed';
        } else {
            document.body.style.overflow = '';
            document.body.style.position = 'relative';
            document.html.style.overflow = '';
            document.html.style.position = '';
        }
    };

    const addEvent = links => links.forEach((link, i) => {
        link.addEventListener('click', e => {
            e.preventDefault();

            openCloseModal(modals[i], link);
        });

        if (escape) {
            window.addEventListener('keydown', e => {
                if (e.key === 'Escape') {
                    openCloseModal(modals[i], link);
                }
            });
        }
    });

    const closeModalCareer = modal => {
        if (activeBtnClass) { links.forEach(link => link.classList.toggle(activeBtnClass)); }
        if (fade) { modal.classList.remove(fade); }

        modal.classList.remove(active);
        
        document.body.style.overflow = '';
        document.body.style.position = 'relative';
        document.html.style.overflow = '';
        document.html.style.position = '';
    };

    if (background) {
        modals.forEach(modal => {
            modal.addEventListener('click', e => {
                if (e.target.classList.contains(modalsClass.replace(/\./, ''))) { closeModalCareer(modal); }
            });
        });
        addEvent(closeBtns);
    }
    
    addEvent(links);
};
export default modal;