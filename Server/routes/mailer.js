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

function  sendValidator(data){
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
            to:process.env.email,
            subject:"Action Required: Validate the Newly Uploaded File",
            html:`<p>A new file <i>${data.body.message}</i> has been uploaded by <i>${data.body.name}</i>.</p><br></br><p>  Check this out:https://drive.google.com/file/d/${data.body.viewId}/view?usp=drivesdk </p></br></br></br></br> <p>  Click the link to mark it as uploaded: https://sahpathi.co.in/api/validate/${data.body.fileId}</p>`
        }
        transporter.sendMail(mail_configs,function(err,info){
            if(err){
                return reject({message:'An error occured'})
            }
            return resolve({message:"Email sent!"})
        })
    })
}

router.post('/send', upload.none(), async (req, res) => {
    try {
      const [emailResponse, validatorResponse] = await Promise.all([
        sendEmail(req),
        sendValidator(req)
      ]);
  
      res.send(`Sent Successfully!`);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal server error.');
    }
  });
module.exports=router;