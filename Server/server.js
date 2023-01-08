const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const mongoose = require('mongoose');




const app=express();

const PORT=process.env.PORT || 5000;

const connectDB=require('./config/db');
connectDB();
/** Seting up server to accept cross-origin browser requests */
app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "http://localhost:5000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
// rs
// 
// app.use(logger('dev'));

// Put all API endpoints under '/api'
app.use('/api', require('./routes/file'));
app.use('/api',require('./routes/academic'));
app.use('/api',require('./routes/drive'));
app.use('/api',require('./routes/mailer'));
app.use('/api',require('./routes/events'));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Client","build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../Client", "build", "index.html"));
  });
}

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
})