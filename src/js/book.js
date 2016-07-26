define('book', [
  'jquery',
  'underscore',
  'backbone',
  'bookModel'
], function( $, _, Backbone, BookModel ) {

    var book = new BookModel({
        title: 'Getting Started with Backbone'
    });

    // Set Properties
    book.set( 'author', 'Andrew Burgess' );

    // Set Properties: Object Literal
    book.set({
        publish_date: 2016,
        in_stock: true
    });

    // Set Properties: HTML
    book.set({
        sub_title: '<h1>Introcution to the Basics</h1>'
    });

    // Get properties
    console.log( book.get('title') );
    console.log( book.get('author') );
    console.log( book.get('publish_date') );
    console.log( book.get('in_stock') );
    console.log( book.get('sub_title') );

});