define("Bank", [
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
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