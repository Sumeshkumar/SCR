/**
*
*	author: Sumesh Kumar
*
*	created: aug 5, 2017
*
*	module: Service Center
*
*/
var express = require('express');
var router = express.Router();
var serviceCenter = require('../models/serviceCenter');

/**
* /service/add
* add new service center
*/
router.post('/add', function(req, res, next) {

	var supportCenter = {
	    "email": req.body.email,
	    "name": req.body.name,
	    "address":{"street": req.body.street, "city": req.body.city, "pincode": req.body.pincode},
	    "primaryContact": req.body.primaryContact,
	    "secondarycontact": req.body.secondarycontact,
	    "openTime": req.body.openTime,
	    "closeTime": req.body.closeTime,
	    "image": req.body.image,
	    "gMap": {"lat": req.body.lat, "lng": req.body.lng}
	}

	serviceCenter.addServiceCenter(supportCenter, function(err, data){
		if(err){
		  	console.log(err);
		}

		res.status(201).send(data);
	});

});

/**
* edit a service center information
* /service/edit
*/
router.put('/edit', function(req, res, next) {

   var id = req.body.id;
		   
   var supportCenter = {
	    "email": req.body.email,
	    "name": req.body.name,
	    "address":{"street": req.body.street, "city": req.body.city, "pincode": req.body.pincode},
	    "primaryContact": req.body.primaryContact,
	    "secondarycontact": req.body.secondarycontact,
	    "openTime": req.body.openTime,
	    "closeTime": req.body.closeTime,
	    "image": req.body.image,
	    "gMap": {"lat": req.body.lat, "lng": req.body.lng}
	}
	serviceCenter.editServiceCenter(id, supportCenter, function(err, data){
		if(err){
		  	console.log(err);
		}

		res.status(200).send(data);
	});

});

/**
* delete a service center information
*/
router.delete('/remove', function(req, res, next) {
	var id = req.body.id;
	serviceCenter.deleteServiceCenter(id, function(err, data){
		if(err){
		  	console.log(err);
		}

		res.status(200).send(data);
	});

});

module.exports = router;