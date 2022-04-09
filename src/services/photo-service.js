const fetch = require('node-fetch');

const mapPhotos = (photos) => photos.map(({id, title}) => ({
    id,
    title
}));

const getPhotos = async (albumNumber) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumNumber}`);

    const photos = await response.json();

    return mapPhotos(photos);
};

module.exports = {
    getPhotos
};




