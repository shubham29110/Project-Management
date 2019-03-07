var mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TaskSchema = Schema({
        title:{
                type:String,
                required:true
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
                            
        },

        developerEmail:{
                            type :String,
                            
        },

        project: [{
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'Project',
                        required: true 
        }]
});

const Task = mongoose.model('task', TaskSchema);
module.exports = Task;