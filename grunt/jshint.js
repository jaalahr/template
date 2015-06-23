var jshint_files = [
    '_src/library/js/**/*.js',
    '!_src/library/js/libs/**/*.js'
];

module.exports = {
    options: {
        force    : true,
        elision  : false, 
        "-W099"  : true,  // Ignore specific warnings
        bitwise  : false, // Prohibit bitwise operators (&, |, ^, etc.).
        browser  : true,  // Standard browser globals e.g. `window`, `document`.
        curly    : true,  // Require {} for every new block or scope.
        eqeqeq   : true,  // Require triple equals i.e. `===`.
        eqnull   : true,  // Tolerate use of `== null`.
        forin    : true,  // Tolerate `for in` loops without `hasOwnPrototype`.
        immed    : true,  // Require immediate invocations to be wrapped in parens e.g. `( function(){}() );`
        laxcomma : true,  // Suppress warnings about comma-first coding style.
        newcap   : true,  // Require capitalization of all constructor functions e.g. `new F()`.
        noarg    : true,  // Prohibit use of `arguments.caller` and `arguments.callee`.
        noempty  : true,  // Prohibit use of empty blocks.
        nonbsp   : true,  // This option warns about "non-breaking whitespace" characters.
        strict   : false, // Require `use strict` pragma in every file.
        //undef    : true,  // Require all non-global variables be declared before they are used.
        unused   : true,  // This option warns when you define and never use your variables.

        // This option can be used to specify a white list of global variables that are not formally defined in the source code.
        globals: {
            log    : true,
            define : true,
            jQuery : true
        }
    },

    dev: {
        src: jshint_files
    }
};
