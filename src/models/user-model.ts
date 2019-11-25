const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  username: String,
  favorites: Array,
  createdOn: Date,
  updatedOn: Date,
  deletedOn: Date,
  deleted: Boolean
})

const User = mongoose.model('User', UserSchema)
module.exports = User