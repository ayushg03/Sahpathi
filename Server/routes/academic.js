const mongoose = require('mongoose');
const router = require('express').Router();
const File =require('../models/file');
const Subject=require('../models/subject');
const Semester=require('../models/semester');
const multer  = require('multer');
const upload = multer()


router.post('/notes', upload.none(),async(req,res)=>{
    const { id, title, fileName, size, label, author, desc } = req.body;
    const check=await File.exists({$and:[{fileName:fileName,size:size}]}).exec();
    if(!check){
    await File.create({
        fileName:fileName,
        size:size,
        id:id,
        title:title,
        label:label,
        author:author,
        desc:desc,
    }, function (err, result){
        if(err) res.json({
            error:err,
        })
        else res.json(result)
    }
    )
}
else{
    res.json(check);
    console.log(check);
}
});
router.post('/sub', upload.none(),async(req,res)=>{
    const subname=req.body.subject;
    const id= req.body.id;
    const check=await Subject.exists({subname:subname})
    console.log(req.body);
    if(!check){
        await Subject.create({
            subname:subname,
            files:id,
        }, function (err, result){
            if(err) res.json({
                error:err,
            })
            else res.json(result)
        }
        )
        // await Subject.updateOne({subname:subname},{$push:{files:id}}).exec();  
    }
    else{
        const ncheck=await Subject.exists({files:{$elemMatch:{$eq:id}}}).exec();
        console.log(!ncheck);
        if(!ncheck){
            await Subject.findOneAndUpdate({subname:subname},{$push:{files:id}},{new:true}).exec(function (err, result){
                if(err) res.json({
                    error:err,
                })
                else res.json(result)
                console.log(result);
            }); 
        }
        else{
            res.json(ncheck);
            console.log(ncheck);
        }
      
    }
});
router.post('/sem', upload.none(),async(req,res)=>{
    const sem=req.body.semester;
    const branch=req.body.branch;
    const id= req.body.id;
    const check=await Semester.exists({$and:[{sem:sem},{branch:branch}]}).exec();
    console.log(req.body);
    if(!check){
        
        await Semester.create({
            sem:sem,
            branch:branch,
            subjects:id,
        }, function (err, result){
            if(err) res.json({
                error:err,
            })
            else res.json(result)
        }
        )
    }
    else{
        const ncheck=await Semester.exists({$and:[{$and:[{sem:sem,branch:branch}]},{subjects:{$elemMatch:{$eq:id}}}]}).exec();
        console.log(ncheck);
        console.log("i m here")
        if(!ncheck){
            await Semester.updateOne({$and:[{sem:sem,branch:branch}]},{$push:{subjects:id}});
            return res.json({
             success:true
            })
        }
        else{
            return res.json({
                success:true
            })
        }
       
    }
});
router.get('/getSub/:branch/:sem',async(req,res)=>{
Semester.findOne({$and:[{branch:req.params.branch,sem:req.params.sem}]})
.populate({ 
    path: 'subjects',
    populate: {
      path: 'files',
      model: 'File'
    } 
 })
.exec(function(err,found){
    if(err ){
        throw err;
    }
    else if(!found){
    res.json([])
    }
    else{
        console.log(found);
        res.json(found.subjects.flatMap(s=>[s.subname]));
    }
})
})

router.get('/getNotes/:sub',async(req,res)=>{
Subject.findOne({subname:req.params.sub})
.populate({
    path:'files',
    match: {status:true}
})
.exec(function(err,found){
    if(err){
        throw err;
    }
    else if(!found){
        res.json([])
    }
    else{
        console.log(found.files);
        res.json(found.files);
    }
})
})

// GET route to fetch recent uploads within the last 30 days
router.get("/recentUploads", async (req, res) => {
    try {
      const currentDate = new Date();
      const fifteenDaysAgo = new Date(currentDate - 30 * 24 * 60 * 60 * 1000); // Calculate 15 days ago
  
      const recentUploads = await File.find({
        createdAt: { $gte: fifteenDaysAgo, $lte: currentDate },
        status: true,
      }).sort({ createdAt: -1 }); // Sort by descending order of creation date
  
      res.json(recentUploads);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
  
module.exports=router;