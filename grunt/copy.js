var isFile =    [ 'isFile' ];
var css =       [ 'src/css/**' ];
var fonts =     [ 'src/fonts/**' ];
var img =       [ 'src/img/**' ];
var html =      [ 'src/*.html', 'src/*.ico', 'src/*.png' ];

// Libraries
var libs_src = [
    'src/js/libs/vendor/jquery/dist/jquery.min.js',
    'src/js/libs/vendor/jquery-ui/jquery-ui.min.js',
    'src/js/libs/vendor/underscore/underscore-min.js',
    'src/js/libs/vendor/backbone/backbone-min.js',
    'src/js/libs/vendor/bootstrap/dist/js/bootstrap.min.js'
];

module.exports = {
    dev: {
        files: [
            { expand: true, flatten: true, src: css,        dest: '.tmp/css/',      filter: isFile },
            { expand: true, flatten: true, src: fonts,      dest: '.tmp/fonts/',    filter: isFile },
            { expand: true, flatten: true, src: img,        dest: '.tmp/img/',      filter: isFile },
            { expand: true, flatten: true, src: html,       dest: '.tmp/',          filter: isFile },
            { expand: true, flatten: true, src: libs_src,   dest: '.tmp/js/libs/',  filter: isFile }
        ]
    },
    prod: {
        files: [
            { expand: true, flatten: true, src: css,        dest: 'dist/css/',      filter: isFile },
            { expand: true, flatten: true, src: fonts,      dest: 'dist/fonts/',    filter: isFile },
            { expand: true, flatten: true, src: img,        dest: 'dist/img/',      filter: isFile },
            { expand: true, flatten: true, src: html,       dest: 'dist/',          filter: isFile },
            { expand: true, flatten: true, src: libs_src,   dest: 'dist/js/libs/',  filter: isFile }
        ]
    }
};