var app = app || {};

app.utils.loadTemplates([ "UserView", "UserListView", "UserListItemView" ],
		function() {
			new app.AppView;
		});

$(document).ajaxError(function(event, xhr, options, exc) {
	console.error("ajaxError:" + exc);
});
