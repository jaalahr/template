module.exports = {
    imagemin: {
        dynamic: {
            files: [{
                expand: true,
                cwd: '_src/library/img',
                src: ['**/*.{jpg,png,gif,svg}'],
                dest: '_src/img'
            }]
        }
    }
};
