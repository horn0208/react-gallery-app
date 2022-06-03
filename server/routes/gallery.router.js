const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
//for BASE MODE:
// const galleryItems = require('../modules/gallery.data');
const galleryItems = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    res.sendStatus(200);
}); // END PUT Route

// GET Route BASE MODE:
// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route

// GET Route to database:
router.get('/', (req, res)=>{
    console.log('in router GET');
    const queryString = `SELECT * FROM gallery;`;
    pool.query(queryString).then((result)=>{
        res.send(result.rows);
    }).catch((err)=>{
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;