/**
 * Usuarios.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	nombre: 'string',
  	avatar: 'string',
  	nacimiento: 'date',
  	token: 'string',
  	asociacion: {
  		model: 'asociaciones'
  	},
  	rol: {
  		model: 'roles'
  	}
  }
};

