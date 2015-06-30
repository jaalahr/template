var css = [ '_src/css/**' ]
var fonts = [ '_src/fonts/**' ]
var img = [ '_src/img/**' ]
var js = [ '_src/js/*' ]
var html = [ '_src/*.{html, ico}' ]
var jqueryUI = [ '_src/library/js/libs/vendor/jquery-ui/jquery-ui.min.js' ]
var jquery = [ '_src/library/js/libs/vendor/jquery/dist/jquery.min.js' ]
var plugins = [ '_src/library/js/libs/plugins/**' ]
var isTrue = [ true ]
var isFile = [ 'isFile' ]

module.exports = {
    dev: {
        files: [
            { expand: true, flatten: true, src: css, dest: '_src/css/', filter: isFile },
            { expand: true, flatten: true, src: fonts, dest: '_src/fonts/', filter: isFile },
            { expand: true, flatten: true, src: img, dest: '_src/img/', filter: isFile },
            { expand: true, flatten: true, src: js, dest: '_src/js/', filter: isFile },
            { expand: true, flatten: true, src: html, dest: '_src/', filter: isFile },
            { expand: true, flatten: true, src: jquery, dest: '_src/js/libs/vendor/jquery/', filter: isFile } ,
            { expand: true, flatten: true, src: jqueryUI, dest: '_src/js/libs/vendor/jquery-ui/', filter: isFile },
            { expand: true, flatten: true, src: plugins, dest: '_src/js/libs/plugins/', filter: isFile }
        ]
    },
    prod: {
        files: [
            { expand: true, flatten: true, src: css, dest: '_dist/css/', filter: isFile },
            { expand: true, flatten: true, src: fonts, dest: '_dist/fonts/', filter: isFile },
            { expand: true, flatten: true, src: img, dest: '_dist/img/', filter: isFile },
            { expand: true, flatten: true, src: js, dest: '_dist/js/', filter: isFile },
            { expand: true, flatten: true, src: html, dest: '_dist/', filter: isFile },
            { expand: true, flatten: true, src: jquery, dest: '_dist/js/libs/vendor/jquery/', filter: isFile } ,
            { expand: true, flatten: true, src: jqueryUI, dest: '_dist/js/libs/vendor/jquery-ui/', filter: isFile },
            { expand: true, flatten: true, src: plugins, dest: '_dist/js/libs/plugins/', filter: isFile }
        ]
    }
};
