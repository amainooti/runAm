const mongoose = require('mongoose');

const tagsSchema = new mongoose.Schema({
    skill: {
        type: String,
        required: true,
        set: capitalizeFirstLetter,
    },
})



function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.substing(1).toLowerCase();
}

const Tag = mongoose.model('Tag', tagsSchema)

module.exports = {
    Tag
}