define("AccountModel", [
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
    return Backbone.Model.extend({
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

define("AccountView", [
  'jquery',
  'underscore',
  'backbone',
  'AccountModel'
], function($, _, Backbone, AccountModel) {
	return Backbone.View.extend({
		tagName: 'tr',

		events: {
			'submit': 'onSubmit'
		},

		initialize: function() {
			this.listenTo(this.model, 'change:balance', this.render);
		},
		render: function() {
			this.$el.empty();

			this.$el.append($('<td>').text(this.model.get('memberName')));
			this.$el.append($('<td>').text(this.model.getFormattedBalance('en-US', 'USD')));

			var $form = $('<form>');
			$form.append($('<input>').attr({ type: 'text' }));
			$form.append($('<input>').attr({ type: 'submit' }).val('Withdraw'));
			this.$el.append($('<td>').append($form));
		},

		onSubmit: function(e) {
			e.preventDefault();

			var $input = $(e.target).find('input[type="text"]');
			this.model.withdraw($input.val());
		}
	});
});

define("BankView", [
  'jquery',
  'underscore',
  'backbone',
  'AccountModel'
], function($, _, Backbone, AccountModel) {
    return Backbone.View.extend({
        el: 'tbody',

        initialize: function() {
            this.listenTo(this.collection, 'add', this.render);
        },

        render: function() {
            var that = this;

            this.$el.empty();

            this.collection.each(function(account) {
                var accountView = new bankApp.views.Account({
                    model: account
                });

                accountView.render();

                that.$el.append(accountView.el);
            });
        }
    });
});

define("AppView", [
  'jquery',
  'underscore',
  'backbone',
  'AccountModel',
  'BankView',
  'AccountView'
], function($, _, Backbone, AccountModel, BankView, AccountView) {

    window.bankApp = {
		models: {},
		collections: {},
		views: {}
	};

    var bank = new Backbone.Collection();

	var bankView = new BankView({
		collection: bank
	});

	var account1 = new AccountView({
		memberID: '123',
		memberName: 'Sample Testington',
		balance: 1500
	});

	bank.add(account1);

    console.log("Testing");

});
