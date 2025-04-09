
const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({

    name: { type: String, required: true },

    phone: { type: String,required: true },

    email: { type: String, required: true },

    address: { type: String, required: true }
});

const ContactModel = mongoose.model("contacts", ContactSchema);

module.exports = ContactModel;
