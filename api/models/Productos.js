/**
 * Productos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
 var pesticida = ['Furadan','mesurol'];

module.exports = {

  attributes: {
  	nombre: 'string',
  	tipo: ['fertilizante, pesticida'],
  	nutrientes: {
  		collection: 'nutrientes',
  		via: 'productos'
  	},
  	tratamientos: {
  		collection: 'tratamientos',
  		via: 'productos'
  	},
    plagas: {
      collection: 'plagas',
      via: 'productos'
    }
  },
  seedData: [],
  fillData: function() {
    for (i = 0; i < pesticida.length; i++) {
        this.seedData.push({
          nombre: pesticida[i]
        });
    }
  }
};
