var app = app || {};

app.AppView = Backbone.View.extend({
	el : $(".container"),
	initialize : function() {
		var user = new app.User();
		var frm = new app.UserView({
			model : user
		});
		new app.UserListView({
			model : user
		});
	},
	events : {},
	render : function() {
	}
});
