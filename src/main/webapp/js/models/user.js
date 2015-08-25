var app = app || {};

app.User = Backbone.Model.extend({
	urlRoot : "api/users",
	initialize : function() {
	},
	defaults : {
		id : null,
		name : ""
	}
});

app.UserCollection = Backbone.Collection.extend({
	model : app.User,
	url : "api/users"
});

userList = new app.UserCollection;

templates = {};