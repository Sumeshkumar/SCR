var ObjectId = require('mongodb').ObjectID;

var scrCollection = 'serviceCenter';

var MongoDb = require('../Util/mongoUtil');

var serviceCenter = {

	getServiceCenter: function(callback){

		MongoDb.connect(function( err, db ) {
		  
		  if(err){
		  	callback(err);
		  }

		  db.collection(scrCollection).find({}).toArray(function(err, data){
			   	if(err){
			   		callback(err);
			   	}
			   	callback('', data);
		  })

	    } );

	},

	addServiceCenter: function(supportCenter, callback){

		MongoDb.connect(function( err, db ) {

		  if(err){
		  	console.log(err);
		  }
			
		db.collection(scrCollection).insert(supportCenter, function(err, data){
			if(err){
			  	console.log(err);
			}

			callback('', {"status": "Inserted successfully!"});
		});

	    } );

	},

	editServiceCenter: function(id, supportCenter, callback){

		MongoDb.connect(function( err, db ) {

		  if(err){
		  	console.log(err);
		  }
			
			db.collection(scrCollection).updateOne({"_id": ObjectId(id)}, supportCenter, function(err, data){
				if(err){
				  	console.log(err);
				}

				callback('', {"status": "Updated successfully!"});
			});

	    } );

	},

	deleteServiceCenter: function(id, callback){

		MongoDb.connect(function( err, db ) {

		  if(err){
		  	console.log(err);
		  }
			
			db.collection(scrCollection).deleteOne({"_id": ObjectId(id)}, function(err, data){
				if(err){
				  	console.log(err);
				}

				callback('', {"status": "Deleted successfully!"});
			});

	    } );
	}

};

module.exports = serviceCenter;