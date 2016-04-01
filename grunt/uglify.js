var uglify_files = [
    {
        dest: '.tmp/js/main.js',
        src: 'src/js/main.js'
    },
    {
        dest: '.tmp/js/userInterface.js',
        src: 'src/js/userInterface.js'
    },
    {
        dest: '.tmp/js/modernizr.js',
        src: 'src/js/libs/vendor/modernizr/modernizr.js'
    },
    {
        dest: '.tmp/js/require.js',
        src: 'src/js/libs/vendor/requirejs/require.js'
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