module.exports = {
    concat: {
        options: {
            separator: ';',
        },
        dist: {
            src: [
                'tmp/js/main.js',
                'tmp/js/libs/*.js',
                'tmp/js/app.js'
            ],
            dest: 'dist/js/main.js',
        },
    }
};