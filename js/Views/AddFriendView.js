define(function() {
	 function render(containerId, addBtnId, friendNameFieldId) {
		var html = '<input id="' + friendNameFieldId + 
						'"type="text" placeholder="Enter name"/>';
		html += '<button id="' + addBtnId + '">Add</button>';
		$('#' + containerId).html(html);
	}

	return {
		render: render
	}
});