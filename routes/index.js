var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tasktracker');
var db = mongoose.connection;

var List = require('../models/list')


/*
router.route('/').get(function (req, res, next) {
  List.find(function (err, lists) {
    if (err) {
      return next(new Error(err))
    }

    res.json(lists) // return all todos
  })
})
*/
// Get Homepage/*
/*
router.get('/', function(req, res) {
   MongoClient.connect(url, function(err, db) {
       var collection = db.collection('lists');
       var cursor = collection.find({});
       str = "";
       cursor.forEach(function(item) {
           if (item != null) {
                   str = str + "    description  " + item.description + "</br>";
           }
       }, function(err) {
           db.close();
          }
       );
   });
   res.render('index', { data : str });
});
*/
router.get('/', function(req, res){
  res.render('index');
});
/*
router.get('/', ensureAuthenticated,  function(req, res){
	res.render('index');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}*/

module.exports = router;