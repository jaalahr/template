define('bookModel',[
  'jquery',
  'underscore',
  'backbone'
], function( $, _, Backbone ) {

	var Book = Backbone.Model.extend({
        defaults: { // Default attributes or properties
            title: 'This is the default title'
        },
        
	});

    return Book;
});