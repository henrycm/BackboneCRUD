var app = app || {};

app.AppView = Backbone.View.extend({
	el : $(".container"),
	initialize : function() {
		$("#app").html(new app.UserView({
			model : new app.User()
		}).el);
	},
	events : {},
	render : function() {
	}
});
