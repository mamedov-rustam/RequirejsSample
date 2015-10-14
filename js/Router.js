define(function() {
	var defaultHash = '#list';
	var currentHash = '';

	var routes = [
		{
			hash: '#list',
			controller: 'FriendsListController'
		},
		{
			hash: '#add',
			controller: 'AddFriendController'
		}
	];

	function startRouting() {
		window.location.hash = window.location.hash || defaultHash;
		setInterval(hashCheck, 100);
	};

	function hashCheck() {
		if (window.location.hash != currentHash) {
			for(var i = 0; i < routes.length; i++) {
				if (window.location.hash == routes[i].hash) {
					loadController(routes[i].controller);
					break;
				}
			}
			currentHash = window.location.hash;
		}
	};

	function loadController(controllerName) {
		require(['Controllers/' + controllerName], function(controller) {
			controller.start();
		});
	}

	return {
		startRouting: startRouting
	} 
});