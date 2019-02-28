var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProjectSchema = Schema({
    title: {
            type: String,
            required: true
            },
	technology: {
                type: Array,
                required: true
                },
	discription: {
                type: String,
                required: true 
                },
	date: {
            type :String,
            required: true 
            },
    developer:{
                type :Array,
                required: true 
            },
    developerToken:{
                    type :String,
                    required: true 
                },
    confirmation:{
                    type:Boolean,
                    required: true 
                },
    createdBy: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users',
                required: true 
            }]
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;