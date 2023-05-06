const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/all', async (req, res) => {
    const exists = fs.existsSync(`public/${req.body.email}`);
    if (!exists) {
        res.status(202).send({message : "User has no favourites yet"})
        return;
    }
    fs.readdir(`public/${req.body.email}`, (err, files) => {
        if (err) {
            console.log("bugger", err);
            res.status(500).send("Unable to find public user folder")
            return;
        }
    res.status(200).json(files);
    });
});

module.exports = router;