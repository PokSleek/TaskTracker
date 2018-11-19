var mongoose = require('mongoose');

// List Schema
var ListSchema = mongoose.Schema({
//	_id: mongoose.Schema.Types.ObjectId,
	listname: {
		type: String,
		index:true
	},
	description: {
		type: String
	},
	date: {
		type: Date
	},
	priority: {
		type: String
	},
	complited: {
		type: String,

	}
});

var List = module.exports = mongoose.model('List', ListSchema);

module.exports.createList = function(newList, callback){
    newList.save(callback);
}

module.exports.getListById = function(id, callback){
	List.findById(id, callback);
}