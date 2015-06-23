module.exports = {
    options: {
        //reset: grunt.option('reset') || false,
        //proxy: 'http://proxy:8080',
        stoponerror: false,
        //remotePath: 'http://decodize.com/',
        //remoteFiles: [], // Or
        //remoteFiles: 'validation-files.json', // JSON file contains array of page paths.
        reportpath: false,
        relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.'] // Ignores these errors
    },
    files: {
        src: [
            '_src/*.html'
        ]
    }
};