module.exports = {
    main: {
        files: [
            {
                expand: true,
                flatten: true,
                src: '_src/css/**',
                dest: '_dist/css/',
                filter: 'isFile'
            },
            {
                expand: true,
                flatten: true,
                src: '_src/fonts/**',
                dest: '_dist/fonts/',
                filter: 'isFile'
            },
            {
                expand: true,
                flatten: true,
                src: '_src/img/**',
                dest: '_dist/img/',
                filter: 'isFile'
            },
            {
                expand: true,
                flatten: true,
                src: '_src/js/**',
                dest: '_dist/js/',
                filter: 'isFile'
            },
            {
                expand: true,
                flatten: true,
                src: '_src/*.{html, ico}',
                dest: '_dist/',
                filter: 'isFile'
            }
        ]
    }
};
