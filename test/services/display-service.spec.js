const {displayPhotos} = require('../../src/services/display-service');
const Chance = require('chance');

const chance = new Chance();

describe('display-service', () => {
    let photos;

    beforeAll(() => {
        photos = chance.n(() => ({
            id: chance.natural(),
            title: chance.animal()
        }), chance.d6());

        jest.spyOn(console, 'log').mockImplementation();
    });

    test('it should log every photo', () => {
        const photo = chance.pickone(photos);

        displayPhotos(photos);

        expect(console.log).toHaveBeenCalledTimes(photos.length);
        expect(console.log).toHaveBeenCalledWith(`[${photo.id}] ${photo.title}`)
    })

    describe('There are no photos', () => {
        test('it should log an error message', () => {
            displayPhotos([]);

            expect(console.log).toHaveBeenCalledWith('There were no photos for that album number.');
        });
    });
});
