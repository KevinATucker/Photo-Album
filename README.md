# Photo-Album
A CLI that will pull ids and titles of specific albums of photos when an albumId is provided

## How to run

### Pre requisite
- Install nvm to manage node versions.  `brew install nvm`

### Getting Started
To setup the app
- `nvm use`    If you don't have the current version of node it will need to be installed
- `npm install`

To add to it to your console run

`npm install -g .`

### Pull photos using the console app
You can pull photos by running

`photo-album 3`

or

`photo-album --albumNumber 3`

### Cleanup 
To remove the console app run 

`npm uninstall -g photo-album`

## How to run tests
The test suite it setup using jest.  To run the test run

`npm test`