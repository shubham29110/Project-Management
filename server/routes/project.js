const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const Task = require('../models/task')


router.post('/add-task', async function(req, res) {
  try {
   const body =req.body
   console.log('body'+body)
    let project = await Project.findOne({ title: body.projectTitle })
    console.log('++++++++++++++++++'+project)
if(project){
  let newTask = new Task({
    title: body.title,
    developerName:body.developerName,
    developerEmail:developer.developerEmail,
    date:body.date,
    project:project
})
let task = await newTask.save();
console.log(task)
if (task) {
    res.json(task)
    }
}

} catch (error) {
        console.log(error);
        throw error;
    }
})

module.exports = router;