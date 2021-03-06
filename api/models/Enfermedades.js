/**
 * Enfermedades.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	nombre: 'string',
  	cultivos: {
      collection: 'cultivos',
      via: 'enfermedades'
    },
    sintomas: {
      collection: 'sintomas',
      via: 'enfermedades'
    }, 
   	tratamientos: {
      collection: 'tratamientos',
      via: 'enfermedades'
    }, 
  }
};

