const express = require(`express`);
const router = express.Router();
const mongoose = require(`../node_modules/mongoose`);
let person = require(`../models/person`);


router.get(`/persons`, function(req,res,next){
    person.find(function(err, boludos){
        if (err) return next (err);
        res.json(boludos);
    })
})


module.exports=router;