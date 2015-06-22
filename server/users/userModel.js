var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fb_id: { type: Number, required: true, unique: true },
  email: { type: String }, 
  username: { type: Number, required: true, unique: true }
});

module.exports = mongoose.model('User', UserSchema);
