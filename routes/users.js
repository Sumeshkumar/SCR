var express = require('express');
var router = express.Router();
var MongoClient = require( 'mongodb' ).MongoClient;
var ObjectId = require('mongodb').ObjectID;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/**
* add new user
*/
router.post('/add', function(req, res, next) {
  MongoClient.connect( "mongodb://localhost:27017/scr", function( err, db ) {
	  if(err){
	  	console.log(err);
	  }
	   var collection = db.collection('users');
	   
	   var user = {
		    "email": req.body.email,
		    "firstName": req.body.firstName,
		    "lastName": req.body.lastName,
		    "mobile": req.body.mobileNumber
		}
		
		collection.insert(user, function(err, data){
			if(err){
			  	console.log(err);
			}

			res.status(201).send({"status": "Inserted successfully!"});
		});

    } );
});

/**
* get user details by id
*/
router.get('/details/:id', function(req, res, next) {
  MongoClient.connect( "mongodb://localhost:27017/scr", function( err, db ) {
	  if(err){
	  	console.log(err);
	  }
	   var collection = db.collection('users');

	   var userId = req.params.id;
		
		collection.find({"_id": ObjectId(userId)}).toArray(function(err, data) {
			if(err){
			  	console.log(err);
			}

			res.status(200).send({"data": data});
		});

    } );
});

/**
* get all users
*/
router.get('/list', function(req, res, next) {
  MongoClient.connect( "mongodb://localhost:27017/scr", function( err, db ) {
	  if(err){
	  	console.log(err);
	  }
	   var collection = db.collection('users');
		
		collection.find({}).toArray(function(err, data) {
			if(err){
			  	console.log(err);
			}

			res.status(200).send({"data": data});
		});

    } );
});

/**
* edit user by id
*/
router.put('/edit', function(req, res, next) {
  MongoClient.connect( "mongodb://localhost:27017/scr", function( err, db ) {
	  if(err){
	  	console.log(err);
	  }
	   var collection = db.collection('users');
	   var userId = req.body.id;
	   var user = {
	   		"email": req.body.email,
	   		"firstName": req.body.firstName,
	   		"lastName": req.body.lastName,
	   		"mobile":req.body.mobileNumber
	   }
		
		collection.updateOne({"_id": ObjectId(userId)}, user, function(err, data){

			if(err){
			  	console.log(err);
			}

			res.status(200).send({"status": "Updated successfully!"});
		});

    } );
});

/**
* delete user
*/
router.delete('/remove', function(req, res, next) {
  MongoClient.connect( "mongodb://localhost:27017/scr", function( err, db ) {
	  if(err){
	  	console.log(err);
	  }
	   var collection = db.collection('users');

	   var id = req.body.id;
		
		collection.deleteOne({"_id": ObjectId(id)}, function(err, data){
			if(err){
			  	console.log(err);
			}

			res.status(200).send({"status": "Deleted successfully!"});
		});

    } );
});

module.exports = router;
