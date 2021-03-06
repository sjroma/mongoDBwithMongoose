const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	firstName: {type:String, required:true},
	lastName: {type:String, required:true},
	addresses: [
		{
			street: {type:String, required:true},
			city: {type:String, required:true}
		}
	]
})

const User = mongoose.model('testuser',userSchema)
module.exports = User
