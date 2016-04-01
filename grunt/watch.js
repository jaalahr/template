module.exports = {
	options: {
		livereload: true
	},
	js: {
		files: 		['src/js/**/*.{js,json}'],
		tasks: 		['concurrent:process_jshint', 'process_uglify']
	},
	sass: {
		files: 		['src/sass/**/*.{scss,sass}'],
		tasks: 		['concurrent:process_sass_dev']
	},
    codekit: {
        files: 		['src/kit/**/*.kit'],
        tasks: 		['concurrent:process_codekit']
    }
};
