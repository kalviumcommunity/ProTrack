const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    Title : String,
    Body : String
})

const Notification = mongoose.model('notification', notificationSchema );

module.exports = Notification;
