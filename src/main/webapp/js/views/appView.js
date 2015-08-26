var app = app || {};

app.AppView = Backbone.View.extend({
	el : $(".container"),
	initialize : function() {
		new app.UserView({
			model : new app.User()
		});
	},
	events : {},
	render : function() {
	}
});
