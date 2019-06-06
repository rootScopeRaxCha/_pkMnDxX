var myApp	= /**
* start Module
*
* Description
*/
angular.module('start', ['ui.router', 'ngAnimate']);

myApp.controller('loginCtrl', function ($scope, $state) {
	// $scope.tamanio = innerWidth;
	// alert($scope.tamanio)
})

myApp.controller('pokeapiCtrl', function($scope, $state,$http,$rootScope) {
	$rootScope.datas = [];
	for( let i = 1; i < 103; i++ ) {
		$http({
			method: 'GET',
			url: 'https://pokeapi.co/api/v2/pokemon/'+i+'/'
		}).then(function getData(snapshot) {
			$rootScope.datas.push(snapshot);
			/*Area de Cargado de Imagenes HD*/
			/*
			for ( let x = 1; x < 10; x++ ) {
				console.log('yes' + x)
				if (x<1) {
					$rootScope.datas.data.sprites.front_default = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/00'+x+'.png';
				}
			}*/
			/*
			if (i < 11) {
				// $scope.datas[i].sprites.front_default = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/00'+i+'.png';
				// console.log(snapshot.data.sprites.front_default)
				$rootScope.datas[i].data.sprites.front_default = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/00'+i+'.png';
				console.log('https://assets.pokemon.com/assets/cms2/img/pokedex/full/00'+i+'.png')
			} if (i > 9) {
				// console.log('https://assets.pokemon.com/assets/cms2/img/pokedex/full/0'+i+'.png')
				// console.log('Este es: ' + i)
				$rootScope.datas[i].data.sprites.front_default = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/00'+i+'.png';
			}*/
		});
	};
})

myApp.controller('registerCtrl', function($scope, $state) {
})

