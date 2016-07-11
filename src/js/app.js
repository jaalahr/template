define('app', [
  'jquery',
  'underscore',
  'backbone',
  'account',
  'bank'
], function( $, _, Backbone, AccountModel, BankView) {
    var Router = Backbone.Router.extend({

        routes: {
            "": "main"
        },

        main: function(){
            var bank = new Backbone.Collection();
            var bankView = new BankView({
        		collection: bank
        	});

        	var account1 = new AccountModel({
        		memberID: '123',
        		memberName: 'Sample Testington',
        		balance: 1500
        	});

            bank.add(account1);
        }
    });

    var router = new Router();

    Backbone.history.start();

});