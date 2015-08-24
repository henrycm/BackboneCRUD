// The in-memory Store. Encapsulates logic to access wine data.
window.store = {
    users: {},
    populate: function () {
        this.lastId = 0;
    },
    find: function (model) {
        return this.users[model.id];
    },
    findAll: function () {
        return _.values(this.users);
    },
    create: function (model) {
        this.lastId++;
        model.set('id', this.lastId);
        this.users[this.lastId] = model;
        return model;
    },
    update: function (model) {
        this.users[model.id] = model;
        return model;
    },
    destroy: function (model) {
        delete this.users[model.id];
        return model;
    }
};

store.populate();
// Overriding Backbone's sync method. Replace the default RESTful services-based implementation
// with a simple in-memory approach.
Backbone.sync = function (method, model, options) {

    var resp;

    switch (method) {
        case "read":
            resp = model.id ? store.find(model) : store.findAll();
            //resp = store.findAll();
            break;
        case "create":
            resp = store.create(model);
            break;
        case "update":
            resp = store.update(model);
            break;
        case "delete":
            resp = store.destroy(model);
            break;
    }
    
    //console.log("Resp: " + JSON.stringify(resp));
    if (resp) {
        options.success(resp);
        console.log("NameStore:" + resp["name"])
    } else {
    	console.log("Record not found");
        options.error("Record not found");
    }
};