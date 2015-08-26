var app = app || {};

app.UserView = Backbone.View.extend({
	initialize : function() {
		this.listenTo(userList, 'add', this.addOne);
		this.listenTo(userList, 'reset', this.addAll);
		this.listenTo(userList, 'all', this.render);
		this.listenTo(this.model, 'change', this.render);
		userList.fetch();
		this.render();
	},
	events : {
		"click .save" : "createUser",
		"click .delete" : "deleteUser",
		"click .load" : "loadUser",
	},
	render : function() {
		this.template = _.template(templates["UserView"]);
		this.$el.html(this.template(this.model.toJSON()));
		this.addAll();
		return this;
	},
	destroy : function() {
		this.model.destroy();
	},
	addAll : function() {
		this.$('#user_list').html("");
		userList.each(this.addOne, this);
	},
	createUser : function() {
		var u = new app.User({
			'id' : ($('#id').val() == "") ? null : $('#id').val(),
			'name' : $('#name').val()
		});
		var u2 = userList.create(u);		
		userList.fetch();	
		$(".controls input").val("");
	},
	addOne : function(user) {
		var view = new app.UserListItemView({
			model : user
		});
		$('#user_list').append(view.render().el);
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
		this.model = userList.get(id);
		this.render();
	}
});

app.UserListItemView = Backbone.View.extend({
	tagName : "tr",
	initialize : function() {
	},
	render : function() {
		this.template = _.template(templates["UserListItemView"]);
		$(this.el).html(this.template(this.model.toJSON()));
		return this;
	}
});
