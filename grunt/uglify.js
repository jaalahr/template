var uglify_files = [
    {
        dest: '_src/js/main.js',
        src: '_src/library/js/main.js'
    },
    {
        dest: '_src/js/userInterface.js',
        src: '_src/library/js/userInterface.js'
    },
    {
        dest: '_src/js/modernizr.js',
        src: '_src/library/js/libs/vendor/modernizr/modernizr.js'
    },
    {
        dest: '_src/js/require.js',
        src: '_src/library/js/libs/vendor/requirejs/require.js'
    }
];

module.exports = {
    dev: {
        options: {
            mangle: false,
            beautify: true,
            compress: false,
            preserveComments: 'all'
        },
		files: uglify_files
	},
    prod: {
        options: {
            mangle: false,
            beautify: false,
            compress: {
                drop_console: true
            },
            preserveComments: false
        },
        files: uglify_files
    }
};