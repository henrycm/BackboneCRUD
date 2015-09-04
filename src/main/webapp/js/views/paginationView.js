app.PaginationView = Backbone.View.extend({	
	initialize : function() {
		this.listenTo(this.model, 'update', this.render);
		this.listenTo(this.model, 'all', this.showEvent);
		this.model.getFirstPage();
	},
	events : {
		"click .next" : "next",
		"click .prev" : "prev",
	},
	render : function() {
		this.template = _.template(templates["Pagination"]);
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	next : function() {
		userList.getNextPage();
	},
	prev : function() {
		userList.getPreviousPage();
	},
	showEvent : function(name) {
		console.log("Pagination Event:" + name);
	}
});