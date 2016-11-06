/**
 * Siembras.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	cultivo: {
      model: 'cultivos'
    },
  	hectareas: 'float',
  	produccion: 'float',
  	inicio: 'date',
  	estado: ['siembra', 'cultivo', 'venta', 'finalizado'],
  	fin: 'date',
  	terreno: {
  		model: 'terrenos'
  	}
  },
  seedData: [],
  fillData: function() {
    for (i = 0; i < plagas.length; i++) {
        this.seedData.push({
          nombre: plagas[i]
        });
    }
  }
};
