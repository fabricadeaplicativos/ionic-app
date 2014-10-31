angular.module('achou', ['ionic', 'controllers'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		if (window.cordova && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		}

		if (window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
})
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
	$stateProvider
	.state('categorias', {
		url: '/',
		controller: 'CategoriasCtrl',
		templateUrl: 'templates/home.html'
	})
	.state('estabelecimentos', {
		url: '/estabelecimentos/categoria/:id',
		controller: 'EstabelecimentosCtrl',
		templateUrl: 'templates/estabelecimentos.html'
	})
	.state('detalhes',{
		url:'/estabelecimentos/categoria/:id/detalhes',
		controller: 'DetalhesCtrl',
		templateUrl: 'templates/detalhes.html'

	})
	$urlRouterProvider.otherwise('/');
}) 
