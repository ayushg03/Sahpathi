const mongoose = require('mongoose');
const router = require('express').Router();
const Event =require('../models/events');
const multer  = require('multer');
const upload = multer()
// connectDB();

router.post('/events', upload.none(),async(req,res)=>{
    const { id, title, link, email, category, author, desc,date,timing } = req.body;
    await Event.create({
        id:id,
        link:link,
        title:title,
        category:category,
        author:author,
        email:email,
        desc:desc,
        date:date,
        timing:timing,
    }, function (err, result){
        if(err) res.json({
            error:err,
        })
        else res.json(result)
    }
    )
}
);

router.get('/event', async (req, res) => {
    try {
      
      // Fetch two most recently updated events with status true
      const recentEvents = await Event.find({
        status: true,
        category: { $in: ['Sports', 'Event'] }
    }).limit(2);
  
      res.json(recentEvents);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get('/clubs', async (req, res) => {
    try {
      
      // Fetch two most recently updated events with status true
      const clubs = await Event.find({
        status: true,
        category: { $nin: ['Sports', 'Event'] }
    });
  
      res.json(clubs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

module.exports=router;