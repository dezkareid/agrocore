/**
 * SearchController
 *
 * @description :: Server-side logic for managing searches
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	ai: function (req, res) {
		var text = req.param('text');
		console.log(text);
		AIService.search(text)
			.then(function (response) {
				var action = response.result.action;
				console.log(response);
				if (action == "seach_plaga"){
					var plaga = response.result.parameters.Plagas;
					return Plagas.findOne({'nombre' : { 'contains': plaga } }).populate('productos');
				}
				if (action == "search_cultivo"){
					var cultivo = response.result.parameters.Cultivo;
					console.log(cultivo);
					return Cultivos.findOne({'nombre' : { 'contains': cultivo } }).populate('nutrientes');
				}
				if (action == "search_plagas_cultivo"){
					var cultivo = response.result.parameters.Cultivo;
					return Cultivos.findOne({'nombre' : { 'contains': cultivo } }).populate('plagas');
				}
				return Promise.reject({ error: "Acción no reconocida"})
			})
			.then(function (value) {
				if (!value){
					var data = { action: action, value: value };
					return res.status(200).json(data);
				}
				return res.status(500).json({error: 'No se encontro respuesta'});
			})
			.catch(function (error) {
				return res.status(500).json(error);
			})
	}
};

