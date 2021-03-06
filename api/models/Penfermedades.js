/**
 * Penfermedades.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	encontrada: 'date',
  	erradicacion: 'date',
  	detalles: 'text',
  	enfermedad: {
  		model: 'enfermedades'
  	},
  	tratamiento: {
  		model: 'tratamientos'
  	},
  	proceso: {
  		model: 'psiembras'
  	},
  	producto: {
  		model: 'productos'
  	}
  }
};

