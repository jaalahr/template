define('bankView', [
  'jquery',
  'underscore',
  'backbone',
  'accountView'
], function( $, _, Backbone, AccountView ) {

    var View = Backbone.View.extend({
        el: 'tbody',

        initialize: function() {
            this.listenTo( this.collection, 'add', this.render );
        },

        render: function() {
            var that = this;

            this.$el.empty();

            this.collection.each(function( accountModel ) {
                var accountView = new AccountView({
                    model: accountModel
                });

                accountView.render();

                that.$el.append( accountView.el );
            });
        }
    });

    return View;

});