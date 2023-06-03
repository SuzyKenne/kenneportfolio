const mongoose = require ("mongoose");

const ExperienceSchema = new mongoose.Schema({
    category:{
        title: String,
        required:[true,"enter the of the category"],
        unique :[true, "the category name should be unique"],

    },
    Skill:  {
        type: String,
        required:[true , "please enter the title" ],
        unique :[true, "please skill name should be unique "]

    },

    SkillLevel: {

        type: String,
        required: [true, "enter your skill level"]
    },



},{timestamps:true});

const Experience = mongoose.model ('Experience',ExperienceSchema)
module.exports= Experience;