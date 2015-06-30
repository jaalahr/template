requirejs.config({
    paths: {
        jquery: [
            'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min',

            // ---------------------------------------
            //If CDN fails, load from this location
            // ---------------------------------------

            'libs/vendor/jquery/dist/jquery.min.js'
        ],

        // ---------------------------------------
        // Libraries
        // ---------------------------------------

        migratePlugin: 'libs/plugins/migrate',
        jqueryUI:      'libs/vendor/jquery-ui/jquery-ui.min',
        bootstrap:     'libs/plugins/bootstrap.min',
        console:       'libs/plugins/dev.console.min'
    },

    // ---------------------------------------
    // Library Dependencies
    // ---------------------------------------

	shim: {
        'migratePlugin': ['jquery'],
        'jqueryUI':      ['jquery'],
        'bootstrap':     ['jquery']
    }

});
require(['userInterface.js'], function(userInterface){
    userInterface.init();
});



