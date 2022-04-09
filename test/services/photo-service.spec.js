const fetch = require('node-fetch');
const {getPhotos} = require("../../src/services/photo-service");
const Chance = require('chance');

const chance = new Chance();

jest.mock('node-fetch');

describe('photo-service', () => {
    let albumNumber,
        photosFromFetch,
        expectedPhotos;

    beforeEach(() => {
        albumNumber = chance.natural();
        expectedPhotos = chance.n(() => ({
            id: chance.natural(),
            title: chance.animal()
        }), chance.d6());
        photosFromFetch = expectedPhotos.map((photo) => ({
            ...photo,
            [chance.string()]: chance.animal()
        }));

        fetch.mockResolvedValue({
            json: jest.fn().mockResolvedValue(photosFromFetch)
        })
    });

    test('it should call fetch', async () => {
        await getPhotos(albumNumber);

        expect(fetch).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/photos?albumId=${albumNumber}`);
    });

    test('it should map the results that get returned', async () => {
        const photos = await getPhotos(albumNumber);

        expect(photos).toStrictEqual(expectedPhotos);
    })
});