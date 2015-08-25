var app = app || {};

app.UserView = Backbone.View.extend({
	initialize : function() {
		this.listenTo(userList, 'add', this.addOne);
		this.listenTo(userList, 'reset', this.addAll);
		this.listenTo(userList, 'all', this.render);
		userList.fetch();
		this.render();
	},
	events : {
		"click .save" : "createUser",
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
		userList.create(new app.User({
			'id' : ($('#id').val() == "") ? null : $('#id').val(),
			'name' : $('#name').val()
		}));
	},
	addOne : function(user) {
		var view = new app.UserListItemView({
			model : user
		});
		$('#user_list').append(view.render().el);
		user.save;
	},
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
