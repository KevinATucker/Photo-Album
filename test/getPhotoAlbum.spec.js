const {getArgumentsFromCommandLine} = require('../src/services/get-argument-service');
const {getPhotos} = require('../src/services/photo-service');
const {getPhotoAlbum} = require('../src/getPhotoAlbum');
const {displayPhotos} = require('../src/services/display-service');
const Chance = require('chance');

const chance = new Chance();

jest.mock('../src/services/get-argument-service');
jest.mock('../src/services/photo-service');
jest.mock('../src/services/display-service');


describe('getPhotoAlbum', () => {
    let args,
        photos;

    beforeEach(() => {
        args = [chance.natural()];
        photos = chance.string();

        jest.spyOn(console, 'log').mockImplementation();
        getArgumentsFromCommandLine.mockReturnValue(args);
        getPhotos.mockReturnValue(photos);
    });

    afterEach(() => {
        jest.resetAllMocks()
    });

    test('it should call getArgumentsFromCommandLine', async () => {
        await getPhotoAlbum();

        expect(getArgumentsFromCommandLine).toHaveBeenCalledTimes(1);
    });

    describe('there is not a single albumNumber provided', () => {
        beforeEach(() => {
            getArgumentsFromCommandLine.mockReturnValue(chance.pickone([[], [chance.natural(), chance.natural()]]));
        });

        test('ite should log a prompt', async () => {
            await getPhotoAlbum();

            expect(console.log).toHaveBeenCalledWith('Please provide a single albumNumber');
            expect(getPhotos).not.toHaveBeenCalled();
        })
    });

    test('it should call getPhotos', async () => {
        await getPhotoAlbum();

        expect(getPhotos).toHaveBeenCalledTimes(1);
        expect(getPhotos).toHaveBeenCalledWith(args[0]);
    });

    test('it should call displayPhotos', async () => {
        await getPhotoAlbum();

        expect(displayPhotos).toHaveBeenCalledTimes(1);
        expect(displayPhotos).toHaveBeenCalledWith(photos);
    })
});