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
    developerName:{
                type :Array,
                required: true 
            },

    developerEmail:{
                type :String,
                required: true 
                },
    token:{
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