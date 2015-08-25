window.UserView = Backbone.View.extend({
    initialize:function () {
    	this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
        this.render();
    },
    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },
    events: {        
        "click .save"   : "save",
        "click .delete"   : "del"
    },

    save: function (event) {
        this.model.set({
            'id': ($('#id').val() == "") ? null : $('#id').val(),
            'name': $('#name').val()
        });
        this.model.save();
        this.reset();
        Backbone.history.navigate("users", true);
    },
    del: function (event) {
    	 this.model.destroy({
             success: function () {
                 alert('User deleted successfully');
                 Backbone.history.navigate("users", true);
             }
         });                
        return false;
    },
    reset: function(){
        this.model = new User();
        this.render();
    }
});
