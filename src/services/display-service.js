const displayPhotos = (photos) => {
    photos.forEach(({id, title}) => {
        console.log(`[${id}] ${title}`);
    });
};

module.exports = {
    displayPhotos
};
