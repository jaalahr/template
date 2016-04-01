module.exports = {
    allFiles: [
        'src/sass/*.scss',
        'src/sass/**/*.scss',
        'src/sass/**/**/*.scss',
        'src/sass/**/**/**/*.scss',
        '!src/sass/_normalize.scss'
    ],
    options: {
        config: 'scss-lint.yml',
        force: true
    }
};