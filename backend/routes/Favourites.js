const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/all', async (req, res) => {
    fs.readdir(`public/${req.body.email}`, (err, files) => {
        if (err) {
            console.log("bugger", err);
            res.status(500).send("Unable to find public user folder")
            return;
        }
    res.json(files);
    });
});

module.exports = router;