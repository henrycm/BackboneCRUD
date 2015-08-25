var app = app || {};

app.utils = {
	loadTemplates : function(views, callback) {
		var deferreds = [];
		$.each(views, function(index, view) {

			deferreds.push($.get('tpl/' + view + '.html', function(data) {
				templates[view] = data;
			}));
		});
		$.when.apply(null, deferreds).done(callback);
	},
	addValidationError : function(field, message) {
		var controlGroup = $('#' + field).parent().parent();
		controlGroup.addClass('error');
		$('.help-inline', controlGroup).html(message);
	},

	removeValidationError : function(field) {
		var controlGroup = $('#' + field).parent().parent();
		controlGroup.removeClass('error');
		$('.help-inline', controlGroup).html('');
	},

	showAlert : function(title, text, klass) {
		$('.alert').removeClass(
				"alert-error alert-warning alert-success alert-info");
		$('.alert').addClass(klass);
		$('.alert').html('<strong>' + title + '</strong> ' + text);
		$('.alert').show();
	},

	hideAlert : function() {
		$('.alert').hide();
	}
};
