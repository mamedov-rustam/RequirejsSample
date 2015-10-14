define(function() {
	var render = function(id, friends) {
		var html = '<ul>';
		for (var i = 0; i < friends.length; i++) {
			html += '<li>';
			html += friends[i].name;
			html += '</li>';
		}
		html += '</ul>';
		$('#' + id).html(html);
	};

	return {
		render: render
	};
});