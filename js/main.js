(function(){

window.App = {
    Models: {},
    Collections: {},
    Views: {},
    Router: {}
};

App.Router = Backbone.Router.extend({
    routes: {
        "users"             : "users",
        "users/:id"         : "userDetails"
    },

    initialize: function () {
        this.userDetails();
    },

    users: function() {
        var userList = new UserCollection();
        userList.fetch({success: function(){
            $("#list").html(new UserListView({model: userList}).el);
        }});
    },
    userDetails: function (id) {
        var user = new User({id: id});
        user.fetch({success: function(){
            $("#details").html(new UserView({model: user}).el);
        }});
    }
});

utils.loadTemplate(["UserView", "UserListItemView"], function() {
    app = new App.Router();
    Backbone.history.start();
});

})();