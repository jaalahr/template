module.exports = {
    process_clean:           ['clean'],
	process_sass_dev:        ['sass:dev'],
    process_sass_dist:       ['sass:dist'],
    process_jshint:          ['jshint'],
    process_scsslint:        ['scsslint'],
    process_uglify_imagemin: ['uglify', 'imagemin'],
    process_codekit:         ['codekit'],
    process_copy:            ['copy'],
    process_validation:      ['validation']
};