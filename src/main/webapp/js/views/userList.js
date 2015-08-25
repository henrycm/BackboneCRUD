window.UserListView = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    render: function () {
        var users = this.model.models;
        var len = users.length;
        var startPos = 0;
        var endPos = len;

        $(this.el).html('<table class="table table-bordered"><tr><td>Id</td><td>Name</td></tr></table>');
        for (var i = startPos; i < endPos; i++) {
            $('.table', this.el).append(new UserListItemView({model: users[i]}).render().el);
        }

        return this;
    }
});

window.UserListItemView = Backbone.View.extend({

    tagName: "tr",

    initialize: function () {
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});
