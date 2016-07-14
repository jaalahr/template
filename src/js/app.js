define('app', [
  'jquery',
  'underscore',
  'backbone',
  'accountModel',
  'bankView'
], function( $, _, Backbone, AccountModel, BankView ) {
    var Router = Backbone.Router.extend({

        routes: {
            "": "main"
        },

        main: function(){
            var bank = new Backbone.Collection();

            var bankView = new BankView({
        		collection: bank
        	});

        	var accountOne = new AccountModel({
        		memberID: '001',
        		memberName: 'Jason Bourne',
        		balance: 1500
        	});

            bank.add(accountOne);
        }
    });

    var router = new Router();

    Backbone.history.start();

});