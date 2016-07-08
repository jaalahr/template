// var files_contributors = [
//     'src/js/modules/contributors/**/*.js'
// ]
//
var files_js = [

    'src/js/app.js',
    'src/js/modules/**/*.js'

]

var uglify_files_dev = [
    // {
    //     dest: 'tmp/js/modules/contributors.js',
    //     src: files_contributors
    // },
    // {
    //     dest: 'tmp/js/modules/flowers.js',
    //     src: files_flowers
    // },
    {
        dest: 'tmp/js/main.js',
        src: 'src/js/main.js'
    },
    // {
    //     dest: 'tmp/js/define.js',
    //     src: 'src/js/define.js'
    // },
    {
        dest: 'tmp/js/app.js',
        src: files_js
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
    // {
    //     dest: 'tmp/js/modules/contributors.js',
    //     src: files_contributors
    // },
    // {
    //     dest: 'tmp/js/modules/flowers.js',
    //     src: files_flowers
    // },
    {
        dest: 'dist/js/main.js',
        src: 'src/js/main.js'
    },
    {
        dest: 'dist/js/app.js',
        src: files_js
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