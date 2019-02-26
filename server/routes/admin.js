const express = require('express');
const router = express.Router();
var crypto = require('crypto');
const MailUtil = require('../config/email/email.json')
const Sender = require("../config/email/sender")
const SendMail = require("../config/email/sendingMail")
const Project = require('../models/project');
const User = require('../models/User')


router.post('/add-project', async function(req, res) {
  try {
   const body =req.body
   const user = await User.findOne({ _id: body.id })
   const buffer = await crypto.randomBytes(20);
   const usertoken = buffer.toString('hex');
   console.log(usertoken)
   if(user){
    let project = await Project.findOne({ title: body.title })
    if(project){
      return res.status(400).json({
        project: 'Project already exists'
    });
    }

    var mailOptions = {
            to: "stiwari@bestpeers.com",
            from: Sender.MAIL_OPTIONS.FROM,
            subject: MailUtil.project_invitation_mail.subject,
            body: MailUtil.project_invitation_mail.header+'\n\n' + MailUtil.project_invitation_mail.middle +
                'https://' + req.headers.host + '/admin/projects/' + usertoken + '\n\n' +
                MailUtil.project_invitation_mail.footer
  };

  const flag = await SendMail.sendMail(mailOptions);
  if(flag){
    console.log('mail sent');
    let newProject = new Project({
      title: body.title,
      discription:body.discription,
      technology:body.technology,
      developer:body.developer,
      date:body.date,
      createdBy:user,
      developerToken:usertoken,
      confirmation:false
  })
  let project_data = await newProject.save();
  if (project_data) {
    res.json(project_data)
    }
  }
     
  }
} catch (error) {
    console.log(error);
    throw error;
}
})

router.post('/get-developer', async function(req, res) {
  try {
    var technology = req.body
   const developer =await User.find({technology:{'$in': technology}})
   console.log(developer)
   if(developer){
   res.json(developer) 
  }
} catch (error) {
    console.log(error);
    throw error;
}
})


router.get('/project-list',async function(req, res) {
  try {
   const projectList =await Project.find()

   console.log(projectList)
   if(projectList){
   res.json(projectList) 
  }
} catch (error) {
    console.log(error);
    throw error;
}
})


router.get('/developer-list',async function(req, res) {
  try {
   const developers =await User.find({role:"Developer"})

   console.log('developers'+developers)
   if(developers){
   res.json(developers) 
  }
} catch (error) {
    console.log(error);
    throw error;
}
})
module.exports = router;