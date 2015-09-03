$.ajax({
	type : "POST",
	contentType : "application/json; charset=utf-8",
	url : "http://localhost:8080/BackboneCRUD/api/users",
	data : '{"id":null,"name":"aa"}'
});

$.ajax({
	type : "GET",
	url : "http://localhost:8080/BackboneCRUD/api/users/0"
});