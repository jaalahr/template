module.exports = {
    dev: {
        files: [{
            expand: true,
            cwd: 'src/sass/',
            ext: '.css',
            src: 'styles.scss',
            dest: '.tmp/css/'
        }]
    },
    prod: {
        options: {
            style: 'compressed'
        },
        files: [{
            expand: true,
            cwd: 'src/sass/',
            ext: '.css',
            src: 'styles.scss',
            dest: '.tmp/css/'
        }]
    }
};