var jsFiles = [
    'src/js/modules/flower/models/*.js',
    'src/js/module.flower.js'
]

var uglify_files_dev = [
    {
        dest: '.tmp/js/module.flower.js',
        src: jsFiles
    },
    {
        dest: '.tmp/js/main.js',
        src: 'src/js/main.js'
    },
    {
        dest: '.tmp/js/app.js',
        src: 'src/js/app.js'
    },
    {
        dest: '.tmp/js/libs/modernizr.js',
        src: 'src/js/libs/vendor/modernizr/modernizr.js'
    },
    {
        dest: '.tmp/js/libs/require.js',
        src: 'src/js/libs/vendor/requirejs/require.js'
    }
];

var uglify_files_prod = [
    {
        dest: 'dist/js/module.flower.js',
        src: jsFiles
    },
    {
        dest: 'dist/js/main.js',
        src: 'src/js/main.js'
    },
    {
        dest: 'dist/js/app.js',
        src: 'src/js/app.js'
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