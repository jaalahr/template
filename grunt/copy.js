var isFile =    [ 'isFile' ];
var css =       [ 'css/**' ];
var fonts =     [ 'fonts/**' ];
var img =       [ 'img/**' ];
var js =        [ 'js/modules/**' ];
var html =      [ '*.html', '*.ico', '*.png' ];

// Libraries
var libs_src = [
    'js/libs/vendor/jquery/dist/jquery.min.js',
    'js/libs/vendor/jquery-ui/jquery-ui.min.js',
    'js/libs/vendor/underscore/underscore-min.js',
    'js/libs/vendor/backbone/backbone-min.js',
    'js/libs/vendor/bootstrap/dist/js/bootstrap.min.js' 
];

module.exports = {
    dev: {
        files: [
            {
                expand: true,
                flatten: true,
                cwd: 'src/',
                src: css,
                dest: '.tmp/css/',
                filter: isFile
            },
            {
                expand: true,
                flatten: true,
                cwd: 'src/',
                src: fonts,
                dest: '.tmp/fonts/',
                filter: isFile
            },
            {
                expand: true,
                flatten: true,
                cwd: 'src/',
                src: img,
                dest: '.tmp/img/',
                filter: isFile
            },
            {
                expand: true,
                flatten: false,
                cwd: 'src/',
                src: js,
                dest: '.tmp/',
                filter: isFile
            },
            {
                expand: true,
                flatten: true,
                cwd: 'src/',
                src: html,
                dest: '.tmp/',
                filter: isFile
            },
            {
                expand: true,
                flatten: true,
                cwd: 'src/',
                src: libs_src,
                dest: '.tmp/js/libs/',
                filter: isFile
            }
        ]
    },
    prod: {
        files: [
            {
                expand: true,
                flatten: true,
                cwd: 'src/',
                src: css,
                dest: 'dist/css/',
                filter: isFile
            },
            {
                expand: true,
                flatten: true,
                cwd: 'src/',
                src: fonts,
                dest: 'dist/fonts/',
                filter: isFile
            },
            {
                expand: true,
                flatten: true,
                cwd: 'src/',
                src: img,
                dest: 'dist/img/',
                filter: isFile
            },
            {
                expand: true,
                flatten: false,
                cwd: 'src/',
                src: js,
                dest: 'dist/',
                filter: isFile
            },
            {
                expand: true,
                flatten: true,
                cwd: 'src/',
                src: html,
                dest: 'dist/',
                filter: isFile
            },
            {
                expand: true,
                flatten: true,
                cwd: 'src/',
                src: libs_src,
                dest: 'dist/js/libs/',
                filter: isFile
            }
        ]
    }
};