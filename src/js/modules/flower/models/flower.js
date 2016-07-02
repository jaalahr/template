define([
	"jquery",
	"underscore",
	"backbone"
], function($, _) {
	
    var app = app || {};

    app.flower = Backbone.Model.extend({
        defaults: {
            color: "pink",
            img: "http://placehold.it/350x150"
        }
    });

});






