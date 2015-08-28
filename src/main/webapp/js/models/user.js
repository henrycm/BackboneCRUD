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

app.UserCollection = Backbone.PageableCollection.extend({
	model : app.User,
	url : "api/users",
	state : {
		pageSize : 5,
		sortKey : "name",
		order : 1
	}
});

userList = new app.UserCollection;

templates = {};