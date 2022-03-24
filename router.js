const express = require("express");
const router = express.Router();
const path = require('path');

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/components/home.js'));
  })

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/components/login.js'));
})


router.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/components/signup.js'));
})


router.get('/customer/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/components/profile.js'));
})


router.get('/customer', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/components/customerList.js'));
})

module.exports=router;