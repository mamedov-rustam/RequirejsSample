define(['Views/FriendsListView', 'Models/Friend'], function(FriendsListView, Friend) {
	function start() {
		if(!localStorage.friends) {
			var friends = [new Friend('John'), new Friend('Pit'), new Friend('Serg')];
			localStorage.friends = JSON.stringify(friends);
		}

		FriendsListView.render('app', JSON.parse(localStorage.friends));
	}

	return {
		start: start
	}
});