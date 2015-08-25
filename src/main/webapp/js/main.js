var app = app || {};

app.utils.loadTemplates([ "UserView", "UserListItemView" ], function() {
	new app.AppView;
});
