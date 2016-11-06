/**
 * Procesos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var proceso = ['Seleccion de cultivo',
              'Preparación de la tierra',
              'seleccion de la semilla',
              'siembra de la semilla',
              'riego',
              'crecimiento de cultivos',
              'fertilización',
              'cocecha'
              ];
module.exports = {

  attributes: {
  	descripcion: 'text',
  	cultivo: {
  		model: 'cultivos'
  	},
  	producto: {
  		model: 'productos'
  	},
  },
  seedData: [],
  fillData: function() {
    // for (var i = 0; i <= 10; i++) {
      for (i = 0; i < proceso.length; i++) {
          this.seedData.push({
            descripcion: proceso[i],
            // producto: faker.random.number({min:1, max:2}),
            cultivo: 1
          });
      }
    // }

  }
};
