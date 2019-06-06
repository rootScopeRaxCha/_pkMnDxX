myApp.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/login');
		$stateProvider
			.state('login', {
				url: '/login',
				templateUrl: 'templates/login.html',
				controller: 'loginCtrl'
			})
			.state('register', {
				url: '/register',
				templateUrl: 'templates/register.html',
				controller: 'registerCtrl'
			})
			.state('pokeapi', {
				url: '/pokeapi',
				templateUrl: 'templates/pokeapi.html',
				controller: 'pokeapiCtrl'
			})
				
})