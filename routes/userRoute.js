const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.route("/create").post((req, res)=> {
    const Fname= req.body.Fname;
    const Lname= req.body.Lname;
    const Gender= req.body.Gender;
    const DoB= req.body.DoB;
    const City= req.body.City;
    const Phone= req.body.Phone;
    const Email= req.body.Email;

    const newUser = new User({
        Fname,
        Lname,
        Gender,
        DoB,
        City,
        Phone,
        Email
    });

    newUser.save();
});

router.route("/users").get((req,res) =>{
    User.find()
       .then(foundUsers => res.json(foundUsers))
})

module.exports = router;