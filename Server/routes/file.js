
const mongoose = require('mongoose');
const {GridFsStorage} = require('multer-gridfs-storage');
const router = require('express').Router();
const multer = require('multer');
const crypto = require('crypto');
const path = require('path');
const Grid = require('gridfs-stream');
require('dotenv').config();
eval(`Grid.prototype.findOne = ${Grid.prototype.findOne.toString().replace('nextObject', 'next')}`);

const mongoURI=process.env.MONGO_CONNECTION_URL;
const conn = mongoose.createConnection(mongoURI);
 let gfs;
conn.once('open', () => {
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'uploads',
  });
});

const storage = new GridFsStorage({
   url: mongoURI,
   options: { useUnifiedTopology: true },
   file: (req, file) => {
     return new Promise((resolve, reject) => {
       // use the crypto package to generate some random hex bytes
       crypto.randomBytes(16, (err, buf) => {
         if (err) {
           return reject(err);
         }
         const filename = buf.toString('hex') + path.extname(file.originalname);
         const fileInfo = {
           originalname:file.originalname,
           filename: filename,
           bucketName: 'uploads',
         };
         resolve(fileInfo);
       });
     });
   },
 });

// set up our multer to use the gridfs storage defined above
const store = multer({
   storage,
   limits: { fileSize: 200000000 },
   fileFilter: function (req, file, cb) {
     checkFileType(file, cb);
   },
 });

 function checkFileType(file, cb) {
   const filetypes = /jpg|jpeg|png/;
   const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
   const mimetype = filetypes.test(file.mimetype);
   if (mimetype && extname) return cb(null, true);
   cb('filetype');
 }

 const uploadMiddleware = (req, res, next) => {
   const upload = store.single('file');
   upload(req, res, function (err) {
     if (err instanceof multer.MulterError) {
       return res.status(400).send('File too large');
     } else if (err) {
       if (err === 'filetype') return res.status(400).send('PDF/DOC files only');
       return res.sendStatus(500);
     }
     next();
   });
 };
 router.post('/files', uploadMiddleware, (req, res) => {
   if (req.file) {
      return res.json({
         success: true,
         file: req.file
      });
   }
    res.send({ success: false });
});

 router.get('/:id', ({ params: { id } }, res) => {
   // if no id return error
   res.set({
    "Accept-Ranges": "bytes",
    "Content-Disposition": `attachment;`,
    "Content-Type": "application/pdf"
  });
   const _id = new mongoose.Types.ObjectId(id);
  gfs.find({ _id }).toArray((err, files) => {
    if (!files || files.length === 0)
      return res.status(400).send('no files exist');
    gfs.openDownloadStream(_id).pipe(res);
  });
 });


module.exports = router;