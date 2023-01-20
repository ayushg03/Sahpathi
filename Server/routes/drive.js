const stream = require("stream");
const express = require("express");
const router = require('express').Router();
const fs = require('fs');
const multer = require("multer");
const path = require("path");
const crypto = require('crypto');
const { google } = require("googleapis");
const { application } = require("express");
 

const upload = multer();
 
const KEYFILEPATH = path.join("./", "credentials.json");
const SCOPES = ["https://www.googleapis.com/auth/drive"];
 
const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

const uploadFile = async (fileObject) => {
    const bufferStream = new stream.PassThrough();

    bufferStream.end(fileObject.buffer);
    const { data } = await google.drive({ version: "v3", auth }).files.create({
      media: {
        mimeType: fileObject.mimetype,
        body: bufferStream,
      },
      requestBody: {
        
        name:fileObject.originalname,
        parents: ["19peyGXPXBIpaOcT3G9SMSt2BK6o2MDKA"],
      },
      fields: "id,name,size",
    });
    console.log(`Uploaded file ${data.name} ${data.id}`);
    return {
        id:data.id,
        size:data.size,
        name:data.name,
    }
  };

  async function generatePublicUrl(fileId) {
    try {
      await google.drive({ version: "v3", auth }).permissions.create({
        fileId: fileId,
        requestBody: {
          role: 'reader',
          type: 'anyone',
        },
      });
  
      /* 
      webViewLink: View the file in browser
      webContentLink: Direct download link 
      */
      const result = await google.drive({ version: "v3", auth }).files.get({
        fileId: fileId,
        fields: 'webViewLink, webContentLink',
      });
      console.log(result.data);
      return {
        view: result.data.webViewLink,
        download: result.data.webContentLink
      }
    } catch (error) {
      console.log(error.message);
    }
  }
router.post("/upload", upload.any(), async (req, res) => {
    try {
        
        console.log(req.files);
        const {  files } = req;
        let arr;
        for (let f = 0; f < files.length; f += 1) {
          arr=await uploadFile(files[f]);
        }
      res.json(arr);
    } catch (f) {
      res.send(f.message);
    }
  });

  router.get("/download/:id",async(req,res)=>{
    try{
       const data= await generatePublicUrl(req.params.id);
       res.json(data);
       
    }
    catch(e){
        res.send(e);
    }
  })
   
  module.exports = router;
