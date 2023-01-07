const router = require('express').Router();
require('dotenv').config();
const multer = require("multer");
const nodemailer=require('nodemailer');
const upload = multer()

function  sendEmail(data){
    return new Promise((resolve,reject)=>{
        var transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:process.env.email,
                pass:process.env.password
            }
        })
        const mail_configs={
            from:process.env.email,
            to:data.body.to,
            subject:data.body.subject,
            html:`<p>Hello ${data.body.name},</p></br><p>${data.body.reply}</p></br><p>Here\'s what was received :${data.body.message}</p></br></br><p>Cheers!<p>`
        }
        transporter.sendMail(mail_configs,function(err,info){
            if(err){
                return reject({message:'An error occured'})
            }
            return resolve({message:"Email sent!"})
        })
    })
}
router.post('/send',upload.none(),async(req,res)=>{
    await sendEmail(req)
    .then(response=>res.send(response.message))
    .catch(error=>res.status(500).send(error.message))
})
module.exports=router;