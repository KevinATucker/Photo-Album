const yargs = require('yargs');

const getArgumentsFromCommandLine = () => {
    const options = yargs
        .usage('$0 albumNumber')
        .command('[albumNumber]', 'Pass the album number you want to pull photos from')
        .help()
        .argv;

    if ('albumNumber' in options) {
        return Array.isArray(options.albumNumber) ? options.albumNumber : [options.albumNumber];
    }

    return options._
}

module.exports = {
    getArgumentsFromCommandLine
};
