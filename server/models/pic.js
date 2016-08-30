const mongoose = require('mongoose');

const PicSchema = new mongoose.Schema({
  pic: {type: String, required: true},
  createAt: {type: Date, default: Date.now, required: true}
});

const Photo = mongoose.model('Photo', PicSchema);
module.exports = Photo;
