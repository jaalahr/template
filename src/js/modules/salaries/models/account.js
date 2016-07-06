define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
	bankApp.models.Account = Backbone.Model.extend({
		withdraw: function(amount) {
			amount = parseInt(amount);
			if (this.get('balance') >= amount) {
				this.set('balance', this.get('balance') - amount);
			}
		},

		getFormattedBalance: function(locale, currency) {
			return this.get('balance').toLocaleString(locale, { style: 'currency', currency: currency });
		}
	});
});