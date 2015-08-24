(function(){


AppRouter = Backbone.Router.extend({
    routes: {
        "users"             : "users",
        "users/:id"         : "userDetails"
    },

    initialize: function () {
    	$("#details").html(new UserView({model: new User()}).el);
    },

    users: function() {
        var userList = new UserCollection();
        userList.fetch({success: function(){
            $("#list").html(new UserListView({model: userList}).el);
        }});
    },
    userDetails: function (id) {
        var user = new User({id: id, name:null});
        var view = new UserView({model: user})
        user.fetch({success: function(){
        	console.log("Name:" + user.get("name"))
        	view.render();
            $("#details").html(view.el);
        },error: function(err){
        	console.log(err);
        }
        });
    }
});

utils.loadTemplate(["UserView", "UserListItemView"], function() {
    app = new AppRouter();
    Backbone.history.start();
});

})();