const testHrefLink = (elem, id, themeLink) => {
    if (elem.id === id) {    
        elem.href = themeLink;
    } else {
        elem.href = `../${themeLink}`;
    }
}

export default testHrefLink;