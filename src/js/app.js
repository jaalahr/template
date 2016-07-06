define([
  'jquery',
  'underscore',
  'backbone',
  'modules/salaries/views/account',
  'modules/salaries/views/bank'
], function($, _, Backbone) {

    var bank = new Backbone.Collection();

    var bankView = new bankApp.views.Bank({
        collection: bank
    });

    var account1 = new bankApp.models.Account({
        memberID: '123',
        memberName: 'Sample Testington',
        balance: 1500
    });

    bank.add(account1);

    //var salaries = function() {
    //
     //
    //}
    //
    //var initialize = function(){
     //   salaries();
	//}
    //
	//return {
	//	initialize: initialize
	//};
});