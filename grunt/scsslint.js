module.exports = {
    allFiles: [
        '_src/library/sass/*.scss',
        '_src/library/sass/**/*.scss',
        '_src/library/sass/**/**/*.scss',
        '_src/library/sass/**/**/**/*.scss'
    ],
    options: {
        config: 'scss-lint.yml',
        force: true
    }
};