window.User = Backbone.Model.extend({
    urlRoot:"api/users",

    initialize:function () {

    },
    defaults: {
        id: null,
        name: ""
    }
});

window.UserCollection = Backbone.Collection.extend({
    model: User,
    url:"api/users"
});