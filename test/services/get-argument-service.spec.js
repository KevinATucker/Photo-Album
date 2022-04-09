const {getArgumentsFromCommandLine} = require('../../src/services/get-argument-service.js');
const yargs = require('yargs');
const Chance = require('chance');

const chance = new Chance();

jest.mock('yargs', () => ({
    usage: jest.fn().mockReturnThis(),
    command: jest.fn().mockReturnThis(),
    help: jest.fn().mockReturnThis()
}));

describe('get-argument-service', () => {
    let args;
    beforeEach(() => {
        args = chance.natural();
        yargs.help.mockReturnValue({
            argv: {
                _: args
            }
        });
    });

    test('it should call yargs', () => {
        getArgumentsFromCommandLine();

        expect(yargs.usage).toHaveBeenCalledWith('$0 albumNumber')
        expect(yargs.command).toHaveBeenCalledWith('[albumNumber]', 'Pass the album number you want to pull photos from');
        expect(yargs.help).toHaveBeenCalledTimes(1);
    })

    describe('there is no albumNumber', () => {
        test('it should return the default arguments', () => {
            const actualArguments = getArgumentsFromCommandLine();

            expect(actualArguments).toStrictEqual(args);
        })
    });

    describe('there is an albumNumber', () => {
        describe('albumNumber is an array', () => {
            test('it should return the albumNumber arguments', () => {
                yargs.help.mockReturnValue({
                    argv: {
                        albumNumber: [args]
                    }
                });

                const actualArguments = getArgumentsFromCommandLine();

                expect(actualArguments).toStrictEqual([args]);
            });
        });

        describe('albumNumber is not an array', () => {
            test('it should return the albumNumber arguments', () => {
                yargs.help.mockReturnValue({
                    argv: {
                        albumNumber: args
                    }
                });

                const actualArguments = getArgumentsFromCommandLine();

                expect(actualArguments).toStrictEqual([args]);
            });
        });
    });
});