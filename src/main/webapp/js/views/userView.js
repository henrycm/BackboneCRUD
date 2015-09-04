var app = app || {};

app.UserView = Backbone.View.extend({
	el : $("#form"),
	initialize : function() {
		this.listenTo(this.model, 'change', this.render);
		// this.listenTo(userList, 'all', this.showEvent);
		this.render();
	},
	events : {
		"click .save" : "createUser"
	},
	render : function() {
		this.template = _.template(templates["UserView"]);
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	createUser : function() {
		var id = ($('#id').val() == "") ? null : $('#id').val();
		var u = new app.User({
			'id' : id,
			'name' : $('#name').val()
		});
		u.save({}, {
			success : function(u2) {
				userList.set(u, {
					remove : false
				});
				if (id == null)
					userList.getLastPage();
				$('#id').val("");
				$('#name').val("");
			}
		});

	},
	showEvent : function(name) {
		console.log("Form Event:" + name);
	}

});

app.UserListView = Backbone.View.extend({
	el : $("#user_list"),
	initialize : function(options) {
		this.listenTo(userList, 'add', this.addOne);
		this.listenTo(userList, 'reset', this.addAll);
		this.listenTo(userList, 'update', this.addAll);
		this.listenTo(userList, 'all', this.showEvent);
		userList.getFirstPage();
		this.render();
	},
	events : {
		"click .delete" : "deleteUser",
		"click .load" : "loadUser",
		"click .next" : "next",
		"click .prev" : "prev",
		"click .page" : "page"
	},
	render : function(name) {
		this.template = _.template(templates["UserListView"]);
		this.$el.html(this.template);
		return this;
	},
	renderPag : function() {
		var tmp_pag = _.template(templates["Pagination"]);
		$(".user-list").html(tmp_pag({
			totalPages : userList.state.totalPages,
			currentPage : userList.state.currentPage
		}));
	},
	addOne : function(user) {
		var view = new app.UserListItemView({
			model : user
		});
		this.$el.find("tbody").append(view.render().el);
	},
	addAll : function() {
		this.$el.find("tbody").html("");
		userList.each(this.addOne, this);
		this.renderPag();
	},
	deleteUser : function(e) {
		e.preventDefault();
		var id = $(e.currentTarget).attr("data-id");
		var u = userList.get(id);
		u.destroy();
		console.log("User deteleted:" + id);
	},
	loadUser : function(e) {
		var id = $(e.currentTarget).attr("data-id");
		this.model.set(userList.get(id).toJSON());
	},
	showEvent : function(name) {
		console.log("List Event:" + name);
	},
	next : function() {
		userList.getNextPage();
	},
	prev : function() {
		userList.getPreviousPage();
	},
	page : function(e) {
		userList.getPage($(e.currentTarget).data("nm_page"));
	}
});

app.UserListItemView = Backbone.View.extend({
	tagName : "tr",
	initialize : function() {
		this.listenTo(this.model, 'change', this.render);
	},
	render : function() {
		this.template = _.template(templates["UserListItemView"]);
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});
