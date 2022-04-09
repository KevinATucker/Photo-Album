const {getPhotoAlbum} = require('../src/getPhotoAlbum');

jest.mock('../src/getPhotoAlbum');

describe('index.js', () => {
    test('it should call getPhotoAlbum', () => {
        require('../src/index.js');

        expect(getPhotoAlbum).toHaveBeenCalledTimes(1);
    });
});
