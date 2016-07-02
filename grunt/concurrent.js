module.exports = {
    // Shared
    jshint:         ['jshint'],
    scsslint:       ['scsslint'],

    // Development
    dev_clean:      ['clean:dev'],
    dev_sass:       ['sass:dev'],
    dev_copy:       ['copy:dev'],
    dev_codekit:    ['codekit'],
    dev_uglify:     ['uglify:dev'],

    // Production
    prod_clean:     ['clean:prod'],
    prod_sass:      ['sass:prod'],
    prod_copy:      ['copy:prod'],
    prod_uglify:    ['uglify:prod']
};