const axios = require('axios');
const express = require('express');
const router = express.Router();
// add dotenv config to the server...
require('dotenv').config();

const GIPHY_KEY = process.env.GIPHY_API_KEY;

router.get('/:search', (req, res) => {
    const search = req.params.search;
    console.log(search);
    axios.get(
        `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${search}`
    )
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(err => {
        console.log(err);
        res.sendStatus(500);
    });
})

module.exports = router;