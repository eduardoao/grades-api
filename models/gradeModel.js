import mongoose from 'mongoose';
var Schema   = mongoose.Schema;

var gradeSchema = new Schema({
	'name' : String,
	'subject' : String,
	'type' : String,
	'value' : Number,
	'lastModified' : Date
});

const gradeModel = mongoose.model('grade', gradeSchema, 'grade');

export {gradeModel};
