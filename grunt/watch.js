module.exports = {
	options: {
		livereload: true
	},
	js: {
		files: 		['_src/library/js/**/*.{js,json}'],
		tasks: 		['concurrent:process_jshint']
	},
	sass: {
		files: 		['_src/library/sass/**/*.{scss,sass}'],
		tasks: 		['concurrent:process_sass_dev']
	},
    codekit: {
        files: 		['_src/library/kit/**/*.kit'],
        tasks: 		['concurrent:process_codekit']
    },
    validation: {
        files: 		['_src/library/kit/**/*.kit', '_src/*.html'],
        tasks: 		['concurrent:process_validation']
    }
};
