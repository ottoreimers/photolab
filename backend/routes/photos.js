const express = require('express');
const photoRoutes = express.Router();
const dbo = require('../db/conn');
const multer = require('multer');
const Aws = require('aws-sdk');
const Photo = require('../models/photo.model');
require('dotenv');
const ObjectId = require('mongodb').ObjectId;

// Storage
const storage = multer.memoryStorage({
  destination: function(req, file, cb) {
    cb(null, '')
  }
});

// Check type
const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
    cb (null, true);
  } else {
    cb(null, false);
  }
};

// Define upload variable for the configuration of photo being uploaded
const upload = multer({ storage: storage, filefilter: fileFilter });

// S3 instance
const s3 = new Aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET
})

photoRoutes.post('/photo/add', upload.single('photo_url'), (req, res) => {

})

// Gett all photos
// photoRoutes.route('/photo').get(function(req, res) {
//   let db_connect = dbo.getDb('images');
//   db_connect
//     .collection('photos')
//     .find({})
//     .toArray(function(err, result) {
//       if(err) throw err;
//       res.json(result);
//     });
// });

// // Get one photo
// photoRoutes.route('/photo/:id').get(function(req, res) {
//   let db_connect = dbo.getDb();
//   let myquery = {_id: ObjectId( req.params.id )};
//   db_connect
//     .collection('photos')
//     .findOne(myquery, function(err, result) {
//       if (err) throw err;
//       res.json(result);
//     });
// });

// // Post a photo
// photoRoutes.route('/photo/add').post(function (req, response) {
//   let db_connect = dbo.getDb();
//   let myobj = {
//     photo_title: req.body.photo_title,
//     photo_url: req.body.photo_url
//   };
//   db_connect.collection('photos').insertOne(myobj, function(err, res) {
//     if(err) throw err;
//     response.json(res);
//   });
// });

// // Update a photo
// photoRoutes.route("/update/:id").put(function (req, response) {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId( req.params.id )};
//   let newvalues = {
//     $set: {
//       photo_title: req.body.photo_title,
//       photo_url: req.body.photo_url,
//     },
//   };
//   db_connect
//     .collection("photos")
//     .updateOne(myquery, newvalues, function (err, res) {
//       if (err) throw err;
//       console.log("1 photo updated");
//       response.json(res);
//     });
// });

// // Delete a photo
// photoRoutes.route("/:id").delete((req, response) => {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId( req.params.id )};
//   db_connect.collection("photos").deleteOne(myquery, function (err, obj) {
//     if (err) throw err;
//     console.log("1 photo deleted");
//     response.status(obj);
//   });
// });

module.exports = photoRoutes;