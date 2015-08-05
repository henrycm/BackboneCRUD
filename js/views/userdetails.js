window.UserView = Backbone.View.extend({
    initialize:function () {
        this.render();
    },
    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },
    events: {
        "change"        : "change",
        "click .save"   : "save"
    },
    change: function (event) {
        utils.hideAlert();
        var target = event.target;
        var change = {};
        change[target.name] = target.value;
        this.model.set(change);
    },
    save: function () {
        var self = this;
        this.model.save(null, {
            success: function (model) {
                self.reset();
                app.navigate('users', true);
                utils.showAlert('Success!', 'User saved successfully:' + model.id, 'alert-success');
            },
            error: function () {
                utils.showAlert('Error', 'An error occurred while trying to delete this item', 'alert-error');
            }
        });
    },
    reset: function(){
        this.model = new User();
        this.render();
    }
});
