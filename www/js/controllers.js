var controllersModule = angular.module('controllers', ['services']);


controllersModule.controller('CategoriasCtrl', function ($scope, $ionicNavBarDelegate, categorias) {
	categorias.search(function(data) {

		$scope.categorias = data.data;
	});

	$scope.categorias = [
		{ titulo: 'Restaurantes' },
		{ titulo: 'Bares' },
		{ titulo: 'Lojas' }
	];

});

controllersModule.controller('EstabelecimentosCtrl', function ($scope, $ionicNavBarDelegate, $stateParams, estabelecimentos) {

	estabelecimentos.search({ category: $stateParams.id }, function(resposta) {
		$scope.estabelecimentos = resposta;
	});

	// $scope.estabelecimentos = [
	// 	{ titulo: 'Japones' },
	// 	{ titulo: 'Chines' },
	// 	{ titulo: 'Frances' }
	// ];

});

controllersModule.controller('DetalhesCtrl', function ($scope, $ionicNavBarDelegate, $stateParams, estabelecimentos){
	estabelecimentos.search({ id: $stateParams.id }, function(resposta) {
		$scope.detalhes = resposta;
	});
})