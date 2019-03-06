const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const User = require('../models/User')
const app =require('../app')

module.exports=function(){

  router.post('/assigned-project',async function (req, res, next) {
    try {
          const token = req.body.token
          console.log(token)
          const project = await Project.findOneAndUpdate({ token: token },{$set: {confirmation:true}}, {upsert: true})
          const user = await User.findOne({ token: token })
          console.log(project+'*******************'+user)

          if (user&&project) {
                      res.json(project)
                      
              }
        } catch (error) {
              res.send(error)
            }
  
      })


router.get('/task',async function (req, res, next) {
  const io =app.app.get(io)
io.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('SEND_TITLE', function(data){
    console.log('data',data)
    io.emit('RECEIVE_TITLE', data);
      console.log('data',data)
  })
});

        
            })

  return router

}


