define('account-view',[
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {

    console.log("---> Running views/account.js");

	var View = Backbone.View.extend({
		tagName: 'tr',
        // template: window.jst["game.html"],
		events: {
			'submit': 'onSubmit'
		},

		initialize: function() {
			this.listenTo(this.model, 'change:balance', this.render);
		},
		render: function() {
            // this.template(data);

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
    return View;
});