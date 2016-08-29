const express = require('express');
const router = express.Router();
const Album = require('../models/album');

router.route('/')
  .get((req, res)=>{
    Album.find({}, (err, albums)=>{
      res.status(err ? 400 :200).send(err || albums);
    })
  })
  .post((req, res)=>{
    Album.create(req.body, (err, album)=>{
      if(err){
        return res.status(400).send(err);
      }
      res.send(album);
    });
  });


router.route('/:id')
  .get((req, res) =>{
    Album.findById(req.params.id, (err, album)=>{
      if(err || !album){
        return res.status(400).send(err || 'Album not found');
      }
      res.send(album);
    })
  })
  .delete((req, res) => {
    Album.findByIdAndRemove(req.params.id, err => {
      if(err){
        return res.status(400).send(err);
      }
      Album.find({}, (err, albums) =>{
        res.status(err? 400 : 200).send(err || albums);
      })
    })
  })
  .put((req, res) => {
    Album.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, album) => {
      if(err){
        return res.status(400).send(err);
      }
      Album.find({}, (err,albums) =>{
        res.status(err ? 400 : 200).send(err || albums);
      })
    })
  })

// router.route('/lookup/:zipcode')
//   .get((req, res) => {
//     Album.find({zipcode: req.params.zipcode}, (err, albums) => {
//       if(err|| !albums){
//         return res.status(400).send(err || 'Album not found');
//       }
//       res.send(albums);
//     });
//   })
//
// router.route('/lookup/price/:low/:high')
//   .get((req, res) => {
//     Album
//       .where('price').gte(req.params.low).lte(req.params.high)
//       .where('buyer', { $exists :false } )
//       .exec((err, albums )=>{
//         if(err|| !albums){
//           return res.status(400).send(err || 'Album not found');
//         }
//         res.send(albums);
//       });
//   })
//
// router.route('/lookup/bed/:low/:high')
//   .get((req, res) => {
//     Album
//       .where('beds').gte(req.params.low).lte(req.params.high)
//       .where('buyer', {$exists : false}  )
//       .exec((err, albums) => {
//         if(err|| !albums){
//           return res.status(400).send(err || 'Album not found');
//         }
//         res.send(albums);
//       });
//   })


module.exports = router;
