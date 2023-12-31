const mongoose = require('mongoose');
const router = require('express').Router();
const Project =require('../models/projects');
const multer  = require('multer');
const upload = multer()
// connectDB();

router.post('/projects', upload.none(),async(req,res)=>{
    const { title, link, email,  author, desc} = req.body;
    await Project.create({
        link:link,
        title:title,
        author:author,
        email:email,
        desc:desc,
    }, function (err, result){
        if(err) res.json({
            error:err,
        })
        else res.json(result)
    }
    )
}
);

router.get('/projects', async (req, res) => {
    try {
      
      // Fetch two most recently updated events with status true
      const projects = await Project.find({
        status: true,
    });
  
      res.json(projects);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });



module.exports=router;