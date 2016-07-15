var js_files = [
    'src/js/main.js',
    'src/js/app.js',
    'src/js/modules/**/*.js'
]

var uglify_files_dev = [
    {
        dest: 'tmp/js/main.js',
        src: js_files
    },
    {
        dest: 'tmp/js/libs/modernizr.js',
        src: 'src/js/libs/vendor/modernizr/modernizr.js'
    }, 
    {
        dest: 'tmp/js/libs/require.js',
        src: 'src/js/libs/vendor/requirejs/require.js'
    }
];

var uglify_files_prod = [
    {
        dest: 'dist/js/main.js',
        src: js_files
    },
    {
        dest: 'dist/js/libs/modernizr.js',
        src: 'src/js/libs/vendor/modernizr/modernizr.js'
    },
    {
        dest: 'dist/js/libs/require.js',
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
		files: uglify_files_dev
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
        files: uglify_files_prod
    }
};