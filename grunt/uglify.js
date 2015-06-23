var uglify_files = [
    {
        dest: '_src/js/main.js',
        src: '_src/library/js/main.js'
    }
];

module.exports = {
    dev: {
        options: {
            mangle: false,
            beautify: true,
            compress: false,
            preserveComments: 'all'
        },
		files: uglify_files
	},
    prod: {
        options: {
            mangle: false,
            beautify: false,
            compress: true,
            preserveComments: false
        },
        files: uglify_files
    }
};