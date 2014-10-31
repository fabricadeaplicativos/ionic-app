var services = angular.module('services', []);

services.factory('categorias', function($http) {
	return {
		'search': function(callback) {
			$http.get('http://achou.goldarkapi.com/categories', {
				'headers': {
					'X-Api-Token': 'J2bke2Yk9N52K81gNheiVK4J1J+ogv0jY/NhZPXOsbls+52mZNBKMDm6bD+iA8M08d3pBHhF3TaaDnMFddPmQw=='
				}
			})
			.success(callback)
			.error(function () {
				alert('cateroias request failed')
			});
		},
	};
});

services.factory('estabelecimentos', function($http){
	return {
		'search': function(options, callback) {

			console.log(options);

			// ffazer requisicao...
			// 
			// o options pode ter tanto id quanto category
			var bancoDeDados = [

				// lanches
				{ 	
					title: 'Gordão',
					id:'qwert', 
					image: 'http://www.gordaolanches.com.br/k_entrada.jpg',
					distancia: '300m',
					ranking: '3 stars',
					preco: '2 $',
					category: '543bef34657f6f474db325fd',
				},

				{ 
					title: 'Starbucks', 
					id:'yruti',
					image: 'http://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/200px-Starbucks_Corporation_Logo_2011.svg.png',
					distancia: '300m',
					ranking: '3 stars',
					preco: '2 $',
					category: '543bef34657f6f474db325fd',
				},


				// beleza
				{ 
					title: 'Sempre bela',
					category: '543bef3a657f6f474db32600',
					id:'bdje',
					image: 'http://silviaimports.loja2.com.br/img/997afaa42c1e342b899636b4a48001aa.jpg',
				},
				{
					title: 'Fina beleza',
					category: '543bef3a657f6f474db32600',
					id:'jeslm',
					image: 'http://www.finabeleza.com.br/images/promocoes/finabeleza.jpg'
				}

			];
			

			if (options.id) {
				// search by id
				var res = bancoDeDados.filter(function (entry) {

					return entry.id === options.id;

				})[0];
			} else if (options.category) {



				// search by category
				var res = bancoDeDados.filter(function (entry) {
					return entry.category === options.category;
				});
			}

			callback(res);
		}
	}
})