module.exports = {
    dev: {
        files: [{
            expand: true,
            cwd: '_src/library/sass/',
            ext: '.css',
            src: 'styles.scss',
            dest: '_src/css/'
        }]
    },
    dist: {
        options: {
            style: 'compressed'
        },
        files: [{
            expand: true,
            cwd: '_src/library/sass/',
            ext: '.css',
            src: 'styles.scss',
            dest: '_src/css/'
        }]
    }
};