const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://fahamida_nits:nits1607085@cluster0.r7urqur.mongodb.net/usersDB")

app.use("/", require("./routes/userRoute"));

app.listen(3001, function() { 
    console.log("Server is running on port 3001");
})