var css = [ 'src/css/**' ]
var fonts = [ 'src/fonts/**' ]
var img = [ 'src/img/**' ]
var js = [ 'src/js/*' ]
var html = [ 'src/*.html', 'src/*.ico', 'src/*.png' ]
var jqueryUI = [ 'src/js/libs/vendor/jquery-ui/jquery-ui.min.js' ]
var jquery = [ 'src/js/libs/vendor/jquery/dist/jquery.min.js' ]
var plugins = [ 'src/js/libs/plugins/**' ]
var isFile = [ 'isFile' ]

module.exports = {
    dev: {
        files: [
            { expand: true, flatten: true, src: css, dest: '.tmp/css/', filter: isFile },
            { expand: true, flatten: true, src: fonts, dest: '.tmp/fonts/', filter: isFile },
            { expand: true, flatten: true, src: img, dest: '.tmp/img/', filter: isFile },
            { expand: true, flatten: true, src: js, dest: '.tmp/js/', filter: isFile },
            { expand: true, flatten: true, src: html, dest: '.tmp/', filter: isFile },
            { expand: true, flatten: true, src: jquery, dest: '.tmp/js/libs/vendor/jquery/', filter: isFile } ,
            { expand: true, flatten: true, src: jqueryUI, dest: '.tmp/js/libs/vendor/jquery-ui/', filter: isFile },
            { expand: true, flatten: true, src: plugins, dest: '.tmp/js/libs/plugins/', filter: isFile }
        ]
    },
    prod: {
        files: [
            { expand: true, flatten: true, src: css, dest: 'dist/css/', filter: isFile },
            { expand: true, flatten: true, src: fonts, dest: 'dist/fonts/', filter: isFile },
            { expand: true, flatten: true, src: img, dest: 'dist/img/', filter: isFile },
            { expand: true, flatten: true, src: js, dest: 'dist/js/', filter: isFile },
            { expand: true, flatten: true, src: html, dest: 'dist/', filter: isFile },
            { expand: true, flatten: true, src: jquery, dest: 'dist/js/libs/vendor/jquery/', filter: isFile } ,
            { expand: true, flatten: true, src: jqueryUI, dest: 'dist/js/libs/vendor/jquery-ui/', filter: isFile },
            { expand: true, flatten: true, src: plugins, dest: 'dist/js/libs/plugins/', filter: isFile }
        ]
    }
};
