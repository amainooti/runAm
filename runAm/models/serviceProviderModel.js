const mongoose = require('mongoose');

const serviceProviderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    skill: {
        type: String
    },
    file: {
        data: Buffer,
        contentType: String,
  },
    openingTime: {
        type: Date,
    },
    closingTime: {
        type: Date,
    },
    tag: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag"
    },
    price: {
        type: String
    }
});



const ServiceProvider = mongoose.model('ServiceProvider', serviceProviderSchema)

module.exports = {
    ServiceProvider
}