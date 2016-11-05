/**
 * Asociaciones.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var faker = require('faker/locale/es_MX');


module.exports = {

  attributes: {
  	nombre: 'string',
  	municipio: 'string'
  },
  seedData: [],
  fillData: function() {
    var i;
    for (i = 1; i <= 10; i++) {
      this.seedData.push({
        nombre: faker.name.firstName(),
        municipio: faker.address.city()
      });
    }
  }
};
