const mongoose = require('mongoose');
const router = require('express').Router();
const Event =require('../models/events');
const multer  = require('multer');
const upload = multer()
// connectDB();

router.post('/events', upload.none(),async(req,res)=>{
    const id=req.body.id;
    const title=req.body.title;
    const link=req.body.link;
    const email=req.body.email;
    const category=req.body.category;
    const author=req.body.author;
    const desc=req.body.desc;
    await Event.create({
        id:id,
        link:link,
        title:title,
        category:category,
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

module.exports=router;