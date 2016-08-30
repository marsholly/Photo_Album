const express = require('express');
const router = express.Router();
const Album = require('../models/album');

router.route('/')
  .get((req, res)=>{
    Album.find({}, (err, albums)=>{
      res.status(err ? 400 :200).send(err || albums);
    }).populate('Photo')
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
    }).populate('Photo')
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
      }).populate('Photo')
    })
  })


  router.put('/:albumId/addPhoto/:photoId', (req, res) => {
    Album.findById(req.params.albumId, (err, album) => {
      if (err || !album) {
        return res.status(400).send(err || 'Album not found.');
      }

      let photoId = req.params.photoId
      album.photos.push(photoId);
      album.save((err, savedAlbum) => {
        res.status(err ? 400: 200).send(err || savedAlbum);
      })
    })
  })







module.exports = router;
