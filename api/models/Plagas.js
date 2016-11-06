/**
 * Plagas.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var plagas = ['Pulgón',
              'Mosquita Blanca',
              'Picudo',
              'Araña Roja',
              'Gallina Ciega',
              'Gusano',
              'Mosca de frutas',
              'Minadoras de hoja'];

module.exports = {

  attributes: {
  	nombre: 'string',
  	cultivos: {
      collection: 'cultivos',
      via: 'plagas'
  	},
    // productos: {
    //   collection: 'productos',
    //   via: 'plagas'
    // },

    seedData: [],
    fillData: function() {
      for (i = 0; i < plagas.length; i++) {
        this.seedData.push({
          nombre: plagas[i]
          // cultivos: null,
          // productos: null
        });
      }
    }
  }
};
