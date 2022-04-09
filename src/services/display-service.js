const displayPhotos = (photos) => {
    if (photos.length === 0) {
        console.log('There were no photos for that album number.');

        return;
    }

    photos.forEach(({id, title}) => {
        console.log(`[${id}] ${title}`);
    });
};

module.exports = {
    displayPhotos
};
