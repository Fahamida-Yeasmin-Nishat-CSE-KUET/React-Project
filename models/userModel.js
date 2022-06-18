const mongoose = require("mongoose");

const usersSchema = {
    Fname: String,
    Lname: String,
    Gender: String,
    DoB: String,
    City: String,
    Phone: String,
    Email: String
}

const User = mongoose.model("User", usersSchema);

module.exports = User;