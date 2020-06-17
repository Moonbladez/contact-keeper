const express = require("express")

const router = express.Router()
const {
    check,
    validationResult
} = require('express-validator');
const auth = require("../middleware/auth")

const User = require("../models/User.jsx");
const Contact = require("../models/Contact");
const {
    request
} = require("express");

//@ route GET api/contacts
//@desc Get all users contacts
//@access Private

router.get("/", auth, async (req, res) => {
    try {
        const contacts = await Contact.find({
            user: req.user.id
        }).sort({
            data: -1
        })
        res.json(contacts)
    } catch (err) {
        console.error(err.message)
        res.status(500).send("server error")
    }
})


//@ route POST api/contacts
//@desc Add new contact
//@access Private

router.post("/", (req, res) => {
    res.send("add contact")
})

//@ route PUT api/contacts/:id
//@desc Update contact
//@access Private

router.put("/:id", (req, res) => {
    res.send("update contact")
})


//@ route DELETE api/contacts/:id
//@desc Delete contact
//@access Private

router.delete("/:id", (req, res) => {
    res.send("delete contact")
})



module.exports = router