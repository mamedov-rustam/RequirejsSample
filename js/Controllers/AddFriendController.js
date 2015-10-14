define(['Views/AddFriendView', 'Models/Friend'], function(AddFriendView, Friend) {
	
	function start() {
		var addBtmId = 'add-friend-btn';
		var friendNameFieldId = 'friend-name-field';
		AddFriendView.render('app', addBtmId, friendNameFieldId);
		bindEvents(addBtmId, friendNameFieldId);
	}

	function bindEvents(addBtmId, friendNameFieldId) {
		$('#' + addBtmId).click(function() {
			var name = $('#' + friendNameFieldId).val();
			addNewFriend(new Friend(name));
			routeToFriendsList();
		});
	}

	function addNewFriend(friend) {
		var friends = JSON.parse(localStorage.friends);
		if (!friends) {
			friends = [];
		}
		friends.push(friend);
		localStorage.friends = JSON.stringify(friends);
	}

	function routeToFriendsList() {
		window.location.hash = '#list';
	}

	return {
		start: start
	}
});