const mongoose = require('mongoose');

const Email_listing = mongoose.Schema({
    email:{type:String}
})

module.exports = mongoose.model('Email_liting',Email_listing)