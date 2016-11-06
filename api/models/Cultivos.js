/**
 * Cultivos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var faker = require('faker/locale/es_MX');
var cultivos = ['Jitomate',
                'Pepino',
                'Espárrago',
                'Aguacate',
                'Chile',
                'Mango',
                'Fresa',
                'Cebolla',
                'Papaya',
                'Lechuga'];

module.exports = {

  attributes: {
  	nombre: 'string',
  	suelo: {
  		model: 'suelos'
  	},
  	plagas: {
      collection: 'plagas',
      via: 'cultivos'

  	},
  	enfermedades: {
      collection: 'enfermedades',
      via: 'cultivos'

  	},
  	nutrientes: {
      collection: 'nutrientes',
      via: 'cultivos'

  	}
  },
  seedData: [],
  fillData: function() {
    for (i = 0; i < cultivos.length; i++) {
        this.seedData.push({
          nombre: cultivos[i],
          suelo: faker.random.number({min:1, max:6})
        });
    }
  }

};
