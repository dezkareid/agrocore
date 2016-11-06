/**
 * Suelos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var types_ground = ['arcillosos','limosos','arenosos','margosos','gredosos','pantanosos'];

module.exports = {

  attributes: {
  	nombre: 'string'
  },
  seedData: [],
  fillData: function() {
    for (i = 0; i < types_ground.length; i++) {
      	this.seedData.push({
        	nombre: types_ground[i],
      	});
    }
  }
};
