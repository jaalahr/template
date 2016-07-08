define('bank', [
  'jquery',
  'underscore',
  'backbone',
  'account'
], function($, _, Backbone, AccountView) {

    console.log("---> Running views/bank.js");

    var View = Backbone.View.extend({
        el: 'tbody',

        initialize: function() {
            this.listenTo(this.collection, 'add', this.render);
        },

        render: function() {
            var that = this;

            this.$el.empty();

            this.collection.each(function(account) {
                var accountView = new AccountView({
                    model: account
                });

                accountView.render();

                that.$el.append(accountView.el);
            });
        }
    });
    return View;
});