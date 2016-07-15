requirejs.config({
    paths: {
        jquery: [
            'https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min',
            'libs/jquery.min.js' // If CDN fails, load from this location
        ],
        jqueryUI:       'libs/jquery-ui.min',
        underscore:     'libs/underscore-min',
        backbone:       'libs/backbone-min',
        bootstrap:      'libs/bootstrap.min'
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'backbone'
        }
    }
});

require([
  // Load our app module and pass it to our definition function
  'app',
], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
});