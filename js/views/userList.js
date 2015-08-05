window.UserListView = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    render: function () {
        var users = this.model.models;
        var len = users.length;
        var startPos = 0;
        var endPos = len;

        $(this.el).html('<ul class="thumbnails"></ul>');
        for (var i = startPos; i < endPos; i++) {
            $('.thumbnails', this.el).append(new UserListItemView({model: users[i]}).render().el);
        }

        return this;
    }
});

window.UserListItemView = Backbone.View.extend({

    tagName: "li",
    className: "span3",

    initialize: function () {
        this.model.bind("change", this.render, this);
        this.model.bind("destroy", this.close, this);
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    }

});
