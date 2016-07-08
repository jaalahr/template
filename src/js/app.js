define('app', [
  'jquery',
  'underscore',
  'backbone',
  'account-view',
  'bank'
], function( $, _, Backbone, AccountView, BankView) {
    console.log("---> Running main.js");

    var Router = Backbone.Router.extend({
        routes: {
            "": "main"
        },

        main: function(){
            var bank = new Backbone.Collection();
            var bankView = new BankView({
        		collection: bank
        	});

        	var account1 = new AccountView({
        		memberID: '123',
        		memberName: 'Sample Testington',
        		balance: 1500
        	});
        }
    });

    var router = new Router();

    Backbone.history.start();

});