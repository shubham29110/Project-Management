const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const User = require('../models/User')



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
try {
           
      
// This creates our socket using the instance of the server


// This is what the socket.io syntax is like, we will work this later
req.io.on('connection', socket => {
  console.log('New client connected')
  
  // just like on the client side, we have a socket.on method that takes a callback function
  socket.on('change color', (color) => {
    // once we get a 'change color' event from one of our clients, we will send it to the rest of the clients
    // we make use of the socket.emit method again with the argument given to use from the callback function above
    console.log('Color Changed to: ', color)
    req.io.sockets.emit('change color', color)
  })
  
  // disconnect is fired when a client leaves the server
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

                } catch (error) {
                      res.send(error)
                    }
          
              })
module.exports = router;