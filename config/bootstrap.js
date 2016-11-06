/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {
  var firebase = require("firebase");
  var dotenv = require('dotenv');

  dotenv.load();
  firebase.initializeApp({
    serviceAccount: process.env.FIREBASE_CREDENTIALS,
    databaseURL: process.env.FIREBASE_URL
  });

  var db = firebase.database();
  var ref = db.ref("value");
  ref.once("value", function(snapshot) {
    sails.log.debug(snapshot.val());
  });

  async.series([
    Asociaciones.seed,
    Suelos.seed,
    Plagas.seed
    // Productos.seed,
    // Cultivos.seed,
    // Procesos.seed
  ]);

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
