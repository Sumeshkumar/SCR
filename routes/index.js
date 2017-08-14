var express = require('express');
var router = express.Router();
var serviceCenter = require('../models/serviceCenter');

/* GET home page. */
router.get('/', function(req, res, next) {

	  serviceCenter.getServiceCenter(function(err, data){

	  	if(err){
	  		console.log(err);
	  	}

	  	res.send(data);

	  })
	  
});

module.exports = router;
