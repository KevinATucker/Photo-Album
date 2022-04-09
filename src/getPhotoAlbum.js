const {getPhotos} = require('./services/photo-service.js');
const {getArgumentsFromCommandLine} = require('./services/get-argument-service');
const {displayPhotos} = require('./services/display-service');

const getPhotoAlbum = async () => {
    const albumNumber = getArgumentsFromCommandLine();

    if (albumNumber.length !== 1) {
        console.log('Please provide a single albumNumber');

        return;
    }

    const photos = await getPhotos(albumNumber[0]);
    
    displayPhotos(photos);
};

module.exports = {
    getPhotoAlbum
};