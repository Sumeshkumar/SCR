var MongoClient = require( 'mongodb' ).MongoClient;

module.exports = {

  connect: function(callback) {

  		MongoClient.connect( "mongodb://localhost:27017/scr", function( err, db ) {

	      if(err){
	      	callback(err);
	      }

	      callback('', db);

	    } );

  }

};