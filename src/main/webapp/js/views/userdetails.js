window.UserView = Backbone.View.extend({
    initialize:function () {
        this.render();
    },
    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },
    events: {        
        "click .save"   : "save"
    },

    save: function (event) {
        this.model.set({
            'id': ($('#id').val() == "") ? null : $('#id').val(),
            'name': $('#name').val()
        });
        this.model.save();
        this.reset();
    },
    reset: function(){
        this.model = new User();
        this.render();
    }
});
