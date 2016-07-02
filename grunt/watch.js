module.exports = {
	options: {
		livereload: true
	},
	js: {
		files: ['src/js/**/*.{js,json}'],
		tasks: ['concurrent:jshint', 'concurrent:dev_uglify']
	},
	sass: {
		files: ['src/sass/**/*.{scss,sass}'],
		tasks: ['concurrent:dev_sass']
	},
    codekit: {
        files: ['src/kit/**/*.kit'],
        tasks: ['concurrent:dev_codekit']
    }
};
