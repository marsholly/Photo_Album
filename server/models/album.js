const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  name: {type: String, required: true},
  pic: {type: String, required: true},
  createAt: {type: Date, default: Date.now, required: true}
});




const Album = mongoose.model('Album', albumSchema);
module.exports = Album;
