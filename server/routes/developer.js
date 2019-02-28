const express = require('express');
const router = express.Router();
const Project = require('../models/project');
const User = require('../models/User')



router.post('/accept-invitation',async function (req, res, next) {
  try {
        var token = req.body.token
        let user = await Project.findOne({ token: token })
        if (user) {
              newUser.confirmation = true;
            }
      } catch (error) {
            res.send(error)
          }

    })
module.exports = router;