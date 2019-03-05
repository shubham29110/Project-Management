var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TaskSchema = Schema({
    title: {
            type: String,
            required: true
            },

	discription: {
                type: String,
                },
	date: {
            type :String,
            required: true 
            },
  developerName:{
                type :Array,
                required: true 
            },

  developerEmail:{
                type :String,
                required: true 
                },

   project: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Project',
                required: true 
            }]
});

const Task = mongoose.model('task', ProjectSchema);
module.exports = Task;