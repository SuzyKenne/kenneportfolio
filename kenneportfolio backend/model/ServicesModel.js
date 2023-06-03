const mongoose = require("mongoose");

const ServicesShema = new mongoose.Schema({
    category: {
        type: String,
        required:[true, "please enter the name of your services"],
        unique: [true, "the name of your services must be unique"]
    },

    listofsevices:{
        type: String,
        required: [true, "please list yours sevices"]
    },


},{timestamps: true});

const Services = mongoose.model('Services', ServicesShema)
module.exports = Services;

