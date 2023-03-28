const mongoose = require('mongoose');

const serviceProviders = new Schema({
    businessname: String,
    phoneNumber: String,
    password: String,
    email: String,
    password: String,
    address: String,
    description: String,
});

const user = new Schema({
    name: String,
    phoneNumber: String,
    password: String,
    email: String,
    password: String,
    address: String,
})