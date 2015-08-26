var app = app || {};

app.utils.loadTemplates([ "UserView", "UserListView", "UserListItemView" ],
		function() {
			new app.AppView;
		});
