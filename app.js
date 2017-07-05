var express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// Replace "test" with your database name.
mongoose.connect('mongodb://localhost:27017/testuser');
const User = require('./user.js')
var app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

//const user = new User({firstName: "Jane", lastName: "Doe"});
//
//user.save().then (function() {
//	console.log("user has been inserted")
//}).catch(function(){
//	console.log("something bad happened")
//});

//User.findOne({firstName: "John"})
//  .then(function(result){
//	console.log(result)
//})
//  .catch(function(){
//	
//});

//find all the users
User.find().then(function(users){
	console.log(users);
}).catch(function(){
	
})

//console.log(user);

app.listen(3000, function () {
	console.log('app is listening on port 3000')
});
